interface Category {
  id: string;
  name: string;
  description: string | null;
  parentCategory: Category | null;
}

export type { Category };
