export interface Database {
  public: {
    Tables: {
      case_studies: {
        Row: CaseStudy;
        Insert: Omit<CaseStudy, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<CaseStudy, "id" | "created_at">>;
      };
      media_items: {
        Row: MediaItem;
        Insert: Omit<MediaItem, "id" | "created_at">;
        Update: Partial<Omit<MediaItem, "id" | "created_at">>;
      };
      blog_posts: {
        Row: BlogPost;
        Insert: Omit<BlogPost, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<BlogPost, "id" | "created_at">>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  featured_image: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  published: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
