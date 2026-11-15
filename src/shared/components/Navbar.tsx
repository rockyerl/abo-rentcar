"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_NUMBER, COMPANY_NAME, BRAND_TAGLINE } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#katalog", label: "Pilihan Mobil" },
  { href: "#cara-sewa", label: "Cara Sewa" },
  { href: "#kalkulator", label: "Kalkulator" },
  { href: "#case-studies", label: "Studi Kasus" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#031C3B]/95 backdrop-blur-md border-b border-[#0280F9]/20 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo from guideline: minimum 140px width on website */}
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abo-rent-car-logo.png"
              alt="Abo Rent Car Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Minimalist Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-200 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}

            {/* Direct B2B Portal Link */}
            <Link
              href="/b2b"
              className="text-xs text-[#9cd0ff] hover:text-white font-mono transition-colors flex items-center gap-1 border-l border-white/10 pl-6"
            >
              <span>Layanan B2B</span>
              <ArrowUpRight size={13} className="text-[#0280F9]" />
            </Link>
          </nav>

          {/* Official Primary Action CTA ("Cek ketersediaan mobil") */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Halo Abo Rent Car, saya ingin cek ketersediaan mobil untuk tanggal perjalanan saya."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>Cek ketersediaan mobil</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Halo Abo Rent Car, saya ingin cek ketersediaan mobil."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action p-2 rounded-lg text-white"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#04244D] border border-[#0280F9]/20 shadow-2xl space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm text-gray-200 hover:text-white font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/b2b"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm text-[#9cd0ff] font-mono flex items-center justify-between"
              >
                <span>Portal Korporat B2B</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
