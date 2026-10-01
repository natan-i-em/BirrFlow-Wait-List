import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'am';
  onScrollTo: (target: string) => void;
  onOpenPartnerModal: (role?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onScrollTo, onOpenPartnerModal }) => {
  return (
    <footer className="bg-[#070a10] border-t border-slate-900 py-12 md:py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Birr<span className="text-emerald-400">Flow</span></span>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                Personal CFO
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              {lang === 'en'
                ? 'BirrFlow is an AI personal CFO for freelancers, university students, and employees in Ethiopia. It listens to incoming bank SMS to provide real-time runway projections, expense breakdowns, and intelligent financial advice.'
                : 'ቢርፍሎው ለፍሪላንሰሮች፣ ለተማሪዎችና ለሠራተኞች የተዘጋጀ በአይአይ የታገዘ የግል የፋይናንስ አማካሪ ነው። የባንክ SMS መልዕክቶችን በመተንተን ወጪዎትንና የገንዘብ ጥንካሬዎትን ያሳያል።'}
            </p>
            <div className="text-[11px] text-slate-500">
              Addis Ababa Head Office: Bole Sub-City, Addis Ababa, Ethiopia
            </div>
          </div>

          {/* Col 1: Product Screens */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Product MVP</div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onScrollTo('app-screens')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Available Balance & Home
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('app-screens')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  All Banking Transactions (Txns)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('app-screens')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Daily Cashflow Heatmap
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('ai-cfo')} className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1">
                  <span>Ask CFO (AI Chatbot)</span>
                  <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('app-screens')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  The Story So Far (Analytics)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Business & Model */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Business Model</div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onScrollTo('business-model')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Primary Model (Freemium vs Pro)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('pricing')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  BirrFlow Pro (250 ETB/mo)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('business-model')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Alternative Credit Scoring
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('business-model')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  B2B Financial Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('business-model')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  ESX & Investment Broker Vision
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Personas & Privacy */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Audience & Trust</div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onScrollTo('personas')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  For Freelancers & Creatives
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('personas')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  For University Students
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('personas')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  For Salaried Employees
                </button>
              </li>
              <li>
                <span className="text-emerald-400">Zero-Password Architecture</span>
              </li>
              <li>
                <button onClick={() => onOpenPartnerModal('beta')} className="text-emerald-400 hover:underline cursor-pointer">
                  Download Beta APK →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} BirrFlow Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">On-Device Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
