'use client';

import React from 'react';
import { Competition } from '@/lib/competitions-data';
import CompetitionIcon from './CompetitionIcon';
import { Users, Award, FileText, Trophy } from 'lucide-react';
import { CowboyHatIcon } from './WesternSvg';

interface CompetitionCardProps {
  competition: Competition;
  onViewDetail: (comp: Competition) => void;
  onRegister: (comp: Competition) => void;
}

export default function CompetitionCard({ competition, onViewDetail, onRegister }: CompetitionCardProps) {
  const activeWave = competition.waves.find((w) => w.status === 'active') || competition.waves[0];
  const regularWave = competition.waves.find((w) => w.wave === 2) || competition.waves[competition.waves.length - 1];

  return (
    /* Framed Southwestern Poster Card (HOWDY palette from Image 2) */
    <div className="wanted-card p-5 flex flex-col justify-between group">
      {/* 4 Corner Brass Pins */}
      <div className="brass-pin pin-tl" />
      <div className="brass-pin pin-tr" />
      <div className="brass-pin pin-bl" />
      <div className="brass-pin pin-br" />

      {/* Inner Double Southwestern Border on Warm Sand Canvas */}
      <div className="p-4 flex flex-col justify-between h-full bg-[#f6eee2] border-2 border-[#28150d] rounded-xl relative shadow-inner">
        <div>
          {/* Header Wanted Poster */}
          <div className="text-center pb-2.5 border-b-2 border-[#be592e]/40 mb-3">
            <span className="font-cowboy text-2xl sm:text-3xl tracking-[0.25em] text-[#28150d] block leading-none">
              WANTED
            </span>
            <span className="text-[10px] font-cowboy tracking-wider text-[#be592e] uppercase font-bold mt-1 block">
              ★ {competition.category} ★
            </span>
          </div>

          {/* Portrait / Emblem Box with Southwestern Ochre Sun */}
          <div className="w-full py-4 px-3 mb-3.5 rounded-xl bg-[#eddcc4] border-2 border-[#28150d] text-center shadow-inner flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#28150d] border border-[#be592e] flex items-center justify-center mb-1.5 text-[#f6d19e] group-hover:scale-105 transition-transform shadow-md">
              <CompetitionIcon name={competition.iconName} className="w-6 h-6 text-[#f6d19e]" />
            </div>
            <div className="font-cowboy text-xs text-[#28150d] uppercase tracking-wider font-bold">
              {competition.subtitle}
            </div>
          </div>

          {/* Title in Deep Espresso */}
          <h3 className="font-cowboy text-base sm:text-lg text-[#28150d] tracking-wide mb-1.5 group-hover:text-[#be592e] transition-colors leading-snug">
            {competition.title}
          </h3>
          <p className="text-xs text-[#523323] leading-relaxed mb-4 line-clamp-2">
            {competition.tagline}
          </p>

          {/* Posse Info */}
          <div className="space-y-1.5 text-[11px] text-[#3d2215] border-t-2 border-[#be592e]/30 pt-2.5 mb-3 bg-[#f2e7d5] p-2 rounded-lg">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#be592e]" />
              <span className="font-bold text-[#28150d]">Anggota Tim:</span>
              <span className="text-[#8e3e1b] font-semibold">{competition.members}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#be592e]" />
              <span className="font-bold text-[#28150d]">Peserta:</span>
              <span className="text-[#523323] truncate">{competition.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-2 border-t-2 border-[#28150d]/20">
          {/* Terracotta Bounty Prize Box */}
          <div className="bg-[#be592e] border-2 border-[#28150d] rounded-xl p-2.5 mb-3 text-center shadow-sm">
            <span className="text-[9px] font-cowboy tracking-widest uppercase text-[#fdfaf4] flex items-center justify-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#fde047]" />
              <span>TOTAL HADIAH PEMBINAAN</span>
            </span>
            <div className="font-cowboy text-xl sm:text-2xl text-[#fff8ea] tracking-wider drop-shadow-sm">
              {competition.prizepool}
            </div>
          </div>

          {/* Registration Price */}
          <div className="flex items-center justify-between mb-3 text-xs px-1">
            <span className="text-[#523323] text-[11px] font-bold">Biaya Masuk:</span>
            <div className="text-right">
              {regularWave && regularWave.priceNumber > activeWave.priceNumber && (
                <span className="text-[10px] text-[#8e3e1b] line-through mr-1.5 opacity-70">
                  {regularWave.price}
                </span>
              )}
              <span className="font-cowboy text-sm sm:text-base text-[#28150d] font-bold">
                {activeWave.price}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetail(competition)}
              className="py-2.5 px-2 rounded-xl text-xs font-cowboy text-[#28150d] bg-[#eddcc4] hover:bg-[#e4cfb3] border-2 border-[#28150d] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#8e3e1b]" />
              <span>Detail & Rules</span>
            </button>
            <button
              onClick={() => onRegister(competition)}
              className="py-2.5 px-2 rounded-xl text-xs font-cowboy tracking-wider text-[#fffbf5] btn-leather cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
            >
              <CowboyHatIcon className="w-4 h-4 text-[#fde047]" />
              <span>Daftar Posse</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
