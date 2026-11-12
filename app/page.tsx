'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';
import RegistrationModal from '@/components/RegistrationModal';
import { Competition, COMPETITIONS_DATA } from '@/lib/competitions-data';
import { Scroll, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { CowboyHatIcon, SheriffBadgeIcon } from '@/components/WesternSvg';
import { BarbedWireDivider, RopeDivider, WantedPosterOrnament } from '@/components/WesternAssets';

export default function HomePage() {
  const [selectedCompForRegister, setSelectedCompForRegister] = useState<Competition | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = (comp?: Competition) => {
    setSelectedCompForRegister(comp || COMPETITIONS_DATA[0]);
    setIsRegisterOpen(true);
  };

  const scrollToTimeline = () => {
    const el = document.getElementById('linimasa');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#28150d] flex flex-col font-sans selection:bg-[#be592e] selection:text-white">
      {/* Saloon Header Navigation */}
      <Navbar onRegisterClick={() => handleOpenRegister()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Pos 1: Pintu Gerbang Utama (Hero Section) */}
        <HeroSection
          onRegisterClick={() => handleOpenRegister()}
          onExploreRouteClick={scrollToTimeline}
        />

        {/* ── GATEWAY TRANSITION BANNER TO PAPAN SAYEMBARA ── */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="wanted-card rounded-2xl p-6 sm:p-8 border-4 border-[#be592e] shadow-2xl relative overflow-hidden bg-[#fbf5ea]">
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />

            <div className="rope-border p-6 bg-[#f5ecdd] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <div className="inline-block cowboy-stamp text-[10px] font-cowboy bg-[#fbf5eb] border-2 border-[#be592e] text-[#be592e]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
                    <span>HALAMAN KHUSUS PAPAN SAYEMBARA</span>
                  </span>
                </div>
                <h3 className="font-cowboy text-xl sm:text-2xl text-[#28150d] leading-snug">
                  4 POSTER BURONAN SAYEMBARA MENUNGGUMU
                </h3>
                <p className="text-xs text-[#5c3a21] leading-relaxed font-medium">
                  Jelajahi traktat lengkap 4 arena duel (UI/UX Cartographer, Data Prospector, Mobile Legends Posse, dan Valorant Showdown) di halaman tersendiri dengan filter, unduhan guidebook, dan nominal hadiah resmi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
                <Link
                  href="/lomba"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-cowboy text-xs sm:text-sm text-[#fdfaf4] btn-leather cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  <Scroll className="w-4 h-4 text-[#f6d19e]" />
                  <span>BUKA PAPAN SAYEMBARA</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleOpenRegister()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-cowboy text-xs text-[#28150d] bg-[#f0e4cf] hover:bg-[#e4cbab] border-2 border-[#be592e] transition-colors cursor-pointer font-bold shadow-sm"
                >
                  <CowboyHatIcon className="w-4 h-4 text-[#be592e]" />
                  <span>DAFTAR LANGSUNG</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="max-w-4xl mx-auto px-4 my-2 opacity-50">
          <RopeDivider />
        </div>

        {/* Pos 2: Rute Ekspedisi (Timeline Linimasa Festival digabung di Home) */}
        <TimelineSection />

        {/* Decorative Divider */}
        <div className="max-w-4xl mx-auto px-4 my-6 opacity-40">
          <BarbedWireDivider />
        </div>
      </main>

      {/* Western Saloon Footer */}
      <Footer />

      {/* Enlistment Posse Registration Modal */}
      {isRegisterOpen && (
        <RegistrationModal
          initialCompetition={selectedCompForRegister}
          onClose={() => setIsRegisterOpen(false)}
        />
      )}
    </div>
  );
}
