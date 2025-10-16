import { WorkDetail } from "../types";

export const iceyWork: WorkDetail = {
  id: 2,
  title: "ICEY!",
  category: "Interactive Installation, Design Strategy",
  description:
    "Interactive device simulating melting Arctic ice through 3D printing, LEDs, and Arduino technology to foster reflection on climate change",
  thumbnail: "/work_details/icey/thumbnail.png",
  thumbnailImagePos: "50% 10%",
  thumbnailImageFit: "cover",
  heroImage: "/work_details/icey/2left.png",
  heroImagePosition: "50% 20%",
  heroImageFit: "cover",
  role: "Lead Designer & Prototyper",
  timeline: "6 weeks",
  team: "Independent project",
  skills: [
    "Interactive Design",
    "Parametric Modeling",
    "Arduino Programming",
    "LED Integration",
    "3D Printing",
    "Human-Centered Design",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          content:
            "ICEY! is an **interactive installation** designed to spark **climate awareness** by simulating the slow, fragile process of **melting ice**. A **3D-printed parametric shell** embedded with **LED lights** and controlled through **Arduino** captures the shifting glow of **polar ice** as it dissolves under warming conditions.",
          size: "large",
        },
        {
          type: "image-trio",
          layout: "top-bottom",
          topImage: {
            src: "/work_details/icey/1.png",
            height: "70px",
            position: "50% 45%",
          },
          bottomImages: [
            {
              src: "/work_details/icey/2left.png",
              alt: "Parametric ice structure design",
            },
            {
              src: "/work_details/icey/2right.png",
              alt: "LED-embedded ice structure glowing",
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "The design draws inspiration from the **duality** of the **ice caps**—**strong** in form yet **vulnerable** to change. The **geometric lattice** embodies both **resilience** and **fragility**, symbolizing the **urgent reality** of **global warming**.",
          size: "large",
        },
        {
          type: "text",
          content:
            "At its core, ICEY! prioritizes **human-centered experience**. By engaging people **visually** and **emotionally**, the device transforms **abstract concerns** into a **tangible symbol**. Viewers are prompted to **pause**, **reflect**, and **act**, considering their own role in **environmental care**—making the installation a **catalyst** for **awareness** and **action**.",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/3left.png",
              alt: "Close-up of geometric lattice structure",
              size: 40,
            },
            {
              src: "/work_details/icey/3right.png",
              alt: "Interactive installation in exhibition space",
              size: 60,
            },
          ],
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/icey/4.png",
          size: "full",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/5left.png",
              alt: "Technical diagram of Arduino setup",
            },
            {
              src: "/work_details/icey/5right.png",
              alt: "3D printing parametric shell process",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/icey/6.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/icey/7.png",
          size: "full",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/1.gif",
              alt: "Close-up of melting simulation effect",
            },
            {
              src: "/work_details/icey/8right.png",
              alt: "Audience engagement at showcase",
            },
          ],
          gap: "medium",
          layout: "right-heavy",
        },
        {
          type: "image",
          src: "/work_details/icey/9.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/icey/10.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/icey/11.png",
          size: "full",
        },
        {
          type: "video",
          src: "/work_details/icey/video.mp4",
          title: "ICEY! Interactive Installation",
          size: "large",
        },
      ],
    },
    impact: {
      title: "Impact & Results",
      blocks: [
        {
          type: "text",
          content:
            "ICEY! successfully created a **reflective**, **emotionally resonant** interaction that translated **climate change** from a **distant abstraction** into a **personal encounter**.",
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
            "Presented at a **design showcase** with positive **engagement** from **50+** attendees",
            "**80%** of surveyed participants reported the installation deepened their **awareness** of **climate urgency**",
            "Highlighted in **critique sessions** as a strong example of **design** translating **global issues** into **human-centered experiences**",
          ],
          size: "large",
          marginTop: "-0.25rem",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text",
          content:
            "This project reinforced the power of **human-centered design** in addressing **global challenges**. **Technical prototyping skills**—**Arduino coding**, **LED sequencing**, and **parametric modeling**—became tools for crafting **emotional resonance** and **symbolic meaning**.",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Key Challenges:** Capturing the **look** and **feel** of **melting ice** realistically within the constraints of **lightweight materials** and **accessible technology**.",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Future Iterations:** Future iterations would integrate **sound** and **haptic elements** for a **multi-sensory experience**, and expand to **public spaces** to measure broader **impact**.",
          size: "large",
        },
      ],
    },
  },
};
