"use client";
import { useState, useEffect } from "react";
import { WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#armada", label: "Armada" },
    { href: "#pesan", label: "Pesan" },
    { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
             style={{
                 background: scrolled ? "rgba(2,5,9,0.92)" : "transparent",
                 backdropFilter: scrolled ? "blur(20px)" : "none",
                 borderBottom: scrolled ? "1px solid rgba(0,170,255,0.12)" : "1px solid transparent",
                 padding: scrolled ? "12px 0" : "20px 0",
             }}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 flex items-center justify-center"
                         style={{ border: "1px solid rgba(0,170,255,0.4)", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                             style={{ background: "rgba(0,170,255,0.15)" }} />
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "var(--brand-blue)", letterSpacing: "0.05em" }}>ABO</span>
                    </div>
                    <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", letterSpacing: "0.2em", lineHeight: 1 }}>RENT CAR</div>
                        <div className="section-label" style={{ fontSize: "9px", letterSpacing: "0.2em", marginTop: "2px" }}>Bandung Raya</div>
                    </div>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a key={l.href} href={l.href}
                           onClick={() => setActive(l.href)}
                           className="relative group text-sm font-semibold transition-colors uppercase tracking-widest"
                           style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: active === l.href ? "white" : "rgba(255,255,255,0.5)" }}>
                            {l.label}
                            <div className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                 style={{ background: "var(--brand-blue)" }} />
                        </a>
                    ))}
                    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                       className="btn-blue flex items-center gap-2 text-white px-5 py-2.5 uppercase font-bold"
                       style={{ fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "0.1em", clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }}>
                        <WhatsAppIcon size={14} />
                        <span>Hubungi Kami</span>
                    </a>
                </div>

                {/* Mobile burger */}
                <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <div className="w-6 flex flex-col gap-1.5">
                        <div className="h-px w-full transition-all duration-300" style={{ background: menuOpen ? "var(--brand-blue)" : "white", transform: menuOpen ? "rotate(45deg) translateY(5px)" : "" }} />
                        <div className="h-px transition-all duration-300" style={{ background: menuOpen ? "var(--brand-blue)" : "white", width: menuOpen ? "0" : "75%", marginLeft: "auto" }} />
                        <div className="h-px w-full transition-all duration-300" style={{ background: menuOpen ? "var(--brand-blue)" : "white", transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "" }} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden overflow-hidden transition-all duration-300"
                 style={{ maxHeight: menuOpen ? "400px" : "0", borderTop: menuOpen ? "1px solid rgba(0,170,255,0.12)" : "none" }}>
                <div className="px-6 py-6 flex flex-col gap-4" style={{ background: "rgba(2,5,9,0.98)" }}>
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                           className="text-white/70 hover:text-white py-2 uppercase font-bold border-b"
                           style={{ fontFamily: "var(--font-display)", fontSize: "22px", letterSpacing: "0.1em", borderColor: "rgba(0,170,255,0.08)" }}>
                            {l.label}
                        </a>
                    ))}
                    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                       className="btn-blue flex items-center justify-center gap-2 text-white py-3 font-bold uppercase mt-2"
                       style={{ fontFamily: "var(--font-display)", fontSize: "16px", letterSpacing: "0.1em" }}>
                        <WhatsAppIcon size={18} />
                        <span>Hubungi via WhatsApp</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}