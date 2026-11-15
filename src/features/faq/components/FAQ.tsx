"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

const B2C_FAQS = [
  {
    q: "Apakah benar bisa sewa lepas kunci tanpa perlu simpan uang deposit?",
    a: "Benar sekali! Kami mempermudah pelanggan dengan tidak menahan uang deposit Anda. Cukup lampirkan foto KTP asli, SIM A yang masih berlaku, dan akun media sosial aktif atau ID card kerja untuk verifikasi data 15 menit.",
  },
  {
    q: "Bagaimana jika kereta Whoosh atau pesawat saya delay saat tiba di Bandung?",
    a: "Tidak ada biaya tambahan untuk waktu tunggu! Tim kami secara proaktif memantau status kedatangan kereta Whoosh atau penerbangan Anda. Begitu Anda melangkah keluar dari gerbang kedatangan, mobil dan supir sudah siap menjemput Anda.",
  },
  {
    q: "Apakah mobil bisa diantar langsung ke hotel atau rumah saya?",
    a: "Sangat bisa. Kami menyediakan layanan antar-jemput mobil langsung ke hotel bintang 5, vila di Lembang / Dago, stasiun kereta, maupun alamat rumah Anda di seluruh wilayah Kota Bandung, Cimahi, dan Bandung Barat.",
  },
  {
    q: "Bagaimana jika mobil mengalami masalah di tengah jalan saat berlibur?",
    a: "Semua mobil kami terlindungi oleh garansi unit pengganti (Zero-Downtime Guarantee) dan layanan darurat 24 jam. Jika terjadi kendala mekanis tak terduga, kami akan mengirimkan armada pengganti ke lokasi Anda dalam 45–60 menit.",
  },
  {
    q: "Apakah saya bisa memesan mobil plus supir yang bisa merangkap pemandu wisata?",
    a: "Bisa! Supir kami adalah warga lokal Bandung berpengalaman yang sangat hafal jalur-jalur kuliner tersembunyi, destinasi wisata keluarga di Lembang & Ciwidey, serta rute alternatif bebas macet.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#07090E] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="vip-badge">
            <HelpCircle size={13} />
            Jawaban Lengkap &amp; Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering <span className="gold-gradient-text">Diajukan Pelanggan.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Semua yang perlu Anda ketahui sebelum menyewa mobil di ABO Rent Car.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {B2C_FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="luxury-card overflow-hidden transition-all duration-200 border border-white/5"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-[#F6E6B4]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3">
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
