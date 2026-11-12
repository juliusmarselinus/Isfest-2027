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
    <div className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-4xl rounded-2xl sm:rounded-full transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#180e07]/95 backdrop-blur-md border-[#ca8a04]/60 shadow-[0_12px_36px_rgba(0,0,0,0.85),_0_0_20px_rgba(202,138,4,0.2)] py-2 sm:py-2.5 px-3.5 sm:px-6'
            : 'bg-[#1a0f08]/85 backdrop-blur-sm border-[#783e1c]/80 shadow-[0_8px_28px_rgba(0,0,0,0.7)] py-2.5 sm:py-3 px-3.5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo with Western Cowboy Hat */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full bg-gradient-to-br from-[#9a4a1b] to-[#451e0b] border border-[#d97706]/70 text-[#fde047] shadow-md group-hover:rotate-6 transition-transform">
              <CowboyHatIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cowboy text-base sm:text-lg text-[#fef3c7] tracking-wider group-hover:text-[#fde047] transition-colors leading-none">
                  ISFEST
                </span>
                <span className="font-cowboy text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-[#381c0c] text-[#fde047] border border-[#d97706]/40">
                  2027
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-[#caa27d] font-semibold tracking-wide hidden xs:block">
                Wild West Frontier
              </p>
            </div>
          </Link>

          {/* Desktop Nav: ALWAYS VISIBLE ON DESKTOP & TABLET (NO HAMBURGER) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-[#0e0703]/80 p-1 sm:p-1.5 rounded-full border border-[#4a2610]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    link.isActive
                      ? 'text-[#fde047] bg-[#381c0c] border border-[#ca8a04]/70 shadow-sm'
                      : 'text-[#eed9b3] hover:text-[#fde047] hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onRegisterClick) {
                  onRegisterClick();
                } else {
                  window.location.href = '/lomba';
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-cowboy text-[#fff4e0] btn-leather rounded-full cursor-pointer shadow-md hover:scale-105 transition-transform shrink-0"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DAFTAR POSSE GENG</span>
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
