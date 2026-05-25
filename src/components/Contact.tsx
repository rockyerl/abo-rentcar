import { WA_NUMBER, ADDRESS } from "@/lib/constants";

export default function Contact() {
    const items = [
        {
            icon: "📱", label: "01", title: "WhatsApp",
            value: "+62 821-3055-4260",
            action: `https://wa.me/${WA_NUMBER}`, btn: "Chat Sekarang",
        },
        {
            icon: "📍", label: "02", title: "Alamat",
            value: "G-land Valley Cluster Gladis No.10, Padalarang, Kab. Bandung Barat",
            action: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`, btn: "Buka Maps",
        },
        {
            icon: "⏰", label: "03", title: "Jam Operasional",
            value: "Setiap Hari\n08.00 – 21.00 WIB",
            action: `https://wa.me/${WA_NUMBER}`, btn: "Hubungi Kami",
        },
    ];

    return (
        <section id="kontak" className="py-28 relative" style={{ background: "var(--bg-deep)" }}>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px neon-line" />

            {/* BG text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span style={{
            fontFamily: "var(--font-display)", fontSize: "20vw", color: "rgba(0,170,255,0.02)",
            userSelect: "none", whiteSpace: "nowrap", letterSpacing: "0.1em"
        }}>KONTAK</span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-16 anim-hidden">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="neon-line flex-1 max-w-16" />
                        <span className="section-label">Hubungi Kami</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,8vw,100px)", lineHeight: 0.9 }}>
                        <span className="block text-white">HUBUNGI</span>
                        <span className="block" style={{ color: "var(--brand-blue)" }}>KAMI</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-px mb-12" style={{ background: "rgba(0,170,255,0.07)" }}>
                    {items.map((c, i) => (
                        <div key={i} className="anim-hidden group relative p-8 flex flex-col"
                             style={{ background: "var(--bg-card)", transitionDelay: `${i * 100}ms` }}>

                            <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                 style={{ background: "var(--brand-blue)" }} />

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-3xl">{c.icon}</span>
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(0,170,255,0.3)", letterSpacing: "0.2em" }}>
                  {c.label}
                </span>
                            </div>

                            <h3 className="text-white font-bold mb-3 uppercase"
                                style={{ fontFamily: "var(--font-display)", fontSize: "22px", letterSpacing: "0.05em" }}>
                                {c.title}
                            </h3>

                            <p className="flex-1 whitespace-pre-line mb-8"
                               style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                                {c.value}
                            </p>

                            <a href={c.action} target="_blank" rel="noopener noreferrer"
                               className="btn-outline flex items-center justify-center gap-2 py-3 font-bold uppercase"
                               style={{
                                   fontFamily: "var(--font-display)", fontSize: "14px", letterSpacing: "0.1em",
                                   clipPath: "polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)"
                               }}>
                                {c.btn}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}