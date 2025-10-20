import { WorkDetail } from "../types";

export const cornellClassWork: WorkDetail = {
  id: 4,
  title: "Cornell Class",
  category: "Education Design, Design Strategy",
  description:
    "Innovative classroom environment fostering collaborative learning",
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
          content:
            "**Project Vision:**\nCornell Classroom reimagines two existing lecture spaces—**Riley Robb Hall** and **Rockefeller Hall**—through **evidence-based interior design** to create **inclusive, flexible, and engaging learning environments**. The redesign addresses acoustic, spatial, and ergonomic challenges to elevate everyday teaching and learning.",
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
        {
          type: "image",
          src: "/work_details/cornell_class/Cornell Classroom - visual selection (10).svg",
          alt: "Cornell Classroom visual selection",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**Goal:**\nImprove functionality, comfort, and inclusivity by aligning **layout**, **furniture**, **acoustics**, and **lighting** with a range of teaching styles—from **lectures** to **discussions**, **seminars**, and **workshops**.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/Cornell Classroom - visual selection (9).svg",
          alt: "Cornell Classroom design goals",
          size: "medium",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "**Offerings:**\nAdaptive layouts, upgraded ergonomic furniture, targeted acoustic treatments, and layered lighting strategies tailored to active learning.\n\n• **Riley Robb Hall** adopts a **horseshoe configuration** to improve visibility and communication.\n• **Rockefeller Hall** integrates **reconfigurable furnishings** and **positive-distraction walls** to support multi-modal learning.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (8).svg",
            alt: "Offerings and multi-modal learning",
          },
        },
        {
          type: "text-image",
          layout: "text-right",
          imageWidth: 60,
          text: {
            content:
              "**Research Approach:**\nThe design process began with **firsthand field observation** and **stakeholder interviews**. Our team visited both **Riley Robb Hall** and **Rockefeller Hall** to understand how their spatial, acoustic, and ergonomic conditions affect teaching and learning. We interviewed **professors, students, and building staff**, gathering direct feedback on what aspects of each classroom worked well and which hindered instruction.\n\nTheir responses consistently emphasized issues around **lighting quality, sound clarity, visibility, comfort, and mobility**.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (6).svg",
            alt: "Research approach methodology",
          },
        },
        {
          type: "image",
          src: "/work_details/cornell_class/Cornell Classroom - visual selection (7).svg",
          alt: "Research findings overview",
          size: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/1left.png",
              alt: "Riley Robb Hall existing conditions",
              size: 35,
            },
            {
              src: "/work_details/cornell_class/1right.png",
              alt: "Riley Robb Hall layout analysis",
              size: 35,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/2left.png",
              alt: "Rockefeller Hall existing conditions",
              size: 35,
            },
            {
              src: "/work_details/cornell_class/2right.png",
              alt: "Rockefeller Hall layout analysis",
              size: 35,
            },
          ],
          layout: "equal",
          gap: "medium",
        },

        {
          type: "text",
          content:
            "**Evidence-Based Design:**\nAlongside interviews, we conducted **on-site environmental assessments** to document each classroom's **orientation, ceiling design, lighting, acoustics, and furniture ergonomics**. Using spatial mapping and photo documentation, we identified recurring issues:",
          size: "normal",
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "• **Ceiling design:** Exposed beams and pipelines created visual clutter and sound reflection.\n\n• **Lighting:** Lack of ambient or modular lighting limited comfort and adaptability.\n\n• **Furniture:** Outdated chairs and fixed layouts reduced flexibility for different teaching formats.\n\n• **Accessibility:** Narrow aisles and tight row spacing limited ease of movement.\n\n• **Sightlines and acoustics:** Poor seating elevation and echo reduced visibility and speech intelligibility.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (5).svg",
            alt: "Evidence-based design criteria",
          },
        },
        {
          type: "text",
          content:
            "The analysis synthesized **spatial ergonomics**, **environmental psychology**, and **inclusive design principles** to drive every design decision.",
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
          type: "image-pair",
          images: [
            {
              src: "/work_details/cornell_class/4.png",
              alt: "Rockefeller Hall spatial analysis",
              size: 58,
            },
            {
              src: "/work_details/cornell_class/14.png",
              alt: "Rockefeller Hall design response",
              size: 34,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Design Criteria Development:**\nFindings from fieldwork informed the following **evidence-based design criteria**:",
          size: "normal",
        },
        {
          type: "text-image",
          layout: "text-right",
          imageWidth: 60,
          textWidth: 40,
          text: {
            content:
              "1. **Acoustic intelligibility:** Minimize echo and cross-talk to improve speech clarity.\n\n2. **Ergonomic support:** Provide furniture adaptable to different body types and postures.\n\n3. **Spatial flexibility:** Allow reconfiguration within a 15-minute turnover period.\n\n4. **Accessibility and inclusion:** Ensure clear circulation and equitable sightlines for all users.\n\n5. **Lighting quality:** Deliver layered light modes—task, ambient, and presentation—to reduce glare.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (4).svg",
            alt: "Design criteria framework",
          },
        },
        {
          type: "text",
          content:
            "\nThis comprehensive research phase grounded the redesign in **user-centered insights** and **quantitative environmental data**, forming the basis for both **Riley Robb Hall's horseshoe configuration** and **Rockefeller Hall's reconfigurable studio layout**.",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "title",
          content: "**Riley Robb Hall - Horseshoe Layout**",
          size: "medium",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/6.png",
          size: "large",
        },
        {
          type: "text-image",
          layout: "text-right",
          imageWidth: 40,
          text: {
            content:
              "A **tiered horseshoe configuration** enhances **eye contact, voice projection, and spatial clarity**.\n• Curved rows equalize sightlines across all seats.\n• Swivel chairs enable seamless transition from lecture to discussion.\n• Integrated lighting strips and under-desk zones improve safety and accessibility.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (3).svg",
            alt: "Tiered horseshoe classroom layout",
          },
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
              src: "/work_details/cornell_class/hero.png",
              alt: "Riley Robb Hall complete view",
              size: 41,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Accessible Layout & Ceiling Design**\n\nMaterial palette board displays teal acoustical panels, light wood tables, adjustable seating, and smart lighting and shading systems.\n\nThe design ensures **clear circulation**, **varied seating heights**, and **multiple focal points** for instructors. Neutral tones and biophilic textures reduce cognitive load, creating a calm environment that supports concentration and well-being.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/10.png",
          alt: "Material palette and design details",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/7.png",
          alt: "Riley Robb Hall ceiling and lighting design",
          size: "large",
        },
        { type: "spacer", size: "medium" },
        {
          type: "title",
          content: "**Rockefeller Hall - Reconfigurable Studio Classroom**",
          size: "medium",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/cornell_class/8left.png",
              alt: "Rockefeller Hall layout option 1",
              size: 21,
            },
            {
              src: "/work_details/cornell_class/8right.png",
              alt: "Rockefeller Hall layout option 2",
              size: 30,
            },
            {
              src: "/work_details/cornell_class/Cornell Classroom - visual selection (8).svg",
              alt: "Reconfigurable layouts diagram",
              size: 44,
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "Designed for adaptability, this classroom uses **mobile tables, stackable ergonomic chairs, and writable acoustic walls** to support **lecture, cluster, and seminar modes**.\n**Positive distraction walls** act as both sound absorbers and creative pin-up surfaces—offering tactile, visual, and functional engagement.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "top-bottom",
          topImage: {
            src: "/work_details/cornell_class/12.png",
            alt: "Top image placeholder",
            caption: "Top",
            size: 60,
          },
          bottomImages: [
            {
              src: "/work_details/cornell_class/16.png",
              alt: "Bottom left image placeholder",
              caption: "Bottom Left",
              size: 50,
            },
            {
              src: "/work_details/cornell_class/17.png",
              alt: "Bottom right image placeholder",
              caption: "Bottom Right",
              size: 50,
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Adaptable Layout & Acoustics & Lighting**\n\nLayered acoustic strategies—**ceiling baffles, wall panels, and upholstered furniture**—control reverberation. Lighting layers are pre-set for **lecture**, **discussion**, and **presentation** modes to reduce glare and adapt to digital tasks.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/11.png",
          alt: "Rockefeller Hall acoustics and lighting systems",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/cornell_class/9.png",
          alt: "Rockefeller Hall complete interior view",
          size: "large",
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
            content:
              "**Project Impact:**\nThe redesign transforms two outdated, lecture-centric classrooms into **active learning ecosystems** that foster **collaboration, focus, and inclusivity**.\n\n**Key Outcomes:**\n• **Improved audibility** and reduced echo through targeted acoustic zones.\n• **Enhanced visibility and participation** via curved layouts and multiple teaching points.\n• **Flexible adaptability** enabling quick reconfiguration.\n• **Greater accessibility** through ergonomic furniture and clear routing.\n• **Preset lighting scenes** aligned to each instructional mode.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection (1).svg",
            alt: "Project impact summary",
          },
        },
        {
          type: "text",
          content:
            "The result: A **future-ready educational environment** where spatial design directly enhances teaching performance and student engagement.",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          textWidth: 45,
          imageWidth: 55,
          text: {
            content:
              "This project reaffirmed that **classroom design is itself an act of pedagogy**—how a space is arranged teaches collaboration, hierarchy, and engagement.Balancing **human behavior data** with **architectural feasibility** was key to translating research into physical form.\n\n**Future Directions:**\n• Implement **long-term post-occupancy studies** to track engagement and performance metrics.\n• Refine **furniture and lighting presets** for various disciplines.\n• Continue evolving design standards for **inclusive, adaptive learning spaces** that reflect evolving teaching practices.",
            size: "normal",
          },
          image: {
            src: "/work_details/cornell_class/Cornell Classroom - visual selection.svg",
            alt: "Reflection and future directions",
          },
        },
        {
          type: "text",
          content:
            "Cornell Classroom demonstrates how **evidence-based interior design** can transform learning into an active, equitable, and human-centered experience.",
        },
      ],
    },
  },
};
