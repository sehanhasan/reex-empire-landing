import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToQuote = () => {
    const quoteSection = document.querySelector('#get-a-quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[70vh]">
      <div className="relative h-[70vh] w-full">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#1A1F2C',
            opacity: 0.75,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl animate-fadeIn text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              <span><span className="text-[#00d0f7]">Renovation, Construction & Remodeling</span> Services in Kuala Lumpur</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-center">
              Call us at <a href="tel:011-16-656525" className="hover:text-[#00d0f7] transition-colors font-bold">011-16-656525</a> or email <a href="mailto:reexsb@gmail.com" className="hover:text-[#00d0f7] transition-colors font-bold">reexsb@gmail.com</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-center"
                onClick={scrollToQuote}
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};