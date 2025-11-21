import { WorkDetail } from "../types";

export const hyphaeNestWork: WorkDetail = {
  id: 3,
  title: "Hyphae Nest",
  category: "Hospitality",
  description:
    "Architectural exploration of mycelium as a regenerative material for eco-utopian living",
  thumbnail: "/work_details/hyphae_nest/hero.png",
  thumbnailImagePos: "50% 50%",
  thumbnailImageFit: "cover",
  heroImage: "/work_details/hyphae_nest/hero.png",
  heroImagePosition: "50% 50%",
  heroImageFit: "cover",
  client: "Academic design project (Cornell DEA, 2024)",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Sustainable Design",
    "Material Ecology",
    "Human-Centered Design",
    "Biophilic Architecture",
    "Parametric Modeling",
    "Environmental Systems Thinking",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          title: "Goal and Offering",
          content:
            "**Hyphae Nest** is a conceptual architectural project envisioning a **utopian, eco-friendly future**. It reimagines the built environment as a **living organism**, fostering sustainability and community connection through **mycilium**. The project's goal is to promote **ecological harmony** while strengthening **family and community bonds** in a self-sustaining habitat.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/hyphae_nest/overview.png",
          alt: "Hyphae Nest overview visualization",
          size: "xlarge",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          title: "Architectural Strategy",
          content:
            "The architectural strategy draws from the **biological intelligence of mycelium**, a natural system that thrives through interconnection, exchange, and adaptability. By translating fungal growth logic into spatial design, the project establishes a regenerative framework for architecture.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/Hyphae Nest - visual selection.svg",
              alt: "Hyphae Nest visual selection",
              size: 45,
            },
            {
              src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (5).svg",
              alt: "Hyphae Nest visual selection 5",
              size: 45,
              marginTop: "1.5rem",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/hyphae_nest/Hyphae - Mycelium Strategy.png",
          alt: "Mycelium strategy diagram",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Persona Strategy",
          content: "The prototype home is designed for a family of three:",
          list: {
            items: [
              "A creative director thrives on innovative projects and quality time with family",
              "A game designer passionate about games, connection with friends and family",
              "A 10-year-old child whose curiosity drives play, exploration, and connection with nature",
            ],
            listType: "unordered",
          },
          size: "normal",
        },
        {
          type: "text",
          content:
            "The family dynamic informs spatial decisions—shared gathering zones, creative workspaces, and quiet alcoves—reflecting the tension between productivity, play, and reflection.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/4left.png",
              alt: "Hyphae Nest visual selection right",
              size: 20,
              marginTop: "2rem",
            },
            {
              src: "/work_details/hyphae_nest/4right.png",
              alt: "Hyphae Nest visual selection left",
              size: 45,
            },
          ],
          layout: "equal",
          gap: "xlarge",
        },
        {
          type: "text",
          title: "Spatial Relationships",
          content:
            "Initial explorations focused on clustering and vertical circulation—experimenting with **mycelial stacking**, porous layering, and integration with vegetation. The resulting form evolves into a **multi-level home** with garden terraces and branching supports that lift spaces off the ground—mimicking fungal roots connecting multiple ecosystems.",
          size: "normal",
        },
        {
          type: "image-grid",
          images: [
            {
              src: "/work_details/hyphae_nest/2left.png",
              alt: "Hyphae Nest visual selection 1",
              height: "20rem",
              objectFit: "contain",
            },
            {
              src: "/work_details/hyphae_nest/2right.png",
              alt: "Hyphae Nest visual selection 2",
              height: "20rem",
            },
            {
              src: "/work_details/hyphae_nest/3right.png",
              alt: "Hyphae Nest visual selection 4",
              height: "20rem",
            },
            {
              src: "/work_details/hyphae_nest/3left.png",
              alt: "Hyphae Nest visual selection 3",
              height: "20rem",
            },
          ],
          columns: 4,
          gap: "medium",
        },
        {
          type: "text",
          title: "Spatial Strategy",
          content:
            "Each space supports coexistence: a communal kitchen/bar at the core, surrounded by flexible study and relaxation areas. Private rooms are adapted to the family's creative routines—gaming and entertainment, work areas, book atic, outdoor garden, etc.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "The tall columns allow less disturbance to the surrounding forest, and taller height provides more sunlight. The space between tall columns form natural community playground.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/6.png",
              alt: "Hyphae Nest visual selection left",
              size: 54,
            },
            {
              src: "/work_details/hyphae_nest/7right.png",
              alt: "Hyphae Nest visual selection right",
              size: 38,
              marginTop: "2rem",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          title: "Human-Centered Experience",
          content: "**Spatially, the structure integrates:**",
          list: {
            items: [
              "Interconnected communal areas for collective gathering",
              "Fluid circulation that fosters spontaneous interaction",
              "Semi-private alcoves for reflection and rest",
              "Biophilic atmosphere through filtered light and organic materiality",
            ],
            listType: "unordered",
          },
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/hyphae_nest/5left.png",
          size: "full",
        },
        { type: "title", content: "Floor Plans", size: "large" },
        {
          type: "image",
          src: "/work_details/hyphae_nest/floor_plan.png",
          size: "full",
        },
        {
          type: "title",
          content: "Interior Strategy",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/8left.png",
              alt: "Left image placeholder",
            },
            {
              src: "/work_details/hyphae_nest/8middle.png",
              alt: "Middle image placeholder",
            },
            {
              src: "/work_details/hyphae_nest/8right.png",
              alt: "Right image placeholder",
            },
          ],
          gap: "medium",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/9left.png",
              alt: "Left image placeholder",
            },
            {
              src: "/work_details/hyphae_nest/9middle.png",
              alt: "Middle image placeholder",
            },
            {
              src: "/work_details/hyphae_nest/9right.png",
              alt: "Right image placeholder",
            },
          ],
          gap: "medium",
          spacing: "tight",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/ds1.png",
              alt: "Design solution 1",
            },
            {
              src: "/work_details/hyphae_nest/ds2.png",
              alt: "Design solution 2",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/ds3.png",
              alt: "Design solution 3",
            },
            {
              src: "/work_details/hyphae_nest/ds4.png",
              alt: "Design solution 4",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/ds5.png",
              alt: "Design solution 5",
            },
            {
              src: "/work_details/hyphae_nest/ds6.png",
              alt: "Design solution 6",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "image-textlist",
          layout: "image-left",
          imageWidth: 45,
          textWidth: 55,
          gap: "medium",
          image: {
            src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (7).svg",
            alt: "Project impact overview",
          },
          list: {
            title: "\nKey Outcomes",
            listType: "unordered",
            items: [
              "Demonstrated the **architectural viability** of mycelium as a structural and ecological material.",
              "Developed a **modular system** inspired by fungal networks to support growth and adaptability.",
              "Applied **biophilic and social design principles** to promote well-being and interconnection.",
              "Reframed sustainability through **biodegradability and circular material lifecycles**.",
            ],
            size: "normal",
          },
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          textWidth: 55,
          imageWidth: 45,
          text: {
            title: "\nFuture Directions",
            content:
              "The next phase involves **biotechnological prototyping**—collaborating with environmental scientists to fabricate with **living materials**. These prototypes would explore **biodegradation, regrowth, and restoration** in real-world contexts, positioning architecture as an **active participant in ecological healing.**",
            size: "normal",
          },
          image: {
            src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (8).svg",
            alt: "Project impact overview",
          },
        },
      ],
    },
  },
};
