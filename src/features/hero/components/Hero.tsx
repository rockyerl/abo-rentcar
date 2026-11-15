"use client";

import { useState } from "react";
import { CARS, WA_NUMBER, BRAND_TAGLINE } from "@/lib/constants";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Gauge,
  MapPin,
} from "lucide-react";

export default function Hero() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const featuredCars = CARS.slice(0, 4);
  const currentCar = featuredCars[activeCarIndex] || featuredCars[0];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#02162e]">
      {/* Dynamic Brand Ambient Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0280F9]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-[400px] h-[400px] bg-[#005DBD]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Official Positioning & Values */}
          <div className="lg:col-span-7 space-y-8">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#04244D] border border-[#0280F9]/35 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#9cd0ff] tracking-wider uppercase">
                Rental Mobil Bandung &middot; Praktis, Ramah, Jelas
              </span>
            </div>

            {/* Main Headline & Usulan Tagline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Pilih mobil. <span className="blue-gradient-text block mt-1">Siap jalan.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed pt-1">
                Abo Rent Car adalah rental mobil di Bandung Raya dengan komunikasi yang praktis,
                ramah, dan jelas. Pilihan armada lengkap mulai{" "}
                <strong className="text-white">Rp 275.000/hari</strong>, lepas kunci tanpa ribet
                atau plus supir berpengalaman.
              </p>
            </div>

            {/* 3 Core Value Promises (Jelas, Ramah, Praktis) */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 size={18} className="text-[#0280F9] shrink-0" />
                <span>Tanpa Deposit Tunai (Cukup KTP &amp; SIM)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 size={18} className="text-[#0280F9] shrink-0" />
                <span>Antar Gratis ke Stasiun Whoosh Padalarang</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 size={18} className="text-[#0280F9] shrink-0" />
                <span>Mobil Bersih, Terawat Prima &amp; Bensin Cukup</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 size={18} className="text-[#0280F9] shrink-0" />
                <span>Harga Transparan Tanpa Biaya Terselubung</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  "Halo Abo Rent Car, saya ingin cek ketersediaan mobil untuk tanggal perjalanan saya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action px-8 py-4 rounded-xl text-sm tracking-wider uppercase font-bold flex items-center gap-3 shadow-xl"
              >
                <WhatsAppIcon size={18} />
                <span>Cek ketersediaan mobil</span>
              </a>

              <a
                href="#katalog"
                className="btn-action-outline px-7 py-4 rounded-xl text-sm tracking-wider uppercase font-semibold flex items-center gap-2"
              >
                <span>Lihat Pilihan Mobil</span>
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  4.95<span className="text-[#0280F9]">/5</span>
                </div>
                <div className="flex text-amber-400 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <div className="text-[11px] text-gray-400">1.200+ Pelanggan Puas</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  14<span className="text-[#0280F9]">+</span>
                </div>
                <div className="text-xs text-gray-300 font-semibold my-1">Unit Siap Jalan</div>
                <div className="text-[11px] text-gray-400">Tahun Muda Terawat</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  100<span className="text-[#0280F9]">%</span>
                </div>
                <div className="text-xs text-gray-300 font-semibold my-1">Tepat Waktu</div>
                <div className="text-[11px] text-gray-400">Antar Stasiun / Hotel</div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Catalog Showcase */}
          <div className="lg:col-span-5">
            <div className="luxury-card p-6 sm:p-7 relative overflow-hidden">
              {/* Unit Switcher Tabs */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
                {featuredCars.map((car, idx) => (
                  <button
                    key={car.id}
                    onClick={() => setActiveCarIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 ${
                      activeCarIndex === idx
                        ? "bg-[#005DBD] text-white font-bold shadow-md"
                        : "bg-[#02162e] text-gray-400 hover:text-white"
                    }`}
                  >
                    {car.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Showcase Image (Official Catalog Square Card) */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#02162e] p-2 border border-white/10 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentCar.image}
                  alt={`${currentCar.name} ${currentCar.modelType}`}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Car Info Bar */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentCar.name}</h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{currentCar.modelType}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 font-mono uppercase block">
                      Mulai Dari
                    </span>
                    <span className="text-lg font-bold text-white font-mono">
                      {currentCar.formattedPriceSelfDrive}
                    </span>
                    <span className="text-xs text-gray-400">/hari</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 bg-[#02162e] p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#0280F9]" />
                    <span>{currentCar.seats} Penumpang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={14} className="text-[#0280F9]" />
                    <span>{currentCar.transmission}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="#kalkulator"
                    className="btn-action-outline py-2.5 rounded-lg text-xs font-semibold text-center tracking-wider uppercase"
                  >
                    Hitung Biaya
                  </a>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      `Halo Abo Rent Car, saya tertarik sewa ${currentCar.name} (${currentCar.modelType}). Apakah unitnya masih tersedia?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action py-2.5 rounded-lg text-xs font-bold text-center tracking-wider uppercase flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Pesan Unit</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
