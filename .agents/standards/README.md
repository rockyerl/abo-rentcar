# Referensi standar dan kebijakan pemetaan

- Sumber otoritatif dan edisi standar: `registry.json` (baseline diperiksa 2026-11-23).
- Untuk standar ISO berlisensi, **jangan** mengarang teks/klausul, daftar Annex A lengkap, atau klaim compliance hanya dari metadata.
- Pemetaan kontrol yang bersifat normatif harus menggunakan salinan resmi berlisensi milik organisasi, `control_id` yang diverifikasi, owner, SoA, bukti, tanggal, dan hasil penilaian.
- `OWASP Top 10` hanya awareness, **bukan** substitusi ASVS 5.0.0 maupun WSTG.
- `WCAG 2.2 AA` merupakan target acceptance yang harus diuji manusia dan alat; tool otomatis saja tidak cukup.
- `ISO/IEC/IEEE 29148:2018` masih digunakan sebagai baseline final; draf revisi tidak otomatis menjadi persyaratan.
- Standar quality model, manajemen, audit guidance, dan verification criteria adalah kategori berbeda; jangan menyamakan ISO dengan hasil scan.
- Periksa kembali versi dan applicability saat kickoff serta minimal per kuartal. Aktualisasikan mapping berdasarkan kontrak, regulasi, kebutuhan sistem, dan risiko.
- Standard IDs di schema adalah ID internal library ini, bukan nomor kontrol ISO.

## Evidence provenance minimum

Simpan `artifact URI`, ringkasan, timestamp, owner, commit/hash jika berlaku, status validasi, pembatasan ruang lingkup dan klasifikasi data. Hindari secrets/PII dalam laporan. Bila bukti sensitif, simpan link ke evidence vault dengan akses terbatas, bukan kontennya dalam laporan.
