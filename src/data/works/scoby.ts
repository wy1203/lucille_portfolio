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
          type: "text-image",
          layout: "text-right",
          text: {
            title: "Goal and Offering",
            content:
              "The SCOBY Spot is a kombucha tea + pastry store that doubles as a relax & study space in Ithaca Commons. The goal is to create a relaxation and well-being hub for Ithacans. A calm, nature like atmosphere positions the shop as both a neighborhood retreat and a cultural anchor for fermented tea.",
            size: "small",
          },
          image: {
            src: "/work_details/scoby/The SCOBY Spot - overview.svg",
            alt: "SCOBY Spot experience zones",
          },
        },
        {
          type: "image",
          src: "/work_details/scoby/overview1.png",
          alt: "SCOBY Spot overview visualization",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/scoby/overview2.png",
          alt: "SCOBY Spot overview visualization",
          size: "full",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          title: "Current Market Gap & User Insights",
          content:
            "Research identified a gap in downtown Ithaca for a **wellness-oriented place** serving students, workers, and visitors seeking calm amid the city's cultural energy. Interviews and site observations confirmed the need for quiet study zones, comfortable lighting, and intuitive circulation from entry → display → seating.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 1.svg",
              alt: "User research findings",
              size: 50,
            },
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 5.svg",
              alt: "Research methods visualization",
              size: 50,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          title: "Human-Centered Experience",
          content:
            "Create **relaxation** and **well-being hub** for Ithacans. This tea store serves various **kombucha flavored tea, pastry and brewing services.** The environment facilitates a **restorative connection between people and nature** as people relax in this spot in a cozy, daydreaming afternoon.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 4.svg",
              alt: "Human-centered experience diagram",
              size: 50,
            },
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 3.svg",
              alt: "Experience journey visualization",
              size: 45,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          title: "Evidence-Based Drivers",
          content:
            "Design development was informed by four evidence-based priorities:\n**1. Clear wayfinding** that flows naturally from the entrance to display to seating.\n**2. Acoustic comfort** for both group and individual use.\n**3. Biophilic design** elements—natural materials, light, and color—to reduce stress.\n**4. Flexible layout** to host brewing workshops and cultural events without major reconfiguration.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/scoby/The SCOBY Spot - strategy 2.svg",
              alt: "Evidence-based design drivers",
              size: 44.33,
            },
            {
              src: "/work_details/scoby/3left.png",
              alt: "Design evidence left",
              size: 30.33,
            },
            {
              src: "/work_details/scoby/3middle.png",
              alt: "Design evidence middle",
              size: 33,
            },
          ],
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/scoby/The SCOBY Spot - design solution.svg",
          alt: "Design solution overview",
          size: "medium",
        },
        {
          type: "text",
          title: "Architectural Strategy",
          content:
            "Inspired by the branching geometry of trees and the venation patterns of leaves,** the store's architectural system translates organic growth into structure. A **hexagonal wooden framework** rises upward like intertwining canopies, forming **elevated seating platforms** that evoke the feeling of resting within a forest canopy. The structure's geometry evokes organic branching patterns, while skylights and glass panels introduce natural warmth.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/SCOBY Spot - Tree Pattern.png",
          alt: "Architectural inspiration - tree branching patterns",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/8left.png",
              alt: "Design inspiration reference",
              size: 35,
            },
            {
              src: "/work_details/scoby/8right.png",
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
          title: "Spatial Composition",
          content:
            "Wooden frameworks and elevated 'tree-branch' paths create a continuous flow between levels—allowing guests to explore, perch, and rest. Soft illumination, warm color tones, and natural finishes compose a tranquil, restorative setting.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/3right.png",
          alt: "Spatial composition diagram",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/scoby/4.png",
          alt: "Interior spatial flow",
          size: "large",
        },
        {
          type: "text",
          title: "Biophilic Design Elements",
          content:
            "• **Organic Branching Patterns:** evoke canopy structures for calmness.\n• **Soft Natural Lighting:** connects visitors to daylight cycles.\n• **Warm Wooden Textures:** evoke comfort and authenticity.\n• **Elevated Pod Seating:** promotes a sense of retreat and privacy.\n• **Large Glass Windows:** frame views and enhance openness.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/5.png",
          alt: "Natural lighting and materials",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/scoby/4left.png",
          alt: "Natural lighting and materials",
          size: "large",
        },
        {
          type: "text",
          title: "Human-Centered Experience",
          content:
            "Private pods offer acoustic separation for study and intimate gatherings while preserving visual transparency. The combination of **natural light, greenery, and warm palettes** facilitates restoration and focus. Each detail—from circulation paths to furniture ergonomics—supports mental wellness and a slower rhythm of being.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/scoby/6.png",
          alt: "Private pod seating areas",
          size: "full",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "image",
          src: "/work_details/scoby/design_solution1.png",
          alt: "Design solution detail 1",
          size: "xlarge",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/design_solution2.png",
              alt: "Design solution detail 2",
              size: 53,
            },
            {
              src: "/work_details/scoby/design_solution3.png",
              alt: "Design solution detail 3",
              size: 47,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/design_solution4.png",
              alt: "Design solution detail 4",
              size: 52,
            },
            {
              src: "/work_details/scoby/design_solution5.png",
              alt: "Design solution detail 5",
              size: 48,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/design_solution6.png",
              alt: "Design solution detail 6",
              size: 50,
            },
            {
              src: "/work_details/scoby/design_solution7.png",
              alt: "Design solution detail 7",
              size: 50,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/scoby/design_solution8.png",
          alt: "Design solution detail 8",
          size: "xlarge",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          text: {
            title: "\nKey Outcome",
            content:
              "• Established the first **kombucha-centered cafe** in Ithaca Commons.\n• Unified **kombucha service, pastry program, and brewing workshops** into a single guest journey.\n• Demonstrated a **biophilic retail model** linking hospitality with well-being.\n• Increased opportunities for community engagement and study-friendly socialization.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/THE SCOBY Spot - Impact.svg",
            alt: "Impact outcomes visualization",
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
          text: {
            title: "\nLean Thinking & Future Direction",
            content:
              "Future iterations of the SCOBY Spot will apply **Lean construction principles** to streamline build-out and enhance sustainability. \nNext steps include:\n1. Implementing **modular pod kits** for faster, replicable construction.\n2. Adopting **low-carbon materials** for finishes and structure.\n3. Refining **workshop logistics** to better support education and community events.\n4. Scaling the model to future neighborhoods while maintaining intimacy and calm.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/THE SCOBY Spot - reflection.svg",
            alt: "Reflection and future directions",
          },
        },
      ],
    },
  },
};
