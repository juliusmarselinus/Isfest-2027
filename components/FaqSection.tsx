'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/lib/competitions-data';
import { ChevronDown, Scroll, Crosshair, Radio, Clock } from 'lucide-react';
import { SheriffBadgeIcon } from './WesternSvg';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block mb-3">
          <span className="cowboy-stamp text-xs font-semibold px-3.5 py-1 rounded flex items-center gap-1.5 bg-[#fbf5ea] border-2 border-[#be592e] text-[#be592e] shadow-md">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
            <span className="font-bold tracking-wider">TANYA JAWAB BALAI KOTA SHERIFF</span>
          </span>
        </div>
        <h2 className="font-cowboy text-3xl sm:text-5xl text-[#28150d] tracking-wide mb-3 drop-shadow-sm">
          BALAI WARGA & FAQ
        </h2>
        <p className="text-[#5c3a21] font-medium text-sm sm:text-base leading-relaxed">
          Temukan traktat kejelasan mengenai keikutsertaan tim, upeti pendaftaran, dan sistem duel
          sebelum timmu melangkah ke arena festival.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3.5 mb-16">
        {FAQS_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-200 wanted-card border-2 border-[#be592e] bg-[#fbf5ea] shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f0e4cf] transition-colors"
              >
                <span className="font-cowboy text-xs sm:text-sm text-[#28150d] leading-snug font-bold">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#be592e] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-[#4a2816] leading-relaxed border-t-2 border-[#be592e]/30 bg-[#f5ecdd] animate-in fade-in duration-200 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Cards Section: Telegraph Office (CP COMING SOON) */}
      <div id="kontak" className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-2">
            <span className="text-[10px] font-cowboy px-2.5 py-0.5 rounded bg-[#be592e] text-[#fdfaf4] border border-[#28150d] uppercase tracking-wider font-bold shadow-sm">
              INFORMASI NARAHUBUNG
            </span>
          </div>
          <h3 className="font-cowboy text-xl sm:text-2xl text-[#28150d] mb-2">
            KANTOR TELEGRAF BIRO PANITIA
          </h3>
          <p className="text-xs text-[#5c3a21] font-medium">
            Daftar kontak resmi Marsekal panitia pelaksana sedang dipersiapkan dan akan segera diumumkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="wanted-card p-5 rounded-xl border-2 border-[#be592e] bg-[#fbf5ea] flex flex-col justify-between text-center sm:text-left shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#be592e] border border-[#28150d] flex items-center justify-center mb-3 mx-auto sm:mx-0 shadow">
                <Scroll className="w-5 h-5 text-[#fdfaf4]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#28150d] mb-1 font-bold">Marsekal Akademik</h4>
              <p className="text-[11px] text-[#5c3a21] mb-3 font-medium">UI/UX & Data Analytics</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#be592e] bg-[#f0e4cf] py-1.5 px-3 rounded-lg border-2 border-[#be592e]/40">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="wanted-card p-5 rounded-xl border-2 border-[#be592e] bg-[#fbf5ea] flex flex-col justify-between text-center sm:text-left shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#be592e] border border-[#28150d] flex items-center justify-center mb-3 mx-auto sm:mx-0 shadow">
                <Crosshair className="w-5 h-5 text-[#fdfaf4]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#28150d] mb-1 font-bold">Marsekal E-Sports</h4>
              <p className="text-[11px] text-[#5c3a21] mb-3 font-medium">Mobile Legends & Valorant</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#be592e] bg-[#f0e4cf] py-1.5 px-3 rounded-lg border-2 border-[#be592e]/40">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="wanted-card p-5 rounded-xl border-2 border-[#be592e] bg-[#fbf5ea] flex flex-col justify-between text-center sm:text-left shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#be592e] border border-[#28150d] flex items-center justify-center mb-3 mx-auto sm:mx-0 shadow">
                <Radio className="w-5 h-5 text-[#fdfaf4]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#28150d] mb-1 font-bold">Humas & Biro Kemitraan</h4>
              <p className="text-[11px] text-[#5c3a21] mb-3 font-medium">Sponsorship & Informasi Umum</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#be592e] bg-[#f0e4cf] py-1.5 px-3 rounded-lg border-2 border-[#be592e]/40">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
