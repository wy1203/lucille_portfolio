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
          title: "Goal and Offering",
          content:
            "**ICEY!** is an interactive device that mimics melting Arctic ice to spark climate change awareness. A 3D-printed parametric shell embedded with LED lighting and controlled via Arduino renders slow, fading glows that resemble ice loss under warming conditions. The goal is to encourage environmental care by transforming an abstract crisis into a tangible, contemplative encounter.",
        },
        {
          type: "image",
          src: "/work_details/icey/ICEY! - overview.svg",
          caption: "ICEY! - overview",
          alt: "ICEY! Overview",
          size: "xlarge",
        },
        {
          type: "image",
          src: "/work_details/icey/thumbnail.png",
          caption: "thumbnail",
          alt: "ICEY! Overview",
          size: "xlarge",
        },
      ],
    },

    strategyAndAnalysis: {
      title: "Strategy & Analysis",
      blocks: [
        {
          type: "text",
          title: "Intent & Goal",
          content:
            "Translate the slow violence of climate change into a felt timescale. ICEY! frames melting not as spectacle but as a durational signal, prompting quiet reflection rather than alarm fatigue.",
        },
        {
          type: "text",
          title: "Research and Design Process",
          content:
            "To ground the project in both empathy and evidence, I conducted multiple research and ideation activities:",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/2right.png",
              caption: "2right",
              alt: "Close-up of geometric lattice structure",
              size: 40,
            },
            {
              src: "/work_details/icey/3left.png",
              caption: "3left",
              alt: "Interactive installation in exhibition space",
              size: 33,
            },
          ],
          gap: "large",
        },
        {
          type: "text",
          title: "1. Mind Mapping",
          content:
            "Explored questions of when, how, and why polar ice melts and brainstormed possible design responses.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/b1.png",
              caption: "b1",
              alt: "Mind mapping detail 1",
              size: 47,
            },
            {
              src: "/work_details/icey/b2.png",
              caption: "b2",
              alt: "Mind mapping detail 2",
              size: 53,
            },
          ],
          layout: "equal",
          gap: "medium",
        },
        {
          type: "text",
          title: "2. Cultural Probe",
          content:
            "Interviewed **5 participants** about their daily sustainable and unsustainable habits to understand perceptions of climate change.",
        },
        {
          type: "image",
          src: "/work_details/icey/7.png",
          caption: "7",
          size: "xlarge",
        },
        {
          type: "text",
          title: "3. Morphological Chart",
          content:
            "ombined potential forms and functions of the installation based on user interviews and feedback on **10+ initial foil prototypes.**",
        },
        {
          type: "image",
          src: "/work_details/icey/4.png",
          caption: "4",
          size: "xlarge",
        },
        {
          type: "text",
          title: "4. Prototyping",
          content:
            "Stage 1 – Rapid foil mockups to explore surface and translucency. \n Stage 2 – Mid-fidelity prototypes integrating Arduino Grove Kit for LED tests. \n Stage 3 – High-fidelity 3D-printed model for final user experience evaluation.",
        },
        {
          type: "image",
          src: "/work_details/icey/5left.png",
          caption: "5left",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/icey/5right.png",
          caption: "5right",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/1.gif",
              caption: "1",
              alt: "Close-up of melting simulation effect",
              size: 25,
            },
            {
              src: "/work_details/icey/8right.png",
              caption: "8right",
              alt: "Audience engagement at showcase",
              size: 75,
            },
          ],
          gap: "medium",
          layout: "right-heavy",
        },
        {
          type: "text",
          title: "5. Evaluation",
          content:
            "10 participants** were surveyed about ICEY!’s form, LED color temperature, and emotional resonance. Feedback highlighted how subtle, dimming glows communicated environmental fragility more effectively than literal melting visuals.",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/icey/6.png",
              caption: "6",
              alt: "Evaluation results",
              size: 70,
            },
            {
              src: "/work_details/icey/3color.png",
              caption: "3color",
              alt: "Color palette exploration",
              size: 13,
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "image",
          src: "/work_details/icey/9.png",
          caption: "9",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/icey/10.png",
          caption: "10",
          size: "large",
        },
      ],
    },

    designSolution: {
      title: "Design Solution",
      blocks: [
        { type: "text", title: "Final Product", content: "" },
        {
          type: "image",
          src: "/work_details/icey/11.png",
          caption: "11",
          size: "xlarge",
        },
        {
          type: "video",
          src: "/work_details/icey/Final Product.mp4",
          caption: "Final Product.mp4",
          title: "ICEY! Interactive Installation",
          size: "large",
        },
        {
          type: "video",
          src: "/work_details/icey/video.mp4",
          caption: "video.mp4",
          title: "ICEY! Interactive Installation",
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
            title: "\nKey Outcome",
            content:
              "- Presented at a design showcase with positive engagement from 50+ attendees.\n - 80% of participants reported greater climate awareness and emotional connection.\n - Recognized in critiques as a strong example of design translating global issues into human-centered experiences.",
            size: "normal",
          },
          image: {
            src: "/work_details/icey/ICEY! - impact & result.svg",
            caption: "ICEY! - impact & result",
            alt: "ICEY! Reflection",
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
            title: "\nFuture Iterations",
            content:
              "Incorporate **soundscapes** and **haptic feedback** for deeper multisensory immersion. Explore **solar-powered** and **outdoor deployments** that connect ICEY!'s behavior to live temperature or CO₂ data for real-time climate storytelling.",
            size: "normal",
          },
          image: {
            src: "/work_details/icey/ICEY! - reflection.svg",
            caption: "ICEY! - reflection",
            alt: "ICEY! Reflection",
          },
        },
      ],
    },
    other: {
      title: "ICEY! Poster",
      blocks: [
        {
          type: "image",
          src: "/work_details/icey/ICEY! Poster.png",
          caption: "ICEY! Poster",
          alt: "ICEY! Project Poster",
          size: "large",
        },
      ],
    },
  },
};
