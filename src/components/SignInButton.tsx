"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Sign } from "crypto";

const SignInButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PersonIcon className="mr-1 w-5 h-5" />
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent shadow-none">
        <SignIn />
      </DialogContent>
    </Dialog>
  );
};

export default SignInButton;
