'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass, Scroll, HelpCircle, Users } from 'lucide-react';
import { CowboyHatIcon } from './WesternSvg';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rute dibuang dari navbar sesuai permintaan user
  const navLinks = [
    { name: 'Pintu Gerbang', href: '/', icon: Compass, isActive: pathname === '/' },
    { name: 'Papan Sayembara', href: '/lomba', icon: Scroll, isActive: pathname === '/lomba' },
    { name: 'Balai FAQ & Telegraf', href: '/faq', icon: HelpCircle, isActive: pathname === '/faq' },
  ];

  return (
    <div className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-5xl rounded-2xl sm:rounded-full transition-all duration-300 border-2 border-[#be592e] shadow-[0_14px_36px_rgba(0,0,0,0.65)] overflow-hidden ${
          isScrolled
            ? 'bg-[#28150d]/98 backdrop-blur-md py-2 px-3 sm:px-5'
            : 'bg-[#28150d]/90 backdrop-blur-sm py-2.5 px-3 sm:px-5'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo with Western Cowboy Hat */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full bg-gradient-to-br from-[#c75e2f] to-[#28150d] border-2 border-[#d99951] text-[#fbf5eb] shadow-md group-hover:rotate-6 transition-transform">
              <CowboyHatIcon className="w-5 h-5 text-[#fde047]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cowboy text-base sm:text-lg text-[#fbf5eb] tracking-wider group-hover:text-[#d99951] transition-colors leading-none">
                  ISFEST
                </span>
                <span className="font-cowboy text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-[#be592e] text-[#fffbf5] border border-[#fde047]/50">
                  2027
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-[#d99951] font-semibold tracking-wide hidden xs:block">
                Wild West Frontier
              </p>
            </div>
          </Link>

          {/* Desktop Nav: ALWAYS VISIBLE ON DESKTOP & TABLET */}
          <nav className="hidden md:flex items-center gap-1 bg-[#170a04] p-1 rounded-full border border-[#be592e]/50 shrink-0">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    link.isActive
                      ? 'text-[#fffbf5] bg-[#be592e] border border-[#fde047] shadow-sm font-bold'
                      : 'text-[#f0e4cf] hover:text-[#d99951] hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#d99951] shrink-0" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (onRegisterClick) {
                  onRegisterClick();
                } else {
                  window.location.href = '/lomba';
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-cowboy text-[#fff4e0] btn-leather rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform shrink-0"
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">DAFTAR POSSE GENG</span>
              <span className="sm:hidden">DAFTAR</span>
            </button>

            {/* Mobile-only menu toggle (only on very small mobile screens < 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#2a1408] border border-[#5a3014] text-[#fde047] hover:bg-[#381c0c]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (only below md screens) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#4a2610] animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-1.5 pb-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-colors ${
                      link.isActive
                        ? 'text-[#fde047] bg-[#381c0c] border border-[#ca8a04]/70'
                        : 'text-[#eed9b3] hover:text-[#fde047] hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#d97706]" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
