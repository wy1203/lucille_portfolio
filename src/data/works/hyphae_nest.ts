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
          content:
            "**Hyphae Nest** is a conceptual architectural project envisioning a **utopian, eco-friendly future**. It reimagines the built environment as a **living organism**, fostering sustainability and community connection through **bio-based materials**. The project's goal is to promote **ecological harmony** while strengthening **family and community bonds** in a self-sustaining habitat.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/hyphae_nest/hero.png",
          caption: "hero",
          alt: "Hyphae Nest overview visualization",
          size: "medium",
        },
        {
          type: "text",
          content:
            "The project bridges ecology and human life, creating a **flourishing habitat** where environmental well-being and social connection coexist. Through the use of **mycelium**, the design transforms construction into a regenerative act, redefining architecture as part of a living ecosystem rather than a static object.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/Hyphae Nest - visual selection.svg",
              caption: "Hyphae Nest - visual selection",
              alt: "Ecology and human life connection diagram",
              size: 43,
            },
            {
              src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (1).svg",
              caption: "Hyphae Nest - visual selection (1)",
              alt: "Mycelium construction concept",
              size: 56,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "Hyphae Nest explores **mycelium**—a regenerative, biodegradable, and lightweight material—as a sustainable construction medium. The architecture is envisioned to **grow, heal, and return to the earth**, integrating structure and nature into one continuous cycle.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (2).svg",
          caption: "Hyphae Nest - visual selection (2)",
          alt: "Mycelium material properties and lifecycle",
          size: "medium",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text-image",
          layout: "text-right", // image on left, text on right
          textWidth: 60,
          imageWidth: 60,
          image: {
            src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (3).svg",
            caption: "Hyphae Nest - visual selection (3)",
            alt: "Diagram of hyphal networks and architectural translation",
            objectFit: "cover",
          },
          text: {
            content:
              "The strategy behind Hyphae Nest draws inspiration from **hyphal networks**, the microscopic threads that compose fungal mycelium. These biological systems demonstrate **connection, exchange, and resilience**, offering a natural model for rethinking both **architectural organization** and **community structure**.\n\n**Design Foundation:**\nEach design principle mirrors a biological function:\n• **Connection:** Mycelial threads model how buildings can share resources and energy.\n• **Exchange:** The flow of nutrients parallels spatial and social communication.\n• **Resilience:** Growth patterns adapt to stress and change, shaping flexible forms.",
            size: "normal",
          },
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "**Multidisciplinary Study:**\nThe analytical framework merges **material ecology**, **environmental psychology**, and **social design**, positioning architecture as a mediator between human emotion and ecological systems.",
            size: "normal",
          },
          image: {
            src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (4).svg",
            caption: "Hyphae Nest - visual selection (4)",
            alt: "Diagram showing multidisciplinary study framework connecting ecology, psychology, and design",
          },
        },
        {
          type: "text",
          content:
            "**Architectural Strategy:**\nThe architectural strategy draws from the **biological intelligence of mycelium**, a natural system that thrives through interconnection, exchange, and adaptability. By translating fungal growth logic into spatial design, the project establishes a regenerative framework for architecture.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (5).svg",
              caption: "Hyphae Nest - visual selection (5)",
              alt: "Hyphae Nest visual selection left",
              size: 46,
            },
            {
              src: "/work_details/hyphae_nest/Hyphae - Mycelium Strategy.png",
              caption: "Hyphae - Mycelium Strategy",
              alt: "Hyphae Nest visual selection right",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Persona Strategy:**\nThe prototype home is designed for a family of three:\n• A creative director thrives on innovative projects and quality time with family\n• A game designer passionate about games, connection with friends and family\n• A 10-year-old child whose curiosity drives play, exploration, and connection with nature.\nThe family dynamic informs spatial decisions—shared gathering zones, creative workspaces, and quiet alcoves—reflecting the tension between productivity, play, and reflection.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/4right.png",
              caption: "4right",
              alt: "Hyphae Nest visual selection left",
              size: 60,
            },
            {
              src: "/work_details/hyphae_nest/4left.png",
              caption: "4left",
              alt: "Hyphae Nest visual selection right",
              size: 33,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Spatial Relationships:**\nBehavioral mapping and adjacency studies translate these relationships into zones of interaction and retreat, establishing a framework for cohabitation and regeneration.\n**Early sketches:**\nInitial explorations focused on clustering and vertical circulation—experimenting with **mycelial stacking**, porous layering, and integration with vegetation.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/2left.png",
              caption: "2left",
              alt: "Hyphae Nest visual selection left",
            },
            {
              src: "/work_details/hyphae_nest/2right.png",
              caption: "2right",
              alt: "Hyphae Nest visual selection right",
              size: 36,
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "The resulting form evolves into a **multi-level home** with garden terraces and branching supports that lift spaces off the ground—mimicking fungal roots connecting multiple ecosystems.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/3left.png",
              caption: "3left",
              alt: "Hyphae Nest visual selection left",
              size: 34,
            },
            {
              src: "/work_details/hyphae_nest/3right.png",
              caption: "3right",
              alt: "Hyphae Nest visual selection right",
              size: 39,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Spatial Strategy:**\nEach space supports coexistence: a **communal kitchen/bar** at the core, surrounded by flexible study and relaxation areas.\nPrivate rooms are adapted to the family's creative routines—acoustic separation for work, visual openness for shared experiences.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/6.png",
              caption: "6",
              alt: "Hyphae Nest visual selection left",
              size: 54,
            },
            {
              src: "/work_details/hyphae_nest/7right.png",
              caption: "7right",
              alt: "Hyphae Nest visual selection right",
              size: 38,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text",
          content:
            "**Human-Centered Experience:**\nHyphae Nest embodies interconnectedness—fostering shared spaces that strengthen community and family relationships. The fluid circulation encourages spontaneous encounters, while semi-private alcoves allow moments of reflection. Natural light filters through porous walls, producing a calming, biophilic atmosphere that aligns human rhythms with environmental cycles.",
          size: "normal",
        },
        {
          type: "image-trio",
          leftImage: {
            src: "/work_details/hyphae_nest/5left.png",
            caption: "5left",
            alt: "Main architectural render showing structure growth form",
            size: 51,
          },
          rightImages: [
            {
              src: "/work_details/hyphae_nest/5topright.png",
              caption: "5topright",
              alt: "Close-up view of mycelium panel textures",
              size: 18,
            },
            {
              src: "/work_details/hyphae_nest/5bottomright.png",
              caption: "5bottomright",
              alt: "Interior modular system detail",
              size: 40,
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Spatially, the structure integrates:**\n• Interconnected communal areas for collective gathering.\n• Fluid circulation that fosters spontaneous interaction.\n• Semi-private alcoves for reflection and rest.\n• Biophilic atmosphere through filtered light and organic materiality.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/6bottomleft.png",
              caption: "6bottomleft",
              alt: "Hyphae Nest visual selection left",
              size: 48,
            },
            {
              src: "/work_details/hyphae_nest/6bottomright.png",
              caption: "6bottomright",
              alt: "Hyphae Nest visual selection right",
              size: 51,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/7left.png",
              caption: "Hyphae Nest - visual selection (3)",
              alt: "Hyphae Nest visual selection left",
              size: 43,
            },
            {
              src: "/work_details/hyphae_nest/right.png",
              caption: "7left",
              alt: "Hyphae Nest visual selection right",
              size: 43,
            },
          ],
          layout: "equal",
          gap: "medium",
        },

        {
          type: "text",
          content:
            "The architecture operates as both a social catalyst and a living material system, synchronizing human rhythm with environmental cycles.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/8left.png",
              alt: "Left image placeholder",
              caption: "Left",
            },
            {
              src: "/work_details/hyphae_nest/8middle.png",
              alt: "Middle image placeholder",
              caption: "Middle",
            },
            {
              src: "/work_details/hyphae_nest/8right.png",
              alt: "Right image placeholder",
              caption: "Right",
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
              caption: "Left",
            },
            {
              src: "/work_details/hyphae_nest/9middle.png",
              alt: "Middle image placeholder",
              caption: "Middle",
            },
            {
              src: "/work_details/hyphae_nest/9right.png",
              alt: "Right image placeholder",
              caption: "Right",
            },
          ],
          gap: "medium",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "image",
          src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (7).svg",
          caption: "Hyphae Nest - visual selection (7)",
          alt: "Project impact overview",
          size: "medium",
        },
        {
          type: "text",
          content:
            "Hyphae Nest challenges conventional notions of permanence by proposing **living architecture**—structures that evolve, decay, and regenerate with their surroundings.\n**Key Outcomes:**\n• Demonstrated the **architectural viability** of mycelium as a structural and ecological material.\n• Developed a **modular system** inspired by fungal networks to support growth and adaptability.\n• Applied **biophilic and social design principles** to promote well-being and interconnection.\n• Reframed sustainability through **biodegradability and circular material lifecycles**.\nThrough speculative design and research, Hyphae Nest advances the concept of **regenerative living**, envisioning an architecture that **coexists with ecosystems** instead of consuming them.",
          size: "normal",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "image",
          src: "/work_details/hyphae_nest/Hyphae Nest - visual selection (8).svg",
          caption: "Hyphae Nest - visual selection (8)",
          alt: "Project impact overview",
          size: "medium",
        },
        {
          type: "text",
          content:
            "Designing Hyphae Nest revealed how deeply **material ecology shapes social connection**. Translating the logic of fungal growth into architecture became both a **study in sustainability** and a **meditation on coexistence**.\n\n**Key Challenge:**\nBalancing speculative form-making with realistic material performance—ensuring biological aesthetics remained technically feasible.\n\n**Future Directions:**\nThe next phase involves **biotechnological prototyping**—collaborating with environmental scientists to fabricate with **living materials**. These prototypes would explore **biodegradation, regrowth, and restoration** in real-world contexts, positioning architecture as an **active participant in ecological healing.**",
          size: "normal",
        },
      ],
    },
  },
};
