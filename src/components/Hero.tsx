import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Shield, CheckCircle, Zap } from 'lucide-react';

interface HeroProps {
  onScrollToScreens: () => void;
  onScrollToAiDemo: () => void;
  onOpenModal: (role?: string) => void;
  lang: 'en' | 'am';
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToScreens,
  onScrollToAiDemo,
  onOpenModal,
  lang,
}) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 tracking-wide uppercase">
          <span>{lang === 'en' ? 'YOUR AI PERSONAL CFO' : 'የግል የገንዘብ አማካሪዎ (AI PERSONAL CFO)'}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">{lang === 'en' ? 'ZERO-CREDENTIAL SMS BANKING TRACKER' : 'በSMS የሚሰራ አስተዋይ የሂሳብ መቆጣጠሪያ'}</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.14] text-balance">
            {lang === 'en' ? (
              <>
                Know where every <span className="text-emerald-400">Birr</span> goes. <br className="hidden sm:inline" />
                Powered by your bank SMS & AI.
              </>
            ) : (
              <>
                እያንዳንዱ <span className="text-emerald-400">ብር</span> የት እንደገባ በትክክል ይወቁ። <br className="hidden sm:inline" />
                በSMS እና በአርቴፊሻል ኢንተለጀንስ የታገዘ።
              </>
            )}
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {lang === 'en' ? (
              'BirrFlow is an intelligent personal finance tracker for freelancers, university students, and employees in Ethiopia. It listens to incoming SMS from Commercial Bank of Ethiopia, Telebirr, and private banks, calculates your daily runway, and provides an interactive AI CFO chatbot that explains your spending in your language.'
            ) : (
              'ቢርፍሎው (BirrFlow) ለፍሪላንሰሮች፣ ለዩኒቨርሲቲ ተማሪዎችና ለሠራተኞች የተዘጋጀ ዘመናዊ የገንዘብ መቆጣጠሪያ ነው። ከኢትዮጵያ ንግድ ባንክ፣ ከቴሌብርና ከሌሎች ባንኮች የሚደርሷችሁን የSMS መልዕክቶች በመተንተን፣ ገንዘቦ ስንት ቀን እንደሚበቃችሁ የሚያሰላና በማንኛውም ሰዓት በቋንቋችሁ መልስ የሚሰጥ የአይአይ አማካሪ አለው።'
            )}
          </p>
        </div>

        {/* Target Audience Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-300">
          <span className="text-slate-500 font-medium">{lang === 'en' ? 'Tailored for:' : 'ለእነማን ተዘጋጀ:'}</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
            💻 {lang === 'en' ? 'Freelancers & Creatives' : 'ፍሪላንሰሮችና የቴክ ባለሙያዎች'}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
            🎓 {lang === 'en' ? 'University Students' : 'የዩኒቨርሲቲ ተማሪዎች'}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
            🏢 {lang === 'en' ? 'Salaried Employees' : 'የወር ደመወዝተኞች'}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200">
            📈 {lang === 'en' ? 'Savvy Individuals' : 'የገንዘብ ቁጠባ ወዳጆች'}
          </span>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onScrollToScreens}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>{lang === 'en' ? 'Explore Real App MVP Screens' : 'የመተግበሪያውን ገጾች እይ'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToAiDemo}
            className="px-5 py-3 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'en' ? 'Chat with AI Personal CFO' : 'ከአይአይ CFO ጋር አውራ'}</span>
          </button>

          <button
            onClick={() => onOpenModal('beta')}
            className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Join Android Beta APK →' : 'የአንድሮይድ ቤታ ተቀላቀል →'}
          </button>
        </div>

        {/* Real Product Proof Metrics */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-mono-numbers text-2xl sm:text-3xl font-bold text-white tracking-tight">
              630+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'Bank SMS auto-categorized' : 'በራስ-ሰር የተተነተኑ የባንክ SMS'}
            </div>
          </div>

          <div>
            <div className="font-mono-numbers text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'On-device private (No bank login)' : 'በስልክዎ ብቻ የሚቀመጥ አስተማማኝ ዳታ'}
            </div>
          </div>

          <div>
            <div className="font-mono-numbers text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">
              250 ETB
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'Monthly Pro (AI CFO & Multi-Bank)' : 'ወርሃዊ የፕሮ ክፍያ (አይአይ CFO ያለው)'}
            </div>
          </div>

          <div>
            <div className="font-mono-numbers text-2xl sm:text-3xl font-bold text-white tracking-tight">
              7+ Banks
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {lang === 'en' ? 'CBE, Telebirr, Awash, BOA, Dashen' : 'ንግድ ባንክ፣ ቴሌብር፣ አዋሽ፣ አቢሲኒያ'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
