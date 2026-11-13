'use client';

import React from 'react';

// ─── COWBOY HAT ICON (compact, navbar/buttons) ────────────────────────────────
export function CowboyHatIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 14V8.5C7 6.5 8 5 12 5C16 5 17 6.5 17 8.5V14" />
      <path d="M10 5C11 6.2 13 6.2 14 5" />
      <path d="M7 12H17" />
      <path d="M2 14.5C3.5 14 5.5 14 7 14H17C18.5 14 20.5 14 22 14.5C21 16.5 17.5 17 12 17C6.5 17 3 16.5 2 14.5Z" />
    </svg>
  );
}

// ─── SHERIFF BADGE ICON (compact, inline use) ─────────────────────────────────
export function SheriffBadgeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

// ─── HORSESHOE ICON (compact, inline use) ─────────────────────────────────────
export function HorseshoeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 4V11C6 14.3 8.7 17 12 17C15.3 17 18 14.3 18 11V4" />
      <path d="M3 4H7" />
      <path d="M17 4H21" />
      <circle cx="8" cy="8" r="0.75" fill="currentColor" />
      <circle cx="8" cy="12" r="0.75" fill="currentColor" />
      <circle cx="16" cy="8" r="0.75" fill="currentColor" />
      <circle cx="16" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

// ─── COWBOY SHERIFF CHARACTER (Detailed Colorful Vector) ─────────────────────
export function CowboySheriffCharacter({ className = 'w-36 h-64' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cowboy Sheriff Character"
    >
      <defs>
        <radialGradient id="sheriffStarGold" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </radialGradient>
        <linearGradient id="leatherCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#854d0e" />
          <stop offset="60%" stopColor="#713f12" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <linearGradient id="hatGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="60%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <linearGradient id="denimGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="80" cy="270" rx="45" ry="8" fill="#1c0c04" opacity="0.45" />

      {/* Duster coat (back flap) */}
      <path
        d="M44 110 L30 220 Q48 226 62 215 L58 140 Z"
        fill="#5a2e0e"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />
      <path
        d="M116 110 L130 220 Q112 226 98 215 L102 140 Z"
        fill="#5a2e0e"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />

      {/* Legs / Denim Jeans */}
      <rect x="52" y="165" width="22" height="75" rx="5" fill="url(#denimGrad)" />
      <rect x="86" y="165" width="22" height="75" rx="5" fill="url(#denimGrad)" />
      {/* Leather chaps overlay on jeans */}
      <path d="M52 170 L50 230 Q60 232 70 230 L74 170 Z" fill="#6c3614" opacity="0.8" />
      <path d="M108 170 L110 230 Q100 232 90 230 L86 170 Z" fill="#6c3614" opacity="0.8" />

      {/* Cowboy Boots */}
      {/* Left boot */}
      <path
        d="M50 234 L50 258 Q42 260 38 264 Q36 268 46 268 L68 268 L68 234 Z"
        fill="#451a03"
        stroke="#28150d"
        strokeWidth="1.5"
      />
      {/* Left boot heel & spur */}
      <rect x="62" y="264" width="8" height="6" fill="#1c0c04" />
      <circle cx="70" cy="260" r="3" fill="#eab308" />
      <polygon points="70,256 72,260 70,264 68,260" fill="#fef08a" />

      {/* Right boot */}
      <path
        d="M110 234 L110 258 Q118 260 122 264 Q124 268 114 268 L92 268 L92 234 Z"
        fill="#451a03"
        stroke="#28150d"
        strokeWidth="1.5"
      />
      {/* Right boot heel & spur */}
      <rect x="90" y="264" width="8" height="6" fill="#1c0c04" />
      <circle cx="90" cy="260" r="3" fill="#eab308" />
      <polygon points="90,256 92,260 90,264 88,260" fill="#fef08a" />

      {/* Torso / Shirt */}
      <rect x="52" y="98" width="56" height="68" rx="6" fill="#fdf2e9" stroke="#be592e" strokeWidth="1" />
      {/* Plaid / Western yoke lines */}
      <path d="M52 110 Q80 125 108 110" stroke="#be592e" strokeWidth="1.5" fill="none" />

      {/* Leather Vest */}
      <path
        d="M48 100 L44 165 L66 165 L72 120 L58 100 Z"
        fill="url(#leatherCoat)"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />
      <path
        d="M112 100 L116 165 L94 165 L88 120 L102 100 Z"
        fill="url(#leatherCoat)"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />

      {/* Gun Belt with Bullet Loops & Holsters */}
      <rect x="42" y="154" width="76" height="12" rx="3" fill="#3b1704" stroke="#1c0c04" strokeWidth="1.2" />
      {/* Belt Buckle (Brass oval) */}
      <ellipse cx="80" cy="160" rx="9" ry="7" fill="url(#sheriffStarGold)" stroke="#78350f" strokeWidth="1" />
      <rect x="78" y="157" width="4" height="6" fill="#3b1704" />
      {/* Bullets on belt */}
      {[50, 56, 62, 98, 104, 110].map((bx) => (
        <rect key={bx} x={bx} y="156" width="3" height="8" rx="1" fill="#fde047" stroke="#854d0e" strokeWidth="0.5" />
      ))}

      {/* Holster & Revolver (Left side) */}
      <path d="M38 162 L32 205 Q40 210 46 200 L48 162 Z" fill="#451a03" stroke="#28150d" strokeWidth="1" />
      {/* Revolver handle showing */}
      <path d="M40 152 Q44 146 50 148 L46 160 Z" fill="#78350f" stroke="#1c0c04" strokeWidth="1" />
      <circle cx="43" cy="154" r="1.5" fill="#fde047" />

      {/* Holster & Revolver (Right side) */}
      <path d="M122 162 L128 205 Q120 210 114 200 L112 162 Z" fill="#451a03" stroke="#28150d" strokeWidth="1" />
      <path d="M120 152 Q116 146 110 148 L114 160 Z" fill="#78350f" stroke="#1c0c04" strokeWidth="1" />
      <circle cx="117" cy="154" r="1.5" fill="#fde047" />

      {/* Golden Sheriff Badge on Vest */}
      <g transform="translate(60, 118)">
        <polygon
          points="0,-8 2.5,-2.5 8,-2.5 3.5,1.5 5.5,7 0,3.5 -5.5,7 -3.5,1.5 -8,-2.5 -2.5,-2.5"
          fill="url(#sheriffStarGold)"
          stroke="#78350f"
          strokeWidth="0.8"
        />
        <circle cx="0" cy="0" r="2" fill="#78350f" />
      </g>

      {/* Arms & Hands */}
      {/* Left arm */}
      <path
        d="M50 102 L32 145 Q36 156 42 152 L56 120 Z"
        fill="#854d0e"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />
      {/* Left leather cuff & glove */}
      <rect x="30" y="146" width="12" height="14" rx="2" fill="#451a03" />

      {/* Right arm - hand relaxed near holster */}
      <path
        d="M110 102 L128 145 Q124 156 118 152 L104 120 Z"
        fill="#854d0e"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />
      {/* Right leather cuff & glove */}
      <rect x="118" y="146" width="12" height="14" rx="2" fill="#451a03" />

      {/* Red Western Bandana / Neckerchief */}
      <polygon points="70,88 90,88 80,108" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
      <polygon points="76,88 84,88 80,102" fill="#ef4444" />
      <path d="M68 86 Q80 92 92 86 Q88 82 80 84 Q72 82 68 86 Z" fill="#b91c1c" />

      {/* Head / Face */}
      <ellipse cx="80" cy="74" rx="14" ry="16" fill="#fcd34d" stroke="#d97706" strokeWidth="1" />
      {/* Shadow under hat brim */}
      <path d="M66 66 Q80 72 94 66 L94 72 Q80 78 66 72 Z" fill="#92400e" opacity="0.6" />
      {/* Rugged mustache */}
      <path d="M72 80 Q80 78 88 80 Q84 84 80 82 Q76 84 72 80 Z" fill="#451a03" />
      {/* Stubble / chin */}
      <ellipse cx="80" cy="85" rx="5" ry="3" fill="#b45309" opacity="0.4" />

      {/* Cowboy Hat */}
      {/* Crown */}
      <path
        d="M62 52 C58 34 60 18 68 14 C74 11 86 11 92 14 C100 18 102 34 98 52 Z"
        fill="url(#hatGrad)"
        stroke="#3d1d07"
        strokeWidth="1.5"
      />
      {/* Crown crease indent */}
      <path d="M72 16 Q80 24 88 16" stroke="#3d1d07" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Golden hatband */}
      <path d="M61 47 Q80 43 99 47" stroke="#eab308" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="45" r="2.5" fill="#fef08a" stroke="#854d0e" strokeWidth="0.8" />
      {/* Wide Curved Brim */}
      <path
        d="M20 54 C35 48 58 48 80 48 C102 48 125 48 140 54 C132 64 108 67 80 67 C52 67 28 64 20 54 Z"
        fill="url(#hatGrad)"
        stroke="#3d1d07"
        strokeWidth="2"
      />
      {/* Brim top edge highlight */}
      <path d="M26 53 C46 48 64 47 80 47 C96 47 114 48 134 53" stroke="#fde047" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

// ─── CROSSED REVOLVERS SHERIFF SHIELD BADGE ──────────────────────────────────
export function CrossedRevolversBadge({ className = 'w-48 h-48' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sheriff Star and Crossed Revolvers"
    >
      <defs>
        <radialGradient id="shieldBg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="70%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </radialGradient>
        <linearGradient id="shieldBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <radialGradient id="starGoldG" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </radialGradient>
      </defs>

      {/* Outer wooden / leather shield */}
      <path
        d="M100 12 L165 32 C165 110 138 158 100 184 C62 158 35 110 35 32 Z"
        fill="url(#shieldBg)"
        stroke="url(#shieldBorder)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Inner dotted border */}
      <path
        d="M100 20 L157 38 C157 106 132 148 100 172 C68 148 43 106 43 38 Z"
        fill="none"
        stroke="#92400e"
        strokeWidth="2"
        strokeDasharray="4 3"
      />

      {/* Top 5-Point Sheriff Star with balls */}
      <g transform="translate(100, 58)">
        <polygon
          points="0,-26 7.5,-8 26,-8 11.5,4 17,22 0,11 -17,22 -11.5,4 -26,-8 -7.5,-8"
          fill="url(#starGoldG)"
          stroke="#78350f"
          strokeWidth="2"
        />
        {/* Ball tips */}
        {[
          [0, -26], [26, -8], [17, 22], [-17, 22], [-26, -8],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#fef08a" stroke="#78350f" strokeWidth="1" />
        ))}
        <circle cx="0" cy="0" r="7" fill="#fef3c7" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="3" fill="#92400e" />
      </g>

      {/* Little Cowboy Hat on upper right of shield */}
      <g transform="translate(142, 28) rotate(18) scale(0.42)">
        <ellipse cx="60" cy="65" rx="55" ry="12" fill="#78350f" stroke="#451a03" strokeWidth="3" />
        <path d="M30 60 C30 30 40 20 60 20 C80 20 90 30 90 60 Z" fill="#92400e" stroke="#451a03" strokeWidth="3" />
        <path d="M42 22 Q60 32 78 22" stroke="#451a03" strokeWidth="3" fill="none" />
        <path d="M30 55 Q60 50 90 55" stroke="#f59e0b" strokeWidth="4" fill="none" />
      </g>

      {/* Smoke puffs from revolvers */}
      <g opacity="0.75">
        <circle cx="56" cy="116" r="6" fill="#e2e8f0" />
        <circle cx="50" cy="112" r="8" fill="#f1f5f9" />
        <circle cx="44" cy="106" r="6" fill="#cbd5e1" opacity="0.6" />
        <circle cx="144" cy="116" r="6" fill="#e2e8f0" />
        <circle cx="150" cy="112" r="8" fill="#f1f5f9" />
        <circle cx="156" cy="106" r="6" fill="#cbd5e1" opacity="0.6" />
      </g>

      {/* Crossed Revolver 1 (pointing up-left) */}
      <g transform="translate(72, 132) rotate(-35) scale(0.65)">
        {/* Barrel */}
        <rect x="-40" y="-8" width="55" height="12" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
        {/* Cylinder */}
        <rect x="15" y="-12" width="22" height="20" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
        <circle cx="26" cy="-2" r="3" fill="#f59e0b" />
        {/* Handle grip */}
        <path d="M37 6 Q46 12 44 32 Q38 38 30 36 Q30 24 35 12 Z" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
        <line x1="33" y1="18" x2="41" y2="28" stroke="#fef08a" strokeWidth="1" opacity="0.6" />
        {/* Trigger guard */}
        <path d="M22 8 Q24 20 32 14" stroke="#334155" strokeWidth="2" fill="none" />
      </g>

      {/* Crossed Revolver 2 (pointing up-right) */}
      <g transform="translate(128, 132) scale(-1, 1) rotate(-35) scale(0.65)">
        <rect x="-40" y="-8" width="55" height="12" rx="2" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
        <rect x="15" y="-12" width="22" height="20" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
        <circle cx="26" cy="-2" r="3" fill="#f59e0b" />
        <path d="M37 6 Q46 12 44 32 Q38 38 30 36 Q30 24 35 12 Z" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
        <line x1="33" y1="18" x2="41" y2="28" stroke="#fef08a" strokeWidth="1" opacity="0.6" />
        <path d="M22 8 Q24 20 32 14" stroke="#334155" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}
