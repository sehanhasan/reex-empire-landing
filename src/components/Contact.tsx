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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return;
    }
    
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
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="get-a-quote" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
              <p className="text-white/80 mb-8">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
            <img 
              src="https://i.ibb.co/fvW2RKX/Group-23.png" 
              alt="Get a Quote Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange(e, 'name')}
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange(e, 'email')}
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
                value={formData.phone}
                onChange={(e) => handleChange(e, 'phone')}
              />
              {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
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
              {errors.service && <p className="text-red-300 text-sm mt-1">{errors.service}</p>}
            </div>
            <div>
              <Textarea
                placeholder="Description"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white/40 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[120px] resize-none"
                required
                value={formData.description}
                onChange={(e) => handleChange(e, 'description')}
              />
              {errors.description && <p className="text-red-300 text-sm mt-1">{errors.description}</p>}
            </div>
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