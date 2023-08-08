import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchProductButton = () => {
  return (
    <Button className="w-[200px]" variant="default">
      <MagnifyingGlassIcon className="mr-1 w-5 h-5" /> Search Product
    </Button>
  );
};

export default SearchProductButton;
