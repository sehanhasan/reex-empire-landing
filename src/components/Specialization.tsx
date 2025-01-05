import React from "react";

export const Specialization = () => {
  const specializations = [
    {
      title: "Commercial",
      description: "Expert solutions for offices, retail spaces, and business establishments",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Residential",
      description: "Transform your living spaces into beautiful, functional homes",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            We Are Specialized In
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-[400px]">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-3">{spec.title}</h3>
                  <p className="text-lg text-center max-w-md">
                    {spec.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-8">
          <img 
            src="https://www.goldmates.com.my/wp-content/uploads/2021/02/best-price-guaranteed.png" 
            alt="Best Price Guaranteed"
            className="max-w-[200px] h-auto"
          />
          <img 
            src="https://tvsolutions.ie/wp-content/uploads/2018/12/guarantee.png" 
            alt="100% Satisfaction Guaranteed"
            className="max-w-[200px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};