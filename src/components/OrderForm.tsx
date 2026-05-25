"use client";
import { useState } from "react";
import { WA_NUMBER, CARS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function OrderForm() {
    const [form, setForm] = useState({
        name: "", phone: "", pickupDate: "", returnDate: "",
        carType: "", driverNeeded: "lepas-kunci", pickupLocation: "", notes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const driver = form.driverNeeded === "plus-driver" ? "Plus Driver" : "Lepas Kunci";
        const message =
            `Halo ABO Rent Car! 🚗\n\n*PESANAN BARU*\n\n` +
            `👤 *Nama:* ${form.name}\n📱 *No. HP:* ${form.phone}\n` +
            `🚗 *Jenis Mobil:* ${form.carType || "Belum dipilih"}\n` +
            `📅 *Tanggal Ambil:* ${form.pickupDate}\n📅 *Tanggal Kembali:* ${form.returnDate}\n` +
            `🔑 *Tipe Sewa:* ${driver}\n📍 *Lokasi Jemput:* ${form.pickupLocation}\n` +
            `📝 *Catatan:* ${form.notes || "-"}\n\nMohon konfirmasi ketersediaan. Terima kasih!`;
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const Label = ({ children }: { children: React.ReactNode }) => (
        <label className="block mb-2 section-label" style={{ fontSize: "10px" }}>{children}</label>
    );

    const inputStyle = "input-field w-full rounded-none px-4 py-3 text-sm";

    return (
        <section id="pesan" className="py-28 relative" style={{ background: "var(--bg-mid)" }}>
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute top-0 left-0 right-0 h-px neon-line" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 anim-hidden">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="neon-line flex-1 max-w-16" />
                        <span className="section-label">Booking Online</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,8vw,100px)", lineHeight: 0.9 }}>
                        <span className="block text-white">PESAN</span>
                        <span className="block" style={{ color: "var(--brand-blue)" }}>SEKARANG</span>
                    </h2>
                    <p className="mt-4" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.4)" }}>
                        Isi form di bawah, lalu kirim otomatis ke WhatsApp kami.
                    </p>
                </div>

                {/* Form box */}
                <div className="anim-hidden p-8 lg:p-10 relative"
                     style={{ background: "var(--bg-card)", border: "1px solid rgba(0,170,255,0.15)" }}>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l" style={{ borderColor: "var(--brand-blue)" }} />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r" style={{ borderColor: "var(--brand-blue)" }} />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l" style={{ borderColor: "var(--brand-blue)" }} />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r" style={{ borderColor: "var(--brand-blue)" }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label>Nama Lengkap *</Label>
                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                   placeholder="Budi Santoso" className={inputStyle} style={{ fontFamily: "var(--font-body)" }}/>
                        </div>
                        <div>
                            <Label>Nomor HP / WhatsApp *</Label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                                   placeholder="08xxxxxxxxxx" className={inputStyle} style={{ fontFamily: "var(--font-body)" }}/>
                        </div>
                        <div>
                            <Label>Tanggal Ambil *</Label>
                            <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange}
                                   className={inputStyle} style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}/>
                        </div>
                        <div>
                            <Label>Tanggal Kembali *</Label>
                            <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange}
                                   className={inputStyle} style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}/>
                        </div>
                        <div>
                            <Label>Jenis Mobil</Label>
                            <select name="carType" value={form.carType} onChange={handleChange}
                                    className={inputStyle} style={{ fontFamily: "var(--font-body)" }}>
                                <option value="">-- Pilih Mobil --</option>
                                {CARS.map((c) => (
                                    <option key={c.id} value={`${c.name} (${c.pricePerDay}/hari)`}>
                                        {c.name} – {c.pricePerDay}/hari
                                    </option>
                                ))}
                                <option value="Fleksibel (dikonfirmasi)">Fleksibel (dikonfirmasi)</option>
                            </select>
                        </div>
                        <div>
                            <Label>Tipe Sewa</Label>
                            <select name="driverNeeded" value={form.driverNeeded} onChange={handleChange}
                                    className={inputStyle} style={{ fontFamily: "var(--font-body)" }}>
                                <option value="lepas-kunci">🔑 Lepas Kunci</option>
                                <option value="plus-driver">🧑‍✈️ Plus Driver</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <Label>Lokasi Jemput / Pengambilan *</Label>
                            <input type="text" name="pickupLocation" value={form.pickupLocation} onChange={handleChange}
                                   placeholder="Alamat lengkap atau Jl. ..." className={inputStyle} style={{ fontFamily: "var(--font-body)" }}/>
                        </div>
                        <div className="sm:col-span-2">
                            <Label>Catatan Tambahan</Label>
                            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                                      placeholder="Kebutuhan khusus, tujuan perjalanan, dll..."
                                      className={`${inputStyle} resize-none`} style={{ fontFamily: "var(--font-body)" }}/>
                        </div>
                    </div>

                    <button onClick={handleSubmit}
                            className="btn-blue mt-8 w-full flex items-center justify-center gap-3 text-white font-bold py-5 uppercase"
                            style={{
                                fontFamily: "var(--font-display)", fontSize: "20px", letterSpacing: "0.15em",
                                clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)"
                            }}>
                        <WhatsAppIcon size={22} />
                        <span>Kirim via WhatsApp</span>
                    </button>

                    <p className="text-center mt-4 section-label" style={{ opacity: 0.4, fontSize: "10px" }}>
                        Form ini akan membuka WhatsApp dengan template pesan otomatis
                    </p>
                </div>
            </div>
        </section>
    );
}