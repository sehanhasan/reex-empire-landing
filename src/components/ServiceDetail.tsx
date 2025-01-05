import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { services } from './Services';
import { ServiceGallery } from './services/ServiceGallery';
import { ServiceTestimonials } from './services/ServiceTestimonials';
import { serviceGalleryImages, serviceTestimonials } from './services/ServiceData';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
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

  const galleryImages = serviceGalleryImages[serviceId as keyof typeof serviceGalleryImages] || [];
  const testimonials = serviceTestimonials[serviceId as keyof typeof serviceTestimonials] || [];

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

          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};