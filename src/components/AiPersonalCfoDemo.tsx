import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Smartphone, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface AiPersonalCfoDemoProps {
  lang: 'en' | 'am';
  onOpenModal: (role?: string) => void;
}

export const AiPersonalCfoDemo: React.FC<AiPersonalCfoDemoProps> = ({ lang, onOpenModal }) => {
  // Chat state
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: lang === 'en'
        ? 'Selam! I am your BirrFlow AI Personal CFO. I monitor your Commercial Bank of Ethiopia (CBE) and Telebirr SMS receipts in real-time. What would you like to review today?'
        : 'ሰላም! እኔ የቢርፍሎው የግል የፋይናንስ አማካሪዎ (AI Personal CFO) ነኝ። የንግድ ባንክና የቴሌብር ወጪዎችዎን መርምሬያለሁ። ምን ማወቅ ይፈልጋሉ?',
      time: '10:00 AM',
    },
    {
      sender: 'user',
      text: lang === 'en' ? 'What is my safe-to-spend limit for this week?' : 'ለዚህ ሳምንት በቀን ምን ያህል ብር ማውጣት እችላለሁ?',
      time: '10:01 AM',
    },
    {
      sender: 'ai',
      text: lang === 'en'
        ? '📊 **Cashflow Runway Alert:**\nBased on your current balance of **ETB 7,304.74** and expected fixed expenses, your current burn rate is higher than your income (+ETB 2,900 vs -ETB 156,112 cumulative outflow).\n\nTo ensure your funds last until your next direct deposit:\n• **Safe Daily Spend:** **ETB 240.00 / day**\n• **Recommended Action:** Hold off on discretionary dining out and combine your CBE P2P transfers to avoid recurring ETB 0.61 charges.'
        : '📊 **የፋይናንስ ትንተና ማስጠንቀቂያ:**\nበአሁኑ ሰዓት ባሎት **7,304.74 ብር** እና በወሩ ባወጡት ወጪ ስሌት መሰረት፣ ገቢዎ እስኪገባ ድረስ ገንዘቦ እንዳያልቅባችሁ፡\n• **በቀን ሊያወጡ የሚገባው አስተማማኝ መጠን:** **240.00 ብር / ቀን**\n• **የሚመከር እርምጃ:** ተደጋጋሚ አነስተኛ ዝውውሮችን በማቆም የሚቆረጠውን የ0.61 ሳንቲም ባንክ ክፍያ ይቀንሱ።',
      time: '10:01 AM',
    }
  ]);

  // SMS Parser Lab State
  const sampleSmsList = [
    {
      id: 'cbe_debit',
      label: 'CBE Debit SMS',
      rawText: 'Dear Customer, your CBE account 1****2219 has been debited with ETB 130.00 for Tietechnologies on 01/10/2026 08:14 AM. Service fee ETB 0.61. Remaining balance ETB 7,304.74.',
      extracted: {
        bank: 'Commercial Bank of Ethiopia',
        amount: '-ETB 130.00',
        counterparty: 'Tietechnologies',
        fee: 'ETB 0.61',
        balanceAfter: 'ETB 7,304.74',
        category: 'Business & Trade',
      },
    },
    {
      id: 'telebirr_salary',
      label: 'Telebirr Inflow',
      rawText: 'You have received 2,900.00 ETB from Freelance Client via telebirr on 2026-10-01 11:14:22. Ref: CR8921092. New Balance: 14,200.00 ETB.',
      extracted: {
        bank: 'telebirr (Ethio Telecom)',
        amount: '+ETB 2,900.00',
        counterparty: 'Freelance Client',
        fee: '0.00 ETB',
        balanceAfter: 'ETB 14,200.00',
        category: 'Salary & Income',
      },
    },
    {
      id: 'food_dining',
      label: 'Dining Transfer',
      rawText: 'Dear Customer, payment of ETB 630.00 to Nunu Mekuria Tadesse succeeded on 30/09/2026 09:58 PM. Charge ETB 0.61. CBE Mobile.',
      extracted: {
        bank: 'Commercial Bank of Ethiopia',
        amount: '-ETB 630.00',
        counterparty: 'Nunu Mekuria Tadesse',
        fee: 'ETB 0.61',
        balanceAfter: 'ETB 7,435.35',
        category: 'Food & Dining',
      },
    },
  ];

  const [activeSms, setActiveSms] = useState(sampleSmsList[0]);

  const handleSendMessage = (customPrompt?: string) => {
    const query = customPrompt || chatInput;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query, time: 'Just now' }]);
    setChatInput('');

    setTimeout(() => {
      let response = '';
      const q = query.toLowerCase();
      if (q.includes('fee') || q.includes('charge') || q.includes('ክፍያ')) {
        response = lang === 'en'
          ? '🔍 **CBE Transfer Fee Audit:**\nAcross your 632 parsed SMS messages, you paid **ETB 326.85** strictly in transfer charges and VAT. 92% of your transfers were under 100 ETB, incurring repeated 0.61 ETB fees. Bundling transactions will save you ~150 ETB monthly!'
          : '🔍 **የባንክ ክፍያዎች ትንተና:**\nካደረጓቸው 632 ግብይቶች ውስጥ **326.85 ብር** የተቆረጠው ለባንክ አገልግሎት ክፍያና ቫት ነው። ትናንሽ ክፍያዎችን በአንድ ላይ በማድረግ በወር እስከ 150 ብር መቆጠብ ይችላሉ!';
      } else if (q.includes('runway') || q.includes('days') || q.includes('ስንት ቀን')) {
        response = lang === 'en'
          ? '⚠️ **Runway Projection:**\nAt your recent spending pace (ETB 24,174/day during peak days), your remaining balance of ETB 7,305 will reach zero in **~0 to 1 days**. You have spent ETB 156,112 more than you earned this period.'
          : '⚠️ **የቀናት ስሌት:**\nባለፉት ቀናት ባወጡት የወጪ ፍጥነት መሰረት፣ የቀረዎት 7,305 ብር በ**0 እስከ 1 ቀን** ውስጥ ሊያልቅ ይችላል። ገቢዎን በአስቸኳይ ማመጣጠን ያስፈልጋል።';
      } else {
        response = lang === 'en'
          ? `I checked your banking records for "${query}". Your recent major spending includes ETB 656,554 to CBE Digital Settlement across 443 transfers. I recommend categorizing your business vs personal transfers to keep an accurate runway.`
        : `ስለ "${query}" መረጃዎን መርምሬያለሁ። ትልቁ ወጪዎ ለዲጂታል ዝውውር የዋለ ነው። ለበለጠ ትንተና ጥያቄዎን ይጠይቁኝ!`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: response, time: 'Just now' }]);
    }, 600);
  };

  return (
    <section id="ai-cfo" className="py-20 md:py-28 bg-[#0b0f19] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'en' ? 'INTELLIGENT FINANCIAL CFO' : 'አስተዋይ የአይአይ የግል አማካሪ'}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === 'en' ? 'An AI CFO that speaks your language and guards your wallet.' : 'በቋንቋዎ የሚረዳ እና ገንዘብዎን የሚጠብቅ የአይአይ ረዳት።'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'No complex accounting terms. Ask BirrFlow plain questions about your CBE, Telebirr, or Awash bank SMS and get actionable, personalized financial advice.'
              : 'ውስብስብ የሂሳብ አሰራር አያስፈልግዎትም። ስለ ወጪዎ፣ ስለተቆረጠባችሁ የባንክ ክፍያና ስለቀረው ገንዘብዎ በቀላሉ ይጠይቁት።'}
          </p>
        </div>

        {/* 2-Column Grid: AI Chatbot Demo + SMS Parser Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Interactive AI CFO Chatbot (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between min-h-[560px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-base flex items-center gap-1.5">
                      <span>BirrFlow AI Personal CFO</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-xs text-slate-400 font-mono-numbers">
                      {lang === 'en' ? 'Grounded in your real CBE & Telebirr SMS' : 'በእውነተኛ የባንክ SMS የተደገፈ'}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-mono-numbers text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {lang === 'en' ? '250 ETB/mo Pro' : '250 ብር/ወር ፕሮ'}
                </span>
              </div>

              {/* Sample Prompts */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 text-xs">
                <button
                  onClick={() => handleSendMessage(lang === 'en' ? 'Analyze my CBE transfer fees' : 'የCBE ክፍያዎቼን ተንትንልኝ')}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 whitespace-nowrap cursor-pointer transition-colors"
                >
                  💡 {lang === 'en' ? 'Analyze my CBE transfer fees' : 'የCBE ክፍያዎቼን ተንትንልኝ'}
                </button>
                <button
                  onClick={() => handleSendMessage(lang === 'en' ? 'How many days will my balance last?' : 'ቀሪ ሂሳቤ ለስንት ቀን ይበቃኛል?')}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 whitespace-nowrap cursor-pointer transition-colors"
                >
                  ⏳ {lang === 'en' ? 'Calculate my runway days' : 'የቀናት ስሌት አውጣልኝ'}
                </button>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1 text-xs">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed whitespace-pre-line ${
                        m.sender === 'user'
                          ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-xs'
                          : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-xs'
                      }`}
                    >
                      {m.text}
                      <div className={`text-[10px] text-right mt-1 font-mono-numbers ${m.sender === 'user' ? 'text-slate-900/70' : 'text-slate-500'}`}>
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <div className="pt-4 mt-3 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={lang === 'en' ? 'Ask your CFO: "Can I afford dinner tonight?" or "Who did I send money to?"...' : 'የፈለጉትን የገንዘብ ጥያቄ ይጠይቁ...'}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <button
                onClick={() => handleSendMessage()}
                className="px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Ask' : 'ጠይቅ'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Automated SMS Listener Engine (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <Smartphone className="w-4 h-4" />
                <span>{lang === 'en' ? 'SMS PARSER LAB' : 'የSMS ትንተና ማሽን'}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {lang === 'en' ? 'How BirrFlow parses incoming bank SMS' : 'የባንክ SMS እንዴት እንደሚተነተን ይሞክሩ'}
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {lang === 'en'
                  ? 'Select a bank message below to watch BirrFlow extract counterparty, transaction fees, and remaining balance automatically.'
                  : 'ከታች ካሉት የባንክ መልዕክቶች አንዱን ይምረጡና እንዴት ተተንትኖ እንደሚወጣ ይመልከቱ።'}
              </p>

              {/* Sample SMS Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {sampleSmsList.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSms(item)}
                    className={`py-1.5 px-2 rounded-xl text-[11px] font-medium border text-center transition-all cursor-pointer ${
                      activeSms.id === item.id
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-semibold'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Raw Bank SMS Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 mb-4">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1 flex items-center justify-between">
                  <span>RAW INCOMING SMS</span>
                  <span className="text-emerald-400">Verified Hash</span>
                </div>
                <div className="text-xs font-mono text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  &ldquo;{activeSms.rawText}&rdquo;
                </div>
              </div>

              {/* Parsed Structure Output */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  BIRRFLOW STRUCTURED EXTRACTION:
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400">Bank Rail:</span>
                    <div className="text-white font-semibold">{activeSms.extracted.bank}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Net Flow:</span>
                    <div className={`font-mono-numbers font-bold ${activeSms.extracted.amount.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>
                      {activeSms.extracted.amount}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400">Counterparty:</span>
                    <div className="text-white font-medium">{activeSms.extracted.counterparty}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Bank Fee:</span>
                    <div className="text-amber-400 font-mono-numbers">{activeSms.extracted.fee}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Auto Category:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                    {activeSms.extracted.category}
                  </span>
                </div>
              </div>

            </div>

            {/* Zero Password Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-xs">100% Zero-Password Guarantee</div>
                <div className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                  BirrFlow never asks for your bank password, PIN, or mobile banking login. All calculations occur strictly on your Android device.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
