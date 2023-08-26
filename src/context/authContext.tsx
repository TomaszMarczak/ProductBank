"use client";
import { useContext, createContext, ReactNode } from "react";

interface AuthContextProps {}

const AuthContext = createContext({} as AuthContextProps);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
