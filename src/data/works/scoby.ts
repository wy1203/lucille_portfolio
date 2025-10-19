import { WorkDetail } from "../types";

export const scobyWork: WorkDetail = {
  id: 1,
  title: "The SCOBY Spot",
  category: "Commercial Space, Design Strategy",
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
            "**Project Vision & Offerings:**\nThe SCOBY Spot is a kombucha tea + pastry store that doubles as a **relax & study space** in Ithaca Commons. The goal is to create a **relaxation and well-being hub** for Ithacans through a program that offers **kombucha flights, tea-flavored pastries, and hands-on brewing workshops.**\nA calm, nature-forward atmosphere positions the shop as both a neighborhood retreat and a cultural anchor for fermented tea.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/7.png",
          caption: "7",
          alt: "SCOBY Spot overview visualization",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:**\nBy merging hospitality and mindfulness, the SCOBY Spot introduces a new typology of retail wellness. The design encourages community gathering, slow consumption, and sensory restoration. The experience balances public and private zones—open seating for social connection and elevated pods for reflection and study.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - overview.svg",
          caption: "The SCOBY Spot - overview",
          alt: "SCOBY Spot experience zones",
          size: "large",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          content:
            "**Intent & Users:**\nResearch identified a gap in downtown Ithaca for a **wellness-oriented place** serving students, workers, and visitors seeking calm amid the city's cultural energy. Interviews and site observations confirmed the need for quiet study zones, comfortable lighting, and intuitive circulation from entry → display → seating.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - strategy 1.svg",
          caption: "The SCOBY Spot - strategy 1",
          alt: "User research findings",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Research Methods:**\nUser interviews revealed strong enthusiasm for spaces promoting wellness through sensory experiences. Respondents valued the pairing of tea rituals and study comfort—informing a program mix of beverage, pastry, and retreat-like seating pods.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - strategy 5.svg",
          caption: "The SCOBY Spot - strategy 5",
          alt: "Research methods visualization",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:**\nCreate **relaxation** and **well-being hub** for Ithacans. This tea store serves various **kombucha flavored tea, pastry and brewing services.** The environment facilitates a **restorative connection between people and nature** as people relax in this spot in a cozy, daydreaming afternoon.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 4.svg",
              caption: "The SCOBY Spot - strategy 4",
              alt: "Human-centered experience diagram",
              size: 50,
            },
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 3.svg",
              caption: "The SCOBY Spot - strategy 3",
              alt: "Experience journey visualization",
              size: 45,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Evidence-Based Drivers:**\nDesign development was informed by four evidence-based priorities:\n\n**1. Clear wayfinding** that flows naturally from the entrance to display to seating.\n**2. Acoustic comfort** for both group and individual use.\n**3. Biophilic design** elements—natural materials, light, and color—to reduce stress.\n**4. Flexible layout** to host brewing workshops and cultural events without major reconfiguration.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - strategy 2.svg",
          caption: "The SCOBY Spot - strategy 2",
          alt: "Evidence-based design drivers",
          size: "medium",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - design solution.svg",
          caption: "The SCOBY Spot - design solution",
          alt: "Design solution overview",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Architectural Strategy:**\n**Inspired by the branching geometry of trees and the venation patterns of leaves,** the store's architectural system translates organic growth into structure. A **hexagonal wooden framework** rises upward like intertwining canopies, forming **elevated seating platforms** that evoke the feeling of resting within a forest canopy.\n\nThe structure's geometry evokes organic branching patterns, while skylights and glass panels introduce natural warmth.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/SCOBY Spot - Tree Pattern.png",
          caption: "SCOBY Spot - Tree Pattern",
          alt: "Architectural inspiration - tree branching patterns",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/8left.png",
              caption: "8left",
              alt: "Design inspiration reference",
              size: 35,
            },
            {
              src: "/work_details/scoby/8right.png",
              caption: "8right",
              alt: "Hexagonal framework concept",
              size: 50,
              marginTop: "30%",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Spatial Composition:**\nWooden frameworks and elevated 'tree-branch' paths create a continuous flow between levels—allowing guests to explore, perch, and rest. Soft illumination, warm color tones, and natural finishes compose a tranquil, restorative setting.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/3right.png",
          caption: "3right",
          alt: "Spatial composition diagram",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/scoby/4.png",
          caption: "4",
          alt: "Interior spatial flow",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Biophilic Design Elements:**\n• **Organic Branching Patterns:** evoke canopy structures for calmness.\n• **Soft Natural Lighting:** connects visitors to daylight cycles.\n• **Warm Wooden Textures:** evoke comfort and authenticity.\n• **Elevated Pod Seating:** promotes a sense of retreat and privacy.\n• **Large Glass Windows:** frame views and enhance openness.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/5.png",
          caption: "5",
          alt: "Natural lighting and materials",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/scoby/4left.png",
          caption: "4left",
          alt: "Natural lighting and materials",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:**\nPrivate pods offer acoustic separation for study and intimate gatherings while preserving visual transparency. The combination of **natural light, greenery, and warm palettes** facilitates restoration and focus. Each detail—from circulation paths to furniture ergonomics—supports mental wellness and a slower rhythm of being.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/6.png",
          caption: "6",
          alt: "Private pod seating areas",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/scoby/7.png",
          caption: "7",
          alt: "Interior perspective showing human-centered design",
          size: "large",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "image",
          src: "/work_details/scoby/THE SCOBY Spot - Impact.svg",
          caption: "THE SCOBY Spot - Impact",
          alt: "Private pod seating areas",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Impact:**\nThe SCOBY Spot reframes retail as a **wellness catalyst**—blending beverage culture with restorative spatial design. It enhances Ithaca's downtown social fabric while providing a dependable third place for focus, gathering, and quiet restoration.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Key Outcomes:**\n• Established the first **kombucha-centered cafe** in Ithaca Commons.\n• Unified **kombucha service, pastry program, and brewing workshops** into a single guest journey.\n• Demonstrated a **biophilic retail model** linking hospitality with well-being.\n• Increased opportunities for community engagement and study-friendly socialization.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Social Impact:**\nBy merging mindful design and local beverage culture, the SCOBY Spot strengthens both individual wellness and collective belonging—showing how small-scale retail can support a city's mental and cultural health.",
          size: "normal",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "image",
          src: "/work_details/scoby/THE SCOBY Spot - reflection.svg",
          caption: "THE SCOBY Spot - reflection",
          alt: "Reflection and future directions",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Lean Thinking & Future Direction:**\nFuture iterations of the SCOBY Spot will apply **Lean construction principles** to streamline build-out and enhance sustainability. Next steps include:\n1. Implementing **modular pod kits** for faster, replicable construction.\n2. Adopting **low-carbon materials** for finishes and structure.\n3. Refining **workshop logistics** to better support education and community events.\n4. Scaling the model to future neighborhoods while maintaining intimacy and calm.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Design Reflection:**\nDesigning the SCOBY Spot reaffirmed how **material warmth, light quality, and acoustic control** directly shape behavior and well-being. Translating the metaphor of branching trees into circulation taught the balance between **poetry and practicality**—from managing queue flow to encouraging lingering comfort.",
          size: "normal",
        },
      ],
    },
  },
};
