import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Wrench, Calendar, Shield, DollarSign, Palette, X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { RenovationHero } from "@/components/renovation/RenovationHero";
import { LanguageToggle } from "@/components/renovation/LanguageToggle";
import { BeforeAfterComparison } from "@/components/renovation/BeforeAfterComparison";

const RenovationPackages = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [beforeAfterSliders, setBeforeAfterSliders] = useState<{
    [key: number]: number;
  }>({});

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
        subtitle: "Stunning transformations from our recent projects",
        viewMore: "View More"
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
        subtitle: "我们最近项目的惊人改造",
        viewMore: "查看更多"
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
        year1Label: "第1年",
        year1: "第1年出售：需支付100%装修费用",
        year2Label: "第2年",
        year2: "第2年出售：需支付50%装修费用",
        afterLabel: "2年后",
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

  const renovationMedia = [{
    type: 'image',
    src: "/lovable-uploads/18b0e4ba-6209-40c0-bdf7-6d4d09286340.png"
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk"
  }, {
    type: 'image',
    src: "/lovable-uploads/e84471b0-c370-4c49-b243-76049cf4dd93.png"
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk"
  }, {
    type: 'image',
    src: "/lovable-uploads/a33e644e-5a91-48a8-b761-c0e4a0c8c6ec.png"
  }, {
    type: 'image',
    src: "/lovable-uploads/5c1674c9-7eda-4fc8-8f86-e8291c5fa1e1.png"
  }];

  const displayMedia = window.innerWidth < 768 ? renovationMedia.slice(0, 6) : renovationMedia;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex(prev => (prev + 1) % displayMedia.length);
  };

  const prevImage = () => {
    setLightboxIndex(prev => (prev - 1 + displayMedia.length) % displayMedia.length);
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

  return (
    <div className="min-h-screen font-eurostile" style={{
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

      <LanguageToggle language={language} setLanguage={setLanguage} isScrolled={isScrolled} />

      <RenovationHero content={currentContent} onContactClick={handleWhatsAppContact} />

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {currentContent.whatsIncluded.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.whatsIncluded.items.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Gallery Section with YouTube Videos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {currentContent.gallery.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {currentContent.gallery.subtitle}
            </p>
          </div>
          
          {/* Mobile Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {displayMedia.map((media, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {media.type === 'image' ? (
                  <div className="cursor-pointer" onClick={() => openLightbox(index)}>
                    <img
                      src={media.src}
                      alt={`Renovation ${index + 1}`}
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-64 sm:h-72 lg:h-80">
                    <iframe
                      src={media.src}
                      className="w-full h-full"
                      title={`Renovation Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                      <Play className="w-3 h-3 inline mr-1" />
                      Video
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {currentContent.gallery.viewMore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox with Navigation */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Previous Button */}
            {displayMedia.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}
            
            {/* Next Button */}
            {displayMedia.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}
            
            {displayMedia[lightboxIndex]?.type === 'image' ? (
              <img
                src={displayMedia[lightboxIndex].src}
                alt={`Renovation ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-full h-96">
                <iframe
                  src={displayMedia[lightboxIndex]?.src}
                  className="w-full h-full"
                  title={`Renovation Video ${lightboxIndex + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            
            {/* Image Counter */}
            {displayMedia.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full">
                <span className="text-white text-sm">
                  {lightboxIndex + 1} / {displayMedia.length}
                </span>
              </div>
            )}
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
                    <h3 className="text-lg font-bold text-white mb-2">{currentContent.selling.year1Label}</h3>
                    <p className="text-white/90 text-base">{language === 'en' ? 'Pay 100% renovation cost' : '需支付100%装修费用'}</p>
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
                    <h3 className="text-lg font-bold text-white mb-2">{currentContent.selling.year2Label}</h3>
                    <p className="text-white/90 text-base">{language === 'en' ? 'Pay 50% renovation cost' : '需支付50%装修费用'}</p>
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
                    <h3 className="text-lg font-bold text-white mb-2">{currentContent.selling.afterLabel}</h3>
                    <p className="text-white/90 text-base">{language === 'en' ? 'Completely FREE!' : '完全免费！'}</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section with Improved Comparison Slider */}
      
      <BeforeAfterComparison content={currentContent} language={language} />

      {/* Video Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.video.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oz7wmF51Gwk" title="Property Transformation Showcase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
    </div>
  );
};

export default RenovationPackages;
