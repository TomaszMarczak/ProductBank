"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface AnimationWrapperProps {
  children: ReactNode;
}
const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
