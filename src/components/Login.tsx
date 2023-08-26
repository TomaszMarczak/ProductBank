"use client";
import * as z from "zod";
import { Label } from "@radix-ui/react-label";
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

import EmailPasswordForm, { emailPasswordSchema } from "./EmailPasswordForm";
import Link from "next/link";
import { motion } from "framer-motion";

const Login = () => {
  const onSubmit = async (values: z.infer<typeof emailPasswordSchema>) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/local`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: values.email,
          password: values.password,
        }),
      }
    ).then((res) => res.json());

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
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
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
            Don't have an account?{" "}
            <Link href="/create-new-account">
              <span className="font-bold text-blue-800">Create one!</span>
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Login;
