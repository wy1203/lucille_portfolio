import { WorkDetail } from "../types";

export const miamiWork: WorkDetail = {
  id: 9,
  title: "Miami-Dade Workplace Design",
  category: "Commercial Space, Internship",
  description:
    "Workplace design for Miami-Dade Water to enhance brand identity, spatial efficiency, and function",
  thumbnail: "/work_details/miami_dade/1.png",
  thumbnailImagePos: "50% 80%",
  heroImage: "/work_details/miami_dade/1.png",
  client: "Miami-Dade Water and Sewer District",
  role: "Interior Design Intern at HDR",
  timeline: "2024",
  skills: [
    "Workplace Design",
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
          title: "Project Overview",
          type: "text",
          content:
            "Miami-Dade County's largest potable water production plant is the Alexander Orr, Jr. Water Treatment Plant. The HDR team offered operational improvement and regulatory compliance consulting to optimize the infrastructure's level of function at the AOWTP team at HDR. Collaborated with operators and personnel to outline next steps to achieve maximum function out of their infrastructure. The work includes feasibility studies on operating and maintenance storage facilities; schematic engineering, designing and construction phase services on a wide range of large diameter water mains and office facilities for personnel.",
        },
        {
          title: "My Role",
          type: "text",
          content:
            "My role was to design interior concept for office space of Alexander Orr, Jr. Water Treatment Plant. Specific tasks included: strategic framework for spatial function and brand identity with user research insights; user experience and branding by conceptualizing interior themes and color palettes; designing concept diagrams and visual strategy boards using Illustrator and Photoshop; Revit layouts and Enscape renderings as prototypes; using Miro and Mural to visually convey user flow, color narrative, and spatial logic.",
        },
        {
          type: "image",
          src: "/work_details/miami_dade/2.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/miami_dade/3.png",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/miami_dade/4.png",
          size: "full",
        },
      ],
    },
  },
};
