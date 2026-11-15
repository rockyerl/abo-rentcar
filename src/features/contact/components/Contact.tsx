import { WA_NUMBER, WA_DISPLAY, ADDRESS } from "@/lib/constants";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const CONTACT_CARDS = [
    {
      icon: Phone,
      tag: "Respon Cepat",
      title: "Layanan Pelanggan WhatsApp",
      desc: "Konsultasi ketersediaan armada, sewa lepas kunci, dan reservasi mendadak.",
      actionText: "Chat WhatsApp Kami",
      actionUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo Abo Rent Car, saya ingin menanyakan sewa mobil di Bandung."
      )}`,
      highlight: WA_DISPLAY,
    },
    {
      icon: MapPin,
      tag: "Dekat Whoosh",
      title: "Pool & Kantor Operasional",
      desc: "Hanya 10 menit dari Stasiun Kereta Cepat Whoosh Padalarang. Siap antar-jemput.",
      actionText: "Petunjuk Arah Google Maps",
      actionUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
      highlight: ADDRESS,
    },
    {
      icon: Clock,
      tag: "24 Jam",
      title: "Jadwal Serah Terima Unit",
      desc: "Layanan serah terima unit aktif 24 jam dengan reservasi sebelumnya.",
      actionText: "Cek Jadwal Ketersediaan",
      actionUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo Abo Rent Car, saya ingin menanyakan jadwal serah terima armada."
      )}`,
      highlight: "Reservasi 24 Jam Nonstop &middot; Kantor 08.00–21.00 WIB",
    },
  ];

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-[#031C3B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="vip-badge">
            <Phone size={13} />
            Hubungi Abo Rent Car
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Komunikasi Ramah &amp; <span className="blue-gradient-text">Respon Cepat.</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
            Tim kami siap membantu kebutuhan rental mobil Anda di Bandung Raya kapan saja.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CONTACT_CARDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0280F9]/10 border border-[#0280F9]/30 flex items-center justify-center text-[#0280F9] group-hover:bg-[#005DBD] group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-[#0280F9] tracking-wider uppercase font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">{item.desc}</p>

                  <div className="p-3 rounded-lg bg-[#02162e] border border-white/5 text-[11px] sm:text-xs text-gray-200 font-mono leading-snug mb-6 break-words">
                    {item.highlight}
                  </div>
                </div>

                <a
                  href={item.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action-outline w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
