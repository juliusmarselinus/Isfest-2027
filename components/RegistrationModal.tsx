'use client';

import React, { useState } from 'react';
import { Competition, COMPETITIONS_DATA } from '@/lib/competitions-data';
import CompetitionIcon from './CompetitionIcon';
import { CowboyHatIcon, SheriffBadgeIcon, HorseshoeIcon } from './WesternSvg';
import { SheriffStarLarge, GallopingHorseSvg } from './WesternAssets';
import confetti from 'canvas-confetti';
import { 
  X, Check, Copy, CheckCheck, Upload, ArrowRight, ArrowLeft, 
  ShieldCheck, AlertCircle, Building2, Sparkles, User, CreditCard, Clock
} from 'lucide-react';

interface RegistrationModalProps {
  initialCompetition: Competition | null;
  onClose: () => void;
}

export default function RegistrationModal({
  initialCompetition,
  onClose,
}: RegistrationModalProps) {
  // 5 Steps (Image 2 Retro Southwestern Palette)
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [selectedCompId, setSelectedCompId] = useState<string>(
    initialCompetition?.id || COMPETITIONS_DATA[0].id
  );

  // Form State - Step 2: Identitas Geng
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');

  // Form State - Step 3: Kapten & Anggota
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderWhatsapp, setLeaderWhatsapp] = useState('');
  const [leaderIdNumber, setLeaderIdNumber] = useState('');
  const [leaderGameId, setLeaderGameId] = useState('');

  const [members, setMembers] = useState<Array<{ name: string; email: string; phone: string; idNum: string; gameId: string }>>([
    { name: '', email: '', phone: '', idNum: '', gameId: '' },
  ]);

  // Form State - Step 4: Pembayaran
  const [paymentProofPreview, setPaymentProofPreview] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Error Message
  const [formError, setFormError] = useState<string | null>(null);

  // Success State
  const [registrationCode, setRegistrationCode] = useState('');

  const currentCompetition =
    COMPETITIONS_DATA.find((c) => c.id === selectedCompId) || COMPETITIONS_DATA[0];

  const activeWave =
    currentCompetition.waves.find((w) => w.status === 'active') || currentCompetition.waves[0];

  const isEsport = currentCompetition.categoryType === 'esport';

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormError('Ukuran berkas maksimal 5 MB!');
        return;
      }
      setFormError(null);
      const url = URL.createObjectURL(file);
      setPaymentProofPreview(url);
    }
  };

  const addMember = () => {
    if (members.length + 1 < currentCompetition.maxMembers) {
      setMembers([...members, { name: '', email: '', phone: '', idNum: '', gameId: '' }]);
    }
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, idx) => idx !== index));
  };

  const updateMember = (index: number, field: string, value: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const validateStep2 = () => {
    if (!teamName.trim()) {
      setFormError('Nama Geng / Tim Posse wajib diisi.');
      return false;
    }
    if (!institution.trim()) {
      setFormError('Asal instansi, kampus, sekolah, atau kota wajib diisi.');
      return false;
    }
    setFormError(null);
    return true;
  };

  const validateStep3 = () => {
    if (!leaderName.trim()) {
      setFormError('Nama lengkap kapten bos geng wajib diisi.');
      return false;
    }
    if (!leaderWhatsapp.trim()) {
      setFormError('Nomor WhatsApp aktif kapten wajib diisi.');
      return false;
    }
    if (!leaderEmail.trim() || !leaderEmail.includes('@')) {
      setFormError('Email aktif kapten wajib diisi dengan benar.');
      return false;
    }
    if (isEsport && !leaderGameId.trim()) {
      setFormError('In-Game Nickname & ID Tagline kapten wajib diisi.');
      return false;
    }
    if (!isEsport && !leaderIdNumber.trim()) {
      setFormError('NIM atau NISN kapten wajib diisi.');
      return false;
    }
    setFormError(null);
    return true;
  };

  const handleNext = () => {
    setFormError(null);
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    } else if (step === 3) {
      if (validateStep3()) setStep(4);
    }
  };

  const handleFinalSubmit = () => {
    setFormError(null);

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `SHERIFF-${currentCompetition.id.toUpperCase()}-${randomDigits}`;
    setRegistrationCode(code);
    setStep(5);

    try {
      confetti({
        particleCount: 130,
        spread: 95,
        origin: { y: 0.55 },
        colors: ['#be592e', '#d99951', '#28150d', '#fbf5eb'],
      });
    } catch {
      // fallback
    }
  };

  return (
    /* Modal Backdrop: Semi-transparent so background page is visible, click outside closes modal */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Modal Dialog Card: Southwestern Poster Framed Canvas (Image 2) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border-4 border-[#be592e] shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col max-h-[94vh] bg-[#fbf5eb] text-[#28150d]"
      >
        {/* Corner Brass Pins */}
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        {/* ── HEADER (TERRACOTTA & ESPRESSO) ── */}
        <div className="p-4 sm:p-5 border-b-2 border-[#28150d] bg-[#be592e] text-[#fffbf5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#28150d] border-2 border-[#fbf5eb] flex items-center justify-center text-[#fde047] shadow-md shrink-0">
              <SheriffBadgeIcon className="w-5 h-5 text-[#fde047]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-cowboy tracking-widest uppercase text-[#fbf5eb]/90 flex items-center gap-1 font-bold">
                  <span>BIRO SHERIFF ISFEST 2027</span>
                  <span>•</span>
                  <span>KONTRAK SAYEMBARA</span>
                </span>
              </div>
              <h3 className="font-cowboy text-base sm:text-xl text-[#fffbf5] leading-tight">
                {step === 1 && 'Tahap 1: Pilih Arena Sayembara'}
                {step === 2 && 'Tahap 2: Identitas Geng & Asal'}
                {step === 3 && 'Tahap 3: Formasi Pasukan & Kapten'}
                {step === 4 && 'Tahap 4: Pembayaran Upeti'}
                {step === 5 && 'Akta Kontrak Tim Sah Diterbitkan'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-[#28150d] hover:bg-[#422114] text-[#fffbf5] border border-[#fbf5eb]/40 transition-all cursor-pointer shrink-0 shadow-md hover:scale-105"
            aria-label="Tutup pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── STEP TABS (CLEAN & HOWDY RETRO) ── */}
        {step < 5 && (
          <div className="bg-[#ecdcc3] px-3 sm:px-5 py-2.5 border-b-2 border-[#28150d]">
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-cowboy">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`py-1.5 px-1 rounded-lg border-2 transition-all cursor-pointer ${
                  step === 1
                    ? 'bg-[#be592e] text-[#fffbf5] border-[#28150d] shadow-sm font-bold'
                    : step > 1
                    ? 'text-[#28150d] border-[#be592e]/40 bg-[#fbf5eb]'
                    : 'text-[#8e3e1b] border-transparent opacity-60'
                }`}
              >
                1. ARENA LOMBA
              </button>

              <button
                type="button"
                onClick={() => {
                  if (step > 2 || validateStep2()) setStep(2);
                }}
                disabled={step < 2}
                className={`py-1.5 px-1 rounded-lg border-2 transition-all ${
                  step === 2
                    ? 'bg-[#be592e] text-[#fffbf5] border-[#28150d] shadow-sm font-bold'
                    : step > 2
                    ? 'text-[#28150d] border-[#be592e]/40 bg-[#fbf5eb] cursor-pointer'
                    : 'text-[#8e3e1b] border-transparent cursor-not-allowed opacity-50'
                }`}
              >
                2. NAMA GENG
              </button>

              <button
                type="button"
                onClick={() => {
                  if (step > 3 || (validateStep2() && validateStep3())) setStep(3);
                }}
                disabled={step < 3}
                className={`py-1.5 px-1 rounded-lg border-2 transition-all ${
                  step === 3
                    ? 'bg-[#be592e] text-[#fffbf5] border-[#28150d] shadow-sm font-bold'
                    : step > 3
                    ? 'text-[#28150d] border-[#be592e]/40 bg-[#fbf5eb] cursor-pointer'
                    : 'text-[#8e3e1b] border-transparent cursor-not-allowed opacity-50'
                }`}
              >
                3. PASUKAN
              </button>

              <button
                type="button"
                onClick={() => {
                  if (validateStep2() && validateStep3()) setStep(4);
                }}
                disabled={step < 4}
                className={`py-1.5 px-1 rounded-lg border-2 transition-all ${
                  step === 4
                    ? 'bg-[#be592e] text-[#fffbf5] border-[#28150d] shadow-sm font-bold'
                    : 'text-[#8e3e1b] border-transparent cursor-not-allowed opacity-50'
                }`}
              >
                4. PEMBAYARAN
              </button>
            </div>

            {/* Progress line */}
            <div className="w-full bg-[#dcc9af] h-1.5 rounded-full mt-2 overflow-hidden border border-[#28150d]/20">
              <div
                className="bg-[#be592e] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── ERROR ALERT ── */}
        {formError && (
          <div className="mx-4 sm:mx-6 mt-3 p-3 rounded-xl bg-[#fae5e5] border-2 border-rose-600 flex items-center gap-2 text-xs text-rose-900 font-semibold animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* ── FORM CONTENT AREA (WARM PARCHMENT CANVAS) ── */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm bg-[#fbf5eb] text-[#28150d]">

          {/* ═══════════════ TAHAP 1: PILIH LOMBA DULU (FOKUS & RAPI) ═══════════════ */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-cowboy tracking-wider text-[#be592e] uppercase block font-bold">
                    LANGKAH 1 DARI 4
                  </span>
                  <h4 className="font-cowboy text-base sm:text-lg text-[#28150d]">
                    PILIH 1 ARENA SAYEMBARA UTAMA
                  </h4>
                  <p className="text-xs text-[#523323]">
                    Tentukan cabang lomba yang akan dihadapi pasukanmu.
                  </p>
                </div>
                <GallopingHorseSvg className="w-16 h-12 opacity-60 hidden sm:block" />
              </div>

              {/* 4 Competition Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {COMPETITIONS_DATA.map((c) => {
                  const isSelected = selectedCompId === c.id;
                  const cWave = c.waves.find((w) => w.status === 'active') || c.waves[0];

                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedCompId(c.id);
                        setFormError(null);
                      }}
                      className={`p-4 rounded-xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? 'bg-[#f6eee2] border-[#be592e] shadow-md ring-2 ring-[#be592e]'
                          : 'bg-[#f0e4cf] border-[#28150d]/30 hover:border-[#be592e] hover:bg-[#f6eee2]'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-[#28150d] border border-[#be592e] flex items-center justify-center text-[#f6d19e] shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                              <CompetitionIcon name={c.iconName} className="w-5 h-5 text-[#f6d19e]" />
                            </div>
                            <div>
                              <div className="font-cowboy text-xs sm:text-sm text-[#28150d] leading-snug font-bold">
                                {c.title}
                              </div>
                              <span className="text-[10px] text-[#be592e] font-bold block">
                                {c.category}
                              </span>
                            </div>
                          </div>

                          {isSelected && (
                            <div className="w-6 h-6 rounded-full bg-[#be592e] text-[#fffbf5] flex items-center justify-center shrink-0 shadow-md">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <p className="text-[11px] text-[#523323] leading-relaxed mb-3 line-clamp-2">
                          {c.tagline}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-[#28150d]/20 flex items-center justify-between text-xs">
                        <span className="text-[10px] text-[#523323] font-bold">{c.members}</span>
                        <div className="font-cowboy text-[#be592e] text-sm font-bold">
                          {cWave.price}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Arena Highlight Box */}
              <div className="p-4 rounded-xl border-2 border-[#28150d] bg-[#eddcc4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#be592e] border border-[#28150d] flex items-center justify-center text-[#fffbf5] shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8e3e1b] uppercase tracking-wider font-bold">
                      Arena Terpilih:
                    </div>
                    <div className="font-cowboy text-sm sm:text-base text-[#28150d] font-bold">
                      {currentCompetition.title}
                    </div>
                    <div className="text-[11px] text-[#523323]">
                      Upeti {activeWave.name}: <strong className="text-[#be592e]">{activeWave.price}</strong> • Total Hadiah: <strong className="text-[#be592e]">{currentCompetition.prizepool}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-[#523323] sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[#28150d]/20">
                  <div className="font-bold text-[#28150d]">Ketentuan Peserta:</div>
                  <div className="max-w-xs text-[#523323]">{currentCompetition.eligibility}</div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 2: IDENTITAS GENG & ASAL ═══════════════ */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Selected Arena Badge */}
              <div className="p-3 rounded-xl bg-[#eddcc4] border-2 border-[#28150d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CompetitionIcon name={currentCompetition.iconName} className="w-4 h-4 text-[#be592e]" />
                  <span className="font-cowboy text-xs text-[#28150d] font-bold">{currentCompetition.title}</span>
                </div>
                <span className="text-[11px] text-[#be592e] font-bold">{activeWave.price}</span>
              </div>

              <div>
                <span className="text-[11px] font-cowboy tracking-wider text-[#be592e] uppercase block font-bold">
                  LANGKAH 2 DARI 4
                </span>
                <h4 className="font-cowboy text-base sm:text-lg text-[#28150d]">
                  NAMA GENG (POSSE) & ASAL DAERAH / KAMPUS
                </h4>
                <p className="text-xs text-[#523323]">
                  Cantumkan nama tim dan asal instansi yang akan terpampang di papan duel festival.
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <label className="block font-cowboy text-xs text-[#28150d] mb-1.5 tracking-wider font-bold">
                    NAMA GENG / TIM POSSE <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Contoh: Red Canyon Outlaws / Frontier Squad UMN"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#f0e4cf] text-[#28150d] placeholder-[#8e3e1b]/60 border-2 border-[#28150d] focus:outline-none focus:border-[#be592e] text-xs sm:text-sm font-semibold"
                  />
                  <span className="text-[10px] text-[#523323] mt-1 block">
                    Boleh menggunakan nama skuad esport atau nama kelompok mahasiswa.
                  </span>
                </div>

                <div>
                  <label className="block font-cowboy text-xs text-[#28150d] mb-1.5 tracking-wider flex items-center justify-between font-bold">
                    <span>ASAL KAMPUS / SEKOLAH / KOTA <span className="text-rose-600">*</span></span>
                    <Building2 className="w-3.5 h-3.5 text-[#be592e]" />
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Universitas Multimedia Nusantara (Gading Serpong, Tangerang)"
                    value={institution}
                    onChange={(e) => {
                      setInstitution(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#f0e4cf] text-[#28150d] placeholder-[#8e3e1b]/60 border-2 border-[#28150d] focus:outline-none focus:border-[#be592e] text-xs sm:text-sm font-semibold"
                  />
                  <span className="text-[10px] text-[#523323] mt-1 block">
                    Jika anggota tim berasal dari kampus berbeda, cantumkan kampus ketua atau sebutkan kolaborasi.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 3: KAPTEN & FORMASI ANGGOTA ═══════════════ */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-cowboy tracking-wider text-[#be592e] uppercase block font-bold">
                    LANGKAH 3 DARI 4
                  </span>
                  <h4 className="font-cowboy text-base sm:text-lg text-[#28150d]">
                    DATA KAPTEN & DEPUTI ANGGOTA
                  </h4>
                </div>
                <span className="font-cowboy text-xs text-[#fffbf5] bg-[#be592e] px-2.5 py-1 rounded-lg border border-[#28150d] font-bold">
                  {teamName || 'Frontier Squad'}
                </span>
              </div>

              {/* Leader (Bos Geng) Card */}
              <div className="p-4 rounded-xl border-2 border-[#28150d] bg-[#eddcc4] space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b-2 border-[#28150d]/20 pb-2">
                  <div className="font-cowboy text-xs text-[#28150d] tracking-wider uppercase flex items-center gap-1.5 font-bold">
                    <SheriffBadgeIcon className="w-4 h-4 text-[#be592e]" />
                    <span>KAPTEN / BOS GENG (PENANGGUNG JAWAB TIM)</span>
                  </div>
                  <span className="text-[9px] font-cowboy px-2 py-0.5 rounded bg-[#be592e] text-[#fffbf5] font-bold">
                    WAJIB
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#28150d] mb-1 font-bold">
                      Nama Lengkap Kapten <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama lengkap bos geng"
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#fbf5eb] text-[#28150d] border-2 border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#28150d] mb-1 font-bold">
                      Nomor WhatsApp Aktif <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="08123456789"
                      value={leaderWhatsapp}
                      onChange={(e) => setLeaderWhatsapp(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#fbf5eb] text-[#28150d] border-2 border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#28150d] mb-1 font-bold">
                      Email Aktif <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="kapten@posse.com"
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#fbf5eb] text-[#28150d] border-2 border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#28150d] mb-1 font-bold">
                      {isEsport ? 'In-Game Nickname + ID Tagline' : 'NIM / NISN'} <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={isEsport ? 'Contoh: Outlaw#IDN / 12345678 (2020)' : 'Nomor Induk Mahasiswa'}
                      value={isEsport ? leaderGameId : leaderIdNumber}
                      onChange={(e) => (isEsport ? setLeaderGameId(e.target.value) : setLeaderIdNumber(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-[#fbf5eb] text-[#28150d] border-2 border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none font-semibold"
                    />
                  </div>
                </div>
              </div>

              {/* Members Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-cowboy text-xs text-[#28150d] uppercase font-bold">
                    <User className="w-3.5 h-3.5 text-[#be592e]" />
                    <span>Anggota Pasukan Deputi ({members.length + 1} / {currentCompetition.maxMembers} Orang)</span>
                  </div>

                  {members.length + 1 < currentCompetition.maxMembers && (
                    <button
                      type="button"
                      onClick={addMember}
                      className="inline-flex items-center gap-1 text-xs font-cowboy text-[#28150d] hover:text-[#be592e] px-3 py-1 rounded-lg bg-[#eddcc4] border-2 border-[#28150d] cursor-pointer font-bold shadow-sm"
                    >
                      <span>+ Tambah Anggota Deputi</span>
                    </button>
                  )}
                </div>

                {members.map((member, index) => (
                  <div key={index} className="p-3.5 rounded-xl border-2 border-[#28150d] bg-[#f0e4cf] space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#28150d]/20 pb-1.5">
                      <span className="text-xs font-bold text-[#28150d] flex items-center gap-1.5">
                        <HorseshoeIcon className="w-3.5 h-3.5 text-[#be592e]" />
                        <span>Deputi Pasukan #{index + 2}</span>
                      </span>
                      {members.length > 0 && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className="text-[11px] text-rose-600 hover:text-rose-800 font-bold cursor-pointer"
                        >
                          Hapus Anggota
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] text-[#28150d] mb-0.5 font-bold">Nama Lengkap</label>
                        <input
                          type="text"
                          placeholder="Nama lengkap anggota"
                          value={member.name}
                          onChange={(e) => updateMember(index, 'name', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#fbf5eb] text-[#28150d] border border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#28150d] mb-0.5 font-bold">
                          {isEsport ? 'In-Game Nickname / ID' : 'NIM / NISN'}
                        </label>
                        <input
                          type="text"
                          placeholder={isEsport ? 'ID Game / Nickname' : 'NIM / NISN'}
                          value={isEsport ? member.gameId : member.idNum}
                          onChange={(e) => updateMember(index, isEsport ? 'gameId' : 'idNum', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#fbf5eb] text-[#28150d] border border-[#28150d] text-xs focus:border-[#be592e] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 4: PEMBAYARAN (NOREK & NAMA COMING SOON) ═══════════════ */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-xl border-2 border-[#28150d] bg-[#eddcc4] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#8e3e1b] uppercase tracking-wider font-bold">
                    Upeti Registrasi ({currentCompetition.title}):
                  </div>
                  <div className="font-cowboy text-2xl text-[#28150d] my-0.5 font-bold">
                    {activeWave.price}
                  </div>
                  <div className="text-[11px] text-[#523323] font-semibold">
                    {teamName} • {institution}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#be592e] text-[#fffbf5] font-cowboy text-xs text-right border border-[#28150d] font-bold">
                  <div>EARLY BIRD</div>
                  <div className="text-[9px] text-[#fbf5eb] font-sans">GELOMBANG 1</div>
                </div>
              </div>

              {/* Payment Vault Card (Coming Soon) */}
              <div className="p-4 sm:p-5 rounded-2xl border-4 border-[#be592e] bg-[#f0e4cf] text-[#28150d] shadow-md relative overflow-hidden">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-cowboy tracking-widest text-[#be592e] uppercase block mb-1 font-bold">
                      BRANKAS RESMI PEMBAYARAN
                    </span>
                    <h5 className="font-cowboy text-base sm:text-lg text-[#28150d] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#be592e]" />
                      <span>Rekening Resmi Panitia ISFEST 2027</span>
                    </h5>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#be592e] text-[#fffbf5] text-[10px] font-cowboy font-bold border border-[#28150d]">
                    SEGERA DIUMUMKAN
                  </span>
                </div>

                <div className="bg-[#fbf5eb] p-4 rounded-xl border-2 border-[#28150d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div className="space-y-1">
                    <div className="text-[11px] text-[#523323] font-bold">Nomor Rekening Pembayaran:</div>
                    <div className="font-cowboy text-xl sm:text-2xl text-[#be592e] tracking-wider flex items-center gap-2 font-bold">
                      <Clock className="w-5 h-5 text-[#be592e]" />
                      <span>Coming Soon</span>
                    </div>
                    <div className="text-xs text-[#28150d] font-semibold">
                      Atas Nama: <strong className="text-[#be592e]">Coming Soon (Segera Diumumkan)</strong>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#eddcc4] border-2 border-[#28150d] text-[11px] font-cowboy text-[#28150d] font-bold">
                    Kanal Resmi Panitia
                  </div>
                </div>

                <p className="text-[11px] text-[#523323] leading-relaxed font-medium">
                  *Rincian rekening dan kanal pembayaran upeti resmi akan segera diumumkan sebelum gelombang dibuka. Anda dapat langsung menyimpan pendaftaran tim untuk proses verifikasi kuota awal.
                </p>
              </div>

              {/* Upload Proof */}
              <div>
                <label className="block font-cowboy text-xs text-[#28150d] mb-1.5 flex items-center justify-between font-bold">
                  <span>UNGGAH BUKTI / RESI PEMBAYARAN (OPSIONAL / SEMENTARA)</span>
                  <span className="text-[10px] text-[#8e3e1b]">Maks. 5 MB (JPG/PNG)</span>
                </label>

                <div className="border-2 border-dashed border-[#be592e] rounded-xl p-4 text-center bg-[#f0e4cf] transition-colors hover:border-[#28150d]">
                  {paymentProofPreview ? (
                    <div className="space-y-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={paymentProofPreview}
                        alt="Preview Bukti Setoran"
                        className="max-h-44 mx-auto rounded-lg object-contain border-2 border-[#28150d] shadow-md"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                        <span>Bukti transfer siap diverifikasi panitia!</span>
                      </div>
                      <label className="text-xs text-[#be592e] hover:underline cursor-pointer inline-block font-bold">
                        Ganti Foto Resi
                        <input type="file" accept="image/*" onChange={handleProofChange} className="hidden" />
                      </label>
                    </div>
                  ) : (
                    <label className="cursor-pointer block py-3">
                      <Upload className="w-8 h-8 text-[#be592e] mx-auto mb-2 animate-bounce" />
                      <span className="block font-cowboy text-xs text-[#28150d] mb-1 font-bold">
                        KLIK UNTUK MEMILIH BUKTI SETORAN (JIKA SUDAH ADA)
                      </span>
                      <span className="block text-[10px] text-[#523323] font-medium">
                        Atau langsung klik tombol Sahkan Kontrak di bawah untuk mendaftarkan tim
                      </span>
                      <input type="file" accept="image/*" onChange={handleProofChange} className="hidden" />
                    </label>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 5: KONTRAK SAH (SELESAI) ═══════════════ */}
          {step === 5 && (
            <div className="text-center space-y-4 py-2 animate-in zoom-in-95 duration-200">
              <div className="flex justify-center">
                <SheriffStarLarge className="w-20 h-20 drop-shadow-[0_4px_16px_rgba(190,89,46,0.5)]" />
              </div>

              <div>
                <span className="cowboy-stamp text-[10px] tracking-widest text-[#be592e] px-3 py-1 rounded inline-block mb-1 font-bold">
                  ★ TERDAFTAR • RESMI DISETUJUI ★
                </span>
                <h4 className="font-cowboy text-2xl sm:text-3xl text-[#28150d] mb-1">
                  KONTRAK POSSE SAH!
                </h4>
                <p className="text-xs text-[#523323] max-w-md mx-auto font-medium">
                  Geng <strong className="text-[#be592e]">{teamName}</strong> resmi terdaftar pada sayembara{' '}
                  <span className="font-bold text-[#28150d]">{currentCompetition.title}</span>.
                </p>
              </div>

              {/* Certificate Card */}
              <div className="p-4 sm:p-5 rounded-2xl border-4 border-[#be592e] max-w-md mx-auto shadow-lg relative text-left bg-[#f0e4cf]">
                <div className="brass-pin pin-tl" />
                <div className="brass-pin pin-tr" />
                <div className="brass-pin pin-bl" />
                <div className="brass-pin pin-br" />

                <div className="border-2 border-[#28150d] p-3.5 bg-[#fbf5eb] rounded-xl shadow-inner">
                  <div className="flex items-center justify-between border-b-2 border-[#28150d]/20 pb-2 mb-2">
                    <span className="font-cowboy text-[10px] text-[#be592e] uppercase tracking-wider font-bold">
                      LENCANA KONTRAK POSSE
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Terdaftar</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3 bg-[#eddcc4] p-2.5 rounded-lg border-2 border-[#28150d]">
                    <span className="font-cowboy text-xl text-[#28150d] tracking-wider font-bold">
                      {registrationCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(registrationCode)}
                      className="px-2.5 py-1 rounded bg-[#be592e] text-[10px] text-[#fffbf5] flex items-center gap-1 border border-[#28150d] hover:bg-[#d86935] cursor-pointer font-bold"
                    >
                      {copiedCode ? <CheckCheck className="w-3 h-3 text-[#fde047]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Disalin' : 'Salin'}</span>
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#28150d]">
                    <div><strong className="text-[#8e3e1b]">Nama Tim:</strong> {teamName}</div>
                    <div><strong className="text-[#8e3e1b]">Kapten:</strong> {leaderName} ({leaderWhatsapp})</div>
                    <div><strong className="text-[#8e3e1b]">Asal Instansi:</strong> {institution}</div>
                    <div><strong className="text-[#8e3e1b]">Cabang Lomba:</strong> {currentCompetition.title}</div>
                    <div><strong className="text-[#8e3e1b]">Status:</strong> Menunggu Verifikasi Panitia</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full max-w-sm py-2.5 rounded-xl text-xs font-cowboy tracking-wider text-[#28150d] hover:bg-[#eddcc4] bg-[#f0e4cf] border-2 border-[#28150d] cursor-pointer shadow-md font-bold"
                >
                  TUTUP & KEMBALI KE BERANDA
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── FOOTER CONTROLS ── */}
        {step < 5 && (
          <div className="p-3.5 sm:p-4 border-t-2 border-[#28150d] bg-[#ecdcc3] flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setFormError(null);
                  setStep((step - 1) as any);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#28150d] hover:bg-[#e4cfb3] bg-[#f0e4cf] border-2 border-[#28150d] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fffbf5] btn-leather cursor-pointer shadow-md hover:scale-105 transition-transform"
              >
                <span>
                  {step === 1 && 'Lanjut ke Nama Geng'}
                  {step === 2 && 'Lanjut ke Anggota Pasukan'}
                  {step === 3 && 'Lanjut ke Pembayaran Upeti'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fffbf5] btn-leather shadow-lg cursor-pointer hover:scale-105 transition-transform"
              >
                <ShieldCheck className="w-4 h-4 text-[#fde047]" />
                <span>SAHKAN KONTRAK PENDAFTARAN</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
