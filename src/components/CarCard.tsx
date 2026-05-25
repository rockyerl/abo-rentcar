import { CARS, WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

type Car = (typeof CARS)[number];

export default function CarCard({ car, index }: { car: Car; index: number }) {
    return (
        <div className="car-card anim-hidden group rounded-none relative"
             style={{ transitionDelay: `${index * 80}ms` }}>

            {/* Index number */}
            <div className="absolute top-4 right-4 z-10 opacity-30 group-hover:opacity-70 transition-opacity"
                 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--brand-blue)", letterSpacing: "0.2em" }}>
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Image */}
            <div className="relative h-52 overflow-hidden" style={{ background: "var(--bg-deep)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={car.image} alt={car.name}
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)"
                }} />
                {/* Top scan line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ background: "var(--brand-blue)", boxShadow: "0 0 10px var(--brand-blue)" }} />

                {/* Category badge */}
                <div className="absolute top-4 left-4"
                     style={{
                         fontFamily: "var(--font-mono)",
                         fontSize: "10px",
                         letterSpacing: "0.25em",
                         color: "var(--brand-blue)",
                         background: "rgba(0,170,255,0.1)",
                         border: "1px solid rgba(0,170,255,0.3)",
                         padding: "4px 10px",
                         clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)"
                     }}>
                    {car.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Name + Price row */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-white font-bold mb-0.5"
                            style={{ fontFamily: "var(--font-display)", fontSize: "24px", letterSpacing: "0.03em" }}>
                            {car.name}
                        </h3>
                        <span className="section-label">{car.year}</span>
                    </div>
                    <div className="text-right">
                        <div style={{
                            fontFamily: "var(--font-display)", fontSize: "22px",
                            background: "linear-gradient(135deg, #00AAFF, #0055CC)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                        }}>
                            {car.pricePerDay}
                        </div>
                        <div className="section-label">/hari</div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-4 opacity-20" style={{ background: "var(--brand-blue)" }} />

                {/* Specs */}
                <div className="flex gap-4 mb-4 flex-wrap">
                    {[
                        { icon: "👥", val: `${car.seats} Kursi` },
                        { icon: "⚙️", val: car.transmission },
                        { icon: "⛽", val: car.fuel },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-1.5"
                             style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>
                            <span>{s.icon}</span>
                            <span>{s.val}</span>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((f) => (
                        <span key={f} style={{
                            fontFamily: "var(--font-mono)", fontSize: "10px",
                            letterSpacing: "0.1em", color: "rgba(0,170,255,0.7)",
                            background: "rgba(0,170,255,0.06)", border: "1px solid rgba(0,170,255,0.15)",
                            padding: "3px 10px"
                        }}>
              {f}
            </span>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20ABO%20Rent%20Car%2C%20saya%20tertarik%20sewa%20${encodeURIComponent(car.name)}%20(${car.pricePerDay}%2Fhari).%20Mohon%20info%20ketersediaannya.`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-blue flex items-center justify-center gap-2 text-white font-bold w-full py-3.5 uppercase"
                    style={{
                        fontFamily: "var(--font-display)", fontSize: "15px", letterSpacing: "0.1em",
                        clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)"
                    }}>
                    <WhatsAppIcon size={15} />
                    <span>Tanya / Pesan</span>
                </a>
            </div>
        </div>
    );
}