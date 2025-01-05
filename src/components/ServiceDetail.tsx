import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import { services } from "./Services";

// Gallery images for each service
const serviceGalleryImages = {
  'electrical-wiring-works': [
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
    'https://images.unsplash.com/photo-1518770660439-4636190af475',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0',
    'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1',
    'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5',
    'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b',
    'https://images.unsplash.com/photo-1497366216548-37526070297c',
    'https://images.unsplash.com/photo-1516937941344-00b4e0337589',
    'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0'
  ],
  // Default images for other services
  'default': [
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
    'https://images.unsplash.com/photo-1613545325278-f24b0cae1224',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    'https://images.unsplash.com/photo-1487887235947-a955ef187fcc',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  ]
};

// Testimonials for each service
const serviceTestimonials = {
  'electrical-wiring-works': [
    {
      text: "The electrical work was done with utmost professionalism. Every wire was perfectly placed and the team's attention to safety was impressive.",
      author: "John Smith",
      rating: 5
    },
    {
      text: "Excellent service! They completed the rewiring of our entire house ahead of schedule and within budget.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Very knowledgeable team. They explained everything clearly and fixed our electrical issues efficiently.",
      author: "Michael Brown",
      rating: 4
    }
  ],
  // Default testimonials for other services
  'default': [
    {
      text: "Outstanding service from start to finish. The team was professional, punctual, and delivered excellent results.",
      author: "Emma Wilson",
      rating: 5
    },
    {
      text: "Great attention to detail and very responsive to our needs. Would highly recommend their services.",
      author: "David Thompson",
      rating: 4
    },
    {
      text: "The quality of work exceeded our expectations. Very satisfied with the end result.",
      author: "Lisa Anderson",
      rating: 5
    }
  ]
};

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

  const galleryImages = serviceGalleryImages[serviceId as keyof typeof serviceGalleryImages] || serviceGalleryImages.default;
  const testimonials = serviceTestimonials[serviceId as keyof typeof serviceTestimonials] || serviceTestimonials.default;

  return (
    <div className="container mx-auto px-4 pt-8 pb-20 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          
          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-64 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img 
                  src={`${image}?auto=format&fit=crop&q=80`}
                  alt={`${service.title} gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = service.image;
                  }}
                />
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 mb-8">{service.description}</p>
          
          {/* Testimonials Section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-accent rounded-lg p-6">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-2">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
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
