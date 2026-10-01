import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  lang: 'en' | 'am';
}

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: lang === 'en'
        ? 'Does BirrFlow require my bank password, PIN, or mobile banking login?'
        : 'ቢርፍሎው የባንክ የይለፍ ቃል (Password)፣ ፒን (PIN) ወይም የመግቢያ መረጃ ይጠይቃል?',
      a: lang === 'en'
        ? 'No! Never. BirrFlow operates on a zero-credential architecture. It simply listens to official incoming transaction SMS notifications from Commercial Bank of Ethiopia (CBE), Telebirr, and private banks. Your banking passwords never exist on the app, and all SMS data stays strictly on your local device.'
        : 'በፍጹም አይጠይቅም! ቢርፍሎው የሚሰራው ወደ ስልክዎ የሚገቡትን የባንክ የSMS መልዕክቶች በስልክዎ ላይ ብቻ በማንበብ ነው። የባንክ ይለፍ ቃልዎ ወይም ፒን ቁጥርዎ በጭራሽ አያስፈልገውም።',
    },
    {
      q: lang === 'en'
        ? 'How does the AI Personal CFO calculate my runway and "Safe to Spend"?'
        : 'የአይአይ ረዳቱ ገንዘቤ ለስንት ቀን እንደሚበቃ እና የቀን ወጪዬን እንዴት ያሰላል?',
      a: lang === 'en'
        ? 'By analyzing your historical incoming deposits and daily outflows across the month, BirrFlow calculates your average daily burn rate. It compares this against your current available balance (e.g. ETB 7,304.74) to project exactly how many days your balance will stretch and suggests a safe daily spending limit to prevent running out of money before your next paycheck.'
        : 'ባለፉት ቀናት ያወጡትን አማካይ ወጪ ከአሁኑ ቀሪ ሂሳብዎ ጋር በማወዳደር፣ ገንዘብዎ እስኪያልቅ ስንት ቀን እንደሚቆይ ያሰላል፤ እንዲሁም በቀን ምን ያህል ማውጣት እንዳለብዎት ይመክራል።',
    },
    {
      q: lang === 'en'
        ? 'Which Ethiopian banks and mobile wallets are supported?'
        : 'ምን ምን የኢትዮጵያ ባንኮችና የሞባይል ገንዘብ መንገዶችን ይደግፋል?',
      a: lang === 'en'
        ? 'BirrFlow currently supports Commercial Bank of Ethiopia (CBE), Telebirr (Ethio Telecom), Awash Bank, Bank of Abyssinia, M-PESA (Safaricom), Dashen Bank (Amole), and Cooperative Bank of Oromia. You can monitor one bank for free, or upgrade to Pro (250 ETB/mo) to track all of them simultaneously.'
        : 'የኢትዮጵያ ንግድ ባንክ (CBE)፣ ቴሌብር (Telebirr)፣ አዋሽ ባንክ፣ አቢሲኒያ ባንክ፣ ኤም-ፔሳ (M-PESA)፣ ዳሽን ባንክ እና የኦሮሚያ ኅብረት ሥራ ባንክን ይደግፋል።',
    },
    {
      q: lang === 'en'
        ? 'What is the difference between Freemium and the 250 ETB Pro tier?'
        : 'በነጻው እና በ250 ብሩ ፕሮ አገልግሎት መካከል ያለው ልዩነት ምንድን ነው?',
      a: lang === 'en'
        ? 'The Freemium tier is completely free forever and allows you to track one bank account with automated SMS parsing and basic budgeting. BirrFlow Pro (250 Birr / month) unlocks the full AI Personal CFO Chatbot ("Ask CFO"), multi-bank consolidated monitoring, predictive cashflow runway, and deep fee leakage audits.'
        : 'ነጻው አገልግሎት ለአንድ ባንክ ብቻ የሚያገለግል ሲሆን፣ የ250 ብሩ ፕሮ አገልግሎት ግን የአይአይ አማካሪውን፣ የበርካታ ባንኮችን በአንድ ላይ መቆጣጠርን እና የወደፊት የወጪ ትንበያዎችን ያካትታል።',
    },
    {
      q: lang === 'en'
        ? 'How will the Alternative Credit Score and lending work in the future?'
        : 'የወደፊቱ የብድር ነጥብ (Credit Score) እና አነስተኛ ብድር አሰራር እንዴት ነው?',
      a: lang === 'en'
        ? 'Because 95% of individuals lack physical collateral for traditional bank loans, BirrFlow is building an objective credit-scoring engine based on your real cashflow consistency, verified transaction history, and net savings. In the secondary phase, users with strong BirrFlow scores will qualify for instant, collateral-free digital credit lines co-originated with licensed banking partners.'
        : 'አብዛኛው ሰው ለባንክ ብድር የሚያስይዘው ንብረት ስለሌለው፣ ቢርፍሎው የእርስዎን ትክክለኛ የገቢና ወጪ ታሪክ ወደ አስተማማኝ የክሬዲት ነጥብ ይቀይራል፤ ወደፊትም ያለ ንብረት ማስያዣ አነስተኛ ብድር እንዲያገኙ መንገድ ይከፍታል።',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#090d16] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'ተደጋግመው የሚጠየቁ ጥያቄዎች'}</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'Everything you need to know about BirrFlow.' : 'ስለ ቢርፍሎው ማወቅ የሚፈልጉት ዝርዝር መረጃ።'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
