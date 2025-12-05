// Import workdetails
import { WorkDetail } from "./types";
import { scobyWork } from "./works/scoby";
import { iceyWork } from "./works/icey";
import { hyphaeNestWork } from "./works/hyphae_nest";
import { nimbusWork } from "./works/nimbus";
import { bikewalkWork } from "./works/bikewalk";
import { cornellClassWork } from "./works/cornell_class";
import { miamiWork } from "./works/miami";
import { haworthWork } from "./works/haworth";
// import { boatExhibitWork } from "./works/boat_exhibit";
// import { programmingCornellMakerspaceWork } from "./works/programming_cornell_makerspace";

// Export all types
export * from "./types";

// Export combined works array
export const worksData: WorkDetail[] = [
  scobyWork,
  iceyWork,
  hyphaeNestWork,
  cornellClassWork,
  bikewalkWork,
  nimbusWork,
  miamiWork,
  haworthWork,
];
