"use client";

import { useState } from "react";
import { CARS, FLEET_CATEGORIES } from "@/lib/constants";
import CarCard from "./CarCard";
import { Compass } from "lucide-react";

export default function Fleet({ onSelectCar }: { onSelectCar?: (carId: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Armada");

  const filteredCars =
    selectedCategory === "Semua Armada"
      ? CARS
      : CARS.filter((car) => car.category === selectedCategory);

  return (
    <section id="katalog" className="py-16 sm:py-24 bg-[#02162e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="vip-badge">
              <Compass size={13} />
              Katalog Resmi Abo Rent Car
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Pilihan Mobil Lengkap <span className="blue-gradient-text">Siap Jalan.</span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-base max-w-xl">
              14 pilihan armada prima mulai Rp 275.000/hari. Unit terawat di bengkel resmi, AC
              dingin, interior bersih wangi, dan jaminan tepat waktu.
            </p>
          </div>

          {/* Category Filter Pills: Scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {FLEET_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#005DBD] text-white font-bold shadow-md shadow-[#005DBD]/30"
                    : "bg-[#04244D] text-gray-300 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onSelectForCalculator={onSelectCar} />
          ))}
        </div>
      </div>
    </section>
  );
}
