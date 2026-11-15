"use client";

import { useState, useMemo } from "react";
import { CARS, STRATEGIC_LOCATIONS } from "@/lib/constants";
import {
  calculateBookingPrice,
  calculateDaysBetween,
  generateB2CWhatsAppUrl,
  BookingFormData,
} from "@/lib/booking-calculator";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import { Calculator, Calendar, Check, MapPin, Car, Edit3 } from "lucide-react";

export default function OrderForm({ selectedCarId }: { selectedCarId?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carId, setCarId] = useState(selectedCarId || CARS[0]?.id || "");
  const [driverOption, setDriverOption] = useState<"self-drive" | "with-chauffeur">("self-drive");

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  const [pickupLocation, setPickupLocation] = useState(STRATEGIC_LOCATIONS[0]);
  const [customPickupAddress, setCustomPickupAddress] = useState("");
  const [flightOrTrainNumber, setFlightOrTrainNumber] = useState("");
  const [includeAirportMeet, setIncludeAirportMeet] = useState(false);
  const [notes, setNotes] = useState("");

  const activeCar = useMemo(() => {
    return CARS.find((c) => c.id === carId) || CARS[0];
  }, [carId]);

  const durationDays = useMemo(() => {
    return calculateDaysBetween(startDate, endDate);
  }, [startDate, endDate]);

  const calculation = useMemo(() => {
    return calculateBookingPrice(activeCar, durationDays, driverOption);
  }, [activeCar, durationDays, driverOption]);

  const isManualLocation =
    pickupLocation === "Lainnya (Isi Alamat Manual)" || customPickupAddress.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: BookingFormData = {
      name,
      phone,
      carId,
      driverOption,
      startDate,
      endDate,
      durationDays,
      pickupLocation,
      customPickupAddress,
      flightOrTrainNumber,
      includeAirportMeet,
      notes,
    };
    const waUrl = generateB2CWhatsAppUrl(formData, activeCar, calculation);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kalkulator" className="py-24 bg-[#031c3b] relative border-t border-[#0280F9]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="vip-badge">
            <Calculator size={13} />
            Simulasi Biaya Transparan &amp; Jelas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kalkulator Sewa Mobil <span className="blue-gradient-text">&amp; Booking Instan.</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Hitung sendiri estimasi biaya sewa mobil Anda dengan akurat. Nikmati tarif hemat sewa
            &gt;2 hari tanpa ada biaya terselubung.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: 7 cols */}
          <div className="lg:col-span-7 luxury-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type Switcher */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Pilih Cara Rental Anda *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDriverOption("self-drive")}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      driverOption === "self-drive"
                        ? "bg-[#0280F9]/20 border-[#0280F9] text-white"
                        : "bg-[#02162e] border-white/10 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">Lepas Kunci</span>
                      {driverOption === "self-drive" && (
                        <Check size={16} className="text-[#0280F9]" />
                      )}
                    </div>
                    <p className="text-xs text-gray-300">
                      Bebas setir sendiri, tanpa deposit rumit
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDriverOption("with-chauffeur")}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      driverOption === "with-chauffeur"
                        ? "bg-[#0280F9]/20 border-[#0280F9] text-white"
                        : "bg-[#02162e] border-white/10 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">Plus Supir Ramah</span>
                      {driverOption === "with-chauffeur" && (
                        <Check size={16} className="text-[#0280F9]" />
                      )}
                    </div>
                    <p className="text-xs text-gray-300">
                      Duduk tenang, supir sopan &amp; hafal rute
                    </p>
                  </button>
                </div>
              </div>

              {/* Car Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Pilih Model Mobil *
                </label>
                <div className="relative">
                  <select
                    value={carId}
                    onChange={(e) => setCarId(e.target.value)}
                    className="luxury-input w-full font-sans cursor-pointer pr-10 text-sm"
                  >
                    {CARS.map((car) => (
                      <option key={car.id} value={car.id} className="bg-[#04244D] text-white">
                        {car.name} ({car.modelType}) — Mulai {car.formattedPriceSelfDrive}/hari
                      </option>
                    ))}
                  </select>
                  <Car
                    size={16}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Rental Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#0280F9]" />
                    Tanggal Mulai Sewa *
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    min={today}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="luxury-input w-full font-mono text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#0280F9]" />
                    Tanggal Selesai Sewa *
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate || today}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="luxury-input w-full font-mono text-sm"
                    required
                  />
                </div>
              </div>

              {/* Hybrid Pickup Location (Dropdown + Manual Input) */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#0280F9]" />
                    Titik Penjemputan / Pengantaran Unit *
                  </span>
                  <span className="text-[11px] text-[#0280F9] font-normal normal-case">
                    Bisa pilih lokasi atau ketik manual
                  </span>
                </label>

                {/* Dropdown Selector */}
                <select
                  value={pickupLocation}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPickupLocation(val);
                    if (val !== "Lainnya (Isi Alamat Manual)") {
                      setCustomPickupAddress(val);
                    } else {
                      setCustomPickupAddress("");
                    }
                  }}
                  className="luxury-input w-full font-sans cursor-pointer text-sm"
                >
                  {STRATEGIC_LOCATIONS.map((loc, i) => (
                    <option key={i} value={loc} className="bg-[#04244D] text-white">
                      {loc}
                    </option>
                  ))}
                </select>

                {/* Manual Editable Address Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={customPickupAddress}
                    onChange={(e) => {
                      setCustomPickupAddress(e.target.value);
                      if (pickupLocation !== "Lainnya (Isi Alamat Manual)") {
                        setPickupLocation("Lainnya (Isi Alamat Manual)");
                      }
                    }}
                    placeholder="Atau ketik alamat lengkap/nama hotel/villa di sini..."
                    className="luxury-input w-full text-sm pl-10 pr-4"
                  />
                  <Edit3
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
                <p className="text-[11px] text-gray-400">
                  {pickupLocation === "Lainnya (Isi Alamat Manual)" && customPickupAddress
                    ? `Lokasi terpilih: "${customPickupAddress}"`
                    : "Pilih dari daftar di atas atau ketik langsung alamat penjemputan Anda."}
                </p>
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Nama Pemesan *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Lengkap Anda..."
                    required
                    className="luxury-input w-full text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    required
                    className="luxury-input w-full text-sm font-mono"
                  />
                </div>
              </div>

              {/* Flight or Train info */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Nomor Kereta Whoosh / Pesawat (Opsional)
                </label>
                <input
                  type="text"
                  value={flightOrTrainNumber}
                  onChange={(e) => setFlightOrTrainNumber(e.target.value)}
                  placeholder="Contoh: Whoosh G1234 / GA-120"
                  className="luxury-input w-full text-sm font-mono"
                />
              </div>

              {/* Extras Toggle */}
              <label className="flex items-start gap-3 cursor-pointer group pt-1">
                <input
                  type="checkbox"
                  checked={includeAirportMeet}
                  onChange={(e) => setIncludeAirportMeet(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#0280F9] focus:ring-[#0280F9]"
                />
                <div>
                  <span className="text-xs font-medium text-gray-200 group-hover:text-white">
                    Butuh antar-jemput gratis di Stasiun Whoosh Padalarang
                  </span>
                  <p className="text-[11px] text-gray-400">
                    Tim kami akan siap menyambut di Stasiun Padalarang tepat waktu sebelum kereta
                    tiba.
                  </p>
                </div>
              </label>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Kebutuhan khusus atau jadwal perjalanan..."
                  className="luxury-input w-full text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-action w-full py-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon size={18} />
                <span>Cek ketersediaan mobil</span>
              </button>
            </form>
          </div>

          {/* Right Summary: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white tracking-tight">Ringkasan Estimasi</h3>
                <span className="text-xs font-mono text-[#0280F9] bg-[#0280F9]/10 px-2.5 py-1 rounded-full border border-[#0280F9]/30">
                  {calculation.totalDays} Hari Sewa
                </span>
              </div>

              {/* Selected Car Card Preview */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#02162e] border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeCar.image}
                  alt={activeCar.name}
                  className="w-20 h-20 object-contain rounded-lg bg-black/40 p-1 border border-white/5"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{activeCar.name}</h4>
                  <p className="text-xs text-gray-400 font-mono">{activeCar.modelType}</p>
                  <span className="inline-block mt-1 text-[11px] font-mono text-[#0280F9]">
                    {driverOption === "self-drive" ? "Lepas Kunci" : "Plus Supir"}
                  </span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Tarif Harian ({calculation.totalDays > 2 ? ">2 Hari" : "1 Hari"})</span>
                  <span className="font-mono text-white">{calculation.formattedDailyRate}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({calculation.totalDays} hari)</span>
                  <span className="font-mono text-white">{calculation.formattedBaseTotal}</span>
                </div>

                {calculation.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 text-xs">
                    <span>Diskon Sewa Mingguan ({calculation.discountPercentage}%)</span>
                    <span className="font-mono">-{calculation.formattedDiscountAmount}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                      Total Estimasi
                    </span>
                    <span className="text-[11px] text-gray-400">Belum termasuk BBM</span>
                  </div>
                  <span className="text-2xl font-black text-white font-mono">
                    {calculation.formattedFinalTotal}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#02162e]/80 border border-white/5 space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-[#0280F9] font-semibold">
                  <Check size={14} />
                  <span>Komunikasi Praktis, Ramah, dan Jelas</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Semua armada dirawat rutin, ber-AC dingin, bersih wangi, dan diantar tepat waktu.
                  Bebas konsultasi rute &amp; jadwal kapan saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
