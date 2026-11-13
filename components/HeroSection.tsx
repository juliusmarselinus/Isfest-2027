'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Trophy, ArrowRight, Clock, Scroll, Award, Users } from 'lucide-react';
import { CowboyHatIcon, SheriffBadgeIcon } from './WesternSvg';
import { 
  BarbedWireDivider, 
  TumbleweedSvg, 
  GallopingHorseSvg,
  RetroCowboyBadge,
  SouthwesternStarBand,
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden bg-canyon-twilight"
    >
      {/* ── BRIGHT DAY SKY GRADIENT OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #87c5e8 0%, #d4a76a 40%, #c0783c 70%, #9e5223 100%)',
        }}
      />

      {/* ── BRIGHT SUN GLOW ── */}
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,230,140,0.7) 0%, rgba(240,180,80,0.4) 50%, transparent 80%)' }}
      />

      {/* ── WESTERN CLOUDS SVG ── */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none z-[1]">
        <svg
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            {/* Gradient for main white cloud body */}
            <radialGradient id="cg1" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f0f4f8" />
              <stop offset="100%" stopColor="#dce8ef" />
            </radialGradient>
            <radialGradient id="cg2" cx="40%" cy="25%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#eef3f8" />
              <stop offset="100%" stopColor="#d8e6ef" />
            </radialGradient>
            <radialGradient id="cg3" cx="55%" cy="30%" r="58%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="68%" stopColor="#f2f6fa" />
              <stop offset="100%" stopColor="#ddeaf3" />
            </radialGradient>
            {/* Lobe highlight gradients */}
            <radialGradient id="lobe1" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e8eff6" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="lobe2" cx="45%" cy="25%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ddeaf4" stopOpacity="0.75" />
            </radialGradient>
            {/* Shadow / underside */}
            <linearGradient id="underside" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8dce8" stopOpacity="0" />
              <stop offset="100%" stopColor="#adc8d8" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* ── CLOUD A (Left large fluffy) ── */}
          <g opacity="0.95">
            {/* Underside shadow */}
            <ellipse cx="155" cy="118" rx="130" ry="16" fill="url(#underside)" opacity="0.5" />
            {/* Base body */}
            <ellipse cx="155" cy="105" rx="130" ry="38" fill="url(#cg1)" />
            {/* Lobe far-left */}
            <circle cx="52" cy="96" r="34" fill="url(#lobe1)" />
            {/* Lobe left */}
            <circle cx="90" cy="80" r="42" fill="url(#lobe1)" />
            {/* Lobe center-left */}
            <circle cx="130" cy="70" r="46" fill="url(#lobe2)" />
            {/* Lobe center peak */}
            <circle cx="168" cy="62" r="50" fill="url(#lobe1)" />
            {/* Lobe right */}
            <circle cx="210" cy="74" r="40" fill="url(#lobe2)" />
            {/* Lobe far-right */}
            <circle cx="248" cy="88" r="34" fill="url(#lobe1)" />
            {/* Tail right */}
            <ellipse cx="275" cy="104" rx="28" ry="18" fill="url(#cg1)" />
            {/* Fill gaps at base */}
            <rect x="52" y="92" width="230" height="30" rx="12" fill="url(#cg1)" />
          </g>

          {/* ── CLOUD B (Right large fluffy) ── */}
          <g opacity="0.90">
            <ellipse cx="1300" cy="100" rx="115" ry="30" fill="url(#underside)" opacity="0.5" />
            <ellipse cx="1300" cy="90" rx="112" ry="34" fill="url(#cg2)" />
            <circle cx="1208" cy="84" r="30" fill="url(#lobe2)" />
            <circle cx="1244" cy="68" r="40" fill="url(#lobe1)" />
            <circle cx="1282" cy="58" r="46" fill="url(#lobe2)" />
            <circle cx="1318" cy="62" r="42" fill="url(#lobe1)" />
            <circle cx="1354" cy="72" r="36" fill="url(#lobe2)" />
            <circle cx="1385" cy="85" r="28" fill="url(#lobe1)" />
            <rect x="1208" y="80" width="195" height="26" rx="10" fill="url(#cg2)" />
          </g>

          {/* ── CLOUD C (Center-left medium) ── */}
          <g opacity="0.78">
            <ellipse cx="460" cy="68" rx="80" ry="22" fill="url(#underside)" opacity="0.4" />
            <ellipse cx="460" cy="58" rx="78" ry="26" fill="url(#cg3)" />
            <circle cx="398" cy="52" r="24" fill="url(#lobe1)" />
            <circle cx="430" cy="40" r="32" fill="url(#lobe2)" />
            <circle cx="464" cy="34" r="36" fill="url(#lobe1)" />
            <circle cx="497" cy="40" r="30" fill="url(#lobe2)" />
            <circle cx="525" cy="51" r="23" fill="url(#lobe1)" />
            <rect x="398" y="50" width="140" height="22" rx="8" fill="url(#cg3)" />
          </g>

          {/* ── CLOUD D (Center-right small) ── */}
          <g opacity="0.72">
            <ellipse cx="990" cy="58" rx="70" ry="19" fill="url(#underside)" opacity="0.4" />
            <ellipse cx="990" cy="50" rx="68" ry="24" fill="url(#cg1)" />
            <circle cx="935" cy="44" r="22" fill="url(#lobe1)" />
            <circle cx="963" cy="33" r="30" fill="url(#lobe2)" />
            <circle cx="994" cy="27" r="34" fill="url(#lobe1)" />
            <circle cx="1024" cy="34" r="28" fill="url(#lobe2)" />
            <circle cx="1050" cy="44" r="22" fill="url(#lobe1)" />
            <rect x="935" y="42" width="130" height="20" rx="8" fill="url(#cg1)" />
          </g>

          {/* ── CLOUD E (Far center tiny wisp) ── */}
          <g opacity="0.58">
            <ellipse cx="700" cy="38" rx="52" ry="16" fill="url(#cg2)" />
            <circle cx="662" cy="33" r="18" fill="url(#lobe1)" />
            <circle cx="688" cy="25" r="24" fill="url(#lobe2)" />
            <circle cx="714" cy="22" r="26" fill="url(#lobe1)" />
            <circle cx="738" cy="28" r="20" fill="url(#lobe2)" />
            <rect x="662" y="30" width="90" height="14" rx="6" fill="url(#cg2)" />
          </g>
        </svg>
      </div>

      {/* ── DETAILED CANYON SVG LANDSCAPE (Day Colors) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Far-back canyon ridge (Warm Terracotta Mesa) */}
          <path
            d="M0 320V210L60 190L140 220L230 165L340 200L450 150L560 185L670 140L790 175L900 130L1010 170L1120 125L1240 165L1340 140L1440 160V320H0Z"
            fill="#c26b30"
            opacity="0.9"
          />
          {/* Mid canyon buttes */}
          <path
            d="M0 320V240L50 235L100 245H180L200 220L240 220L260 245H350L380 215L440 215L460 245H560L600 225L700 230H760L810 200L880 200L900 230H960L1010 218L1080 220L1100 240H1180L1220 220L1300 225L1320 240H1380L1440 230V320H0Z"
            fill="#a3511c"
          />
          {/* Foreground desert ground */}
          <path
            d="M0 320V280C120 268 280 274 440 266C600 258 760 270 920 262C1080 254 1240 268 1440 258V320H0Z"
            fill="#8a3f14"
          />
          <path
            d="M0 320V295C200 285 400 292 600 288C800 284 1000 292 1200 286C1320 282 1380 290 1440 288V320H0Z"
            fill="#6e2f0d"
          />

          {/* Saguaro Cacti Silhouettes (Darker for contrast on bright sky) */}
          <g opacity="0.9">
            <path d="M120 295V190Q120 178 128 178Q136 178 136 190V295Z" fill="#2d4a2a" />
            <path d="M120 220Q96 220 92 206Q88 192 100 192Q108 192 108 200L108 238" fill="#2d4a2a" />
            <path d="M108 238V220" stroke="#2d4a2a" strokeWidth="8" />
            <path d="M136 212Q160 212 164 198Q168 184 156 184Q148 184 148 192L148 234" fill="#2d4a2a" />
            <path d="M148 234V212" stroke="#2d4a2a" strokeWidth="8" />
            <circle cx="128" cy="176" r="4" fill="#d99951" />
          </g>

          <g opacity="0.85">
            <path d="M1300 295V230Q1300 222 1307 222Q1314 222 1314 230V295Z" fill="#2d4a2a" />
            <path d="M1300 250Q1286 250 1284 242Q1282 234 1290 234Q1295 234 1295 240L1295 258" fill="#2d4a2a" />
            <path d="M1314 244Q1328 244 1330 236Q1332 228 1324 228Q1319 228 1319 234L1319 260" fill="#2d4a2a" />
            <circle cx="1307" cy="220" r="3.5" fill="#be592e" />
          </g>

          {/* Distant Horse & Rider */}
          <g opacity="0.5" transform="translate(680, 202)">
            <ellipse cx="0" cy="20" rx="22" ry="10" fill="#28150d" />
            <line x1="-14" y1="28" x2="-16" y2="44" stroke="#28150d" strokeWidth="3" />
            <line x1="14" y1="28" x2="17" y2="44" stroke="#28150d" strokeWidth="3" />
            <path d="M12 14 Q16 8 18 4 Q22 0 24 2 Q22 6 20 8 Q22 10 18 14Z" fill="#28150d" />
            <ellipse cx="2" cy="6" rx="6" ry="8" fill="#28150d" />
            <line x1="-4" y1="0" x2="8" y2="0" stroke="#28150d" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Tumbleweed Decorations */}
      <div className="absolute bottom-[200px] left-[8%] pointer-events-none opacity-40">
        <TumbleweedSvg className="w-12 h-12" />
      </div>
      <div className="absolute bottom-[220px] right-[12%] pointer-events-none opacity-30">
        <TumbleweedSvg className="w-8 h-8" />
      </div>

      {/* ── SUN CIRCLE IN SKY ── */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 pointer-events-none z-[2]">
        <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-32 sm:h-32 opacity-85" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff4a0" />
              <stop offset="50%" stopColor="#ffd040" />
              <stop offset="100%" stopColor="#f5900a" />
            </radialGradient>
          </defs>
          {/* Sun rays */}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
            <line
              key={deg}
              x1="60" y1="60"
              x2={60 + 52 * Math.cos((deg - 90) * Math.PI / 180)}
              y2={60 + 52 * Math.sin((deg - 90) * Math.PI / 180)}
              stroke="#ffd040" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"
            />
          ))}
          <circle cx="60" cy="60" r="28" fill="url(#sunGrad)" />
          <circle cx="60" cy="60" r="22" fill="#fff4a0" opacity="0.5" />
        </svg>
      </div>

      {/* ── FLYING VULTURES / BIRDS ── */}
      <div className="absolute top-[18%] left-[18%] pointer-events-none z-[2] opacity-70">
        <svg viewBox="0 0 80 30" className="w-16 h-6" xmlns="http://www.w3.org/2000/svg">
          {/* Bird 1 */}
          <path d="M10 15 Q20 5 30 15 Q20 10 10 15Z" fill="#28150d" />
          <path d="M30 15 Q40 5 50 15 Q40 10 30 15Z" fill="#28150d" />
          {/* Bird 2 smaller */}
          <path d="M55 10 Q62 4 70 10 Q62 7 55 10Z" fill="#28150d" opacity="0.7" />
          <path d="M70 10 Q76 4 80 10 Q76 7 70 10Z" fill="#28150d" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute top-[14%] right-[22%] pointer-events-none z-[2] opacity-55">
        <svg viewBox="0 0 60 25" className="w-12 h-5" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12 Q14 4 24 12 Q14 8 5 12Z" fill="#28150d" />
          <path d="M24 12 Q32 4 42 12 Q32 8 24 12Z" fill="#28150d" />
          <path d="M45 8 Q51 3 57 8 Q51 5 45 8Z" fill="#28150d" opacity="0.6" />
        </svg>
      </div>

      {/* ── LEFT SIDE: WANTED POSTER ── */}
      <div className="absolute left-[2%] xl:left-[5%] top-[28%] pointer-events-none z-[3] hidden lg:block">
        <div
          className="w-28 xl:w-36 rotate-[-4deg]"
          style={{
            filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.5))',
          }}
        >
          <svg viewBox="0 0 140 190" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Wood plank background */}
            <rect x="0" y="0" width="140" height="190" rx="4" fill="#6b3a1f" />
            {/* Paper */}
            <rect x="6" y="6" width="128" height="178" rx="2" fill="#f5e8c8" />
            {/* Inner border */}
            <rect x="10" y="10" width="120" height="170" rx="1" fill="none" stroke="#8b4513" strokeWidth="2" strokeDasharray="4,2" />
            {/* WANTED text */}
            <text x="70" y="38" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="20" fill="#8b1a1a" letterSpacing="3">WANTED</text>
            {/* Star badge */}
            <polygon points="70,52 74,64 87,64 76,72 80,84 70,76 60,84 64,72 53,64 66,64" fill="#d4a017" stroke="#8b6914" strokeWidth="1" />
            {/* Face silhouette */}
            <ellipse cx="70" cy="108" rx="24" ry="28" fill="#c8956a" />
            <rect x="52" y="108" width="36" height="20" rx="4" fill="#c8956a" />
            {/* Hat */}
            <rect x="48" y="82" width="44" height="8" rx="2" fill="#28150d" />
            <rect x="56" y="62" width="28" height="22" rx="3" fill="#28150d" />
            {/* Eyes */}
            <circle cx="61" cy="104" r="3" fill="#28150d" />
            <circle cx="79" cy="104" r="3" fill="#28150d" />
            {/* Mustache */}
            <path d="M62 114 Q70 118 78 114" stroke="#28150d" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* DEAD OR ALIVE */}
            <text x="70" y="150" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="8" fill="#8b1a1a" letterSpacing="1">DEAD OR ALIVE</text>
            {/* Prize */}
            <text x="70" y="166" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="10" fill="#28150d">RP 95.000</text>
            {/* Nail top */}
            <circle cx="70" cy="4" r="5" fill="#c8a060" stroke="#8b6914" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* ── RIGHT SIDE: SHERIFF STAR + SALOON SIGN ── */}
      <div className="absolute right-[2%] xl:right-[5%] top-[26%] pointer-events-none z-[3] hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          {/* Saloon sign hanging */}
          <div
            className="w-32 xl:w-40 rotate-[3deg]"
            style={{ filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.45))' }}
          >
            <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* Chains */}
              <line x1="30" y1="0" x2="30" y2="12" stroke="#8b6914" strokeWidth="2.5" strokeDasharray="3,2" />
              <line x1="130" y1="0" x2="130" y2="12" stroke="#8b6914" strokeWidth="2.5" strokeDasharray="3,2" />
              {/* Sign board */}
              <rect x="4" y="12" width="152" height="80" rx="6" fill="#6b3a1f" />
              <rect x="8" y="16" width="144" height="72" rx="4" fill="#c8832a" />
              <rect x="12" y="20" width="136" height="64" rx="3" fill="#b5721e" />
              {/* Border ornament */}
              <rect x="14" y="22" width="132" height="60" rx="2" fill="none" stroke="#f6d19e" strokeWidth="1.5" />
              {/* SALOON text */}
              <text x="80" y="52" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="22" fill="#f6d19e" letterSpacing="4">SALOON</text>
              <text x="80" y="68" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#f6d19e" letterSpacing="2">ISFEST 2027</text>
              {/* Stars left right */}
              <polygon points="22,45 24,51 30,51 25,55 27,61 22,57 17,61 19,55 14,51 20,51" fill="#f6d19e" opacity="0.8" />
              <polygon points="138,45 140,51 146,51 141,55 143,61 138,57 133,61 135,55 130,51 136,51" fill="#f6d19e" opacity="0.8" />
            </svg>
          </div>

          {/* Big Sheriff Star */}
          <div
            className="rotate-[8deg] mt-2"
            style={{ filter: 'drop-shadow(3px 6px 10px rgba(0,0,0,0.5))' }}
          >
            <svg viewBox="0 0 80 80" className="w-16 xl:w-20 h-16 xl:h-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="starGold" cx="40%" cy="30%" r="65%">
                  <stop offset="0%" stopColor="#ffe680" />
                  <stop offset="60%" stopColor="#d4a017" />
                  <stop offset="100%" stopColor="#8b6400" />
                </radialGradient>
              </defs>
              {/* 6-point star */}
              <polygon
                points="40,4 46,28 70,28 50,44 58,68 40,54 22,68 30,44 10,28 34,28"
                fill="url(#starGold)"
                stroke="#8b6400"
                strokeWidth="1.5"
              />
              {/* Circle center */}
              <circle cx="40" cy="40" r="12" fill="#f5e070" stroke="#8b6400" strokeWidth="1.5" />
              {/* Badge text */}
              <text x="40" y="44" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="7" fill="#28150d">SHERIFF</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ── DECORATIVE BARBED WIRE HORIZONTAL (kiri & kanan bawah langit) ── */}
      <div className="absolute top-[55%] left-0 right-0 pointer-events-none z-[2] opacity-30 hidden xl:block">
        <svg viewBox="0 0 1440 20" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10" x2="1440" y2="10" stroke="#28150d" strokeWidth="1.5" />
          {Array.from({length: 36}).map((_, i) => (
            <g key={i} transform={`translate(${i * 40 + 10}, 10)`}>
              <line x1="-4" y1="-4" x2="4" y2="4" stroke="#28150d" strokeWidth="1.5" />
              <line x1="4" y1="-4" x2="-4" y2="4" stroke="#28150d" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full pb-[200px]">

        {/* Circular Retro Cowboy Hat Badge (From HOWDY Poster Image 2) */}
        <div className="mb-4 flex flex-col items-center gap-2.5">
          <RetroCowboyBadge className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]" />
          <div className="cowboy-stamp text-[11px] sm:text-xs font-semibold tracking-widest px-4 py-1 rounded border-2 border-[#be592e] bg-[#fbf5eb] text-[#be592e] flex items-center gap-2 shadow-md">
            <SheriffBadgeIcon className="w-3.5 h-3.5 text-[#be592e]" />
            <span>PINTU GERBANG UTAMA • ISFEST UMN 2027</span>
          </div>
        </div>

        {/* Southwestern Star Band (From HOWDY Poster) */}
        <div className="max-w-md mx-auto mb-3">
          <SouthwesternStarBand className="w-full opacity-85" />
        </div>

        {/* Big Bold Western Typography ("HOWDY" Style Title) */}
        <div className="mb-4 relative">
          <div className="hidden lg:block absolute left-2 top-1/2 -translate-y-1/2 opacity-75">
            <GallopingHorseSvg className="w-24 h-16" />
          </div>
          <div className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 opacity-75 scale-x-[-1]">
            <GallopingHorseSvg className="w-24 h-16" />
          </div>

          <span className="block text-xs sm:text-sm font-cowboy tracking-[0.3em] text-[#28150d] uppercase mb-1 drop-shadow-sm font-bold">
            THE WILD WEST DIGITAL FRONTIER
          </span>

          <h1
            className="font-cowboy text-6xl sm:text-8xl lg:text-9xl tracking-wider text-[#fbf5eb] leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            style={{
              textShadow: '3px 3px 0 #be592e, 6px 6px 0 #28150d',
            }}
          >
            ISFEST
          </h1>

          <div
            className="font-cowboy text-4xl sm:text-6xl tracking-widest text-[#fbf5eb] mt-1"
            style={{ textShadow: '2px 2px 0 #be592e, 4px 4px 0 #28150d' }}
          >
            2027
          </div>

          <p className="font-cowboy text-lg sm:text-2xl text-[#fbf5eb] mt-2 tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            SHOWDOWN IN THE DIGITAL DESERT
          </p>
        </div>

        {/* Southwestern Star Band (Bottom) */}
        <div className="max-w-md mx-auto mb-6">
          <SouthwesternStarBand className="w-full opacity-85" />
        </div>

        {/* Subtitle Description */}
        <p className="text-[#fbf5eb] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-semibold">
          Selamat datang di gerbang festival sistem informasi resmi Universitas Multimedia Nusantara.
          Persiapkan gengmu untuk bertarung di 4 cabang perlombaan bergengsi: UI/UX Cartographer,
          Data Mining Prospector, Mobile Legends Posse, dan Valorant Tactical Championship.
        </p>

        {/* Retro Poster Bounty Board (HOWDY Canvas Inset) */}
        <div className="relative max-w-lg mx-auto mb-8">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <span className="font-cowboy text-[10px] tracking-widest bg-[#be592e] border-2 border-[#28150d] text-[#fffbf5] px-4 py-1 rounded-md shadow-md uppercase font-bold">
              ★ BOUNTY BOARD RESMI ★
            </span>
          </div>

          {/* Wanted Poster Card Style from Image 2 */}
          <div className="wanted-card p-5">
            <div className="brass-pin pin-tl" />
            <div className="brass-pin pin-tr" />
            <div className="brass-pin pin-bl" />
            <div className="brass-pin pin-br" />

            <div className="border-2 border-[#28150d] bg-[#fbf5eb] p-4 text-center rounded-xl shadow-inner">
              <span className="text-[11px] font-cowboy tracking-widest text-[#be592e] uppercase block mb-1 font-bold">
                TOTAL DANA PEMBINAAN
              </span>
              <div className="font-cowboy text-4xl sm:text-5xl text-[#28150d] tracking-wider my-1 drop-shadow-sm">
                RP 21.000.000+
              </div>
              <span className="text-[11px] text-[#523323] uppercase tracking-wider font-bold">
                Trofi Juara • Piagam Nasional UMN • Dana Pembinaan
              </span>
            </div>
          </div>
        </div>

        {/* Early Bird Countdown Box (Warm Sand & Terracotta) */}
        <div className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-[#fbf5eb] border-4 border-[#be592e] text-[#28150d] shadow-xl">
          <div className="flex items-center justify-center gap-2 text-[#be592e] font-cowboy text-[11px] tracking-widest uppercase mb-3 font-bold">
            <Clock className="w-3.5 h-3.5 text-[#be592e]" />
            <span>WAVE 1 (EARLY BIRD) BERAKHIR: 12 JULI 2027</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { val: timeLeft.days, label: 'Hari' },
              { val: timeLeft.hours, label: 'Jam' },
              { val: timeLeft.minutes, label: 'Menit' },
              { val: timeLeft.seconds, label: 'Detik', red: true },
            ].map(({ val, label, red }) => (
              <div
                key={label}
                className="rounded-xl p-2.5 border-2 border-[#28150d] bg-[#f0e4cf] shadow-inner"
              >
                <span className={`block text-2xl font-cowboy font-bold ${red ? 'text-[#be592e]' : 'text-[#28150d]'}`}>
                  {String(val).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#523323] font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Terracotta & Cream */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <Link
            href="/lomba"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-cowboy text-sm text-[#fffbf5] btn-leather cursor-pointer shadow-lg hover:scale-105 transition-transform"
          >
            <Scroll className="w-4 h-4 text-[#fde047]" />
            <span>BUKA PAPAN SAYEMBARA (4 LOMBA)</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-cowboy text-sm text-[#28150d] bg-[#fbf5eb] hover:bg-[#eddcc4] border-2 border-[#28150d] shadow-md hover:scale-105 transition-all cursor-pointer font-bold"
          >
            <CowboyHatIcon className="w-4 h-4 text-[#be592e]" />
            <span>KONTRAK REKRUT POSSE</span>
          </button>
        </div>

        {/* 4 Feature Highlights in Warm Sand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left mb-8">
          {[
            { icon: <CowboyHatIcon className="w-5 h-5 text-[#be592e]" />, title: '4 Cabang Lomba', sub: '2 Akademik & 2 E-Sports' },
            { icon: <Trophy className="w-5 h-5 text-[#be592e]" />, title: 'Rp 21 Juta+', sub: 'Dana Pembinaan Juara' },
            { icon: <Award className="w-5 h-5 text-[#be592e]" />, title: 'Piagam UMN', sub: 'Predikat Tingkat Nasional' },
            { icon: <Users className="w-5 h-5 text-[#be592e]" />, title: 'Ratusan Geng', sub: 'Mahasiswa & Umum' },
          ].map(({ icon, title, sub }) => (
            <div
              key={title}
              className="p-3.5 rounded-2xl bg-[#fbf5eb] border-2 border-[#be592e] shadow-md text-[#28150d]"
            >
              <div className="mb-2">{icon}</div>
              <div className="font-cowboy text-xs text-[#28150d] leading-tight font-bold">{title}</div>
              <div className="text-[10px] text-[#523323] mt-0.5 font-medium">{sub}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator down to Timeline */}
        <div className="flex justify-center">
          <button
            onClick={handleScrollToRoute}
            className="flex flex-col items-center gap-1.5 text-[#fbf5eb] hover:text-[#d99951] transition-colors cursor-pointer group drop-shadow-sm"
          >
            <span className="text-[10px] font-cowboy tracking-widest uppercase font-bold">TELUSURI RUTE EKSPEDISI</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#d99951]" />
          </button>
        </div>
      </div>

      {/* Bottom Barbed Wire */}
      <div className="absolute bottom-[185px] left-0 right-0 pointer-events-none z-20">
        <BarbedWireDivider className="opacity-45" />
      </div>
    </section>
  );
}
