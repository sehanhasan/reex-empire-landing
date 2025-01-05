import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ServiceGalleryProps {
  images: string[];
  serviceTitle: string;
}

export const ServiceGallery = ({ images, serviceTitle }: ServiceGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-64 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => setSelectedImage(image)}
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          {selectedImage && (
            <img
              src={`${selectedImage}?auto=format&fit=crop&q=100`}
              alt={serviceTitle}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};