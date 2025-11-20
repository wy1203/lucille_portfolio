import { WorkDetail } from "../types";

export const nimbusWork: WorkDetail = {
  id: 6,
  title: "NIMBUS",
  category: "Hospitality",
  description:
    "Luxury remote tourism of a mobile hot air balloon hotel in NEOM region",
  thumbnail: "/work_details/nimbus/hero.png",
  thumbnailImagePos: "50% 60%",
  thumbnailImageFit: "cover",
  heroImage: "/work_details/nimbus/hero.png",
  heroImagePosition: "50% 60%",
  heroImageFit: "cover",
  client: "Academic design project",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Interactive Design",
    "Spatial Installation",
    "Lighting Design",
    "Material Innovation",
    "Environmental Design",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          title: "Goal and Offering",
          content:
            "NIMBUS is a carbon-neutral, mobile hotel concept housed within a hot air balloon, redefining remote tourism through sustainable, lightweight, and luxurious design. This is an immersive hospitality experience that merges technological innovation with environmental consciousness, offering a once-in-a-lifetime journey through the skies of NEOM, Saudi Arabia.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/nimbus/overview.png",
              alt: "NIMBUS floating hotel concept",
              size: 55,
            },
            {
              src: "/work_details/nimbus/overview2.png",
              alt: "NIMBUS floating hotel concept",
              size: 44,
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
          type: "text",
          title: "Target Users",
          size: "normal",
          list: {
            listType: "unordered",
            items: [
              "**High-net-worth travelers** seeking exclusive, sustainable adventures.",
              "**Influencers and professionals** looking for visually iconic experiences.",
              "**Couples** desiring privacy, intimacy, and comfort within a minimal footprint.",
            ],
          },
        },
        {
          type: "image",
          src: "/work_details/nimbus/target_users.png",
          alt: "User research and journey mapping",
          size: "full",
        },
        {
          type: "text",
          title: "User Journey Map",
          content:
            "From this, a **user journey** was designed to reflect the dual nature of motion and stillness: ascent and flight representing discovery, descent symbolizing grounding and reflection. The experience cycle guided how light, circulation, and privacy were composed within NIMBUS's compact footprint.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/nimbus/4.png",
          alt: "User journey and experience cycle",
          size: "full",
        },
        { type: "title", content: "Ideation Facade Sketches", size: "large" },
        {
          type: "image",
          src: "/work_details/nimbus/5.png",
          alt: "3D-printed structure details",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Parametric Facade",
          content:
            "NIMBUS's architecture draws from cloud morphology — soft, continuous, and adaptive. The resulting form is a biophilic and cube-like structure suspended beneath a hot air balloon, balancing geometric clarity with organic flow.",
          list: {
            items: [
              "Glazing glass can be polycarbonate.",
              "The structure material is 3d printable,  lightweight.",
            ],
          },
        },
        {
          type: "image",
          src: "/work_details/nimbus/6.png",
          alt: "Facade perforation and ventilation system",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Ideation Floor Plan Sketch",
          content:
            "**Moving from circular form to a rectangular structure** gave more flexibility with space planning, simplified the placement of furniture, and aligned better with practical construction considerations—without losing the lightweight, sustainable qualities of the concept.",
        },
        {
          type: "image",
          src: "/work_details/nimbus/7left.png",
          alt: "Interior spatial organization",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Spatial Layout",
          content:
            "Designed for two adult guests, the interior prioritizes **clarity, balance, and comfort** within a compact volume. Upon entry, guests encounter a **lounge area** that transitions into a **bedroom and bathroom zone**. The **upper level** contains a **bar and pilot operating deck**, emphasizing luxury and functionality without excess.\n\nTo ensure flight safety, **all furniture is floor-anchored**, integrating seamlessly with the flooring and structure. Technology enhances experience efficiency — smart lighting, responsive wall panels, and built-in storage systems maintain a sense of order and calm.",
        },
        {
          type: "image",
          src: "/work_details/nimbus/8.png",
          alt: "Floor-anchored furniture system",
          size: "full",
        },
        {
          type: "text",
          title: "Material and Technology Integration",
          size: "normal",
          list: {
            listType: "unordered",
            items: [
              "**Carbon fiber and aluminum** provide strength-to-weight efficiency.",
              "**Translucent polycarbonate** panels diffuse natural light.",
              "**Recycled composite flooring** supports durability and acoustic control.",
              "**All 3D Printable**",
            ],
          },
        },
        {
          type: "image",
          src: "/work_details/nimbus/7right.png",
          alt: "Material palette and technology integration",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Adaptive Pergola Roof System",
          content:
            "NIMBUS employs a retractable pergola system that transitions between open and closed states depending on climate and operational mode. When traveling in air, the disassembled pergola is stored in the pilot's room; once landed, it reassembles into a mobile sliding pergola that provide solar and rain protection. The pergola uses weatherproof taping and lightweight jointed tracks to minimize load and maximize flexibility.",
        },
        {
          type: "image",
          src: "/work_details/nimbus/10.png",
          alt: "Adaptive pergola roof system",
          size: "large",
        },
        {
          type: "text",
          title: "Exterior Facade",
          content:
            "The exterior facade consists of four sides with hole sizes according to interior function—larger for public spaces, smaller for private zones. These perforations balance natural light, structural stability, and aerodynamics, while defining NIMBUS's iconic identity.",
        },
        {
          type: "image",
          src: "/work_details/nimbus/11.png",
          alt: "Adaptive pergola roof system",
          size: "xlarge",
        },
        {
          type: "text",
          title: "Interior Experience",
          content: "",
        },
        {
          type: "image",
          src: "/work_details/nimbus/interior1.png",
          alt: "Adaptive pergola roof system",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/nimbus/interior2.png",
          alt: "Adaptive pergola roof system",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/nimbus/interior3.png",
          alt: "Adaptive pergola roof system",
          size: "full",
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
              src: "/work_details/nimbus/s1.png",
              alt: "Design solution detail 1",
              size: 51,
            },
            {
              src: "/work_details/nimbus/s2.png",
              alt: "Design solution detail 2",
              size: 49,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/nimbus/s3.png",
              alt: "Design solution detail 3",
              size: 52,
            },
            {
              src: "/work_details/nimbus/s4.png",
              alt: "Design solution detail 4",
              size: 50,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/nimbus/s5.png",
              alt: "Design solution detail 5",
              size: 52,
            },
            {
              src: "/work_details/nimbus/s6.png",
              alt: "Design solution detail 6",
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
              src: "/work_details/nimbus/s7.png",
              alt: "Design solution detail 5",
              size: 49,
            },
            {
              src: "/work_details/nimbus/s8.png",
              alt: "Design solution detail 6",
              size: 52,
            },
          ],
          layout: "equal",
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
          gap: "medium",
          image: {
            src: "/work_details/nimbus/NIMBUS - visual selection (5).svg",
            alt: "Project impact and outcomes",
          },
          list: {
            listType: "unordered",
            title: "Key Outcomes",
            items: [
              "Established a **carbon-neutral, mobile hospitality framework** for NEOM's desert tourism model.",
              "Improved **spatial organization** and **user comfort** through research-based interior redesign.",
              "Developed a **lightweight structural system** capable of supporting flight and stability.",
              "Enhanced brand and experiential value through **technology-integrated, minimalist luxury.**",
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
              "Designing NIMBUS required navigating between **aerospace constraints, spatial efficiency, and experiential storytelling.** The project deepened my understanding of how material systems, environmental psychology, and technology can converge to shape meaningful luxury experiences.\n\nCollaborating with NEOM's existing concept framework and Cornell's interdisciplinary team reinforced the importance of designing **for mobility and minimalism**—not as limitations, but as opportunities for innovation.\n\nMoving forward, I aim to expand this exploration into **responsive energy systems, lightweight fabrication methods, and adaptable user interfaces**, further aligning high-end hospitality with the principles of circular, regenerative design.",
            size: "normal",
          },
          image: {
            src: "/work_details/nimbus/NIMBUS - visual selection.svg",
            alt: "Reflection and future directions",
          },
        },
      ],
    },
  },
};
