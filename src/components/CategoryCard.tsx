import { Category } from "@/models/Category";
import { Card, CardContent, CardHeader } from "./ui/card";

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  category: Category;
}
const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, description } = category;
  return (
    <Card className="">
      <CardHeader>
        <h2 className="text-md font-bold">{name}</h2>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default CategoryCard;
