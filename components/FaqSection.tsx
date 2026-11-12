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
          <span className="cowboy-stamp text-xs font-semibold px-3.5 py-1 rounded flex items-center gap-1.5">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
            <span>TANYA JAWAB BALAI KOTA SHERIFF</span>
          </span>
        </div>
        <h2 className="font-cowboy text-3xl sm:text-5xl text-[#fef3c7] tracking-wide mb-3">
          BALAI WARGA & FAQ
        </h2>
        <p className="text-[#d8be9b] text-sm sm:text-base leading-relaxed">
          Temukan traktat kejelasan mengenai keikutsertaan tim, upeti pendaftaran via blu by BCA, dan sistem duel
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
              className="rounded-xl wood-board border border-[#6b4423] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#341b0e]/70 transition-colors"
              >
                <span className="font-cowboy text-xs sm:text-sm text-[#fef3c7] leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#fde047] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-[#eed9b3] leading-relaxed border-t border-[#4a2711] bg-[#120803]/80 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Cards Section: Telegraph Office (CP COMING SOON SESUAI INSTRUKSI USER) */}
      <div id="kontak" className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block mb-2">
            <span className="text-[10px] font-cowboy px-2.5 py-0.5 rounded bg-[#381c0c] text-[#fde047] border border-[#d97706]/40 uppercase tracking-wider">
              INFORMASI NARAHUBUNG
            </span>
          </div>
          <h3 className="font-cowboy text-xl sm:text-2xl text-[#fef9c3] mb-2">
            KANTOR TELEGRAF BIRO PANITIA
          </h3>
          <p className="text-xs text-[#d8be9b]">
            Daftar kontak resmi Marsekal panitia pelaksana sedang dipersiapkan dan akan segera diumumkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3 mx-auto sm:mx-0">
                <Scroll className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Marsekal Akademik</h4>
              <p className="text-[11px] text-[#c29b75] mb-3">UI/UX & Data Analytics</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#ca8a04] bg-[#200f07] py-1.5 px-3 rounded-lg border border-[#4a2610]">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3 mx-auto sm:mx-0">
                <Crosshair className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Marsekal E-Sports</h4>
              <p className="text-[11px] text-[#c29b75] mb-3">Mobile Legends & Valorant</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#ca8a04] bg-[#200f07] py-1.5 px-3 rounded-lg border border-[#4a2610]">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3 mx-auto sm:mx-0">
                <Radio className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Humas & Biro Kemitraan</h4>
              <p className="text-[11px] text-[#c29b75] mb-3">Sponsorship & Informasi Umum</p>
            </div>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-cowboy text-[#ca8a04] bg-[#200f07] py-1.5 px-3 rounded-lg border border-[#4a2610]">
              <Clock className="w-3.5 h-3.5" />
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
