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
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    services: [] as string[],
    description: "",
  });

  const areas = [
    "Kuala Lumpur",
    "Petaling Jaya",
    "Subang Jaya",
    "Shah Alam",
    "Klang"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const message = encodeURIComponent(
      `*New Quote Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Area:* ${formData.area}\n` +
      `*Services:* ${formData.services.join(", ")}\n` +
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string | string[],
    field: string
  ) => {
    if (Array.isArray(e)) {
      setFormData(prev => ({ ...prev, [field]: e }));
    } else if (typeof e === 'string') {
      setFormData(prev => ({ ...prev, [field]: e }));
    } else {
      const { value } = e.target;
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const toggleService = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  return (
    <section id="get-a-quote" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
              <p className="text-white/80 mb-8">
                {t('contact.subtitle')}
              </p>
            </div>
            <img 
              src="https://i.ibb.co/fvW2RKX/Group-23.png" 
              alt="Get a Quote Illustration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder={t('contact.form.name')}
              className="bg-white/10 border border-white text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
              required
              value={formData.name}
              onChange={(e) => handleChange(e, 'name')}
            />
            <Input
              placeholder={t('contact.form.phone')}
              className="bg-white/10 border border-white text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
              required
              value={formData.phone}
              onChange={(e) => handleChange(e, 'phone')}
            />
            <Select
              value={formData.area}
              onValueChange={(value) => handleChange(value, 'area')}
            >
              <SelectTrigger className="bg-white/10 border border-white text-white h-[42px] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder={t('contact.form.area')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border-none shadow-lg">
                {areas.map((area) => (
                  <SelectItem 
                    key={area} 
                    value={area}
                    className="focus:bg-gray-100 cursor-pointer hover:bg-gray-100"
                  >
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <label className="block text-base font-medium">{t('contact.form.services')}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {services.map((service) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => toggleService(service.title)}
                    className={`p-2 rounded border ${
                      formData.services.includes(service.title)
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-white/10 border-white'
                    } transition-colors`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
            <Textarea
              placeholder={t('contact.form.description')}
              className="bg-white/10 border border-white text-white placeholder:text-white/50 focus:outline-none focus:ring-0 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[120px] resize-none"
              required
              value={formData.description}
              onChange={(e) => handleChange(e, 'description')}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-white hover:bg-white/90 text-primary text-sm transition-all duration-200 h-[42px]"
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};