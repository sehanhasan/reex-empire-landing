import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Home, Wrench, Calendar, Shield, DollarSign, Palette } from "lucide-react";
const RenovationPackages = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const content = {
    en: {
      hero: {
        title: "Upgrade Your Property – Zero Cost. Premium Results.",
        subtitle: "We fully renovate your unit at no charge to you – and maintain it like our own.",
        cta1: "Get Started Today",
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
        year1: "Sell in Year 1: Pay 100% of renovation cost",
        year2: "Sell in Year 2: Pay 50%",
        after: "After 2 Years: Free!"
      },
      gallery: {
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
        cta1: "立即开始",
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
        title: "合约期间想要出售？",
        year1: "第1年出售：支付100%装修费用",
        year2: "第2年出售：支付50%",
        after: "2年后：免费！"
      },
      gallery: {
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
  const scrollToContact = () => {
    const footerSection = document.querySelector('footer');
    if (footerSection) {
      footerSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const beforeAfterImages = [{
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
  }, {
    before: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  }];
  return <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-2">
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
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary text-white">
        <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1920&q=80')"
      }} className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {currentContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {currentContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={scrollToContact}>
              {currentContent.hero.cta1}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
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

      {/* Selling Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.selling.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <p className="font-semibold text-red-700">{currentContent.selling.year1}</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <p className="font-semibold text-yellow-700">{currentContent.selling.year2}</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2+</div>
                <p className="font-semibold text-green-700">{currentContent.selling.after}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentContent.gallery.title}
          </h2>
          <Carousel className="max-w-4xl mx-auto">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={scrollToContact}>
            {currentContent.finalCta.button}
          </Button>
        </div>
      </section>
    </div>;
};
export default RenovationPackages;