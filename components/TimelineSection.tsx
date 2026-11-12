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
          <span className="cowboy-stamp text-xs font-semibold px-3.5 py-1 rounded flex items-center gap-1.5 bg-[#fbf5ea] border-2 border-[#be592e] text-[#be592e] shadow-md">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
            <span className="font-bold tracking-wider">PETA EKSPEDISI FRONTIER 1887-2027</span>
          </span>
        </div>
        <h2 className="font-cowboy text-3xl sm:text-5xl text-[#28150d] tracking-wide mb-3 drop-shadow-sm" style={{ textShadow: '2px 2px 0 rgba(251,245,235,0.6)' }}>
          RUTE EKSPEDISI ISFEST 2027
        </h2>
        <p className="text-[#4a2816] font-medium text-sm sm:text-base leading-relaxed">
          Catat pos-pos penting dalam perjalanan kafilah teknologimu. Jangan sampai timmu tertinggal
          pada babak krusial pertempuran.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Center Wooden Trail Line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#be592e] via-[#8e3e1b] to-[#28150d] shadow-md rounded-full" />

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
                    className={`relative p-5 rounded-2xl wanted-card transition-all duration-300 ${
                      item.highlight
                        ? 'border-[#be592e] shadow-2xl ring-2 ring-[#d99951]'
                        : 'border-[#be592e]'
                    }`}
                  >
                    <div className="brass-pin pin-tl" />
                    <div className="brass-pin pin-tr" />
                    <div className="brass-pin pin-bl" />
                    <div className="brass-pin pin-br" />

                    <div className="rope-border p-3.5 bg-[#f5ecdd] rounded-xl">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-cowboy text-xs text-[#fdfaf4] px-2 py-0.5 rounded bg-[#be592e] border border-[#28150d]">
                          POS {item.phase}
                        </span>
                        <span className="font-cowboy text-[11px] text-[#28150d] font-bold flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#be592e]" />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      <h3 className="font-cowboy text-base sm:text-lg text-[#28150d] mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5c3a21] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Pin Horseshoe / Badge with Sheriff Badge SVG */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#fbf5ea] border-2 border-[#be592e] items-center justify-center text-[#be592e] shadow-xl z-10">
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
