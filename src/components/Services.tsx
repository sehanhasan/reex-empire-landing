import { Paintbrush, Building2, Wrench, PenTool, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Paintbrush,
    title: "Home Renovation",
    description: "Complete home makeovers tailored to your style and needs",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    testimonial: {
      text: "They transformed our old house into a modern dream home. Couldn't be happier!",
      author: "Sarah Chen",
      rating: 5
    }
  },
  {
    icon: Building2,
    title: "Office Refurbishment",
    description: "Modern workspace solutions for maximum productivity",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Professional team that delivered our office renovation on time and within budget.",
      author: "Michael Wong",
      rating: 5
    }
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Quick and reliable maintenance services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Fast response time and excellent repair work. Very reliable service!",
      author: "Lisa Tan",
      rating: 5
    }
  },
  {
    icon: PenTool,
    title: "Custom Interior Design",
    description: "Bespoke interior design solutions for your space",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Their design expertise helped create exactly the atmosphere we wanted.",
      author: "David Lim",
      rating: 5
    }
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
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center mb-2">
                    {[...Array(service.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-600 mb-2">"{service.testimonial.text}"</p>
                  <p className="text-sm font-semibold text-gray-800">- {service.testimonial.author}</p>
                </div>
                <Button variant="link" className="text-primary p-0 mt-4">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};