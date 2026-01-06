import { useState } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Users, Briefcase, Globe, Trophy, Mail, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "About", url: "#about", icon: Users },
  { name: "Services", url: "#services", icon: Briefcase },
  { name: "Global", url: "#global", icon: Globe },
  { name: "Success", url: "#success", icon: Trophy },
  { name: "Contact Us", url: "#contact", icon: Mail },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href && href !== "#") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      {/* Desktop Navigation - Tubelight NavBar */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>

      {/* Mobile Navigation - Hamburger Menu with Sheet */}
      <div className="md:hidden flex justify-end p-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.url);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
