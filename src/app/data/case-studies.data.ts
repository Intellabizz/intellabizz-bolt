import { CaseStudy } from '../models/content.model';

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-scale',
    title: 'FinTech Platform Scale-Up',
    client: 'NexGen Finance Pvt Ltd, Bengaluru',
    category: 'SaaS & IT Solutions',
    description: 'Transforming a regional payment processor into a multi-national fintech platform serving millions of users across Asia.',
    challenge: 'Legacy infrastructure struggled with 10x growth. Security vulnerabilities and scalability issues threatened expansion into new markets including Singapore and UAE.',
    solution: 'We architected a cloud-native microservices platform on AWS with real-time fraud detection powered by machine learning and automated compliance reporting aligned with RBI and international regulations.',
    results: [
      '400% transaction capacity increase',
      '99.99% uptime achieved',
      'Passed PCI-DSS & SOC2 audits',
      'Expanded to 5 new countries',
    ],
    image: 'https://images.pexels.com/photos/27641095/pexels-photo-27641095.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'talent-transform',
    title: 'Enterprise Talent Transformation',
    client: 'Meridian Healthcare, Mumbai',
    category: 'Recruitment Consultancy',
    description: 'Complete workforce restructuring for a healthcare network undergoing rapid pan-India expansion.',
    challenge: 'Needed 500+ specialized professionals including doctors, nurses, and administrative staff within 18 months across 12 states while maintaining NABH quality standards.',
    solution: 'Designed a predictive hiring model with AI-powered candidate matching and streamlined document verification. Established a dedicated recruitment cell across regional offices.',
    results: [
      '518 healthcare professionals placed',
      '94% retention rate at 12 months',
      '42% reduction in time-to-hire',
      'Zero NABH compliance issues',
    ],
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'legal-automation',
    title: 'Legal Operations Modernization',
    client: 'Sterling & Associates LLP, New Delhi',
    category: 'Legal & Innovation',
    description: 'Digitizing a legacy law firm\'s operations for the modern era with AI-powered document automation.',
    challenge: 'Paper-based workflows, fragmented document management, and inefficient billing reduced profitability by 35%. Court deadlines were frequently missed due to manual tracking.',
    solution: 'Implemented an AI-powered document automation system with integrated case management, billing, and client portal. Automated deadline tracking integrated with Indian court systems.',
    results: [
      '80% reduction in document prep time',
      '65% increase in billable hours',
      '98% client satisfaction score',
      'Zero missed court deadlines',
    ],
    image: 'https://images.pexels.com/photos/5669649/pexels-photo-5669649.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
