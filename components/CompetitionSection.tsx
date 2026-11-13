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
    <section id="lomba" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Bar & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Wood Buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl wood-board border-2 border-[#be592e] bg-[#fbf5ea] w-full md:w-auto overflow-x-auto hide-scrollbar shadow-md">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#be592e] text-[#fdfaf4] border border-[#28150d] shadow-sm'
                : 'text-[#5c3a21] hover:text-[#28150d] hover:bg-[#be592e]/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#d99951]" />
            <span>Semua Arena ({COMPETITIONS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'academic'
                ? 'bg-[#be592e] text-[#fdfaf4] border border-[#28150d] shadow-sm'
                : 'text-[#5c3a21] hover:text-[#28150d] hover:bg-[#be592e]/10'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#d99951]" />
            <span>Akademik ({academicCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('esport')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'esport'
                ? 'bg-[#be592e] text-[#fdfaf4] border border-[#28150d] shadow-sm'
                : 'text-[#5c3a21] hover:text-[#28150d] hover:bg-[#be592e]/10'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5 text-[#d99951]" />
            <span>Non-Akademik / E-Sport ({esportCount})</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#be592e] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari cabang lomba..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 rounded-xl wood-board text-xs text-[#28150d] placeholder-[#8c5936] border-2 border-[#be592e] bg-[#fbf5ea] focus:outline-none focus:ring-2 focus:ring-[#d99951] shadow-md font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#be592e] hover:text-[#28150d]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid Wanted Cards: 2x2 layout is balanced and handsome for 4 cards */}
      {filteredCompetitions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
        <div className="wood-board text-center py-16 px-4 rounded-2xl border-2 border-[#be592e] bg-[#fbf5ea] max-w-md mx-auto shadow-md">
          <Compass className="w-8 h-8 text-[#be592e] mx-auto mb-2" />
          <p className="font-cowboy text-[#28150d] text-sm mb-1">Tidak ada lomba yang sesuai pencarian.</p>
          <p className="text-xs text-[#5c3a21] mb-4">Coba cari dengan kata kunci lain atau reset filter.</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg text-xs font-cowboy text-[#fffbf5] btn-leather cursor-pointer shadow-md"
          >
            Tampilkan Semua Lomba
          </button>
        </div>
      )}

      {/* Telegraph Banner (Warm Cream & Terracotta) */}
      <div className="mt-14 max-w-5xl mx-auto wanted-card p-6 sm:p-8 rounded-2xl border-4 border-[#be592e] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden bg-[#fbf5ea]">
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#f0e4cf] border-2 border-[#be592e] flex items-center justify-center text-xl shrink-0 text-[#be592e] shadow-inner p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/cowboy/cowboy-sitting.png" alt="Cowboy Operator" className="w-10 h-auto object-contain" />
          </div>
          <div>
            <div className="cowboy-stamp text-[9px] font-bold text-[#be592e] mb-1 inline-block">
              ★ SALURAN TELEGRAF RESMI ★
            </div>
            <h4 className="font-cowboy text-base sm:text-lg text-[#28150d] mb-0.5">
              KANTOR TELEGRAF BIRO PANITIA
            </h4>
            <p className="text-xs text-[#5c3a21] font-medium leading-relaxed">
              Butuh panduan teknis, rulebook resmi, atau ingin bertanya mengenai pendaftaran tim posse?
              Kirim kawat telegraf langsung ke narahubung panitia ISFEST 2027.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6282110683255?text=Halo%20Panitia%20ISFEST%202027,%20saya%20ingin%20tanya%20seputar%20sayembara%20lomba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-cowboy text-[#fffbf5] btn-leather transition-all shrink-0 cursor-pointer shadow-lg hover:scale-105"
        >
          KIRIM KAWAT TELEGRAF (WHATSAPP)
        </a>
      </div>
    </section>
  );
}
