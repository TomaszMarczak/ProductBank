import { Category } from "./Category";

interface Product {
  id: number;
  brand: string;
  model: string;
  description: string | null;
  category: Category;
  thumbnail?: string;
  images?: string[];
  website?: string;
  ean?: string;
}

type GenericProduct = Pick<
  Product,
  "id" | "description" | "category" | "images"
>;

export type { Product, GenericProduct };
