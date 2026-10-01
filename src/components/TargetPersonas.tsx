import React, { useState } from 'react';
import { Laptop, GraduationCap, Building, UserCheck, ArrowRight, Check } from 'lucide-react';

interface TargetPersonasProps {
  lang: 'en' | 'am';
  onOpenModal: (role?: string) => void;
}

export const TargetPersonas: React.FC<TargetPersonasProps> = ({ lang, onOpenModal }) => {
  const [activePersona, setActivePersona] = useState<'freelancer' | 'student' | 'employee' | 'individual'>('freelancer');

  const personas = [
    {
      id: 'freelancer' as const,
      icon: Laptop,
      title: lang === 'en' ? 'Freelancers & Creatives' : 'ፍሪላንሰሮችና የቴክ ባለሙያዎች',
      subtitle: lang === 'en' ? 'Managing volatile, multi-client cashflow' : 'ያልተረጋጋና ከተለያየ ቦታ የሚመጣ ገቢ',
      problem: lang === 'en' 
        ? 'Invoices get paid irregularly across CBE, Awash, and Telebirr. Without an accountant, it’s hard to know how much is safe to spend this week.'
        : 'ክፍያዎች በተለያዩ ባንኮች ባልተወሰነ ቀን ስለሚገቡ፣ እስከ ቀጣዩ ስራ ምን ያህል ማውጣት እንደሚችሉ ማወቅ ይከብዳል።',
      solution: lang === 'en'
        ? 'BirrFlow consolidates all incoming client SMS, computes your real monthly net profit, and projects your daily runway so you never run dry between projects.'
        : 'ቢርፍሎው ከሁሉም ባንኮች የሚደርሱትን መልዕክቶች አቀናጅቶ፣ የተጣራ ትርፍዎን በማስላት ገንዘቦ ለስንት ቀን እንደሚበቃ ይነግርዎታል።',
      metrics: ['Multi-bank client sync', 'Income runway prediction', 'Tax expense grouping'],
      quote: lang === 'en'
        ? '"BirrFlow showed me I was spending 65% of my client advance payments in the first week. Now I have a 45-day safety cushion."'
        : '"ቢርፍሎው ከመጀመሪያው ክፍያ ላይ በሳምንት ውስጥ አብዛኛውን እንዳላወጣ በመቆጣጠር የ45 ቀን የጥንቃቄ ቁጠባ እንዲኖረኝ ረድቶኛል።"',
      author: 'Yohannes K., UI Designer & Developer (Addis Ababa)',
    },
    {
      id: 'student' as const,
      icon: GraduationCap,
      title: lang === 'en' ? 'University Students' : 'የዩኒቨርሲቲ ተማሪዎች',
      subtitle: lang === 'en' ? 'Stretching monthly family allowances' : 'ከቤተሰብ የሚላከውን ወርሃዊ ወጪ ማብቃቃት',
      problem: lang === 'en'
        ? 'Parents deposit 2,500 to 4,000 ETB at the start of the month. By the 15th, money vanishes into cafe macchiatos, photocopies, and unmonitored transfers.'
        : 'በወሩ መጀመሪያ የሚላከው 3,000 ብር በ15ኛው ቀን ያለምንም እቅድ ለሻይ ቡናና ለግል ወጪዎች ተበትኖ ያልቃል።',
      solution: lang === 'en'
        ? 'The Daily Cashflow Heatmap and AI Safe-to-Spend limits keep students disciplined with daily budget boundaries and zero accounting friction.'
        : 'የዕለታዊ ካላንደር የገንዘብ ገደብ (Safe-to-Spend) በማበጀት ተማሪዎች ወሩን በሙሉ ያለ ጭንቀት እንዲያሳልፉ ያደርጋል።',
      metrics: ['Daily budget alerts', 'Visual PnL Heatmap', '100% Free Freemium tier'],
      quote: lang === 'en'
        ? '"I never have to ask my older brother for an emergency top-up at month-end anymore. BirrFlow keeps me in the green."'
        : '"አሁን ወሩ መጨረሻ ላይ ወንድሜን ድንገተኛ ብር ላክልኝ ብዬ አልለምንም። ቢርፍሎው ወጪዬን እንድቆጣጠር አድርጎኛል።"',
      author: 'Blen T., 4th Year Engineering Student (AAU)',
    },
    {
      id: 'employee' as const,
      icon: Building,
      title: lang === 'en' ? 'Salaried Employees' : 'የወር ደመወዝተኞች',
      subtitle: lang === 'en' ? 'Breaking the paycheck-to-paycheck cycle' : 'ከደመወዝ እስከ ደመወዝ ያለውን ሩጫ ማስቆም',
      problem: lang === 'en'
        ? 'Salary hits on the 26th of the month. By the 10th, CBE account balance is critically low, leaking funds to bank transfer fees and untracked grocery debits.'
        : 'ደመወዝ በ26 ገብቶ በ10ኛው ቀን ሒሳቡ ባዶ ይሆናል፤ የት እንደገባ የማይታወቅ ወጪና ተደጋጋሚ የባንክ ኮሚሽን ይበላዋል።',
      solution: lang === 'en'
        ? 'Automated salary tagging, fee leakage audits (saving up to 350 ETB in micro-charges), and predictive day-by-day expense tracking.'
        : 'ደመወዝን በራስ-ሰር በመለየት፣ አላስፈላጊ የባንክ ክፍያዎችን በመቀነስ ገንዘብዎን እስከ ቀጣዩ ወር ያቆየዋል።',
      metrics: ['Salary vs Expense ratio', 'Fee leakage audit', 'Monthly recurring breakdown'],
      quote: lang === 'en'
        ? '"Seeing that CBE was taking over 300 ETB in small transaction fees plus VAT made me change how I pay my bills immediately."'
        : '"የንግድ ባንክ በትናንሽ ዝውውሮች ከ300 ብር በላይ ኮሚሽን እንደሚቆርጥ ማወቄ ወዲያውኑ የአከፋፈል ልማዴን እንድቀይር ረዳኝ።"',
      author: 'Dawit M., Senior Accountant (Bole)',
    },
    {
      id: 'individual' as const,
      icon: UserCheck,
      title: lang === 'en' ? 'Savvy Individuals' : 'የገንዘብ ቁጠባ ወዳጆች',
      subtitle: lang === 'en' ? 'Building long-term wealth & creditworthiness' : 'ሀብት ማፍራትና የክሬዲት ነጥብ መገንባት',
      problem: lang === 'en'
        ? 'Traditional banks in Ethiopia won’t lend money without land/car collateral because individuals lack a verified financial credit history.'
        : 'ባንኮች ያለ ቤት ወይም መኪና ማስያዣ ብድር አይሰጡም፤ ምክንያቱም የግል የክሬዲት ታሪክ (Credit Score) የለም።',
      solution: lang === 'en'
        ? 'BirrFlow turns months of organized, verified SMS transactions into an alternative Financial Credit Score, unlocking future micro-loans.'
        : 'ቢርፍሎው የእርስዎን ትክክለኛ የባንክ ታሪክ ወደ ፋይናንስ ነጥብ (Credit Score) በመቀየር ለወደፊት የብድር እድል ያመቻቻል።',
      metrics: ['Alternative Credit Scoring', 'Net Worth Tracking', 'Future Investment Access'],
      quote: lang === 'en'
        ? '"BirrFlow isn’t just an expense app—it is building the verifiable transaction history I need to qualify for business credit."'
        : '"ቢርፍሎው የወጪ መቆጣጠሪያ ብቻ ሳይሆን ለወደፊቱ የንግድ ብድር ለማግኘት የሚያስፈልገኝን የክሬዲት ታሪክ እየገነባልኝ ነው።"',
      author: 'Bethelhem A., Entrepreneur & Consultant',
    },
  ];

  const current = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section id="personas" className="py-20 md:py-28 bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            {lang === 'en' ? 'TAILORED FINANCIAL CLARITY' : 'ለእያንዳንዱ ሰው የተዘጋጀ'}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'Who relies on BirrFlow every day?' : 'ቢርፍሎውን በዕለታዊ ኑሮአቸው የሚጠቀሙት እነማን ናቸው?'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Whether managing unpredictable client fees or stretching a student budget, BirrFlow gives you complete financial command.'
              : 'ፍሪላንሰር፣ ተማሪም ሆኑ የደመወዝተኛ፣ ቢርፍሎው የገንዘብዎን እንቅስቃሴ ግልጽ ያደርግልዎታል።'}
          </p>
        </div>

        {/* Persona Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {personas.map((p) => {
            const Icon = p.icon;
            const isSelected = activePersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/80 shadow-lg ring-1 ring-emerald-500/30'
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-display font-semibold text-sm text-white">{p.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{p.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span>{current.title}</span>
                <span>·</span>
                <span className="text-slate-300 font-normal">{current.subtitle}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {lang === 'en' ? 'The Struggle:' : 'የሚያጋጥማቸው ችግር:'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {current.problem}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-emerald-400 mb-2">
                  {lang === 'en' ? 'How BirrFlow Solves It:' : 'የቢርፍሎው መፍትሔ:'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {current.solution}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {current.metrics.map((m, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{m}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-6 border border-slate-800/80 space-y-4">
              <div className="text-emerald-400 text-3xl font-serif leading-none">&ldquo;</div>
              <p className="text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                {current.quote}
              </p>
              <div className="pt-3 border-t border-slate-800/80 text-xs">
                <div className="font-semibold text-white">{current.author}</div>
                <div className="text-[11px] text-slate-500 font-mono-numbers">Verified BirrFlow Beta User</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('beta')}
                  className="w-full py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Start Tracking Your Money' : 'ወጪዎን መቆጣጠር ይጀምሩ'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
