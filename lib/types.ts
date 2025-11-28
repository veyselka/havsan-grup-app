// Common Types
export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

// Business Unit Types
export interface BusinessUnit {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  bgColor?: string;
  gradient?: string;
  colors?: string[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  businessUnit?: 'robotik' | 'ai' | 'enerji';
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// Strapi Types
export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiContent {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

export interface BlogPost extends StrapiContent {
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: StrapiImage;
    author?: Author;
    category?: Category;
    tags?: Tag[];
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Author extends StrapiContent {
  attributes: {
    name: string;
    title: string;
    bio?: string;
    avatar?: StrapiImage;
    socialLinks?: SocialLinks;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

export interface Category extends StrapiContent {
  attributes: {
    name: string;
    slug: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

export interface Tag extends StrapiContent {
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

export interface Project extends StrapiContent {
  attributes: {
    title: string;
    slug: string;
    description: string;
    content?: string;
    images?: StrapiImage[];
    businessUnit: 'robotik' | 'ai' | 'enerji';
    tags?: string[];
    featured?: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

export interface Partner extends StrapiContent {
  attributes: {
    name: string;
    logo: StrapiImage;
    website?: string;
    order?: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale?: string;
  };
}

// Animation Types
export interface AnimationVariant {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      ease?: string;
      delay?: number;
    };
  };
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ApiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}
