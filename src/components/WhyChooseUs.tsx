import { Clock, Award, BadgeDollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const WhyChooseUs = () => {
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Clock className="w-16 h-16 text-white" />,
      title: "Guaranteed Fast & Efficiency",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: <Award className="w-16 h-16 text-white" />,
      title: "Best Quality & Services",
      description: "Premium workmanship and exceptional customer service"
    },
    {
      icon: <BadgeDollarSign className="w-16 h-16 text-white" />,
      title: "Affordable & Reasonable Price",
      description: "Competitive pricing without hidden costs"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Lee",
      role: "Homeowner",
      content: "Reex Empire transformed our old apartment into a modern haven. Their attention to detail and efficiency was impressive!",
      rating: 5
    },
    {
      name: "Ahmad Rahman",
      role: "Business Owner",
      content: "The team's professionalism and quality of work exceeded our expectations. They completed our office renovation ahead of schedule.",
      rating: 5
    },
    {
      name: "Michelle Tan",
      role: "Property Manager",
      content: "Their maintenance services are reliable and reasonably priced. Always my go-to for any property upkeep needs.",
      rating: 5
    }
  ];

  return (
    <section className="relative py-20">
      {/* Parallax Background with Dark Overlay */}
      <div 
        className={`absolute inset-0 z-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Reex Empire?</h2>
          <p className="text-2xl text-white/90 mb-8">It's Simple!</p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We provide one stop & full range of renovation services to our customers. So you just have to sit back and relax!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-xl p-6 rounded-lg"
              >
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{testimonial.content}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-white/70">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};