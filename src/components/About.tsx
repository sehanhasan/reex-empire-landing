import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {t('about.title')}
                <span className="text-primary block">{t('about.titleSpan')}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-3xl text-primary">500+</p>
                  <p className="text-gray-600">{t('about.stats.projects')}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-3xl text-primary">10+</p>
                  <p className="text-gray-600">{t('about.stats.experience')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.whyChoose')}</h3>
              <div className="space-y-5">
                {t('about.features').map((item: string) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="bg-secondary/30 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center gap-8 mt-8">
                <img 
                  src="https://www.goldmates.com.my/wp-content/uploads/2021/02/best-price-guaranteed.png" 
                  alt="Best Price Guaranteed"
                  className="max-w-[120px] h-auto object-contain"
                />
                <img 
                  src="https://tvsolutions.ie/wp-content/uploads/2018/12/guarantee.png" 
                  alt="100% Satisfaction Guaranteed"
                  className="max-w-[120px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};