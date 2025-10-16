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
              "**Offerings**: The SCOBY Spot is a kombucha tea + pastry store that doubles as a relax and study space in the heart of Ithaca Commons. This tea store serves various kombucha flavored tea, pastry and brewing services. The space offers kombucha flights, flavored pastries, and interactive brewing experiences. Its programming and layout promote both individual retreat and social engagement, positioning the store as a cultural and wellness anchor within Ithaca Commons.",
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
            "**Tea Shop Concept**: The SCOBY Spot was conceived to fill a gap in Ithaca's wellness and social scene. Through site analysis and user research, we identified the need for a space that combines kombucha culture with restorative design—creating a third place that promotes both health and community connection.",
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
              "**Design inspiration**: Inspiration was drawn from the organic branching patterns of trees. The structure integrates a hexagonal wooden framework, elevated pod seating, and soft natural lighting to create a restorative, biophilic environment. Every design decision—from large glass windows to warm wooden textures—was made to connect people with nature and foster mindful relaxation.",
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
          width: "full",
        },
        {
          type: "image-full",
          src: "/work_details/scoby/6.png",
          alt: "Full interior view showing the complete space design",
          width: "full",
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "**Human-Centered Experience**: The environment facilitates a restorative connection between people and nature as people relax in this spot in a cozy, daydreaming afternoon. Conceived as both a retail destination and a wellness hub, the store introduces a new fermented tea culture to the city while providing cozy spaces for rest, reflection, and community gathering.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/human_centered_experience.svg",
            alt: "Human-centered experience design",
          },
        },
      ],
    },
    impactAndResults: {
      title: "Impact & Results",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "**Impact:** The SCOBY Spot delivers more than a retail experience—it functions as a healing and restoration hub for Ithaca residents and university students. Its unique integration of tea culture, nature-inspired architecture, and community wellness provides an innovative model for retail spaces. By blending wellness rituals with immersive design, the SCOBY Spot bridges commerce and community, showcasing how retail can be a catalyst for well-being.",
            size: "normal",
          },
          image: {
            src: "/work_details/scoby/7.png",
            alt: "Full interior view showing the complete space design",
            height: "large",
          },
        },
        {
          type: "image-textlist",
          layout: "image-left",
          imageWidth: 60,
          textWidth: 60,
          image: {
            src: "/work_details/scoby/community_impact.svg",
            alt: "Community impact and results",
          },
          text: {
            content: "**Key Outcomes:**",
            size: "normal",
          },
          list: {
            listType: "unordered",
            items: [
              "Established the first kombucha-focused tea house in Ithaca Commons",
              "Created a restorative environment that attracts both residents and visitors seeking alternative café experiences",
              "Offered a flexible space for study, social gatherings, and cultural engagement",
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
          text: {
            content:
              "Designing the SCOBY Spot taught me how spatial storytelling can directly influence emotional well-being. I deepened my understanding of biophilic design and its capacity to create restorative environments within urban retail settings. Developed a layout that supports both individual retreat and social engagement. The hexagonal framework, pod seating, and wellness-driven design narrative created a unique, restorative retail destination. Balancing functional requirements (kitchen, circulation, retail display) with immersive, organic forms was a central design challenge. In future iterations, I would explore more modular construction methods to enhance scalability and sustainability for rollout in other urban contexts.",
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
