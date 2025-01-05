import React from 'react';

interface ServiceGalleryProps {
  images: string[];
  serviceTitle: string;
}

export const ServiceGallery = ({ images, serviceTitle }: ServiceGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {images.map((image, index) => (
        <div 
          key={index}
          className="relative h-64 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
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
  );
};