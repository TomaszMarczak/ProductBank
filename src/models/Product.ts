import { Category } from "./Category";

interface Product {
  id: number;
  brand: string;
  model: string;
  description: string | null;
  category: Category;
  thumbnail?: string;
  images?: string[];
  image?: string;
  website?: string;
}

type GenericProduct = Pick<
  Product,
  "id" | "description" | "category" | "image"
>;

export type { Product, GenericProduct };
