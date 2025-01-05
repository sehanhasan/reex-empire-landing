import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://i.ibb.co/M28gB6X/Reex-logo.png" 
              alt="Reex Empire Logo" 
              className="h-16 mb-4"
            />
            <p className="text-white/80">
              Transforming spaces and enhancing lives across Kuala Lumpur with expert renovation and maintenance solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+60123456789" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="w-4 h-4" />
                +60 12-345 6789
              </a>
              <a href="mailto:info@reexempire.com" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="w-4 h-4" />
                info@reexempire.com
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                Kuala Lumpur, Malaysia
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 Reex Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};