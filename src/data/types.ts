export type ContentBlockType =
  | "text"
  | "title"
  | "list"
  | "image"
  | "image-pair"
  | "image-trio"
  | "image-grid"
  | "image-full"
  | "video"
  | "spacer";

export interface BaseContentBlock {
  id?: string;
  type: ContentBlockType;
  marginTop?: string;
  marginBottom?: string;
}

export interface TextBlock extends BaseContentBlock {
  type: "text";
  content: string;
  size?: "normal" | "large" | "small";
  emphasis?: boolean;
}

export interface TitleBlock extends BaseContentBlock {
  type: "title";
  content: string;
  size?: "small" | "medium" | "large" | "xlarge" | string; // Preset sizes or custom CSS value (e.g., "3rem", "48px")
  color?: string; // CSS color value (e.g., "#000", "rgb(0,0,0)", "var(--primary)")
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold" | number; // CSS font-weight
  lineHeight?: string; // CSS line-height value
  letterSpacing?: string; // CSS letter-spacing value
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
}

export interface ListBlock extends BaseContentBlock {
  type: "list";
  listType: "ordered" | "unordered";
  items: Array<string | { content: string; subItems?: string[] }>;
  size?: "normal" | "large" | "small";
}

export interface ImageBlock extends BaseContentBlock {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
  size?: "small" | "medium" | "large" | "full";
  aspectRatio?: "square" | "landscape" | "portrait" | "auto";
}

export interface ImagePairBlock extends BaseContentBlock {
  type: "image-pair";
  images: Array<{
    src: string;
    alt?: string;
    caption?: string;
    size?: number; // 1-100, represents percentage of available space
  }>;
  layout?: "equal" | "left-heavy" | "right-heavy" | "top-bottom" | "custom";
  gap?: "small" | "medium" | "large";
}

export interface ImageTrioBlock extends BaseContentBlock {
  type: "image-trio";
  layout?: "left-right" | "top-bottom" | "horizontal"; // "left-right" is default (1 left, 2 right), "top-bottom" (1 top, 2 bottom), "horizontal" (3 images in a row)
  leftImage?: {
    src: string;
    alt?: string;
    caption?: string;
    size?: number; // 1-100, percentage of total width for left image
  };
  rightImages?: Array<{
    src: string;
    alt?: string;
    caption?: string;
    size?: number; // 1-100, percentage of right column height for each image
  }>;
  topImage?: {
    src: string;
    alt?: string;
    caption?: string;
    height?: string; // Custom height for top image
    position?: string; // CSS object-position value (e.g., "center", "top", "50% 30%")
  };
  bottomImages?: Array<{
    src: string;
    alt?: string;
    caption?: string;
    size?: number; // 1-100, percentage of bottom row width for each image
  }>;
  horizontalImages?: Array<{
    src: string;
    alt?: string;
    caption?: string;
    size?: number; // 1-100, percentage of total row width for each image
  }>;
  gap?: "small" | "medium" | "large";
}

export interface ImageGridBlock extends BaseContentBlock {
  type: "image-grid";
  images: Array<{
    src: string;
    alt?: string;
    caption?: string;
    span?: number;
    height?: string; // Custom height for individual images (e.g., "200px", "50vh")
    position?: string; // CSS object-position value (e.g., "center", "top", "50% 30%")
    objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none"; // CSS object-fit value
  }>;
  columns?: 2 | 3 | 4;
  gap?: "small" | "medium" | "large";
}

export interface ImageFullBlock extends BaseContentBlock {
  type: "image-full";
  src: string;
  alt?: string;
  caption?: string;
  height?: "small" | "medium" | "large" | "viewport" | string; // Support custom percentage/pixel values
  width?: "small" | "medium" | "large" | "full" | string; // Support custom percentage/pixel values
}

export interface VideoBlock extends BaseContentBlock {
  type: "video";
  src: string;
  title?: string;
  caption?: string;
  thumbnail?: string; // Optional thumbnail image to show before playing
  size?: "small" | "medium" | "large" | "full";
}

export interface SpacerBlock extends BaseContentBlock {
  type: "spacer";
  size?: "small" | "medium" | "large";
}

export type ContentBlock =
  | TextBlock
  | TitleBlock
  | ListBlock
  | ImageBlock
  | ImagePairBlock
  | ImageTrioBlock
  | ImageGridBlock
  | VideoBlock
  | ImageFullBlock
  | SpacerBlock;

export interface Section {
  title: string;
  blocks: ContentBlock[];
}

export interface WorkDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  thumbnailImagePos?: string;
  thumbnailImageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  heroImage: string;
  heroImagePosition?: string; // CSS object-position value or "50% 50%"
  heroImageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
  client?: string;
  role: string;
  timeline: string;
  team?: string;
  skills?: string[];
  sections: {
    overview: Section;
    strategyAndAnalysis?: Section;
    designSolution?: Section;
    impactAndResults?: Section;
    reflection?: Section;
    challenge?: Section;
    solution?: Section;
    impact?: Section;
    [key: string]: Section | undefined;
  };
}
