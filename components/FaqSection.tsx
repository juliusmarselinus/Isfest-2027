'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/lib/competitions-data';
import { ChevronDown, Scroll, Crosshair, Radio } from 'lucide-react';
import { SheriffBadgeIcon } from './WesternSvg';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
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

      {/* Contact Cards Section: Telegraph Office */}
      <div id="kontak" className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-cowboy text-xl sm:text-2xl text-[#fef9c3] mb-2">
            KANTOR TELEGRAF BIRO SHERIFF
          </h3>
          <p className="text-xs text-[#d8be9b]">
            Para Marsekal panitia kami berjaga di pos telegraf untuk menjawab pertanyaan seputar sayembara.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3">
                <Scroll className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Marsekal Akademik</h4>
              <p className="text-[11px] text-[#c29b75] mb-2">Kevin Sakia (UI/UX & Data)</p>
            </div>
            <a
              href="https://wa.me/6282110683255?text=Halo%20Marsekal%20Kevin,%20saya%20ingin%20tanya%20seputar%20Sayembara%20Akademik%20ISFEST%202027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-cowboy text-[#fde047] hover:underline"
            >
              WhatsApp: 0821-1068-3255
            </a>
          </div>

          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3">
                <Crosshair className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Marsekal E-Sports</h4>
              <p className="text-[11px] text-[#c29b75] mb-2">Richard & Jonathan (MLBB & Valo)</p>
            </div>
            <a
              href="https://wa.me/6281210416870?text=Halo%20Marsekal,%20saya%20ingin%20tanya%20seputar%20Turnamen%20Esports%20ISFEST%202027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-cowboy text-[#fde047] hover:underline"
            >
              WhatsApp: 0812-1041-6870
            </a>
          </div>

          <div className="wood-board p-5 rounded-xl border border-[#6b4423] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] mb-3">
                <Radio className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="font-cowboy text-xs text-[#fef08a] mb-1">Humas & Sponsor</h4>
              <p className="text-[11px] text-[#c29b75] mb-2">Audrey Imanuella</p>
            </div>
            <a
              href="https://wa.me/6281293520532?text=Halo%20Marsekal%20Audrey,%20saya%20ingin%20tanya%20seputar%20ISFEST%202027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-cowboy text-[#fde047] hover:underline"
            >
              WhatsApp: 0812-9352-0532
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
