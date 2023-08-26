import CreateAccount from "@/components/CreateAccount";
import Login from "@/components/Login";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  return (
    <div className="container flex justify-center">
      <Login />
    </div>
  );
}
