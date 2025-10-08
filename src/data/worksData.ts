// Import types first
import { WorkDetail } from "./types";
import { scobyWork } from "./works/scoby";
import { iceyWork } from "./works/icey";
import { hyphaeNestWork } from "./works/hyphae_nest";
import { nimbusWork } from "./works/nimbus";
import { bikewalkWork } from "./works/bikewalk";
import { cornellClassWork } from "./works/cornell_class";
import { boatExhibitWork } from "./works/boat_exhibit";

// Re-export all types
export * from "./types";

// Export combined works array
export const worksData: WorkDetail[] = [scobyWork, iceyWork, hyphaeNestWork, nimbusWork, bikewalkWork, cornellClassWork, boatExhibitWork];
