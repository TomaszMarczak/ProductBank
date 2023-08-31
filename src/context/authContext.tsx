"use client";
import { emailPasswordSchema } from "@/components/UserManagement/EmailPasswordForm";
import { useContext, createContext, ReactNode, useState } from "react";
import { z } from "zod";

interface AuthContextProps {
  emailLogin: (values: z.infer<typeof emailPasswordSchema>) => Promise<void>;
  emailRegister: (values: z.infer<typeof emailPasswordSchema>) => Promise<void>;
  logout: () => void;
  user: User | null;
}
interface User {
  id: string;
  username: string;
  jwt: string;
}

const AuthContext = createContext({} as AuthContextProps);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  };

  const [user, setUser] = useState<User | null>(() =>
    getUserFromLocalStorage()
  );

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
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.jwt && data.user) {
            const user = {
              id: data.user.id,
              username: data.user.username,
              jwt: data.jwt,
            };
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
          }
        });
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
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ emailLogin, emailRegister, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
