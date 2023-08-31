"use client";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const SearchProductButton = () => {
  return (
    <motion.div layout key="search-product-button">
      <Button className="w-[200px]" variant="default">
        <MagnifyingGlassIcon className="mr-1 w-5 h-5" /> Search Product
      </Button>
    </motion.div>
  );
};

export default SearchProductButton;
