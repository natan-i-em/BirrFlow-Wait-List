import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  lang: 'en' | 'am';
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'beta',
  lang,
}) => {
  const [role, setRole] = useState(initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('freelancer');
  const [primaryBank, setPrimaryBank] = useState('CBE');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(''); 

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim()) errs.phone = 'Phone number or Telegram handle is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setIsSubmitting(true);
  setSubmitError('');
  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, name, email, phone, occupation, primaryBank, notes, lang }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(
        data.error ||
          (lang === 'en' ? 'Something went wrong. Please try again.' : 'ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።')
      );
    }
    setIsSubmitted(true);
  } catch (err: any) {
    setSubmitError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};
  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#0d1322] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="font-display text-2xl font-bold text-white">
              {lang === 'en' ? 'Welcome to BirrFlow!' : 'እንኳን ወደ ቢርፍሎው በደህና መጡ!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              {lang === 'en'
                ? `Thank you, ${name}! We have registered your interest for ${role === 'pro' ? 'BirrFlow Pro (250 ETB/mo)' : 'the Android Beta'}. We will send your early access APK link directly to ${phone} and ${email} within 24 hours.`
                : `እናመሰግናለን ${name}! ምዝገባዎ ተሳክቷል። የመተግበሪያውን ማውረጃ አድራሻ በስልክዎ (${phone}) እና በኢሜይልዎ በ24 ሰዓት ውስጥ እንልክልዎታለን።`}
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Done & Return to Site' : 'ተመለስ'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'BIRRFLOW ACCESS' : 'የቢርፍሎው ተጠቃሚ ይሁኑ'}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {lang === 'en' ? 'Get BirrFlow Personal CFO' : 'የግል የገንዘብ አማካሪዎን ያግኙ'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'en'
                ? 'Join thousands of freelancers, students, and employees taking control of their Ethiopian bank transactions.'
                : 'የንግድ ባንክና የቴሌብር ወጪዎችዎን በአይአይ ለመቆጣጠር አሁኑኑ ይመዝገቡ።'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Intent Selector */}
              <div>
                <label className="text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'I want to:' : 'ፍላጎቴ በ:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'beta', label: lang === 'en' ? 'Android Beta' : 'አንድሮይድ ቤታ' },
                    { id: 'pro', label: lang === 'en' ? 'Pro (250 ETB)' : 'ፕሮ (250 ብር)' },
                    { id: 'investor', label: lang === 'en' ? 'Investor / Bank' : 'ባለሀብት / ባንክ' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRole(item.id)}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        role === item.id
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300 font-semibold'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">
                    {lang === 'en' ? 'Full Name *' : 'ሙሉ ስም *'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Natnael Workneh"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                  {errors.name && <div className="text-red-400 text-[10px] mt-0.5">{errors.name}</div>}
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">
                    {lang === 'en' ? 'Email Address *' : 'ኢሜይል *'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="natnael@gmail.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                  {errors.email && <div className="text-red-400 text-[10px] mt-0.5">{errors.email}</div>}
                </div>
              </div>

              {/* Phone & Occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">
                    {lang === 'en' ? 'Phone or Telegram *' : 'ስልክ / ቴሌግራም *'}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+251 911... or @telegram"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  />
                  {errors.phone && <div className="text-red-400 text-[10px] mt-0.5">{errors.phone}</div>}
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">
                    {lang === 'en' ? 'I am a:' : 'የስራ ዘርፍ:'}
                  </label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="freelancer">Freelancer / Creative</option>
                    <option value="student">University Student</option>
                    <option value="employee">Salaried Employee</option>
                    <option value="business">Business Owner</option>
                    <option value="investor">Angel / VC / Bank</option>
                  </select>
                </div>
              </div>

              {/* Primary Bank */}
              <div>
                <label className="text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'Primary Bank / Wallet used:' : 'የሚጠቀሙት ዋና ባንክ:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['CBE', 'telebirr', 'Awash', 'Abyssinia', 'Dashen', 'Other'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setPrimaryBank(b)}
                      className={`p-1.5 rounded-lg border text-center transition-colors ${
                        primaryBank === b
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300 font-medium'
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'Any questions or features you want?' : 'ተጨማሪ አስተያየት ወይም ጥያቄ'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'en' ? 'Tell us what you want your AI CFO to do for you...' : 'የአይአይ ረዳትዎ ምን እንዲያደርግልዎ ይፈልጋሉ?'}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="pt-2">
  {submitError && (
    <div className="text-red-400 text-[11px] mb-2 text-center">{submitError}</div>
  )}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
  >
    <span>
      {isSubmitting
        ? lang === 'en' ? 'Submitting...' : 'በመላክ ላይ...'
        : lang === 'en' ? 'Submit Registration' : 'ምዝገባውን አጠናቅቅ'}
    </span>
    <ArrowRight className="w-4 h-4" />
  </button>
</div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
