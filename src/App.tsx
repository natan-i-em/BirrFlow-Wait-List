import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppScreenshots } from './components/AppScreenshots';
import { AiPersonalCfoDemo } from './components/AiPersonalCfoDemo';
import { TargetPersonas } from './components/TargetPersonas';
import { BusinessIdeaPitch } from './components/BusinessIdeaPitch';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PartnershipModal } from './components/PartnershipModal';

export default function App() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState('beta');

  const handleOpenModal = (role = 'beta') => {
    setModalRole(role);
    setModalOpen(true);
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenPartnerModal={handleOpenModal}
        onScrollTo={handleScrollTo}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToScreens={() => handleScrollTo('app-screens')}
          onScrollToAiDemo={() => handleScrollTo('ai-cfo')}
          onOpenModal={handleOpenModal}
          lang={lang}
        />

        {/* 1. App MVP Screenshots & Interactive Phone Simulator (6 Tabs from User's Screenshots) */}
        <AppScreenshots
          lang={lang}
          onOpenPartnerModal={handleOpenModal}
        />

        {/* 2. AI Personal CFO Chatbot & SMS Parser Lab */}
        <AiPersonalCfoDemo
          lang={lang}
          onOpenModal={handleOpenModal}
        />

        {/* 3. Tailored for Personas: Freelancers, Students, Employees, Individuals */}
        <TargetPersonas
          lang={lang}
          onOpenModal={handleOpenModal}
        />

        {/* 4. Complete Business Model & Long-Term Roadmap */}
        <BusinessIdeaPitch
          lang={lang}
          onOpenModal={handleOpenModal}
        />

        {/* 5. Transparent Pricing (Freemium vs 250 ETB/mo Pro) */}
        <PricingSection
          lang={lang}
          onOpenModal={handleOpenModal}
        />

        {/* 6. Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* Quiet Footer */}
      <Footer
        lang={lang}
        onScrollTo={handleScrollTo}
        onOpenPartnerModal={handleOpenModal}
      />

      {/* Early Access & Lead Capture Modal */}
      <PartnershipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialRole={modalRole}
        lang={lang}
      />
    </div>
  );
}
