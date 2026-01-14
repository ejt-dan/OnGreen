export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  imageUrl?: string;
  content: string; // HTML or Markdown content
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  specs: string[];
  imageUrl: string;
  category: 'Hardware' | 'Software' | 'Solution';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
}

export interface SiteConfig {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    facebook: string;
    linkedin: string;
    blog: string;
  };
}