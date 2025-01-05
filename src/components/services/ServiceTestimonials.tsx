import React from 'react';

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

export const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  return (
    <div className="space-y-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-accent rounded-lg p-6">
          <div className="flex items-center mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg italic mb-2">"{testimonial.text}"</p>
          <p className="font-semibold">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};