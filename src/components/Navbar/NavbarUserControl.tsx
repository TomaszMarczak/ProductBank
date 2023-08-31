"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@/context/authContext";
import UserButton from "../UserManagement/UserButton";

interface NavbarUserControlProps extends React.HTMLAttributes<HTMLElement> {}

const NavbarUserControl = (props: NavbarUserControlProps) => {
  const { user } = useAuth();
  return (
    <AnimatePresence>
      <div className="flex items-center space-x-2">
        {user ? (
          <UserButton />
        ) : (
          <>
            <motion.div
              key="login-button"
              initial={{ y: -300, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -300, opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </motion.div>
          </>
        )}
      </div>{" "}
    </AnimatePresence>
  );
};

export default NavbarUserControl;
