# Portofolio Digital Backend Developer - Irfan Fahrudin (Tema Merah Putih)

Website portofolio profesional khusus untuk target posisi **Backend Developer / Software Engineer**, dirancang dengan tema warna **Merah Putih** (*clean, modern, technical, recruiter-friendly*).

---

## 📁 Struktur File

```text
c:\PERCOB PORTOFOLIO\
├── index.html   # Struktur 7 Section Lengkap (Home, About, Skills, Projects, Experience, Education, Contact)
├── style.css    # Desain Merah Putih, Responsif (Mobile, Tablet, Desktop), Typografi Modern
├── script.js    # Interaktivitas: Hamburger Menu, Scroll Active Link, Salin Email ke Clipboard
└── README.md    # Petunjuk penggunaan dan kustomisasi
```

---

## 🚀 Cara Menjalankan Portofolio di Komputer Lokal

Ada 2 cara mudah:

### Opsi 1: Langsung Buka File HTML (Paling Cepat)
Cukup buka folder `c:\PERCOB PORTOFOLIO\` di File Explorer Windows Anda, lalu klik dua kali file **`index.html`** untuk langsung melihat tampilannya di Google Chrome, Microsoft Edge, atau browser favorit Anda.

### Opsi 2: Menggunakan Local Web Server (Python)
Buka PowerShell / Terminal di folder ini, lalu jalankan:
```bash
python -m http.server 8000
```
Lalu buka browser di alamat: [http://localhost:8000](http://localhost:8000).

---

## ✏️ Panduan Mengisi Informasi yang Masih `[Belum diisi]`

Buka file `index.html` menggunakan editor teks (VS Code, Notepad, dll), lalu lakukan pencarian (*Ctrl + F*) untuk kata kunci berikut guna mengganti dengan data asli Anda:

1. **`[Nama Lengkap Anda]` / `[Nama Anda]`**: Ganti dengan nama lengkap dan nama panggilan Anda.
2. **`[Nama Universitas]`**: Ganti dengan kampus tempat Anda menempuh S1 Teknik Informatika.
3. **`[Tahun Masuk] — [Tahun Lulus]`**: Isi tahun masa perkuliahan Anda.
4. **`[Kota Anda]`**: Ganti dengan kota domisili Anda (misal: Jakarta, Bandung, Surabaya, dll).
5. **`[email.anda@domain.com]`**: Ganti dengan alamat email profesional Anda (ganti juga atribut `data-email` pada tombol copy).
6. **`github.com/[username]`**: Tautkan ke akun GitHub Anda.
7. **`linkedin.com/in/[username]`**: Tautkan ke profil LinkedIn Anda.
8. **Section Proyek (`Problem`, `Hasil / Pencapaian`, Link GitHub)**: Lengkapi detail spesifik jika Anda sudah menyiapkan repositori atau dokumentasi proyeknya.

---

## 🎨 Karakteristik Desain (Merah Putih)

- **Warna Utama:** Merah Crimson Modern (`#DC2626` / `#B91C1C`) dipadukan dengan latar Putih Bersih (`#FFFFFF`) dan aksen abu-abu muda (`#FAFAFA`).
- **Aksen Backend:** Terminal card status sistem di Hero section untuk menegaskan identitas teknis seorang Backend Developer.
- **Hierarki Proyek:** Disusun sesuai prioritas rekayasa backend:
  1. *Sistem Informasi Inventaris* (Logika Transaksi & Skema Database Relasional)
  2. *REST API Layanan Aplikasi Mobile* (Endpoint & Standarisasi JSON)
  3. *Sistem Monitoring Data* (Data Ingestion Python & PostgreSQL)
