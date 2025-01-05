import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="text-white/80">
                Reex Empire Sdn Bhd (1426553-A)
              </div>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  No. 29-1, Jalan 2A/6,<br />
                  Taman Setapak Indah,<br />
                  53300 Setapak, Kuala Lumpur
                </div>
              </div>
              <a href="tel:01116656525" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="w-4 h-4" />
                011-16-656525
              </a>
              <a href="mailto:reexsb@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="w-4 h-4" />
                reexsb@gmail.com
              </a>
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
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2025 Reex Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};