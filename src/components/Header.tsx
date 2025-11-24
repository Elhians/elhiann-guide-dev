import { Moon, Sun, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <span className="font-mono text-lg font-bold text-white">{'<>'}</span>
            </div>
            <span className="text-xl font-bold">Guide Dev</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#basics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Bases
            </a>
            <a href="#frontend" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Front-End
            </a>
            <a href="#backend" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Back-End
            </a>
            <a href="#bonus" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Bonus
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};