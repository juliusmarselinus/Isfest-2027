'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Trophy, ArrowRight, Clock, Scroll, Award, Users } from 'lucide-react';
import { CowboyHatIcon, SheriffBadgeIcon } from './WesternSvg';
import { 
  SheriffStarLarge, 
  CowboyHatLarge, 
  BarbedWireDivider, 
  TumbleweedSvg, 
  NightSkyDecor,
  WantedPosterOrnament,
  GallopingHorseSvg,
  SheriffStarPlaque,
} from './WesternAssets';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreRouteClick?: () => void;
}

export default function HeroSection({ onRegisterClick, onExploreRouteClick }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-07-12T23:59:59+07:00').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToRoute = () => {
    if (onExploreRouteClick) {
      onExploreRouteClick();
    } else {
      const el = document.getElementById('linimasa');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #120904 0%, #1c0f08 25%, #2a150b 55%, #3d1e0d 80%, #201108 100%)' }}
    >
      {/* ── NIGHT SKY WITH STARS ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <NightSkyDecor className="w-full opacity-70" />
      </div>

      {/* ── STARFIELD (radial dots) ── */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fde047 1px, transparent 1px), radial-gradient(#fde047 1px, transparent 1px)',
          backgroundSize: '48px 48px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* ── WARM SUNSET GLOW ── */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(194,94,56,0.22) 0%, rgba(217,119,6,0.12) 50%, transparent 80%)' }}
      />

      {/* ── HORIZON LINE GLOW ── */}
      <div className="absolute bottom-[220px] left-0 right-0 h-[2px] opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #ca8a04 20%, #fde047 50%, #ca8a04 80%, transparent)' }}
      />

      {/* ── DETAILED CANYON SVG LANDSCAPE ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Far-back mountain range */}
          <path
            d="M0 320V210L60 190L140 220L230 165L340 200L450 150L560 185L670 140L790 175L900 130L1010 170L1120 125L1240 165L1340 140L1440 160V320H0Z"
            fill="#0a0502"
            opacity="0.9"
          />
          {/* Mid mesa / buttes */}
          <path
            d="M0 320V240L50 235L100 245H180L200 220L240 220L260 245H350L380 215L440 215L460 245H560L600 225L700 230H760L810 200L880 200L900 230H960L1010 218L1080 220L1100 240H1180L1220 220L1300 225L1320 240H1380L1440 230V320H0Z"
            fill="#110904"
          />
          {/* Foreground near-ground dunes */}
          <path
            d="M0 320V280C120 268 280 274 440 266C600 258 760 270 920 262C1080 254 1240 268 1440 258V320H0Z"
            fill="#0d0703"
          />
          {/* Ground floor */}
          <path
            d="M0 320V295C200 285 400 292 600 288C800 284 1000 292 1200 286C1320 282 1380 290 1440 288V320H0Z"
            fill="#0a0602"
          />

          {/* ── LARGE LEFT SAGUARO CACTUS ── */}
          <g opacity="0.85">
            <path d="M120 295V190Q120 178 128 178Q136 178 136 190V295Z" fill="#0e1a0e" />
            <path d="M120 220Q96 220 92 206Q88 192 100 192Q108 192 108 200L108 238" fill="#0e1a0e" />
            <path d="M108 238V220" stroke="#0e1a0e" strokeWidth="8" />
            <path d="M136 212Q160 212 164 198Q168 184 156 184Q148 184 148 192L148 234" fill="#0e1a0e" />
            <path d="M148 234V212" stroke="#0e1a0e" strokeWidth="8" />
            <line x1="120" y1="200" x2="114" y2="197" stroke="#ca8a04" strokeWidth="1" opacity="0.6" />
            <line x1="120" y1="215" x2="114" y2="212" stroke="#ca8a04" strokeWidth="1" opacity="0.5" />
            <line x1="136" y1="205" x2="142" y2="202" stroke="#ca8a04" strokeWidth="1" opacity="0.6" />
            <line x1="136" y1="230" x2="142" y2="227" stroke="#ca8a04" strokeWidth="1" opacity="0.5" />
            <circle cx="128" cy="176" r="5" fill="#d97706" opacity="0.8" />
            <circle cx="128" cy="176" r="2.5" fill="#fde047" opacity="0.9" />
          </g>

          {/* ── SMALL RIGHT CACTUS ── */}
          <g opacity="0.75">
            <path d="M1300 295V230Q1300 222 1307 222Q1314 222 1314 230V295Z" fill="#0e1a0e" />
            <path d="M1300 250Q1286 250 1284 242Q1282 234 1290 234Q1295 234 1295 240L1295 258" fill="#0e1a0e" />
            <path d="M1314 244Q1328 244 1330 236Q1332 228 1324 228Q1319 228 1319 234L1319 260" fill="#0e1a0e" />
            <circle cx="1307" cy="220" r="4" fill="#d97706" opacity="0.7" />
          </g>

          {/* ── ROCK FORMATION LEFT ── */}
          <path
            d="M0 295L40 268L70 275L100 258L140 270L170 265L200 280L230 272L260 285L260 295Z"
            fill="#180f07"
          />

          {/* ── ROCK FORMATION RIGHT ── */}
          <path
            d="M1180 295L1210 272L1250 282L1280 265L1320 278L1360 268L1400 280L1440 272V295Z"
            fill="#180f07"
          />

          {/* ── DISTANT HORSEMAN SILHOUETTE ── */}
          <g opacity="0.4" transform="translate(680, 198)">
            <ellipse cx="0" cy="20" rx="22" ry="10" fill="#0a0502" />
            <line x1="-14" y1="28" x2="-16" y2="44" stroke="#0a0502" strokeWidth="3" />
            <line x1="-6" y1="29" x2="-7" y2="44" stroke="#0a0502" strokeWidth="3" />
            <line x1="6" y1="29" x2="7" y2="44" stroke="#0a0502" strokeWidth="3" />
            <line x1="14" y1="28" x2="17" y2="44" stroke="#0a0502" strokeWidth="3" />
            <path d="M12 14 Q16 8 18 4 Q22 0 24 2 Q22 6 20 8 Q22 10 18 14Z" fill="#0a0502" />
            <path d="M-20 18 Q-28 16 -30 20 Q-28 24 -22 24" stroke="#0a0502" strokeWidth="2" fill="none" />
            <ellipse cx="2" cy="6" rx="6" ry="8" fill="#0a0502" />
            <path d="M-2 0 Q2 -6 6 0" fill="#0a0502" stroke="#0a0502" strokeWidth="1" />
            <line x1="-4" y1="0" x2="8" y2="0" stroke="#0a0502" strokeWidth="2" />
          </g>

          {/* ── TRAIN TRACK RAILS ON GROUND ── */}
          <line x1="0" y1="300" x2="1440" y2="300" stroke="#2c1a09" strokeWidth="2" opacity="0.5" />
          <line x1="0" y1="308" x2="1440" y2="308" stroke="#2c1a09" strokeWidth="2" opacity="0.5" />
          {Array.from({ length: 36 }, (_, i) => (
            <line key={i} x1={i * 40} y1="298" x2={i * 40} y2="310" stroke="#2c1a09" strokeWidth="3" opacity="0.4" />
          ))}
        </svg>
      </div>

      {/* ── TUMBLEWEED DECORATIONS ── */}
      <div className="absolute bottom-[200px] left-[8%] pointer-events-none opacity-30">
        <TumbleweedSvg className="w-12 h-12" />
      </div>
      <div className="absolute bottom-[220px] right-[12%] pointer-events-none opacity-20">
        <TumbleweedSvg className="w-8 h-8" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full pb-[200px]">

        {/* Top Sheriff Badge Row */}
        <div className="mb-5 flex flex-col items-center gap-3">
          <SheriffStarLarge className="w-16 h-16 drop-shadow-[0_0_16px_rgba(202,138,4,0.5)]" />
          <div className="cowboy-stamp text-[11px] sm:text-xs font-semibold tracking-widest px-4 py-1.5 rounded-sm flex items-center gap-2">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#d97706]" />
            <span>PINTU GERBANG UTAMA • ISFEST UMN 2027</span>
          </div>
        </div>

        {/* Decorative top ornament */}
        <WantedPosterOrnament className="w-full max-w-sm mx-auto mb-4 opacity-60" />

        {/* Large Hero Hat */}
        <div className="flex justify-center mb-3">
          <CowboyHatLarge className="w-28 h-20 drop-shadow-[0_8px_24px_rgba(202,138,4,0.35)]" />
        </div>

        {/* Title & Flanking Horses */}
        <div className="mb-5 relative">
          <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 opacity-75">
            <GallopingHorseSvg className="w-24 h-16 text-[#ca8a04]" />
          </div>
          <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 opacity-75 scale-x-[-1]">
            <GallopingHorseSvg className="w-24 h-16 text-[#ca8a04]" />
          </div>

          <span className="block text-xs sm:text-sm font-cowboy tracking-[0.3em] text-[#d97706] uppercase mb-2">
            THE WILD WEST DIGITAL FRONTIER
          </span>
          <h1 className="font-cowboy text-5xl sm:text-7xl lg:text-8xl tracking-wide text-[#fef3c7] leading-none"
            style={{ textShadow: '0 0 60px rgba(202,138,4,0.3), 0 4px 24px rgba(0,0,0,0.9)' }}
          >
            ISFEST
          </h1>
          <div className="font-cowboy text-3xl sm:text-5xl lg:text-6xl tracking-widest text-[#fde047] mt-1"
            style={{ textShadow: '0 0 40px rgba(253,224,71,0.4)' }}
          >
            2027
          </div>
          <p className="font-cowboy text-lg sm:text-2xl text-[#f6c085] mt-2 tracking-wider">
            SHOWDOWN IN THE DIGITAL DESERT
          </p>
        </div>

        {/* Bottom ornament */}
        <WantedPosterOrnament className="w-full max-w-sm mx-auto mb-6 opacity-60" />

        {/* Description */}
        <p className="text-[#d8be9b] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Selamat datang di gerbang perbatasan festival sistem informasi terbesar Universitas Multimedia Nusantara.
          Persiapkan possemu untuk bertarung di 4 cabang perlombaan bergengsi: UI/UX Cartographer,
          Data Mining Prospector, Mobile Legends Posse, dan Valorant High Noon Showdown.
        </p>

        {/* Bounty Board Box: Total Hadiah Rp 21 Juta+ */}
        <div className="relative max-w-lg mx-auto mb-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <span className="font-cowboy text-[10px] tracking-widest bg-[#451a03] border border-[#ca8a04] text-[#fde047] px-4 py-1 rounded-sm shadow-lg">
              BOUNTY BOARD RESMI
            </span>
          </div>
          <div className="p-5 rounded-xl border-2 border-[#783e1c] shadow-2xl"
            style={{ background: 'linear-gradient(180deg, #2a180e 0%, #1a0e07 100%)' }}
          >
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />
            <div className="rope-border p-4 text-center bg-[#150a04]/80 rounded-lg">
              <span className="text-[11px] font-cowboy tracking-widest text-[#f6c085] uppercase block mb-1">
                TOTAL DANA PEMBINAAN
              </span>
              <div className="font-cowboy text-4xl sm:text-5xl text-[#fef3c7] tracking-wider my-1"
                style={{ textShadow: '0 0 30px rgba(253,224,71,0.3)' }}
              >
                RP 21.000.000+
              </div>
              <span className="text-[11px] text-[#c29b75] uppercase tracking-wider font-semibold">
                Trofi Penghargaan • Piagam Nasional UMN • Saldo Pembinaan
              </span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto mb-8 p-4 rounded-xl border border-[#5a3014]"
          style={{ background: 'linear-gradient(180deg, #1a0f08 0%, #120b06 100%)' }}
        >
          <div className="flex items-center justify-center gap-2 text-[#f6c085] font-cowboy text-[11px] tracking-widest uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-[#d97706]" />
            <span>WAVE 1 (EARLY BIRD) BERAKHIR: 12 JULI 2027</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { val: timeLeft.days, label: 'Hari' },
              { val: timeLeft.hours, label: 'Jam' },
              { val: timeLeft.minutes, label: 'Menit' },
              { val: timeLeft.seconds, label: 'Detik', red: true },
            ].map(({ val, label, red }) => (
              <div key={label} className="rounded-lg p-2.5 border border-[#451e0b]"
                style={{ background: 'linear-gradient(180deg, #150b05 0%, #0a0502 100%)' }}
              >
                <span className={`block text-2xl font-cowboy ${red ? 'text-[#f87171]' : 'text-[#fef08a]'}`}
                  style={!red ? { textShadow: '0 0 10px rgba(254,240,138,0.4)' } : {}}
                >
                  {String(val).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#a67c52]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Links to /lomba for Sayembara, and button for Register */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <Link
            href="/lomba"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-cowboy text-sm text-[#fff4e0] btn-leather cursor-pointer shadow-lg hover:scale-[1.02] transition-transform"
          >
            <Scroll className="w-4 h-4 text-[#fde047]" />
            <span>BUKA PAPAN SAYEMBARA (4 LOMBA)</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-cowboy text-sm text-[#fef3c7] border-2 border-[#783e1c] hover:border-[#d97706] transition-all cursor-pointer"
            style={{ background: 'linear-gradient(180deg, #2a1408 0%, #1a0d06 100%)' }}
          >
            <CowboyHatIcon className="w-4 h-4 text-[#d97706]" />
            <span>KONTRAK REKRUT POSSE</span>
          </button>
        </div>

        {/* 4 Feature Highlights reflecting the 4 competitions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left mb-8">
          {[
            { icon: <CowboyHatIcon className="w-5 h-5 text-[#d97706]" />, title: '4 Cabang Lomba', sub: '2 Akademik & 2 E-Sports' },
            { icon: <Trophy className="w-5 h-5 text-[#d97706]" />, title: 'Rp 21 Juta+', sub: 'Dana Pembinaan Juara' },
            { icon: <Award className="w-5 h-5 text-[#d97706]" />, title: 'Piagam UMN', sub: 'Predikat Tingkat Nasional' },
            { icon: <Users className="w-5 h-5 text-[#d97706]" />, title: 'Ratusan Geng', sub: 'Mahasiswa & Umum' },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="p-3.5 rounded-xl border border-[#5a3014]"
              style={{ background: 'linear-gradient(180deg, #1e1108 0%, #120b06 100%)' }}
            >
              <div className="mb-2">{icon}</div>
              <div className="font-cowboy text-xs text-[#fef08a] leading-tight">{title}</div>
              <div className="text-[10px] text-[#caa27d] mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator down to Rute Ekspedisi (Timeline on Home page) */}
        <div className="flex justify-center">
          <button
            onClick={handleScrollToRoute}
            className="flex flex-col items-center gap-1.5 text-[#caa27d] hover:text-[#fde047] transition-colors cursor-pointer group"
          >
            <span className="text-[10px] font-cowboy tracking-widest uppercase">TELUSURI RUTE EKSPEDISI</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#fde047]" />
          </button>
        </div>
      </div>

      {/* ── BOTTOM BARBED WIRE ── */}
      <div className="absolute bottom-[185px] left-0 right-0 pointer-events-none z-20">
        <BarbedWireDivider className="opacity-40" />
      </div>
    </section>
  );
}
