
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetToKnowMore = () => {
    setIsOpen(false);
    navigate('/renovation-packages');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 bg-transparent border-none overflow-hidden">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
            aria-label="Close welcome popup"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          
          <div className="relative h-64 overflow-hidden">
            <img
              src="/lovable-uploads/18b0e4ba-6209-40c0-bdf7-6d4d09286340.png"
              alt="Renovated room showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Property
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Discover our zero-cost renovation packages that completely transform your property 
              with premium finishes and modern design - all at no charge to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleGetToKnowMore}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                Get to Know More
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleClose}
                className="px-8 py-3"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
