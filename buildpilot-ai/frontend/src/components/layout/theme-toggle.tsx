"use client";

import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className="rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur"
        type="button"
      >
        Theme
      </Button>
    );
  }

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      className="rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur"
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      {resolvedTheme === "dark" ? (
        <SunMedium className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="ml-2">{resolvedTheme === "dark" ? "Light" : "Dark"} mode</span>
    </Button>
  );
}
