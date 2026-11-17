"use client";

import { useState } from "react";
import {
  DRIVER_TOUR_PACKAGES,
  TOUR_PACKAGE_INCLUSIONS,
  TOUR_PACKAGE_EXCLUSIONS,
  WA_NUMBER,
  DriverTourPackage,
} from "@/lib/constants";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import { MapPin, Check, X, Compass, Sparkles, ShieldCheck, ChevronRight, Info } from "lucide-react";

interface TourPackagesProps {
  onSelectPackageForBooking?: (pkgName: string, carName: string) => void;
}

export default function TourPackages({ onSelectPackageForBooking }: TourPackagesProps) {
  const [activeTab, setActiveTab] = useState<string>(DRIVER_TOUR_PACKAGES[0].id);

  const selectedPkg: DriverTourPackage =
    DRIVER_TOUR_PACKAGES.find((p) => p.id === activeTab) || DRIVER_TOUR_PACKAGES[0];

  const handleBookingClick = (pkg: DriverTourPackage, carName: string, price: string) => {
    if (onSelectPackageForBooking) {
      onSelectPackageForBooking(pkg.destination, carName);
    } else {
      const msg = `Halo Abo Rent Car, saya tertarik memesan *Paket Supir All-In*:\n\n📍 *Destinasi:* ${pkg.destination}\n🚘 *Pilihan Mobil:* ${carName}\n💰 *Tarif Paket:* ${price} (All-in: Mobil, Supir, BBM, Makan Supir, Tol)\n\nMohon info ketersediaan unit untuk tanggal perjalanan saya. Terima kasih!`;
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    }
  };

  return (
    <section id="paket-wisata" className="py-20 sm:py-24 bg-[#031C3B] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0280F9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#005DBD]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0280F9]/10 border border-[#0280F9]/30 text-[#60a5fa] text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={14} className="text-[#0280F9]" />
            <span>Layanan Eksklusif All-In</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Paket Supir &amp; Wisata Bandung
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Liburan dan perjalanan bisnis tanpa repot isi bensin, bayar tol, atau cari rute. Mobil
            terawat, supir ramah dan berpengalaman siap antar ke destinasi impian.
          </p>
        </div>

        {/* Destination Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {DRIVER_TOUR_PACKAGES.map((pkg) => {
            const isActive = pkg.id === activeTab;
            return (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0280F9] text-white shadow-lg shadow-[#0280F9]/30 border border-[#0280F9]"
                    : "bg-[#04244D]/80 text-slate-300 hover:text-white hover:bg-[#06336c] border border-white/10"
                }`}
              >
                <MapPin size={16} className={isActive ? "text-white" : "text-[#0280F9]"} />
                <span>{pkg.destination}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {pkg.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Package Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Visual Card & Destinations (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#04244D] flex-1 flex flex-col shadow-2xl">
              {/* Landmark Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedPkg.image}
                  alt={selectedPkg.destination}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04244D] via-[#04244D]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#0280F9] bg-[#02162e]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#0280F9]/30">
                    {selectedPkg.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1.5">
                    Rute {selectedPkg.destination}
                  </h3>
                </div>
              </div>

              {/* Package Details & Highlights */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {selectedPkg.tagline}
                  </p>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Compass size={14} className="text-[#0280F9]" />
                    <span>Destinasi Populer Tercover:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedPkg.destinationsCovered.map((dest, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-slate-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0280F9]" />
                        <span>{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusion Quick Badge */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                  <span>
                    Sudah termasuk <strong>Supir, BBM, Makan Supir &amp; Tol</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Table & Car Selection (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border border-white/10 bg-[#04244D] p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Pilihan Mobil &amp; Tarif Paket
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tarif per hari (All-In) untuk rute {selectedPkg.destination}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#60a5fa] bg-[#0280F9]/10 px-3 py-1.5 rounded-lg border border-[#0280F9]/20 self-start sm:self-auto">
                    Tanpa Biaya Tersembunyi
                  </span>
                </div>

                {/* Car Pricing List */}
                <div className="space-y-3 mb-6">
                  {selectedPkg.cars.map((car, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#0280F9]/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#0280F9]/10 border border-[#0280F9]/30 flex items-center justify-center text-[#0280F9] font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#60a5fa] transition-colors">
                            {car.name}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            Unit Terawat + Supir Berpengalaman
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                        <div className="text-left sm:text-right">
                          <span className="text-xs text-slate-400 block sm:inline">
                            Tarif All-In:{" "}
                          </span>
                          <span className="text-base sm:text-lg font-bold text-emerald-400">
                            {car.formattedPrice}
                          </span>
                          <span className="text-[10px] text-slate-400 block">/hari</span>
                        </div>

                        <button
                          onClick={() =>
                            handleBookingClick(selectedPkg, car.name, car.formattedPrice)
                          }
                          className="btn-action px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0"
                        >
                          <WhatsAppIcon size={14} />
                          <span>Pesan Paket</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparency Notice Box: Inclusions & Exclusions */}
              <div className="rounded-xl bg-[#02162e] border border-white/10 p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Inclusions */}
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Check size={14} className="text-emerald-400" />
                      <span>Paket Sudah Termasuk:</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {TOUR_PACKAGE_INCLUSIONS.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info size={14} className="text-amber-400" />
                      <span>Paket Belum Termasuk:</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {TOUR_PACKAGE_EXCLUSIONS.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">&times;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-slate-400 mt-2.5 italic">
                      *Parkir dan tiket masuk dibayar terpisah di pintu objek wisata masing-masing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#005DBD] via-[#0280F9] to-[#005DBD] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Punya Rute Kustom Luar Kota atau Tour Khusus?
            </h3>
            <p className="text-sm text-blue-100">
              Tim Abo Rent Car siap merancang paket fleksibel untuk perjalanan keluarga, kantor,
              maupun rombongan VIP.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Halo Abo Rent Car, saya ingin konsultasi rute wisata kustom bersama supir."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white text-[#005DBD] font-bold text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2 shrink-0"
          >
            <WhatsAppIcon size={18} />
            <span>Konsultasi Rute Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}
