"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

interface ModeToggleProps extends React.HTMLAttributes<HTMLElement> {}

export function ModeToggle(props: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const duration = "400";

  return (
    <Button
      variant="outline"
      size="icon"
      className={props.className}
      onClick={handleToggle}
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-${duration} dark:rotate-90 dark:scale-0`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-${duration} dark:rotate-0 dark:scale-100`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
