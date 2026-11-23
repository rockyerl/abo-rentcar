# AI CODING AGENT GUIDELINES (SUNDAWA AI-01 s/d AI-08 & SKILLS PACK v1.0.0)

Repositori ini mengikuti **SUNDAWA Code Setup Standards** dan telah terintegrasi penuh dengan **Sundawa AI Engineering Skills Pack v1.0.0** (`.agents/skills/`). Setiap AI Assistant / Coding Agent yang beroperasi di repositori ini WAJIB mematuhi ketentuan berikut:

1. **Boundary & Arsitektur (AI-01, AI-02):**
   - Hormati arsitektur Feature-Driven modular: Routing (`src/app`), Features (`src/features/*`), Shared UI Primitives (`src/shared`), dan Business Logic / Utilities (`src/lib`).
   - Jangan melakukan refactoring spekulatif pada berkas yang tidak diminta oleh pengguna.

2. **Kerahasiaan & Data Pribadi (AI-03):**
   - JANGAN PERNAH menyisipkan kredensial asli, nomor rekening/identitas pribadi pengguna nyata ke dalam kode, prompt, atau fixtures tes.
   - Selalu gunakan data representatif atau nomor kontak resmi bisnis.

3. **Integritas, Anti-Slop & User Experience:**
   - Patuhi spesifikasi desain di [DESIGN.md](file:///d:/work/abo-rentcar/DESIGN.md) dan aturan anti-slop di [ANTI-SLOP.md](file:///d:/work/abo-rentcar/ANTI-SLOP.md).
   - Jalankan skill `visual-antislop` dan `ui-ux-auditor` untuk mencegah elemen fiktif/scammy (tidak ada fake vanity metrics, no fake 5.0 ratings, no spammy AI sparkles).
   - Setiap interaksi form pemesanan harus menghasilkan payload pemesanan WhatsApp yang valid dan terstruktur rapi.

4. **Kualitas Kode & Verifikasi Wajib (AI-04, Universal Command):**
   - Sebelum menyelesaikan tugas, selalu jalankan dan pastikan lolos:
     ```bash
     pnpm check
     ```
     (Menjalankan `pnpm format:check`, `pnpm typecheck`, dan `pnpm test`).
   - Jangan menekan atau mengabaikan peringatan TypeScript / linter tanpa justifikasi teknis yang disetujui.

5. **Sundawa Skills Pack Routing (`.agents/skills/`):**
   - **UI/UX & Desain Otentik**: Gunakan `visual-antislop` dan `ui-ux-auditor`.
   - **Code Quality & Refactoring**: Gunakan `clean-code-auditor`.
   - **Bug & Regression Testing**: Gunakan `bug-hunter` dan `test-case-generator`.
   - **Keamanan & Verifikasi Audit**: Gunakan `security-auditor` dan `audit-evidence-validator`.
   - Ikuti aturan operasional di [.agents/governance/OPERATING-RULES.md](file:///d:/work/abo-rentcar/.agents/governance/OPERATING-RULES.md).
