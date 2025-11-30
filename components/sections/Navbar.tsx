'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/robotik', label: 'Robotik' },
  { href: '/ai', label: 'AI & Yazılım' },
  { href: '/enerji', label: 'Enerji' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logos/LOGO-BASE-YUVARLAK.png adlı dosyanın kopyası.png"
              alt="HAVSAN Grup Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-google-blue to-google-red bg-clip-text text-transparent">
              HAVSAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-google-blue ${
                  scrolled ? 'text-gray-700' : 'text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-google-blue"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t" role="menu">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-gray-700 hover:text-google-blue transition-colors px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
