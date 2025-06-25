import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Wrench, Calendar, Shield, DollarSign, Palette, X } from "lucide-react";
import { Helmet } from "react-helmet";

const RenovationPackages = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      hero: {
        title: "Upgrade Your Property – Zero Cost. Premium Results.",
        subtitle: "We fully renovate your unit at no charge to you – and maintain it like our own.",
        cta1: "Contact Us",
        cta2: "Watch Renovation Video"
      },
      whatsIncluded: {
        title: "What You Get with Our Renovation Package",
        items: [{
          icon: Home,
          title: "Full Interior Renovation",
          description: "Complete transformation of your property with modern design"
        }, {
          icon: Palette,
          title: "High-End Furnishings",
          description: "Stylish decor and premium furniture included"
        }, {
          icon: DollarSign,
          title: "RM40,000 – RM100,000 Investment",
          description: "Estimated renovation value at no cost to you"
        }]
      },
      gallery: {
        title: "Renovation Gallery",
        subtitle: "Stunning transformations from our recent projects"
      },
      flexibleOptions: {
        title: "Your Property, Your Choice After 2 Years",
        option1: {
          title: "Renew the Lease",
          description: "Continue enjoying hassle-free rental income"
        },
        option2: {
          title: "Take Back Your Unit",
          description: "Receive a fully renovated, move-in-ready property"
        },
        refresh: "We'll even refresh the property at handover."
      },
      maintenance: {
        title: "Zero Maintenance Hassle",
        subtitle: "We handle all repairs and upkeep during the entire lease term"
      },
      selling: {
        title: "Want to Sell During the Contract?",
        year1Label: "Year 1",
        year1: "Sell in Year 1: Pay 100% of renovation cost",
        year2Label: "Year 2",
        year2: "Sell in Year 2: Pay 50%",
        afterLabel: "After 2 Years",
        after: "After 2 Years: Free!"
      },
      beforeAfter: {
        title: "Before & After Transformations"
      },
      video: {
        title: "Watch the Transformation"
      },
      finalCta: {
        title: "Let us invest in your property while you enjoy stress-free returns.",
        button: "Contact Us"
      }
    },
    zh: {
      hero: {
        title: "升级您的房产 – 零成本，优质效果",
        subtitle: "我们免费为您的单位进行全面装修，并像照顾自己的房产一样维护它",
        cta1: "联系我们",
        cta2: "观看装修视频"
      },
      whatsIncluded: {
        title: "我们的装修套餐包含什么",
        items: [{
          icon: Home,
          title: "全面室内装修",
          description: "采用现代设计完全改造您的房产"
        }, {
          icon: Palette,
          title: "高端家具",
          description: "包含时尚装饰和优质家具"
        }, {
          icon: DollarSign,
          title: "RM40,000 – RM100,000 投资",
          description: "估计装修价值，您无需承担任何费用"
        }]
      },
      gallery: {
        title: "装修画廊",
        subtitle: "我们最近项目的惊人改造"
      },
      flexibleOptions: {
        title: "2年后您的房产，您的选择",
        option1: {
          title: "续租合约",
          description: "继续享受无忧租金收入"
        },
        option2: {
          title: "收回您的单位",
          description: "获得一个完全装修好的即入住房产"
        },
        refresh: "我们甚至会在交接时为房产进行翻新。"
      },
      maintenance: {
        title: "零维护烦恼",
        subtitle: "整个租赁期间我们处理所有维修和保养"
      },
      selling: {
        title: "合约期内想要出售？", 
        year1Label: "第1年出售",
        year1: "第1年出售：需支付100%装修费用",
        year2Label: "第2年出售",
        year2: "第2年出售：需支付50%装修费用", 
        afterLabel: "2年后出售",
        after: "2年后出售：完全免费！"
      },
      beforeAfter: {
        title: "装修前后对比"
      },
      video: {
        title: "观看改造过程"
      },
      finalCta: {
        title: "让我们投资您的房产，您享受无忧回报。",
        button: "联系我们"
      }
    }
  };

  const currentContent = content[language];
  const handleWhatsAppContact = () => {
    const phoneNumber = "601116656525";
    const message = encodeURIComponent("Hi, I'm interested in your renovation packages.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const beforeAfterImages = [{
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
  }, {
    before: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  }];

  const renovationGallery = ["/lovable-uploads/18b0e4ba-6209-40c0-bdf7-6d4d09286340.png", "/lovable-uploads/e84471b0-c370-4c49-b243-76049cf4dd93.png", "/lovable-uploads/a33e644e-5a91-48a8-b761-c0e4a0c8c6ec.png", "/lovable-uploads/5c1674c9-7eda-4fc8-8f86-e8291c5fa1e1.png", "/lovable-uploads/01109413-abf6-408c-a8f9-a95692e74fba.png", "/lovable-uploads/802cfdac-e630-4a4b-b418-f5e9cb90e2fb.png", "/lovable-uploads/34c2ea63-c800-4cbc-a195-0b57234324fd.png", "/lovable-uploads/bfc580ff-b54e-4e4b-9d54-d23d39c09e3b.png", "/lovable-uploads/61e53e22-79b7-4fdd-bbef-15d6b2d36da6.png"];

  // Show only 6 images on mobile
  const displayGallery = window.innerWidth < 768 ? renovationGallery.slice(0, 6) : renovationGallery;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % displayGallery.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + displayGallery.length) % displayGallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return <div className="min-h-screen font-eurostile" style={{
    fontFamily: "'Eurostile', 'Arial', sans-serif"
  }}>
      <Helmet>
        <title>Renovation Packages - Property Renovation Services</title>
        <meta name="description" content="Upgrade your property with zero cost renovation packages. Full interior renovation with high-end furnishings included." />
        <meta property="og:title" content="Renovation Packages - Property Renovation Services" />
        <meta property="og:description" content="Upgrade your property with zero cost renovation packages. Full interior renovation with high-end furnishings included." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yoursite.com/renovation-packages" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Language Toggle - Hidden on scroll */}
      <div className={`top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-2 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 fixed'}`}>
        <div className="flex gap-2">
          <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')} className="text-xs">
            🇬🇧 English
          </Button>
          <Button variant={language === 'zh' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('zh')} className="text-xs">
            🇨🇳 中文
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#0D66B3]/90 to-[#0D66B3] text-white">
        <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1920&q=80')"
      }} className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-eurostile" style={{
          fontFamily: "'Eurostile', 'Arial', sans-serif"
        }}>
            {currentContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {currentContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0D66B3] hover:bg-white/90" onClick={handleWhatsAppContact}>
              {currentContent.hero.cta1}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0D66B3] bg-transparent">
                  {currentContent.hero.cta2}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <div className="aspect-video">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Renovation Transformation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {currentContent.whatsIncluded.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.whatsIncluded.items.map((item, index) => <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Renovation Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {currentContent.gallery.title}
            </h2>
            <p className="text-lg text-gray-600">
              {currentContent.gallery.subtitle}
            </p>
          </div>
          
          {/* Mobile Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayGallery.map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => openLightbox(index)}>
                <img src={image} alt={`Renovation ${index + 1}`} className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            
            <img
              src={displayGallery[lightboxIndex]}
              alt={`Renovation ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {displayGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
                >
                  ›
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {displayGallery.length}
            </div>
          </div>
        </div>
      )}

      {/* Flexible Options Section */}
      <section className="py-20 bg-secondary bg-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.flexibleOptions.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center bg-slate-50">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{currentContent.flexibleOptions.option1.title}</h3>
                <p className="text-gray-600">{currentContent.flexibleOptions.option1.description}</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center bg-slate-50">
                <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{currentContent.flexibleOptions.option2.title}</h3>
                <p className="text-gray-600">{currentContent.flexibleOptions.option2.description}</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-lg font-medium text-primary">
            {currentContent.flexibleOptions.refresh}
          </p>
        </div>
      </section>

      {/* Maintenance Assurance */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {currentContent.maintenance.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {currentContent.maintenance.subtitle}
          </p>
        </div>
      </section>

      {/* Selling Timeline with Beautiful Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.selling.title}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative text-center group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-red-600">1</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">Year 1</h3>
                    <p className="text-white/90 text-base">Pay 100% renovation cost</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-300 rounded-full opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              <div className="relative text-center group">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">Year 2</h3>
                    <p className="text-white/90 text-base">Pay 50% renovation cost</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              <div className="relative text-center group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-green-600">2+</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">After 2 Years</h3>
                    <p className="text-white/90 text-base">Completely FREE!</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.beforeAfter.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {beforeAfterImages.map((images, index) => <CarouselItem key={index}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <img src={images.before} alt="Before renovation" className="w-full h-64 object-cover rounded-lg" />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {language === 'en' ? 'Before' : '装修前'}
                        </div>
                      </div>
                      <div className="relative">
                        <img src={images.after} alt="After renovation" className="w-full h-64 object-cover rounded-lg" />
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {language === 'en' ? 'After' : '装修后'}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4 md:hidden">
                <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                <CarouselNext className="relative right-0 top-0 translate-y-0" />
              </div>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.video.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Property Transformation Showcase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {currentContent.finalCta.title}
          </h2>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={handleWhatsAppContact}>
            {currentContent.finalCta.button}
          </Button>
        </div>
      </section>
    </div>;
};
export default RenovationPackages;
