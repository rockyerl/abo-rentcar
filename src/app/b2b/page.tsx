"use client";

import { useState } from "react";
import Link from "next/link";
import { WA_NUMBER, WA_DISPLAY } from "@/lib/constants";
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
  ChevronRight,
  Sparkles,
  PhoneCall,
  Briefcase,
  FileCheck2,
} from "lucide-react";

export default function B2BPortalPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    picName: "",
    picRole: "",
    email: "",
    phone: "",
    fleetType: "Toyota Alphard & Innova Zenix Q Hybrid",
    fleetQuantity: "3 - 5 Unit",
    rentalDuration: "Bulanan / Tahunan",
    needVipChauffeur: "Ya, Termasuk Driver Berstandar Protokoler",
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
      "🏛️ *PERMOHONAN PENGADAAN ARMADA KORPORASI & B2B — ABO RENT CAR*",
      "================================================================",
      `🏢 *Nama Perusahaan / Instansi:* ${formData.companyName}`,
      `👤 *PIC / Pemohon:* ${formData.picName} (${formData.picRole || "Procurement"})`,
      `📧 *Email Kantor:* ${formData.email}`,
      `📱 *No. WhatsApp PIC:* ${formData.phone}`,
      "",
      "🚘 *DETAIL KEBUTUHAN ARMADA*",
      `• *Pilihan Model:* ${formData.fleetType}`,
      `• *Estimasi Kuantitas:* ${formData.fleetQuantity}`,
      `• *Durasi Kontrak:* ${formData.rentalDuration}`,
      `• *Layanan Chauffeur:* ${formData.needVipChauffeur}`,
      `• *Faktur Pajak (e-Faktur PPN):* ${formData.needTaxInvoice ? "Ya, Membutuhkan e-Faktur PPN & SPK" : "Tidak"}`,
      "",
      formData.notes ? `📝 *Catatan Spesifik:* ${formData.notes}\n` : "",
      "Mohon jadwalkan konsultasi proposal penawaran resmi (Company Profile & Quotation) dengan Corporate Account Manager. Terima kasih.",
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const B2B_PILLARS = [
    {
      icon: FileSpreadsheet,
      code: "B2B-01",
      title: "e-Faktur PPN & Legalitas Lengkap",
      desc: "Mendukung audit keuangan instansi BUMN, kementerian, dan multinasional dengan faktur pajak resmi, SPK, dan kwitansi bermaterai.",
    },
    {
      icon: Clock,
      code: "B2B-02",
      title: "Zero-Downtime SLA Guarantee",
      desc: "Komitmen unit pengganti darurat setara dalam 45–60 menit di seluruh area Jawa Barat untuk menjamin kelancaran mobilitas direksi.",
    },
    {
      icon: Award,
      code: "B2B-03",
      title: "Driver Protokoler & Bilingue",
      desc: "Chauffeur berbusana jas formal, non-smoking, bersertifikat defensive driving, dan terlatih melayani tamu VVIP kenegaraan.",
    },
    {
      icon: Users2,
      code: "B2B-04",
      title: "Dedicated Account Manager",
      desc: "Satu saluran koordinasi VIP khusus untuk memproses reservasi mendadak, perubahan rute, dan administrasi penagihan bertempo (TOP).",
    },
  ];

  return (
    <div className="bg-[#07090E] min-h-screen text-slate-100">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090E]/95 backdrop-blur-md border-b border-[#D4AF37]/25 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#8C6D23] p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#07090E] rounded-[7px] flex items-center justify-center font-bold text-[#F6E6B4] text-xs font-mono">
                ABO
              </div>
            </div>
            <div>
              <span className="text-white font-extrabold text-base tracking-wider block">
                ABO RENT CAR
              </span>
              <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
                Portal Pengadaan Korporat &amp; B2B
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-gray-400 hover:text-white font-mono transition-colors flex items-center gap-1"
            >
              &larr; <span>Kembali ke Halaman Personal (B2C)</span>
            </Link>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Halo Corporate Desk ABO Rent Car, saya ingin mengajukan penawaran sewa mobil perusahaan."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-2"
            >
              <WhatsAppIcon size={15} />
              <span>Hotline B2B</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="vip-badge">
              <Building2 size={13} />
              Enterprise Mobility Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Solusi Mobilitas Eksekutif{" "}
              <span className="gold-gradient-text">Korporasi &amp; Lembaga.</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Layanan penyewaan kendaraan terkelola (*managed corporate fleet*) jangka pendek,
              bulanan, hingga tahunan untuk direksi perusahaan, kementerian, BUMN, dan event VVIP
              skala internasional di Bandung &amp; Jawa Barat.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {B2B_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.code} className="luxury-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{p.code}</span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-1 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-mono">
                    <CheckCircle2 size={13} />
                    <span>Compliance Audited</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Corporate RFP / RFQ Form Section */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Form: 7 cols */}
            <div className="lg:col-span-7 luxury-card p-6 sm:p-10 border border-[#D4AF37]/35 shadow-2xl">
              <div className="mb-8">
                <span className="vip-badge text-[10px] mb-2">Request For Quotation (RFQ)</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Formulir Pengajuan Proposal Kerjasama B2B
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Isi formulir di bawah ini untuk menerima penawaran tarif korporat resmi dan draft
                  perjanjian sewa dalam 1 jam kerja.
                </p>
              </div>

              <form onSubmit={handleB2BSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Nama Perusahaan / BUMN / Instansi *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="PT Nama Perusahaan..."
                      required
                      className="luxury-input w-full text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Nama Lengkap PIC Pemohon *
                    </label>
                    <input
                      type="text"
                      name="picName"
                      value={formData.picName}
                      onChange={handleChange}
                      placeholder="Nama Lengkap Anda..."
                      required
                      className="luxury-input w-full text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Jabatan / Departemen PIC *
                    </label>
                    <input
                      type="text"
                      name="picRole"
                      value={formData.picRole}
                      onChange={handleChange}
                      placeholder="Contoh: Procurement / GA / Sekretaris Direksi"
                      required
                      className="luxury-input w-full text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Email Resmi Kantor *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="pic@namaperusahaan.co.id"
                      required
                      className="luxury-input w-full text-sm font-mono"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                      className="luxury-input w-full text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Estimasi Jumlah Unit *
                    </label>
                    <select
                      name="fleetQuantity"
                      value={formData.fleetQuantity}
                      onChange={handleChange}
                      className="luxury-input w-full text-sm font-sans"
                    >
                      <option value="1 - 2 Unit" className="bg-[#0D1119]">
                        1 - 2 Unit Kendaraan
                      </option>
                      <option value="3 - 5 Unit" className="bg-[#0D1119]">
                        3 - 5 Unit Kendaraan
                      </option>
                      <option value="6 - 10 Unit" className="bg-[#0D1119]">
                        6 - 10 Unit Kendaraan
                      </option>
                      <option value="> 10 Unit (KTT / Event Besar)" className="bg-[#0D1119]">
                        &gt; 10 Unit (KTT / Event Akbar)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                      Pilihan Armada *
                    </label>
                    <select
                      name="fleetType"
                      value={formData.fleetType}
                      onChange={handleChange}
                      className="luxury-input w-full text-sm font-sans"
                    >
                      <option value="Toyota Alphard Executive Lounge" className="bg-[#0D1119]">
                        Toyota Alphard Executive Lounge
                      </option>
                      <option value="Toyota Innova Zenix Q Hybrid" className="bg-[#0D1119]">
                        Toyota Innova Zenix Q Hybrid
                      </option>
                      <option
                        value="Mitsubishi Pajero Sport / Fortuner GR"
                        className="bg-[#0D1119]"
                      >
                        Pajero Sport Dakar / Fortuner GR Sport
                      </option>
                      <option value="Toyota Hiace Premio Luxury VIP" className="bg-[#0D1119]">
                        Toyota Hiace Premio Luxury VIP (8-Seat)
                      </option>
                      <option value="Kombinasi Beragam Unit" className="bg-[#0D1119]">
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
                      className="luxury-input w-full text-sm font-sans"
                    >
                      <option
                        value="Harian (Event Khusus / Kunjungan Dinas)"
                        className="bg-[#0D1119]"
                      >
                        Harian (Event / Kunjungan Dinas)
                      </option>
                      <option value="Mingguan (1 - 4 Minggu)" className="bg-[#0D1119]">
                        Mingguan (1 - 4 Minggu)
                      </option>
                      <option value="Bulanan (1 - 12 Bulan)" className="bg-[#0D1119]">
                        Bulanan (1 - 12 Bulan)
                      </option>
                      <option value="Tahunan (Multi-Year Contract)" className="bg-[#0D1119]">
                        Tahunan (Multi-Year Contract)
                      </option>
                    </select>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    name="needTaxInvoice"
                    checked={formData.needTaxInvoice}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800 text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <div>
                    <span className="text-xs font-medium text-white">
                      Memerlukan Faktur Pajak Resmi (e-Faktur PPN), SPK, dan Kelengkapan Legalitas
                      Perusahaan
                    </span>
                    <p className="text-[11px] text-gray-500">
                      Seluruh dokumen perpajakan dan company profile resmi akan disertakan dalam
                      lampiran penawaran.
                    </p>
                  </div>
                </label>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-300 mb-1.5">
                    Catatan Kebutuhan Khusus / Rute Perjalanan
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Contoh: Kebutuhan pengawalan tamu delegasi, rute bolak-balik Stasiun Whoosh Padalarang ke pabrik..."
                    className="luxury-input w-full text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-xl text-sm tracking-wider uppercase font-bold flex items-center justify-center gap-2.5 shadow-xl"
                >
                  <WhatsAppIcon size={18} />
                  <span>Kirim Pengajuan Proposal ke Corporate Desk</span>
                </button>
              </form>
            </div>

            {/* Right Summary: 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              <div className="luxury-card p-6 border border-[#D4AF37]/30 bg-gradient-to-b from-[#101726] to-[#0A0E17]">
                <h3 className="text-base font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <Briefcase size={18} className="text-[#D4AF37]" />
                  <span>Paket Fasilitas B2B Enterprise</span>
                </h3>

                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Mobil Baru Terawat:</strong> Seluruh unit tahun 2023–2024 terdaftar
                      asuransi all-risk komprehensif.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Term of Payment (TOP):</strong> Skema pembayaran bertempo untuk
                      instansi &amp; perusahaan yang terverifikasi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>Faktur Pajak e-Faktur:</strong> Pajak Pertambahan Nilai (PPN) resmi
                      sesuai regulasi DJP.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      <strong>SLA Penggantian Unit:</strong> Armada darurat siap dikirimkan dalam
                      45–60 menit jika terjadi kendala.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F1522] border border-white/10 space-y-4">
                <span className="text-xs font-mono text-gray-400 uppercase block">
                  Kontak Khusus Hubungan Korporasi
                </span>
                <div className="text-xl font-bold text-white font-mono">{WA_DISPLAY}</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Untuk kebutuhan mendesak kunjungan pejabat negara atau inspeksi lapangan hari ini,
                  hubungi nomor di atas untuk respon prioritas langsung dari Direksi Operasional
                  kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} ABO Rent Car. Divisi Pengadaan Korporasi &amp; B2B.
          </p>
          <Link href="/" className="text-[#D4AF37] hover:underline font-mono">
            Halaman Utama Rental Mobil Pribadi (B2C) &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
