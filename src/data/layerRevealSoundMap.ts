// Rectangular interaction zones sourced from public/main_background/layer_reveal.svg.
// Each hotspot is paired with one of the available sound effects under
// public/main_background/sound_effects.
export interface LayerSoundHotspot {
  id: string;
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  soundFile: string;
}

export const layerRevealDimensions = {
  width: 2000,
  height: 1294,
} as const;

const SOUND_ASSET_BASE = "/main_background/sound_effects";

const AVAILABLE_SOUND_FILES = ["cat_meow.wav", "ufo.mp3"] as const;

const rawLayerRevealRectangles: Array<Omit<LayerSoundHotspot, "soundFile">> = [
  { id: "layer-reveal-rect-1", bounds: { x: 1821, y: 1016, width: 113, height: 88 } },
  { id: "layer-reveal-rect-2", bounds: { x: 1774, y: 806, width: 94, height: 102 } },
  { id: "layer-reveal-rect-3", bounds: { x: 1883, y: 727, width: 117, height: 276 } },
  { id: "layer-reveal-rect-4", bounds: { x: 1787, y: 579, width: 140, height: 93 } },
  { id: "layer-reveal-rect-5", bounds: { x: 1883, y: 230, width: 117, height: 209 } },
  { id: "layer-reveal-rect-6", bounds: { x: 1738, y: 255, width: 98, height: 147 } },
  { id: "layer-reveal-rect-7", bounds: { x: 385, y: 991, width: 107, height: 119 } },
  { id: "layer-reveal-rect-8", bounds: { x: 255, y: 991, width: 109, height: 119 } },
  { id: "layer-reveal-rect-9", bounds: { x: 157, y: 727, width: 98, height: 138 } },
  { id: "layer-reveal-rect-10", bounds: { x: 0, y: 667, width: 141, height: 119 } },
  { id: "layer-reveal-rect-11", bounds: { x: 0, y: 332, width: 157, height: 298 } },
  { id: "layer-reveal-rect-12", bounds: { x: 204, y: 213, width: 132, height: 142 } },
];

const hashIdToSoundIndex = (id: string, soundCount: number) => {
  const hash = Array.from(id).reduce((acc, char) => acc * 31 + char.charCodeAt(0), 7);
  return Math.abs(hash) % soundCount;
};

export const layerSoundHotspots: LayerSoundHotspot[] = rawLayerRevealRectangles.map((rect) => {
  const soundIndex = hashIdToSoundIndex(rect.id, AVAILABLE_SOUND_FILES.length);
  const soundFile = `${SOUND_ASSET_BASE}/${AVAILABLE_SOUND_FILES[soundIndex]}`;

  return {
    ...rect,
    soundFile,
  };
});

