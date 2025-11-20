import { WorkDetail } from "../types";

export const cornellClassWork: WorkDetail = {
  id: 4,
  title: "Cornell Class",
  category: "Education Design, Design Strategy",
  description:
    "Innovative classrooms fostering collaborative and engaging learning environments",
  thumbnail: "/work_details/cornell_class/hero.png",
  heroImage: "/work_details/cornell_class/hero.png",
  client: "Academic design project (Cornell University)",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Educational Design",
    "Interior Architecture",
    "Furniture Design",
    "Spatial Planning",
    "User Experience Design",
    "Collaborative Environments",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          title: "Project Vision",
          content:
            "Cornell Classroom reimagines two existing lecture spaces—**Riley Robb Hall** and **Rockefeller Hall**—through **evidence-based interior design** to create **inclusive, flexible, and engaging learning environments**. The redesign addresses acoustic, spatial, and ergonomic challenges to elevate everyday teaching and learning.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/hero.png",
              alt: "Riley Robb Hall overview",
              size: 40,
            },
            {
              src: "/work_details/cornell_class/12.png",
              alt: "Rockefeller Hall overview",
              size: 47,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "banner-title",
          size: "large",
          content: "Classroom 1",
          background: "#5ea9a1",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/1left.png",
          alt: "Riley Robb Hall existing conditions",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Evidence-Based Design",
          content:
            "Alongside interviews, we conducted **on-site environmental assessments**:",
          size: "normal",
          list: {
            items: [
              "**Ceiling design:** Exposed beams and pipelines created visual clutter and sound reflection.",
              "**Lighting:** Lack of ambient or modular lighting limited comfort and adaptability.",
              "**Furniture:** Outdated chairs and fixed layouts reduced flexibility for different teaching formats.",
              "**Accessibility:** Narrow aisles and tight row spacing limited ease of movement.",
              "**Sightlines and acoustics:** Poor seating elevation and echo reduced visibility and speech intelligibility.",
            ],
            listType: "unordered",
          },
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/3.png",
              alt: "Riley Robb Hall spatial analysis",
              size: 58,
            },
            {
              src: "/work_details/cornell_class/13.png",
              alt: "Riley Robb Hall design response",
              size: 32,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "title",
          content: "Riley Robb Hall - Horseshoe Layout",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/6.png",
          size: "large",
        },
        {
          type: "text",
          title: "Accessible Layout & Ceiling Design",
          content:
            "Material palette board displays teal acoustical panels, light wood tables, adjustable seating, and smart lighting and shading systems. The design ensures **clear circulation**, **varied seating heights**, and **multiple focal points** for instructors. Neutral tones and biophilic textures reduce cognitive load, creating a calm environment that supports concentration and well-being.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/10.png",
          alt: "Material palette and design details",
          size: "xlarge",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/7.png",
          alt: "Riley Robb Hall ceiling and lighting design",
          size: "xlarge",
        },
        {
          type: "banner-title",
          size: "large",
          content: "Classroom 2",
          background: "#8eba8a",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/1right.png",
          alt: "Riley Robb Hall existing conditions",
          size: "xlarge",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/4.png",
              alt: "Rockefeller Hall spatial analysis",
              size: 57,
            },
            {
              src: "/work_details/cornell_class/14.png",
              alt: "Rockefeller Hall design response",
              size: 33,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "title",
          content: "Rockefeller Hall - Reconfigurable Studio Classroom",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/8left.png",
              alt: "Rockefeller Hall layout option 1",
              size: 30,
            },
            {
              src: "/work_details/cornell_class/8right.png",
              alt: "Rockefeller Hall layout option 2",
              size: 35,
              marginTop: "2rem",
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          title: "Adaptive Layout & Acoustics",
          content:
            "Layered acoustic strategies—**ceiling baffles, wall panels, and upholstered furniture**—control reverberation. Lighting layers are pre-set for **lecture**, **discussion**, and **presentation** modes to reduce glare and adapt to digital tasks.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/11.png",
          alt: "Rockefeller Hall acoustics and lighting systems",
          size: "xlarge",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/9.png",
          alt: "Rockefeller Hall complete interior view",
          size: "xlarge",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "banner-title",
          size: "large",
          content: "Classroom 1",
          background: "#5ea9a1",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/15.png",
              alt: "Riley Robb Hall interior perspective",
              size: 60,
            },
            {
              src: "/work_details/cornell_class/herocopy.png",
              alt: "Riley Robb Hall complete view",
              size: 41,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "banner-title",
          size: "large",
          content: "Classroom 2",
          background: "#8eba8a",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/cornell_class/12copy.png",
              alt: "Classroom 2 perspective",
              size: 31.33,
            },
            {
              src: "/work_details/cornell_class/16.png",
              alt: "Classroom 2 seating layout",
              size: 36.33,
            },
            {
              src: "/work_details/cornell_class/17.png",
              alt: "Classroom 2 lighting concept",
              size: 35.33,
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
          type: "image-textlist",
          layout: "image-left",
          text: {
            title: "Key Outcomes",
            content:
              "**Project Impact:** The redesign transforms two outdated, lecture-centric classrooms into **active learning ecosystems** that foster **collaboration, focus, and inclusivity**.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (1).svg",
            alt: "Project impact summary",
          },
          list: {
            listType: "unordered",
            size: "normal",
            items: [
              "**Improved audibility** and reduced echo through targeted acoustic zones.",
              "**Enhanced visibility and participation** via curved layouts and multiple teaching points.",
              "**Flexible adaptability** enabling quick reconfiguration.",
              "**Greater accessibility** through ergonomic furniture and clear routing.",
              "**Preset lighting scenes** aligned to each instructional mode.",
            ],
          },
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "image-textlist",
          layout: "image-left",
          textWidth: 45,
          imageWidth: 55,
          text: {
            title: "Future Directions",
            content:
              "This project reaffirmed that **classroom design is itself an act of pedagogy**—how a space is arranged teaches collaboration, hierarchy, and engagement. Balancing **human behavior data** with **architectural feasibility** was key to translating research into physical form.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection.svg",
            alt: "Reflection and future directions",
          },
          list: {
            listType: "unordered",
            size: "normal",
            items: [
              "Implement **long-term post-occupancy studies** to track engagement and performance metrics.",
              "Refine **furniture and lighting presets** for various disciplines.",
              "Continue evolving design standards for **inclusive, adaptive learning spaces** that reflect evolving teaching practices.",
            ],
          },
        },
      ],
    },
  },
};
