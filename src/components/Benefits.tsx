import { BENEFITS } from "@/lib/constants";

export default function Benefits() {
    return (
        <section id="keunggulan" className="py-28 relative" style={{ background: "var(--bg-mid)" }}>
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute top-0 left-0 right-0 h-px neon-line" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20 anim-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="neon-line flex-1 max-w-16" />
                        <span className="section-label">Kenapa Pilih Kami</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,8vw,100px)", lineHeight: 0.9, letterSpacing: "0.02em" }}>
                        <span className="block text-white">KEUNGGULAN</span>
                        <span className="block" style={{ color: "var(--brand-blue)" }}>ABO RENT CAR</span>
                    </h2>
                </div>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
                     style={{ background: "rgba(0,170,255,0.08)" }}>
                    {BENEFITS.map((b, i) => (
                        <div key={i}
                             className="anim-hidden group relative p-8 transition-all duration-300 cursor-pointer"
                             style={{
                                 background: "var(--bg-mid)",
                                 transitionDelay: `${i * 50}ms`,
                             }}>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                 style={{ background: "linear-gradient(135deg, rgba(0,170,255,0.08) 0%, transparent 70%)" }} />

                            {/* Top accent */}
                            <div className="w-8 h-0.5 mb-8 transition-all duration-300 group-hover:w-full"
                                 style={{ background: "var(--brand-blue)" }} />

                            {/* Number */}
                            <div className="mb-4 opacity-20 group-hover:opacity-60 transition-opacity"
                                 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--brand-blue)", letterSpacing: "0.2em" }}>
                                0{i + 1}
                            </div>

                            {/* Icon */}
                            <div className="text-3xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 inline-block">
                                {b.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-white font-bold mb-3 uppercase"
                                style={{ fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "0.05em" }}>
                                {b.title}
                            </h3>
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                                {b.desc}
                            </p>

                            {/* Bottom line on hover */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                 style={{ background: "var(--brand-blue)" }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}