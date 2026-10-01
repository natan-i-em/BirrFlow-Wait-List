import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  lang: 'en' | 'am';
  onOpenModal: (role?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, onOpenModal }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#080c14] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            {lang === 'en' ? 'TRANSPARENT PRICING' : 'ግልጽና ተመጣጣኝ ዋጋ'}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'Simple, predictable subscription.' : 'ቀላልና ተመጣጣኝ ወርሃዊ የደንበኝነት ክፍያ።'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            {lang === 'en'
              ? 'Start 100% free with one bank, or unlock multi-bank tracking and your live AI Personal CFO for just 250 Birr a month.'
              : 'በአንድ ባንክ በነጻ ይጀምሩ፤ ወይም በወር በ250 ብር ብቻ ሁሉንም ባንኮችዎን በአንድ ላይ የሚቆጣጠር የአይአይ አማካሪ ያግኙ።'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Plan 1: Freemium */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'FREEMIUM' : 'ነጻ መደበኛ'}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-mono-numbers text-4xl font-bold text-white">0</span>
                <span className="text-sm font-semibold text-slate-400">ETB / month</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Essential automated SMS tracking and budgeting for individuals with one primary bank account.'
                  : 'ለአንድ ባንክ ብቻ የሚያገለግል፣ ወጪና ገቢን በራስ-ሰር የሚመዘግብ ነጻ መተግበሪያ።'}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Monitor 1 Bank only</strong> (CBE or Telebirr)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>On-device SMS auto-sync & categorization</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Recent transaction search and filter</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Monthly income vs expense summary</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-500">
                  <span className="w-4 h-4 text-center">—</span>
                  <span>No AI Chatbot ("Ask CFO")</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-500">
                  <span className="w-4 h-4 text-center">—</span>
                  <span>No multi-bank consolidated balance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => onOpenModal('free')}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Get Started Free' : 'በነጻ ጀምር'}
              </button>
            </div>
          </div>

          {/* Plan 2: BirrFlow Pro (250 Birr / month) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-950 border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between relative overflow-hidden ring-1 ring-emerald-500/20">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-mono-numbers font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950">
                RECOMMENDED
              </span>
            </div>

            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'en' ? 'BIRRFLOW PRO' : 'ቢርፍሎው ፕሮ'}</span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-mono-numbers text-4xl font-extrabold text-white">250</span>
                <span className="text-sm font-semibold text-emerald-400">ETB / month</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Your full conversational AI Personal CFO, multi-bank tracking, and predictive daily cashflow runway.'
                  : 'የአይአይ ረዳት፣ የሁሉንም ባንኮች ቁጥጥር እና የዕለታዊ ወጪ ስሌትን የያዘ የተሟላ አገልግሎት።'}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Monitor Multiple Banks Simultaneously:</strong> CBE, Telebirr, Awash, Abyssinia, Dashen, M-PESA, Coop.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Interactive AI Personal CFO Chatbot:</strong> Ask any question about transactions, debits, and balance runway in English or Amharic.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Predictive Financial Runway:</strong> Real-time "Safe to Spend" daily calculator.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Fee Leakage Auditing:</strong> Identify and eliminate small recurring bank transfer charges and VAT.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Daily Cashflow Heatmap:</strong> Monthly PnL calendar view.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Early Access to Credit Score:</strong> Qualify for upcoming collateral-free micro-loans.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => onOpenModal('pro')}
                className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Get BirrFlow Pro for 250 ETB' : 'ቢርፍሎው ፕሮን በ250 ብር ያግኙ'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Security badge below pricing */}
        <div className="mt-10 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'en' ? 'Zero bank credentials required. 100% on-device SMS privacy.' : 'የባንክ ይለፍ ቃል አያስፈልግም። መረጃው በስልክዎ ብቻ ይቀመጣል።'}</span>
        </div>

      </div>
    </section>
  );
};
