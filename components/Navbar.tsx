'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Compass, Scroll, MapPin, HelpCircle, Radio, Users } from 'lucide-react';
import { CowboyHatIcon } from './WesternSvg';

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pintu Gerbang', href: '#beranda', icon: Compass },
    { name: 'Papan Sayembara', href: '#lomba', icon: Scroll },
    { name: 'Rute Ekspedisi', href: '#linimasa', icon: MapPin },
    { name: 'Balai FAQ', href: '#faq', icon: HelpCircle },
    { name: 'Kantor Telegraf', href: '#kontak', icon: Radio },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#150a04]/95 backdrop-blur-md border-b-2 border-[#5a3014] shadow-xl py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Cowboy Hat SVG */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#9a4a1b] to-[#451e0b] border border-[#d97706]/60 text-[#fde047] shadow-md group-hover:rotate-6 transition-transform">
              <CowboyHatIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cowboy text-lg sm:text-xl text-[#fef3c7] tracking-wider group-hover:text-[#fde047] transition-colors">
                  ISFEST
                </span>
                <span className="font-cowboy text-[10px] px-2 py-0.5 rounded bg-[#381c0c] text-[#fde047] border border-[#d97706]/40">
                  2027
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-[#c29b75] font-semibold">
                The Wild West Digital Frontier • UMN
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#eed9b3] hover:text-[#fde047] hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                if (onRegisterClick) {
                  onRegisterClick();
                } else {
                  const el = document.getElementById('lomba');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-cowboy text-[#fff4e0] btn-leather rounded-lg cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              <span>DAFTAR POSSE GENG</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#2a1408] border border-[#5a3014] text-[#fde047]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden wood-board mt-2 mx-4 p-4 rounded-xl border border-[#783e1c] shadow-2xl">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-[#eed9b3] hover:text-[#fde047] hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#d97706]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#5a3014] mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onRegisterClick) {
                    onRegisterClick();
                  } else {
                    const el = document.getElementById('lomba');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-cowboy text-[#fff4e0] btn-leather rounded-lg"
              >
                <Users className="w-4 h-4" />
                <span>DAFTARKAN TIM POSSE SEKARANG</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
