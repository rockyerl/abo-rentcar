import { WA_NUMBER } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWA() {
    return (
        <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo%20ABO%20Rent%20Car%2C%20saya%20ingin%20tanya%20info%20sewa%20mobil`}
            target="_blank" rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 wa-float flex items-center gap-3 text-white font-bold uppercase"
            style={{
                fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                padding: "14px 22px",
                clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                boxShadow: "0 8px 40px rgba(37,211,102,0.35)",
            }}
            aria-label="Chat WhatsApp">
            <WhatsAppIcon size={20} />
            <span className="hidden sm:block">Pesan via WA</span>
        </a>
    );
}