import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ServiceGalleryProps {
  images: string[];
  serviceTitle: string;
}

export const ServiceGallery = ({ images, serviceTitle }: ServiceGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={image}
              alt={`${serviceTitle} gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96";
              }}
            />
          </div>
        ))}
      </div>

      <Dialog 
        open={selectedImageIndex !== null} 
        onOpenChange={() => setSelectedImageIndex(null)}
      >
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
        >
          {selectedImageIndex !== null && (
            <div className="relative w-full h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute right-4 top-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close fullscreen view"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <img
                src={images[selectedImageIndex]}
                alt={`${serviceTitle} full view`}
                className="max-w-full max-h-full object-contain"
              />

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};