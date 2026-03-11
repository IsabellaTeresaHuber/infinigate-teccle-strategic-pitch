import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
interface ThemeToggleProps {
  className?: string;
}
export function ThemeToggle({ className = "absolute top-4 right-4" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className={`${className} hover:scale-110 hover:rotate-12 transition-all duration-200 active:scale-90 z-50 bg-background/50 backdrop-blur-sm border border-border/50`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </Button>
  );
}