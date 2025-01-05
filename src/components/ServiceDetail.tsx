import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import { services } from "./Services";

// Gallery images for each service
const serviceGalleryImages = {
  'maintenance': [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    'https://images.unsplash.com/photo-1590479773265-7464e5d48118',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
  ],
  'carpentry': [
    'https://images.unsplash.com/photo-1622150162807-12a1f647f4e7',
    'https://images.unsplash.com/photo-1617104551722-3b2d51366400',
    'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c',
    'https://images.unsplash.com/photo-1530124566582-a618bc2615dc',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607',
    'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9'
  ],
  'interior-design': [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
  ],
  'painting': [
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
    'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5',
    'https://images.unsplash.com/photo-1627541718143-1adc1b582e62',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91'
  ],
  'plumbing': [
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39',
    'https://images.unsplash.com/photo-1542013936693-884638332954',
    'https://images.unsplash.com/photo-1461963040894-7e0116fccf44',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
    'https://images.unsplash.com/photo-1615870123253-f3de8aa89e24',
    'https://images.unsplash.com/photo-1601999007938-f584b47324ac'
  ],
  'renovation': [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    'https://images.unsplash.com/photo-1574359886553-7ac247955371',
    'https://images.unsplash.com/photo-1534237710431-e2fc698436d0',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516'
  ],
  'demolition': [
    'https://images.unsplash.com/photo-1626271763156-520913751759',
    'https://images.unsplash.com/photo-1590791897393-5f4f1c25dea7',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    'https://images.unsplash.com/photo-1597244211919-8a52ab2e40ea'
  ],
  'aircond': [
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
    'https://images.unsplash.com/photo-1527899161883-3eb074843f34',
    'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c',
    'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308',
    'https://images.unsplash.com/photo-1432889490240-84df33d47091',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
  ]
};

// Testimonials for each service
const serviceTestimonials = {
  'maintenance': [
    {
      text: "Excellent maintenance service that keeps our property in top condition!",
      author: "David Wong",
      rating: 5
    },
    {
      text: "The team was very responsive and did a fantastic job.",
      author: "Alice Tan",
      rating: 4
    },
    {
      text: "Reliable and efficient service, highly recommend!",
      author: "John Lim",
      rating: 5
    }
  ],
  'carpentry': [
    {
      text: "Outstanding carpentry work with great attention to detail.",
      author: "Sarah Tan",
      rating: 5
    },
    {
      text: "The craftsmanship was top-notch, very satisfied.",
      author: "Michael Lee",
      rating: 5
    },
    {
      text: "Great service and quality work, will hire again.",
      author: "Raj Kumar",
      rating: 4
    }
  ],
  'interior-design': [
    {
      text: "Transformed our space into something truly beautiful!",
      author: "Linda Chen",
      rating: 5
    },
    {
      text: "Creative designs that exceeded our expectations.",
      author: "Emma Wilson",
      rating: 5
    },
    {
      text: "Very professional and attentive to our needs.",
      author: "David Thompson",
      rating: 4
    }
  ],
  'painting': [
    {
      text: "Excellent paint job that brightened up our entire home!",
      author: "Michael Lee",
      rating: 5
    },
    {
      text: "The team was very professional and did a great job.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      text: "Quick and efficient service, highly recommend!",
      author: "John Smith",
      rating: 4
    }
  ],
  'plumbing': [
    {
      text: "Quick and efficient plumbing service!",
      author: "Raj Kumar",
      rating: 5
    },
    {
      text: "Resolved our plumbing issues in no time.",
      author: "Linda Chong",
      rating: 5
    },
    {
      text: "Very knowledgeable and professional team.",
      author: "Michael Brown",
      rating: 4
    }
  ],
  'renovation': [
    {
      text: "Completely transformed our home with excellent renovation work!",
      author: "Ahmad Hassan",
      rating: 5
    },
    {
      text: "The renovation was done on time and within budget.",
      author: "Emma Wilson",
      rating: 5
    },
    {
      text: "Great attention to detail and very responsive.",
      author: "David Thompson",
      rating: 4
    }
  ],
  'demolition': [
    {
      text: "Efficient and safe demolition work with proper cleanup.",
      author: "John Lim",
      rating: 5
    },
    {
      text: "Very professional and thorough in their work.",
      author: "Alice Tan",
      rating: 5
    },
    {
      text: "Highly recommend for any demolition needs.",
      author: "Michael Lee",
      rating: 4
    }
  ],
  'aircond': [
    {
      text: "Great AC service with professional maintenance!",
      author: "Kamal Ibrahim",
      rating: 5
    },
    {
      text: "The team was very knowledgeable and efficient.",
      author: "Sarah Tan",
      rating: 5
    },
    {
      text: "Quick response and excellent service.",
      author: "Raj Kumar",
      rating: 4
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
