import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { services } from './services/data/servicesData';
import { ServiceGallery } from './services/ServiceGallery';
import { ServiceTestimonials } from './services/ServiceTestimonials';
import { serviceGalleryImages } from './services/data/galleryImages';
import { serviceTestimonials } from './services/data/testimonials';

export const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => {
    const slug = s.title.toLowerCase().replace(/[&\s]+/g, '-');
    return slug === serviceId;
  });

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8">Service not found</h1>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const slug = service.title.toLowerCase().replace(/[&\s]+/g, '-');
  const galleryImages = serviceGalleryImages[slug] || [];
  const testimonials = serviceTestimonials[slug] || [];

  return (
    <div className="container mx-auto px-4 pt-8 pb-20 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          
          <ServiceGallery images={galleryImages} serviceTitle={service.title} />
          
          <p className="text-lg text-gray-700 mb-8">{service.description}</p>
          
          <ServiceTestimonials testimonials={testimonials} />

          <div className="flex justify-end">
            <Button 
              asChild 
              size="lg"
              className="bg-[#00d0f7] text-white hover:bg-[#00d0f7]/90"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};