"use client";

import { WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWA() {
  return (
    <aside
      aria-label="Floating WhatsApp Action"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5"
    >
      {/* Tooltip Pill on Desktop */}
      <div className="hidden md:flex items-center gap-2 bg-[#031C3B]/95 backdrop-blur-md border border-[#0280F9]/30 text-white text-xs px-3.5 py-2 rounded-full shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[#9cd0ff] font-medium font-mono text-[11px]">
          Customer Support Online &middot; Respon Cepat
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
          "Halo Abo Rent Car, saya ingin cek ketersediaan mobil untuk perjalanan saya."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 p-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat WhatsApp Abo Rent Car"
      >
        <WhatsAppIcon size={26} className="text-white drop-shadow" />
      </a>
    </aside>
  );
}
