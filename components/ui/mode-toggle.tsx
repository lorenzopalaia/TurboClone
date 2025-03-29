"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronsUpDownIcon } from "lucide-react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const ThemeOptions = ({ setTheme }: { setTheme: (theme: string) => void }) => (
  <DropdownMenuContent align="end">
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => setTheme("light")}
    >
      Light
    </DropdownMenuItem>
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => setTheme("dark")}
    >
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => setTheme("system")}
    >
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
);

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer gap-1 px-2 py-0 text-xs"
        >
          <span className="capitalize">{theme}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <ThemeOptions setTheme={setTheme} />
    </DropdownMenu>
  );
}

export function ModeToggleButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <ThemeOptions setTheme={setTheme} />
    </DropdownMenu>
  );
}
