import { Wrench, Hammer, Palette, PaintBucket, PenLine, HardHat, Construction, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const services = [
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Comprehensive maintenance services for your property",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    testimonial: {
      text: "Excellent maintenance service that keeps our property in top condition!",
      author: "David Wong",
      rating: 5
    }
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Expert carpentry and woodworking solutions",
    image: "https://images.unsplash.com/photo-1622150162807-12a1f647f4e7",
    testimonial: {
      text: "Outstanding carpentry work with great attention to detail.",
      author: "Sarah Tan",
      rating: 5
    }
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior design and space planning",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    testimonial: {
      text: "Transformed our space into something truly beautiful!",
      author: "Linda Chen",
      rating: 5
    }
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Professional painting services for all surfaces",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    testimonial: {
      text: "Excellent paint job that brightened up our entire home!",
      author: "Michael Lee",
      rating: 5
    }
  },
  {
    icon: PenLine,
    title: "Plumbing",
    description: "Complete plumbing solutions and repairs",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
    testimonial: {
      text: "Quick and efficient plumbing service!",
      author: "Raj Kumar",
      rating: 5
    }
  },
  {
    icon: HardHat,
    title: "Renovation",
    description: "Full-scale renovation and remodeling services",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    testimonial: {
      text: "Completely transformed our home with excellent renovation work!",
      author: "Ahmad Hassan",
      rating: 5
    }
  },
  {
    icon: Construction,
    title: "Demolition",
    description: "Professional and safe demolition services",
    image: "https://images.unsplash.com/photo-1626271763156-520913751759",
    testimonial: {
      text: "Efficient and safe demolition work with proper cleanup.",
      author: "John Lim",
      rating: 5
    }
  },
  {
    icon: Wind,
    title: "Aircond",
    description: "Air conditioning installation and servicing",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
    testimonial: {
      text: "Great AC service with professional maintenance!",
      author: "Kamal Ibrahim",
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
          <p className="text-lg text-gray-600">One Stop Renovation Solutions</p>
          <p className="text-md text-gray-600 mt-2">
            We are the expert in home, office & shop renovation and maintenance services providing you the one-stop solution to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80";
                  }}
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
                      <svg 
                        key={i} 
                        className="w-4 h-4 text-primary fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-600 mb-2">"{service.testimonial.text}"</p>
                  <p className="text-sm font-semibold text-gray-800">- {service.testimonial.author}</p>
                </div>
                <Button variant="link" className="text-primary p-0 mt-4" asChild>
                  <Link to={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, '-')}`}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
