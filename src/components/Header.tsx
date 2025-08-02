import { useState } from "react";
import { Sun, Moon, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Exclusives", href: "/exclusives" },
    { name: "Podcasts", href: "/podcasts" },
    { name: "Vision", href: "/vision" },
    { name: "iPhone", href: "/iphone" },
    { name: "Mac", href: "/mac" },
    { name: "Watch", href: "/watch" },
    { name: "iPad", href: "/ipad" },
    { name: "Music & TV", href: "/music-tv" },
    { name: "Guides", href: "/guides" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">SecretNamespace</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <button
          className="mr-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border px-3 py-1 text-sm"
              />
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}