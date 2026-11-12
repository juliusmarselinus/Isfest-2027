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
    <div className="wanted-card rounded-2xl p-5 flex flex-col justify-between group">
      {/* 4 Brass Pins */}
      <div className="brass-pin pin-tl" />
      <div className="brass-pin pin-tr" />
      <div className="brass-pin pin-bl" />
      <div className="brass-pin pin-br" />

      {/* Inner Rope/Dashed Frame */}
      <div className="rope-border p-4 flex flex-col justify-between h-full bg-[#170c06]/85 rounded-xl">
        <div>
          {/* Wanted Header */}
          <div className="text-center pb-2.5 border-b border-[#5a3014] mb-3.5">
            <span className="font-cowboy text-2xl tracking-[0.2em] text-[#fef3c7] block">
              WANTED
            </span>
            <span className="text-[10px] font-cowboy tracking-wider text-[#d97706] uppercase">
              {competition.category}
            </span>
          </div>

          {/* Portrait/Icon Box with Vector SVG Icon */}
          <div className="w-full py-4 px-2 mb-3.5 rounded-lg bg-[#0e0703] border border-[#451e0b] text-center shadow-inner flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center mb-2 text-[#f6c085]">
              <CompetitionIcon name={competition.iconName} className="w-6 h-6 text-[#d97706]" />
            </div>
            <div className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider">
              {competition.subtitle}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-cowboy text-base sm:text-lg text-[#fef3c7] tracking-wide mb-1.5 group-hover:text-[#fde047] transition-colors leading-snug">
            {competition.title}
          </h3>
          <p className="text-xs text-[#d8be9b] leading-relaxed mb-4 line-clamp-2">
            {competition.tagline}
          </p>

          {/* Posse Info */}
          <div className="space-y-1 text-[11px] text-[#eed9b3] border-t border-[#3a1d0d] pt-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="font-semibold text-[#caa27d]">Anggota Tim:</span>
              <span className="text-[#fef08a]">{competition.members}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="font-semibold text-[#caa27d]">Peserta:</span>
              <span className="text-[#eed9b3] truncate">{competition.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Pricing & Action */}
        <div className="pt-2.5 border-t border-[#5a3014]">
          {/* Prize Box */}
          <div className="bg-[#2a1408] border border-[#783e1c] rounded-lg p-2 mb-3 text-center">
            <span className="text-[9px] font-cowboy tracking-widest uppercase text-[#f6c085] flex items-center justify-center gap-1.5">
              <Trophy className="w-3 h-3 text-[#d97706]" />
              <span>TOTAL HADIAH PEMBINAAN</span>
            </span>
            <div className="font-cowboy text-lg sm:text-xl text-[#fef08a]">
              {competition.prizepool}
            </div>
          </div>

          {/* Registration Price */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-[#caa27d] text-[11px] font-medium">Biaya Masuk:</span>
            <div className="text-right">
              {regularWave && regularWave.priceNumber > activeWave.priceNumber && (
                <span className="text-[10px] text-[#714a30] line-through mr-1.5">
                  {regularWave.price}
                </span>
              )}
              <span className="font-cowboy text-xs sm:text-sm text-[#fef08a]">
                {activeWave.price}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetail(competition)}
              className="py-2 px-2 rounded-lg text-xs font-semibold text-[#fef3c7] bg-[#2d180b] hover:bg-[#3d200e] border border-[#6b3819] transition-colors cursor-pointer flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#caa27d]" />
              <span>Detail & Rules</span>
            </button>
            <button
              onClick={() => onRegister(competition)}
              className="py-2 px-2 rounded-lg text-xs font-cowboy tracking-wider text-[#fff4e0] btn-leather cursor-pointer flex items-center justify-center gap-1"
            >
              <CowboyHatIcon className="w-3.5 h-3.5" />
              <span>Rekrut Posse</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
