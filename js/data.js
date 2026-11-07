const DESA = {
  nama: "Desa Tirtomulyo",
  lokasi: "Kec. Getasan, Kab. Semarang, Jawa Tengah (dummy)",
  wa: "6281234567890",
  email: "pemdes@tirtomulyo.example",
  penduduk: 3420, kk: 1105, rt: 18, wisatawan: 12850,
};

const BERITA = [
  { id: 1, judul: "Kerja Bakti Massal Bersihkan Saluran Irigasi", tgl: "2026-11-02", kat: "Kegiatan", emoji: "🧹",
    isi: "Ratusan warga dari 18 RT bergotong royong membersihkan saluran irigasi sepanjang 2 km menjelang musim hujan." },
  { id: 2, judul: "Embung Tirta Asri Resmi Dibuka sebagai Wisata Edukasi", tgl: "2026-10-28", kat: "Wisata", emoji: "🏞️",
    isi: "Embung desa kini dibuka untuk wisatawan dengan paket susur embung, memancing, dan pemandangan matahari terbit." },
  { id: 3, judul: "Posyandu Lansia dan Cek Kesehatan Gratis", tgl: "2026-10-20", kat: "Kesehatan", emoji: "🩺",
    isi: "Puskesmas bersama kader desa menggelar cek tensi, gula darah, dan senam sehat untuk lansia." },
  { id: 4, judul: "Kopi Tirtomulyo Tembus Pasar Luar Kota", tgl: "2026-10-12", kat: "Ekonomi", emoji: "☕",
    isi: "BUMDes mengirim 300 kg kopi robusta olahan petani desa ke pembeli di Semarang dan Yogyakarta." },
  { id: 5, judul: "Laporan Realisasi Dana Desa Semester I Dipublikasikan", tgl: "2026-07-15", kat: "Transparansi", emoji: "📊",
    isi: "Pemerintah desa merilis ringkasan realisasi anggaran semester I untuk dapat diakses seluruh warga." },
];

// Agenda: tipe = warga | wisata | rutin
const AGENDA = [
  { id: 1, judul: "Kerja Bakti Sabtu Minggu ke-2", tgl: "2026-11-14", jam: "06:30", tempat: "Balai Desa & tiap RT", tipe: "warga", ket: "Bersih jalan, selokan, dan fasilitas umum. Bawa alat kebersihan masing-masing." },
  { id: 2, judul: "Pasar Minggu Pagi Desa", tgl: "2026-11-15", jam: "06:00", tempat: "Lapangan Desa", tipe: "wisata", ket: "Jajanan tradisional, hasil tani, dan UMKM. Terbuka untuk pengunjung luar desa." },
  { id: 3, judul: "Posyandu Balita & Ibu Hamil", tgl: "2026-11-18", jam: "08:00", tempat: "Pos RW 03", tipe: "warga", ket: "Penimbangan, imunisasi, dan konsultasi gizi." },
  { id: 4, judul: "Susur Embung & Sunrise Trip", tgl: "2026-11-21", jam: "05:00", tempat: "Embung Tirta Asri", tipe: "wisata", ket: "Paket wisata pemandu lokal, include teh hangat dan jajan pasar. Kuota 30 orang." },
  { id: 5, judul: "Kerja Bakti Sabtu Minggu ke-4", tgl: "2026-11-28", jam: "06:30", tempat: "Balai Desa & tiap RT", tipe: "warga", ket: "Fokus pembersihan area wisata dan embung." },
  { id: 6, judul: "Musyawarah Desa (Musdes) APBDes 2027", tgl: "2026-12-05", jam: "19:30", tempat: "Balai Desa", tipe: "warga", ket: "Warga diundang menyampaikan usulan program dan memantau rencana anggaran." },
  { id: 7, judul: "Festival Panen Kopi", tgl: "2026-12-19", jam: "09:00", tempat: "Kebun Kopi Dusun Krajan", tipe: "wisata", ket: "Petik kopi, workshop roasting, dan pentas seni budaya." },
];

const PRODUK = [
  { id: 1, nama: "Kopi Robusta Tirtomulyo 200g", harga: 45000, kat: "Makanan & Minuman", emoji: "☕", penjual: "BUMDes Tirta Makmur", stok: 120 },
  { id: 2, nama: "Madu Hutan Randu 250ml", harga: 75000, kat: "Makanan & Minuman", emoji: "🍯", penjual: "Kelompok Tani Lebah", stok: 40 },
  { id: 3, nama: "Keripik Singkong Pedas", harga: 15000, kat: "Makanan & Minuman", emoji: "🥔", penjual: "UMKM Bu Sri", stok: 200 },
  { id: 4, nama: "Batik Tulis Motif Embung", harga: 185000, kat: "Kerajinan", emoji: "👘", penjual: "Sanggar Batik Asri", stok: 15 },
  { id: 5, nama: "Anyaman Bambu (Tas)", harga: 60000, kat: "Kerajinan", emoji: "👜", penjual: "Pengrajin Dusun Krajan", stok: 30 },
  { id: 6, nama: "Paket Wisata Sunrise Embung", harga: 50000, kat: "Wisata", emoji: "🌄", penjual: "Pokdarwis Tirta Asri", stok: 30 },
  { id: 7, nama: "Sayur Organik (Paket 3kg)", harga: 35000, kat: "Pertanian", emoji: "🥬", penjual: "Kelompok Tani Subur", stok: 50 },
  { id: 8, nama: "Teh Herbal Jahe Merah", harga: 22000, kat: "Makanan & Minuman", emoji: "🍵", penjual: "UMKM Bu Lastri", stok: 80 },
];

const AMBULAN = [
  { id: 1, nama: "Ambulans Desa 1", plat: "H 1234 TM", sopir: "Pak Joko", hp: "081200000001", status: "Tersedia", lokasi: "Balai Desa" },
  { id: 2, nama: "Ambulans Desa 2", plat: "H 5678 TM", sopir: "Pak Slamet", hp: "081200000002", status: "Bertugas", lokasi: "Perjalanan ke RSUD" },
];

const KONTAK = [
  { nama: "Puskesmas Getasan", hp: "0298-000111" },
  { nama: "Polsek Getasan", hp: "0298-000222" },
  { nama: "Damkar / BPBD", hp: "0298-000333" },
  { nama: "Kepala Desa (24 jam)", hp: "081200000000" },
];

// Dana desa (rupiah) — dummy
const DANA = {
  tahun: 2026,
  pendapatan: [
    { sumber: "Dana Desa (APBN)", nilai: 812000000 },
    { sumber: "Alokasi Dana Desa (ADD)", nilai: 345000000 },
    { sumber: "Bagi Hasil Pajak/Retribusi", nilai: 62500000 },
    { sumber: "Pendapatan Asli Desa (wisata & BUMDes)", nilai: 118000000 },
  ],
  belanja: [
    { bidang: "Penyelenggaraan Pemerintahan", anggaran: 310000000, realisasi: 262000000 },
    { bidang: "Pembangunan Desa", anggaran: 520000000, realisasi: 395000000 },
    { bidang: "Pembinaan Kemasyarakatan", anggaran: 180000000, realisasi: 141000000 },
    { bidang: "Pemberdayaan Masyarakat & Wisata", anggaran: 240000000, realisasi: 176000000 },
    { bidang: "Penanggulangan Bencana & Darurat", anggaran: 87500000, realisasi: 40000000 },
  ],
  laporan: [
    { judul: "APBDes 2026 (Ringkasan)", tgl: "2026-01-20", status: "Final" },
    { judul: "Laporan Realisasi Semester I 2026", tgl: "2026-07-15", status: "Final" },
    { judul: "Laporan Pertanggungjawaban 2025", tgl: "2026-02-10", status: "Final" },
    { judul: "Rencana APBDes 2027 (Draft Musdes)", tgl: "2026-11-01", status: "Draft" },
  ],
  kegiatan: [
    { nama: "Perbaikan Jalan Dusun Krajan", bidang: "Pembangunan", nilai: 185000000, progres: 90 },
    { nama: "Pembangunan Pos Wisata Embung", bidang: "Wisata", nilai: 96000000, progres: 70 },
    { nama: "Pengadaan Ambulans Desa 2", bidang: "Kesehatan", nilai: 150000000, progres: 100 },
    { nama: "Pelatihan UMKM & Pemasaran Digital", bidang: "Pemberdayaan", nilai: 24000000, progres: 55 },
  ],
};