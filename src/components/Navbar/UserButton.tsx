import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/_ui/popover";

import { Button } from "../_ui/button";
import { useAuth } from "@/context/authContext";
import { motion } from "framer-motion";
import { HamburgerMenuIcon, ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/user");
  };
  const handleLogoutClick = () => {
    logout();
    router.push("/");
  };

  return (
    <motion.div
      key="user-button"
      initial={{ y: -300, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -300, opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">
            <HamburgerMenuIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px]">
          <div className="flex flex-col gap-2">
            <Button onClick={handleProfileClick}>
              <PersonIcon className="mr-2" />
              Profile
            </Button>
            <Button variant="secondary" onClick={handleLogoutClick}>
              <ExitIcon className="mr-2" /> Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default UserButton;
