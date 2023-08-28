"use client";
import { emailPasswordSchema } from "@/components/EmailPasswordForm";
import { redirect } from "next/navigation";
import { useContext, createContext, ReactNode } from "react";
import { z } from "zod";

interface AuthContextProps {
  emailLogin: (values: z.infer<typeof emailPasswordSchema>) => void;
}

const AuthContext = createContext({} as AuthContextProps);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const emailLogin = async (values: z.infer<typeof emailPasswordSchema>) => {
    try {
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
      if (response?.jwt) {
        localStorage.setItem("jwt", response.jwt);
      }
      if (response?.user) {
        localStorage.setItem("user", JSON.stringify(response.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const emailRegister = async (values: z.infer<typeof emailPasswordSchema>) => {
    try {
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
      redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ emailLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
