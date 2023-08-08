interface Category {
  id: number;
  name: string;
  description: string | null;
  parentCategory: Category | null;
}

export type { Category };
