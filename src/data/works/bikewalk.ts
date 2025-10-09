import { WorkDetail } from "../types";

export const bikewalkWork: WorkDetail = {
  id: 5,
  title: "BikeWalk",
  category: "Retail Store Design, Design Strategy",
  description: "Sustainable mobility infrastructure for urban communities",
  thumbnail: "/work_details/bikewalk/hero.png",
  thumbnailImagePos: "50% 80%",
  heroImage: "/work_details/bikewalk/hero.png",
  client: "Academic design project",
  role: "Lead Designer",
  timeline: "2024",
  skills: [
    "Urban Planning",
    "Transportation Design",
    "Community Engagement",
    "Sustainable Infrastructure",
    "GIS Mapping",
    "Public Space Design",
  ],
  sections: {
    overview: {
      title: "Overview",
      blocks: [
        {
          type: "text",
          content:
            "**Project Vision:** BikeWalk reimagines urban mobility through an integrated network of pedestrian and bicycle infrastructure. This project addresses the critical need for safe, accessible, and sustainable transportation alternatives in urban environments, creating connections that prioritize human-centered movement over vehicular traffic.",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/1.png",
          caption: "1",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Urban Transformation:** The design establishes a comprehensive mobility framework that weaves through existing urban fabric, transforming underutilized spaces into vibrant corridors for walking and cycling. This strategic intervention promotes healthier lifestyles, reduces carbon emissions, and fosters stronger community connections.",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/2.png",
          caption: "2",
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
            "**Research Foundation:** Comprehensive analysis of existing transportation patterns, pedestrian flow data, and community needs informed the strategic placement of infrastructure. GIS mapping revealed critical gaps in the current network, identifying opportunities to connect neighborhoods, parks, schools, and commercial districts through safe, continuous pathways.",
          size: "large",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/3left.png",
              caption: "3left",
              size: 41,
            },
            {
              src: "/work_details/bikewalk/3middle.png",
              caption: "3middle",
              size: 29,
            },
            {
              src: "/work_details/bikewalk/3right.png",
              caption: "3right",
              size: 29,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "**Design Approach:** The strategy prioritizes accessibility, safety, and user experience through evidence-based design. Stakeholder engagement sessions with residents, cyclists, and local organizations shaped the design criteria, ensuring the infrastructure responds to real community needs and usage patterns.",
          size: "large",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/4left.png",
              caption: "4left",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4middle.png",
              caption: "4middle",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/4right.png",
              caption: "4right",
              size: 33,
            },
          ],
          gap: "small",
        },
      ],
    },
    designSolution: {
      title: "Design Solution",
      blocks: [
        {
          type: "text",
          content:
            "**Infrastructure Design:** The network integrates protected bike lanes, widened sidewalks, pedestrian crossings, and traffic-calming measures throughout the urban corridor. Careful attention to materials, lighting, and wayfinding creates an intuitive, welcoming environment that encourages active transportation year-round.",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            {
              src: "/work_details/bikewalk/5left.png",
              caption: "5left",
            },
            {
              src: "/work_details/bikewalk/5right.png",
              caption: "5right",
            },
          ],
          layout: "left-heavy",
          gap: "medium",
        },
        {
          type: "text",
          content:
            "**Placemaking Elements:** Beyond pure transportation function, the design incorporates public seating, green infrastructure, bike parking, and urban landscaping. These elements transform the corridors into destination spaces that serve multiple community functions—gathering spots, linear parks, and social infrastructure.",
          size: "large",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/6.png",
          caption: "6",
          size: "full",
        },
        {
          type: "image",
          src: "/work_details/bikewalk/7.png",
          caption: "7",
          size: "full",
        },
        {
          type: "text",
          content:
            "**Connectivity & Integration:** Strategic connections link the bike-walk network to transit hubs, residential areas, and key destinations. The design considers multi-modal integration, ensuring seamless transitions between walking, cycling, and public transportation while prioritizing accessibility for all users regardless of age or ability.",
          size: "large",
        },
        {
          type: "image-pair",
          images: [
            { src: "/work_details/bikewalk/8.png", caption: "8" },
            { src: "/work_details/bikewalk/9.png", caption: "9" },
          ],
          layout: "equal",
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
            "**Project Impact:** BikeWalk demonstrates how strategic infrastructure investment can catalyze urban transformation. The project creates safer streets, reduces reliance on private vehicles, and establishes a replicable model for sustainable urban mobility that balances environmental, social, and economic benefits.",
          size: "large",
        },
        {
          type: "text",
          content: "**Key Outcomes:**",
          marginBottom: "0rem",
          size: "large",
        },
        {
          type: "list",
          listType: "unordered",
          items: [
            "Established a comprehensive network of protected bike lanes and pedestrian pathways connecting key community destinations",
            "Integrated sustainable infrastructure with public space design, creating multi-functional urban corridors",
            "Developed an accessible, safe mobility system that serves diverse user groups and promotes active transportation",
            "Created a scalable framework for sustainable urban mobility that can be adapted to other neighborhoods and cities",
          ],
          size: "large",
          marginTop: "-0.25rem",
        },
        {
          type: "image-trio",
          layout: "horizontal",
          horizontalImages: [
            {
              src: "/work_details/bikewalk/10left.png",
              caption: "10left",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/10middle.png",
              caption: "10middle",
              size: 33,
            },
            {
              src: "/work_details/bikewalk/10right.png",
              caption: "10right",
              size: 33,
            },
          ],
          gap: "small",
        },
        {
          type: "text",
          content:
            "The project successfully bridges infrastructure planning with community placemaking, demonstrating how mobility design can enhance urban livability while advancing environmental sustainability goals.",
          size: "large",
        },
      ],
    },
    reflection: {
      title: "Reflection",
      blocks: [
        {
          type: "text",
          content:
            "Designing BikeWalk deepened my understanding of how transportation infrastructure shapes urban life beyond mere movement. The project challenged me to balance engineering requirements with human-centered design, creating spaces that are functionally efficient yet socially meaningful.",
          size: "large",
        },
        {
          type: "text",
          content:
            "The process refined my skills in urban analysis, stakeholder engagement, and systems thinking. Integrating safety standards, accessibility guidelines, and sustainability principles while maintaining design quality required careful coordination across multiple disciplines. Future iterations would explore more adaptive infrastructure that responds to seasonal use patterns and incorporates emerging micro-mobility technologies to create even more flexible, resilient urban transportation networks.",
          size: "large",
        },
      ],
    },
  },
};
