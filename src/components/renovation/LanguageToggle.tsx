
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
  isScrolled: boolean;
}

export const LanguageToggle = ({ language, setLanguage, isScrolled }: LanguageToggleProps) => {
  return (
    <>
      {/* Language Toggle - Desktop */}
      <div className={`hidden md:block fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-2 transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex gap-2">
          <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')} className="text-xs">
            🇬🇧 English
          </Button>
          <Button variant={language === 'zh' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('zh')} className="text-xs">
            🇨🇳 中文
          </Button>
        </div>
      </div>

      {/* Language Toggle - Mobile (Bottom Left) */}
      <div className="md:hidden fixed bottom-6 left-4 z-50 bg-white rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <Button variant={language === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('en')} className="text-xs">
            🇬🇧 EN
          </Button>
          <Button variant={language === 'zh' ? 'default' : 'outline'} size="sm" onClick={() => setLanguage('zh')} className="text-xs">
            🇨🇳 中文
          </Button>
        </div>
      </div>
    </>
  );
};
