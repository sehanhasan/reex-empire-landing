import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import { services } from "./Services";

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => {
    const slug = s.title.toLowerCase().replace(/[&\s]+/g, '-');
    return slug === serviceId;
  });

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8">Service not found</h1>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 mb-8">{service.description}</p>
          
          <div className="bg-accent rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
            <div className="flex items-center mb-2">
              {[...Array(service.testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg italic mb-2">"{service.testimonial.text}"</p>
            <p className="font-semibold">- {service.testimonial.author}</p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};