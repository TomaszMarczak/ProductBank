"use client";
import { ModeToggle } from "./ThemeToggle";
import SearchProductButton from "./SearchProductButton";
import NavbarUserControl from "./NavbarUserControl";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center">
        <Link href="/">
          <span className="font-semibold text-xl transition-all ">
            Product Library
          </span>
        </Link>
      </div>
      <div className="ml-auto flex align-middle gap-2">
        <LayoutGroup>
          <SearchProductButton />
          <NavbarUserControl />
          <ModeToggle className="border" />
        </LayoutGroup>
      </div>
    </nav>
  );
};

export default Navbar;
