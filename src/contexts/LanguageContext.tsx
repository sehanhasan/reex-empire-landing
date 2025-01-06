import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'my';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Renovation, Construction & Remodeling Services in Kuala Lumpur',
    'hero.contact': 'Call us at',
    'hero.email': 'or email',
    'hero.quote': 'Get a Free Quote',
    
    // About
    'about.title': '#1 Kuala Lumpur\'s Trusted',
    'about.subtitle': 'Services Partner',
    'about.description': 'With years of experience transforming spaces across Kuala Lumpur, Reex Empire has established itself as a leader in renovation and maintenance services. Our commitment to quality and customer satisfaction sets us apart.',
    'about.projects': 'Projects Completed',
    'about.experience': 'Years Experience',
    'about.whyChoose': 'Why Choose Us',
    'about.expert': 'Expert team of certified professionals',
    'about.pricing': 'Transparent pricing and timelines',
    'about.quality': 'Premium quality materials',
    'about.support': 'After-service support',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'We are the expert in home, office & shop renovation and maintenance services providing you the one-stop solution to your needs.',
    'services.learnMore': 'Learn More',
    'services.request': 'Request Service',
    
    // Contact Form
    'contact.title': 'Get a Free Quote',
    'contact.subtitle': 'Send us the message and we\'ll get back to you shortly',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone Number',
    'contact.area': 'Select Area',
    'contact.service': 'Select Service',
    'contact.description': 'Description',
    'contact.submit': 'Request Quote'
  },
  my: {
    // Navigation
    'nav.home': 'Utama',
    'nav.services': 'Perkhidmatan',
    'nav.contact': 'Hubungi Kami',
    
    // Hero
    'hero.title': 'Perkhidmatan Renovasi, Pembinaan & Pengubahsuaian di Kuala Lumpur',
    'hero.contact': 'Hubungi kami di',
    'hero.email': 'atau emel',
    'hero.quote': 'Dapatkan Sebut Harga Percuma',
    
    // About
    'about.title': '#1 Rakan Perkhidmatan Dipercayai',
    'about.subtitle': 'di Kuala Lumpur',
    'about.description': 'Dengan pengalaman bertahun-tahun mengubah ruang di seluruh Kuala Lumpur, Reex Empire telah mengukuhkan dirinya sebagai peneraju dalam perkhidmatan renovasi dan penyelenggaraan. Komitmen kami terhadap kualiti dan kepuasan pelanggan membezakan kami.',
    'about.projects': 'Projek Selesai',
    'about.experience': 'Tahun Pengalaman',
    'about.whyChoose': 'Mengapa Pilih Kami',
    'about.expert': 'Pasukan pakar profesional bertauliah',
    'about.pricing': 'Harga dan tempoh masa yang telus',
    'about.quality': 'Bahan berkualiti premium',
    'about.support': 'Sokongan selepas perkhidmatan',
    
    // Services
    'services.title': 'Perkhidmatan Kami',
    'services.description': 'Kami adalah pakar dalam perkhidmatan renovasi dan penyelenggaraan rumah, pejabat & kedai yang menyediakan penyelesaian sehenti untuk keperluan anda.',
    'services.learnMore': 'Ketahui Lebih Lanjut',
    'services.request': 'Minta Perkhidmatan',
    
    // Contact Form
    'contact.title': 'Dapatkan Sebut Harga Percuma',
    'contact.subtitle': 'Hantar mesej kepada kami dan kami akan menghubungi anda segera',
    'contact.name': 'Nama Anda',
    'contact.phone': 'Nombor Telefon',
    'contact.area': 'Pilih Kawasan',
    'contact.service': 'Pilih Perkhidmatan',
    'contact.description': 'Penerangan',
    'contact.submit': 'Minta Sebut Harga'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};