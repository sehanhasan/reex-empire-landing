import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const scrollToContact = () => {
  const contactSection = document.querySelector('#get-a-quote');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
            Home
          </Link>
          <div className="flex flex-col">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
            >
              <span className="font-medium">Services</span>
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

const DesktopNav = () => (
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link to="/" className="px-4 py-2 hover:text-primary">
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Services</NavigationMenuTrigger>
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
        <Button onClick={scrollToContact} variant="default">
          Contact Us
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

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
            <Button onClick={scrollToContact} variant="default" className="md:hidden">
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