

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Navigationbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-[#0a0a0a]/80 shadow flex items-center justify-between px-6 py-3 sticky top-0 z-50 backdrop-blur-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="AutoMark Ai Logo" className="h-9 w-9 object-contain" />
        <span className="font-bold text-xl text-[#0C267B] tracking-tight select-none">AutoMark Ai</span>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-8 text-base font-medium text-[#0C267B] dark:text-white">
        <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-colors">Services</a></li>
        <li><a href="#" className="hover:text-blue-600 transition-colors">Resources</a></li>
      </ul>      {/* Right: Theme Toggle and Auth Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Sun className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
        </Button>
        <Button variant="outline" className="px-5">Login</Button>
        <Button className="px-5">Sign Up</Button>
      </div>
    </nav>
  );
}

export default Navigationbar;