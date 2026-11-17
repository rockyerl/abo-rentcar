import { ADDRESS, WA_DISPLAY, WA_NUMBER, COMPANY_NAME, BRAND_TAGLINE } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import { ShieldCheck, MapPin, Phone, Award, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#021124] border-t border-[#0280F9]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#0280F9]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/abo-rent-car-logo.png"
                alt="Abo Rent Car Logo"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {COMPANY_NAME} adalah merek rental mobil dengan komunikasi yang praktis, ramah, dan
              jelas di Bandung Raya, Cimahi, dan Padalarang.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="vip-badge text-[10px]">
                <ShieldCheck size={13} />
                Pilih mobil. Siap jalan.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0280F9]" />
              Navigasi Cepat
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#katalog" className="hover:text-white transition-colors">
                  Pilihan Armada Mobil
                </a>
              </li>
              <li>
                <a href="#paket-wisata" className="hover:text-white transition-colors">
                  Paket Supir &amp; Wisata All-In
                </a>
              </li>
              <li>
                <a href="#cara-sewa" className="hover:text-white transition-colors">
                  Cara Sewa Praktis
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator Tarif Transparan
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Studi Kasus Pelanggan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Pillars */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0280F9]" />
              Komitmen Layanan
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-[#0280F9] mt-0.5 shrink-0" />
                <span>Antar tepat waktu ke Stasiun Whoosh Padalarang atau hotel.</span>
              </li>
              <li className="flex items-start gap-2">
                <Award size={16} className="text-[#0280F9] mt-0.5 shrink-0" />
                <span>Unit segar tahun muda (2023–2024), servis resmi berkala.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={16} className="text-[#0280F9] mt-0.5 shrink-0" />
                <span>Lepas kunci tanpa deposit tunai, cukup KTP &amp; SIM.</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0280F9]" />
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#0280F9] mt-1 shrink-0" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#0280F9] shrink-0" />
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9cd0ff] font-mono transition-colors"
                >
                  {WA_DISPLAY}
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  "Halo Abo Rent Car, saya ingin cek ketersediaan mobil."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action w-full py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} />
                <span>Cek ketersediaan mobil</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Abo Rent Car Indonesia. Hak cipta dilindungi.</p>
          <p className="font-mono">{BRAND_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
