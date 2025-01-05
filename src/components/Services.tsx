import { Paintbrush, Building2, Wrench, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Paintbrush,
    title: "Home Renovation",
    description: "Complete home makeovers tailored to your style and needs"
  },
  {
    icon: Building2,
    title: "Office Refurbishment",
    description: "Modern workspace solutions for maximum productivity"
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Quick and reliable maintenance services"
  },
  {
    icon: PenTool,
    title: "Custom Interior Design",
    description: "Bespoke interior design solutions for your space"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions for all your renovation needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="text-secondary p-0">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};