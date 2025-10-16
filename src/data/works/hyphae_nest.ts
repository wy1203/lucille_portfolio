import { WorkDetail } from "../types";

export const hyphaeNestWork: WorkDetail = {
  id: 3,
  title: "Hyphae Nest",
  category: "Interactive Installation, Design Strategy",
  description:
    "Biomimetic art installation exploring mycelial networks and interconnectedness",
  thumbnail: "/work_details/hyphae_nest/hero.png",
  thumbnailImagePos: "50% 50%",
  thumbnailImageFit: "cover",
  heroImage: "/work_details/hyphae_nest/hero.png",
  heroImagePosition: "50% 50%",
  heroImageFit: "cover",
  client: "Academic design project (Cornell DEA, 2024)",
  role: "Lead Designer & Creative Technologist",
  timeline: "2024",
  skills: [
    "Interactive Design",
    "Biomimicry",
    "Sensor Integration",
    "Parametric Modeling",
    "Unity",
    "Arduino",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          content:
            "**Project Vision**: Hyphae Nest is an interactive art installation that translates the hidden language of fungal networks into a tangible, immersive experience. Visitors walk through a canopy of suspended fiber-optic threads that pulse and glow in response to movement, simulating the communication patterns of mycelium. This installation bridges natural systems with digital interaction, creating a space for contemplation about interconnectedness and ecological intelligence.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "top-bottom",
          topImage: {
            src: "/work_details/hyphae_nest/1.png",
            height: "70px",
            position: "50% 40%",
          },
          bottomImages: [
            {
              src: "/work_details/hyphae_nest/2left.png",
              alt: "Mycelial network research and biomimicry study",
              size: 50,
            },
            {
              src: "/work_details/hyphae_nest/2right.png",
              alt: "User interaction study and spatial mapping",
              size: 50,
            },
          ],
          gap: "small",
        },
      ],
    },
    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          content:
            "**Research Foundation**: Through extensive study of mycological systems and sensor-based interactive art, we developed a framework that translates biological communication into aesthetic experience. The installation draws from scientific research on mycelial information transfer while creating an accessible, poetic interpretation for general audiences.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/3left.png",
              alt: "Biomimicry analysis and pattern studies",
            },
            {
              src: "/work_details/hyphae_nest/3right.png",
              alt: "Interaction strategy and sensor placement",
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/4left.png",
              alt: "Early prototype testing with fiber optics",
            },
            {
              src: "/work_details/hyphae_nest/4right.png",
              alt: "Sensor integration prototype",
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
          type: "text",
          content:
            "**Parametric Design Process**: Using Grasshopper and parametric modeling, we generated organic branching structures that mimic hyphal growth patterns. Each fiber strand follows algorithmic rules based on actual mycelial expansion, creating an authentic yet abstracted representation. The installation uses motion sensors and proximity detection to trigger light sequences that ripple through the network, visualizing invisible communication.",
          size: "normal",
        },
        {
          type: "image-trio",
          leftImage: {
            src: "/work_details/hyphae_nest/5left.png",
            alt: "Main installation view showing complete structure",
            size: 50,
          },
          rightImages: [
            {
              src: "/work_details/hyphae_nest/5topright.png",
              alt: "Close-up of fiber optic canopy",
              size: 60,
            },
            {
              src: "/work_details/hyphae_nest/5bottomright.png",
              alt: "Base structure and sensor integration",
              size: 50,
            },
          ],
          gap: "medium",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/7left.png",
              alt: "Wide view of visitor interaction within the installation",
              size: 28,
            },
            {
              src: "/work_details/hyphae_nest/6bottomleft.png",
              alt: "Wide view of visitor interaction within the installation",
              size: 33,
            },
            {
              src: "/work_details/hyphae_nest/6bottomright.png",
              alt: "Installation illuminated at night showing light patterns",
              size: 33,
            },
          ],
          gap: "medium",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/6.png",
              alt: "Interactive experience detail",
            },
            {
              src: "/work_details/hyphae_nest/7right.png",
              alt: "User interaction flow",
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Interactive Experience**: As visitors move through the space, their presence triggers cascading light patterns that spread through the fiber network like signals through mycelium. The experience is both meditative and playful, encouraging exploration while fostering awareness of how individual actions ripple through interconnected systems.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/8left.png",
              alt: "Interaction flow detail",
              size: 33,
            },
            {
              src: "/work_details/hyphae_nest/8middle.png",
              alt: "User experience journey",
              size: 33,
            },
            {
              src: "/work_details/hyphae_nest/8right.png",
              alt: "Close-up of visitor interaction with responsive elements",
              size: 33,
            },
          ],
          gap: "medium",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/hyphae_nest/9left.png",
              alt: "Additional installation view",
              size: 33,
            },
            {
              src: "/work_details/hyphae_nest/9middle.png",
              alt: "Detailed perspective",
              size: 33,
            },
            {
              src: "/work_details/hyphae_nest/9right.png",
              alt: "Final interaction detail",
              size: 33,
            },
          ],
          gap: "medium",
        },
      ],
    },
    impactAndResults: {
      title: "Impact & Results",
      blocks: [
        {
          type: "text",
          content:
            "**Exhibition Impact:** Hyphae Nest has been exhibited in three university galleries and one public art space, engaging over 2,000 visitors. The installation successfully bridged art, science, and technology, making complex biological systems accessible through embodied interaction.",
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
            "Created an award-winning installation recognized for innovative use of biomimicry in interactive art",
            "Developed reusable framework for sensor-based environmental installations",
            "Published technical documentation for parametric mycelial modeling",
            "Engaged diverse audiences in conversations about ecological systems and interconnectedness",
          ],
          size: "normal",
          marginTop: "-0.25rem",
        },
        {
          type: "text",
          content:
            "The project demonstrated how computational design and physical computing can create meaningful experiences that transform abstract scientific concepts into visceral, memorable encounters.",
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
            "This project deepened my practice at the intersection of natural systems, parametric design, and interactive technology. I learned to translate biological principles into algorithmic rules while maintaining the poetic essence of the source material. Working with fiber optics and sensor arrays expanded my technical capabilities in physical computing.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "The biggest challenge was calibrating sensor sensitivity to create responsive but not overwhelming interactions. Through iterative testing with users, we found the right balance between ambient behavior and reactive moments. Future iterations would explore outdoor installations with solar power and weather-responsive behaviors, further connecting the artificial network to environmental conditions.",
          size: "normal",
        },
      ],
    },
  },
};
