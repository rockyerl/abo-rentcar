"use client";

import { WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWA() {
  return (
    <aside
      aria-label="Floating WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip Pill */}
      <div className="hidden md:flex items-center gap-2 bg-[#0C121D]/90 backdrop-blur-md border border-[#D4AF37]/30 text-white text-xs px-3.5 py-2 rounded-full shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[#F6E6B4] font-medium font-mono text-[11px]">
          VIP Concierge Online &middot; Respon Cepat
        </span>
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
          "Halo ABO Rent Car, saya ingin menanyakan ketersediaan armada eksekutif."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#25D366] to-[#128C7E] p-[2px] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Hubungi WhatsApp Concierge ABO Rent Car"
      >
        <div className="w-full h-full rounded-full bg-[#07090E] flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
          <WhatsAppIcon
            size={28}
            className="text-[#25D366] group-hover:text-white transition-colors"
          />
        </div>
      </a>
    </aside>
  );
}
