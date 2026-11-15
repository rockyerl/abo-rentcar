# ABO Rent Car — VIP & Executive Mobility Platform

> **The 1-Billion Class VIP & Executive Car Rental Landing Page & Mobility Platform**  
> Standar Tata Kelola: **SUNDAWA Code Setup Standards v1.0** & **SUNDAWA Engineering Standards v1.0**.  
> Stack: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Lucide Icons + Vitest.

---

## 🏛️ Arsitektur & Filosofi Sistem

Situs ini menerapkan **Feature-Driven Architecture (Vertical Slice)** sesuai panduan arsitektur rekayasa SUNDAWA:

```text
abo-rentcar/
├── src/
│   ├── app/                      # Thin Routing Layer (Next.js App Router)
│   │   ├── layout.tsx            # Root Layout, JSON-LD Schema.org AutoRental, Viewport
│   │   ├── page.tsx              # Thin entry routing page
│   │   └── globals.css           # Design token Obsidian & Champagne Gold
│   ├── features/                 # 📦 Feature Vertical Slices
│   │   ├── hero/                 # Showcase armada flagship & live availability badge
│   │   ├── fleet/                # Koleksi armada, filter kategori, CarCard specs
│   │   ├── benefits/             # 6 Pilar standar eksekutif (Zero-Downtime Guarantee)
│   │   ├── booking/              # Private Concierge Engine (Kalkulator real-time & WA dispatch)
│   │   ├── trust/                # Testimoni korporasi B2B, FAQ accordion
│   │   └── contact/              # Hub Padalarang Whoosh, direct WhatsApp hotline
│   ├── shared/                   # 🧱 Reusable UI Primitives
│   │   └── components/           # Navbar, Footer, FloatingWA, WhatsAppIcon
│   └── lib/                      # Pure Business Logic & Constants
│       ├── constants.ts          # Katalog spesifikasi armada, fasilitas VIP, titik jemput
│       └── booking-calculator.ts # Mesin kalkulasi durasi, diskon progresif, format WA
├── tests/
│   └── unit/                     # Vitest unit test suite (Kalkulator & Formatter)
├── .editorconfig                 # Standarisasi indentasi & LF
├── .gitattributes                # Normalisasi Git line endings
├── .gitignore                    # Proteksi file environment & build
├── .prettierrc                   # Format kode standar SUNDAWA
├── AGENTS.md                     # Aturan AI Coding Agent (SUNDAWA AI-01 s/d AI-08)
├── package.json                  # Manifest & Universal Command Contract
└── README.md                     # Dokumentasi teknis repositori
```

---

## 📜 Universal Command Contract (SUNDAWA Kontrak Perintah)

Repositori ini mematuhi kontrak perintah universal standar SUNDAWA:

| Perintah            | Deskripsi                                                                       |
| :------------------ | :------------------------------------------------------------------------------ |
| `pnpm dev`          | Menjalankan server Next.js lokal pada port 3000                                 |
| `pnpm build`        | Melakukan kompilasi artefak produksi teroptimasi                                |
| `pnpm start`        | Menjalankan server build produksi                                               |
| `pnpm typecheck`    | Menjalankan verifikasi tipe TypeScript (`tsc --noEmit`)                         |
| `pnpm format`       | Menerapkan format kode standar menggunakan Prettier                             |
| `pnpm format:check` | Memverifikasi kepatuhan format kode tanpa mengubah berkas                       |
| `pnpm test`         | Menjalankan pengujian unit berbasis Vitest                                      |
| `pnpm check`        | **Quality Gate:** Menjalankan `format:check`, `typecheck`, dan `test` sekaligus |

---

## 👑 Transformasi Desain "Sekelas 1 Miliar Rupiah"

Desain ABO Rent Car telah dirombak secara menyeluruh dari gaya _cyberpunk/gaming neon_ menjadi **Executive Luxury Tier**:

1. **Palet Warna Ultra-Luxury**:
   - Deep Obsidian Black (`#07090E`), Slate Dark Card (`#0D1119`), dan aksen Champagne Gold (`#D4AF37`, `#F6E6B4`).
2. **Armada Flagship Berkelas**:
   - Toyota Alphard Executive Lounge, Innova Zenix Q Hybrid Modellista, Mitsubishi Pajero Sport Dakar Ultimate, Fortuner GR Sport, dan Hiace Premio Luxury Captain Seat.
3. **Private Concierge Booking Engine**:
   - Kalkulator estimasi biaya sewa harian real-time dengan diskon progresif multi-hari (5% untuk ≥3 hari, 10% untuk ≥7 hari).
   - Layanan pengawalan bagasi Whoosh/Airport dan penerbitan faktur pajak (e-Faktur PPN) terintegrasi.
   - Menghasilkan payload pesan WhatsApp protokoler VIP yang terstruktur rapi.
4. **Jaminan Layanan Korporat**:
   - _Zero-Downtime Guarantee_: Mobil pengganti setara dalam 45–60 menit.
   - _Chauffeur Bintang Lima_: Supir berbusana rapi, sopan, non-smoking, dan menguasai rute.
