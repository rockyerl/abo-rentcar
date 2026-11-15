"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const B2C_FAQS = [
  {
    q: "Apakah benar bisa sewa lepas kunci tanpa perlu simpan uang deposit?",
    a: "Benar sekali! Kami mempermudah Anda dengan tidak menahan uang deposit tunai. Cukup siapkan foto KTP asli, SIM A aktif, dan dokumen pendukung sederhana untuk verifikasi cepat.",
  },
  {
    q: "Bagaimana jika kereta Whoosh atau pesawat saya delay saat tiba di Bandung?",
    a: "Tidak ada biaya tambahan! Tim kami memantau kedatangan kereta Whoosh atau penerbangan Anda. Begitu Anda tiba di Stasiun Padalarang, mobil sudah siap di area penjemputan.",
  },
  {
    q: "Apakah mobil bisa diantar langsung ke hotel atau alamat saya?",
    a: "Sangat bisa. Kami melayani antar-jemput unit ke hotel, villa di Lembang / Ciwidey, stasiun kereta, maupun alamat rumah di seluruh area Bandung Raya dan Cimahi.",
  },
  {
    q: "Bagaimana jika mobil mengalami kendala mekanis di jalan?",
    a: "Semua unit dirawat rutin di bengkel resmi. Jika terjadi kendala tak terduga, kami menyediakan layanan bantuan darurat 24 jam dan unit pengganti segera.",
  },
  {
    q: "Bagaimana perhitungan tarif weekday vs weekend?",
    a: "Tarif terbagi menjadi Weekday (Senin–Kamis) dan Weekend (Jumat, Sabtu, Minggu & Tanggal Merah). Sewa lebih dari 2 hari mendapatkan potongan tarif harian yang lebih hemat.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#02162e] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="vip-badge">
            <HelpCircle size={13} />
            Jawaban Praktis &amp; Jelas
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering <span className="blue-gradient-text">Diajukan.</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-base">
            Semua informasi penting yang perlu Anda ketahui sebelum menyewa mobil di Abo Rent Car.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {B2C_FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="luxury-card overflow-hidden transition-all duration-200 border border-white/10"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-[#9cd0ff]"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#0280F9] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
