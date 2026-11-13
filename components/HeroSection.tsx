'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';
import { ChevronDown, Trophy, ArrowRight, Clock, Scroll, Award, Users } from 'lucide-react';
import {
  CowboyHatIcon,
  SheriffBadgeIcon,
} from './WesternSvg';
import {
  BarbedWireDivider,
  RetroCowboyBadge,
  SouthwesternStarBand,
} from './WesternAssets';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreRouteClick?: () => void;
}

export default function HeroSection({ onRegisterClick, onExploreRouteClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-07-12T23:59:59+07:00').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
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
      document.getElementById('linimasa')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── Subtle Mouse Parallax (Background scenery only) ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const sunX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const sunY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const sunScrollY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const cloudX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const cloudY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const mtnX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const fgX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);

  const sunRays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  return (
    <div
      ref={containerRef}
      id="beranda"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between items-center overflow-hidden select-none pt-20 pb-4 px-3 sm:px-6"
      role="region"
      aria-label="Hero Section"
    >
      {/* ══════════════════════════════════════════════════
          LAYER 1 — SKY + SUN + VULTURES (z-0)
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: sunX, y: sunY, translateY: sunScrollY }}
        className="pointer-events-none absolute inset-0 z-0 scale-105"
      >
        {/* Sky gradient — vibrant Western desert sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #4f9ecf 0%, #76bde2 16%, #b6ddf2 32%, #e5cb97 52%, #d78955 72%, #b55d28 88%, #85370f 100%)',
          }}
        />

        {/* Sun glowing aura */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: '7%',
            width: 380,
            height: 220,
            background:
              'radial-gradient(ellipse, rgba(255,238,110,0.65) 0%, rgba(255,175,60,0.25) 55%, transparent 75%)',
          }}
        />

        {/* Sun disc with stylized rays */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '5%' }}>
          <svg viewBox="0 0 110 110" className="w-20 h-20 sm:w-24 sm:h-24 opacity-95" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="sunDioramaG" cx="50%" cy="38%" r="62%">
                <stop offset="0%" stopColor="#fffde6" />
                <stop offset="40%" stopColor="#ffd340" />
                <stop offset="100%" stopColor="#f58c0a" />
              </radialGradient>
            </defs>
            {sunRays.map((deg) => (
              <line
                key={deg}
                x1="55" y1="55"
                x2={55 + 50 * Math.cos((deg - 90) * Math.PI / 180)}
                y2={55 + 50 * Math.sin((deg - 90) * Math.PI / 180)}
                stroke="#ffc933" strokeWidth="2.2" strokeLinecap="round" opacity="0.45"
              />
            ))}
            <circle cx="55" cy="55" r="24" fill="url(#sunDioramaG)" />
            <circle cx="55" cy="55" r="17" fill="#fffde6" opacity="0.4" />
          </svg>
        </div>

        {/* Desert soaring vultures in sky */}
        <div className="absolute top-[14%] left-[18%] opacity-55">
          <svg viewBox="0 0 60 22" className="w-14 h-5" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11 Q12 2 20 11 Q12 7 4 11Z" fill="#28150d" />
            <path d="M20 11 Q28 2 36 11 Q28 7 20 11Z" fill="#28150d" />
            <path d="M42 7 Q47 2 54 7 Q47 5 42 7Z" fill="#28150d" opacity="0.7" />
          </svg>
        </div>
        <div className="absolute top-[12%] right-[22%] opacity-45">
          <svg viewBox="0 0 45 18" className="w-11 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9 Q9 2 15 9 Q9 6 3 9Z" fill="#28150d" />
            <path d="M15 9 Q21 2 27 9 Q21 6 15 9Z" fill="#28150d" />
          </svg>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          LAYER 2 — FLUFFY WHITE CARTOON CLOUDS (z-10)
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: cloudX, y: cloudY }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 scale-105"
      >
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-auto max-h-[140px] sm:max-h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <radialGradient id="cloudGradHero" cx="45%" cy="25%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f0f6fa" />
              <stop offset="100%" stopColor="#d2e3ee" />
            </radialGradient>
            <linearGradient id="cloudUnderHero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bcd4e4" stopOpacity="0" />
              <stop offset="100%" stopColor="#9bbcd0" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* Cloud 1 — Big Left Anchor */}
          <g opacity="0.96">
            <ellipse cx="160" cy="85" rx="135" ry="24" fill="url(#cloudUnderHero)" />
            <ellipse cx="160" cy="74" rx="130" ry="38" fill="url(#cloudGradHero)" />
            <circle cx="50" cy="62" r="34" fill="#ffffff" />
            <circle cx="95" cy="46" r="44" fill="#ffffff" />
            <circle cx="145" cy="34" r="50" fill="url(#cloudGradHero)" />
            <circle cx="200" cy="44" r="45" fill="#f8fbff" />
            <circle cx="250" cy="58" r="35" fill="#ffffff" />
            <rect x="50" y="52" width="200" height="34" rx="14" fill="url(#cloudGradHero)" />
          </g>

          {/* Cloud 2 — Big Right Anchor */}
          <g opacity="0.94">
            <ellipse cx="1280" cy="82" rx="130" ry="22" fill="url(#cloudUnderHero)" />
            <ellipse cx="1280" cy="72" rx="125" ry="36" fill="url(#cloudGradHero)" />
            <circle cx="1185" cy="60" r="32" fill="#ffffff" />
            <circle cx="1230" cy="44" r="42" fill="#ffffff" />
            <circle cx="1285" cy="34" r="48" fill="url(#cloudGradHero)" />
            <circle cx="1340" cy="44" r="42" fill="#f8fbff" />
            <circle cx="1385" cy="58" r="32" fill="#ffffff" />
            <rect x="1185" y="50" width="200" height="34" rx="14" fill="url(#cloudGradHero)" />
          </g>

          {/* Cloud 3 — Center-Left Floating */}
          <g opacity="0.8">
            <circle cx="440" cy="38" r="26" fill="#ffffff" />
            <circle cx="475" cy="26" r="34" fill="url(#cloudGradHero)" />
            <circle cx="515" cy="34" r="28" fill="#f8fbff" />
            <rect x="440" y="32" width="75" height="20" rx="8" fill="url(#cloudGradHero)" />
          </g>

          {/* Cloud 4 — Center-Right Floating */}
          <g opacity="0.75">
            <circle cx="940" cy="40" r="25" fill="#ffffff" />
            <circle cx="975" cy="28" r="32" fill="url(#cloudGradHero)" />
            <circle cx="1010" cy="36" r="26" fill="#f8fbff" />
            <rect x="940" y="34" width="70" height="18" rx="8" fill="url(#cloudGradHero)" />
          </g>
        </svg>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          LAYER 3 — VISIBLE MOUNTAIN MESAS (z-20)
          Rises behind the lower half of the content!
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: mtnX }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 scale-105"
      >
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[220px] max-h-[340px]"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Back canyon ridges — soft warm amber */}
          <path
            d="M0 380V210 L70 190 L150 205 L240 170 L340 192 L450 155 L560 182 L670 145 L780 175 L890 135 L1000 168 L1110 130 L1220 162 L1330 142 L1440 165 V380Z"
            fill="#d27842"
            opacity="0.65"
          />

          {/* Mid mesas & canyon walls — terracotta */}
          <path
            d="M0 380V250 L60 244 L110 252 L170 230 L230 238 L290 220 L350 232 L440 212 L520 226 L600 204 L680 222 L760 198 L840 216 L920 194 L1000 212 L1080 190 L1160 208 L1240 192 L1320 206 L1400 196 L1440 202 V380Z"
            fill="#bc5b24"
          />

          {/* Near canyon bluffs & red rock cliffs — rich dark rust */}
          <path
            d="M0 380V290 L50 284 L110 292 L180 274 L250 282 L320 268 L400 278 L480 258 L560 270 L640 250 L720 264 L800 244 L880 260 L960 240 L1040 256 L1120 238 L1200 252 L1280 236 L1360 250 L1440 242 V380Z"
            fill="#963b15"
          />

          {/* Near ground base */}
          <path
            d="M0 380V328 C240 318 480 324 720 320 C960 316 1200 324 1440 318 V380Z"
            fill="#6d2407"
          />
        </svg>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          SIDE PROPS: LEFT FLANKING (Desktop / Wide)
          Cowboy Spinning Lasso + Wanted Poster + Saguaro Cactus
      ══════════════════════════════════════════════════ */}
      {/* Tall Saguaro Cactus Far Left */}
      <div className="pointer-events-none absolute left-1 sm:left-4 lg:left-8 bottom-6 z-25 opacity-90 drop-shadow-xl hidden md:block">
        <svg viewBox="0 0 110 220" className="w-20 sm:w-28 lg:w-36 h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="42" y="15" width="22" height="195" rx="11" fill="#2a5426" />
          <path d="M42 100 Q18 100 14 82 Q10 64 22 62 Q30 60 32 70 L32 115" fill="#2a5426" />
          <rect x="20" y="70" width="14" height="50" rx="7" fill="#2a5426" />
          <path d="M64 85 Q90 85 94 68 Q98 50 86 48 Q78 46 76 56 L76 102" fill="#2a5426" />
          <rect x="74" y="55" width="14" height="52" rx="7" fill="#2a5426" />
          <circle cx="53" cy="12" r="5" fill="#facc15" />
          <circle cx="27" cy="62" r="3.5" fill="#facc15" />
          <circle cx="83" cy="48" r="3.5" fill="#facc15" />
          <line x1="53" y1="25" x2="53" y2="200" stroke="#1d401a" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      {/* Real Cartoon Cowboy Spinning Lasso (Left Mascot - Clean without hooves) */}
      <div className="pointer-events-none absolute left-8 lg:left-16 xl:left-24 bottom-8 z-25 drop-shadow-2xl hidden lg:block">
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/cowboy/cowboy-lasso-clean.png"
            alt="Cowboy with Lasso"
            className="w-28 xl:w-36 h-auto drop-shadow-2xl"
          />
          <div className="text-[10px] font-cowboy uppercase tracking-widest text-[#fbf5eb] bg-[#451a03]/90 px-3 py-0.5 rounded border border-[#facc15] mt-1 shadow-md font-bold">
            ★ POSSE SHERIFF ★
          </div>
        </div>
      </div>

      {/* Wanted Poster Hanging Left */}
      <div className="pointer-events-none absolute left-6 xl:left-10 top-[24%] z-25 drop-shadow-2xl hidden xl:block">
        <div style={{ transform: 'rotate(-5deg)' }} className="w-24 xl:w-28">
          <svg viewBox="0 0 130 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <rect x="0" y="0" width="130" height="175" rx="3" fill="#6b3a1f" />
            <rect x="5" y="5" width="120" height="165" rx="2" fill="#fbf0d6" />
            <rect x="8" y="8" width="114" height="159" rx="1" fill="none" stroke="#8b4513" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="65" y="32" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="16" fill="#8b1a1a" letterSpacing="2">WANTED</text>
            <polygon points="65,42 68,51 77,51 70,57 73,66 65,60 57,66 60,57 53,51 62,51" fill="#d4a017" stroke="#8b6914" strokeWidth="0.8" />
            <ellipse cx="65" cy="88" rx="20" ry="22" fill="#c8956a" />
            <rect x="50" y="88" width="30" height="16" rx="3" fill="#c8956a" />
            <rect x="46" y="66" width="38" height="6" rx="2" fill="#28150d" />
            <rect x="53" y="50" width="24" height="18" rx="2" fill="#28150d" />
            <circle cx="58" cy="84" r="2.5" fill="#28150d" />
            <circle cx="72" cy="84" r="2.5" fill="#28150d" />
            <text x="65" y="128" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="7" fill="#8b1a1a" letterSpacing="1">DEAD OR ALIVE</text>
            <text x="65" y="146" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="11" fill="#28150d">RP 95.000</text>
            <circle cx="65" cy="3" r="4" fill="#c8a060" stroke="#8b6914" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SIDE PROPS: RIGHT FLANKING (Desktop / Wide)
          Real Cartoon Cowboy Riding Horse + Saloon Sign + Cactus
      ══════════════════════════════════════════════════ */}
      {/* Tall Saguaro Cactus Far Right */}
      <div className="pointer-events-none absolute right-1 sm:right-4 lg:right-8 bottom-6 z-25 opacity-90 drop-shadow-xl hidden md:block">
        <svg viewBox="0 0 110 220" className="w-20 sm:w-28 lg:w-36 h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="46" y="20" width="20" height="190" rx="10" fill="#2a5426" />
          <path d="M46 90 Q24 90 20 74 Q16 58 26 56 Q34 54 36 64 L36 104" fill="#2a5426" />
          <rect x="24" y="64" width="13" height="46" rx="6.5" fill="#2a5426" />
          <path d="M66 105 Q88 105 92 88 Q96 70 86 68 Q78 66 76 76 L76 118" fill="#2a5426" />
          <rect x="74" y="74" width="13" height="48" rx="6.5" fill="#2a5426" />
          <circle cx="56" cy="18" r="4.5" fill="#facc15" />
          <circle cx="30" cy="56" r="3" fill="#facc15" />
          <circle cx="82" cy="68" r="3" fill="#facc15" />
        </svg>
      </div>

      {/* Real Cartoon Cowboy Riding Galloping Horse (Right Mascot) */}
      <div className="pointer-events-none absolute right-8 lg:right-16 xl:right-24 bottom-6 z-25 drop-shadow-2xl hidden lg:block">
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/cowboy/cowboy-riding-horse.png"
            alt="Cowboy Riding Galloping Horse"
            className="w-36 xl:w-48 h-auto drop-shadow-2xl"
          />
          <div className="text-[10px] font-cowboy uppercase tracking-widest text-[#28150d] bg-[#fef08a] px-3 py-0.5 rounded border border-[#78350f] -mt-2 shadow-md font-bold">
            ★ FRONTIER CHAMPION ★
          </div>
        </div>
      </div>

      {/* Hanging Saloon Sign Right */}
      <div className="pointer-events-none absolute right-6 xl:right-10 top-[24%] z-25 drop-shadow-2xl hidden xl:block">
        <div style={{ transform: 'rotate(4deg)' }} className="w-28 xl:w-32">
          <svg viewBox="0 0 150 90" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <line x1="28" y1="0" x2="28" y2="10" stroke="#8b6914" strokeWidth="2" strokeDasharray="3,2" />
            <line x1="122" y1="0" x2="122" y2="10" stroke="#8b6914" strokeWidth="2" strokeDasharray="3,2" />
            <rect x="4" y="10" width="142" height="74" rx="5" fill="#6b3a1f" />
            <rect x="8" y="14" width="134" height="66" rx="3" fill="#c8832a" />
            <rect x="12" y="18" width="126" height="58" rx="2" fill="#b5721e" />
            <rect x="14" y="20" width="122" height="54" rx="1.5" fill="none" stroke="#f6d19e" strokeWidth="1.2" />
            <text x="75" y="48" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="20" fill="#f6d19e" letterSpacing="3">SALOON</text>
            <text x="75" y="63" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#f6d19e" letterSpacing="1.5">ISFEST 2027</text>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 4 — STATIC HERO CONTENT (z-30)
          Teks tetap diam, layout padat & rapi dalam 1 layar!
      ══════════════════════════════════════════════════ */}
      <div className="relative z-30 w-full max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Sheriff Badge */}
        <div className="mb-2 flex flex-col items-center gap-1.5">
          <RetroCowboyBadge className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)]" />
          <div className="cowboy-stamp text-[10px] sm:text-[11px] font-semibold tracking-widest px-3 py-0.5 rounded border-2 border-[#be592e] bg-[#fbf5eb] text-[#be592e] flex items-center gap-1.5 shadow-md">
            <SheriffBadgeIcon className="w-3 h-3 text-[#be592e]" />
            <span>PINTU GERBANG UTAMA • ISFEST UMN 2027</span>
          </div>
        </div>

        {/* Southwestern Star Band */}
        <div className="max-w-xs mx-auto mb-1.5">
          <SouthwesternStarBand className="w-full opacity-80" />
        </div>

        {/* Title Block */}
        <div className="mb-2">
          <span className="block text-[11px] sm:text-xs font-cowboy tracking-[0.28em] text-[#28150d] uppercase mb-0.5 font-bold drop-shadow-sm">
            THE WILD WEST DIGITAL FRONTIER
          </span>

          <h1
            className="font-cowboy text-5xl sm:text-7xl lg:text-8xl tracking-wider text-[#fbf5eb] leading-none"
            style={{ textShadow: '3px 3px 0 #be592e, 6px 6px 0 #28150d' }}
          >
            ISFEST
          </h1>

          <div
            className="font-cowboy text-3xl sm:text-5xl tracking-widest text-[#fbf5eb] mt-0.5"
            style={{ textShadow: '2px 2px 0 #be592e, 4px 4px 0 #28150d' }}
          >
            2027
          </div>

          <p className="font-cowboy text-xs sm:text-base text-[#fbf5eb] mt-1 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            ★ SHOWDOWN IN THE DIGITAL DESERT ★
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-[#fbf5eb] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] font-semibold">
          Festival sistem informasi resmi Universitas Multimedia Nusantara.
          Bertarung di 4 arena duel: UI/UX Cartographer, Data Mining Prospector, Mobile Legends Posse, dan Valorant Championship.
        </p>

        {/* ── BOUNTY BOARD & COUNTDOWN SIDE-BY-SIDE ON DESKTOP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-2xl mx-auto mb-3">
          {/* Box 1: Bounty Board */}
          <div className="relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
              <span className="font-cowboy text-[9px] tracking-widest bg-[#be592e] border border-[#28150d] text-[#fffbf5] px-2.5 py-0.5 rounded shadow uppercase font-bold whitespace-nowrap">
                ★ BOUNTY RESMI ★
              </span>
            </div>
            <div className="wanted-card p-3 h-full flex flex-col justify-center">
              <div className="brass-pin pin-tl" />
              <div className="brass-pin pin-tr" />
              <div className="brass-pin pin-bl" />
              <div className="brass-pin pin-br" />
              <div className="border border-[#28150d] bg-[#fbf5eb] p-2 text-center rounded-lg shadow-inner">
                <span className="text-[9px] font-cowboy tracking-widest text-[#be592e] uppercase block font-bold">TOTAL DANA PEMBINAAN</span>
                <div className="font-cowboy text-2xl sm:text-3xl text-[#28150d] tracking-wider my-0.5">RP 21.000.000+</div>
                <span className="text-[8px] sm:text-[9px] text-[#523323] uppercase tracking-wider font-bold">Trofi Juara • Piagam Nasional • Uang Tunai</span>
              </div>
            </div>
          </div>

          {/* Box 2: Countdown */}
          <div className="relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
              <span className="font-cowboy text-[9px] tracking-widest bg-[#28150d] border border-[#fde047] text-[#fde047] px-2.5 py-0.5 rounded shadow uppercase font-bold whitespace-nowrap">
                ★ EARLY BIRD WAVE 1 ★
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbf5eb] border-2 border-[#be592e] text-[#28150d] shadow-md h-full flex flex-col justify-center">
              <div className="flex items-center justify-center gap-1.5 text-[#be592e] font-cowboy text-[9px] tracking-widest uppercase mb-1.5 font-bold">
                <Clock className="w-3 h-3 text-[#be592e]" />
                <span>BERAKHIR: 12 JULI 2027</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center">
                {[
                  { val: timeLeft.days, label: 'Hari' },
                  { val: timeLeft.hours, label: 'Jam' },
                  { val: timeLeft.minutes, label: 'Mnt' },
                  { val: timeLeft.seconds, label: 'Dtk', red: true },
                ].map(({ val, label, red }) => (
                  <div key={label} className="rounded-lg p-1 border border-[#28150d] bg-[#f0e4cf] shadow-inner">
                    <span className={`block text-base sm:text-lg font-cowboy font-bold leading-tight ${red ? 'text-[#be592e]' : 'text-[#28150d]'}`}>
                      {String(val).padStart(2, '0')}
                    </span>
                    <span className="text-[7.5px] uppercase tracking-wider text-[#523323] font-bold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-3 w-full max-w-md mx-auto">
          <Link
            href="/lomba"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-cowboy text-xs sm:text-sm text-[#fffbf5] btn-leather cursor-pointer shadow-md hover:scale-105 transition-transform"
          >
            <Scroll className="w-3.5 h-3.5 text-[#fde047]" />
            <span>BUKA PAPAN SAYEMBARA (4 LOMBA)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-cowboy text-xs sm:text-sm text-[#28150d] bg-[#fbf5eb] hover:bg-[#eddcc4] border-2 border-[#28150d] shadow-sm hover:scale-105 transition-all cursor-pointer font-bold"
          >
            <CowboyHatIcon className="w-3.5 h-3.5 text-[#be592e]" />
            <span>KONTRAK REKRUT POSSE</span>
          </button>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-left w-full max-w-2xl mx-auto mb-2">
          {[
            { icon: <CowboyHatIcon className="w-3.5 h-3.5 text-[#be592e]" />, title: '4 Arena Duel', sub: '2 Akademik & 2 E-Sports' },
            { icon: <Trophy className="w-3.5 h-3.5 text-[#be592e]" />, title: 'Rp 21 Juta+', sub: 'Dana Pembinaan Juara' },
            { icon: <Award className="w-3.5 h-3.5 text-[#be592e]" />, title: 'Piagam UMN', sub: 'Predikat Nasional' },
            { icon: <Users className="w-3.5 h-3.5 text-[#be592e]" />, title: 'Ratusan Geng', sub: 'Mahasiswa & Umum' },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="p-2 rounded-lg bg-[#fbf5eb]/90 border border-[#be592e] shadow-sm text-[#28150d] backdrop-blur-sm">
              <div className="mb-0.5">{icon}</div>
              <div className="font-cowboy text-[10px] sm:text-[11px] text-[#28150d] leading-tight font-bold">{title}</div>
              <div className="text-[8.5px] text-[#523323] mt-0.5 font-medium">{sub}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-0.5">
          <button
            onClick={handleScrollToRoute}
            className="flex flex-col items-center gap-0.5 text-[#fbf5eb] hover:text-[#d99951] transition-colors cursor-pointer group drop-shadow-sm"
          >
            <span className="text-[8.5px] font-cowboy tracking-widest uppercase font-bold">TELUSURI RUTE EKSPEDISI</span>
            <ChevronDown className="w-3 h-3 animate-bounce group-hover:text-[#d99951]" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 5 — FOREGROUND: GROUND + FENCE (z-40)
      ══════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: fgX }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-40 scale-105"
      >
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-h-[100px] sm:max-h-[130px]"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Ground base */}
          <rect x="0" y="130" width="1440" height="30" fill="#421403" />
          <path d="M0 160V132 C240 128 480 134 720 130 C960 126 1200 132 1440 128 V160Z" fill="#320e02" />

          {/* Fence Posts with Gem Tops */}
          {[180, 260, 340, 1100, 1180, 1260].map((x) => (
            <g key={x}>
              <rect x={x - 3} y={118} width={6} height="22" rx="1.5" fill="#8b4a1a" />
              <rect x={x - 18} y={122} width="36" height="3" rx="1" fill="#a05828" />
              <rect x={x - 18} y={130} width="36" height="3" rx="1" fill="#a05828" />
              <circle cx={x} cy={118} r="2.5" fill="#d4a017" stroke="#8b6400" strokeWidth="0.5" />
            </g>
          ))}

          {/* Yellow Gem Dots Row */}
          {Array.from({ length: 20 }, (_, i) => 560 + i * 16).map((x) => (
            <circle key={`gem-${x}`} cx={x} cy={131} r="2" fill="#d4a017" opacity="0.85" />
          ))}
        </svg>

        {/* Barbed Wire Divider at lower boundary */}
        <div className="absolute bottom-[2px] left-0 right-0">
          <BarbedWireDivider className="opacity-35" />
        </div>
      </motion.div>
    </div>
  );
}
