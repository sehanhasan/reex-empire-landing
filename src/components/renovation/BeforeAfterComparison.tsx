
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterComparisonProps {
  content: {
    beforeAfter: {
      title: string;
    };
  };
  language: 'en' | 'zh';
}

export const BeforeAfterComparison = ({ content, language }: BeforeAfterComparisonProps) => {
  const [beforeAfterSliders, setBeforeAfterSliders] = useState<{
    [key: number]: number;
  }>({});

  const beforeAfterImages = [{
    before: "/lovable-uploads/51d1dd55-bbe0-4e8b-8518-bf72e6605062.png",
    after: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
  }, {
    before: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  }];

  const handleSliderChange = (imageIndex: number, value: number) => {
    setBeforeAfterSliders(prev => ({
      ...prev,
      [imageIndex]: value
    }));
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {content.beforeAfter.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterImages.map((images, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
                {/* Before Image */}
                <img src={images.before} alt="Before renovation" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* After Image with clip-path */}
                <div className="absolute inset-0 overflow-hidden" style={{
                  clipPath: `inset(0 ${100 - (beforeAfterSliders[index] || 50)}% 0 0)`
                }}>
                  <img src={images.after} alt="After renovation" className="w-full h-full object-cover" />
                </div>
                
                {/* Enhanced Slider with larger touch area */}
                <div className="absolute inset-0 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={beforeAfterSliders[index] || 50}
                    onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                    className="w-full h-full opacity-0 cursor-pointer z-10 touch-manipulation"
                    style={{ padding: '20px 0' }}
                  />
                </div>
                
                {/* Divider with Chevron Icons */}
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none" style={{
                  left: `${beforeAfterSliders[index] || 50}%`,
                  transform: 'translateX(-50%)'
                }}>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-gray-600 -ml-1" />
                    <ChevronRight className="w-4 h-4 text-gray-600 -mr-1" />
                  </div>
                </div>
                
                {/* Labels */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-red-500">
                    {language === 'en' ? 'Before' : '装修前'}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-green-500">
                    {language === 'en' ? 'After' : '装修后'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
