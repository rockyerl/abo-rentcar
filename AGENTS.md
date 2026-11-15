# AI CODING AGENT GUIDELINES (SUNDAWA AI-01 s/d AI-08)

Repositori ini mengikuti **SUNDAWA Code Setup Standards**. Setiap AI Assistant / Coding Agent yang beroperasi di repositori ini WAJIB mematuhi ketentuan berikut:

1. **Boundary & Arsitektur (AI-01, AI-02):**
   - Hormati arsitektur Feature-Driven modular: Routing (`src/app`), Features (`src/features/*`), Shared UI Primitives (`src/shared`), dan Business Logic / Utilities (`src/lib`).
   - Jangan melakukan refactoring spekulatif pada berkas yang tidak diminta oleh pengguna.

2. **Kerahasiaan & Data Pribadi (AI-03):**
   - JANGAN PERNAH menyisipkan kredensial asli, nomor rekening/identitas pribadi pengguna nyata ke dalam kode, prompt, atau fixtures tes.
   - Selalu gunakan data representatif atau nomor kontak resmi bisnis.

3. **Integritas & User Experience:**
   - Pertahankan konsistensi visual tier ultra-luxury ("1 Miliar Rupiah Enterprise Grade") untuk brand positioning ABO Rent Car.
   - Setiap interaksi form pemesanan harus menghasilkan payload pemesanan WhatsApp yang valid dan terstruktur rapi.

4. **Kualitas Kode & Verifikasi Wajib (AI-04, Universal Command):**
   - Sebelum menyelesaikan tugas, selalu jalankan dan pastikan lolos:
     ```bash
     pnpm check
     ```
     (Menjalankan `pnpm format:check`, `pnpm typecheck`, dan `pnpm test`).
   - Jangan menekan atau mengabaikan peringatan TypeScript / linter tanpa justifikasi teknis yang disetujui.
