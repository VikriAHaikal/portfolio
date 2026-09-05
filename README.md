# 🚀 Vikri A. Haikal — Personal Portfolio

> Portfolio website personal yang bersih, cepat, dan modern. Dibangun dengan **HTML5 semantik murni, Vanilla CSS, dan Vanilla JavaScript** — tanpa framework, tanpa proses build.

---

## 📸 Preview

Website ini menampilkan:

- **Hero Section** dengan animasi _typewriter_ untuk peran profesional
- **About, Experience, Projects, Skills, Contact** section yang komprehensif
- **Dark / Light mode** toggle dengan preferensi tersimpan di localStorage
- **Bilingual (ID / EN)** — seluruh konten dapat beralih bahasa secara instan
- **Scroll progress bar** di bagian atas halaman
- **Animasi fade-in** saat elemen masuk viewport (IntersectionObserver)
- **Desain responsif** untuk mobile, tablet, dan desktop
- **Aksesibilitas** (ARIA roles, semantic HTML, keyboard navigable)

---

## 🗂️ Struktur Proyek

```
portfolio/
├── index.html          # Satu-satunya file HTML — struktur & markup
├── css/
│   └── style.css       # Seluruh styling: design tokens, komponen, animasi
├── js/
│   ├── data.js         # ⭐ Edit file ini untuk update semua konten portfolio
│   └── script.js       # Logika UI: tema, bahasa, typewriter, render dinamis
└── public/
    ├── avatar.png      # Foto profil hero section
    ├── certs/           # Gambar sertifikat
    ├── media/
    │   ├── brands/      # Logo proyek, kampus, perusahaan, dan organisasi
    │   └── projects/    # GIF atau media demo proyek
    └── cv/
        └── CV_Vikri_A_Haikal.pdf   # File CV (untuk tombol Download CV)
```

---

## ✏️ Cara Kustomisasi Konten

Semua konten portfolio (nama, proyek, pengalaman, keahlian, dll.) dikelola terpusat di satu file:

**[`js/data.js`](js/data.js)**

Tidak perlu menyentuh `index.html` atau `script.js` untuk memperbarui konten.

### Data yang dapat diedit di `data.js`:

| Bagian           | Keterangan                                                      |
| ---------------- | --------------------------------------------------------------- |
| `personal`       | Nama, email, telepon, lokasi, URL CV, link sosial media         |
| `personal.roles` | Teks yang berputar di hero (typewriter effect)                  |
| `about`          | Paragraf "Tentang Saya" (EN & ID)                               |
| `experience[]`   | Daftar pengalaman kerja / magang / organisasi                   |
| `projects[]`     | Daftar proyek dengan tag, link GitHub, dan link demo            |
| `skills[]`       | Ikon teknologi menggunakan kelas [Devicon](https://devicon.dev) |
| `i18n`           | Semua label UI dalam dua bahasa (EN & ID)                       |

### Aturan Media

- Simpan logo di `public/media/brands/` dan GIF demo di `public/media/projects/`.
- Gunakan nama file lowercase dengan tanda hubung, misalnya `kopkar-adis.png`.
- Hubungkan aset melalui properti `logo` atau `media` pada entri terkait di `js/data.js`.
- Gunakan `alt` yang menjelaskan isi logo atau preview agar tetap aksesibel.

---

## ⚡ Cara Menjalankan

Tidak ada proses build, tidak ada `npm install`. Cukup buka file secara langsung:

```bash
# Opsi 1 — Buka langsung di browser
Buka index.html di browser (double-click)

# Opsi 2 — Gunakan Live Server (direkomendasikan saat development)
# Di VS Code: klik kanan index.html → "Open with Live Server"

# Opsi 3 — Dengan Python
python -m http.server 3000
# Buka http://localhost:3000
```

---

## 🛠️ Tech Stack

| Kategori       | Teknologi                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Markup         | HTML5 (Semantic)                                                                                                                                     |
| Styling        | Vanilla CSS (Custom Properties / Design Tokens)                                                                                                      |
| Logika         | Vanilla JavaScript (ES6+)                                                                                                                            |
| Ikon Teknologi | [Devicon](https://devicon.dev) via CDN                                                                                                               |
| Font           | [Space Grotesk](https://fonts.google.com/specimen/Space_Grotesk) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM_Plex_Mono) via Google Fonts |
| Deployment     | GitHub Pages / Vercel / Netlify (static hosting)                                                                                                     |

---

## 🌟 Fitur Utama

- **Zero dependencies** — tidak ada `node_modules`, tidak ada framework
- **Zero build step** — buka dan langsung jalan
- **Data-driven** — semua konten dirender secara dinamis dari `data.js`
- **Dark / Light mode** — persisten via `localStorage`
- **Bilingual (ID / EN)** — toggle bahasa instan tanpa reload
- **SEO Ready** — meta tags, Open Graph, dan struktur heading yang benar
- **Accessibility** — ARIA labels, semantic elements, keyboard navigation
- **Responsive** — mobile-first layout

---

## 📦 Cara Deploy

### GitHub Pages

1. Push repository ke GitHub
2. Buka **Settings → Pages**
3. Set source ke branch `main` / `master`, folder `/ (root)`
4. Website akan live di `https://username.github.io/portfolio`

### Vercel / Netlify

1. Import repository
2. **Build Command**: _(kosongkan)_
3. **Output Directory**: `.` atau `./`
4. Deploy — selesai!

---

## 🔧 Mengganti Foto Profil & CV

- **Foto profil**: Ganti file `public/avatar.png` dengan foto kamu
- **CV**: Taruh file PDF di `public/cv/` dan sesuaikan path di `data.js`:
  ```js
  cvUrl: 'public/cv/NAMA_FILE_CV.pdf',
  ```

---

## 📄 Lisensi

Proyek ini bersifat open-source. Silakan gunakan sebagai template portfolio kamu sendiri.

---

<p align="center">Made with ❤️ by <strong>Vikri A. Haikal</strong></p>
