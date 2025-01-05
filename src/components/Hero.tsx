import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Spaces, Enhancing Lives in Kuala Lumpur
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Expert Renovation & Maintenance Solutions You Can Rely On
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
  );
};