'use client';

import React from 'react';
import { SheriffBadgeIcon } from './WesternSvg';

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0703] border-t-2 border-[#5c3218] pt-16 pb-12 overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#ca8a04] via-[#854d0e] to-[#451a03] border-2 border-[#fef08a] shadow-lg text-[#fde047]">
                <SheriffBadgeIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-cowboy text-xl text-[#fef9c3]">
                  ISFEST
                </span>
                <span className="font-cowboy text-[10px] px-2 py-0.5 rounded bg-[#451a03] text-[#fde047] border border-[#a16207]">
                  1887-2027
                </span>
              </div>
            </div>

            <p className="text-[#caa27d] max-w-sm leading-relaxed">
              Information Systems Festival (ISFEST) 2027: The Wild West Digital Frontier. Persembahan resmi tahunan Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Multimedia Nusantara, Pos Terdepan Gading Serpong, Tangerang.
            </p>

            <div className="text-[11px] text-[#9a7350]">
              Pos Terdepan: Jl. Scientia Boulevard, Gading Serpong, Tangerang, Banten 15811
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider">
              Papan Sayembara
            </h5>
            <ul className="space-y-2 text-[#caa27d]">
              <li>
                <a href="#lomba" className="hover:text-[#fef08a] transition-colors">
                  UI/UX Cartographer
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#fef08a] transition-colors">
                  Data Prospector & AI
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#fef08a] transition-colors">
                  Web & Fortress Dev
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#fef08a] transition-colors">
                  Mobile Legends Posse
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-[#fef08a] transition-colors">
                  Valorant High Noon
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Help */}
          <div className="space-y-3">
            <h5 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider">
              Pos Telegraf
            </h5>
            <ul className="space-y-2 text-[#caa27d]">
              <li>
                <a href="#beranda" className="hover:text-[#fef08a] transition-colors">
                  Pintu Gerbang Utama
                </a>
              </li>
              <li>
                <a href="#linimasa" className="hover:text-[#fef08a] transition-colors">
                  Rute & Peta Ekspedisi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#fef08a] transition-colors">
                  Balai Tanya Jawab
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#fef08a] transition-colors">
                  Kantor Marsekal
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/isfest_umn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fde047] hover:underline"
                >
                  Instagram @isfest_umn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-[#451a03] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9a7350]">
          <div>
            © 2027 ISFEST UMN • Himpunan Mahasiswa Sistem Informasi Universitas Multimedia Nusantara. All rights reserved.
          </div>
          <div className="text-[#caa27d]">
            Ditempa di Lembah Frontier Barat dengan Nyali, Logika, dan Inovasi Mahasiswa.
          </div>
        </div>
      </div>
    </footer>
  );
}
