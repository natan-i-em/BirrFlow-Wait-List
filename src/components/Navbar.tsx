import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPartnerModal: (initialRole?: string) => void;
  onScrollTo: (elementId: string) => void;
  lang: 'en' | 'am';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPartnerModal,
  onScrollTo,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'en' ? 'MVP Screens' : 'የመተግበሪያ ገጾች', target: 'app-screens' },
    { label: lang === 'en' ? 'AI Personal CFO' : 'የአይአይ ረዳት', target: 'ai-cfo' },
    { label: lang === 'en' ? 'How SMS Sync Works' : 'የSMS አሰራር', target: 'sms-sync' },
    { label: lang === 'en' ? 'Who It’s For' : 'ለማን ነው?', target: 'personas' },
    { label: lang === 'en' ? 'Business Model' : 'የቢዝነስ ዕቅድ', target: 'business-model' },
    { label: lang === 'en' ? 'Pricing (250 ETB)' : 'ዋጋ (250 ብር)', target: 'pricing' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onScrollTo(target);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1.5 focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>Birr<span className="text-emerald-400">Flow</span></span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-2.5 h-2.5" />
            <span>AI Personal CFO</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="hover:text-emerald-400 transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            title="Toggle English / Amharic"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono-numbers">{lang === 'en' ? 'አማ' : 'EN'}</span>
          </button>

          <button
            onClick={() => onScrollTo('ai-cfo')}
            className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            {lang === 'en' ? 'Ask CFO Demo' : 'አይአይ ሙከራ'}
          </button>

          <button
            onClick={() => onOpenPartnerModal('download')}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1"
          >
            <span>{lang === 'en' ? 'Get Early Access' : 'መተግበሪያውን አግኝ'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1322] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 border-b border-slate-800/40"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal('pro');
              }}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-slate-800 rounded-lg"
            >
              {lang === 'en' ? 'BirrFlow Pro (250 ETB/mo)' : 'ቢርፍሎው ፕሮ (250 ብር/ወር)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
