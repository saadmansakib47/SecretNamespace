import { useState, useEffect } from "react";
import { Sun, Moon, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
              SN
            </div>
            <span className="font-bold text-xl hidden sm:inline">SecretNamespace</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.slice(0, 4).map((item) => (
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
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background border-b md:hidden z-50">
            <nav className="container py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}

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
            onClick={toggleTheme}
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}