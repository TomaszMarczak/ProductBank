"use client";
import { useEffect, useState } from "react";
import DataTable from "../DataTable";
import { Product } from "@/models/Product";

const ProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    console.log(response);
    const products: Product[] = response.products.map((product: any) => ({
      id: product.id,
      brand: product.brand,
      model: product.title,
      category: {
        id: product.id,
        name: product.category,
        description: null,
        parentCategory: null,
      },
      description: product.description,
    }));
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return <DataTable data={products} />;
};

export default ProductsTable;
