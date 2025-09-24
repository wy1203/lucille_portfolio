export interface WorkDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  heroImage: string;
  client: string;
  role: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  detailImages: string[];
}

export const worksData: WorkDetail[] = [
  {
    id: 1,
    title: 'Brand Strategy',
    category: 'UX Strategy',
    description: 'Strategic brand development for tech startup',
    image: '/work_images/work1.jpg',
    heroImage: '/work_details/1/hero.jpg',
    client: 'TechStart Inc.',
    role: 'Lead UX Strategist',
    duration: '3 months',
    overview: 'Developed a comprehensive brand strategy for a technology startup looking to establish their presence in the competitive SaaS market. The project involved market research, competitor analysis, and creating a unique brand identity that resonated with their target audience.',
    challenge: 'The client faced challenges in differentiating themselves in a saturated market. They needed a brand that communicated innovation while maintaining approachability for non-technical users.',
    solution: 'Created a brand strategy framework that balanced technical excellence with human-centered design principles. Developed brand guidelines, visual identity, and messaging strategy that highlighted their unique value proposition.',
    impact: 'The new brand strategy led to a 45% increase in user engagement and a 30% improvement in conversion rates within the first quarter of implementation.',
    detailImages: ['/work_details/1/detail1.jpg', '/work_details/1/detail2.jpg']
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Product Design',
    description: 'iOS app for fitness tracking and community',
    image: '/work_images/work2.jpg',
    heroImage: '/work_details/2/hero.jpg',
    client: 'FitConnect',
    role: 'Senior Product Designer',
    duration: '4 months',
    overview: 'Designed a comprehensive mobile application that combines fitness tracking with social community features, creating an engaging platform for users to achieve their health goals together.',
    challenge: 'Users struggled to maintain consistency in their fitness routines and felt isolated in their journey. The challenge was to create an experience that was both motivating and socially engaging without being overwhelming.',
    solution: 'Implemented gamification elements, social challenges, and personalized goal tracking. Created an intuitive interface that made it easy for users to log activities and connect with friends.',
    impact: 'App achieved 4.8-star rating on App Store with 50K+ downloads in the first 3 months. User retention rate of 68% after 30 days.',
    detailImages: ['/work_details/2/detail1.jpg', '/work_details/2/detail2.jpg']
  },
  {
    id: 3,
    title: 'Design System',
    category: 'Systems',
    description: 'Component library for enterprise software',
    image: '/work_images/work3.jpg',
    heroImage: '/work_details/3/hero.jpg',
    client: 'Enterprise Solutions Corp',
    role: 'Design Systems Lead',
    duration: '6 months',
    overview: 'Built a comprehensive design system from the ground up for an enterprise software company, including component library, design tokens, and documentation to ensure consistency across multiple products.',
    challenge: 'The organization had multiple products with inconsistent UI patterns, leading to poor user experience and increased development time. Teams were working in silos without shared design resources.',
    solution: 'Created a scalable design system with reusable components, clear documentation, and implementation guidelines. Established governance processes and conducted training sessions for designers and developers.',
    impact: 'Reduced design-to-development time by 40%. Improved cross-product consistency and decreased bug reports related to UI by 55%.',
    detailImages: ['/work_details/3/detail1.jpg', '/work_details/3/detail2.jpg']
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    category: 'Product Design',
    description: 'End-to-end shopping experience redesign',
    image: '/work_images/work4.jpg',
    heroImage: '/work_details/4/hero.jpg',
    client: 'ShopFlow',
    role: 'Lead Product Designer',
    duration: '5 months',
    overview: 'Redesigned the entire e-commerce experience from product discovery to checkout, focusing on reducing friction and increasing conversion rates through thoughtful UX improvements.',
    challenge: 'The existing platform had a high cart abandonment rate of 72% and users complained about confusing navigation and complicated checkout process.',
    solution: 'Streamlined the checkout process to 3 steps, improved product filtering and search, added wishlist functionality, and implemented smart recommendations based on user behavior.',
    impact: 'Cart abandonment reduced to 48%, average order value increased by 25%, and customer satisfaction scores improved from 3.2 to 4.5 out of 5.',
    detailImages: ['/work_details/4/detail1.jpg', '/work_details/4/detail2.jpg']
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    category: 'UX Strategy',
    description: 'Data visualization for business intelligence',
    image: '/work_images/work5.jpg',
    heroImage: '/work_details/5/hero.jpg',
    client: 'DataViz Pro',
    role: 'UX Strategist & Information Architect',
    duration: '4 months',
    overview: 'Designed an analytics dashboard that transforms complex business data into actionable insights through intuitive visualizations and customizable reporting features.',
    challenge: 'Business users were overwhelmed by data and struggled to extract meaningful insights. The existing dashboard was cluttered and required extensive training to use effectively.',
    solution: 'Created a hierarchical information architecture with progressive disclosure. Designed custom visualizations tailored to specific business metrics and implemented smart filtering and drill-down capabilities.',
    impact: 'Time to insight reduced by 60%. User adoption increased from 35% to 82% across the organization. Training time decreased from 2 weeks to 2 days.',
    detailImages: ['/work_details/5/detail1.jpg', '/work_details/5/detail2.jpg']
  },
  {
    id: 6,
    title: 'Web Platform',
    category: 'Product Design',
    description: 'SaaS platform for team collaboration',
    image: '/work_images/work6.jpg',
    heroImage: '/work_details/6/hero.jpg',
    client: 'TeamSync',
    role: 'Lead Product Designer',
    duration: '7 months',
    overview: 'Designed a comprehensive collaboration platform that brings together project management, communication, and file sharing in a unified, intuitive interface.',
    challenge: 'Teams were using multiple tools for collaboration, leading to fragmented workflows and decreased productivity. Need for a unified solution that could replace 5+ different tools.',
    solution: 'Created an integrated platform with real-time collaboration features, smart notifications, and seamless integrations with existing tools. Focused on reducing context switching and improving team visibility.',
    impact: 'Teams reported 35% increase in productivity. Platform replaced average of 4.2 tools per team. NPS score of 67, placing it in the "excellent" category.',
    detailImages: ['/work_details/6/detail1.jpg', '/work_details/6/detail2.jpg']
  }
];