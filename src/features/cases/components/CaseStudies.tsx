import React, { useState } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import {
  Sparkles,
  CheckCircle2,
  Car,
  MapPin,
  Calendar,
  Quote,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function CaseStudies({
  onSelectCarForBooking,
}: {
  onSelectCarForBooking?: (carId: string) => void;
}) {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((cs) => cs.id === activeCaseId) || CASE_STUDIES[0];

  const carMapping: Record<string, string> = {
    "cs-whoosh-padalarang": "innova-zenix-hybrid",
    "cs-liburan-ciwidey": "innova-reborn-diesel",
    "cs-keliling-kafe-bandung": "all-new-brio-2024",
    "cs-acara-keluarga": "all-new-avanza",
  };

  const handleBookingFromCase = () => {
    const targetCarId = carMapping[activeCase.id] || "innova-zenix-hybrid";
    if (onSelectCarForBooking) {
      onSelectCarForBooking(targetCarId);
    } else {
      const el = document.getElementById("kalkulator");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-[#031C3B] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0280F9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Scenario & Outcome First */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="vip-badge">
            <Sparkles size={13} />
            Studi Kasus Skenario Nyata
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pengalaman Nyata Bersama <span className="blue-gradient-text">Abo Rent Car.</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Setiap perjalanan memiliki kebutuhan berbeda. Berikut adalah cara kami memberikan solusi
            praktis, ramah, dan jelas bagi pelanggan di lapangan.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {CASE_STUDIES.map((cs) => {
            const isActive = cs.id === activeCase.id;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveCaseId(cs.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isActive
                    ? "bg-[#005DBD] text-white border-[#0280F9] shadow-lg shadow-[#005DBD]/30"
                    : "bg-[#02162e] text-gray-400 border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{cs.clientCategory}</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Detail Container */}
        <div className="luxury-card p-6 sm:p-10 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Challenge & Solution Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0280F9] bg-[#0280F9]/10 px-3 py-1 rounded-full border border-[#0280F9]/20">
                  {activeCase.clientCategory}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                  {activeCase.title}
                </h3>
              </div>

              {/* Scenario Overview */}
              <div className="grid sm:grid-cols-3 gap-3 py-3 px-4 rounded-xl bg-[#02162e] border border-white/5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#0280F9] shrink-0" />
                  <span className="truncate">{activeCase.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#0280F9] shrink-0" />
                  <span>{activeCase.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={14} className="text-[#0280F9] shrink-0" />
                  <span className="truncate">{activeCase.vehicleUsed}</span>
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono uppercase tracking-wider">
                  <span>Kebutuhan / Tantangan:</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-4 rounded-xl bg-blue-950/20 border border-[#0280F9]/25 space-y-2">
                <div className="flex items-center gap-2 text-[#0280F9] text-xs font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 size={14} />
                  <span>Solusi dari Abo Rent Car:</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Client Quote & Immediate Booking Action */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              {/* Testimonial Quote Box */}
              <div className="p-6 rounded-2xl bg-[#02162e] border border-white/10 space-y-4 relative">
                <Quote size={28} className="text-[#0280F9]/40" />
                <p className="text-sm sm:text-base text-gray-200 italic leading-relaxed">
                  &ldquo;{activeCase.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{activeCase.clientName}</h4>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {activeCase.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(activeCase.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking CTA for this car model */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04244D] to-[#02162e] border border-[#0280F9]/30 space-y-4 shadow-xl">
                <div>
                  <span className="text-[10px] font-mono text-[#0280F9] uppercase tracking-wider block">
                    Ingin Perjalanan Serupa?
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Sewa {activeCase.vehicleUsed}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Hitung simulasi tarif transparan dan pesan unit siap jalan.
                  </p>
                </div>

                <button
                  onClick={handleBookingFromCase}
                  className="btn-action w-full py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Cek ketersediaan mobil</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
