
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Specialization } from "@/components/Specialization";
import { WelcomePopup } from "@/components/WelcomePopup";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <WelcomePopup />
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
