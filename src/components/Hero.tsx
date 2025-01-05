import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
      title: "#1 Renovation, Construction & Remodeling Services in Kuala Lumpur",
      subtitle: "Expert Renovation & Maintenance Solutions You Can Rely On"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      title: "Premium Quality Renovation Services",
      subtitle: "Creating Beautiful Spaces That Last"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
      title: "Your Vision, Our Expertise",
      subtitle: "Professional Home Improvement Solutions"
    }
  ];

  return (
    <div className="relative min-h-[90vh]">
      <Carousel
        opts={{
          loop: true,
          duration: 50,
        }}
        className="w-full h-[90vh]"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[90vh] w-full">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
                  <div className="max-w-3xl animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      >
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                      >
                        View Our Services
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 text-white border-white/30" />
      </Carousel>
    </div>
  );
};