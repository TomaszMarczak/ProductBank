"use client";
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import SignInButton from "./SignInButton";
import LoadingButton from "./LoadingButton";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarUserControlProps extends React.HTMLAttributes<HTMLElement> {}

const NavbarUserControl = (props: NavbarUserControlProps) => {
  const { isLoaded, isSignedIn } = useUser();

  if (isLoaded && isSignedIn) {
    return (
      <AnimatePresence>
        <motion.div
          layout
          key="user-button"
          initial={{ y: -300, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -300, opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserButton />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (isLoaded && !isSignedIn) {
    return (
      <AnimatePresence>
        <motion.div
          layout
          key="sign-in-button"
          initial={{ y: -300, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -300, opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SignInButton />
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default NavbarUserControl;
