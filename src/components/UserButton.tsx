import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import { useAuth } from "@/context/authContext";
import { motion } from "framer-motion";

const UserButton = () => {
  const { logout } = useAuth();
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
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[150px]">
          <div className="flex flex-col gap-1">
            <Button>Profile</Button>
            <Button variant="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default UserButton;
