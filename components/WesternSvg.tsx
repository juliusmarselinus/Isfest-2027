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
