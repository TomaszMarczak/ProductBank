interface Category {
  id: string;
  name: string;
  description: string | null;
  parentCategory?: Category;
}

export type { Category };
