export type ContentBlockType =
  | "text"
  | "list"
  | "image"
  | "image-pair"
  | "image-trio"
  | "image-grid"
  | "image-full"
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
  layout?: "equal" | "left-heavy" | "right-heavy" | "custom";
  gap?: "small" | "medium" | "large";
}

export interface ImageTrioBlock extends BaseContentBlock {
  type: "image-trio";
  layout?: "left-right" | "top-bottom"; // "left-right" is default (1 left, 2 right), "top-bottom" is required to add(1 top, 2 bottom)
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
  gap?: "small" | "medium" | "large";
}

export interface ImageGridBlock extends BaseContentBlock {
  type: "image-grid";
  images: Array<{
    src: string;
    alt?: string;
    caption?: string;
    span?: number;
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

export interface SpacerBlock extends BaseContentBlock {
  type: "spacer";
  size?: "small" | "medium" | "large";
}

export type ContentBlock =
  | TextBlock
  | ListBlock
  | ImageBlock
  | ImagePairBlock
  | ImageTrioBlock
  | ImageGridBlock
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
    challenge?: Section;
    solution?: Section;
    impact?: Section;
    reflection?: Section;
    [key: string]: Section | undefined;
  };
}

export const worksData: WorkDetail[] = [
  {
    id: 1,
    title: "The SCOBY Spot",
    category: "Retail Store Design",
    description: "Kombucha tea store promoting wellness and community",
    thumbnail: "/work_details/scoby/hero.png",
    thumbnailImagePos: "50% 90%",
    thumbnailImageFit: "cover",
    heroImage: "/work_details/scoby/hero.png",
    heroImagePosition: "50% 90%",
    heroImageFit: "cover",
    client: "Academic design project (Cornell DEA, 2024)",
    role: "Lead Designer",
    timeline: "2024",
    skills: [
      "Retail Design",
      "Spatial Planning",
      "Biophilic Design",
      "Human-Centered Design",
      "Revit",
      "D5 Rendering",
    ],
    sections: {
      overview: {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content:
              "**Offerings**: The SCOBY Spot is a kombucha tea + pastry store that doubles as a relax and study space in the heart of Ithaca Commons. This tea store serves various kombucha flavored tea, pastry and brewing services. The space offers kombucha flights, flavored pastries, and interactive brewing experiences. Its programming and layout promote both individual retreat and social engagement, positioning the store as a cultural and wellness anchor within Ithaca Commons.",
            size: "large",
          },
          {
            type: "image-trio",
            layout: "top-bottom",
            topImage: {
              src: "/work_details/scoby/1.5.png",
              height: "70px",
              position: "50% 40%",
            },
            bottomImages: [
              {
                src: "/work_details/scoby/2left.png",
                alt: "Interior perspective showing hexagonal framework",
                caption: "Main interior view with hexagonal ceiling",
                size: 60,
              },
              {
                src: "/work_details/scoby/2right.png",
                alt: "Seating area with organic design elements",
                caption: "Pod seating area with biophilic elements",
                size: 39,
              },
            ],
            gap: "small",
          },
          {
            type: "image-pair",
            images: [
              {
                src: "/work_details/scoby/3left.png",
                alt: "Interior perspective showing hexagonal framework",
                caption: "Main interior view with hexagonal ceiling",
              },
              {
                src: "/work_details/scoby/3right.png",
                alt: "Seating area with organic design elements",
                caption: "Pod seating area with biophilic elements",
              },
            ],
            layout: "right-heavy",
            gap: "medium",
          },
          {
            type: "text",
            content:
              "**Design inspiration**: Inspiration was drawn from the organic branching patterns of trees. The structure integrates a hexagonal wooden framework, elevated pod seating, and soft natural lighting to create a restorative, biophilic environment. Every design decision—from large glass windows to warm wooden textures—was made to connect people with nature and foster mindful relaxation.",
            size: "large",
          },
          {
            type: "image-trio",
            leftImage: {
              src: "/work_details/scoby/4left.png",
              alt: "Main design concept with detailed interior view",
              caption: "Primary design concept showing spatial organization",
              size: 75,
            },
            rightImages: [
              {
                src: "/work_details/scoby/4topright.png",
                alt: "Top detail view of hexagonal framework",
                caption: "Ceiling detail with hexagonal pattern",
                size: 50,
              },
              {
                src: "/work_details/scoby/4buttonright.png",
                alt: "Bottom detail view of seating area",
                caption: "Pod seating arrangement detail",
                size: 50,
              },
            ],
            gap: "medium",
          },
          {
            type: "image-full",
            src: "/work_details/scoby/5.png",
            alt: "Full interior view showing the complete space design",
            height: "large",
          },
          {
            type: "image-full",
            src: "/work_details/scoby/6.png",
            alt: "Full interior view showing the complete space design",
            height: "large",
          },
          {
            type: "text",
            content:
              "**Human-Centered Experience**: The environment facilitates a restorative connection between people and nature as people relax in this spot in a cozy, daydreaming afternoon. Conceived as both a retail destination and a wellness hub, the store introduces a new fermented tea culture to the city while providing cozy spaces for rest, reflection, and community gathering. ",
            size: "large",
          },
          {
            type: "image-full",
            src: "/work_details/scoby/7.png",
            alt: "Full interior view showing the complete space design",
            height: "large",
          },
        ],
      },
      impact: {
        title: "Impact and Results",
        blocks: [
          {
            type: "text",
            content:
              "**Impact:** The SCOBY Spot delivers more than a retail experience—it functions as a healing and restoration hub for Ithaca residents and university students. Its unique integration of tea culture, nature-inspired architecture, and community wellness provides an innovative model for retail spaces.",
            size: "large",
          },
          {
            type: "text",
            content: "**Key Outcomes:**",
            marginBottom: "0rem",
            size: "large",
          },
          {
            type: "list",
            listType: "unordered",
            items: [
              "Established the first kombucha-focused tea house in Ithaca Commons",
              "Created a restorative environment that attracts both residents and visitors seeking alternative café experiences",
              "Offered a flexible space for study, social gatherings, and cultural engagement",
            ],
            size: "large",
            marginTop: "-0.25rem",
          },
          {
            type: "text",
            content:
              "By blending wellness rituals with immersive design, the SCOBY Spot bridges commerce and community, showcasing how retail can be a catalyst for well-being.",
            size: "large",
          },
        ],
      },
      reflection: {
        title: "Reflection",
        blocks: [
          {
            type: "text",
            content:
              " Designing the SCOBY Spot taught me how spatial storytelling can directly influence emotional well-being. I deepened my understanding of biophilic design and its capacity to create restorative environments within urban retail settings.",
            size: "large",
          },
          {
            type: "text",
            content:
              "Developed a layout that supports both individual retreat and social engagement. The hexagonal framework, pod seating, and wellness-driven design narrative created a unique, restorative retail destination. Balancing functional requirements (kitchen, circulation, retail display) with immersive, organic forms was a central design challenge. In future iterations, I would explore more modular construction methods to enhance scalability and sustainability for rollout in other urban contexts.",
            size: "large",
          },
        ],
      },
    },
  },
];
