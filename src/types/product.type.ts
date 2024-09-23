export type TProductTrending = {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  status: boolean;
  id: number;
  title: string;
  isFeatured: boolean;
  contentTitle: string;
  slug: string;
  description: string;
  content: string;
  unit: string;
  sales: number;
  views: number;
  subtitle: string;
  sku: string;
  features: string[]; // array of strings
  specifications: string[]; // array of strings
  featuredImage: string; // URL to image
  cloudinary_image_public_id: string;
  reviewCount: number;
};
