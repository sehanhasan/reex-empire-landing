import { CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Kuala Lumpur's Trusted Renovation Partner
          </h2>
          <p className="text-gray-600 mb-8">
            With years of experience transforming spaces across Kuala Lumpur, Reex Empire has established itself as a leader in renovation and maintenance services. Our commitment to quality and customer satisfaction sets us apart.
          </p>
          <div className="space-y-6 mb-12">
            {[
              "Expert team of certified professionals",
              "10+ years of industry experience",
              "100% satisfaction guarantee",
              "Transparent pricing and timelines"
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle className="text-[#D3E4FD] w-8 h-8 flex-shrink-0" />
                <span className="text-[#403E43] text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#D3E4FD] rounded-2xl p-6 shadow-lg inline-block">
            <p className="font-bold text-[#0FA0CE] text-5xl mb-2">500+</p>
            <p className="text-[#0FA0CE] text-xl">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};