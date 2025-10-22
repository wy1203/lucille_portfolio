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
            "**ICEY!** is an interactive device that mimics melting Arctic ice to spark climate change awareness. A 3D-printed parametric shell embedded with LED lighting and controlled via Arduino renders slow, fading glows that resemble ice loss under warming conditions. The goal is to encourage environmental care by transforming an abstract crisis into a tangible, contemplative encounter.",
        },
        {
          type: "text",
          content:
            "**Design Inspiration**: \n Drawn from the fragility of polar ice caps, the geometric lattice expresses both strength and vulnerability—a formal metaphor for the urgent reality of global warming.",
        },
        {
          type: "text",
          content:
            "**Human-Centered Experience**: \n By engaging viewers visually and emotionally, the device invites people to pause, reflect, and act with greater environmental consciousness.",
        },
        {
          type: "image",
          src: "/work_details/icey/thumbnail.png",
          alt: "ICEY! Overview",
          size: "large",
        },
        {
          type: "text",
          content: `**Global Warming** --> Symbolizes the urgent reality through warning red lights. \n **Fragile Process** --> Geometric lattice shows ice's fragility and resilience. \n **Climate Awareness** --> Installation shows slow, fragile process of melting ice. \n **ICEY! Installation** --> User raises environmental awareness through interaction.`,
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - overview.svg",
          alt: "ICEY! Overview",
          size: "large",
        },
      ],
    },

    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          content:
            "**Intent & Goal**: \n Translate the slow violence of climate change into a felt timescale. ICEY! frames melting not as spectacle but as a durational signal, prompting quiet reflection rather than alarm fatigue.",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - strategy & analysis.svg",
          alt: "ICEY! Strategy & Analysis",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Research and Design Process**: \n To ground the project in both empathy and evidence, I conducted multiple research and ideation activities:",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/2right.png",
              alt: "Close-up of geometric lattice structure",
              size: 40,
            },
            {
              src: "/work_details/icey/3left.png",
              alt: "Interactive installation in exhibition space",
              size: 33,
            },
          ],
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**1. Mind Mapping**: Explored questions of when, how, and why polar ice melts and brainstormed possible design responses.",
        },
        {
          type: "image",
          src: "/work_details/icey/3right.png",
          size: "medium",
        },
        {
          type: "text",
          content:
            "**2. Cultural Probe**: Interviewed **5 participants** about their daily sustainable and unsustainable habits to understand perceptions of climate change.",
        },
        {
          type: "image",
          src: "/work_details/icey/7.png",
          size: "large",
        },
        {
          type: "text",
          content:
            "**3. Morphological Chart**: Combined potential forms and functions of the installation based on user interviews and feedback on **10+ initial foil prototypes.**",
        },
        {
          type: "image",
          src: "/work_details/icey/4.png",
          size: "large",
        },
        {
          type: "text",
          content:
            "**4. Prototyping**: \n Stage 1 – Rapid foil mockups to explore surface and translucency. \n Stage 2 – Mid-fidelity prototypes integrating Arduino Grove Kit for LED tests. \n Stage 3 – High-fidelity 3D-printed model for final user experience evaluation.",
        },
        {
          type: "image",
          src: "/work_details/icey/5left.png",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/icey/5right.png",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Experience Study**: \n **10 participants** were surveyed about ICEY!’s form, LED color temperature, and emotional resonance. Feedback highlighted how subtle, dimming glows communicated environmental fragility more effectively than literal melting visuals.",
        },
        {
          type: "image",
          src: "/work_details/icey/6.png",
          size: "large",
        },
        {
          type: "text",
          content:
            " Participant insights informed adjustments to light pacing, tactile form, and interaction triggers to ensure the device fosters reflection rather than spectacle.",
        },
        {
          type: "image",
          src: "/work_details/icey/9.png",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/icey/10.png",
          size: "large",
        },
        {
          type: "text",
          content:
            "**Technical Constraints**: \n Parametric thickness optimization balanced print time, structural rigidity, and light diffusion. A low-power, Arduino-driven modular LED system ensures energy efficiency and easy repair.",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - overview 2.svg",
          size: "large",
        },
      ],
    },

    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text-image",
          layout: "text-right",
          textWidth: 40,
          imageWidth: 60,
          image: {
            src: "/work_details/icey/ICEY! - design solution.svg",
            alt: "Parametric shell design logic",
            objectFit: "contain",
          },
          text: {
            content:
              "**Parametric Shell:** A 3D-printed lattice modulates porosity to scatter light like trapped air in ice. Thicker ribs read as persistent ice masses; thin membranes allow gradual glow loss—a spatial metaphor for thinning sheets. \n **Lighting Logic:** Arduino sequences choreograph slow dimming, intermittent pulses, and traveling ripples. A decaying spline maps brightness over time, while stochastic noise introduces natural variability—no two ‘melts’ are identical.",
            size: "normal",
          },
        },
        {
          type: "text",
          content:
            "**Assembly & Serviceability:** LED strips are segmentable and hot-swappable; cable routing follows concealed channels to preserve the sculptural read. The system runs on USB-C power for portability and low energy demand.",
        },
        {
          type: "text",
          content:
            "**Human-Centered Touchpoints:** Edge radii and surface tactility invite safe proximity; a subtle startup flare acknowledges new viewers, then returns to the ambient melt cycle—supporting both gallery flow and intimate observation.",
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
          size: "large",
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
          size: "large",
        },
        {
          type: "text",
          content:
            "**ICEY!** created a reflective, emotionally resonant interaction that transforms climate change from distant abstraction into a personal encounter.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Key Outcomes:** \n - Presented at a design showcase with positive engagement from 50+ attendees.\n - 80% of participants reported greater climate awareness and emotional connection.\n - Recognized in critiques as a strong example of design translating global issues into human-centered experiences.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "By engaging people visually and emotionally, the device invites viewers to pause, reflect, and act with heightened environmental consciousness.",
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
          size: "medium",
        },
        {
          type: "text",
          content:
            "The project reaffirmed the role of interaction design in shaping climate empathy. Technical prototyping—Arduino coding, LED sequencing, parametric modeling—became tools for crafting meaning, not just function.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Key Challenge:** Calibrating sequence responsiveness to feel alive but not theatrical—maintaining the installation’s contemplative tone.",
          size: "normal",
        },
        {
          type: "text",
          content:
            "**Future Iterations:** Incorporate **soundscapes** and **haptic feedback** for deeper multisensory immersion. Explore **solar-powered** and **outdoor deployments** that connect ICEY!’s behavior to live temperature or CO₂ data for real-time climate storytelling.",
          size: "normal",
        },
      ],
    },
    other: {
      title: "ICEY! Poster",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! Poster.png",
          alt: "ICEY! Project Poster",
          size: "large",
        },
      ],
    },
  },
};
