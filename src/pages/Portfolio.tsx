
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string;
    src: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto hide language selector on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      title: "Our Portfolio",
      subtitle: "Explore our stunning renovation transformations across different property types",
      filters: ['All', 'One-Bed', 'Two-Bed', 'Pent House']
    },
    zh: {
      title: "我们的作品集",
      subtitle: "探索我们在不同房产类型上的惊人改造",
      filters: ['全部', '一房', '两房', '顶层公寓']
    }
  };

  const currentContent = content[language];
  const filters = currentContent.filters;
  
  const portfolioItems = [{
    type: 'image',
    src: "/lovable-uploads/18b0e4ba-6209-40c0-bdf7-6d4d09286340.png",
    category: 'One-Bed'
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk",
    category: 'One-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/e84471b0-c370-4c49-b243-76049cf4dd93.png",
    category: 'Two-Bed'
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk",
    category: 'Two-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/a33e644e-5a91-48a8-b761-c0e4a0c8c6ec.png",
    category: 'Pent House'
  }, {
    type: 'image',
    src: "/lovable-uploads/5c1674c9-7eda-4fc8-8f86-e8291c5fa1e1.png",
    category: 'Pent House'
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk",
    category: 'One-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/01109413-abf6-408c-a8f9-a95692e74fba.png",
    category: 'Two-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/802cfdac-e630-4a4b-b418-f5e9cb90e2fb.png",
    category: 'Pent House'
  }, {
    type: 'video',
    src: "https://www.youtube.com/embed/oz7wmF51Gwk",
    category: 'Two-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/34c2ea63-c800-4cbc-a195-0b57234324fd.png",
    category: 'One-Bed'
  }, {
    type: 'image',
    src: "/lovable-uploads/bfc580ff-b54e-4e4b-9d54-d23d39c09e3b.png",
    category: 'Pent House'
  }];

  const getFilteredItems = () => {
    if (language === 'zh') {
      const filterMap: { [key: string]: string } = {
        '全部': 'All',
        '一房': 'One-Bed',
        '两房': 'Two-Bed',
        '顶层公寓': 'Pent House'
      };
      const englishFilter = filterMap[activeFilter] || 'All';
      return englishFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === englishFilter);
    }
    return activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  };

  const filteredItems = getFilteredItems();

  const openLightbox = (media: {
    type: string;
    src: string;
  }) => {
    const index = filteredItems.findIndex(item => item.src === media.src && item.type === media.type);
    setCurrentIndex(index);
    setSelectedMedia(media);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(filteredItems[prevIndex]);
  };

  return <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Portfolio - Renovation Projects Gallery</title>
        <meta name="description" content="Browse our complete portfolio of renovation projects including one-bedroom, two-bedroom, and penthouse transformations." />
        <meta property="og:title" content="Portfolio - Renovation Projects Gallery" />
        <meta property="og:description" content="Browse our complete portfolio of renovation projects including one-bedroom, two-bedroom, and penthouse transformations." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yoursite.com/portfolio" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Language Toggle - Auto hide on scroll */}
      <div className={`fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-2 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
      <section className="py-10 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Section - Fixed positioning */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => <Button key={filter} variant={activeFilter === filter ? 'default' : 'outline'} onClick={() => setActiveFilter(filter)} className="px-6 py-2">
                {filter}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-0">
                  {item.type === 'image' ? <div className="relative h-64 overflow-hidden" onClick={() => openLightbox(item)}>
                      <img src={item.src} alt={`${item.category} renovation`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to view
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </div>
                    </div> : <div className="relative h-64" onClick={() => openLightbox(item)}>
                      <iframe src={item.src} className="w-full h-full" title={`${item.category} renovation video`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Video
                      </div>
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </div>
                    </div>}
                </CardContent>
              </Card>)}
          </div>

          {filteredItems.length === 0 && <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>}
        </div>
      </section>

      {/* Lightbox with Navigation */}
      <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          {selectedMedia && <div className="relative w-full h-[90vh] flex items-center justify-center">
              <button onClick={closeLightbox} className="absolute right-4 top-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors" aria-label="Close fullscreen view">
                <X className="h-6 w-6 text-white" />
              </button>
              
              {/* Previous Button */}
              {filteredItems.length > 1 && (
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
              )}
              
              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              )}
              
              {selectedMedia.type === 'image' ? <img src={selectedMedia.src} alt="Portfolio item" className="max-w-full max-h-full object-contain" /> : <div className="w-full max-w-4xl aspect-video">
                  <iframe src={selectedMedia.src} className="w-full h-full" title="Portfolio video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>}
                
              {/* Image Counter */}
              {filteredItems.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full">
                  <span className="text-white text-sm">
                    {currentIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              )}
            </div>}
        </DialogContent>
      </Dialog>
    </div>;
};

export default Portfolio;
