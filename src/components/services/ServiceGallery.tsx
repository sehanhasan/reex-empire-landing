import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceGalleryProps {
  images: string[];
  serviceTitle: string;
}

export const ServiceGallery = ({ images, serviceTitle }: ServiceGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-64 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={`${image}?auto=format&fit=crop&q=80`}
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

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 relative">
          {selectedImage && (
            <>
              <img
                src={`${selectedImage}?auto=format&fit=crop&q=100`}
                alt={serviceTitle}
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};