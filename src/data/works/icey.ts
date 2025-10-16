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
            "ICEY! is an **interactive device** that mimics **melting Arctic ice** to spark **climate change awareness**. A **3D-printed parametric shell** embedded with **LED lighting** and controlled via **Arduino** renders slow, fading glows that resemble ice loss under warming conditions. The goal is to encourage **environmental care** by transforming an abstract crisis into a **tangible, contemplative encounter**.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - overview.svg",
          alt: "ICEY! Overview",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - overview 2.svg",
          alt: "ICEY! Overview2",
          size: "full",
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
            "**Design Inspiration:** Drawn from the **fragility of polar ice caps**, the geometric lattice expresses both **strength** and **vulnerability**—a formal metaphor for the **urgent reality** of global warming.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience:** By engaging viewers **visually** and **emotionally**, the device invites people to **pause, reflect, and act** with greater environmental consciousness.",
          size: "normal",
        },
      ],
    },

    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! - strategy & analysis.svg",
          alt: "ICEY! Strategy & Analysis",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Intent & Goal:** Translate the **slow violence** of climate change into a **felt timescale**. ICEY! frames melting not as spectacle but as a **durational signal**, prompting quiet reflection rather than alarm fatigue.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Research Inputs:** Precedent scans on **glacial albedo**, color temperature, and **human perception of dimming** informed LED behaviors; ergonomic tests guided **viewing distance** and **ambient brightness** to maintain legibility in varied exhibition lighting.",
          size: "normal",
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
          type: "text",
          content:
            "**Experience Mapping:** Journey mapping identified three moments—**approach (curiosity)** → **linger (empathy)** → **depart (commitment)**—which drove pacing of light decay, pause intervals, and micro-flashes that suggest calving without dramatization.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Technical Constraints:** Parametric thickness optimization balanced **print time**, **structural rigidity**, and **light diffusion**. A low-power, **Arduino-driven** architecture with modular LED zones supports easy repair and responsible energy use.",
          size: "normal",
        },
      ],
    },

    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! - design solution.svg",
          alt: "ICEY! Design Solution",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Parametric Shell:** A 3D-printed lattice modulates **porosity** to scatter light like trapped air in ice. Thicker ribs read as persistent ice masses; thin membranes allow **gradual glow loss**—a spatial metaphor for thinning sheets.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Lighting Logic:** Arduino sequences choreograph **slow dimming, intermittent pulses, and traveling ripples**. A decaying spline maps brightness over time, while stochastic noise introduces **natural variability**—no two ‘melts’ are identical.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Assembly & Serviceability:** LED strips are **segmentable** and hot-swappable; cable routing follows concealed channels to preserve the sculptural read. The system runs on **USB-C power** for portability and low energy demand.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Human-Centered Touchpoints:** Edge radii and surface tactility invite safe proximity; a subtle **startup flare** acknowledges new viewers, then returns to the ambient melt cycle—supporting both **gallery flow** and **intimate observation**.",
          size: "normal",
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
          src: "/work_details/icey/11.png",
          size: "full",
        },
        {
          type: "video",
          src: "/work_details/icey/video.mp4",
          title: "ICEY! Interactive Installation",
          size: "medium",
        },
      ],
    },

    impactAndResults: {
      title: "Impact & Results",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! - impact & result.svg",
          alt: "ICEY! Impact & Results",
          size: "full",
        },
        {
          type: "text",
          content:
            "ICEY! created a **reflective, emotionally resonant** interaction that transforms **climate change** from distant abstraction into a **personal encounter**.",
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
            "Presented at a **design showcase** with positive **engagement** from **50+** attendees",
            "**80%** of surveyed participants reported deeper **awareness** of climate urgency",
            "Highlighted in critiques as a strong example of **design translating global issues** into **human-centered experiences**",
          ],
          size: "normal",
          marginTop: "-0.25rem",
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
          type: "text",
          content:
            "By engaging people **visually** and **emotionally**, the device invites viewers to **pause, reflect, and act** with heightened environmental consciousness.",
          size: "normal",
        },
      ],
    },

    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! - reflection.svg",
          alt: "ICEY! Reflection",
          size: "full",
        },
        {
          type: "text",
          content:
            "The project reaffirmed the role of **interaction design** in shaping **climate empathy**. Technical prototyping—**Arduino coding**, **LED sequencing**, **parametric modeling**—became tools for crafting **meaning**, not just function.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Key Challenge:** Calibrating sensor/sequence responsiveness to feel **alive but not theatrical**—maintaining the piece’s contemplative tone.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Future Iterations:** Add **soundscapes** and **haptics** for multisensory depth; explore **solar power** and outdoor deployments to couple behaviors with **real-time weather/temperature data**.",
          size: "normal",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! Poster.png",
          alt: "ICEY! Project Poster",
          size: "full",
        },
      ],
    },
  },
};
