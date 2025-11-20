import { WorkDetail } from "../types";

export const bikewalkWork: WorkDetail = {
  id: 5,
  title: "BikeWalk",
  category: "Commercial Space, Design Strategy",
  description:
    "Community centered redesign for Bike Walk Tompkins to enhance community engagement, spatial efficiency, and brand identity",
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
          type: "text-image",
          layout: "text-left",
          text: {
            title: "Goal and Offering",
            content:
              "**BikeWalk** is a community-centered redesign project for **Bike Walk Tompkins**, a non-profit bike repair organization in Ithaca, New York. The project reimagines their existing space to enhance spatial efficiency, community engagement, and brand identity through a **human-centered and evidence-based design approach**. \n\n The design vision was to transform a crowded repair shop into a **flexible community hub**—a space where cyclists of all ages and skill levels can repair, learn, and connect.",
            size: "normal",
          },
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - overview 1.svg",
            alt: "Multifunctional community hub concept",
          },
        },
        {
          type: "image",
          src: "/work_details/bikewalk/overview1.png",
          size: "full",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          content:
            "The redesign began with **field research and on-site interviews** to understand the daily realities of Bike Walk Tompkins. Our team visited the shop and spoke directly with three key members: the organization's director, a lead mechanic, and a long-term volunteer. These conversations, combined with spatial observation, revealed that the current layout no longer supported the growing demands of the organization or its community programs.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins - strategy analysis.svg",
              alt: "Research and analysis overview",
            },
            {
              src: "/work_details/bikewalk/BikeWalk Tompkins - visual selection.svg",
              alt: "Key findings from field research",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          title: "Key Findings",
          size: "normal",
          list: {
            listType: "ordered",
            items: [
              "The most pressing challenge was **bike storage.** This congestion not only disrupted circulation and safety but also **hindered visibility and workflow efficiency**.",
              "A second issue involved the **multi-use nature of the space.** Staffs need more space for workshop area.",
              "The third issue centered on **organization and comfort.** The existing tool room lacked structure, with tools scattered across surfaces and shelves. Staff also needed a **more functional office area**.",
            ],
          },
        },
        {
          type: "banner-title",
          content: "Branding Strategy",
          size: "large",
          background: "#dd7c40",
        },
        {
          type: "text",
          size: "normal",
          content:
            "A cohesive visual identity introduces BikeWalk Tompkins (BWT) across merchandise, stationery, and takeaway materials. The handwritten logo embodies motion and craftsmanship, while green and wood tones balance modernity with local warmth.",
        },
        { type: "image", src: "/work_details/bikewalk/s1.png", size: "full" },
        {
          type: "banner-title",
          content: "Social Media",
          size: "large",
          background: "#dd7c40",
        },
        { type: "image", src: "/work_details/bikewalk/s2.png", size: "xlarge" },
        {
          type: "banner-title",
          content: "Brochures",
          size: "large",
          background: "#dd7c40",
        },
        {
          type: "text",
          content:
            "The brochure outlines BWT's mission: to make cycling accessible, safe, and inclusive for everyone. It introduces the organization's community-driven values — connecting people through movement, repair, and education.",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/4middle.png",
              alt: "Branding materials overview",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4left.png",
              alt: "Logo and visual identity",
              size: 34,
            },
            {
              src: "/work_details/bikewalk/4right.png",
              alt: "Brochure and print materials",
              size: 32,
            },
          ],
          gap: "small",
        },
        {
          type: "banner-title",
          content: "Website",
          size: "large",
          background: "#dd7c40",
        },
        {
          type: "text",
          content:
            "Remaking BWT's website to establish a clear information hierarchy to ensure effective communication with brand identity elements remain consistent.",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/3left.png",
              alt: "Website homepage design",
              size: 43,
            },
            {
              src: "/work_details/bikewalk/3middle.png",
              alt: "Website services page",
              size: 29,
            },
            {
              src: "/work_details/bikewalk/3right.png",
              alt: "Website contact page",
              size: 29,
            },
          ],
          gap: "small",
        },
        {
          type: "banner-title",
          content: "Spatial Strategy",
          size: "large",
          background: "#597f55",
        },
        { type: "image", src: "/work_details/bikewalk/s3.png", size: "xlarge" },
        { type: "image", src: "/work_details/bikewalk/s7.png", size: "medium" },
        {
          type: "banner-title",
          content: "Facade",
          size: "large",
          background: "#597f55",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/s5.png",
          size: "xlarge",
        },
        {
          type: "banner-title",
          content: "Furnitures",
          size: "large",
          background: "#597f55",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/s6.png",
          size: "xlarge",
        },
        {
          type: "banner-title",
          content: "Mood Board",
          size: "large",
          background: "#597f55",
        },
        {
          type: "text",
          content:
            "Material samples — corrugated metal, wood, marmoleum flooring, and green wall paint — create a palette that feels both industrial and organic. The goal was to evoke craftsmanship while maintaining warmth and inclusivity.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/5left.png",
          size: "xlarge",
        },
        {
          type: "banner-title",
          content: "Before Intervention",
          size: "large",
          background: "#597f55",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/6.png",
          alt: "Floor plan reorganization",
          size: "xlarge",
        },
        {
          type: "banner-title",
          content: "After Intervention",
          size: "large",
          background: "#597f55",
        },
        {
          type: "text",
          content:
            "The plan reorganizes the floor into clear zones: **Reception, Office, Tool Room, Workshop, and Storage.** By reducing office size and expanding the tool area, circulation improves dramatically. Dashed arrows trace the enhanced user path — from reception to repair area — ensuring efficiency, visibility, and accessibility.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/7.png",
          alt: "User circulation path",
          size: "xlarge",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/8.png",
          alt: "Interior design features",
          size: "full",
        },
        {
          type: "text",
          size: "normal",
          list: {
            listType: "unordered",
            items: [
              "**Vertical wall-mounted racks** now accommodate more **bicycles**, maximizing space and improving safety.",
              "The central zone becomes a **flexible workshop area**—used for repairs during regular operations and easily cleared for community classes or events.",
              "A **reorganized tool room** forms the operational core, featuring shelving, pegboards, and modular carts that improve access and reduce clutter.",
              "A **Welcome Station** near the entrance showcases tools, pamphlets, and brand elements—immediately connecting visitors to the organization's mission.",
              "The **small office** was redesigned for **function and comfort**, featuring a height-adjustable desk, ergonomic chair, and improved lighting—creating a calm, professional workspace without isolating staff from the main floor.",
            ],
          },
        },
        {
          type: "banner-title",
          content: "Product Design",
          size: "large",
          background: "#dd7c40",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/Screenshot 2025-10-20 233957.png",
          alt: "Vertical bike rack system design",
          size: "xlarge",
        },
        {
          type: "text",
          content:
            "To address spatial crowding, a **vertical bike rack system** was developed. Curved rails allow users to lift bikes easily and store more efficiently, increasing capacity without sacrificing accessibility.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/Screenshot 2025-10-20 234015.png",
          alt: "Bike rack usage process visualization",
          size: "xlarge",
        },
        {
          type: "text",
          content:
            "The process visualization shows a **three-step motion** — **Align, Lift, Secure** — that simplifies handling for users of all strengths.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/s8.png",
          alt: "Bike rack usage process visualization",
          size: "xlarge",
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
              src: "/work_details/bikewalk/d1.png",
              alt: "Design solution detail 1",
              size: 53,
            },
            {
              src: "/work_details/bikewalk/d2.png",
              alt: "Design solution detail 2",
              size: 45,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/d3.png",
              alt: "Design solution detail 3",
              size: 60,
            },
            {
              src: "/work_details/bikewalk/d4.png",
              alt: "Design solution detail 4",
              size: 30,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/d5.png",
          alt: "Design solution detail 5",
          size: "xlarge",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/d6.png",
          alt: "Design solution detail 6",
          size: "xlarge",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "image-textlist",
          layout: "image-left",
          gap: "medium",
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - impact.svg",
            alt: "Project impact overview",
          },
          list: {
            listType: "unordered",
            items: [
              "**Optimized Layout** — improved circulation and tool visibility.",
              "**Community Zones** — flexible areas for teaching, repair, and events.",
              "**Unified Brand** — consistent identity from signage to social media.",
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
              "The future of BWT lies in flexible **pop-up workshops**, **mobile repair units**, and a **city-wide advocacy network** that connects all cyclists under one shared identity. Through this redesign, **BikeWalk Tompkins** evolves from a repair shop into a **movement hub** — a living example of how design can mobilize community, empower users, and build sustainable culture.",
            size: "normal",
          },
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - reflection.svg",
            alt: "Future vision and reflection",
          },
        },
      ],
    },
  },
};
