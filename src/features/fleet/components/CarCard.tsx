import { CarFleetItem, WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import { Users, Gauge, Fuel, Check } from "lucide-react";

export default function CarCard({
  car,
  onSelectForCalculator,
}: {
  car: CarFleetItem;
  onSelectForCalculator?: (carId: string) => void;
}) {
  return (
    <div className="luxury-card overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Catalog Square Flyer / Card Container */}
        <div className="relative aspect-square overflow-hidden bg-[#031C3B] p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={car.image}
            alt={`${car.name} ${car.modelType}`}
            className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Highlight Badge */}
          {car.highlightTag && (
            <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase bg-[#005DBD] text-white px-2 sm:px-2.5 py-1 rounded-full shadow-lg border border-white/20">
                {car.highlightTag}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6">
          <div className="mb-3.5 sm:mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-[#0280F9] font-semibold">
                {car.brand}
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-gray-400">
                Tahun {car.year}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#9cd0ff] transition-colors mt-0.5">
              {car.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 font-mono mt-0.5">{car.modelType}</p>
          </div>

          {/* Specs Matrix */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2.5 sm:px-3 rounded-lg bg-[#02162e] border border-white/5 mb-4 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1 sm:gap-1.5 text-gray-200">
              <Users size={13} className="text-[#0280F9] shrink-0" />
              <span>{car.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-gray-200">
              <Gauge size={13} className="text-[#0280F9] shrink-0" />
              <span className="truncate">{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-gray-200">
              <Fuel size={13} className="text-[#0280F9] shrink-0" />
              <span className="truncate">{car.fuel}</span>
            </div>
          </div>

          {/* Official Catalog Pricing Matrix Table */}
          <div className="mb-4 p-2.5 sm:p-3 rounded-lg bg-[#02162e] border border-[#0280F9]/20 text-[11px] sm:text-xs">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="border-r border-white/10 pr-1 sm:pr-2">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#0280F9] font-bold block mb-0.5 sm:mb-1">
                  Weekday
                </span>
                <p className="text-white font-mono font-semibold text-xs sm:text-sm">
                  1 Hari: Rp {(car.weekday1Day / 1000).toLocaleString("id-ID")}K
                </p>
                <p className="text-gray-300 font-mono text-[10px] sm:text-[11px]">
                  &gt;2 Hari: Rp {(car.weekdayMultiDay / 1000).toLocaleString("id-ID")}K/hr
                </p>
              </div>
              <div className="pl-1 sm:pl-2">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#F6E6B4] font-bold block mb-0.5 sm:mb-1">
                  Weekend
                </span>
                <p className="text-white font-mono font-semibold text-xs sm:text-sm">
                  1 Hari: Rp {(car.weekend1Day / 1000).toLocaleString("id-ID")}K
                </p>
                <p className="text-gray-300 font-mono text-[10px] sm:text-[11px]">
                  &gt;2 Hari: Rp {(car.weekendMultiDay / 1000).toLocaleString("id-ID")}K/hr
                </p>
              </div>
            </div>
            <p className="text-[9px] sm:text-[10px] text-gray-400 text-center mt-1.5 border-t border-white/5 pt-1">
              *Jumat, Sabtu, Minggu &amp; Tgl Merah masuk harga weekend
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-1 mb-2">
            {car.features.slice(0, 3).map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-1.5 text-[11px] sm:text-xs text-gray-300"
              >
                <Check size={12} className="text-[#0280F9] mt-0.5 shrink-0" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="p-4 sm:p-6 pt-0 border-t border-white/10">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div>
            <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase block">
              Lepas Kunci
            </span>
            <span className="text-base sm:text-lg font-bold text-white font-mono">
              {car.formattedPriceSelfDrive}
            </span>
            <span className="text-[10px] sm:text-[11px] text-gray-400">/hari</span>
          </div>

          <div className="text-right">
            <span className="text-[9px] sm:text-[10px] text-[#0280F9] font-mono uppercase block">
              Plus Supir
            </span>
            <span className="text-base sm:text-lg font-bold text-[#9cd0ff] font-mono">
              {car.formattedPriceWithDriver}
            </span>
            <span className="text-[10px] sm:text-[11px] text-gray-400">/hari</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-1 sm:mt-2">
          {onSelectForCalculator ? (
            <button
              onClick={() => onSelectForCalculator(car.id)}
              className="btn-action-outline py-2.5 rounded-lg text-xs tracking-wider uppercase text-center"
            >
              Kalkulator
            </button>
          ) : (
            <a
              href="#kalkulator"
              className="btn-action-outline py-2.5 rounded-lg text-xs tracking-wider uppercase text-center"
            >
              Kalkulator
            </a>
          )}

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              `Halo Abo Rent Car, saya tertarik sewa ${car.name} (${car.modelType} - Tahun ${car.year}). Apakah unitnya masih tersedia?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action py-2.5 rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-1.5"
          >
            <WhatsAppIcon size={14} />
            <span>Pesan</span>
          </a>
        </div>
      </div>
    </div>
  );
}
