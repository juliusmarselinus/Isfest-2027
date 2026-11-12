'use client';

import React from 'react';
import { FESTIVAL_TIMELINE } from '@/lib/competitions-data';
import { Calendar } from 'lucide-react';
import { SheriffBadgeIcon } from './WesternSvg';

export default function TimelineSection() {
  return (
    <section id="linimasa" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-block mb-3">
          <span className="cowboy-stamp text-xs font-semibold px-3.5 py-1 rounded flex items-center gap-1.5">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
            <span>PETA EKSPEDISI FRONTIER 1887-2027</span>
          </span>
        </div>
        <h2 className="font-cowboy text-3xl sm:text-5xl text-[#fef3c7] tracking-wide mb-3">
          RUTE EKSPEDISI ISFEST 2027
        </h2>
        <p className="text-[#d8be9b] text-sm sm:text-base leading-relaxed">
          Catat pos-pos penting dalam perjalanan kafilah teknologimu. Jangan sampai timmu tertinggal
          pada babak krusial pertempuran.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Center Wooden Trail Line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-[#ca8a04] via-[#854d0e] to-[#451a03] shadow-md" />

        <div className="space-y-8">
          {FESTIVAL_TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.phase}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Wooden Box */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`relative p-5 rounded-2xl wanted-card border-2 transition-all duration-300 ${
                      item.highlight
                        ? 'border-[#ca8a04] shadow-2xl'
                        : 'border-[#6b4423]'
                    }`}
                  >
                    <div className="brass-pin pin-tl" />
                    <div className="brass-pin pin-tr" />
                    <div className="brass-pin pin-bl" />
                    <div className="brass-pin pin-br" />

                    <div className="rope-border p-3.5 bg-[#1a0e07]/80 rounded-xl">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-cowboy text-xs text-[#fde047] px-2 py-0.5 rounded bg-[#451a03] border border-[#a16207]">
                          POS {item.phase}
                        </span>
                        <span className="font-cowboy text-[11px] text-[#fef08a] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#d97706]" />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      <h3 className="font-cowboy text-base sm:text-lg text-[#fef9c3] mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#d8be9b] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Pin Horseshoe / Badge with Sheriff Badge SVG */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1b0e06] border-2 border-[#ca8a04] items-center justify-center text-[#fde047] shadow-xl z-10">
                  <SheriffBadgeIcon className="w-5 h-5" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
