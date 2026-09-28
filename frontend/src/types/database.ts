export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string;
  featured_image: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  service: string;
  link: string;
  pdf: string;
  cover: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface MediaEventItem {
  id: string;
  title: string;
  slug: string;
  year: string;
  date_label: string;
  kind: string;
  description: string;
  images: string[];
  poster: boolean;
  video_url: string;
  doc_url: string;
  doc_label: string;
  published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Admin {
  id: string;
  email: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  source: string;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}
