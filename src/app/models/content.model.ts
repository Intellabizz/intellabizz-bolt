export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  sources?: string[];
}
