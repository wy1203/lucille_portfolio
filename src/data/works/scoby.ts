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
            content:
              "**Project Vision & Offerings:** The SCOBY Spot is a **kombucha tea + pastry store** that doubles as a **relax & study space** in Ithaca Commons. The goal is to create a **relaxation and well-being hub** for Ithacans through a program that offers **kombucha flights**, **tea-flavored pastries**, and **hands-on brewing services**. A calm, nature-forward atmosphere positions the shop as both a neighborhood retreat and a cultural anchor for fermented tea.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/overview.svg",
            alt: "Project overview diagram",
          },
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
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
              size: 60,
            },
            {
              src: "/work_details/scoby/2right.png",
              alt: "Seating area with organic design elements",
              size: 39,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "**Intent & Users:** Research identified a gap for a **wellness-oriented third place** serving students, downtown workers, and weekend visitors. Interviews and on-site counts revealed demand for **quiet study niches**, **small-group gathering pods**, and a **short, intuitive purchase-to-seating journey** during peak hours.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/tea_shop_concept.svg",
              alt: "Tea shop concept and strategy",
            },
            {
              src: "/work_details/scoby/multifaceted_scoby_spot.svg",
              alt: "Multifaceted SCOBY Spot analysis",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/scoby/3left.png",
              alt: "Interior perspective showing hexagonal framework",
            },
            {
              src: "/work_details/scoby/3right.png",
              alt: "Seating area with organic design elements",
            },
          ],
          layout: "right-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Evidence-Based Drivers:** Planning priorities included (1) **clear wayfinding** from entry → display → seating, (2) **acoustic comfort** for study and conversation, (3) **biophilic cues** to lower stress, and (4) a **flexible layout** that supports workshops and casual hangouts without re-setting the entire store.",
          size: "normal",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          textWidth: 60,
          imageWidth: 40,
          text: {
            content:
              "**Design Inspiration:** Guided by the image of **giant forest branches**, the space employs a **hexagonal wooden structure** that grows into **elevated seating platforms**. Warm timber, skylit apertures, and soft edges create a **biophilic setting** where circulation flows like branching paths—inviting guests to wander, perch, and linger.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/design_inspiration.svg",
            alt: "Design inspiration and concept development",
          },
        },
        {
          type: "image-trio",
          leftImage: {
            src: "/work_details/scoby/4left.png",
            alt: "Main design concept with detailed interior view",
            size: 75,
          },
          rightImages: [
            {
              src: "/work_details/scoby/4topright.png",
              alt: "Top detail view of hexagonal framework",
              size: 50,
            },
            {
              src: "/work_details/scoby/4buttonright.png",
              alt: "Bottom detail view of seating area",
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
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "**Human-Centered Experience:** **Private pods** offer acoustic separation for study and conversation while maintaining visual connection to the main floor. **Natural light**, **warm palettes**, and **planting** support restoration; service counters and circulation are kept intuitive to reduce cognitive load. Together, these choices nurture a **cozy, daydreaming afternoon** vibe that ties tea rituals to well-being.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/human_centered_experience.svg",
            alt: "Human-centered experience design",
          },
        },
        {
          type: "image-full",
          src: "/work_details/scoby/7.png",
          alt: "Full interior view showing the complete space design",
          height: "large",
        },
      ],
    },
    impactAndResults: {
      title: "Impact & Results",
      blocks: [
        {
          type: "text",
          content:
            "**Impact:** The SCOBY Spot reframes retail as a **wellness catalyst**—blending beverage culture with restorative spatial design. The concept strengthens neighborhood social life while offering Ithacans a dependable setting for **focus, gathering, and quiet repair**.",
          size: "normal",
        },
        {
          type: "text",
          content: "**Key Outcomes:**",
          marginBottom: "0rem",
          size: "normal",
        },
        {
          type: "list",
          listType: "unordered",
          items: [
            "Delivered a **relaxation hub** in Ithaca Commons with study-friendly pods and communal seating",
            "Unified **kombucha service**, **pastry program**, and **brewing workshops** in a clear guest journey",
            "Demonstrated a **biophilic retail model** that couples hospitality with mental well-being",
          ],
          size: "normal",
          marginTop: "-0.25rem",
        },
        {
          type: "text",
          content:
            "By pairing **tea rituals** with **nature-inspired architecture**, the store invites repeat visits and everyday restoration—showing how small commercial spaces can meaningfully support community health.",
          size: "normal",
        },
        {
          type: "image-full",
          src: "/work_details/scoby/community_impact.svg",
          alt: "Community impact and results",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text",
          content:
            "Designing The SCOBY Spot underscored how **material warmth, light, and acoustics** shape mood and behavior. Translating the metaphor of **branching trees** into circulation and seating taught me to balance **poetry** with **operational clarity**—from queue management to seat turnover.",
          size: "normal",
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "Future iterations will test **modular pod kits** for faster build-out, explore **lower-carbon finishes**, and refine **workshop logistics** to better support brewing education. The aim is a scalable, neighborhood-ready model where **commerce, culture, and calm** thrive together.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/reflection_for_the_future.svg",
            alt: "Reflection and future considerations",
          },
        },
      ],
    },
  },
};
