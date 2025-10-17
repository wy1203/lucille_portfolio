import { WorkDetail } from "../types";

export const bikewalkWork: WorkDetail = {
  id: 5,
  title: "BikeWalk",
  category: "Commercial Space, Design Strategy",
  description:
    "Community-centered redesign for Bike Walk Tompkins, enhancing spatial efficiency, engagement, and identity through evidence-based design",
  thumbnail: "/work_details/bikewalk/hero.png",
  thumbnailImagePos: "50% 80%",
  heroImage: "/work_details/bikewalk/hero.png",
  client: "Bike Walk Tompkins (Non-profit Organization, Ithaca, NY)",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Interior Architecture",
    "Community Engagement",
    "Evidence-Based Design",
    "Spatial Planning",
    "Brand Identity Integration",
    "Human-Centered Design",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins - overview 1.svg",
              caption: "BikeWalk Tompkins - overview 1",
            },
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins overview 2.svg",
              caption: "BikeWalk Tompkins overview 2",
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Project Vision:** BikeWalk is a **community-centered redesign project** for **Bike Walk Tompkins**, a non-profit bike repair shop based in **Ithaca, New York**. The project aims to enhance **spatial efficiency**, **community engagement**, and **brand identity** through an **evidence-based design** approach that balances functionality and inclusivity.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/1.png",
          caption: "1",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Goal:** Reimagine the existing repair and community space to optimize **workflow, storage, and accessibility**, while fostering a welcoming environment where **cyclists of all ages and skill levels** can learn, collaborate, and repair together.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/2.png",
          caption: "2",
          size: "full",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins - strategy analysis.svg",
              caption: "BikeWalk Tompkins - strategy analysis",
            },
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins - strategy analysis 2.svg",
              caption: "BikeWalk Tompkins - strategy analysis 2",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Research Foundation:** The design process began with **observational studies**, **staff interviews**, and **spatial workflow mapping** to identify inefficiencies in storage, repair flow, and user circulation. Analysis of user demographics revealed the need for clearer zoning, more intuitive tool placement, and expanded communal areas to accommodate workshops and events.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/3left.png",
              caption: "3left",
              size: 41,
            },
            {
              src: "/work_details/bikewalk/3middle.png",
              caption: "3middle",
              size: 29,
            },
            {
              src: "/work_details/bikewalk/3right.png",
              caption: "3right",
              size: 29,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "**Design Approach:** Using evidence-based insights, the redesign prioritizes **efficiency, visibility, and inclusivity**. A clear hierarchy of space divides the shop into **three functional zones**: (1) a repair and tool zone for mechanics, (2) a flexible learning and workshop area, and (3) a community engagement zone for events and education. The workflow now follows the intuitive rhythm of a cycling loop—enter, repair, collaborate, and connect.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/4left.png",
              caption: "4left",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4middle.png",
              caption: "4middle",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4right.png",
              caption: "4right",
              size: 33,
            },
          ],
          gap: "small",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          imageWidth: 80,
          textWidth: 30,
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - design solution.svg",
            caption: "BikeWalk Tompkins - design solution",
          },
          text: {
            content:
              "**Spatial Strategy:** The redesigned layout translates the **rhythm of cycling** into spatial form—fluid pathways, open sightlines, and dynamic activity zones. Modular storage and mobile workbenches allow flexible reconfiguration for group repairs or large community events. Lighting, flooring, and color accents subtly guide movement and reinforce brand cohesion.",
            size: "normal",
          },
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/5left.png",
              caption: "5left",
            },
            {
              src: "/work_details/bikewalk/5right.png",
              caption: "5right",
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Materiality & Identity:** Industrial materials like **reclaimed wood**, **powder-coated steel**, and **rubber flooring** reflect the organization’s values of sustainability and repair. Branding elements—logos, signage, and color bands inspired by **bike lane markings**—create visual continuity between the physical and digital identities of Bike Walk Tompkins.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/6.png",
          caption: "6",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/7.png",
          caption: "7",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:** The space fosters **accessibility and empowerment**. Adjustable workstations accommodate diverse users, while open workshop areas encourage collaboration and mentorship. A dedicated corner for community gatherings and digital kiosks strengthens engagement beyond the physical space, uniting **education, repair, and advocacy** under one cohesive design.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            { src: "/work_details/bikewalk/8.png", caption: "8" },
            { src: "/work_details/bikewalk/9.png", caption: "9" },
          ],
          layout: "equal",
          gap: "medium",
        },
      ],
    },
    impactAndResults: {
      title: "Impact & Results",
      blocks: [
        {
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins - impact.svg",
          caption: "BikeWalk Tompkins - impact",
        },
        {
          type: "text",
          content:
            "**Project Impact:** BikeWalk demonstrates how **evidence-based spatial design** can elevate community organizations by improving both function and identity. The redesign enhances safety, accessibility, and engagement while reinforcing the organization’s role as a local hub for sustainable mobility and education.",
          size: "normal",
        },
        {
          type: "list",
          listType: "unordered",
          heading: "**Key Outcomes:**",
          items: [
            "Optimized workshop layout improving tool visibility and circulation efficiency",
            "Integrated community zones supporting education, repair, and collaboration",
            "Unified brand presence through coordinated interior and digital identity",
            "Enhanced user inclusivity and safety through ergonomic and accessible design strategies",
          ],
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/10left.png",
              caption: "10left",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/10middle.png",
              caption: "10middle",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/10right.png",
              caption: "10right",
              size: 33,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "The redesign transforms Bike Walk Tompkins into a **model of inclusive community infrastructure**, merging repair, education, and advocacy into a cohesive spatial experience that supports both sustainability and empowerment.",
          size: "normal",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - reflection.svg",
            caption: "BikeWalk Tompkins - reflection",
          },
          text: {
            content:
              "Redesigning BikeWalk reinforced my belief that **spatial design is a catalyst for community connection**. This project required balancing operational functionality with social mission—translating everyday repair tasks into opportunities for collaboration, education, and inclusion.\n\nThe process strengthened my approach to **evidence-based design**—from workflow analysis to stakeholder feedback integration. Future directions include exploring **adaptive modular systems** for pop-up bike workshops and expanding the design into a **city-wide identity network**, connecting repair, mobility, and advocacy through cohesive spatial storytelling.",
            size: "normal",
          },
        },
      ],
    },
  },
};
