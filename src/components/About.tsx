import { CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                #1 Kuala Lumpur's Trusted
                <span className="text-primary block">Services Partner</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With years of experience transforming spaces across Kuala Lumpur, Reex Empire has established itself as a leader in renovation and maintenance services. Our commitment to quality and customer satisfaction sets us apart.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-3xl text-primary">500+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-3xl text-primary">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-5">
                {[
                  "Expert team of certified professionals",
                  "100% satisfaction guarantee",
                  "Transparent pricing and timelines",
                  "Premium quality materials",
                  "After-service support"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="bg-secondary/30 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};