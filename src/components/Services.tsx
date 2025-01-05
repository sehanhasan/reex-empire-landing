import { BrickWall, Grid3X3, TreePine, Plug, Wrench, PaintBucket, Home, LampCeiling, AirVent, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BrickWall,
    title: "Brick Works",
    description: "Professional brick laying and masonry services",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Excellent brick work that completely transformed our home's exterior!",
      author: "Ahmad Rahman",
      rating: 5
    }
  },
  {
    icon: Grid3X3,
    title: "Floor & Tiling Works",
    description: "Expert tiling solutions for floors and walls",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80",
    testimonial: {
      text: "The tile work in our bathroom is absolutely stunning!",
      author: "Sarah Tan",
      rating: 5
    }
  },
  {
    icon: TreePine,
    title: "Timber Works",
    description: "Quality timber installations and repairs",
    image: "https://images.unsplash.com/photo-1610505466122-b1fe0e911ea5?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Outstanding craftsmanship on our wooden flooring project.",
      author: "Michael Lee",
      rating: 5
    }
  },
  {
    icon: Plug,
    title: "Electrical Wiring Works",
    description: "Safe and reliable electrical installations",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Very professional electrical work with attention to safety.",
      author: "Raj Kumar",
      rating: 5
    }
  },
  {
    icon: Settings,
    title: "Plumbing Works",
    description: "Complete plumbing solutions and repairs",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Fixed our plumbing issues quickly and efficiently!",
      author: "Linda Chong",
      rating: 5
    }
  },
  {
    icon: PaintBucket,
    title: "Painting Works",
    description: "Professional painting services for all surfaces",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Excellent paint job that brightened up our entire home!",
      author: "David Wong",
      rating: 5
    }
  },
  {
    icon: Home,
    title: "Roofing Works",
    description: "Expert roof installation and repairs",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Great roofing work that solved our leakage issues.",
      author: "Amir Hassan",
      rating: 5
    }
  },
  {
    icon: LampCeiling,
    title: "Plaster Ceiling",
    description: "Custom ceiling design and installation",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Beautiful ceiling work that adds elegance to our home!",
      author: "Jenny Lim",
      rating: 5
    }
  },
  {
    icon: AirVent,
    title: "Aircond Service",
    description: "Complete air conditioning solutions",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Professional AC service that improved our comfort!",
      author: "Kamal Ibrahim",
      rating: 5
    }
  },
  {
    icon: Wrench,
    title: "Maintenance Works",
    description: "Regular maintenance and repair services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    testimonial: {
      text: "Reliable maintenance service that keeps everything running smoothly.",
      author: "Alice Teo",
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
          <p className="text-md text-gray-600 mt-2">We are the expert in home, office & shop renovation and maintenance services providing you the one-stop solution to your needs.</p>
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
                      <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
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