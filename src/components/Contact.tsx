import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "./services/data/servicesData";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const message = encodeURIComponent(
      `*New Quote Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n` +
      `*Description:* ${formData.description}`
    );

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/601116656525?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Quote Request Prepared",
      description: "Redirecting you to WhatsApp to send your request.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    field: string
  ) => {
    if (typeof e === 'string') {
      setFormData(prev => ({ ...prev, [field]: e }));
    } else {
      const { value } = e.target;
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <section id="get-a-quote" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-xl mx-auto flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
              <p className="text-white/80 mb-8">
                Send us the message and we'll get back to you shortly
              </p>
            </div>
            <img 
              src="https://i.ibb.co/fvW2RKX/Group-23.png" 
              alt="Get a Quote Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
                value={formData.name}
                onChange={(e) => handleChange(e, 'name')}
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
                value={formData.email}
                onChange={(e) => handleChange(e, 'email')}
              />
            </div>
            <Input
              placeholder="Phone Number"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
              required
              value={formData.phone}
              onChange={(e) => handleChange(e, 'phone')}
            />
            <Select 
              required
              value={formData.service}
              onValueChange={(value) => handleChange(value, 'service')}
            >
              <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 h-[42px]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                {services.map((service) => (
                  <SelectItem 
                    key={service.title} 
                    value={service.title}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Description"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[120px] resize-none"
              required
              value={formData.description}
              onChange={(e) => handleChange(e, 'description')}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-200 h-[42px]"
            >
              Request Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};