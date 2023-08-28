"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Icons } from "./icons/Icons";
import Link from "next/link";
import EmailPasswordForm, { emailPasswordSchema } from "./EmailPasswordForm";
import { motion } from "framer-motion";

const CreateAccount = () => {
  const onSubmit = async (values: z.infer<typeof emailPasswordSchema>) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: values.email,
          email: values.email,
          password: values.password,
        }),
      }
    );
    console.log(response);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <EmailPasswordForm onSubmit={onSubmit} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Label className="text-sm">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-bold text-blue-800">Login!</span>
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CreateAccount;
