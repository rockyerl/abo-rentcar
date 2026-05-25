import { CARS } from "@/lib/constants";
import CarCard from "./CarCard";

export default function Fleet() {
    return (
        <section id="armada" className="py-28 relative" style={{ background: "var(--bg-deep)" }}>
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute top-0 left-0 right-0 h-px neon-line" />

            {/* Big background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span style={{
            fontFamily: "var(--font-display)", fontSize: "22vw", color: "rgba(0,170,255,0.02)",
            letterSpacing: "0.1em", userSelect: "none", whiteSpace: "nowrap"
        }}>ARMADA</span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 anim-hidden">
                    <div>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="neon-line flex-1 max-w-16" />
                            <span className="section-label">Pilih Kendaraan</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,8vw,100px)", lineHeight: 0.9 }}>
                            <span className="block text-white">ARMADA</span>
                            <span className="block" style={{ color: "var(--brand-blue)" }}>PILIHAN KAMI</span>
                        </h2>
                    </div>
                    <p className="max-w-sm lg:text-right" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                        Semua mobil dalam kondisi fresh, terawat, dan siap jalan. Klik untuk pesan langsung via WhatsApp.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
                     style={{ background: "rgba(0,170,255,0.07)" }}>
                    {CARS.map((car, i) => (
                        <CarCard key={car.id} car={car} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}