"use client";

import { useState } from "react";
import Link from "next/link";
import { WA_NUMBER, WA_DISPLAY, CARS } from "@/lib/constants";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import {
  Building2,
  FileSpreadsheet,
  ShieldCheck,
  Award,
  Users2,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Briefcase,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";

export default function B2BPortalPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    picName: "",
    picRole: "",
    email: "",
    phone: "",
    fleetType: "Toyota Innova Zenix Hybrid",
    fleetQuantity: "3 - 5 Unit",
    rentalDuration: "Bulanan (1 - 12 Bulan)",
    needVipChauffeur: "Ya, Termasuk Driver Berpengalaman & Ramah",
    needTaxInvoice: true,
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleB2BSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "🏛️ *PENGAJUAN SEWA MOBIL KORPORASI / B2B — ABO RENT CAR*",
      "=====================================================",
      `🏢 *Nama Perusahaan / Instansi:* ${formData.companyName}`,
      `👤 *PIC / Pemohon:* ${formData.picName} (${formData.picRole || "Procurement"})`,
      `📧 *Email Kantor:* ${formData.email}`,
      `📱 *No. WhatsApp PIC:* ${formData.phone}`,
      "",
      "🚘 *DETAIL KEBUTUHAN ARMADA*",
      `• *Pilihan Model:* ${formData.fleetType}`,
      `• *Estimasi Kuantitas:* ${formData.fleetQuantity}`,
      `• *Durasi Kontrak:* ${formData.rentalDuration}`,
      `• *Layanan Driver:* ${formData.needVipChauffeur}`,
      `• *Faktur Pajak (e-Faktur PPN):* ${formData.needTaxInvoice ? "Ya, Membutuhkan e-Faktur PPN & SPK" : "Tidak"}`,
      "",
      formData.notes ? `📝 *Catatan Tambahan:* ${formData.notes}\n` : "",
      "Mohon kirimkan proposal penawaran resmi (Quotation) untuk instansi kami. Terima kasih.",
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const B2B_PILLARS = [
    {
      icon: FileSpreadsheet,
      code: "B2B-01",
      title: "Faktur Pajak e-Faktur & Legalitas SPK",
      desc: "Mendukung kelancaran audit pengadaan korporasi, BUMN, dan instansi dengan faktur pajak PPN resmi, SPK kontrak, dan kwitansi bermaterai.",
    },
    {
      icon: Clock,
      code: "B2B-02",
      title: "Jaminan Unit Pengganti Cepat",
      desc: "Komitmen armada pengganti setara segera dikirim jika terjadi kendala teknis untuk menjamin kelancaran aktivitas operasional bisnis.",
    },
    {
      icon: Award,
      code: "B2B-03",
      title: "Driver Terlatih, Sopan & Ramah",
      desc: "Pilihan supir profesional yang rapi, beretika santun, non-smoking, dan sangat menguasai rute jalan di seluruh Bandung Raya & Jawa Barat.",
    },
    {
      icon: Users2,
      code: "B2B-04",
      title: "Skema Pembayaran Fleksibel (TOP)",
      desc: "Pilihan term of payment bertempo bagi korporasi yang terverifikasi, memudahkan koordinasi finance & procurement kantor Anda.",
    },
  ];

  return (
    <div className="bg-[#02162e] min-h-screen text-slate-100">
      {/* Top Header with Official Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#031C3B]/95 backdrop-blur-md border-b border-[#0280F9]/20 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abo-rent-car-logo.png"
              alt="Abo Rent Car Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#0280F9] bg-[#0280F9]/10 px-2.5 py-0.5 rounded border border-[#0280F9]/20">
              Divisi Korporat &amp; B2B
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="text-xs text-gray-300 hover:text-white font-mono transition-colors flex items-center gap-1"
            >
              &larr; <span className="hidden sm:inline">Halaman Rental Pribadi</span> (B2C)
            </Link>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Halo Corporate Desk Abo Rent Car, saya ingin menanyakan pengadaan sewa mobil kantor/instansi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action px-3.5 sm:px-4 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center gap-1.5"
            >
              <WhatsAppIcon size={15} />
              <span>Hotline B2B</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="vip-badge">
              <Building2 size={13} />
              Layanan Mobilitas Bisnis &amp; Instansi
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Solusi Sewa Mobil Korporasi &amp;{" "}
              <span className="blue-gradient-text">Pengadaan Armada Kantor.</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
              Layanan penyewaan kendaraan dinas terkelola harian, bulanan, hingga tahunan untuk
              operasional perusahaan, kunjungan kerja pejabat, event skala besar, dan antar-jemput
              eksekutif di Stasiun Whoosh Padalarang serta seluruh Jawa Barat.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
            {B2B_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.code} className="luxury-card p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0280F9]/10 border border-[#0280F9]/30 flex items-center justify-center text-[#0280F9] mb-4">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-[#0280F9] uppercase font-bold">
                      {p.code}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-1 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#9cd0ff] font-mono">
                    <CheckCircle2 size={13} />
                    <span>Layanan Resmi Terpercaya</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Corporate RFP / RFQ Form Section */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Form: 7 cols */}
            <div className="lg:col-span-7 luxury-card p-5 sm:p-8 border border-[#0280F9]/30 shadow-2xl">
              <div className="mb-6 sm:mb-8">
                <span className="vip-badge text-[10px] mb-2">Formulir Pengajuan Cepat</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Pengajuan Penawaran Sewa Mobil B2B
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  Kirimkan rincian kebutuhan kendaraan instansi Anda untuk menerima proposal tarif
                  resmi dan draf kontrak sewa cepat.
                </p>
              </div>

              <form onSubmit={handleB2BSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Nama Perusahaan / Instansi *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="PT Nama Perusahaan..."
                      required
                      className="luxury-input w-full text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Nama Lengkap PIC *
                    </label>
                    <input
                      type="text"
                      name="picName"
                      value={formData.picName}
                      onChange={handleChange}
                      placeholder="Nama Lengkap Anda..."
                      required
                      className="luxury-input w-full text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Jabatan / Divisi *
                    </label>
                    <input
                      type="text"
                      name="picRole"
                      value={formData.picRole}
                      onChange={handleChange}
                      placeholder="Contoh: Procurement / GA / Operasional"
                      required
                      className="luxury-input w-full text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Email Kantor *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="pic@perusahaan.com"
                      required
                      className="luxury-input w-full text-xs sm:text-sm font-mono"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Nomor WhatsApp PIC *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      required
                      className="luxury-input w-full text-xs sm:text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Jumlah Kebutuhan Unit *
                    </label>
                    <select
                      name="fleetQuantity"
                      value={formData.fleetQuantity}
                      onChange={handleChange}
                      className="luxury-input w-full text-xs sm:text-sm font-sans"
                    >
                      <option value="1 - 2 Unit" className="bg-[#04244D]">
                        1 - 2 Unit Kendaraan
                      </option>
                      <option value="3 - 5 Unit" className="bg-[#04244D]">
                        3 - 5 Unit Kendaraan
                      </option>
                      <option value="6 - 10 Unit" className="bg-[#04244D]">
                        6 - 10 Unit Kendaraan
                      </option>
                      <option value="> 10 Unit (Event Besar)" className="bg-[#04244D]">
                        &gt; 10 Unit (Event / Rombongan Besar)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Pilihan Armada Utama *
                    </label>
                    <select
                      name="fleetType"
                      value={formData.fleetType}
                      onChange={handleChange}
                      className="luxury-input w-full text-xs sm:text-sm font-sans"
                    >
                      {CARS.map((car) => (
                        <option key={car.id} value={car.name} className="bg-[#04244D]">
                          {car.name} ({car.modelType})
                        </option>
                      ))}
                      <option value="Kombinasi Beragam Unit" className="bg-[#04244D]">
                        Kombinasi Beragam Unit Armada
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Durasi Kontrak Sewa *
                    </label>
                    <select
                      name="rentalDuration"
                      value={formData.rentalDuration}
                      onChange={handleChange}
                      className="luxury-input w-full text-xs sm:text-sm font-sans"
                    >
                      <option value="Harian (Kunjungan Dinas / Event)" className="bg-[#04244D]">
                        Harian (Kunjungan Dinas / Event)
                      </option>
                      <option value="Mingguan (1 - 4 Minggu)" className="bg-[#04244D]">
                        Mingguan (1 - 4 Minggu)
                      </option>
                      <option value="Bulanan (1 - 12 Bulan)" className="bg-[#04244D]">
                        Bulanan (1 - 12 Bulan)
                      </option>
                      <option value="Tahunan (Multi-Year Contract)" className="bg-[#04244D]">
                        Tahunan (Kontrak Jangka Panjang)
                      </option>
                    </select>
                  </div>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    name="needTaxInvoice"
                    checked={formData.needTaxInvoice}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#0280F9] focus:ring-[#0280F9] shrink-0"
                  />
                  <div>
                    <span className="text-xs font-medium text-white">
                      Membutuhkan Faktur Pajak Resmi (e-Faktur PPN), SPK, dan Kelengkapan Legalitas
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-gray-400">
                      Seluruh dokumen perpajakan dan company profile resmi akan disertakan dalam
                      proposal.
                    </p>
                  </div>
                </label>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                    Catatan Kebutuhan / Rute Perjalanan
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Contoh: Kebutuhan antar jemput stasiun Whoosh Padalarang ke kawasan industri, inspeksi proyek..."
                    className="luxury-input w-full text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-action w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl"
                >
                  <WhatsAppIcon size={18} />
                  <span>Kirim Pengajuan Proposal ke Corporate Desk</span>
                </button>
              </form>
            </div>

            {/* Right Summary: 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              <div className="luxury-card p-5 sm:p-6 border border-[#0280F9]/30">
                <h3 className="text-base font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-[#0280F9]" />
                  <span>Keuntungan Kerjasama B2B</span>
                </h3>

                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Armada Terawat Prima:</strong> Unit tahun muda 2023–2024 terdaftar
                      asuransi all-risk komprehensif.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Term of Payment (TOP):</strong> Skema pembayaran bertempo untuk
                      instansi yang terverifikasi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Faktur Pajak e-Faktur:</strong> Pajak Pertambahan Nilai (PPN) resmi
                      sesuai regulasi DJP.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Unit Pengganti Siaga:</strong> Armada cadangan dikirim cepat jika
                      terjadi kendala di jalan.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#04244D] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-gray-300 uppercase block">
                  Kontak Khusus Layanan Korporasi
                </span>
                <div className="text-xl font-bold text-white font-mono">{WA_DISPLAY}</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Untuk kebutuhan mendesak kunjungan pejabat dinas atau inspeksi lapangan hari ini,
                  hubungi Corporate Desk kami untuk respon prioritas langsung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-400 bg-[#021124]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Abo Rent Car Indonesia. Divisi Pengadaan Korporasi
            &amp; B2B.
          </p>
          <Link href="/" className="text-[#0280F9] hover:underline font-mono">
            Halaman Utama Rental Mobil Pribadi (B2C) &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
