import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "./services/data/servicesData";
import { toast } from "@/components/ui/use-toast";

export const Services = () => {
  const handleRequestService = (serviceName: string) => {
    toast({
      title: "Service Request",
      description: `Your request for ${serviceName} service has been received. We'll contact you soon!`,
    });
  };

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
                <div className="flex justify-between items-center mt-4">
                  <Button variant="link" className="text-primary p-0" asChild>
                    <Link to={`/services/${service.title.toLowerCase().replace(/[&\s]+/g, '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button 
                    className="bg-[#0BA5E9] text-white hover:bg-[#0BA5E9]/90"
                    onClick={() => handleRequestService(service.title)}
                  >
                    Request Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { services };