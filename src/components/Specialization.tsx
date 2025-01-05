import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Specialization = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Impact, sans-serif' }}>
          We Are Specialised In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Commercial Card */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/c06ecf02-f4f9-4a62-8d03-48c6b87fc788.png" 
              alt="Commercial Space"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-4">COMMERCIAL</h3>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                  asChild
                >
                  <Link to="/commercial">View More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Residential Card */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/c06ecf02-f4f9-4a62-8d03-48c6b87fc788.png" 
              alt="Residential Space"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-4">RESIDENTIAL</h3>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                  asChild
                >
                  <Link to="/residential">View More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};