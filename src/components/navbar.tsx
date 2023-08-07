import { ModeToggle } from "./ThemeToggle";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center">
        <span className="font-semibold text-xl transition-all ">
          Product Library
        </span>
      </div>
      <div className="ml-auto text">
        <ModeToggle className="border" />
      </div>
    </nav>
  );
};

export default Navbar;
