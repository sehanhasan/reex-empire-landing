import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Specialization } from "@/components/Specialization";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Specialization />
      <Services />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Index;