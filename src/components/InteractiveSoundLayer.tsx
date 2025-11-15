import React, { useRef, useState, useEffect, useCallback } from 'react';
import { layerSoundHotspots, layerRevealDimensions } from '../data/layerRevealSoundMap';
import '../styles/InteractiveSoundLayer.css';

interface InteractiveSoundLayerProps {
  className?: string;
}

const InteractiveSoundLayer: React.FC<InteractiveSoundLayerProps> = ({ className = '' }) => {
  const [hoveredRect, setHoveredRect] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeHotspotRef = useRef<string | null>(null);

  const playSound = useCallback((soundFile: string) => {
    if (!soundFile) {
      return;
    }

    let audio = audioRefs.current[soundFile];

    if (!audio) {
      const resolvedPath =
        /^https?:\/\//i.test(soundFile)
          ? soundFile
          : `${process.env.PUBLIC_URL || ''}${soundFile.startsWith('/') ? soundFile : `/${soundFile}`}`;

      audio = new Audio(resolvedPath);
      audio.preload = 'auto';
      audio.muted = false;
      audio.volume = 1;
      if (process.env.NODE_ENV !== 'production') {
        audio.addEventListener('error', () => {
          console.warn(`[InteractiveSoundLayer] Failed to load sound "${resolvedPath}".`);
        });
      }
      audioRefs.current[soundFile] = audio;
    }

    if (!audio.paused) {
      try {
        audio.pause();
      } catch {
        // Ignore if browser throws while trying to pause.
      }
    }

    try {
      audio.currentTime = 0;
    } catch {
      // Ignore if resetting fails before the first playback.
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch((error) => {
        // Surface a single warning for easier debugging.
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[InteractiveSoundLayer] Unable to play sound "${soundFile}":`, error);
        }
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      const currentAudioRefs = audioRefs.current;
      Object.values(currentAudioRefs).forEach((audio) => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const { width: baseWidth, height: baseHeight } = layerRevealDimensions;

    const getHotspotAtPoint = (clientX: number, clientY: number) => {
      const bounds = container.getBoundingClientRect();
      if (!bounds.width || !bounds.height) {
        return null;
      }
      if (
        clientX < bounds.left ||
        clientX > bounds.right ||
        clientY < bounds.top ||
        clientY > bounds.bottom
      ) {
        return null;
      }
      if (!bounds.width || !bounds.height) {
        return null;
      }

      const localX = clientX - bounds.left;
      const localY = clientY - bounds.top;

      const scale = Math.max(bounds.width / baseWidth, bounds.height / baseHeight);
      const renderedWidth = baseWidth * scale;
      const renderedHeight = baseHeight * scale;
      const offsetX = (bounds.width - renderedWidth) / 2;
      const offsetY = (bounds.height - renderedHeight) / 2;

      const imageX = localX - offsetX;
      const imageY = localY - offsetY;

      if (imageX < 0 || imageY < 0 || imageX > renderedWidth || imageY > renderedHeight) {
        return null;
      }

      const svgX = imageX / scale;
      const svgY = imageY / scale;

      return layerSoundHotspots.find((hotspot) => {
        const { x, y, width, height } = hotspot.bounds;
        return svgX >= x && svgX <= x + width && svgY >= y && svgY <= y + height;
      }) ?? null;
    };

    let rafId: number | null = null;

    const updateHoverState = (clientX: number, clientY: number) => {
      const hotspot = getHotspotAtPoint(clientX, clientY);
      const hotspotId = hotspot?.id ?? null;

      if (hotspotId !== activeHotspotRef.current) {
        activeHotspotRef.current = hotspotId;
        setHoveredRect(hotspotId);
      }

      document.body.style.cursor = hotspot ? 'pointer' : 'auto';
    };

    const scheduleHoverUpdate = (clientX: number, clientY: number) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        updateHoverState(clientX, clientY);
        rafId = null;
      });
    };

    const triggerSoundAtPoint = (clientX: number, clientY: number) => {
      const hotspot = getHotspotAtPoint(clientX, clientY);
      if (hotspot) {
        playSound(hotspot.soundFile);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      scheduleHoverUpdate(event.clientX, event.clientY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      scheduleHoverUpdate(event.clientX, event.clientY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        scheduleHoverUpdate(touch.clientX, touch.clientY);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      scheduleHoverUpdate(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      if (touch) {
        triggerSoundAtPoint(touch.clientX, touch.clientY);
      }
    };

    const handleClick = (event: MouseEvent) => {
      triggerSoundAtPoint(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      activeHotspotRef.current = null;
      setHoveredRect(null);
      document.body.style.cursor = 'auto';
    };

    const supportsPointerEvents = typeof window !== 'undefined' && 'PointerEvent' in window;
    const passiveTouchOptions: AddEventListenerOptions = { passive: true };

    if (supportsPointerEvents) {
      window.addEventListener('pointermove', handlePointerMove);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('click', handleClick, true);
    window.addEventListener('touchstart', handleTouchStart, passiveTouchOptions);
    window.addEventListener('touchmove', handleTouchMove, passiveTouchOptions);
    window.addEventListener('touchend', handleTouchEnd, passiveTouchOptions);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (supportsPointerEvents) {
        window.removeEventListener('pointermove', handlePointerMove);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('click', handleClick, true);
      window.removeEventListener('touchstart', handleTouchStart, passiveTouchOptions);
      window.removeEventListener('touchmove', handleTouchMove, passiveTouchOptions);
      window.removeEventListener('touchend', handleTouchEnd, passiveTouchOptions);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      document.body.style.cursor = 'auto';
    };
  }, [playSound]);

  return (
    <div ref={containerRef} className={`interactive-sound-layer ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${layerRevealDimensions.width} ${layerRevealDimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {layerSoundHotspots.map((rect) => (
          <rect
            key={rect.id}
            x={rect.bounds.x}
            y={rect.bounds.y}
            width={rect.bounds.width}
            height={rect.bounds.height}
            fill="transparent"
            className={`sound-rect ${hoveredRect === rect.id ? 'hovered' : ''}`}
          />
        ))}
      </svg>
    </div>
  );
};

export default InteractiveSoundLayer;
