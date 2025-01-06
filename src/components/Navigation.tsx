import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Languages, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { title: "Maintenance", path: "/services/maintenance" },
  { title: "Carpentry", path: "/services/carpentry" },
  { title: "Interior Design", path: "/services/interior-design" },
  { title: "Painting", path: "/services/painting" },
  { title: "Plumbing", path: "/services/plumbing" },
  { title: "Renovation", path: "/services/renovation" },
  { title: "Demolition", path: "/services/demolition" },
  { title: "Aircond", path: "/services/aircond" }
];

const scrollToFooter = () => {
  const footerSection = document.querySelector('footer');
  if (footerSection) {
    footerSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="p-2 md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-4 mt-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:bg-accent rounded-md">
            {t('nav.home')}
          </Link>
          <div className="flex flex-col">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
            >
              <span className="font-medium">{t('nav.services')}</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all",
              isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2 hover:bg-accent rounded-md block"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className="px-4 py-2 hover:text-primary">
            {t('nav.home')}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
            {t('nav.services')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[500px] bg-white p-4 shadow-lg rounded-lg">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {services.map((service) => (
                  <NavigationMenuLink asChild key={service.path}>
                    <Link
                      to={service.path}
                      className={cn(
                        "block select-none rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {service.title}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')} className={cn(language === 'en' && "bg-accent")}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('my')} className={cn(language === 'my' && "bg-accent")}>
                🇲🇾 Bahasa Melayu
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button onClick={scrollToFooter} variant="default">
            {t('nav.contact')}
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const Navigation = () => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img 
              src="https://i.ibb.co/Ltyts5K/reex-empire-logo.png" 
              alt="Reex Empire Logo" 
              className="h-12"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Button onClick={scrollToFooter} variant="default" className="md:hidden">
              Contact Us
            </Button>
            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};