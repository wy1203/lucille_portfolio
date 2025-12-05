import { WorkDetail } from "../types";

export const haworthWork: WorkDetail = {
  id: 10,
  title: "Workplace for Groupwork",
  category: "Commercial Space, Internship",
  description:
    "Workplace design for group collaboration in an enclosed space to enhance focus, privacy, acoustic control and high movement",
  thumbnail: "/work_details/haworth/hero.png",
  thumbnailImagePos: "50% 80%",
  heroImage: "/work_details/haworth/hero.png",
  client: "Not Applicable",
  role: "Workplace Design and Research Intern at Haworth",
  timeline: "2024",
  skills: [
    "Workplace Design",
    "Market Analysis",
    "Evidence-Based Design",
    "Spatial Planning",
    "Group Collaboration",
    "Human-Centered Design",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          title: "Project Goal",
          type: "text",
          content:
            "During my summer 2024 internship at Haworth in Holland, Michigan, I worked as a Workplace Design & Research Intern on a project that responded to an emerging gap in the market: enclosed spaces that support group collaboration, not just individual focus. I began by building a framework of 12 workplace typologies and 8 acoustic strategies, mapping them across openness, level of collaboration, and movement within the space to understand where current products fell short. Through on-site observation and analysis of existing meeting rooms and open collaboration zones, I found that teams often had to choose between good acoustics in static, table-centric rooms or flexible collaboration in noisy open areas—there was no solution that combined enclosure, acoustic control, and high movement for dynamic group work. ",
        },
        {
          type: "image",
          src: "/work_details/haworth/1.png",
          size: "full",
        },
        {
          title: "Design Response",
          type: "text",
          content:
            "In response, I developed the Modular Hub, an enclosed, reconfigurable collaboration pod that integrates workplace and acoustic performance. The hub uses angled walls and hexagonal geometry to eliminate “dead” corners and support multiple modes—small-group discussions, larger-circle conversations, and virtual meetings—within the same footprint. Acoustic felt curtains, ceiling and wall panels, integrated lighting, mobile pin-up boards, and tiered seating with built-in power create a highly functional environment that protects speech privacy while encouraging movement and participation. A family of these hubs was then planned into a 2D office floorplate, demonstrating how they can transform underused meeting rooms into flexible, acoustically controlled collaboration ecosystems for future workplaces.",
        },
        {
          type: "image",
          src: "/work_details/haworth/2.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/haworth/3.png",
          size: "full",
        },
      ],
    },
  },
};
