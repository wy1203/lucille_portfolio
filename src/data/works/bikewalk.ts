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
          type: "text",
          content:
            "**BikeWalk** is a community-centered redesign project for **Bike Walk Tompkins**, a non-profit bike repair organization in Ithaca, New York. The project reimagines their existing space to enhance spatial efficiency, community engagement, and brand identity through a **human-centered and evidence-based design approach**.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "The design vision was to transform a crowded repair shop into a **flexible community hub**—a space where cyclists of all ages and skill levels can repair, learn, and connect.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins overview 2.svg",
          caption: "BikeWalk Tompkins overview 2",
          alt: "BikeWalk design vision",
          size: "medium",
        },
        {
          type: "text",
          content:
            "The project reimagines the organization's physical environment as a **multifunctional, inclusive hub** that strengthens community ties through design. Guided by principles of **evidence-based design and spatial storytelling**, the redesign aligns **form, function, and identity** to serve the diverse needs of cyclists, volunteers, and local residents.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins - overview 1.svg",
          caption: "BikeWalk Tompkins - overview 1",
          alt: "Multifunctional community hub concept",
          size: "medium",
        },
        {
          type: "text",
          content:
            "The vision was to **transform an overburdened repair shop into a vibrant civic space** — one that reflects the organization's mission of accessibility and sustainability while enhancing operational efficiency.",
          size: "normal",
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
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins - strategy analysis.svg",
          caption: "BikeWalk Tompkins - strategy analysis",
          alt: "Research and analysis overview",
          size: "medium",
        },
        {
          type: "title",
          content: "**Key Findings**",
          size: "medium",
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "1. **The most pressing challenge was bike storage.**\nDuring our visit, nearly **forty bicycles were crowded together** in a narrow main room, many leaning against one another due to limited rack capacity. Every inch of wall space was used, yet the store still lacked sufficient room for incoming repairs and community workshops. This congestion not only disrupted circulation and safety but also **hindered visibility and workflow efficiency**.",
            size: "normal",
          },
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - visual selection.svg",
            caption: "BikeWalk Tompkins - visual selection",
            alt: "Key findings from field research",
          },
        },
        {
          type: "text",
          content:
            "2. **A second issue involved the multi-use nature of the space.**\nBike Walk Tompkins regularly hosts **hands-on repair workshops** for students and residents, where groups gather to learn maintenance techniques. During these sessions, the cramped layout left little room for movement or collaboration. Staff expressed a strong need for a layout that could **quickly transform between everyday operations and public events**, balancing flexibility with clarity.\n\n3. **The third issue centered on organization and comfort.**\nThe existing tool room lacked structure, with tools scattered across surfaces and shelves. Staff also needed a **more functional office area**—a quiet, comfortable space for administrative work, scheduling, and outreach, separate from the main repair area.",
        },
        { type: "title", content: "**Design Insights**", size: "medium" },
        {
          type: "text",
          content: "These findings shaped three core design strategies:",
          size: "normal",
        },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "1. **Spatial Flow & Storage Efficiency:** Introduce vertical storage and wall-mounted racks to accommodate more bikes, freeing floor space for workshops and improving accessibility.\n\n2. **Tool Organization & Visibility:** Create a **systematic tool room** with clear shelving, pegboards, and labeled zones. Add a **welcoming tool wall** at the entrance to immediately communicate BWT's identity and functionality.\n\n3. **Workplace Comfort & Brand Integration:** Convert the back room into a **functional office** with ergonomic furniture and brand-aligned finishes to support comfort, focus, and cohesion.",
            size: "normal",
          },
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - visual selection (1).svg",
            caption: "BikeWalk Tompkins - visual selection (1)",
            alt: "Design insights and strategies",
          },
        },
        {
          type: "text",
          content:
            "By mapping movement, observing behavior, and listening to users, the analysis framed design as a bridge between **operational efficiency and community connection.**",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text",
          content:
            "The **BikeWalk** redesign transforms research findings into a dynamic, inclusive, and identity-driven space. The shop is reimagined as both a **repair environment and a community experience**, connecting physical workflow with social engagement.",
          size: "normal",
        },
        { type: "title", content: "**Spatial Design**", size: "medium" },
        {
          type: "text-image",
          layout: "text-right",
          text: {
            content:
              "The spatial concept draws inspiration from the **circular rhythm of cycling**—a continuous loop of motion, repair, and renewal. The layout organizes the shop into a clear sequence: **arrival, repair, collaboration, and connection.**\n\n**The spatial design connects with branding** messages by showcasing cohesive yellow and green tones, highlighting accent colors with perforated panels promotes brand identity and encourages a thriving biking community.",
            size: "normal",
          },
          image: {
            src: "/work_details/bikewalk/BikeWalk Tompkins - visual selection (2).svg",
            caption: "BikeWalk Tompkins - visual selection (2)",
            alt: "Spatial design concept",
          },
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/5left.png",
              caption: "5left",
              alt: "Material palette and samples",
              size: 75,
            },
            {
              src: "/work_details/bikewalk/5right.png",
              caption: "5right",
              alt: "Material application study",
              size: 31,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "Material samples — corrugated metal, wood, marmoleum flooring, and green wall paint — create a palette that feels both industrial and organic. The goal was to evoke craftsmanship while maintaining warmth and inclusivity.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/6.png",
          caption: "6",
          alt: "Floor plan reorganization",
          size: "large",
        },
        {
          type: "text",
          content:
            "The plan reorganizes the floor into clear zones: **Reception, Office, Tool Room, Workshop, and Storage.** By reducing office size and expanding the tool area, circulation improves dramatically.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/7.png",
          caption: "7",
          alt: "User circulation path",
          size: "large",
        },
        {
          type: "text",
          content:
            "Dashed arrows trace the enhanced user path — from reception to repair area — ensuring efficiency, visibility, and accessibility.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/8.png",
          caption: "8",
          alt: "Interior design features",
          size: "large",
        },
        {
          type: "text",
          content:
            "• **Vertical wall-mounted racks** now accommodate more **bicycles**, maximizing space and improving safety.\n• The central zone becomes a **flexible workshop area**—used for repairs during regular operations and easily cleared for community classes or events.\n• A **reorganized tool room** forms the operational core, featuring shelving, pegboards, and modular carts that improve access and reduce clutter.\n• A **Welcome Station** near the entrance showcases tools, pamphlets, and brand elements—immediately connecting visitors to the organization's mission.\n• The **small office** was redesigned for **function and comfort**, featuring a height-adjustable desk, ergonomic chair, and improved lighting—creating a calm, professional workspace without isolating staff from the main floor.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/9.png",
          caption: "9",
          alt: "Exterior facade design",
          size: "large",
        },
        {
          type: "text",
          content:
            "From the outside, the refreshed façade uses wood, white panels, and orange accents to invite passersby in. Outdoor seating and a bike lane mural turn the front lot into a community plaza, making BWT a recognizable neighborhood landmark.",
          size: "normal",
        },
        { type: "title", content: "\n\n**Branding**", size: "medium" },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/4middle.png",
              caption: "4middle",
              alt: "Branding materials overview",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4left.png",
              caption: "4left",
              alt: "Logo and visual identity",
              size: 34,
            },
            {
              src: "/work_details/bikewalk/4right.png",
              caption: "4right",
              alt: "Brochure and print materials",
              size: 32,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "• A cohesive visual identity introduces **BikeWalk Tompkins (BWT)** across merchandise, stationery, and takeaway materials. The handwritten logo embodies motion and craftsmanship, while neutral whites and wood tones balance modernity with local warmth.\n• The brochure outlines BWT's mission: **to make cycling accessible, safe, and inclusive for everyone.** It introduces the organization's **community-driven values** — connecting people through movement, repair, and education.\n• Inside, visitors find clear descriptions of services like **bike workshops** and **repairs**, paired with a simple pricing layout for road, hybrid, and electric bikes. The brand's voice is consistent, friendly, and practical, ensuring approachability for both first-time and long-time riders.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/3left.png",
              caption: "3left",
              alt: "Website homepage design",
              size: 43,
            },
            {
              src: "/work_details/bikewalk/3middle.png",
              caption: "3middle",
              alt: "Website services page",
              size: 29,
            },
            {
              src: "/work_details/bikewalk/3right.png",
              caption: "3right",
              alt: "Website contact page",
              size: 29,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "• **Remaking BWT's website to establish a clear information hierarchy to ensure effective communication with brand identity elements remain consistent.**\n\nWebsite, pamphlets, posters, and merchandise bring consistency across touchpoints — from print to digital to physical space — reinforcing a unified, recognizable image for the community.",
          size: "normal",
        },
        { type: "title", content: "**Product Design**", size: "medium" },
        {
          type: "image",
          src: "/work_details/bikewalk/Screenshot 2025-10-20 233957.png",
          caption: "Screenshot 2025-10-20 233957",
          alt: "Vertical bike rack system design",
          size: "large",
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
          caption: "Screenshot 2025-10-20 234015",
          alt: "Bike rack usage process visualization",
          size: "large",
        },
        {
          type: "text",
          content:
            "The process visualization shows a **three-step motion** — **Align, Lift, Secure** — that simplifies handling for users of all strengths.",
          size: "normal",
        },
      ],
    },
    impactAndResults: {
      title: "Impact",
      blocks: [
        {
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins - impact.svg",
          caption: "BikeWalk Tompkins - impact",
          alt: "Project impact overview",
          size: "medium",
        },
        {
          type: "text",
          content:
            "The redesign delivers tangible outcomes across four dimensions:\n\n• **User Inclusivity** — accessible layouts, wider pathways, and intuitive organization.\n• **Optimized Layout** — improved circulation and tool visibility.\n• **Community Zones** — flexible areas for teaching, repair, and events.\n• **Unified Brand** — consistent identity from signage to social media.\n\nThe redesign transforms Bike Walk Tompkins into a **model of inclusive community infrastructure**, merging repair, education, and advocacy into a cohesive spatial experience that supports both sustainability and empowerment.",
          size: "normal",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text",
          content:
            "The project culminates in a systemic transformation — not just a new space, but a new way of connecting people through design.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/BikeWalk Tompkins - reflection.svg",
          caption: "BikeWalk Tompkins - reflection",
          alt: "Future vision and reflection",
          size: "medium",
        },
        {
          type: "text",
          content:
            "The circular roadmap illustrates the next evolution: shifting from **Disconnected Bike Services** to an **Integrated Bike Ecosystem.** The future of BWT lies in flexible **pop-up workshops**, **mobile repair units**, and a **city-wide advocacy network** that connects all cyclists under one shared identity.\n\nThrough this redesign, **BikeWalk Tompkins** evolves from a repair shop into a **movement hub** — a living example of how design can mobilize community, empower users, and build sustainable culture.",
          size: "normal",
        },
      ],
    },
  },
};
