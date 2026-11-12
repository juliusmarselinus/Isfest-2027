'use client';

import React from 'react';

// ─── BARBED WIRE HORIZONTAL DIVIDER ───────────────────────────────────────────
export function BarbedWireDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      aria-hidden="true"
    >
      {/* Main wire strand */}
      <line x1="0" y1="12" x2="800" y2="12" stroke="#78350f" strokeWidth="2" />
      {/* Barbs every 40px */}
      {Array.from({ length: 20 }, (_, i) => {
        const x = 20 + i * 40;
        return (
          <g key={i} transform={`translate(${x}, 12)`}>
            {/* Barb cluster */}
            <line x1="-5" y1="-5" x2="5" y2="5" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="-5" x2="-5" y2="5" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
            {/* Twist knot */}
            <circle cx="0" cy="0" r="2.5" fill="#451a03" stroke="#ca8a04" strokeWidth="1" />
          </g>
        );
      })}
    </svg>
  );
}

// ─── ROPE HORIZONTAL DIVIDER ──────────────────────────────────────────────────
export function RopeDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      aria-hidden="true"
    >
      {/* Twisted rope effect using two sinusoidal paths */}
      <path
        d="M0 10 Q20 4 40 10 Q60 16 80 10 Q100 4 120 10 Q140 16 160 10 Q180 4 200 10 Q220 16 240 10 Q260 4 280 10 Q300 16 320 10 Q340 4 360 10 Q380 16 400 10 Q420 4 440 10 Q460 16 480 10 Q500 4 520 10 Q540 16 560 10 Q580 4 600 10 Q620 16 640 10 Q660 4 680 10 Q700 16 720 10 Q740 4 760 10 Q780 16 800 10"
        stroke="#854d0e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0 10 Q20 16 40 10 Q60 4 80 10 Q100 16 120 10 Q140 4 160 10 Q180 16 200 10 Q220 4 240 10 Q260 16 280 10 Q300 4 320 10 Q340 16 360 10 Q380 4 400 10 Q420 16 440 10 Q460 4 480 10 Q500 16 520 10 Q540 4 560 10 Q580 16 600 10 Q620 4 640 10 Q660 16 680 10 Q700 4 720 10 Q740 16 760 10 Q780 4 800 10"
        stroke="#ca8a04"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

// ─── DETAILED SHERIFF STAR BADGE ──────────────────────────────────────────────
export function SheriffStarLarge({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer glow */}
      <circle cx="50" cy="50" r="44" fill="url(#starGlow)" opacity="0.2" />
      {/* 6-pointed star */}
      <polygon
        points="50,8 56,34 82,34 61,52 68,78 50,63 32,78 39,52 18,34 44,34"
        fill="url(#starGrad)"
        stroke="#fde047"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Ball tips on each point */}
      {[
        [50, 8], [80, 34], [68, 78], [50, 63], [32, 78], [20, 34],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
      ))}
      {/* Inner circle */}
      <circle cx="50" cy="50" r="14" fill="url(#innerCircle)" stroke="#fde047" strokeWidth="1.5" />
      {/* Star center detail */}
      <circle cx="50" cy="50" r="6" fill="#451a03" />
      <circle cx="50" cy="50" r="3" fill="#ca8a04" />
      <defs>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <radialGradient id="innerCircle" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#854d0e" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── DETAILED COWBOY HAT (Large, Hero) ────────────────────────────────────────
export function CowboyHatLarge({ className = 'w-24 h-20' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hat shadow */}
      <ellipse cx="60" cy="78" rx="52" ry="6" fill="#0d0603" opacity="0.6" />
      {/* Brim */}
      <path
        d="M5 62 C15 58 30 58 42 60 L78 60 C90 58 105 58 115 62 C110 70 90 74 60 74 C30 74 10 70 5 62Z"
        fill="url(#brimGrad)"
        stroke="#ca8a04"
        strokeWidth="1"
      />
      {/* Crown */}
      <path
        d="M42 60 C40 50 38 30 44 22 C48 16 54 14 60 14 C66 14 72 16 76 22 C82 30 80 50 78 60 Z"
        fill="url(#crownGrad)"
        stroke="#ca8a04"
        strokeWidth="1"
      />
      {/* Crown indent dip at top */}
      <path
        d="M48 16 C50 20 54 22 60 22 C66 22 70 20 72 16"
        stroke="#451a03"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hatband */}
      <path
        d="M42 54 C50 52 58 51.5 60 51.5 C62 51.5 70 52 78 54"
        stroke="#451a03"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Band buckle */}
      <rect x="56" y="50" width="8" height="6" rx="1" fill="#ca8a04" stroke="#fde047" strokeWidth="0.75" />
      <rect x="58.5" y="52" width="3" height="2" rx="0.5" fill="#451a03" />
      {/* Brim edge highlight */}
      <path
        d="M12 62 C20 59 35 58 42 60"
        stroke="#fde047"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      <defs>
        <linearGradient id="brimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#5a3014" />
        </linearGradient>
        <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="60%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── SAGUARO CACTUS ───────────────────────────────────────────────────────────
export function CactusSvg({ className = 'w-16 h-32' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main trunk */}
      <path
        d="M24 100 L24 40 Q24 32 30 32 Q36 32 36 40 L36 100 Z"
        fill="url(#cactusGrad)"
        stroke="#166534"
        strokeWidth="0.5"
      />
      {/* Left arm */}
      <path
        d="M24 60 Q12 60 10 52 Q8 44 14 44 Q18 44 18 48 L18 70"
        fill="url(#cactusGrad)"
        stroke="#166534"
        strokeWidth="0.5"
      />
      {/* Right arm */}
      <path
        d="M36 55 Q48 55 50 47 Q52 39 46 39 Q42 39 42 43 L42 72"
        fill="url(#cactusGrad)"
        stroke="#166534"
        strokeWidth="0.5"
      />
      {/* Spines on trunk */}
      <line x1="24" y1="45" x2="20" y2="43" stroke="#d97706" strokeWidth="0.75" />
      <line x1="24" y1="52" x2="20" y2="50" stroke="#d97706" strokeWidth="0.75" />
      <line x1="36" y1="48" x2="40" y2="46" stroke="#d97706" strokeWidth="0.75" />
      <line x1="36" y1="58" x2="40" y2="56" stroke="#d97706" strokeWidth="0.75" />
      {/* Top flower */}
      <circle cx="30" cy="32" r="4" fill="#d97706" opacity="0.9" />
      <circle cx="30" cy="32" r="2" fill="#fde047" />
      {/* Ground shadow */}
      <ellipse cx="30" cy="102" rx="14" ry="3" fill="#0d0603" opacity="0.5" />
      <defs>
        <linearGradient id="cactusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="40%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── REVOLVER / PISTOL SILHOUETTE ─────────────────────────────────────────────
export function RevolverSvg({ className = 'w-20 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Barrel */}
      <rect x="10" y="22" width="52" height="10" rx="2" fill="url(#gunGrad)" />
      {/* Front sight */}
      <rect x="14" y="19" width="3" height="4" rx="0.5" fill="#ca8a04" />
      {/* Cylinder */}
      <circle cx="66" cy="27" r="12" fill="url(#cylinderGrad)" stroke="#451a03" strokeWidth="1" />
      {/* Cylinder chambers */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={66 + 7 * Math.cos(angle)}
            cy={27 + 7 * Math.sin(angle)}
            r="2.5"
            fill="#120b06"
            stroke="#78350f"
            strokeWidth="0.5"
          />
        );
      })}
      {/* Hammer */}
      <path d="M74 18 L78 14 L80 16 L76 20 Z" fill="#78350f" />
      {/* Grip handle */}
      <path
        d="M62 32 Q64 36 60 44 Q58 50 52 52 Q48 52 48 48 Q48 42 52 38 L62 32 Z"
        fill="url(#gripGrad)"
        stroke="#451a03"
        strokeWidth="0.75"
      />
      {/* Grip lines texture */}
      <line x1="52" y1="36" x2="58" y2="40" stroke="#120b06" strokeWidth="0.75" opacity="0.6" />
      <line x1="51" y1="40" x2="57" y2="44" stroke="#120b06" strokeWidth="0.75" opacity="0.6" />
      <line x1="50" y1="44" x2="55" y2="48" stroke="#120b06" strokeWidth="0.75" opacity="0.6" />
      {/* Trigger guard */}
      <path d="M56 32 Q62 34 64 42 Q60 44 56 40 Z" fill="none" stroke="#78350f" strokeWidth="1" />
      {/* Trigger */}
      <line x1="60" y1="32" x2="62" y2="36" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="gunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#2c1008" />
        </linearGradient>
        <radialGradient id="cylinderGrad" cx="35%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#2c1008" />
        </radialGradient>
        <linearGradient id="gripGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── HORSESHOE (Detailed) ─────────────────────────────────────────────────────
export function HorseshoeLarge({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer shadow */}
      <path
        d="M18 72 L18 44 C18 25 62 25 62 44 L62 72"
        stroke="#451a03"
        strokeWidth="20"
        strokeLinecap="square"
        fill="none"
      />
      {/* Main horseshoe body */}
      <path
        d="M18 72 L18 44 C18 25 62 25 62 44 L62 72"
        stroke="url(#horseshoeGrad)"
        strokeWidth="14"
        strokeLinecap="square"
        fill="none"
      />
      {/* Inner highlight */}
      <path
        d="M20 70 L20 44 C20 28 60 28 60 44 L60 70"
        stroke="url(#horseshoeHighlight)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Nail holes */}
      {[[18, 50], [18, 60], [62, 50], [62, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#120b06" stroke="#ca8a04" strokeWidth="0.75" />
      ))}
      <defs>
        <linearGradient id="horseshoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="30%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="horseshoeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── SCROLL / WANTED POSTER ORNAMENT ─────────────────────────────────────────
export function WantedPosterOrnament({ className = 'w-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center diamond */}
      <polygon points="200,4 206,15 200,26 194,15" fill="none" stroke="#ca8a04" strokeWidth="1" />
      <polygon points="200,8 204,15 200,22 196,15" fill="#ca8a04" opacity="0.4" />
      {/* Left ornament */}
      <line x1="0" y1="15" x2="185" y2="15" stroke="#78350f" strokeWidth="1" />
      <line x1="0" y1="15" x2="185" y2="15" stroke="#ca8a04" strokeWidth="0.5" strokeDasharray="4 8" />
      {/* Right ornament */}
      <line x1="215" y1="15" x2="400" y2="15" stroke="#78350f" strokeWidth="1" />
      <line x1="215" y1="15" x2="400" y2="15" stroke="#ca8a04" strokeWidth="0.5" strokeDasharray="4 8" />
      {/* Decorative circles on lines */}
      {[60, 100, 140, 170].map((x) => (
        <circle key={x} cx={x} cy={15} r="2" fill="none" stroke="#ca8a04" strokeWidth="0.75" />
      ))}
      {[230, 260, 300, 340].map((x) => (
        <circle key={x} cx={x} cy={15} r="2" fill="none" stroke="#ca8a04" strokeWidth="0.75" />
      ))}
      {/* Fleur-de-lis ends */}
      <path d="M6 11 Q10 8 14 11 Q10 15 6 18 Q10 15 14 18 Q10 22 6 19" stroke="#ca8a04" strokeWidth="0.75" fill="none" />
      <path d="M394 11 Q390 8 386 11 Q390 15 394 18 Q390 15 386 18 Q390 22 394 19" stroke="#ca8a04" strokeWidth="0.75" fill="none" />
    </svg>
  );
}

// ─── CAMPFIRE (animated) ──────────────────────────────────────────────────────
export function CampfireSvg({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <style>{`
        @keyframes flicker1 {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
          33% { transform: scaleY(1.12) scaleX(0.9); opacity: 1; }
          66% { transform: scaleY(0.95) scaleX(1.05); opacity: 0.85; }
        }
        @keyframes flicker2 {
          0%, 100% { transform: scaleY(1) translateX(0); opacity: 0.8; }
          40% { transform: scaleY(1.18) translateX(-2px); opacity: 1; }
          70% { transform: scaleY(0.9) translateX(2px); opacity: 0.7; }
        }
        @keyframes flicker3 {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(1.25); opacity: 0.9; }
        }
        .flame1 { transform-origin: 40px 52px; animation: flicker1 1.1s ease-in-out infinite; }
        .flame2 { transform-origin: 40px 52px; animation: flicker2 0.9s ease-in-out infinite 0.2s; }
        .flame3 { transform-origin: 40px 52px; animation: flicker3 1.3s ease-in-out infinite 0.1s; }
      `}</style>
      {/* Logs */}
      <line x1="20" y1="62" x2="60" y2="58" stroke="#451a03" strokeWidth="6" strokeLinecap="round" />
      <line x1="20" y1="58" x2="60" y2="62" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
      {/* Embers */}
      <circle cx="30" cy="62" r="2" fill="#f97316" opacity="0.7" />
      <circle cx="40" cy="63" r="1.5" fill="#fde047" opacity="0.6" />
      <circle cx="52" cy="61" r="2" fill="#f97316" opacity="0.5" />
      {/* Outer flame (blue base) */}
      <path
        className="flame3"
        d="M32 54 Q28 42 36 32 Q40 24 40 20 Q44 30 48 24 Q52 32 50 44 Q48 54 40 58 Q32 54 32 54Z"
        fill="#fde047"
        opacity="0.6"
      />
      {/* Mid flame (orange) */}
      <path
        className="flame2"
        d="M34 56 Q30 46 36 36 Q40 28 40 24 Q44 32 46 28 Q50 36 48 46 Q46 56 40 58 Q34 56 34 56Z"
        fill="#f97316"
        opacity="0.85"
      />
      {/* Inner flame (bright) */}
      <path
        className="flame1"
        d="M36 56 Q34 48 38 40 Q40 34 40 30 Q42 36 44 32 Q46 40 44 50 Q42 56 40 58 Q38 57 36 56Z"
        fill="#fef08a"
      />
      {/* Ground shadow */}
      <ellipse cx="40" cy="66" rx="18" ry="3" fill="#0d0603" opacity="0.5" />
    </svg>
  );
}

// ─── WOODEN SIGN POST ─────────────────────────────────────────────────────────
export function WoodenSignPost({ text = 'WANTED', className = 'w-40 h-28' }: { text?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Post */}
      <rect x="74" y="60" width="12" height="50" rx="1" fill="#451a03" stroke="#78350f" strokeWidth="1" />
      {/* Wood grain on post */}
      <line x1="77" y1="65" x2="77" y2="105" stroke="#2c1008" strokeWidth="0.5" opacity="0.5" />
      <line x1="80" y1="62" x2="80" y2="108" stroke="#78350f" strokeWidth="0.5" opacity="0.3" />
      {/* Sign board */}
      <rect x="10" y="10" width="140" height="58" rx="3" fill="url(#signGrad)" stroke="#78350f" strokeWidth="2" />
      {/* Wood grain lines */}
      <line x1="10" y1="25" x2="150" y2="25" stroke="#451a03" strokeWidth="0.75" opacity="0.4" />
      <line x1="10" y1="40" x2="150" y2="40" stroke="#451a03" strokeWidth="0.75" opacity="0.3" />
      <line x1="10" y1="55" x2="150" y2="55" stroke="#451a03" strokeWidth="0.75" opacity="0.4" />
      {/* Bracket arms */}
      <rect x="62" y="58" width="12" height="6" rx="1" fill="#451a03" />
      {/* Corner nails */}
      <circle cx="22" cy="22" r="3.5" fill="url(#nailGrad)" />
      <circle cx="138" cy="22" r="3.5" fill="url(#nailGrad)" />
      <circle cx="22" cy="56" r="3.5" fill="url(#nailGrad)" />
      <circle cx="138" cy="56" r="3.5" fill="url(#nailGrad)" />
      {/* Sign text placeholder area */}
      <rect x="20" y="18" width="120" height="42" rx="2" fill="#120b06" opacity="0.3" />
      <defs>
        <linearGradient id="signGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#5a3014" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <radialGradient id="nailGrad" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="60%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ─── TUMBLEWEED ───────────────────────────────────────────────────────────────
export function TumbleweedSvg({ className = 'w-14 h-14' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <style>{`
        @keyframes tumble {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tumbleweed-spin { 
          transform-origin: 30px 30px; 
          animation: tumble 4s linear infinite; 
        }
      `}</style>
      <g className="tumbleweed-spin">
        {/* Main circle outline */}
        <circle cx="30" cy="30" r="22" stroke="#854d0e" strokeWidth="1.5" fill="none" />
        {/* Internal branch network */}
        <path d="M30 8 Q28 20 30 30 Q32 20 30 8" stroke="#78350f" strokeWidth="1" fill="none" />
        <path d="M30 52 Q32 40 30 30 Q28 40 30 52" stroke="#78350f" strokeWidth="1" fill="none" />
        <path d="M8 30 Q20 28 30 30 Q20 32 8 30" stroke="#78350f" strokeWidth="1" fill="none" />
        <path d="M52 30 Q40 32 30 30 Q40 28 52 30" stroke="#78350f" strokeWidth="1" fill="none" />
        {/* Diagonal branches */}
        <path d="M14 14 Q22 22 30 30 Q22 22 14 14" stroke="#854d0e" strokeWidth="0.75" fill="none" />
        <path d="M46 46 Q38 38 30 30 Q38 38 46 46" stroke="#854d0e" strokeWidth="0.75" fill="none" />
        <path d="M46 14 Q38 22 30 30 Q38 22 46 14" stroke="#854d0e" strokeWidth="0.75" fill="none" />
        <path d="M14 46 Q22 38 30 30 Q22 38 14 46" stroke="#854d0e" strokeWidth="0.75" fill="none" />
        {/* Center node */}
        <circle cx="30" cy="30" r="3" fill="#78350f" stroke="#ca8a04" strokeWidth="0.5" />
        {/* Small nodes at tips */}
        {[[30, 8], [30, 52], [8, 30], [52, 30], [14, 14], [46, 46], [46, 14], [14, 46]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="#ca8a04" opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}

// ─── MOON & STARS NIGHT SKY DECORATION ───────────────────────────────────────
export function NightSkyDecor({ className = 'w-full h-24' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stars of varying sizes */}
      {[
        [80, 20, 1.5], [150, 10, 1], [240, 30, 2], [320, 15, 1], [410, 25, 1.5],
        [500, 8, 1], [600, 35, 2.5], [680, 12, 1], [760, 28, 1.5], [850, 18, 1],
        [940, 40, 2], [1030, 10, 1.5], [1120, 25, 1], [1200, 32, 2], [1310, 14, 1],
        [1380, 22, 1.5], [45, 50, 1], [190, 60, 1.5], [360, 55, 1], [520, 65, 2],
        [700, 48, 1], [880, 70, 1.5], [1060, 42, 1], [1250, 68, 2], [1420, 50, 1],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#fde047" opacity={0.4 + (r as number) * 0.15} />
      ))}
      {/* Crescent moon */}
      <circle cx="720" cy="30" r="18" fill="#fef08a" opacity="0.85" />
      <circle cx="728" cy="24" r="14" fill="#120b06" />
      {/* Moon glow */}
      <circle cx="720" cy="30" r="26" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.1" />
    </svg>
  );
}

// ─── DETAILED WANTED POSTER FRAME SVG ────────────────────────────────────────
export function WantedFrameOrnament({ className = 'w-full h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top ornamental bar */}
      <line x1="0" y1="16" x2="300" y2="16" stroke="#783e1c" strokeWidth="2" />
      {/* Ornamental pattern repeat */}
      {Array.from({ length: 15 }, (_, i) => {
        const x = 10 + i * 20;
        return (
          <g key={i}>
            <circle cx={x} cy={16} r="2.5" fill="#451a03" stroke="#ca8a04" strokeWidth="0.75" />
            <line x1={x} y1="8" x2={x} y2="24" stroke="#78350f" strokeWidth="0.75" opacity="0.5" />
          </g>
        );
      })}
      {/* Corner flourishes */}
      <path d="M0 0 Q8 8 0 16 Q8 8 16 0" stroke="#ca8a04" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M300 0 Q292 8 300 16 Q292 8 284 0" stroke="#ca8a04" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M0 32 Q8 24 0 16 Q8 24 16 32" stroke="#ca8a04" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M300 32 Q292 24 300 16 Q292 24 284 32" stroke="#ca8a04" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}


// ─── GALLOPING WILD HORSE & STALLION SILHOUETTE ──────────────────────────────
export function GallopingHorseSvg({ className = 'w-24 h-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Horse body & limbs in powerful gallop */}
      <path
        d="M20 54 Q15 62 8 68 Q18 64 24 58 L32 46 Q40 44 54 44 Q68 44 76 38 L84 28 Q88 20 92 16 Q96 12 102 12 Q108 12 110 16 Q108 20 102 24 L96 32 Q92 40 88 44 L98 62 Q102 70 112 74 Q100 72 94 62 L84 48 Q76 52 64 52 L56 68 Q52 76 44 78 Q48 72 50 64 L54 52 L42 50 L34 54 L20 54 Z"
        fill="url(#horseGrad)"
      />
      {/* Flowing Mane & Tail */}
      <path
        d="M84 22 Q78 18 74 24 Q80 26 84 22 Z M18 52 Q6 48 2 40 Q8 46 16 48 Z"
        fill="#f59e0b"
        opacity="0.8"
      />
      {/* Ground dust puff beneath hooves */}
      <ellipse cx="26" cy="66" rx="8" ry="2" fill="#ca8a04" opacity="0.3" />
      <ellipse cx="98" cy="70" rx="10" ry="2.5" fill="#ca8a04" opacity="0.3" />
      <defs>
        <linearGradient id="horseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="45%" stopColor="#854d0e" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── SHERIFF STAR DECORATIVE PLAQUE ──────────────────────────────────────────
export function SheriffStarPlaque({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" fill="#2a1408" stroke="#ca8a04" strokeWidth="2" />
      <circle cx="32" cy="32" r="25" stroke="#fde047" strokeWidth="0.75" strokeDasharray="3 2" />
      {/* 6-point Sheriff star */}
      <polygon
        points="32,10 36,22 49,22 39,30 43,43 32,35 21,43 25,30 15,22 28,22"
        fill="url(#sheriffStarGrad)"
        stroke="#fde047"
        strokeWidth="1"
      />
      <circle cx="32" cy="32" r="5" fill="#451a03" stroke="#ca8a04" strokeWidth="1" />
      <defs>
        <linearGradient id="sheriffStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
    </svg>
  );
}


// ─── SOUTHWESTERN RETRO STARBURST BAND (FROM HOWDY POSTER) ───────────────────
export function SouthwesternStarBand({ className = 'w-full h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 5 Southwestern Starbursts */}
      {[40, 120, 200, 280, 360].map((cx, i) => (
        <g key={i}>
          {/* 8-point star */}
          <polygon
            points={`${cx},4 ${cx+4},12 ${cx+12},12 ${cx+6},16 ${cx+9},24 ${cx},19 ${cx-9},24 ${cx-6},16 ${cx-12},12 ${cx-4},12`}
            fill="#d99951"
          />
          {/* Center diamond */}
          <polygon
            points={`${cx},11 ${cx+4},16 ${cx},21 ${cx-4},16`}
            fill="#fbf5eb"
          />
          {/* Small dot in center */}
          <circle cx={cx} cy={16} r={1.5} fill="#28150d" />
        </g>
      ))}
      {/* Horizontal accent lines between stars */}
      <line x1="60" y1="16" x2="100" y2="16" stroke="#be592e" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="16" x2="180" y2="16" stroke="#be592e" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="220" y1="16" x2="260" y2="16" stroke="#be592e" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="300" y1="16" x2="340" y2="16" stroke="#be592e" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// ─── RETRO HOWDY BADGE (CIRCULAR COWBOY HAT BADGE) ───────────────────────────
export function RetroCowboyBadge({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle frame */}
      <circle cx="50" cy="50" r="46" fill="#fbf5eb" stroke="#28150d" strokeWidth="3" />
      <circle cx="50" cy="50" r="42" fill="#f0e4cf" stroke="#be592e" strokeWidth="1.5" />
      
      {/* Inner sun disk */}
      <circle cx="50" cy="50" r="32" fill="#d99951" />
      
      {/* Cowboy Hat Silhouette */}
      {/* Brim */}
      <path
        d="M26 56 C32 50 44 48 50 48 C56 48 68 50 74 56 C70 61 58 63 50 63 C42 63 30 61 26 56 Z"
        fill="#28150d"
      />
      {/* Crown */}
      <path
        d="M38 52 C36 44 36 34 42 29 C45 25 48 24 50 24 C52 24 55 25 58 29 C64 34 64 44 62 52 Z"
        fill="#28150d"
      />
      {/* Crown indent */}
      <path
        d="M44 26 C47 28 50 29 53 28 C55 27 56 26 56 26"
        stroke="#fbf5eb"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
