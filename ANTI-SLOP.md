# ANTI-SLOP CODE & DESIGN DIRECTIVES (SUNDAWA AI-09)

File ini mengatur standardisasi **Anti-AI Slop** dan **Design Integrity** untuk repositori ABO Rent Car.
Tujuannya adalah memastikan website terlihat **100% otentik, profesional, dapat dipercaya oleh klien bisnis dan perorangan nyata, serta bersih dari artefak / klise AI yang mengesankan website scam atau proyek demo generik**.

---

## 1. HARD BANNED PATTERNS (Dilarang Keras):

1. **Dilarang Menampilkan Metrik Palsu (Fake Vanity Metrics):**
   - JANGAN PERNAH membuat metrik rating statis palsu seperti `5.0 (198 reviews)` atau counter palsu `tripsCount: 198` di setiap mobil tanpa integrasi database review nyata.
   - JANGAN PERNAH membuat testimoni berpura-pura menjadi orang nyata (_"Bpk. Hendra - Jakarta"_, _"Siti A."_) jika data tersebut fiktif. Gantilah dengan **Skenario Perjalanan Nyata / Use Cases** yang berfokus pada spesifikasi rute & solusi kendaraan (contoh: _"Rute Wisata Ciwidey - Lembang"_, _"Mobilitas Tamu Stasiun Whoosh"_).
2. **Dilarang Menggunakan Slop Copywriting AI:**
   - Dilarang menggunakan frasa klise startup AI: _"Unlock the future"_, _"Revolutionize your mobility"_, _"Enterprise-grade luxury"_, _"AI-Powered"_, _"Dijamin 100% puas tanpa cela"_.
   - Gunakan selalu **Voice of Tone resmi Abo Rent Car Brand Guideline v1.0**:
     - **Praktis**: Langsung to the point, transparan menyebut angka rupiah dan syarat rental.
     - **Ramah**: Sopan, hangat, dan melayani ala keramahan khas Bandung / Jawa Barat.
     - **Jelas**: Tanpa syarat terselubung, tanpa kata-kata berbunga yang membingungkan.
     - **Tagline Resmi**: _"Pilih mobil. Siap jalan."_
3. **Dilarang Menggunakan Visual Slop Clichés:**
   - Dilarang menggunakan icon bintang rating emas bintang lima palsu di sembarang komponen.
   - Dilarang menggunakan icon `Sparkles` (`✨`) yang mengesankan fitur AI generik pada layanan rental fisik nyata.
   - Hindari efek blur neon berlebihan (`blur-3xl`, `blur-[160px]`) yang mengaburkan kejelasan teks atau membuat halaman terlihat seperti template Crypto/Web3.
   - Prioritaskan foto flyer katalog asli (`/cars/catalog/*.jpg`) dan foto landmark nyata Bandung yang informatif.

---

## 2. REAL BUSINESS TRUST ANCHORS (Wajib Ditampilkan):

Agar klien yakin 100% bahwa Abo Rent Car adalah bisnis rental mobil fisik resmi dan bukan penipuan:

1. **Alamat Fisik Nyata & Terverifikasi:**
   `G-land Valley Cluster Gladis No.10, Jayamekar, Kec. Padalarang, Kab. Bandung Barat, Jawa Barat 40553` (10 menit dari Stasiun Kereta Cepat Whoosh Padalarang).
2. **Kontak Resmi & WhatsApp Aktif:**
   `+62 821-3055-4260` dengan nomor Indonesia terdaftar.
3. **Katalog Transparan Lengkap:**
   Tabel harga Weekday vs Weekend, tarif Lepas Kunci vs Plus Supir, dan Paket Wisata All-in (BBM, Driver, Tol, Makan Supir) tanpa biaya tersembunyi.
4. **Legalitas & Layanan B2B:**
   Dukungan e-Faktur PPN, Term of Payment (TOP), dan kontrak resmi untuk perusahaan/instansi.
