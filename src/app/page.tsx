import CategoryCardGrid from "@/components/CategoryCardGrid";
import Container from "@/components/Container";

export default function Home() {
  const category = {
    id: "1",
    name: "Category 1",
    description: "Category 1 description",
    parentCategory: null,
  };
  return (
    <main>
      <Container>
        <CategoryCardGrid />
      </Container>
    </main>
  );
}
