'use client';

import React, { useState } from 'react';
import { Competition, COMPETITIONS_DATA } from '@/lib/competitions-data';
import CompetitionIcon from './CompetitionIcon';
import { CowboyHatIcon, SheriffBadgeIcon, HorseshoeIcon } from './WesternSvg';
import { SheriffStarLarge, WantedPosterOrnament } from './WesternAssets';
import confetti from 'canvas-confetti';
import { 
  X, Check, Copy, CheckCheck, QrCode, Upload, ArrowRight, ArrowLeft, 
  Phone, User, ShieldCheck, AlertCircle, Building2, Sparkles 
} from 'lucide-react';

interface RegistrationModalProps {
  initialCompetition: Competition | null;
  onClose: () => void;
}

export default function RegistrationModal({
  initialCompetition,
  onClose,
}: RegistrationModalProps) {
  const [selectedCompId, setSelectedCompId] = useState<string>(
    initialCompetition?.id || COMPETITIONS_DATA[0].id
  );
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State - Step 1
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');

  // Form State - Step 2: Kapten
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderWhatsapp, setLeaderWhatsapp] = useState('');
  const [leaderIdNumber, setLeaderIdNumber] = useState('');
  const [leaderGameId, setLeaderGameId] = useState('');

  // Form State - Step 2: Anggota
  const [members, setMembers] = useState<Array<{ name: string; email: string; phone: string; idNum: string; gameId: string }>>([
    { name: '', email: '', phone: '', idNum: '', gameId: '' },
  ]);

  // Form State - Step 3: Upeti & Pembayaran
  const [paymentMethod, setPaymentMethod] = useState<'bca' | 'mandiri' | 'qris'>('bca');
  const [paymentProofPreview, setPaymentProofPreview] = useState<string | null>(null);
  const [copiedBank, setCopiedBank] = useState(false);
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

  const copyText = (text: string, isCode = false) => {
    navigator.clipboard.writeText(text);
    if (isCode) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    }
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

  const validateStep1 = () => {
    if (!teamName.trim()) {
      setFormError('Mohon isi nama geng / nama tim Anda.');
      return false;
    }
    if (!institution.trim()) {
      setFormError('Mohon isi asal instansi / kampus / sekolah / kota.');
      return false;
    }
    setFormError(null);
    return true;
  };

  const validateStep2 = () => {
    if (!leaderName.trim()) {
      setFormError('Nama lengkap kapten tim wajib diisi.');
      return false;
    }
    if (!leaderWhatsapp.trim()) {
      setFormError('Nomor WhatsApp aktif kapten wajib diisi untuk koordinasi panitia.');
      return false;
    }
    if (!leaderEmail.trim() || !leaderEmail.includes('@')) {
      setFormError('Surat elektronik (email) kapten tidak valid.');
      return false;
    }
    if (isEsport && !leaderGameId.trim()) {
      setFormError('ID Game & In-Game Nickname kapten wajib diisi.');
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
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };

  const handleFinalSubmit = () => {
    if (!paymentProofPreview) {
      setFormError('Mohon unggah foto bukti transfer / setoran upeti terlebih dahulu.');
      return;
    }
    setFormError(null);

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `FRONTIER-${currentCompetition.id.toUpperCase()}-${randomDigits}`;
    setRegistrationCode(code);
    setStep(4);

    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#ca8a04', '#ea580c', '#fef08a', '#15803d', '#f97316'],
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-black/92 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl wanted-card rounded-2xl border-2 border-[#854d0e] shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Corner Brass Pins */}
        <div className="brass-pin pin-tl" />
        <div className="brass-pin pin-tr" />
        <div className="brass-pin pin-bl" />
        <div className="brass-pin pin-br" />

        {/* ── HEADER ── */}
        <div className="p-4 sm:p-5 border-b-2 border-[#5c3218] bg-[#1a0e07] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9a4a1b] to-[#381c0c] border border-[#d97706] flex items-center justify-center text-[#fde047] shadow-md shrink-0">
              <CowboyHatIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
                <span className="text-[10px] font-cowboy tracking-widest uppercase text-[#fde047]">
                  KONTRAK RESMI PENDAFTARAN POSSE • ISFEST 2027
                </span>
              </div>
              <h3 className="font-cowboy text-base sm:text-xl text-[#fef9c3] leading-tight">
                {step === 1 && 'Tahap 1: Pilih Arena & Identitas Geng'}
                {step === 2 && 'Tahap 2: Formasi Anggota Pasukan (Posse)'}
                {step === 3 && 'Tahap 3: Brankas Upeti & Pembayaran'}
                {step === 4 && 'Akta Kontrak Tim Resmi Diterbitkan'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg bg-[#3d200e] hover:bg-[#5c3218] text-[#fef08a] border border-[#854d0e] transition-colors cursor-pointer shrink-0"
            aria-label="Tutup pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── STEP INDICATOR ── */}
        {step < 4 && (
          <div className="bg-[#120803] px-4 py-2 border-b border-[#451a03]">
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-cowboy">
              <div className={`py-1 rounded border transition-colors ${
                step >= 1 ? 'bg-[#381c0c] text-[#fde047] border-[#ca8a04]' : 'text-[#783e1c] border-transparent'
              }`}>
                1. ARENA & TIM
              </div>
              <div className={`py-1 rounded border transition-colors ${
                step >= 2 ? 'bg-[#381c0c] text-[#fde047] border-[#ca8a04]' : 'text-[#783e1c] border-transparent'
              }`}>
                2. ANGGOTA
              </div>
              <div className={`py-1 rounded border transition-colors ${
                step >= 3 ? 'bg-[#381c0c] text-[#fde047] border-[#ca8a04]' : 'text-[#783e1c] border-transparent'
              }`}>
                3. UPETI SETOR
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-[#200f06] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#ca8a04] via-[#f59e0b] to-[#ca8a04] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ── ERROR ALERT ── */}
        {formError && (
          <div className="mx-4 mt-3 p-3 rounded-lg bg-rose-950/70 border border-rose-600/70 flex items-center gap-2 text-xs text-rose-200 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* ── FORM BODY ── */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm bg-[#160c06]">

          {/* ═══════════════ STEP 1: ARENA & TIM ═══════════════ */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block font-cowboy text-xs text-[#fde047] tracking-wider">
                    PILIH 1 DARI 4 ARENA DUEL RESMI:
                  </label>
                  <span className="text-[10px] text-[#caa27d]">
                    {currentCompetition.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {COMPETITIONS_DATA.map((c) => {
                    const isSelected = selectedCompId === c.id;
                    const cActiveWave = c.waves.find((w) => w.status === 'active') || c.waves[0];

                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setSelectedCompId(c.id);
                          setFormError(null);
                        }}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? 'bg-gradient-to-b from-[#3d1e0c] to-[#241107] border-[#fde047] shadow-[0_0_12px_rgba(253,224,71,0.2)]'
                            : 'bg-[#1a0e07] border-[#4a2610] hover:border-[#854d0e]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#2a1408] border border-[#783e1c] flex items-center justify-center text-[#f6c085] shrink-0">
                              <CompetitionIcon name={c.iconName} className="w-4 h-4 text-[#d97706]" />
                            </div>
                            <div>
                              <div className="font-cowboy text-xs text-[#fef9c3] leading-snug">{c.title}</div>
                              <div className="text-[10px] text-[#caa27d]">{c.themeBadge}</div>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-[#fde047] text-black flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#381c0c]">
                          <span className="text-[#a67c52]">{c.members}</span>
                          <span className="font-cowboy text-[#fef08a]">{cActiveWave.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price & Eligibility Card */}
              <div className="p-3.5 rounded-xl wood-board border border-[#ca8a04] bg-gradient-to-r from-[#201007] to-[#140a04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#eed9b3]">
                    <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
                    <span>Upeti ({activeWave.name}):</span>
                  </div>
                  <div className="font-cowboy text-2xl text-[#fef08a] my-0.5">
                    {activeWave.price} <span className="text-xs text-[#eed9b3] font-sans">/tim</span>
                  </div>
                  <div className="text-[10px] text-[#caa27d]">
                    Prizepool: <strong className="text-[#fde047]">{currentCompetition.prizepool}</strong>
                  </div>
                </div>
                <div className="text-left sm:text-right text-[11px] text-[#caa27d] border-t sm:border-t-0 pt-2 sm:pt-0 border-[#381c0c]">
                  <div>Anggota: <span className="text-[#fef3c7] font-semibold">{currentCompetition.members}</span></div>
                  <div className="text-[10px] text-[#a67c52] max-w-xs">{currentCompetition.eligibility}</div>
                </div>
              </div>

              {/* Team Identifiers */}
              <div className="space-y-3.5 pt-1">
                <div>
                  <label className="block font-cowboy text-xs text-[#fde047] mb-1.5 tracking-wider">
                    NAMA GENG / NAMA TIM (POSSE) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Red Canyon Outlaws / Frontier Squad UMN"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl wood-board text-[#fef9c3] placeholder-[#8a6543] border border-[#6b4423] focus:outline-none focus:border-[#ca8a04] text-xs"
                  />
                </div>

                <div>
                  <label className="block font-cowboy text-xs text-[#fde047] mb-1.5 tracking-wider flex items-center justify-between">
                    <span>ASAL INSTANSI / KAMPUS / SEKOLAH / KOTA <span className="text-rose-400">*</span></span>
                    <Building2 className="w-3.5 h-3.5 text-[#ca8a04]" />
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Universitas Multimedia Nusantara / Tangerang"
                    value={institution}
                    onChange={(e) => {
                      setInstitution(e.target.value);
                      if (formError) setFormError(null);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl wood-board text-[#fef9c3] placeholder-[#8a6543] border border-[#6b4423] focus:outline-none focus:border-[#ca8a04] text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ STEP 2: ANGGOTA POSSE ═══════════════ */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Leader (Bos Geng) Card */}
              <div className="p-4 rounded-xl wood-board border-2 border-[#ca8a04] space-y-3 relative">
                <div className="flex items-center justify-between border-b border-[#4a2610] pb-2">
                  <div className="font-cowboy text-xs text-[#fde047] tracking-wider uppercase flex items-center gap-1.5">
                    <SheriffBadgeIcon className="w-4 h-4 text-[#d97706]" />
                    <span>KAPTEN / BOS GENG (PENANGGUNG JAWAB)</span>
                  </div>
                  <span className="text-[10px] font-cowboy px-2 py-0.5 rounded bg-[#451a03] text-[#fef08a] border border-[#ca8a04]/50">
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
                      placeholder="Nama lengkap bos tim"
                      value={leaderName}
                      onChange={(e) => setLeaderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
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
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#caa27d] mb-1 font-semibold">
                      Alamat Email Aktif <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="kapten@posse.com"
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
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
                      className="w-full px-3 py-2 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
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
                      className="inline-flex items-center gap-1 text-xs font-cowboy text-[#fde047] hover:text-[#fef08a] px-2.5 py-1 rounded bg-[#381c0c] border border-[#783e1c] cursor-pointer"
                    >
                      <span>+ Tambah Anggota</span>
                    </button>
                  )}
                </div>

                {members.map((member, index) => (
                  <div key={index} className="p-3.5 rounded-xl wood-board border border-[#6b4423] space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#381c0c] pb-1.5">
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
                          className="w-full px-3 py-1.5 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-[#caa27d] mb-0.5">
                          {isEsport ? 'In-Game Nickname / ID' : 'NIM / NISN'}
                        </label>
                        <input
                          type="text"
                          placeholder={isEsport ? 'ID / Nickname Game' : 'NIM / NISN'}
                          value={isEsport ? member.gameId : member.idNum}
                          onChange={(e) => updateMember(index, isEsport ? 'gameId' : 'idNum', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#0e0703] text-white border border-[#5c3218] text-xs focus:border-[#ca8a04] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════ STEP 3: UPETI SETOR & PEMBAYARAN ═══════════════ */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Summary Card */}
              <div className="p-4 rounded-xl wood-board border border-[#ca8a04] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#caa27d]">Upeti Registrasi ({currentCompetition.title}):</div>
                  <div className="font-cowboy text-2xl text-[#fef08a]">{activeWave.price}</div>
                  <div className="text-[10px] text-[#eed9b3]">{teamName} • {institution}</div>
                </div>
                <div className="px-3 py-1.5 rounded bg-[#ca8a04]/20 border border-[#ca8a04] text-[#fef08a] font-cowboy text-xs text-right">
                  <div>WAVE 1</div>
                  <div className="text-[9px] text-[#ca8a04] font-sans">EARLY BIRD</div>
                </div>
              </div>

              {/* Vault Selector */}
              <div>
                <label className="block font-cowboy text-xs text-[#fde047] mb-2">
                  PILIH BRANKAS TUJUAN TRANSFER:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'bca', label: 'BCA', sub: 'Transfer Bank' },
                    { id: 'mandiri', label: 'MANDIRI', sub: 'Transfer Bank' },
                    { id: 'qris', label: 'QRIS', sub: 'Semua E-Wallet' },
                  ].map((vault) => (
                    <button
                      key={vault.id}
                      type="button"
                      onClick={() => setPaymentMethod(vault.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        paymentMethod === vault.id
                          ? 'bg-[#78350f] border-[#fde047] text-white shadow-md'
                          : 'bg-[#1a0e07] border-[#4a2610] text-[#c29b75] hover:border-[#783e1c]'
                      }`}
                    >
                      <div className="font-cowboy text-xs sm:text-sm text-[#fef08a]">{vault.label}</div>
                      <div className="text-[9px] text-[#caa27d]">{vault.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bank Account Details */}
              <div className="p-4 rounded-xl bg-[#0e0703] border border-[#5c3218]">
                {paymentMethod === 'bca' && (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-[#caa27d]">Bank Central Asia (BCA) - Panitia ISFEST</div>
                      <div className="font-cowboy text-lg text-[#fef08a] tracking-wider my-0.5">
                        8831 2940 1920
                      </div>
                      <div className="text-[11px] text-[#eed9b3]">a.n. HIMSI UNIVERSITAS MULTIMEDIA NUSANTARA</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText('883129401920')}
                      className="px-3.5 py-2 rounded-lg bg-[#3d200e] hover:bg-[#542d14] text-xs font-cowboy text-[#fde047] flex items-center gap-1.5 border border-[#854d0e] cursor-pointer"
                    >
                      {copiedBank ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBank ? 'Tersalin' : 'Salin Rekening'}</span>
                    </button>
                  </div>
                )}

                {paymentMethod === 'mandiri' && (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-[#caa27d]">Bank Mandiri - Panitia ISFEST</div>
                      <div className="font-cowboy text-lg text-[#fef08a] tracking-wider my-0.5">
                        1640 0029 8831 0
                      </div>
                      <div className="text-[11px] text-[#eed9b3]">a.n. HIMSI UNIVERSITAS MULTIMEDIA NUSANTARA</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText('1640002988310')}
                      className="px-3.5 py-2 rounded-lg bg-[#3d200e] hover:bg-[#542d14] text-xs font-cowboy text-[#fde047] flex items-center gap-1.5 border border-[#854d0e] cursor-pointer"
                    >
                      {copiedBank ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBank ? 'Tersalin' : 'Salin Rekening'}</span>
                    </button>
                  </div>
                )}

                {paymentMethod === 'qris' && (
                  <div className="text-center py-2">
                    <div className="w-32 h-32 mx-auto bg-white p-2 rounded-lg flex items-center justify-center mb-2 shadow-lg">
                      <QrCode className="w-28 h-28 text-black" />
                    </div>
                    <div className="font-cowboy text-xs text-[#fde047]">NMID: ID102938475620ISFEST</div>
                    <div className="text-[10px] text-[#caa27d]">Mendukung BCA, Mandiri, GoPay, OVO, Dana, ShopeePay</div>
                  </div>
                )}
              </div>

              {/* Upload Proof */}
              <div>
                <label className="block font-cowboy text-xs text-[#fde047] mb-2 flex items-center justify-between">
                  <span>UNGGAH BUKTI TRANSFER / RESI SETORAN <span className="text-rose-400">*</span></span>
                  <span className="text-[10px] text-[#a67c52]">Maks. 5 MB (JPG/PNG)</span>
                </label>

                <div className="border-2 border-dashed border-[#854d0e] rounded-xl p-4 text-center bg-[#0e0703] transition-colors hover:border-[#ca8a04]">
                  {paymentProofPreview ? (
                    <div className="space-y-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={paymentProofPreview}
                        alt="Preview Bukti Setoran"
                        className="max-h-40 mx-auto rounded object-contain border border-[#5c3218] shadow-md"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Bukti transfer berhasil dipilih!</span>
                      </div>
                      <label className="text-xs text-[#fde047] hover:underline cursor-pointer inline-block">
                        Ganti Foto
                        <input type="file" accept="image/*" onChange={handleProofChange} className="hidden" />
                      </label>
                    </div>
                  ) : (
                    <label className="cursor-pointer block py-3">
                      <Upload className="w-8 h-8 text-[#ca8a04] mx-auto mb-2 animate-bounce" />
                      <span className="block font-cowboy text-xs text-[#fef9c3] mb-1">
                        KLIK UNTUK MEMILIH GAMBAR RESI
                      </span>
                      <span className="block text-[10px] text-[#a67c52]">
                        Pastikan tanggal dan nominal transfer terlihat jelas
                      </span>
                      <input type="file" accept="image/*" onChange={handleProofChange} className="hidden" />
                    </label>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════ STEP 4: KONTRAK SAH (SELESAI) ═══════════════ */}
          {step === 4 && (
            <div className="text-center space-y-4 py-3 animate-in zoom-in-95 duration-200">
              <div className="flex justify-center">
                <SheriffStarLarge className="w-20 h-20 drop-shadow-[0_0_20px_rgba(202,138,4,0.6)]" />
              </div>

              <div>
                <span className="cowboy-stamp text-[10px] tracking-widest text-[#fde047] px-3 py-1 rounded inline-block mb-1">
                  SELESAI • TERVERIFIKASI
                </span>
                <h4 className="font-cowboy text-2xl sm:text-3xl text-[#fef9c3] mb-1">
                  KONTRAK POSSE SAH!
                </h4>
                <p className="text-xs text-[#eed9b3] max-w-md mx-auto">
                  Geng Anda resmi terdaftar pada arena perlombaan{' '}
                  <span className="font-bold text-[#fde047]">{currentCompetition.title}</span>.
                </p>
              </div>

              {/* Certificate / Ticket Card */}
              <div className="p-5 rounded-xl wanted-card max-w-md mx-auto border-2 border-[#ca8a04] shadow-2xl relative text-left">
                <div className="brass-pin pin-tl" />
                <div className="brass-pin pin-tr" />
                <div className="brass-pin pin-bl" />
                <div className="brass-pin pin-br" />

                <div className="rope-border p-3.5 bg-[#120803]/90 rounded-lg">
                  <div className="flex items-center justify-between border-b border-[#381c0c] pb-2 mb-2">
                    <span className="font-cowboy text-[10px] text-[#fde047] uppercase tracking-wider">
                      LENCANA KONTRAK POSSE
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Terdaftar</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3 bg-[#0a0502] p-2 rounded border border-[#3a1d0c]">
                    <span className="font-cowboy text-xl text-[#fef08a] tracking-wider">
                      {registrationCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(registrationCode, true)}
                      className="px-2.5 py-1 rounded bg-[#2a1408] text-[10px] text-[#fde047] flex items-center gap-1 border border-[#783e1c]"
                    >
                      {copiedCode ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Disalin' : 'Salin'}</span>
                    </button>
                  </div>

                  <div className="space-y-1 text-xs text-[#eed9b3]">
                    <div><strong className="text-[#caa27d]">Nama Tim:</strong> {teamName || 'Frontier Squad'}</div>
                    <div><strong className="text-[#caa27d]">Kapten:</strong> {leaderName || 'Bos Geng'} ({leaderWhatsapp})</div>
                    <div><strong className="text-[#caa27d]">Asal Instansi:</strong> {institution}</div>
                    <div><strong className="text-[#caa27d]">Cabang:</strong> {currentCompetition.title}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 max-w-sm mx-auto pt-2">
                <a
                  href={`https://wa.me/6282110683255?text=Halo%20Marsekal%20Panitia%20ISFEST%202027,%20saya%20sudah%20mendaftar%20dengan%20Kode%20${registrationCode}%20untuk%20tim%20${encodeURIComponent(teamName)}%20pada%20cabang%20${encodeURIComponent(currentCompetition.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-cowboy tracking-wider text-[#fff4e0] bg-gradient-to-b from-[#15803d] to-[#14532d] hover:from-[#16a34a] hover:to-[#166534] border border-[#86efac] shadow-lg cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#86efac]" />
                  <span>KONFIRMASI KE TELEGRAF WA PANITIA</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl text-xs font-cowboy tracking-wider text-[#eed9b3] hover:text-white bg-[#2a1307] hover:bg-[#3d200e] border border-[#6b4423] cursor-pointer"
                >
                  TUTUP & KEMBALI
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── FOOTER CONTROLS ── */}
        {step < 4 && (
          <div className="p-3.5 sm:p-4 border-t-2 border-[#5c3218] bg-[#140b05] flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setFormError(null);
                  setStep((step - 1) as any);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#eed9b3] hover:text-white bg-[#2a1307] hover:bg-[#3d200e] border border-[#6b4423] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fff4e0] btn-leather cursor-pointer shadow-md"
              >
                <span>Lanjut</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-cowboy text-xs sm:text-sm tracking-wider text-[#fff4e0] bg-gradient-to-b from-[#15803d] to-[#14532d] hover:from-[#16a34a] hover:to-[#166534] border border-[#86efac] shadow-lg cursor-pointer"
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
