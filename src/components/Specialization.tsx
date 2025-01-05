import React from 'react';

export const Specialization = () => {
  const specializations = [
    {
      title: "COMMERCIAL",
      image: "/lovable-uploads/ae9ce440-c3e7-4794-bef5-9ba435dcd9f4.png",
      description: "Expert solutions for restaurants, offices, and retail spaces"
    },
    {
      title: "RESIDENTIAL",
      image: "/lovable-uploads/ae9ce440-c3e7-4794-bef5-9ba435dcd9f4.png",
      description: "Transform your living spaces with our professional services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">We Are Specialized In</h2>
          <p className="text-lg text-gray-600">Delivering excellence in both commercial and residential projects</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <div 
              key={spec.title}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-[400px]">
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{spec.title}</h3>
                    <p className="text-lg opacity-90">{spec.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};