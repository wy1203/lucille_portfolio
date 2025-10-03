import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface MusicContextType {
  isMusicPlaying: boolean;
  volume: number;
  toggleMusic: () => void;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/assets/sound/Main.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Set initial volume to 50%
    audioRef.current = audio;

    // Add event listeners to sync state with actual playback
    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Auto-play music when component mounts
    const playMusic = async () => {
      try {
        await audio.play();
        console.log('Music started playing');
      } catch (error) {
        console.log('Auto-play blocked by browser. Click anywhere to start music.');
        setIsMusicPlaying(false);
      }
    };

    // Try to play immediately
    playMusic();

    // Cleanup
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Playback failed:', err);
        });
      }
    }
  };

  const setVolume = (newVolume: number) => {
    const volumeValue = newVolume / 100;
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
      console.log('Volume changed to:', volumeValue, '(', newVolume, '%)');

      // If volume is being set and music isn't playing, try to start it
      if (!isMusicPlaying && volumeValue > 0) {
        audioRef.current.play().catch(err => {
          console.log('Could not auto-play when volume changed:', err);
        });
      }
    }
  };

  return (
    <MusicContext.Provider value={{ isMusicPlaying, volume, toggleMusic, setVolume }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};