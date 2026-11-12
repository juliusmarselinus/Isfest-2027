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
    <div className="relative min-h-screen text-[#28150d] flex flex-col font-sans selection:bg-[#be592e] selection:text-white">
      {/* Floating Navbar */}
      <Navbar onRegisterClick={() => handleOpenRegister()} />

      <main className="flex-1 pt-24 pb-16">
        {/* Banner (Tombol Back Dihapus Sesuai Permintaan) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="relative wanted-card p-6 sm:p-8 rounded-2xl border-4 border-[#be592e] shadow-2xl bg-[#fbf5ea]">
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />

            <div className="rope-border p-5 bg-[#f5ecdd] rounded-xl">
              <div className="inline-block cowboy-stamp text-[10px] font-cowboy mb-2 bg-[#fbf5ea] border-2 border-[#be592e] text-[#be592e]">
                <span className="flex items-center gap-1.5 font-bold">
                  <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
                  <span>KANTOR PELAYANAN FRONTIER RESMI</span>
                </span>
              </div>
              <h1 className="font-cowboy text-2xl sm:text-4xl text-[#28150d] mb-2">
                BALAI TANYA JAWAB & KANTOR TELEGRAF
              </h1>
              <p className="text-xs text-[#5c3a21] max-w-3xl leading-relaxed font-medium">
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
