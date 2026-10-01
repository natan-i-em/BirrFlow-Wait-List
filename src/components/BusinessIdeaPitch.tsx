import React, { useState } from 'react';
import { 
  CreditCard, 
  Database, 
  Landmark, 
  TrendingUp, 
  Check, 
  ShieldCheck, 
  FileText, 
  ArrowUpRight,
  Layers,
  Sparkles,
  PieChart
} from 'lucide-react';

interface BusinessIdeaPitchProps {
  lang: 'en' | 'am';
  onOpenModal: (role?: string) => void;
}

export const BusinessIdeaPitch: React.FC<BusinessIdeaPitchProps> = ({ lang, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'future_vision'>('primary');

  return (
    <section id="business-model" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <span>{lang === 'en' ? 'BUSINESS MODEL & STRATEGIC ROADMAP' : 'የቢዝነስ ዕቅድና የረጅም ጊዜ ራዕይ'}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{lang === 'en' ? 'MONETIZATION & EXPANSION' : 'የገቢ ምንጮችና ዕድገት'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'From Personal CFO to Digital Financial Institution.' : 'ከግል የሂሳብ አማካሪነት ወደ ሙሉ የዲጂታል ባንክ ተቋምነት።'}
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base">
              {lang === 'en'
                ? 'A disciplined multi-stage business model combining immediate subscription software revenue with high-margin data intelligence, credit scoring, and wealth brokering.'
                : 'በአጭር ጊዜ በወርሃዊ የደንበኝነት ክፍያ የሚጀምር፣ በረጅም ጊዜ ደግሞ የብድር ነጥብ (Credit Score) በመስጠትና የኢንቨስትመንት ድልድይ በመሆን የሚያድግ የቢዝነስ ስትራቴጂ።'}
            </p>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'primary' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? '1. Primary Model (SaaS)' : '1. ወርሃዊ ክፍያ (SaaS)'}
            </button>
            <button
              onClick={() => setActiveTab('secondary')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'secondary' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? '2. Secondary (Data & Credit)' : '2. ክሬዲትና ዳታ'}
            </button>
            <button
              onClick={() => setActiveTab('future_vision')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'future_vision' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'en' ? '3. Future Vision (Banking/ESX)' : '3. የኢንቨስትመንት ባንክ ራዕይ'}
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB 1: PRIMARY MODEL (FREEMIUM VS 250 ETB PRO)
           ======================================================== */}
        {activeTab === 'primary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Freemium Tier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {lang === 'en' ? 'FREEMIUM TIER' : 'ነጻ አገልግሎት'}
                  </span>
                  <span className="text-xs font-mono-numbers px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    Free Forever
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'Basic SMS Tracking' : 'መሠረታዊ የSMS መቆጣጠሪያ'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'A standard financial tracking and budgeting app for individuals looking to gain clean visibility into a single primary bank account.'
                    : 'ለአንድ ባንክ ብቻ የሚያገለግል፣ ወጪና ገቢን በራስ-ሰር የሚከታተል ነጻ መተግበሪያ።'}
                </p>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Track 1 Bank Only</strong> (e.g. Commercial Bank of Ethiopia OR Telebirr)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automatic incoming bank SMS parsing on device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Basic transaction history and search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Monthly total income & total expense counter</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenModal('free')}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Start Free' : 'በነጻ ጀምር'}
                </button>
              </div>
            </div>

            {/* Pro Subscription Tier (250 ETB / Month) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'BIRRFLOW PRO (PRIMARY REVENUE)' : 'ቢርፍሎው ፕሮ (ዋና የገቢ ምንጭ)'}</span>
                  </span>
                  <span className="text-xs font-mono-numbers px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    250 ETB / Month
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'AI Personal CFO & Multi-Bank' : 'አይአይ CFO እና የብዙ ባንኮች ቁጥጥር'}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {lang === 'en'
                    ? 'The full conversational AI financial assistant that monitors multiple banks simultaneously, analyzes your spending habits in your language, and sets safe-to-spend projections.'
                    : 'ሁሉንም ባንኮችዎን በአንድ ላይ የሚከታተል፣ ስለ ገንዘብዎ በቋንቋዎ የሚመልስ እና የቀን የወጪ ገደብ የሚያስቀምጥ የአይአይ አማካሪ።'}
                </p>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Monitor More Than One Bank:</strong> CBE, Telebirr, Awash, Abyssinia, Dashen, M-PESA synced together.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Interactive AI CFO Chatbot:</strong> Ask any question about debits, transfer fees, or counterparties in English & Amharic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Predictive Financial Runway:</strong> Real-time "Safe to Spend" daily calculator to prevent overdrafts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Hidden Fee Leakage Audit:</strong> Pinpoints CBE transfer charges + VAT siphoning your balance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Daily Cashflow Heatmap:</strong> Visual net profit/loss calendar.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenModal('pro')}
                  className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'en' ? 'Subscribe to Pro for 250 ETB' : 'በ250 ብር ፕሮን ያግኙ'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: SECONDARY MODEL (DATA & ALTERNATIVE CREDIT SCORING)
           ======================================================== */}
        {activeTab === 'secondary' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Credit Scoring & Lending */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {lang === 'en' ? 'ALTERNATIVE FINANCIAL CREDIT SCORING' : 'አማራጭ የብድር ነጥብ (CREDIT SCORE)'}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {lang === 'en' ? 'Unlocking micro-credit based on verified cashflow.' : 'በእውነተኛ የገንዘብ እንቅስቃሴ ላይ የተመሰረተ ብድር።'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'en'
                    ? 'Because Ethiopian commercial banks historically require physical real estate or vehicle collateral, 95% of freelancers, students, and employees are locked out of credit. As BirrFlow collects months of verified personal transaction data and spending reasons, we build an objective Alternative Credit Score.'
                    : 'ባንኮች ያለ ቤትና መኪና ማስያዣ ብድር ስለማይሰጡ፣ ቢርፍሎው የወጪና ገቢ ታሪክን በመተንተን ትክክለኛ የፋይናንስ ነጥብ ያወጣል።'}
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>BirrFlow Credit Score Range:</span>
                    <span className="font-mono-numbers text-emerald-400 font-bold">300 - 850 (Grade A)</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Revenue Mechanism:</span>
                    <span className="text-white font-medium">1.5% - 2.5% Origination Fee from partner banks</span>
                  </div>
                </div>
              </div>

              {/* Selling Organized Data to Financial Sectors */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {lang === 'en' ? 'B2B FINANCIAL INTELLIGENCE & DATA' : 'ለባንኮችና ተቋማት የሚቀርብ የገበያ መረጃ'}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {lang === 'en' ? 'Organized macroeconomic consumer insights.' : 'የሸማቾች የገበያና የወጪ ጥናት ለፋይናንስ ተቋማት።'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'en'
                    ? 'Financial sectors, commercial banks, FMCG brands, and research agencies in Ethiopia operate in the dark regarding consumer velocity, merchant wallet share, and inflation impacts. BirrFlow aggregates completely anonymized, structured macroeconomic spending trends and sells high-value intelligence reports.'
                    : 'የኢትዮጵያ ባንኮችና ድርጅቶች የሸማቾች የገንዘብ እንቅስቃሴ እንዴት እንደሆነ ግልጽ መረጃ ስለሌላቸው፣ ቢርፍሎው ማንነታቸው ያልተገለጸ አጠቃላይ የገበያ ጥናቶችን ያቀርባል።'}
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Privacy Safeguard:</span>
                    <span className="text-emerald-400 font-medium">Strict k-anonymity aggregation</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Target Clients:</span>
                    <span className="text-white font-medium">Commercial Banks, Fintechs, Telecoms</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: FUTURE VISION (FULL FINANCIAL INSTITUTION & ESX)
           ======================================================== */}
        {activeTab === 'future_vision' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>{lang === 'en' ? 'THE LONG-TERM STRATEGIC HORIZON' : 'የወደፊት የዕድገት ማማ'}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === 'en'
                  ? 'Evolving into Ethiopia’s First AI-Driven Digital Investment Institution.'
                  : 'የኢትዮጵያ ቀዳሚው በአይአይ የታገዘ የኢንቨስትመንትና የፋይናንስ ተቋም መሆን።'}
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {lang === 'en'
                  ? 'With the launch of the Ethiopian Securities Exchange (ESX), the liberalization of treasury bills, and open financial markets, BirrFlow will graduate from a financial tracker into a licensed financial institution that manages portfolios and generates wealth for everyday citizens.'
                  : 'የኢትዮጵያ የካፒታል ገበያ (ESX) እና የግምጃ ቤት ሰነዶች ክፍት ሲሆኑ፣ ቢርፍሎው ተጠቃሚዎች በአክሲዮኖችና በቦንዶች ላይ ኢንቨስት እንዲያደርጉ የሚያማክርና ፖርትፎሊዮ የሚያስተዳድር ተቋም ይሆናል።'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono-numbers text-emerald-400 font-bold">HORIZON 1</div>
                <div className="font-display font-bold text-white text-base">Direct Digital Lending</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lending capital directly to verified users and freelancers using proprietary BirrFlow Cashflow Scoring, without bureaucratic bank delays.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono-numbers text-cyan-400 font-bold">HORIZON 2</div>
                <div className="font-display font-bold text-white text-base">ESX & T-Bill Investment Broker</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enabling users to buy Ethiopian Treasury Bills and publicly traded stocks on the Ethiopian Securities Exchange (ESX) straight from the app.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono-numbers text-amber-400 font-bold">HORIZON 3</div>
                <div className="font-display font-bold text-white text-base">Automated Wealth Management</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AI Personal CFO automatically sweeps surplus cash into high-yield accounts, treasury yields, and dividend portfolios tailored to user risk tolerance.
                </p>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-300">
                Are you an investor or partner interested in our full financial deck and financial roadmap?
              </div>
              <button
                onClick={() => onOpenModal('investor')}
                className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-xl transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'en' ? 'Request Institutional Deck' : 'የኢንቨስትመንት ሠነድ ጠይቅ'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
