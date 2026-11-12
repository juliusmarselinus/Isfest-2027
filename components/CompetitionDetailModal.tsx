'use client';

import React, { useState } from 'react';
import { Competition } from '@/lib/competitions-data';
import CompetitionIcon from './CompetitionIcon';
import { CowboyHatIcon } from './WesternSvg';
import { X, Award, Trophy, Calendar, FileText, Download, ArrowRight, Users, CheckCircle2, Scroll, Radio } from 'lucide-react';

interface CompetitionDetailModalProps {
  competition: Competition | null;
  onClose: () => void;
  onRegister: (comp: Competition) => void;
}

export default function CompetitionDetailModal({
  competition,
  onClose,
  onRegister,
}: CompetitionDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'prizes' | 'timeline' | 'rules' | 'contact'>('overview');

  if (!competition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl wood-board rounded-2xl border-2 border-[#783e1c] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#5a3014] bg-[#1a0f08] flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#2a1408] border border-[#d97706]/40 flex items-center justify-center text-[#f6c085] shrink-0 shadow-inner">
              <CompetitionIcon name={competition.iconName} className="w-6 h-6 text-[#d97706]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-cowboy px-2 py-0.5 rounded bg-[#381c0c] text-[#fde047] border border-[#d97706]/40 uppercase">
                  {competition.category}
                </span>
                <span className="text-xs text-[#caa27d] font-semibold flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#f6c085]" />
                  <span>{competition.members}</span>
                </span>
              </div>
              <h3 className="font-cowboy text-lg sm:text-xl text-[#fef3c7] leading-tight">
                {competition.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#2a1408] hover:bg-[#3d1e0c] text-[#fde047] border border-[#5a3014] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation with Clean SVG Icons */}
        <div className="flex items-center gap-1 px-5 pt-2.5 border-b border-[#451e0b] overflow-x-auto hide-scrollbar bg-[#120803]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-cowboy border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'text-[#fde047] border-[#fde047] bg-[#2a1408]'
                : 'text-[#caa27d] border-transparent hover:text-white'
            }`}
          >
            <Scroll className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Misi Lomba</span>
          </button>

          <button
            onClick={() => setActiveTab('prizes')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-cowboy border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'prizes'
                ? 'text-[#fde047] border-[#fde047] bg-[#2a1408]'
                : 'text-[#caa27d] border-transparent hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Hadiah Juara</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-cowboy border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'timeline'
                ? 'text-[#fde047] border-[#fde047] bg-[#2a1408]'
                : 'text-[#caa27d] border-transparent hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Jadwal Ekspedisi</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-cowboy border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'rules'
                ? 'text-[#fde047] border-[#fde047] bg-[#2a1408]'
                : 'text-[#caa27d] border-transparent hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Peraturan</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-cowboy border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'contact'
                ? 'text-[#fde047] border-[#fde047] bg-[#2a1408]'
                : 'text-[#caa27d] border-transparent hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Guidebook & PIC</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm bg-[#160b05]">
          {/* TAB 1 */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <h4 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider mb-1.5">
                  Deskripsi Perlombaan
                </h4>
                <p className="text-xs sm:text-sm text-[#eed9b3] leading-relaxed">
                  {competition.overview}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#200f07] border border-[#5a3014]">
                <h4 className="font-cowboy text-xs text-[#fef08a] uppercase mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#d97706]" />
                  Kelayakan Peserta (Eligibility)
                </h4>
                <p className="text-xs text-[#eed9b3]">
                  {competition.eligibility}
                </p>
              </div>

              <div>
                <h4 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider mb-2">
                  Sasaran Kompetensi yang Diuji
                </h4>
                <div className="space-y-2">
                  {competition.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#eed9b3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f6c085] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Waves */}
              <div>
                <h4 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider mb-2">
                  Tahapan Pendaftaran
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {competition.waves.map((w) => (
                    <div
                      key={w.wave}
                      className={`p-3 rounded-xl border ${
                        w.status === 'active'
                          ? 'bg-[#381c0c] border-[#d97706]'
                          : 'bg-[#180d07] border-[#451e0b] opacity-75'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-cowboy text-[10px] text-white">{w.name}</span>
                        {w.status === 'active' && (
                          <span className="text-[9px] font-cowboy text-[#fde047] px-1 py-0.5 rounded bg-black/40">
                            Aktif
                          </span>
                        )}
                      </div>
                      <div className="font-cowboy text-sm text-[#fef08a] mb-0.5">
                        {w.price}
                      </div>
                      <div className="text-[10px] text-[#caa27d]">
                        {w.startDate} - {w.endDate}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 */}
          {activeTab === 'prizes' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="text-center p-4 rounded-xl bg-gradient-to-b from-[#381c0c] to-[#1a0f08] border border-[#d97706]">
                <span className="text-xs font-cowboy text-[#fde047] block mb-1">
                  TOTAL HADIAH PEMBINAAN
                </span>
                <span className="font-cowboy text-2xl sm:text-3xl text-[#fef3c7]">
                  {competition.prizepool}
                </span>
              </div>

              <div className="space-y-2.5">
                {competition.prizes.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#200f07] border border-[#5a3014] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#3d1e0c] text-[#fde047] border border-[#783e1c] flex items-center justify-center font-cowboy text-xs shrink-0">
                        #{idx + 1}
                      </div>
                      <div>
                        <h5 className="font-cowboy text-xs sm:text-sm text-[#fef08a]">{p.rank}</h5>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {p.perks.map((perk, pIdx) => (
                            <span key={pIdx} className="text-[10px] bg-black/40 text-[#eed9b3] px-2 py-0.5 rounded border border-[#5a3014]">
                              {perk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="font-cowboy text-base text-[#fde047] sm:text-right">
                      {p.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3 */}
          {activeTab === 'timeline' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              {competition.timeline.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#200f07] border border-[#5a3014] flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#3d1e0c] text-[#fde047] border border-[#783e1c] flex items-center justify-center font-cowboy text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h5 className="font-cowboy text-xs text-[#fef9c3]">{step.title}</h5>
                      <span className="font-cowboy text-[10px] text-[#fde047] bg-[#381c0c] px-2 py-0.5 rounded border border-[#783e1c]">
                        {step.date}
                      </span>
                    </div>
                    <p className="text-xs text-[#d8be9b]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4 */}
          {activeTab === 'rules' && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                Peraturan ini mengikat seluruh tim peserta lomba. Segala bentuk kecurangan atau tindakan tidak sportif akan dikenakan sanksi diskualifikasi langsung.
              </div>

              <div className="space-y-2">
                {competition.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#eed9b3]">
                    <span className="w-5 h-5 rounded bg-[#381c0c] text-[#fde047] text-[10px] font-cowboy flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-[#451e0b]">
                <h5 className="font-cowboy text-xs text-[#fde047] uppercase mb-1.5">
                  Berkas Pengumpulan (Submission)
                </h5>
                <ul className="list-disc list-inside text-xs text-[#eed9b3] space-y-1">
                  {competition.submissionRequirements.map((sub, sIdx) => (
                    <li key={sIdx}>{sub}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5 */}
          {activeTab === 'contact' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-[#200f07] border border-[#783e1c] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h4 className="font-cowboy text-xs text-[#fef9c3] mb-0.5">
                    DOWNLOAD OFFICIAL GUIDEBOOK
                  </h4>
                  <p className="text-xs text-[#caa27d]">
                    Unduh file pedoman teknis lengkap cabang {competition.title}.
                  </p>
                </div>
                <a
                  href={competition.guidebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-cowboy text-[#fff4e0] btn-leather shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>BUKA GUIDEBOOK</span>
                </a>
              </div>

              <div>
                <h4 className="font-cowboy text-xs text-[#fde047] uppercase tracking-wider mb-2.5">
                  Narahubung (Person In Charge)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {competition.contacts.map((pic, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#200f07] border border-[#5a3014] flex items-center justify-between gap-2.5"
                    >
                      <div>
                        <div className="font-cowboy text-xs text-[#fef08a]">{pic.name}</div>
                        <div className="text-[10px] text-[#caa27d]">{pic.role}</div>
                        <div className="text-xs font-mono text-[#fde047] mt-0.5">{pic.displayWa}</div>
                      </div>
                      <a
                        href={`https://wa.me/${pic.wa}?text=Halo%20kak%20${encodeURIComponent(pic.name)},%20saya%20ingin%20tanya%20seputar%20sayembara%20${encodeURIComponent(competition.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shrink-0"
                      >
                        Chat WA
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#5a3014] bg-[#120803] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#caa27d]">
            <span>Wave 1 (Early Bird) pendaftaran sedang dibuka</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold text-[#eed9b3] hover:text-white bg-[#2a1408] border border-[#5a3014]"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onRegister(competition);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg text-xs font-cowboy text-[#fff4e0] btn-leather cursor-pointer shadow-md"
            >
              <CowboyHatIcon className="w-3.5 h-3.5" />
              <span>DAFTARKAN POSSE SEKARANG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
