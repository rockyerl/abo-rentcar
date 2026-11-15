import { WA_NUMBER, WA_DISPLAY, ADDRESS } from "@/lib/constants";
import WhatsAppIcon from "@/shared/components/WhatsAppIcon";
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export default function Contact() {
  const CONTACT_CARDS = [
    {
      icon: Phone,
      tag: "Hotline 24/7",
      title: "Private Concierge Desk",
      desc: "Konsultasi ketersediaan armada, kebutuhan pengawalan VIP, dan reservasi mendadak.",
      actionText: "Hubungi via WhatsApp",
      actionUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo Concierge Desk ABO Rent Car, saya membutuhkan informasi sewa armada eksekutif."
      )}`,
      highlight: WA_DISPLAY,
    },
    {
      icon: MapPin,
      tag: "Strategis Whoosh",
      title: "Pool & Kantor Operasional",
      desc: "Hanya 10 menit dari Stasiun Kereta Cepat Whoosh Padalarang. Siap antar jemput langsung.",
      actionText: "Buka Penunjuk Arah Google Maps",
      actionUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
      highlight: ADDRESS,
    },
    {
      icon: Clock,
      tag: "Fleksibilitas Penuh",
      title: "Waktu Layanan & Serah Terima",
      desc: "Layanan serah terima armada aktif 24 jam dengan konfirmasi reservasi sebelumnya.",
      actionText: "Cek Jadwal Ketersediaan",
      actionUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Halo ABO Rent Car, saya ingin menanyakan jadwal serah terima armada."
      )}`,
      highlight: "Reservasi 24 Jam Nonstop &middot; Kantor 08.00–21.00 WIB",
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-[#0A0D14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="vip-badge">
            <Phone size={13} />
            Hubungi Concierge Desk
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pelayanan Prioritas <span className="gold-gradient-text">Kapanpun Anda Butuhkan.</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Tim Relationship Manager kami berdedikasi penuh mendampingi kebutuhan transportasi
            pribadi maupun korporasi Anda di Bandung Raya.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_CARDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-8 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#07090E] transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF37] tracking-wider uppercase font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{item.desc}</p>

                  <div className="p-3 rounded-lg bg-[#121824] border border-white/5 text-xs text-gray-200 font-mono leading-snug mb-6">
                    {item.highlight}
                  </div>
                </div>

                <a
                  href={item.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
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
