import { Category } from "@/models/Category";
import CategoryCard from "./CategoryCard";

const CategoryCardGrid = async () => {
  const response = await fetch("http://127.0.0.1:1337/api/categories").then(
    (res) => res.json()
  );
  const data = await response.data;

  return (
    <>
      <h1 className="text-xl font-extrabold mb-2">All categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((category: ApiResponse<Category>) => (
          <CategoryCard key={category.id} category={category.attributes} />
        ))}
      </div>
    </>
  );
};
export default CategoryCardGrid;
