import { ModeToggle } from "./ThemeToggle";
import SearchProductButton from "./SearchProductButton";
import SignInButton from "./SignInButton";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center">
        <span className="font-semibold text-xl transition-all ">
          Product Library
        </span>
      </div>
      <div className="ml-auto flex align-middle gap-2">
        <SearchProductButton />
        <SignInButton />
        <ModeToggle className="border" />
      </div>
    </nav>
  );
};

export default Navbar;
