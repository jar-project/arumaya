# Arumaya Residences — Daftar Gambar & Catatan

Semua gambar ditaruh di `assets/`. Nama file **harus persis** seperti di bawah.

---

## 1. Logo

| File | Rekomendasi |
|---|---|
| `assets/logo.png` | PNG transparan, tinggi min. 80px. Pakai versi **gelap** — navbar-nya terang. Di footer otomatis di-invert jadi putih lewat CSS, jadi cukup 1 file. |

---

## 2. Gambar Utama

| File | Ukuran | Dipakai di |
|---|---|---|
| `assets/hero-arumaya.jpg` | **1920×1080** | Hero, background full screen |
| `assets/promo.jpg` | **900×700** | Section Promo (sisi kiri) |

> Hero teksnya rata kiri — pilih foto yang gedungnya agak ke kanan.

---

## 3. Slider Tipe Unit — **50 file .webp**

Tiap tipe unit butuh **5 foto**, format **.webp**, ukuran **1200×900 (4:3)**.

| Tipe | Harga | Spesifikasi | File |
|---|---|---|---|
| Arumaya 1 BR | Rp2,5 M | 1 KT / 1 KM / 55 m² | `arumaya-1br-1.webp` … `arumaya-1br-5.webp` |
| Arumaya 1 BR S | Rp2,8 M | 2 KT / 1 KM / 58 m² | `arumaya-1br-s-1.webp` … `arumaya-1br-s-5.webp` |
| Arumaya 1 BR Deluxe | Rp3,3 M | 2 KT / 1 KM / 61 m² | `arumaya-1br-deluxe-1.webp` … `arumaya-1br-deluxe-5.webp` |
| Arumaya 2 BR (79m²) | Rp3,9 M | 2 KT / 2 KM / 79 m² | `arumaya-2br-79-1.webp` … `arumaya-2br-79-5.webp` |
| Arumaya 2 BR (82m²) | Rp4 M | 2 KT / 2 KM / 82 m² | `arumaya-2br-82-1.webp` … `arumaya-2br-82-5.webp` |
| Arumaya 3 BR | Rp6,5 M | 3 KT / 2 KM / 120 m² | `arumaya-3br-1.webp` … `arumaya-3br-5.webp` |
| GV Studio | Rp1,6 M | 1 KT / 1 KM / 36 m² | `gv-studio-1.webp` … `gv-studio-5.webp` |
| GV 1 BR | Rp2,6 M | 1 KT / 1 KM / 59 m² | `gv-1br-1.webp` … `gv-1br-5.webp` |
| GV 2 BR | Rp4,3 M | 2 KT / 2 KM / 98 m² | `gv-2br-1.webp` … `gv-2br-5.webp` |
| GV 3 BR | Rp6,3 M | 3 KT / 2 KM / 127 m² | `gv-3br-1.webp` … `gv-3br-5.webp` |

---

## 4. Fasilitas Arumaya — 5 file

| File | Ukuran | Label di web |
|---|---|---|
| `assets/fasilitas-kolam-renang.jpg` | **1200×900** (paling besar di grid) | Olympic Length Sky Pool |
| `assets/fasilitas-sky-garden.jpg` | 800×600 | Sky Garden |
| `assets/fasilitas-area-bermain.jpg` | 800×600 | Area Bermain |
| `assets/fasilitas-eksklusif.jpg` | 800×600 | Fasilitas Eksklusif |
| `assets/fasilitas-lain-lain.jpg` | 800×600 | Lain-lain |

---

## 5. Galeri Tentang — 4 file

| File | Ukuran |
|---|---|
| `assets/about-1.jpg` | 600×800 (potrait) |
| `assets/about-2.jpg` | 600×600 |
| `assets/about-3.jpg` | 600×600 |
| `assets/about-4.jpg` | 600×800 (potrait) |

---

## Total: 62 file gambar

```
assets/
├── logo.png
├── hero-arumaya.jpg
├── promo.jpg
├── fasilitas-kolam-renang.jpg
├── fasilitas-sky-garden.jpg
├── fasilitas-area-bermain.jpg
├── fasilitas-eksklusif.jpg
├── fasilitas-lain-lain.jpg
├── about-1.jpg  ...  about-4.jpg
└── units/
    ├── arumaya-1br-1.webp  ...  arumaya-1br-5.webp
    ├── arumaya-1br-s-1.webp  ...  arumaya-1br-s-5.webp
    ├── arumaya-1br-deluxe-1.webp  ...  arumaya-1br-deluxe-5.webp
    ├── arumaya-2br-79-1.webp  ...  arumaya-2br-79-5.webp
    ├── arumaya-2br-82-1.webp  ...  arumaya-2br-82-5.webp
    ├── arumaya-3br-1.webp  ...  arumaya-3br-5.webp
    ├── gv-studio-1.webp  ...  gv-studio-5.webp
    ├── gv-1br-1.webp  ...  gv-1br-5.webp
    ├── gv-2br-1.webp  ...  gv-2br-5.webp
    ├── gv-3br-1.webp  ...  gv-3br-5.webp
```

Compress semua pakai [TinyPNG](https://tinypng.com) / [Squoosh](https://squoosh.app). Hero idealnya < 300KB.

---

## Struktur Section (sesuai urutan di halaman)

1. Hero — headline, 3 keunggulan, harga mulai Rp1,6 M, CTA
2. Promo — split image + copy + CTA WA
3. Tipe Unit — **2 tab** (Arumaya Residences / Garden Villa), 10 kartu, slider 5 foto, tombol Detail (popup) + Booking (WA)
4. Fasilitas Sekitar — 7 kategori + 1 kartu CTA survei
5. Lokasi — alamat + Google Maps embed
6. Fasilitas Arumaya — grid foto asimetris
7. Tentang — copy + galeri 4 foto + 4 kartu Kelebihan
8. FAQ — accordion 5 pertanyaan
9. CTA / Marketing Gallery — alamat + form → WhatsApp
10. Footer

---

## Catatan Data

- **Harga hero Rp1,6 miliar** = harga Garden Villa Studio (unit termurah). Ini konsisten dengan situs aslinya.
- Data 10 unit (harga, KT/KM, luas) gue tarik langsung dari arumayaresidences.com.
- Ada **2 tipe "Arumaya 2 BR"** dengan luas berbeda (79 m² dan 82 m²) — itu memang begitu di situs aslinya, bukan salah ketik.
- **Spesifikasi teknis di popup identik untuk semua unit** — sesuai situs aslinya. Kalau klien punya spek berbeda per tipe, tinggal edit blok `.spec-group` di `index.html`.

## Yang Perlu Dikonfirmasi ke Klien

- [ ] Logo Arumaya (PNG transparan)
- [ ] Link social media (IG / FB / YouTube) masih `#`
- [ ] Harga — cek apakah masih berlaku
- [ ] Nomor WA — kalau berubah, edit `WA_NUMBER` di `assets/script.js` + find & replace `6281382443832` di `index.html`
