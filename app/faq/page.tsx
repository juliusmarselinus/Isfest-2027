'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import RegistrationModal from '@/components/RegistrationModal';
import { Competition, COMPETITIONS_DATA } from '@/lib/competitions-data';
import { SheriffBadgeIcon } from '@/components/WesternSvg';

export default function FaqPage() {
  const [selectedCompForRegister, setSelectedCompForRegister] = useState<Competition | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = (comp?: Competition) => {
    setSelectedCompForRegister(comp || COMPETITIONS_DATA[0]);
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#120b06] text-[#f7ecdb] flex flex-col font-sans selection:bg-[#ca8a04] selection:text-black">
      {/* Floating Navbar */}
      <Navbar onRegisterClick={() => handleOpenRegister()} />

      <main className="flex-1 pt-24 pb-16">
        {/* Banner (Tombol Back Dihapus Sesuai Permintaan) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="relative wanted-card p-6 sm:p-8 rounded-2xl border-2 border-[#783e1c] shadow-2xl">
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />

            <div className="rope-border p-4 bg-[#1a0e07]/80 rounded-xl">
              <div className="inline-block cowboy-stamp text-[10px] font-cowboy mb-2">
                <span className="flex items-center gap-1.5">
                  <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>KANTOR PELAYANAN FRONTIER RESMI</span>
                </span>
              </div>
              <h1 className="font-cowboy text-2xl sm:text-4xl text-[#fef9c3] mb-2">
                BALAI TANYA JAWAB & KANTOR TELEGRAF
              </h1>
              <p className="text-xs text-[#d8be9b] max-w-3xl leading-relaxed">
                Temukan kejelasan traktat resmi mengenai alur perlombaan, upeti pendaftaran, dan informasi narahubung panitia ISFEST 2027.
              </p>
            </div>
          </div>
        </div>

        {/* Faq Section & Contact Telegraf */}
        <FaqSection />
      </main>

      <Footer />

      {/* Modal Register */}
      {isRegisterOpen && (
        <RegistrationModal
          initialCompetition={selectedCompForRegister}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </div>
  );
}
