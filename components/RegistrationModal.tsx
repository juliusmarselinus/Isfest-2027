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
  // 5 Steps:
  // Step 1: Pilih Arena Lomba
  // Step 2: Identitas Geng (Nama Geng & Asal)
  // Step 3: Formasi Anggota & Kapten
  // Step 4: Pembayaran (Coming Soon)
  // Step 5: Akta Kontrak Posse Sah
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
        colors: ['#ca8a04', '#ea580c', '#fef08a', '#15803d', '#f97316'],
      });
    } catch {
      // fallback
    }
  };

  return (
    /* Modal Backdrop: Lighter semi-transparent so background page is visible, click outside closes modal */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Modal Dialog Card: stopPropagation so clicking inside does not close modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl wanted-card rounded-2xl border-2 border-[#ca8a04] shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[94vh]"
        style={{
          background: 'linear-gradient(180deg, #2b180d 0%, #201209 50%, #170d06 100%)',
        }}
      >
        {/* Corner Brass Pins */}
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        {/* ── HEADER ── */}
        <div className="p-4 sm:p-5 border-b-2 border-[#783e1c] bg-[#2d180d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b45309] to-[#451a03] border-2 border-[#fde047] flex items-center justify-center text-[#fde047] shadow-lg shrink-0">
              <SheriffBadgeIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-cowboy tracking-widest uppercase text-[#fde047] flex items-center gap-1">
                  <span>BIRO SHERIFF ISFEST 2027</span>
                  <span>•</span>
                  <span>KONTRAK SAYEMBARA</span>
                </span>
              </div>
              <h3 className="font-cowboy text-base sm:text-xl text-[#fef9c3] leading-tight">
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
            className="p-1.5 sm:p-2 rounded-xl bg-[#451e0b] hover:bg-[#6b3010] text-[#fef08a] border border-[#a16207] transition-all cursor-pointer shrink-0 shadow-md hover:scale-105"
            aria-label="Tutup pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── STEP TABS (CLEAN & WESTERN STYLED) ── */}
        {step < 5 && (
          <div className="bg-[#1c0f07] px-3 sm:px-5 py-2.5 border-b border-[#5a3014]">
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-cowboy">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`py-1.5 px-1 rounded-lg border transition-all cursor-pointer ${
                  step === 1
                    ? 'bg-[#5c2a0d] text-[#fde047] border-[#ca8a04] shadow-md'
                    : step > 1
                    ? 'text-[#fef08a] border-[#783e1c] bg-[#2a1408]'
                    : 'text-[#854d0e] border-transparent'
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
                className={`py-1.5 px-1 rounded-lg border transition-all ${
                  step === 2
                    ? 'bg-[#5c2a0d] text-[#fde047] border-[#ca8a04] shadow-md'
                    : step > 2
                    ? 'text-[#fef08a] border-[#783e1c] bg-[#2a1408] cursor-pointer'
                    : 'text-[#6b3819] border-transparent cursor-not-allowed'
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
                className={`py-1.5 px-1 rounded-lg border transition-all ${
                  step === 3
                    ? 'bg-[#5c2a0d] text-[#fde047] border-[#ca8a04] shadow-md'
                    : step > 3
                    ? 'text-[#fef08a] border-[#783e1c] bg-[#2a1408] cursor-pointer'
                    : 'text-[#6b3819] border-transparent cursor-not-allowed'
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
                className={`py-1.5 px-1 rounded-lg border transition-all ${
                  step === 4
                    ? 'bg-[#5c2a0d] text-[#fde047] border-[#ca8a04] shadow-md'
                    : 'text-[#6b3819] border-transparent cursor-not-allowed'
                }`}
              >
                4. PEMBAYARAN
              </button>
            </div>

            {/* Progress line */}
            <div className="w-full bg-[#140a04] h-1.5 rounded-full mt-2 overflow-hidden border border-[#5c2a0d]">
              <div
                className="bg-gradient-to-r from-[#ca8a04] via-[#f59e0b] to-[#fde047] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── ERROR ALERT ── */}
        {formError && (
          <div className="mx-4 sm:mx-6 mt-3 p-3 rounded-xl bg-rose-950/80 border border-rose-500/80 flex items-center gap-2 text-xs text-rose-200 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* ── FORM CONTENT AREA (LIGHTER WARM TONES) ── */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm">

          {/* ═══════════════ TAHAP 1: PILIH LOMBA DULU (FOKUS & LEGA) ═══════════════ */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-cowboy tracking-wider text-[#f59e0b] uppercase block">
                    LANGKAH 1 DARI 4
                  </span>
                  <h4 className="font-cowboy text-base sm:text-lg text-[#fef9c3]">
                    PILIH 1 ARENA SAYEMBARA UTAMA
                  </h4>
                  <p className="text-xs text-[#d8be9b]">
                    Tentukan cabang lomba yang akan dihadapi pasukanmu.
                  </p>
                </div>
                <GallopingHorseSvg className="w-16 h-12 opacity-40 hidden sm:block" />
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
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#4a2610] via-[#3d1e0c] to-[#2c1408] border-[#fde047] shadow-[0_0_20px_rgba(253,224,71,0.3)] ring-2 ring-[#fde047]'
                          : 'bg-[#27150b] border-[#6b3819] hover:border-[#ca8a04] hover:bg-[#341b0e]'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-[#381c0c] border border-[#a16207] flex items-center justify-center text-[#f6c085] shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                              <CompetitionIcon name={c.iconName} className="w-5 h-5 text-[#fde047]" />
                            </div>
                            <div>
                              <div className="font-cowboy text-xs sm:text-sm text-[#fef9c3] leading-snug">
                                {c.title}
                              </div>
                              <span className="text-[10px] text-[#eed9b3] font-semibold block">
                                {c.category}
                              </span>
                            </div>
                          </div>

                          {isSelected && (
                            <div className="w-6 h-6 rounded-full bg-[#fde047] text-black flex items-center justify-center shrink-0 shadow-md">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <p className="text-[11px] text-[#d8be9b] leading-relaxed mb-3 line-clamp-2">
                          {c.tagline}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-[#4a2610] flex items-center justify-between text-xs">
                        <span className="text-[10px] text-[#c29b75]">{c.members}</span>
                        <div className="font-cowboy text-[#fef08a] text-sm">
                          {cWave.price}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Arena Highlight Box */}
              <div className="p-4 rounded-xl wood-board border-2 border-[#ca8a04] bg-gradient-to-r from-[#2e180d] to-[#1c0f07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#451e0b] border border-[#ca8a04] flex items-center justify-center text-[#fde047] shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#caa27d] uppercase tracking-wider font-semibold">
                      Arena Terpilih:
                    </div>
                    <div className="font-cowboy text-sm sm:text-base text-[#fef08a]">
                      {currentCompetition.title}
                    </div>
                    <div className="text-[11px] text-[#eed9b3]">
                      Upeti {activeWave.name}: <strong className="text-[#fde047]">{activeWave.price}</strong> • Total Hadiah: <strong className="text-[#fde047]">{currentCompetition.prizepool}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-[#caa27d] sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[#4a2610]">
                  <div>Ketentuan Peserta:</div>
                  <div className="text-[#fef3c7] max-w-xs">{currentCompetition.eligibility}</div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 2: IDENTITAS GENG & ASAL ═══════════════ */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Selected Arena Badge */}
              <div className="p-3 rounded-xl bg-[#2e180d] border border-[#6b3819] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CompetitionIcon name={currentCompetition.iconName} className="w-4 h-4 text-[#d97706]" />
                  <span className="font-cowboy text-xs text-[#fef08a]">{currentCompetition.title}</span>
                </div>
                <span className="text-[10px] text-[#caa27d]">{activeWave.price}</span>
              </div>

              <div>
                <span className="text-[11px] font-cowboy tracking-wider text-[#f59e0b] uppercase block">
                  LANGKAH 2 DARI 4
                </span>
                <h4 className="font-cowboy text-base sm:text-lg text-[#fef9c3]">
                  NAMA GENG (POSSE) & ASAL DAERAH / KAMPUS
                </h4>
                <p className="text-xs text-[#d8be9b]">
                  Cantumkan nama tim dan asal instansi yang akan terpampang di papan duel.
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <label className="block font-cowboy text-xs text-[#fde047] mb-1.5 tracking-wider">
                    NAMA GENG / TIM POSSE <span className="text-rose-400">*</span>
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
                    className="w-full px-4 py-3 rounded-xl wood-board text-[#fef9c3] placeholder-[#8a6543] border border-[#783e1c] focus:outline-none focus:border-[#ca8a04] text-xs sm:text-sm bg-[#1c0f07]"
                  />
                  <span className="text-[10px] text-[#caa27d] mt-1 block">
                    Boleh menggunakan nama skuad esport atau nama kelompok mahasiswa.
                  </span>
                </div>

                <div>
                  <label className="block font-cowboy text-xs text-[#fde047] mb-1.5 tracking-wider flex items-center justify-between">
                    <span>ASAL KAMPUS / SEKOLAH / KOTA <span className="text-rose-400">*</span></span>
                    <Building2 className="w-3.5 h-3.5 text-[#ca8a04]" />
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
                    className="w-full px-4 py-3 rounded-xl wood-board text-[#fef9c3] placeholder-[#8a6543] border border-[#783e1c] focus:outline-none focus:border-[#ca8a04] text-xs sm:text-sm bg-[#1c0f07]"
                  />
                  <span className="text-[10px] text-[#caa27d] mt-1 block">
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
                  <span className="text-[11px] font-cowboy tracking-wider text-[#f59e0b] uppercase block">
                    LANGKAH 3 DARI 4
                  </span>
                  <h4 className="font-cowboy text-base sm:text-lg text-[#fef9c3]">
                    DATA KAPTEN & DEPUTI ANGGOTA
                  </h4>
                </div>
                <span className="font-cowboy text-xs text-[#fef08a] bg-[#381c0c] px-2.5 py-1 rounded-lg border border-[#ca8a04]">
                  {teamName || 'Frontier Squad'}
                </span>
              </div>

              {/* Leader (Bos Geng) Card */}
              <div className="p-4 rounded-xl wood-board border-2 border-[#ca8a04] bg-[#2a160b] space-y-3">
                <div className="flex items-center justify-between border-b border-[#5a3014] pb-2">
                  <div className="font-cowboy text-xs text-[#fde047] tracking-wider uppercase flex items-center gap-1.5">
                    <SheriffBadgeIcon className="w-4 h-4 text-[#d97706]" />
                    <span>KAPTEN / BOS GENG (PENANGGUNG JAWAB TIM)</span>
                  </div>
                  <span className="text-[9px] font-cowboy px-2 py-0.5 rounded bg-[#451a03] text-[#fef08a] border border-[#ca8a04]/50">
                    WAJIB
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#caa27d] mb-1 font-semibold">
                      Nama Lengkap Kapten <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama lengkap bos geng"
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#140a04] text-white border border-[#6b3819] text-xs focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#caa27d] mb-1 font-semibold">
                      Nomor WhatsApp Aktif <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="08123456789"
                      value={leaderWhatsapp}
                      onChange={(e) => setLeaderWhatsapp(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#140a04] text-white border border-[#6b3819] text-xs focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#caa27d] mb-1 font-semibold">
                      Email Aktif <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="kapten@posse.com"
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#140a04] text-white border border-[#6b3819] text-xs focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#caa27d] mb-1 font-semibold">
                      {isEsport ? 'In-Game Nickname + ID Tagline' : 'NIM / NISN'} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={isEsport ? 'Contoh: Outlaw#IDN / 12345678 (2020)' : 'Nomor Induk Mahasiswa'}
                      value={isEsport ? leaderGameId : leaderIdNumber}
                      onChange={(e) => (isEsport ? setLeaderGameId(e.target.value) : setLeaderIdNumber(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-[#140a04] text-white border border-[#6b3819] text-xs focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Members Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-cowboy text-xs text-[#fde047] uppercase">
                    <User className="w-3.5 h-3.5 text-[#ca8a04]" />
                    <span>Anggota Pasukan Deputi ({members.length + 1} / {currentCompetition.maxMembers} Orang)</span>
                  </div>

                  {members.length + 1 < currentCompetition.maxMembers && (
                    <button
                      type="button"
                      onClick={addMember}
                      className="inline-flex items-center gap-1 text-xs font-cowboy text-[#fde047] hover:text-[#fef08a] px-3 py-1 rounded-lg bg-[#381c0c] border border-[#a16207] cursor-pointer"
                    >
                      <span>+ Tambah Anggota Deputi</span>
                    </button>
                  )}
                </div>

                {members.map((member, index) => (
                  <div key={index} className="p-3.5 rounded-xl wood-board border border-[#6b4423] bg-[#221208] space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#4a2610] pb-1.5">
                      <span className="text-xs font-bold text-[#eed9b3] flex items-center gap-1.5">
                        <HorseshoeIcon className="w-3.5 h-3.5 text-[#ca8a04]" />
                        <span>Deputi Pasukan #{index + 2}</span>
                      </span>
                      {members.length > 0 && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className="text-[11px] text-rose-400 hover:text-rose-300 cursor-pointer"
                        >
                          Hapus Anggota
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[10px] text-[#caa27d] mb-0.5">Nama Lengkap</label>
                        <input
                          type="text"
                          placeholder="Nama lengkap anggota"
                          value={member.name}
                          onChange={(e) => updateMember(index, 'name', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#140a04] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#caa27d] mb-0.5">
                          {isEsport ? 'In-Game Nickname / ID' : 'NIM / NISN'}
                        </label>
                        <input
                          type="text"
                          placeholder={isEsport ? 'ID Game / Nickname' : 'NIM / NISN'}
                          value={isEsport ? member.gameId : member.idNum}
                          onChange={(e) => updateMember(index, isEsport ? 'gameId' : 'idNum', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#140a04] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ TAHAP 4: PEMBAYARAN (NOREK & NAMA COMING SOON SESUAI INSTRUKSI) ═══════════════ */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-xl wood-board border border-[#ca8a04] bg-[#2a160b] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#caa27d] uppercase tracking-wider font-semibold">
                    Upeti Registrasi ({currentCompetition.title}):
                  </div>
                  <div className="font-cowboy text-2xl text-[#fef08a] my-0.5">
                    {activeWave.price}
                  </div>
                  <div className="text-[11px] text-[#eed9b3]">
                    {teamName} • {institution}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#ca8a04]/20 border border-[#ca8a04] text-[#fef08a] font-cowboy text-xs text-right">
                  <div>EARLY BIRD</div>
                  <div className="text-[9px] text-[#fde047] font-sans">GELOMBANG 1</div>
                </div>
              </div>

              {/* Payment Vault Card (Rekening & Nama Coming Soon Sesuai Permintaan User) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#2f190e] via-[#24130a] to-[#1a0e07] border-2 border-[#ca8a04] shadow-xl relative overflow-hidden">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-cowboy tracking-widest text-[#fde047] uppercase block mb-1">
                      BRANKAS RESMI PEMBAYARAN
                    </span>
                    <h5 className="font-cowboy text-base sm:text-lg text-white flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#d97706]" />
                      <span>Rekening Resmi Panitia ISFEST 2027</span>
                    </h5>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#ca8a04]/20 border border-[#ca8a04] text-[#fef08a] text-[10px] font-cowboy">
                    SEGERA DIUMUMKAN
                  </span>
                </div>

                <div className="bg-[#170a04] p-4 rounded-xl border border-[#783e1c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div className="space-y-1">
                    <div className="text-[11px] text-[#caa27d]">Nomor Rekening Pembayaran:</div>
                    <div className="font-cowboy text-xl sm:text-2xl text-[#fde047] tracking-wider flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#d97706]" />
                      <span>Coming Soon</span>
                    </div>
                    <div className="text-xs text-[#eed9b3]">
                      Atas Nama: <strong className="text-[#fef08a]">Coming Soon (Segera Diumumkan)</strong>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#2e160a] border border-[#a16207] text-[11px] font-cowboy text-[#fde047]">
                    Kanal Resmi Panitia
                  </div>
                </div>

                <p className="text-[11px] text-[#caa27d] leading-relaxed">
                  *Rincian rekening dan kanal pembayaran upeti resmi akan segera diumumkan sebelum gelombang dibuka. Anda tetap dapat menyimpan berkas pendaftaran tim dan menyelesaikan verifikasi awal.
                </p>
              </div>

              {/* Upload Proof */}
              <div>
                <label className="block font-cowboy text-xs text-[#fde047] mb-1.5 flex items-center justify-between">
                  <span>UNGGAH BUKTI / RESI PEMBAYARAN (OPSIONAL / SEMENTARA)</span>
                  <span className="text-[10px] text-[#a67c52]">Maks. 5 MB (JPG/PNG)</span>
                </label>

                <div className="border-2 border-dashed border-[#854d0e] rounded-xl p-4 text-center bg-[#1c0f07] transition-colors hover:border-[#ca8a04]">
                  {paymentProofPreview ? (
                    <div className="space-y-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={paymentProofPreview}
                        alt="Preview Bukti Setoran"
                        className="max-h-44 mx-auto rounded-lg object-contain border border-[#5c3218] shadow-md"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Bukti transfer siap diverifikasi panitia!</span>
                      </div>
                      <label className="text-xs text-[#fde047] hover:underline cursor-pointer inline-block">
                        Ganti Foto Resi
                        <input type="file" accept="image/*" onChange={handleProofChange} className="hidden" />
                      </label>
                    </div>
                  ) : (
                    <label className="cursor-pointer block py-3">
                      <Upload className="w-8 h-8 text-[#ca8a04] mx-auto mb-2 animate-bounce" />
                      <span className="block font-cowboy text-xs text-[#fef9c3] mb-1">
                        KLIK UNTUK MEMILIH BUKTI SETORAN (JIKA SUDAH ADA)
                      </span>
                      <span className="block text-[10px] text-[#caa27d]">
                        Atau langsung klik tombol Sahkan Kontrak di bawah untuk verifikasi awal
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
                <SheriffStarLarge className="w-18 h-18 sm:w-20 sm:h-20 drop-shadow-[0_0_24px_rgba(202,138,4,0.7)]" />
              </div>

              <div>
                <span className="cowboy-stamp text-[10px] tracking-widest text-[#fde047] px-3 py-1 rounded inline-block mb-1">
                  TERDAFTAR • RESMI DISETUJUI
                </span>
                <h4 className="font-cowboy text-2xl sm:text-3xl text-[#fef9c3] mb-1">
                  KONTRAK POSSE SAH!
                </h4>
                <p className="text-xs text-[#eed9b3] max-w-md mx-auto">
                  Geng <strong className="text-[#fde047]">{teamName}</strong> resmi terdaftar pada sayembara{' '}
                  <span className="font-bold text-[#fde047]">{currentCompetition.title}</span>.
                </p>
              </div>

              {/* Certificate Card */}
              <div className="p-4 sm:p-5 rounded-xl wanted-card max-w-md mx-auto border-2 border-[#ca8a04] shadow-2xl relative text-left bg-[#2d180d]">
                <div className="brass-pin pin-tl" />
                <div className="brass-pin pin-tr" />
                <div className="brass-pin pin-bl" />
                <div className="brass-pin pin-br" />

                <div className="rope-border p-3.5 bg-[#170c06]/95 rounded-lg">
                  <div className="flex items-center justify-between border-b border-[#4a2610] pb-2 mb-2">
                    <span className="font-cowboy text-[10px] text-[#fde047] uppercase tracking-wider">
                      LENCANA KONTRAK POSSE
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Terdaftar</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3 bg-[#0e0703] p-2.5 rounded-lg border border-[#5c2a0d]">
                    <span className="font-cowboy text-xl text-[#fef08a] tracking-wider">
                      {registrationCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(registrationCode)}
                      className="px-2.5 py-1 rounded bg-[#381c0c] text-[10px] text-[#fde047] flex items-center gap-1 border border-[#a16207] hover:bg-[#4a2610] cursor-pointer"
                    >
                      {copiedCode ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Disalin' : 'Salin'}</span>
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#eed9b3]">
                    <div><strong className="text-[#caa27d]">Nama Tim:</strong> {teamName}</div>
                    <div><strong className="text-[#caa27d]">Kapten:</strong> {leaderName} ({leaderWhatsapp})</div>
                    <div><strong className="text-[#caa27d]">Asal Instansi:</strong> {institution}</div>
                    <div><strong className="text-[#caa27d]">Cabang Lomba:</strong> {currentCompetition.title}</div>
                    <div><strong className="text-[#caa27d]">Status:</strong> Menunggu Verifikasi Panitia</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full max-w-sm py-2.5 rounded-xl text-xs font-cowboy tracking-wider text-[#eed9b3] hover:text-white bg-[#381c0c] hover:bg-[#4a2610] border border-[#a16207] cursor-pointer shadow-md"
                >
                  TUTUP & KEMBALI KE BERANDA
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── FOOTER CONTROLS ── */}
        {step < 5 && (
          <div className="p-3.5 sm:p-4 border-t-2 border-[#5c3218] bg-[#221108] flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setFormError(null);
                  setStep((step - 1) as any);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#eed9b3] hover:text-white bg-[#381c0c] hover:bg-[#4a2610] border border-[#783e1c] cursor-pointer"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fff4e0] btn-leather cursor-pointer shadow-md hover:scale-105 transition-transform"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fff4e0] bg-gradient-to-b from-[#15803d] to-[#14532d] hover:from-[#16a34a] hover:to-[#166534] border border-[#86efac] shadow-lg cursor-pointer hover:scale-105 transition-transform"
              >
                <ShieldCheck className="w-4 h-4 text-[#86efac]" />
                <span>SAHKAN KONTRAK PENDAFTARAN</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
