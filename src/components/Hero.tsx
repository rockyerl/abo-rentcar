import { WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden scanline grid-bg"
            style={{ background: "var(--bg-deep)" }}
        >
            {/* Deep radial glow */}
            <div className="absolute inset-0" style={{
                background: "radial-gradient(ellipse 70% 80% at 65% 50%, rgba(0,100,200,0.18) 0%, transparent 70%)"
            }} />

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-px neon-line" />

            {/* Side numbers decoration */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20 hidden lg:flex"
                 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--brand-blue)" }}>
                {["01", "02", "03", "04", "05", "06"].map(n => (
                    <span key={n}>{n}</span>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

                    {/* LEFT CONTENT */}
                    <div className="order-2 lg:order-1">
                        {/* Top label */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-px" style={{ background: "var(--brand-blue)" }} />
                            <span className="section-label">Bandung Raya · Cimahi · Kab. Bandung Barat</span>
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--brand-blue)" }} />
                        </div>

                        {/* Main heading */}
                        <div className="mb-6" style={{ overflow: "visible" }}>
                            <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 0.95, paddingBottom: "8px" }}>
                                <span className="block text-white" style={{ fontSize: "clamp(72px, 12vw, 160px)" }}>SEWA</span>
                                <span className="block" style={{
                                    fontSize: "clamp(72px, 12vw, 160px)",
                                    background: "linear-gradient(90deg, #00AAFF, #0055CC)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>MOBIL</span>
                                <span className="block text-white" style={{ fontSize: "clamp(72px, 12vw, 160px)" }}>BANDUNG</span>
                            </h1>
                        </div>

                        {/* Tagline */}
                        <div className="flex items-start gap-4 mb-10 max-w-md">
                            <div className="w-1 flex-shrink-0 mt-1 rounded-full" style={{ height: "60px", background: "linear-gradient(180deg, var(--brand-blue), transparent)" }} />
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                                Armada fresh & terawat, sistem 24 jam, lepas kunci atau plus driver.{" "}
                                <strong style={{ color: "white" }}>Tanpa deposit</strong>, bisa COD & antar jemput.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-14">
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=Halo%20ABO%20Rent%20Car%2C%20saya%20mau%20tanya%20info%20sewa%20mobil`}
                                target="_blank" rel="noopener noreferrer"
                                className="btn-blue flex items-center gap-3 text-white font-bold px-8 py-4 rounded-sm uppercase"
                                style={{ fontFamily: "var(--font-display)", fontSize: "18px", letterSpacing: "0.1em" }}
                            >
                                <WhatsAppIcon size={20} />
                                <span>Chat WhatsApp</span>
                            </a>
                            <a href="#armada"
                               className="btn-outline flex items-center gap-2 px-8 py-4 rounded-sm uppercase font-bold"
                               style={{ fontFamily: "var(--font-display)", fontSize: "18px", letterSpacing: "0.1em" }}
                            >
                                Lihat Armada
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 flex-wrap">
                            {[
                                { num: "500+", label: "Pelanggan Puas" },
                                { num: "15+", label: "Armada Pilihan" },
                                { num: "24/7", label: "Layanan Aktif" },
                            ].map((s, i) => (
                                <div key={i} className="relative">
                                    <div className="stat-num" style={{ fontSize: "42px" }}>{s.num}</div>
                                    <div className="section-label mt-1">{s.label}</div>
                                    {i < 2 && <div className="absolute right-[-20px] top-2 h-8 w-px opacity-20" style={{ background: "var(--brand-blue)" }} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Car visual */}
                    <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[360px]">
                        {/* Glow rings */}
                        <div className="absolute w-96 h-96 rounded-full opacity-20" style={{
                            background: "radial-gradient(circle, rgba(0,170,255,0.4) 0%, transparent 70%)"
                        }} />
                        <div className="absolute w-72 h-72 rounded-full border opacity-10 animate-spin" style={{
                            borderColor: "var(--brand-blue)",
                            animationDuration: "12s"
                        }} />
                        <div className="absolute w-52 h-52 rounded-full border opacity-15" style={{
                            borderColor: "var(--brand-blue)",
                            animation: "spin 8s linear infinite reverse"
                        }} />

                        {/* Car SVG */}
                        <div className="float-car relative z-10">
                            <svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="body1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#1a8fff"/>
                                        <stop offset="50%" stopColor="#0055CC"/>
                                        <stop offset="100%" stopColor="#002080"/>
                                    </linearGradient>
                                    <linearGradient id="roof1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#2299ff"/>
                                        <stop offset="100%" stopColor="#0044BB"/>
                                    </linearGradient>
                                    <linearGradient id="glass1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#b3d9ff" stopOpacity="0.9"/>
                                        <stop offset="100%" stopColor="#4499ff" stopOpacity="0.5"/>
                                    </linearGradient>
                                    <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#1a2a3a"/>
                                        <stop offset="100%" stopColor="#0a1520"/>
                                    </linearGradient>
                                    <radialGradient id="wheelRim" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#00AAFF" stopOpacity="0.8"/>
                                        <stop offset="60%" stopColor="#0055CC" stopOpacity="0.4"/>
                                        <stop offset="100%" stopColor="#001040" stopOpacity="0.9"/>
                                    </radialGradient>
                                    <filter id="glow2">
                                        <feGaussianBlur stdDeviation="5" result="b"/>
                                        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                                    </filter>
                                    <filter id="softGlow">
                                        <feGaussianBlur stdDeviation="3" result="b"/>
                                        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                                    </filter>
                                </defs>

                                {/* Shadow */}
                                <ellipse cx="310" cy="308" rx="230" ry="16" fill="#00AAFF" opacity="0.12"/>

                                {/* Body lower */}
                                <path d="M80 200 Q85 240 100 250 L520 250 Q535 240 540 200 Z" fill="url(#body1)"/>
                                {/* Body upper */}
                                <path d="M130 200 L175 115 Q200 95 255 92 L365 92 Q420 95 445 115 L490 200 Z" fill="url(#roof1)"/>

                                {/* Accent stripe */}
                                <path d="M130 200 L175 115 Q190 100 210 96 L210 105 Q194 108 182 122 L140 210 Z" fill="#00AAFF" opacity="0.3"/>
                                <path d="M490 200 L445 115 Q430 100 410 96 L410 105 Q426 108 438 122 L500 210 Z" fill="#00AAFF" opacity="0.15"/>

                                {/* Glass left */}
                                <path d="M178 197 L197 130 Q207 112 228 110 L278 110 L278 197 Z" fill="url(#glass1)" opacity="0.85"/>
                                {/* Glass right */}
                                <path d="M288 110 L330 110 Q352 112 362 130 L382 197 L288 197 Z" fill="url(#glass1)" opacity="0.75"/>
                                {/* Glass divider */}
                                <line x1="283" y1="110" x2="283" y2="197" stroke="#001a55" strokeWidth="3.5"/>

                                {/* Roof rack detail */}
                                <rect x="200" y="91" width="220" height="5" rx="2.5" fill="#003399" opacity="0.7"/>

                                {/* Side window trim */}
                                <path d="M178 197 L197 130 Q207 112 228 110 L278 110 L278 197" fill="none" stroke="#003Acc" strokeWidth="1.5" opacity="0.6"/>

                                {/* Door line */}
                                <line x1="285" y1="200" x2="285" y2="248" stroke="#003399" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.6"/>

                                {/* Hood */}
                                <path d="M490 200 L540 200 Q548 200 548 192 L548 185 Q545 180 535 178 L480 175 Z" fill="url(#body1)"/>
                                <path d="M80 200 L130 200 L100 175 L65 178 Q55 180 52 185 L52 192 Q52 200 60 200 Z" fill="url(#body1)"/>

                                {/* Headlights */}
                                <path d="M490 185 Q520 188 538 194 L535 202 Q515 196 488 194 Z" fill="#FFFBE0" opacity="0.95" filter="url(#softGlow)"/>
                                <ellipse cx="540" cy="195" rx="9" ry="13" fill="#FFFDE0" opacity="0.9" filter="url(#glow2)"/>

                                {/* Taillights */}
                                <rect x="55" y="200" width="22" height="32" rx="4" fill="#FF2244" opacity="0.95" filter="url(#softGlow)"/>

                                {/* Front bumper spoiler */}
                                <path d="M488 248 Q540 248 550 238 L548 252 Q540 260 488 260 Z" fill="#001840"/>
                                <path d="M80 260 Q60 260 52 252 L50 238 Q60 248 112 248 Z" fill="#001840"/>

                                {/* DRL strip */}
                                <line x1="492" y1="214" x2="540" y2="210" stroke="#00AAFF" strokeWidth="2.5" opacity="0.8" filter="url(#softGlow)"/>

                                {/* Wheels */}
                                {/* Front wheel */}
                                <circle cx="420" cy="264" r="46" fill="url(#wheelGrad)"/>
                                <circle cx="420" cy="264" r="38" fill="url(#wheelRim)"/>
                                <circle cx="420" cy="264" r="28" fill="#050D18"/>
                                <circle cx="420" cy="264" r="18" fill="#0066BB" filter="url(#glow2)"/>
                                {/* Spokes */}
                                {[0,51.4,102.8,154.2,205.6,257,308.4].map((angle, i) => (
                                    <line key={i}
                                          x1={420 + 18 * Math.cos(angle * Math.PI / 180)}
                                          y1={264 + 18 * Math.sin(angle * Math.PI / 180)}
                                          x2={420 + 36 * Math.cos(angle * Math.PI / 180)}
                                          y2={264 + 36 * Math.sin(angle * Math.PI / 180)}
                                          stroke="#00AAFF" strokeWidth="2.5" opacity="0.7"
                                    />
                                ))}
                                <circle cx="420" cy="264" r="5" fill="#00AAFF" filter="url(#glow2)"/>

                                {/* Rear wheel */}
                                <circle cx="175" cy="264" r="46" fill="url(#wheelGrad)"/>
                                <circle cx="175" cy="264" r="38" fill="url(#wheelRim)"/>
                                <circle cx="175" cy="264" r="28" fill="#050D18"/>
                                <circle cx="175" cy="264" r="18" fill="#0066BB" filter="url(#glow2)"/>
                                {[0,51.4,102.8,154.2,205.6,257,308.4].map((angle, i) => (
                                    <line key={i}
                                          x1={175 + 18 * Math.cos(angle * Math.PI / 180)}
                                          y1={264 + 18 * Math.sin(angle * Math.PI / 180)}
                                          x2={175 + 36 * Math.cos(angle * Math.PI / 180)}
                                          y2={264 + 36 * Math.sin(angle * Math.PI / 180)}
                                          stroke="#00AAFF" strokeWidth="2.5" opacity="0.7"
                                    />
                                ))}
                                <circle cx="175" cy="264" r="5" fill="#00AAFF" filter="url(#glow2)"/>

                                {/* Ground reflection */}
                                <line x1="90" y1="310" x2="540" y2="310" stroke="#00AAFF" strokeWidth="1" opacity="0.15"/>
                            </svg>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-4 right-4 opacity-30">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <path d="M40 0 L40 15 M40 0 L25 0" stroke="#00AAFF" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <div className="absolute bottom-4 left-4 opacity-30">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <path d="M0 40 L0 25 M0 40 L15 40" stroke="#00AAFF" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom ticker */}
            <div className="absolute bottom-0 left-0 right-0 border-t overflow-hidden py-3"
                 style={{ borderColor: "rgba(0,170,255,0.12)", background: "rgba(0,170,255,0.03)" }}>
                <div className="ticker-content">
                    {Array(6).fill(null).map((_, i) => (
                        <span key={i} className="flex items-center gap-6 px-6 text-xs uppercase tracking-widest"
                              style={{ fontFamily: "var(--font-mono)", color: "rgba(0,170,255,0.5)", whiteSpace: "nowrap" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--brand-blue)" }} />
              Sewa Mobil Bandung
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--brand-accent)" }} />
              Lepas Kunci & Plus Driver
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--brand-blue)" }} />
              Tanpa Deposit
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--brand-accent)" }} />
              COD &amp; Antar Jemput
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--brand-blue)" }} />
              Armada Fresh &amp; Terawat
            </span>
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <span className="section-label">Scroll</span>
                <div className="w-px h-10 animate-bounce" style={{ background: "linear-gradient(180deg, var(--brand-blue), transparent)" }} />
            </div>
        </section>
    );
}