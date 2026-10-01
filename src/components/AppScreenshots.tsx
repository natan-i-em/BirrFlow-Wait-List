import React, { useState } from 'react';
import { 
  Building2, 
  Receipt, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Settings as SettingsIcon,
  Search,
  CheckCircle2,
  Briefcase,
  ArrowRightLeft,
  Utensils,
  Smartphone,
  RefreshCw,
  Sparkles,
  Send,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Laptop
} from 'lucide-react';
import { AppScreenId } from '../types';

interface AppScreenshotsProps {
  lang: 'en' | 'am';
  onOpenPartnerModal: (role?: string) => void;
}

export const AppScreenshots: React.FC<AppScreenshotsProps> = ({ lang, onOpenPartnerModal }) => {
  const [activeTab, setActiveTab] = useState<AppScreenId>('home');
  const [txSearch, setTxSearch] = useState('');
  const [txFilter, setTxFilter] = useState<'all' | 'inflow' | 'outflow' | 'verified'>('all');
  const [cfoChatQuery, setCfoChatQuery] = useState('');
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState('2026-09-25');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your BirrFlow Live AI Personal CFO. I analyze your actual Ethiopian banking transactions from SMS and verified receipts starting from September 11, 2025. Ask me anything about your balance, transfer fees, counterparties, or budget runway!',
      time: '4:34 PM',
    },
    {
      sender: 'user',
      text: 'Tell me about my latest ETB 20.00 debit',
      time: '4:35 PM',
    },
    {
      sender: 'ai',
      text: "Hey! I'd be happy to look that up for you. 🔍\n\nYour latest **ETB 20.00** debit occurred on **September 28, 2026**. Here are the details of that transaction:\n\n• **Amount:** -ETB 20.00 (Outflow)\n• **Recipient/Channel:** CBE Digital Payment / Settlement 📱\n• **Reason:** Peer-to-Peer Transfer / Digital Settlement\n• **Remaining Balance right after:** ETB 6,004.55\n\n*(Note: You also had another ETB 20.00 debit a few days earlier on September 25, 2026, going to the same settlement)*",
      time: '4:35 PM',
    }
  ]);

  const handleSendChat = (presetText?: string) => {
    const textToSend = presetText || cfoChatQuery;
    if (!textToSend.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user' as const, text: textToSend, time: 'Just now' }];
    setChatMessages(newMsgs);
    setCfoChatQuery('');

    // Simulated contextual AI response based on real SMS data
    setTimeout(() => {
      let reply = "I analyzed your recent SMS notifications from Commercial Bank of Ethiopia. ";
      if (textToSend.toLowerCase().includes('fee') || textToSend.toLowerCase().includes('charge')) {
        reply = "Looking at your last 632 transactions, Commercial Bank of Ethiopia transfer charges plus VAT took **ETB 326.85** from your account. Most fees were ETB 0.61 per micro-transfer. Pro tip: combining small transfers into one will save you about ETB 150 each month!";
      } else if (textToSend.toLowerCase().includes('runway') || textToSend.toLowerCase().includes('last') || textToSend.toLowerCase().includes('days')) {
        reply = "At your current spending pace of **ETB 24,174 a day**, your **ETB 7,304.74** available balance will last **~0 days**. You have spent ETB 156,112 more than you earned this cycle. I recommend setting a daily Safe-to-Spend limit of ETB 350.";
      } else if (textToSend.toLowerCase().includes('food') || textToSend.toLowerCase().includes('dining') || textToSend.toLowerCase().includes('nunu')) {
        reply = "Your latest dining expense was **ETB 630.00** paid to **Nunu Mekuria Tadesse** on Sep 30 at 9:58 PM via CBE Mobile. Food & Dining makes up 4.2% of your monthly outflows.";
      } else {
        reply = `I checked your CBE account records. Your current available balance is **ETB 7,304.74**, with **+ETB 2,900.00** income received on Oct 1 from CBE Branch and **-ETB 130.61** in recent outflows. You are all set!`;
      }

      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply, time: 'Just now' }]);
    }, 700);
  };

  const screensInfo = [
    {
      id: 'home' as AppScreenId,
      name: '01. Home & Cashflow',
      desc: lang === 'en' ? 'Consolidated balance, income vs expenses, runway indicator, and live SMS listener.' : 'ያለዎት ሒሳብ፣ ወርሃዊ ገቢና ወጪ እንዲሁም ስንት ቀን እንደሚበቃ የሚያሳይ ዋና ገጽ።',
    },
    {
      id: 'txns' as AppScreenId,
      name: '02. All Transactions (Txns)',
      desc: lang === 'en' ? '630+ auto-parsed bank SMS with recipient verification, bank fees (0.61 ETB), and categories.' : 'በራስ-ሰር የተተነተኑ 630+ የባንክ መልዕክቶች ከነተከፋዩ ስም እና የባንክ አገልግሎት ክፍያ ጋር።',
    },
    {
      id: 'heatmap' as AppScreenId,
      name: '03. Daily Cashflow Heatmap',
      desc: lang === 'en' ? 'Interactive calendar displaying daily net profit/loss (PnL) in green (inflows) and red (outflows).' : 'በየቀኑ ያተረፉትን ወይም ያወጡትን ገንዘብ በቀለም ለይቶ የሚያሳይ ወርሃዊ ካላንደር።',
    },
    {
      id: 'analytics' as AppScreenId,
      name: '04. The Story So Far (Analytics)',
      desc: lang === 'en' ? 'Financial runway warning (0 days), fee leakage audit (ETB 326.85), and transfer breakdowns.' : 'የገንዘብዎ የጥንካሬ መጠን፣ የባንክ ኮሚሽን ኪሳራና ገንዘብዎ የት እንደሄደ የሚያሳይ ትንተና።',
    },
    {
      id: 'ask_cfo' as AppScreenId,
      name: '05. Ask CFO (AI Chatbot)',
      desc: lang === 'en' ? 'Interactive conversational AI answering questions on real debits, fees, and safe-to-spend limits.' : 'ስለ እያንዳንዱ ወጪዎና የባንክ ክፍያዎ በቋንቋዎ የሚመልስ የአይአይ የግል ረዳት።',
    },
    {
      id: 'settings' as AppScreenId,
      name: '06. Profile & Bank Sync',
      desc: lang === 'en' ? 'On-device SMS sync listener, 7+ supported Ethiopian banks, and zero-password privacy.' : 'ከኢትዮጵያ ንግድ ባንክ፣ ቴሌብርና ሌሎች ጋር የሚገናኝና ዳታን በስልክዎ ብቻ የሚያስቀምጥ።',
    },
  ];

  return (
    <section id="app-screens" className="py-20 md:py-28 bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              <span>{lang === 'en' ? 'LIVE MVP INTERFACE SHOWCASE' : 'የመተግበሪያው የቀጥታ ገጾች'}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{lang === 'en' ? 'AUTHENTIC ANDROID APP SCREENS' : 'እውነተኛ የአንድሮይድ ስክሪኖች'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'Explore the actual BirrFlow MVP in action.' : 'ቢርፍሎው በተግባር እንዴት እንደሚሰራ ይመልከቱ።'}
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
              {lang === 'en'
                ? 'Interact with the 6 core tabs below. Every screen reflects real automated SMS parsing from Commercial Bank of Ethiopia (CBE) and the live AI Personal CFO engine.'
                : 'ከታች ያሉትን 6 ገጾች ተጭነው ይመልከቱ። እያንዳንዱ ገጽ ከኢትዮጵያ ንግድ ባንክ በሚደርስ እውነተኛ የSMS መልዕክት ላይ የተመሰረተ ነው።'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono-numbers">
              {lang === 'en' ? 'Status: Working MVP Beta' : 'ደረጃ፡ የሚሰራ ቤታ'}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Screen Tabs & Descriptions (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-medium text-slate-400 mb-2 px-1">
              {lang === 'en' ? 'CLICK TO PREVIEW IN SIMULATOR:' : 'ለመመልከት አንዱን ይምረጡ:'}
            </div>

            {screensInfo.map((screen) => {
              const isActive = activeTab === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(screen.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900/90 border-emerald-500/60 shadow-lg ring-1 ring-emerald-500/30' 
                      : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-sm text-white">
                      {screen.name}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-mono-numbers px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                        ACTIVE SCREEN
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {screen.desc}
                  </div>
                </button>
              );
            })}

            {/* Feature Callout */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Why SMS Sync is a Game Changer:' : 'የSMS ትንተና ለምን ተመረጠ?'}</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {lang === 'en'
                  ? 'Ethiopian banks do not offer open consumer APIs yet. BirrFlow solves this gracefully by listening to incoming transaction SMS directly on your phone with zero manual data entry and 100% on-device privacy.'
                  : 'የኢትዮጵያ ባንኮች ክፍት ኤፒአይ (Open API) ገና ስላላዘጋጁ፣ ቢርፍሎው በስልክዎ የሚደርሰውን SMS ብቻ በማንበብ ያለ ምንም የይለፍ ቃል ግብይትዎን በሰከንዶች ይመዘግባል።'}
              </p>
            </div>
          </div>

          {/* Right Column: Pixel-Perfect Mobile Phone Device Simulator (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[380px] rounded-[50px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/60">
              
              {/* Phone Top Notch / Speaker */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
                <div className="w-2 h-2 rounded-full bg-slate-950" />
              </div>

              {/* Phone Screen Frame */}
              <div className="relative rounded-[38px] bg-[#0d131f] text-slate-100 overflow-hidden min-h-[690px] flex flex-col border border-slate-800/80">
                
                {/* Phone Status Bar (Matches Screenshot) */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-mono-numbers text-slate-400 select-none">
                  <span>4:32</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px]">LTE</span>
                    <span className="text-[10px]">53%</span>
                  </div>
                </div>

                {/* DYNAMIC SCREEN CONTENT CONTAINER */}
                <div className="flex-1 px-4 py-2 flex flex-col justify-between overflow-y-auto">
                  
                  {/* ========================================================
                      TAB 1: HOME SCREEN
                     ======================================================== */}
                  {activeTab === 'home' && (
                    <div className="space-y-3.5">
                      
                      {/* Connected Bank Pill */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800/80 px-3 py-1.5 rounded-full">
                          <div className="w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 font-bold text-[9px] flex items-center justify-center border border-purple-500/40">
                            CBE
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold text-white flex items-center gap-1">
                              <span>Commercial Bank of Ethiopia</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="text-[9px] text-slate-400 font-mono-numbers">Acc: 1****2219 · Connected</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-display font-bold text-xs text-white">BirrFlow</div>
                        </div>
                      </div>

                      {/* Main Balance & Flow Card (Matches photo_1_2026-10-01_16-41-08.jpg) */}
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-400 tracking-wider font-semibold">AVAILABLE BALANCE</span>
                          <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                            October 2026
                          </span>
                        </div>
                        <div className="font-mono-numbers text-3xl font-bold text-white mt-1">
                          ETB 7,304.74
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/30">
                            <div className="text-[10px] text-slate-400 flex items-center gap-1">
                              <span>↓ Income</span>
                            </div>
                            <div className="font-mono-numbers text-sm font-bold text-emerald-400 mt-0.5">
                              +ETB 2,900.00
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-red-500/30">
                            <div className="text-[10px] text-slate-400 flex items-center gap-1">
                              <span>↑ Expenses</span>
                            </div>
                            <div className="font-mono-numbers text-sm font-bold text-red-400 mt-0.5">
                              -ETB 130.61
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-numbers">
                          <span className="text-emerald-400 font-medium">Net Flow: +ETB 2,769.39</span>
                          <span className="text-slate-400">Runway: ~0 days ▾</span>
                        </div>
                      </div>

                      {/* Live SMS Sync Card */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                            <Smartphone className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                              <span>Live SMS Sync</span>
                              <span className="text-[9px] text-slate-500 font-mono-numbers">Since Sep 11, 2025</span>
                            </div>
                            <div className="text-[10px] text-slate-400">SMS Live Listener Active (Since Sep 11, 2025)</div>
                          </div>
                        </div>
                        <RefreshCw className="w-3.5 h-3.5 text-emerald-400 cursor-pointer" />
                      </div>

                      {/* Recent Banking Transactions (Matches user's screenshot exactly) */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-white">Recent Banking Transactions</span>
                            <span className="text-[10px] font-mono-numbers bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded-full">
                              632
                            </span>
                          </div>
                          <button onClick={() => setActiveTab('txns')} className="text-[11px] text-emerald-400 hover:underline">
                            View All
                          </button>
                        </div>

                        <div className="space-y-2">
                          {/* Item 1 */}
                          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                                $
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white">Direct Inflow / CBE Branch</div>
                                <div className="text-[10px] text-slate-400">CBE · Oct 1 · 11:14 AM</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono-numbers font-bold text-emerald-400">+ ETB 2,900.00</div>
                              <div className="text-[9px] text-slate-500">Salary & Income</div>
                            </div>
                          </div>

                          {/* Item 2 */}
                          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white flex items-center gap-1">
                                  <span>Tietechnologies</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Oct 1 · 8:14 AM · Fee: ETB 0.61</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono-numbers font-bold text-white">- ETB 130.00</div>
                              <div className="text-[9px] text-slate-500">Business & Trade</div>
                            </div>
                          </div>

                          {/* Item 3 */}
                          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                <ArrowRightLeft className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-white flex items-center gap-1">
                                  <span>Berihun Beyene Basa</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Sep 30 · 10:16 PM · Fee: ETB 0.61</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-mono-numbers font-bold text-white">- ETB 50.00</div>
                              <div className="text-[9px] text-slate-500">Transfers</div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ========================================================
                      TAB 2: ALL BANKING TRANSACTIONS (TXNS)
                     ======================================================== */}
                  {activeTab === 'txns' && (
                    <div className="space-y-3">
                      <div className="text-base font-bold text-white">All Banking Transactions</div>

                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search by recipient, ref, or amount..."
                          value={txSearch}
                          onChange={(e) => setTxSearch(e.target.value)}
                          className="w-full bg-slate-900 border border-emerald-500/40 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                        />
                      </div>

                      {/* Filter Chips */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                        <button
                          onClick={() => setTxFilter('all')}
                          className={`px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                            txFilter === 'all' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          All (632)
                        </button>
                        <button
                          onClick={() => setTxFilter('inflow')}
                          className={`px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                            txFilter === 'inflow' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          Inflows (+)
                        </button>
                        <button
                          onClick={() => setTxFilter('outflow')}
                          className={`px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                            txFilter === 'outflow' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          Outflows (-)
                        </button>
                        <button
                          onClick={() => setTxFilter('verified')}
                          className={`px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                            txFilter === 'verified' ? 'bg-emerald-500 text-slate-950 font-semibold' : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          Verified Receipts
                        </button>
                      </div>

                      {/* Grouped by Date */}
                      <div className="space-y-3 pt-1">
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                            <span>Thursday, October 1, 2026</span>
                            <span className="font-mono-numbers">2 txns</span>
                          </div>

                          <div className="space-y-1.5">
                            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                              <div>
                                <div className="font-semibold text-white">Direct Inflow / CBE Branch</div>
                                <div className="text-[10px] text-slate-400">CBE · Oct 1 · 11:14 AM</div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono-numbers font-bold text-emerald-400">+ ETB 2,900.00</div>
                                <div className="text-[9px] text-slate-500">Salary & Income</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                              <div>
                                <div className="font-semibold text-white flex items-center gap-1">
                                  <span>Tietechnologies</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Oct 1 · 8:14 AM · Fee: ETB 0.61</div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono-numbers font-bold text-white">- ETB 130.00</div>
                                <div className="text-[9px] text-slate-500">Business & Trade</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                            <span>Wednesday, September 30, 2026</span>
                            <span className="font-mono-numbers">7 txns</span>
                          </div>

                          <div className="space-y-1.5">
                            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                              <div>
                                <div className="font-semibold text-white flex items-center gap-1">
                                  <span>Berihun Beyene Basa</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Sep 30 · 10:16 PM · Fee: ETB 0.61</div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono-numbers font-bold text-white">- ETB 50.00</div>
                                <div className="text-[9px] text-slate-500">Transfers</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                              <div>
                                <div className="font-semibold text-white flex items-center gap-1">
                                  <span>Megersa Efa Tafara</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Sep 30 · 10:05 PM · Fee: ETB 0.61</div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono-numbers font-bold text-white">- ETB 30.00</div>
                                <div className="text-[9px] text-slate-500">Transfers</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                              <div>
                                <div className="font-semibold text-white flex items-center gap-1">
                                  <span>Nunu Mekuria Tadesse</span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-slate-400">CBE · Sep 30 · 9:58 PM · Fee: ETB 0.61</div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono-numbers font-bold text-white">- ETB 630.00</div>
                                <div className="text-[9px] text-slate-500">Food & Dining</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ========================================================
                      TAB 3: DAILY CASHFLOW HEATMAP
                     ======================================================== */}
                  {activeTab === 'heatmap' && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-base font-bold text-white">Daily Cashflow Heatmap</div>
                        <div className="text-[11px] text-slate-400">Daily Net Profit / Loss (PnL) Calendar</div>
                      </div>

                      {/* Header Summary Cards (Matches photo_2_2026-10-01_16-41-00.jpg) */}
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[9px] text-slate-400">Inflow</div>
                          <div className="font-mono-numbers text-[11px] font-bold text-emerald-400">+ETB 49,350</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[9px] text-slate-400">Outflow</div>
                          <div className="font-mono-numbers text-[11px] font-bold text-red-400">-ETB 38,301</div>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[9px] text-slate-400">Net PnL</div>
                          <div className="font-mono-numbers text-[11px] font-bold text-emerald-400">+ETB 11,049</div>
                        </div>
                      </div>

                      {/* Calendar Grid Container */}
                      <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span className="font-bold text-white">September 2026</span>
                          <span className="text-[10px] text-slate-500">← Swipe month →</span>
                        </div>

                        {/* Weekday headers */}
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-500 font-mono-numbers">
                          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                        </div>

                        {/* Calendar Days Matrix */}
                        <div className="grid grid-cols-7 gap-1 text-center font-mono-numbers text-[11px]">
                          {/* Row 1 */}
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">1</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">2</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">3</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">4</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">5</div>
                          <div className="p-1 rounded-lg bg-red-600/80 text-white font-bold">6</div>
                          <div className="p-1 rounded-lg bg-red-400/80 text-white">7</div>

                          {/* Row 2 */}
                          <div className="p-1 rounded-lg bg-red-400/70 text-white">8</div>
                          <div className="p-1 rounded-lg bg-emerald-500/80 text-white font-bold">9</div>
                          <div className="p-1 rounded-lg bg-red-500/80 text-white font-bold">10</div>
                          <div className="p-1 rounded-lg bg-red-400/70 text-white">11</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">12</div>
                          <div className="p-1 rounded-lg bg-red-500/80 text-white font-bold">13</div>
                          <div className="p-1 rounded-lg bg-red-400/70 text-white">14</div>

                          {/* Row 3 */}
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">15</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">16</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">17</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">18</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">19</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">20</div>
                          <div className="p-1 rounded-lg bg-emerald-500/80 text-white font-bold">21</div>

                          {/* Row 4 */}
                          <div className="p-1 rounded-lg bg-red-500/80 text-white">22</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">23</div>
                          <div className="p-1 rounded-lg bg-red-400/70 text-white">24</div>
                          <button
                            onClick={() => setSelectedHeatmapDay('2026-09-25')}
                            className="p-1 rounded-lg bg-emerald-500 text-slate-950 font-bold ring-2 ring-emerald-300"
                          >
                            25
                          </button>
                          <div className="p-1 rounded-lg bg-red-500/80 text-white">26</div>
                          <div className="p-1 rounded-lg bg-slate-950/60 text-slate-400">27</div>
                          <div className="p-1 rounded-lg bg-red-400/70 text-white">28</div>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                          <span>Outflow</span>
                          <div className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded bg-red-600" />
                            <span className="w-2.5 h-2.5 rounded bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded bg-slate-800" />
                            <span className="w-2.5 h-2.5 rounded bg-emerald-400" />
                            <span className="w-2.5 h-2.5 rounded bg-emerald-600" />
                          </div>
                          <span>Inflow</span>
                        </div>
                      </div>

                      {/* Day Detail View (Matches screenshot Fri 2026-09-25) */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Fri, 2026-09-25</span>
                          </span>
                          <span className="font-mono-numbers text-xs font-bold text-emerald-400">
                            +ETB 24,980.00
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-3">
                          <span>Inflow: +ETB 25,000.00</span>
                          <span>Outflow: -ETB 20.00</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">Transactions on 2026-09-25 (6)</div>
                      </div>

                    </div>
                  )}

                  {/* ========================================================
                      TAB 4: ANALYTICS ("THE STORY SO FAR")
                     ======================================================== */}
                  {activeTab === 'analytics' && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-base font-bold text-white">The story so far</div>
                        <div className="text-[11px] text-slate-400">Built from your bank messages</div>
                      </div>

                      {/* Runway Warning Card (Matches photo_3_2026-10-01_16-41-00.jpg) */}
                      <div className="p-4 rounded-2xl bg-slate-900 border border-red-500/30">
                        <div className="text-[11px] text-slate-400">Your money lasts about</div>
                        <div className="font-mono-numbers text-4xl font-extrabold text-red-400 my-1">
                          0 days
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed">
                          At ETB 24,174 a day, your ETB 7,305 balance stretches that far.
                        </div>
                        <div className="text-[11px] text-red-400 mt-1">
                          You&apos;ve spent ETB 156,112 more than you&apos;ve earned.
                        </div>
                      </div>

                      {/* Insights with Color Accents */}
                      <div className="space-y-2 text-xs">
                        {/* Red Story Card */}
                        <div className="p-3 rounded-xl bg-slate-900/80 border-l-4 border-red-400 border-slate-800">
                          <div className="font-semibold text-white">You&apos;re spending more than you earn.</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">More money is going out than coming in.</div>
                        </div>

                        {/* Amber Story Card */}
                        <div className="p-3 rounded-xl bg-slate-900/80 border-l-4 border-amber-400 border-slate-800">
                          <div className="font-semibold text-white">Fees took ETB 326.85.</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            That&apos;s Commercial Bank of Ethiopia transfer charges plus VAT. Combining small transfers into one can trim it.
                          </div>
                        </div>

                        {/* Blue Story Card */}
                        <div className="p-3 rounded-xl bg-slate-900/80 border-l-4 border-blue-400 border-slate-800">
                          <div className="font-semibold text-white">Most of your spending goes to Transfers.</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            98% of what you&apos;ve spent, about ETB 711,713.
                          </div>
                        </div>

                        {/* Cyan Story Card */}
                        <div className="p-3 rounded-xl bg-slate-900/80 border-l-4 border-cyan-400 border-slate-800">
                          <div className="font-semibold text-white">You send the most to CBE Digital Payment / Settlement.</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            ETB 656,554 across 443 transfers.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ========================================================
                      TAB 5: ASK CFO (AI CHATBOT)
                     ======================================================== */}
                  {activeTab === 'ask_cfo' && (
                    <div className="space-y-3 flex flex-col h-full">
                      {/* CFO Top Bar */}
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>BirrFlow AI Personal CFO</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono-numbers">CBE • Balance: ETB 7,305</div>
                        </div>
                      </div>

                      {/* Quick Chips */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px]">
                        <button
                          onClick={() => handleSendChat('Tell me about my latest ETB 20.00 debit')}
                          className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer"
                        >
                          Tell me about my latest ETB 20.00 debit
                        </button>
                        <button
                          onClick={() => handleSendChat('Analyze my CBE transfer fees')}
                          className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white whitespace-nowrap cursor-pointer"
                        >
                          Analyze my CBE transfer fees
                        </button>
                      </div>

                      {/* Chat Messages Log */}
                      <div className="flex-1 space-y-2.5 max-h-[360px] overflow-y-auto pr-1 text-xs">
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            {msg.sender === 'ai' && (
                              <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                <Sparkles className="w-3 h-3" />
                              </div>
                            )}
                            <div
                              className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed whitespace-pre-line ${
                                msg.sender === 'user'
                                  ? 'bg-slate-800 text-white rounded-tr-xs'
                                  : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-xs'
                              }`}
                            >
                              {msg.text}
                              <div className="text-[9px] text-slate-500 text-right mt-1 font-mono-numbers">
                                {msg.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Input Box */}
                      <div className="pt-2 border-t border-slate-800 flex items-center gap-1.5">
                        <input
                          type="text"
                          placeholder="Ask your CFO a question..."
                          value={cfoChatQuery}
                          onChange={(e) => setCfoChatQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                        />
                        <button
                          onClick={() => handleSendChat()}
                          className="p-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-xl transition-colors cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ========================================================
                      TAB 6: SETTINGS & BANK INTEGRATIONS
                     ======================================================== */}
                  {activeTab === 'settings' && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-base font-bold text-white">Profile & Settings</div>
                        <div className="text-[11px] text-slate-400">Manage financial profile, theme & SMS sync</div>
                      </div>

                      {/* Profile Card */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-purple-600/30 text-purple-300 font-bold flex items-center justify-center text-sm border border-purple-500/40">
                            N
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Natnael Workneh Beyene</div>
                            <div className="text-[10px] text-slate-400 font-mono-numbers">+251 91123 4567</div>
                            <div className="text-[10px] text-slate-500">natnaelworkneh34@gmail.com</div>
                          </div>
                        </div>
                      </div>

                      {/* Theme Selector */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                          <Moon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Theme & Appearance</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                          <button className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold flex items-center justify-center gap-1">
                            <Moon className="w-3 h-3" /> Night
                          </button>
                          <button className="p-2 rounded-xl bg-slate-950 text-slate-400 flex items-center justify-center gap-1">
                            <Sun className="w-3 h-3" /> Day
                          </button>
                          <button className="p-2 rounded-xl bg-slate-950 text-slate-400 flex items-center justify-center gap-1">
                            <Laptop className="w-3 h-3" /> System
                          </button>
                        </div>
                      </div>

                      {/* Monitored Banks (Multi-Bank Pro Feature) */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-[11px] font-semibold text-white">Monitored Ethiopian Bank</div>
                          <span className="text-[9px] text-emerald-400 font-mono-numbers bg-emerald-500/10 px-1.5 py-0.2 rounded">
                            Multi-Bank Pro
                          </span>
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-400" />
                              <span className="font-semibold text-white text-[11px]">Commercial Bank of Ethiopia</span>
                            </div>
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                          </div>

                          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-slate-300 text-[11px]">telebirr (Ethio Telecom)</span>
                            </div>
                            <span className="text-[9px] text-slate-500">Keywords: 127</span>
                          </div>

                          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400" />
                              <span className="text-slate-300 text-[11px]">Awash Bank</span>
                            </div>
                            <span className="text-[9px] text-slate-500">Keywords: awash</span>
                          </div>
                        </div>
                      </div>

                      {/* On Device Privacy */}
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                        <div className="font-semibold text-slate-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Data Management & Privacy</span>
                        </div>
                        <div>Your SMS messages and financial data are stored strictly on your device.</div>
                      </div>

                    </div>
                  )}

                </div>

                {/* ========================================================
                    EXACT 6-TAB BOTTOM NAVIGATION BAR FROM MVP SCREENSHOT
                   ======================================================== */}
                <div className="pt-2 pb-3 px-2 bg-[#090e18] border-t border-slate-800/80 flex items-center justify-between select-none">
                  
                  <button
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'home' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Home</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('txns')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'txns' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Receipt className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Txns</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('heatmap')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'heatmap' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Heatmap</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'analytics' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Analytics</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ask_cfo')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'ask_cfo' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Ask CFO</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer flex-1 transition-colors ${
                      activeTab === 'settings' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <SettingsIcon className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Settings</span>
                  </button>

                </div>

                {/* Bottom Home Indicator */}
                <div className="py-1.5 flex justify-center bg-[#070b14]">
                  <div className="w-24 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
