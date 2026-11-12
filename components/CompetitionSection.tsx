'use client';

import React, { useState, useMemo } from 'react';
import { COMPETITIONS_DATA, Competition } from '@/lib/competitions-data';
import CompetitionCard from './CompetitionCard';
import { Search, Layers, Compass, Crosshair, Radio } from 'lucide-react';
import { SheriffBadgeIcon } from './WesternSvg';

interface CompetitionSectionProps {
  onViewDetail: (comp: Competition) => void;
  onRegister: (comp: Competition) => void;
}

export default function CompetitionSection({ onViewDetail, onRegister }: CompetitionSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'esport'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompetitions = useMemo(() => {
    return COMPETITIONS_DATA.filter((comp) => {
      const matchesTab =
        activeTab === 'all'
          ? true
          : activeTab === 'academic'
          ? comp.categoryType === 'academic'
          : comp.categoryType === 'esport';

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesTab;

      const matchesSearch =
        comp.title.toLowerCase().includes(query) ||
        comp.tagline.toLowerCase().includes(query) ||
        comp.subtitle.toLowerCase().includes(query) ||
        comp.overview.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const academicCount = COMPETITIONS_DATA.filter((c) => c.categoryType === 'academic').length;
  const esportCount = COMPETITIONS_DATA.filter((c) => c.categoryType === 'esport').length;

  return (
    <section id="lomba" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Saloon Notice Board Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block mb-3">
          <span className="cowboy-stamp text-xs font-semibold px-3.5 py-1 rounded flex items-center gap-1.5">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
            <span>PAPAN SAYEMBARA CABANG LOMBA</span>
          </span>
        </div>
        <h2 className="font-cowboy text-3xl sm:text-5xl text-[#fef3c7] tracking-wide mb-3">
          PILIH ARENA PERLOMBAAN
        </h2>
        <p className="text-[#d8be9b] text-sm sm:text-base leading-relaxed">
          Tentukan arena duel yang sesuai dengan keahlian gengmu. Rebut total hadiah jutaan rupiah,
          raih trofi dan sertifikat resmi UMN, serta buktikan kemampuanmu di panggung nasional.
        </p>
      </div>

      {/* Category Bar & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Wood Buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl wood-board border border-[#5a3014] w-full md:w-auto overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-b from-[#9a4a1b] to-[#682f0d] text-[#fff4e0] border border-[#d97706] shadow-sm'
                : 'text-[#caa27d] hover:text-[#fef3c7] hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Semua Cabang ({COMPETITIONS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'academic'
                ? 'bg-gradient-to-b from-[#9a4a1b] to-[#682f0d] text-[#fff4e0] border border-[#d97706] shadow-sm'
                : 'text-[#caa27d] hover:text-[#fef3c7] hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Akademik Frontier ({academicCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('esport')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'esport'
                ? 'bg-gradient-to-b from-[#9a4a1b] to-[#682f0d] text-[#fff4e0] border border-[#d97706] shadow-sm'
                : 'text-[#caa27d] hover:text-[#fef3c7] hover:bg-white/5'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5 text-[#d97706]" />
            <span>E-Sport Posse ({esportCount})</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#caa27d] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari cabang lomba..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl wood-board text-xs text-[#fef3c7] placeholder-[#8a6345] border border-[#5a3014] focus:outline-none focus:border-[#d97706]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#caa27d] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid Wanted Cards */}
      {filteredCompetitions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((comp) => (
            <CompetitionCard
              key={comp.id}
              competition={comp}
              onViewDetail={onViewDetail}
              onRegister={onRegister}
            />
          ))}
        </div>
      ) : (
        <div className="wood-board text-center py-16 px-4 rounded-2xl border border-[#5a3014] max-w-md mx-auto">
          <Compass className="w-8 h-8 text-[#caa27d] mx-auto mb-2" />
          <p className="font-cowboy text-[#eed9b3] text-sm mb-1">Tidak ada lomba yang sesuai pencarian.</p>
          <p className="text-xs text-[#a67c52] mb-4">Coba cari dengan nama cabang lain atau reset filter.</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg text-xs font-cowboy text-[#fef08a] bg-[#2a1408] border border-[#783e1c]"
          >
            Tampilkan Semua Lomba
          </button>
        </div>
      )}

      {/* Telegraph Banner */}
      <div className="mt-14 wood-board p-6 sm:p-8 rounded-2xl border-2 border-[#783e1c] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#2a1408] border border-[#d97706]/40 flex items-center justify-center text-xl shrink-0 text-[#fde047]">
            <Radio className="w-6 h-6 text-[#d97706]" />
          </div>
          <div>
            <h4 className="font-cowboy text-base text-[#fef08a] mb-1">
              KANTOR TELEGRAF BIRO PANITIA
            </h4>
            <p className="text-xs text-[#eed9b3]">
              Butuh panduan teknis, rulebook resmi, atau ingin bertanya mengenai pendaftaran tim posse?
              Kirim kawat telegraf langsung ke narahubung panitia.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6282110683255?text=Halo%20Panitia%20ISFEST%202027,%20saya%20ingin%20tanya%20seputar%20sayembara%20lomba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-cowboy text-[#fff4e0] btn-leather transition-all shrink-0 cursor-pointer shadow-lg"
        >
          KIRIM KAWAT TELEGRAF (WHATSAPP)
        </a>
      </div>
    </section>
  );
}
