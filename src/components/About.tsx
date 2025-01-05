import { CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Kuala Lumpur's Trusted Renovation Partner
            </h2>
            <p className="text-gray-600 mb-6">
              With years of experience transforming spaces across Kuala Lumpur, Reex Empire has established itself as a leader in renovation and maintenance services. Our commitment to quality and customer satisfaction sets us apart.
            </p>
            <div className="space-y-4">
              {[
                "Expert team of certified professionals",
                "10+ years of industry experience",
                "100% satisfaction guarantee",
                "Transparent pricing and timelines"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80"
              alt="Our Work"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-lg shadow-lg">
              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};