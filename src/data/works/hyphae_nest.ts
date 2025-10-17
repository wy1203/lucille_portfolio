import { WorkDetail } from "../types";

export const hyphaeNestWork: WorkDetail = {
  id: 3,
  title: "Hyphae Nest",
  category: "Hospitality",
  description:
    "Architectural exploration of mycelium as a regenerative material for eco-utopian living",
  thumbnail: "/work_details/hyphae_nest/hero.png",
  thumbnailImagePos: "50% 50%",
  thumbnailImageFit: "cover",
  heroImage: "/work_details/hyphae_nest/hero.png",
  heroImagePosition: "50% 50%",
  heroImageFit: "cover",
  client: "Academic design project (Cornell DEA, 2024)",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Sustainable Design",
    "Material Ecology",
    "Human-Centered Design",
    "Biophilic Architecture",
    "Parametric Modeling",
    "Environmental Systems Thinking",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          content:
            "**Project Vision:** Hyphae Nest is a conceptual architectural project envisioning a **utopian, eco-friendly future**. It reimagines the built environment as a **living organism**, fostering sustainability and communal connection through bio-based materials. The project’s goal is to **promote ecological harmony** while strengthening **family and community bonds** in a self-sustaining habitat.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Offerings:** The design explores **mycelium**—a regenerative, biodegradable, and lightweight material—as a sustainable construction medium. Hyphae Nest envisions an architecture that **grows with time**, integrating structure and nature through adaptive, self-healing materials that return to the earth at the end of their lifecycle.",
          size: "normal",
        },
        {
          type: "image-trio",
          layout: "top-bottom",
          topImage: {
            src: "/work_details/hyphae_nest/1.png",
            caption: "1",
            height: "70px",
            position: "50% 40%",
          },
          bottomImages: [
            {
              src: "/work_details/hyphae_nest/2left.png",
              caption: "2left",
              alt: "Mycelial network research and biomimicry study",
              size: 50,
            },
            {
              src: "/work_details/hyphae_nest/2right.png",
              caption: "2right",
              alt: "Spatial mapping and community interaction diagrams",
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
            "**Design Foundation:** The strategy behind Hyphae Nest stems from observing **hyphal networks**, the microscopic threads that form the mycelium of fungi. These biological systems demonstrate principles of **connection, exchange, and resilience**, offering a model for rethinking architectural organization and community structure.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Analytical Approach:** The project integrates **material ecology**, **environmental psychology**, and **social design** to craft spaces that mirror natural systems. Spatial studies examined how mycelial growth patterns could inform circulation, clustering, and community gathering areas—encouraging both **private reflection** and **collective interaction**. The research highlights the potential of bio-fabricated materials to reduce carbon footprints and foster regenerative living cycles.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/3left.png",
              caption: "3left",
              alt: "Biomimicry analysis and structural mapping",
            },
            {
              src: "/work_details/hyphae_nest/3right.png",
              caption: "3right",
              alt: "Spatial and environmental strategy diagrams",
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
              caption: "4left",
              alt: "Early physical prototype using mycelium composites",
            },
            {
              src: "/work_details/hyphae_nest/4right.png",
              caption: "4right",
              alt: "Material performance and assembly study",
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
            "**Design Inspiration:** Rooted in the natural growth of **hyphae forming mycelium**, the architectural form embodies **organic expansion and interconnectivity**. Each structural component functions like a branching network—modular, adaptive, and alive. The architecture’s geometry draws from fungal root systems, mirroring how underground networks nurture and connect ecological communities.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Material System:** The design employs **mycelium-based panels** within a modular timber frame, allowing structures to grow, heal, and eventually decompose. The construction process emphasizes **circularity and biodegradability**, minimizing waste and enabling components to re-enter natural cycles. This approach transforms architecture into a **temporal ecosystem** rather than a static monument.",
          size: "normal",
        },
        {
          type: "image-trio",
          leftImage: {
            src: "/work_details/hyphae_nest/5left.png",
            caption: "5left",
            alt: "Main architectural render showing structure growth form",
            size: 50,
          },
          rightImages: [
            {
              src: "/work_details/hyphae_nest/5topright.png",
              caption: "5topright",
              alt: "Close-up view of mycelium panel textures",
              size: 60,
            },
            {
              src: "/work_details/hyphae_nest/5bottomright.png",
              caption: "5bottomright",
              alt: "Interior modular system detail",
              size: 50,
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:** Hyphae Nest embodies **interconnectedness**—fostering shared spaces that strengthen community and family relationships. The fluid circulation encourages spontaneous encounters, while semi-private alcoves allow moments of reflection. Natural light filters through porous walls, producing a calming, **biophilic atmosphere** that aligns human rhythms with environmental cycles.",
          size: "normal",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/hyphae_nest/6.png",
              caption: "6",
              alt: "Interior communal space emphasizing natural light and organic form",
            },
            {
              src: "/work_details/hyphae_nest/7right.png",
              caption: "7right",
              alt: "User experience visualization and spatial flow diagram",
            },
          ],
          layout: "left-heavy",
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
            "**Conceptual Impact:** Hyphae Nest challenges the conventions of architectural permanence by proposing **living architecture**—structures that evolve, decay, and regenerate with their environment. The project demonstrates how **biomaterial innovation** can reshape the future of sustainable housing and communal design.",
          size: "normal",
        },
        {
          type: "list",
          listType: "unordered",
          heading: "**Key Outcomes:**",
          items: [
            "Explored the architectural potential of mycelium as a structural and ecological material",
            "Developed modular design system inspired by fungal growth networks",
            "Proposed biophilic spatial strategies that enhance social and environmental well-being",
            "Redefined architectural sustainability through biodegradability and circular lifecycles",
          ],
          size: "normal",
        },
        {
          type: "text",
          content:
            "Through speculative design and material experimentation, Hyphae Nest presents a **vision for regenerative living**—where architecture coexists with the ecosystem rather than consuming it, encouraging humans to live symbiotically with their environment.",
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
            "Designing Hyphae Nest revealed how deeply **material choice shapes social connection**. By translating mycelium’s logic of growth and exchange into architectural form, the project became both a study in sustainability and a meditation on belonging. It reframed design as a **collaborative process with nature**, not merely a human endeavor.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "Future development of this concept could involve **biotechnological prototyping** and partnerships with environmental scientists to explore real-world applications of living materials. Hyphae Nest continues to inspire inquiries into how architecture can evolve beyond shelter—toward being an **active participant in ecological restoration** and human connection.",
          size: "normal",
        },
      ],
    },
  },
};
