---
brand:
  name: "Abo Rent Car"
  tagline: "Pilih mobil. Siap jalan."
  location: "Bandung Raya & Padalarang, Jawa Barat"
  address: "G-land Valley Cluster Gladis No.10, Jayamekar, Kec. Padalarang, Kab. Bandung Barat, Jawa Barat 40553"
  contact:
    whatsapp: "+62 821-3055-4260"
    whatsapp_raw: "6282130554260"

tokens:
  colors:
    primary: "#0280F9" # Biru Abo (Enerjik, modern, visual utama)
    navy: "#033269" # Navy Abo (Elegan, terpercaya, stabil)
    navy_dark: "#02162e" # Background primer
    navy_card: "#04244D" # Background kartu & surface
    action: "#005DBD" # Biru Aksi (CTA button, rasio kontras 6.36:1)
    mist: "#F0F6FD" # Biru Kabut (Teks ringan / background light)
    slate_text: "#445B74" # Abu-abu teks sekunder
    white: "#FFFFFF"
    accent_emerald: "#10B981" # Status aktif / indikator ketersediaan unit
    accent_amber: "#F59E0B" # Highlight catatan biaya / weekend

typography:
  font_sans: "Open Sans, Plus Jakarta Sans, sans-serif"
  font_mono: "JetBrains Mono, monospace"
  scale:
    hero: "text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
    section_title: "text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
    card_title: "text-lg sm:text-xl font-bold tracking-tight"
    body: "text-xs sm:text-sm md:text-base leading-relaxed"
    mono_meta: "text-[11px] sm:text-xs font-mono"

principles:
  restraint: "Desain mengutamakan fungsi, informasi tarif transparan, dan kepercayaan bisnis nyata daripada gimmick animasi AI."
  layout: "Mobile-first, touch-friendly CTA, navigasi sticky bersih tanpa elemen redundan."
  interaction: "Setiap tombol booking wajib menghasilkan payload WhatsApp yang rapi, informatif, dan valid ke nomor admin resmi."
---

# ABO RENT CAR — DESIGN SYSTEM SPECIFICATION

Dokumen ini merupakan panduan spesifikasi token, tata letak, dan komponen untuk seluruh antarmuka web Abo Rent Car.

## 1. Fondasi Brand Identity (Abo Brand Guideline v1.0)

- **Karakter Visual:** Rapi, profesional, transparan, terpercaya.
- **Warna Utama:**
  - Biru Abo (`#0280F9`)
  - Navy Abo (`#033269`)
  - Biru Aksi (`#005DBD`)
  - Biru Kabut (`#F0F6FD`)
- **Logo Resmi:** Menggunakan asset SVG/PNG vector resmi (`/abo-rent-car-logo.png`), proporsi min. 140px di desktop dan 110px di mobile.

## 2. Hirarki Halaman (Page Structure)

1. **Navbar:** Header sticky minimalis dengan logo resmi, navigasi section, link B2B, dan menu mobile tanpa duplikasi icon chat.
2. **Hero Section:** Value proposition instan: Rental Mobil Bandung Lepas Kunci / Driver, Tanpa Deposit Tunai, Antar Stasiun Whoosh Padalarang.
3. **Katalog Mobil (Fleet):** Grid armada mobil asli dengan flyer katalog, rincian weekday/weekend, transmisi, kapasitas kursi, dan tombol pesan langsung.
4. **Paket Supir All-In:** Zona Bandung Kota, Lembang, dan Ciwidey/Pangalengan lengkap dengan transparansi rute, bensin, makan supir, dan tol.
5. **Skenario Perjalanan (Use Cases):** Contoh rute nyata wisatawan dan pebisnis (Stasiun Whoosh, Lembang, Ciwidey, Family Event) tanpa review palsu.
6. **Cara Sewa (How It Works):** 4 langkah mudah: Pilih Unit &rarr; Isi Detail &rarr; Verifikasi SIM & KTP &rarr; Unit Diantar Siap Jalan.
7. **Kalkulator Sewa Instan:** Simulasi harga interaktif dan input alamat jemputan custom.
8. **FAQ & Kontak Terverifikasi:** Pertanyaan seputar lepas kunci, jaminan unit, dan alamat pool fisik di Padalarang.
9. **Floating WhatsApp CTA:** Akses bantuan cepat di sudut kanan bawah yang ramah jempol (_thumb-friendly_).
