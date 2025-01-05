import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const services = [
  { title: "Brick Works", path: "/services/brick-works" },
  { title: "Floor & Tiling Works", path: "/services/floor-tiling" },
  { title: "Timber Works", path: "/services/timber-works" },
  { title: "Electrical Wiring Works", path: "/services/electrical" },
  { title: "Plumbing Works", path: "/services/plumbing" },
  { title: "Painting Works", path: "/services/painting" },
  { title: "Roofing Works", path: "/services/roofing" },
  { title: "Plaster Ceiling", path: "/services/plaster-ceiling" },
  { title: "Aircond Service", path: "/services/aircond" },
  { title: "Maintenance Works", path: "/services/maintenance" }
];

export const Navigation = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img 
              src="https://i.ibb.co/M28gB6X/Reex-logo.png" 
              alt="Reex Empire Logo" 
              className="h-12"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 hover:text-primary">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 hover:text-primary">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 hover:text-primary">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};