
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface RenovationHeroProps {
  content: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
  };
  onContactClick: () => void;
}

export const RenovationHero = ({ content, onContactClick }: RenovationHeroProps) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80")'
      }} />
      <div className="absolute inset-0 bg-[#0D66B3]/80"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-eurostile" style={{
          fontFamily: "'Eurostile', 'Arial', sans-serif"
        }}>
          {content.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          {content.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#0D66B3] hover:bg-white/90" onClick={onContactClick}>
            {content.hero.cta1}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0D66B3] bg-transparent">
                {content.hero.cta2}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full">
              <div className="aspect-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oz7wmF51Gwk" title="Renovation Transformation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
