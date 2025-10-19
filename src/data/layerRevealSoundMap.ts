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

// Available sound files in the sound_effects folder
type SoundFileName =
  | "cat_meow.wav"
  | "ufo.mp3"
  | "clap.wav"
  | "pencil.wav"
  | "baby_alien.mp3";

// Easy mapping: Just specify which rect plays which sound!
// Ordered by x position (left to right), then y position (top to bottom)
// Format: { id, bounds, sound }
const layerRevealMapping: Array<{
  id: string;
  bounds: { x: number; y: number; width: number; height: number };
  sound: SoundFileName;
}> = [
  // Left side (x: 0-204)
  {
    id: "layer-reveal-rect-11",
    bounds: { x: 0, y: 332, width: 157, height: 298 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-10",
    bounds: { x: 0, y: 667, width: 141, height: 119 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-9",
    bounds: { x: 157, y: 727, width: 98, height: 138 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-12",
    bounds: { x: 204, y: 213, width: 132, height: 142 },
    sound: "cat_meow.wav",
  },
  // Middle (x: 255-385)
  {
    id: "layer-reveal-rect-8",
    bounds: { x: 255, y: 991, width: 109, height: 119 },
    sound: "pencil.wav",
  },
  {
    id: "layer-reveal-rect-7",
    bounds: { x: 385, y: 991, width: 107, height: 119 },
    sound: "pencil.wav",
  },
  // Right side (x: 1738-1883)
  {
    id: "layer-reveal-rect-6",
    bounds: { x: 1738, y: 255, width: 98, height: 147 },
    sound: "baby_alien.mp3",
  },
  {
    id: "layer-reveal-rect-2",
    bounds: { x: 1774, y: 806, width: 94, height: 102 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-4",
    bounds: { x: 1787, y: 579, width: 140, height: 93 },
    sound: "clap.wav",
  },
  {
    id: "layer-reveal-rect-1",
    bounds: { x: 1821, y: 1016, width: 113, height: 88 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-5",
    bounds: { x: 1883, y: 230, width: 117, height: 209 },
    sound: "ufo.mp3",
  },
  {
    id: "layer-reveal-rect-3",
    bounds: { x: 1883, y: 727, width: 117, height: 276 },
    sound: "ufo.mp3",
  },
];

// Convert the mapping to the final format with full sound file paths
export const layerSoundHotspots: LayerSoundHotspot[] = layerRevealMapping.map(
  (item) => ({
    id: item.id,
    bounds: item.bounds,
    soundFile: `${SOUND_ASSET_BASE}/${item.sound}`,
  })
);
