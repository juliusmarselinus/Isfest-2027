'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CompetitionSection from '@/components/CompetitionSection';
import Footer from '@/components/Footer';
import CompetitionDetailModal from '@/components/CompetitionDetailModal';
import RegistrationModal from '@/components/RegistrationModal';
import { Competition, COMPETITIONS_DATA } from '@/lib/competitions-data';
import Link from 'next/link';
import { Trophy, MapPin } from 'lucide-react';
import { SheriffBadgeIcon, HorseshoeIcon } from '@/components/WesternSvg';

export default function LombaPage() {
  const [selectedCompForDetail, setSelectedCompForDetail] = useState<Competition | null>(null);
  const [selectedCompForRegister, setSelectedCompForRegister] = useState<Competition | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const found = COMPETITIONS_DATA.find((c) => c.id === hash || c.slug === hash);
      if (found) {
        setSelectedCompForDetail(found);
      }
    }
  }, []);

  const handleOpenDetail = (comp: Competition) => {
    setSelectedCompForDetail(comp);
    window.location.hash = comp.id;
  };

  const handleOpenRegister = (comp?: Competition) => {
    setSelectedCompForRegister(comp || COMPETITIONS_DATA[0]);
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen text-[#28150d] flex flex-col font-sans selection:bg-[#be592e] selection:text-white">
      {/* Floating Navbar */}
      <Navbar onRegisterClick={() => handleOpenRegister()} />

      <main className="flex-1 pt-24 pb-16">
        {/* Western Sub-Hero Banner (Tombol Back Dihapus Sesuai Permintaan) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="relative wanted-card p-6 sm:p-8 rounded-2xl border-4 border-[#be592e] shadow-2xl overflow-hidden bg-[#fbf5ea]">
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />

            <div className="rope-border p-6 bg-[#f5ecdd] rounded-xl relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-block cowboy-stamp text-[10px] font-cowboy mb-2 bg-[#fbf5ea] border-2 border-[#be592e] text-[#be592e]">
                    <span className="flex items-center gap-1.5 font-bold">
                      <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
                      <span>HALAMAN RESMI PAPAN SAYEMBARA • 4 CABANG LOMBA</span>
                    </span>
                  </div>

                  <h1 className="font-cowboy text-2xl sm:text-4xl text-[#28150d] mb-2 leading-tight">
                    POSTER BURONAN & ARENA DUEL
                  </h1>

                  <p className="text-xs sm:text-sm text-[#5c3a21] max-w-2xl leading-relaxed font-medium">
                    Pilih dari 4 cabang perlombaan pilihan: <strong className="text-[#be592e]">2 Cabang Akademik</strong> (UI/UX Cartographer & Data Prospector) serta <strong className="text-[#be592e]">2 Cabang E-Sport</strong> (Mobile Legends & Valorant). Baca traktat aturan, unduh official guidebook, dan daftarkan pasukan timmu sebelum kuota penuh.
                  </p>
                </div>

                {/* Right Bounty Box */}
                <div className="wood-board p-4 rounded-xl border-2 border-[#be592e] text-center shrink-0 w-full md:w-auto bg-[#fbf5ea] shadow-md">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Trophy className="w-5 h-5 text-[#be592e]" />
                    <span className="font-cowboy text-lg sm:text-xl text-[#28150d]">
                      RP 21 JUTA+
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-cowboy tracking-wider text-[#5c3a21] block font-bold">
                    TOTAL DANA PEMBINAAN RESMI
                  </span>
                  <button
                    onClick={() => handleOpenRegister()}
                    className="mt-3 w-full py-2 px-4 rounded-lg font-cowboy text-xs text-[#fdfaf4] btn-leather cursor-pointer shadow-md"
                  >
                    DAFTAR SEKARANG
                  </button>
                </div>
              </div>

              {/* Decorative bottom line */}
              <div className="mt-4 pt-3 border-t border-[#381c0c] flex items-center justify-between text-[11px] text-[#caa27d]">
                <div className="flex items-center gap-2">
                  <HorseshoeIcon className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Sertifikat Nasional Berpredikat dari Universitas Multimedia Nusantara</span>
                </div>
                <Link href="/#linimasa" className="hover:text-[#fde047] font-cowboy hidden sm:inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Lihat Rute Linimasa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Competitions Filter & Cards Grid */}
        <CompetitionSection
          onViewDetail={handleOpenDetail}
          onRegister={handleOpenRegister}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Detail */}
      <CompetitionDetailModal
        competition={selectedCompForDetail}
        onClose={() => {
          setSelectedCompForDetail(null);
          if (window.location.hash) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
          }
        }}
        onRegister={(comp) => {
          setSelectedCompForDetail(null);
          handleOpenRegister(comp);
        }}
      />

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
