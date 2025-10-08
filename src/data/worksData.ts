// Import types first
import { WorkDetail } from "./types";
import { scobyWork } from "./works/scoby";
import { iceyWork } from "./works/icey";

// Re-export all types
export * from "./types";

// Export combined works array
export const worksData: WorkDetail[] = [scobyWork, iceyWork];
