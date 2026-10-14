# Manajemen & Nilai Stok Produk UMKM (Praktikum 3 & 4)

Proyek web interaktif ini dikembangkan untuk mengelola data produk Usaha Mikro, Kecil, dan Menengah (UMKM), melakukan validasi data secara *real-time*, menghitung nilai total stok secara otomatis, serta menampilkan rekapitulasi ke dalam tabel dinamis berbasis JavaScript.

---

## Fitur Utama

1. **Form Input Interaktif**:
   - Mendukung berbagai tipe data masukan HTML5: **Text** (Nama Produk), **Select Dropdown** (Kategori), dan **Number** (Harga & Stok).
2. **Event Handling Lengkap**:
   - Menggunakan event `'submit'` untuk memproses penambahan data produk baru tanpa *reload* halaman (`e.preventDefault()`).
   - Menggunakan event `'input'` dan `'change'` untuk menghadirkan fitur **Live Preview** yang merespons ketikan pengguna secara *real-time*.
3. **Feedback Visual Interaktif (Tanpa `alert()`)**:
   - Menyediakan banner notifikasi dinamis (sukses atau gagal) langsung pada antarmuka web dengan efek transisi otomatis yang menghilang setelah beberapa detik.
4. **Perhitungan Otomatis**:
   - Menghitung nilai stok per produk ($Harga \times Stok$) dan mengakumulasikannya menjadi Total Nilai Stok Keseluruhan.

---

## Struktur Berkas Proyek

Struktur direktori proyek dirancang terpisah agar modular dan mudah dipelihara:
```text
project-umkm/
│
├── index.html          # Kerangka antarmuka utama halaman web
├── README.md           # Dokumentasi resmi proyek
└── assets/
    ├── css/
    │   └── style.css   # Berkas gaya tampilan (styling & variabel CSS)
    └── js/
        └── script.js   # Berkas logika JavaScript, dataset, dan event handler
```

---

## Cara Menjalankan Proyek

1. Unduh atau clone seluruh berkas proyek ke dalam satu direktori lokal komputer Anda.
2. Pastikan struktur folder `assets/css/style.css` dan `assets/js/script.js` sudah sesuai.
3. Buka berkas `index.html` menggunakan browser modern (Google Chrome, Mozilla Firefox, Microsoft Edge, dll.).
4. Coba masukkan data produk baru melalui form interaktif dan amati perubahan pada *Live Preview* serta tabel rekapitulasi secara langsung!

---

## Teknologi yang Digunakan
* **HTML5**: Struktur semantik halaman web.
* **CSS3**: Desain antarmuka responsif dengan *Flexbox*, *Grid*, dan *CSS Custom Properties* (`:root`).
* **JavaScript (ES6+)**: Manipulasi DOM, pengelolaan *Dataset*, fungsi *Helper*, serta manajemen *Event Listener*.