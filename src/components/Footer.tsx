export default function Footer() {
    return (
        <footer className="relative py-10" style={{ background: "var(--bg-deep)", borderTop: "1px solid rgba(0,170,255,0.1)" }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 flex items-center justify-center"
                         style={{ border: "1px solid rgba(0,170,255,0.3)", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", color: "var(--brand-blue)" }}>ABO</span>
                    </div>
                    <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", letterSpacing: "0.2em" }}>RENT CAR</div>
                        <div className="section-label" style={{ fontSize: "9px" }}>Sewa Mobil Bandung Raya</div>
                    </div>
                </div>

                <p className="section-label text-center" style={{ opacity: 0.3, fontSize: "10px" }}>
                    © {new Date().getFullYear()} ABO Rent Car. All rights reserved.
                </p>

                <div className="flex gap-6">
                    {["Keunggulan", "Armada", "Pesan"].map((l) => (
                        <a key={l} href={`#${l.toLowerCase()}`}
                           className="transition-colors hover:text-white"
                           style={{ fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}