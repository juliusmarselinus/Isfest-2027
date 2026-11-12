'use client';

import React from 'react';
import Link from 'next/link';
import { SheriffBadgeIcon } from './WesternSvg';

export default function Footer() {
  return (
    <footer className="relative border-t-4 border-[#be592e] pt-16 pb-12 overflow-hidden text-xs"
      style={{
        background: 'linear-gradient(180deg, #c68740 0%, #9e5a26 60%, #7a3d16 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fbf5eb] border-2 border-[#28150d] shadow-lg text-[#be592e]">
                <SheriffBadgeIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-cowboy text-xl text-[#fbf5eb]">
                  ISFEST
                </span>
                <span className="font-cowboy text-[10px] px-2 py-0.5 rounded bg-[#28150d] text-[#f6d19e] border border-[#f6d19e]/40">
                  2027
                </span>
              </div>
            </div>

            <p className="text-[#f5e8d3] max-w-sm leading-relaxed font-medium">
              Information Systems Festival (ISFEST) 2027: The Wild West Digital Frontier. Persembahan resmi tahunan Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Multimedia Nusantara, Pos Terdepan Gading Serpong, Tangerang.
            </p>

            <div className="text-[11px] text-[#f5e8d3]/70">
              Pos Terdepan: Jl. Scientia Boulevard, Gading Serpong, Tangerang, Banten 15811
            </div>
          </div>

          {/* Quick Links: 4 Competitions */}
          <div className="space-y-3">
            <h5 className="font-cowboy text-xs text-[#fbf5eb] uppercase tracking-wider border-b border-[#fbf5eb]/30 pb-1">
              Papan Sayembara (4 Lomba)
            </h5>
            <ul className="space-y-2 text-[#f5e8d3]">
              <li>
                <Link href="/lomba#uiux" className="hover:text-white transition-colors hover:underline">
                  UI/UX Cartographer (Akademik)
                </Link>
              </li>
              <li>
                <Link href="/lomba#data" className="hover:text-white transition-colors hover:underline">
                  Data Prospector & AI (Akademik)
                </Link>
              </li>
              <li>
                <Link href="/lomba#mlbb" className="hover:text-white transition-colors hover:underline">
                  Mobile Legends Posse (Esports)
                </Link>
              </li>
              <li>
                <Link href="/lomba#valo" className="hover:text-white transition-colors hover:underline">
                  Valorant High Noon (Esports)
                </Link>
              </li>
              <li>
                <Link href="/lomba" className="text-[#fbf5eb] font-bold hover:underline">
                  → Buka Seluruh Sayembara
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Navigation */}
          <div className="space-y-3">
            <h5 className="font-cowboy text-xs text-[#fbf5eb] uppercase tracking-wider border-b border-[#fbf5eb]/30 pb-1">
              Pos Telegraf & Balai
            </h5>
            <ul className="space-y-2 text-[#f5e8d3]">
              <li>
                <Link href="/" className="hover:text-white transition-colors hover:underline">
                  Pintu Gerbang Utama
                </Link>
              </li>
              <li>
                <Link href="/#linimasa" className="hover:text-white transition-colors hover:underline">
                  Rute & Peta Ekspedisi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors hover:underline">
                  Balai Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/faq#kontak" className="hover:text-white transition-colors hover:underline">
                  Kantor Marsekal Panitia
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/isfest_umn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fbf5eb] font-bold hover:underline"
                >
                  Instagram @isfest_umn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-[#fbf5eb]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#f5e8d3]/70">
          <div>
            © 2027 ISFEST UMN • Himpunan Mahasiswa Sistem Informasi Universitas Multimedia Nusantara. All rights reserved.
          </div>
          <div className="text-[#fbf5eb]/90 font-medium">
            Ditempa di Lembah Frontier Barat dengan Nyali, Logika, dan Inovasi Mahasiswa.
          </div>
        </div>
      </div>
    </footer>
  );
}
