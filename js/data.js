const DESA = {
  nama: "Desa Wisata Taman Sari",
  lokasi: "Kec. Selemadeg, Kab. Tabanan, Bali (dummy)",
  wa: "6281234567890", email: "perbekel@tamansari.example", telp: "+62 361 000 000",
  penduduk: 4210, banjar: 6, subak: 3, wisatawan: 28400,
};

const WISATA = [
  { nama: "Hutan Monyet Alas Wana", kat: "Alam", img: "monyet.jpg", jam: "08.00 – 18.00", tiket: "Rp 50.000", ket: "Hutan lindung adat dengan ratusan monyet ekor panjang, jalur teduh, dan pura kecil di tengah rimbun pepohonan." },
  { nama: "Terasering Sawah Subak", kat: "Alam", img: "sawah1.jpg", jam: "06.00 – 18.00", tiket: "Rp 25.000", ket: "Hamparan sawah berundak dengan sistem irigasi subak warisan leluhur. Terbaik dikunjungi saat pagi." },
  { nama: "Pura Luhur Taman Sari", kat: "Budaya", img: "pura.jpg", jam: "08.00 – 17.00", tiket: "Donasi", ket: "Pura desa tempat warga bersembahyang. Pengunjung wajib berpakaian adat dan menjaga ketenangan." },
  { nama: "Kampung Arsitektur Tradisional", kat: "Budaya", img: "rumah_adat.jpg", jam: "09.00 – 16.00", tiket: "Rp 30.000", ket: "Rumah adat Bali dengan tata ruang khas: angkul-angkul, bale, dan sanggah keluarga." },
  { nama: "Pasar Tradisional Desa", kat: "Keluarga", img: "pasar_tradisional.jpg", jam: "05.00 – 11.00", tiket: "Gratis", ket: "Pasar pagi yang menjual hasil kebun, jajan pasar, canang, dan kerajinan warga." },
  { nama: "Taman Desa & Taman Bermain", kat: "Keluarga", img: "taman.jpg", jam: "07.00 – 20.00", tiket: "Gratis", ket: "Ruang terbuka hijau untuk piknik keluarga, dengan area bermain anak yang aman." },
  { nama: "Tambak & Kampung Nelayan", kat: "Bahari", img: "tambak.jpg", jam: "06.00 – 17.00", tiket: "Rp 40.000", ket: "Melihat budidaya tambak, kapal ikan, dan ikut menjemput hasil tangkapan nelayan lokal." },
];

const BUDAYA = [
  { img: "upacara_adat1.jpg", t: "Upacara Adat", d: "Iring-iringan warga dalam busana adat." },
  { img: "barongan.jpg", t: "Tari Barong", d: "Pertunjukan sakral dan hiburan wisata." },
  { img: "topeng.jpg", t: "Seni Topeng", d: "Ukiran topeng oleh pengrajin desa." },
  { img: "berdoa.jpg", t: "Persembahyangan", d: "Sembahyang bersama di pura desa." },
  { img: "upacara_adat2.jpg", t: "Prosesi Ritual", d: "Persembahan dan doa bersama." },
  { img: "balapan.jpg", t: "Balap Tradisional", d: "Tradisi adu cepat yang meriah." },
  { img: "upacara_adat3.jpg", t: "Hari Raya Desa", d: "Perayaan tahunan seluruh banjar." },
  { img: "lukisan.jpg", t: "Seni Lukis", d: "Karya perupa muda dan senior desa." },
];

const PAKET = [
  { n: "Jelajah Pagi", h: "Rp 150.000", d: "3 jam", i: ["Sunrise di terasering", "Jalan kaki jalur subak", "Sarapan jajan pasar"] },
  { n: "Sehari di Taman Sari", h: "Rp 350.000", d: "8 jam", i: ["Hutan monyet & pura", "Workshop menenun/melukis", "Makan siang masakan rumah"] },
  { n: "Menginap Bersama Warga", h: "Rp 650.000", d: "2 hari 1 malam", i: ["Homestay rumah adat", "Pentas barong malam hari", "Ikut aktivitas tambak"] },
];

const BERITA = [
  { j: "Gotong Royong Bersihkan Saluran Subak Jelang Musim Tanam", tgl: "2026-11-08", kat: "Kegiatan", img: "sawah2.jpg", isi: "Ratusan warga dari enam banjar membersihkan saluran irigasi sepanjang tiga kilometer agar air mengalir merata ke seluruh petak sawah." },
  { j: "Hutan Monyet Alas Wana Terapkan Tiket Digital", tgl: "2026-11-02", kat: "Wisata", img: "monyet.jpg", isi: "Pengelola mulai memakai tiket digital untuk pengunjung agar antrean lebih tertib dan pendapatan tercatat transparan." },
  { j: "Pentas Barong Kini Digelar Setiap Sabtu Malam", tgl: "2026-10-25", kat: "Budaya", img: "barongan.jpg", isi: "Sekaa barong desa membuka pertunjukan reguler untuk wisatawan, hasilnya masuk kas banjar dan dana pelestarian seni." },
  { j: "Tenun Endek Desa Masuk Jaringan Pasar Butik", tgl: "2026-10-18", kat: "Ekonomi", img: "tenun.jpg", isi: "Kelompok penenun perempuan menerima pesanan tetap dari butik di Denpasar dan Ubud setelah pelatihan pemasaran digital." },
  { j: "Panen Raya Beras Merah Organik Subak Taman Sari", tgl: "2026-10-10", kat: "Pertanian", img: "beras.jpg", isi: "Hasil panen musim ini naik 12 persen. Sebagian dijual melalui toko desa dan paket wisata petik padi." },
  { j: "Kelompok Nelayan Mulai Budidaya Udang di Tambak Desa", tgl: "2026-09-30", kat: "Pesisir", img: "tambak.jpg", isi: "Tambak percontohan dikelola bersama BUMDes untuk menambah penghasilan nelayan di luar musim melaut." },
  { j: "Laporan Realisasi Dana Desa Semester I Dipublikasikan", tgl: "2026-07-15", kat: "Transparansi", img: "rumah_adat.jpg", isi: "Ringkasan pendapatan dan belanja desa dapat dibaca dan diunduh seluruh warga melalui situs ini." },
];

// tipe: adat | gotong | wisata | desa  (tanggal contoh)
const AGENDA = [
  { tgl: "2026-11-14", jam: "07.00", judul: "Gotong Royong Sabtu (Minggu ke-2)", tempat: "Balai Banjar & lingkungan masing-masing", tipe: "gotong", ket: "Bersih jalan, selokan, dan area pura. Warga membawa peralatan sendiri." },
  { tgl: "2026-11-21", jam: "19.00", judul: "Pentas Barong & Tari Topeng", tempat: "Wantilan Desa", tipe: "wisata", ket: "Pertunjukan untuk umum. Pengunjung dapat memesan tempat lewat halaman Layanan." },
  { tgl: "2026-11-24", jam: "17.30", judul: "Persembahyangan Bersama Purnama", tempat: "Pura Luhur Taman Sari", tipe: "adat", ket: "Pengunjung dipersilakan menyaksikan dari area luar dengan berpakaian adat." },
  { tgl: "2026-11-28", jam: "07.00", judul: "Gotong Royong Sabtu (Minggu ke-4)", tempat: "Area wisata & Hutan Monyet", tipe: "gotong", ket: "Fokus perawatan jalur wisata dan tempat sampah." },
  { tgl: "2026-12-02", jam: "08.00", judul: "Posyandu & Cek Kesehatan Warga", tempat: "Balai Banjar Tengah", tipe: "desa", ket: "Pemeriksaan balita, ibu hamil, dan lansia bersama Puskesmas." },
  { tgl: "2026-12-05", jam: "10.00", judul: "Workshop Menenun & Melukis untuk Wisatawan", tempat: "Sanggar Seni Taman Sari", tipe: "wisata", ket: "Kelas dua jam bersama pengrajin desa. Kuota 20 peserta." },
  { tgl: "2026-12-09", jam: "19.30", judul: "Paruman Desa: Rencana Anggaran 2027", tempat: "Balai Desa", tipe: "desa", ket: "Warga menyampaikan usulan program dan memantau rencana belanja desa." },
  { tgl: "2026-12-12", jam: "07.00", judul: "Gotong Royong Sabtu (Minggu ke-2)", tempat: "Balai Banjar & lingkungan masing-masing", tipe: "gotong", ket: "Kegiatan rutin kebersihan lingkungan." },
  { tgl: "2027-01-16", jam: "09.00", judul: "Festival Panen Padi & Ngayah Seni", tempat: "Lapangan Desa", tipe: "wisata", ket: "Panen bersama, pameran kerajinan, dan pentas seni dari seluruh banjar." },
];

const PRODUK = [
  { id: 1, nama: "Topi Anyaman Pandan", harga: 85000, kat: "Kerajinan", img: "kerajinan_topi.jpg", penjual: "Kelompok Pengrajin Ibu PKK" },
  { id: 2, nama: "Lukisan Kanvas Gaya Batuan", harga: 750000, kat: "Seni", img: "lukisan.jpg", penjual: "Sanggar Seni Taman Sari" },
  { id: 3, nama: "Topeng Kayu Pule Ukir", harga: 450000, kat: "Seni", img: "topeng.jpg", penjual: "Pengrajin Banjar Tengah" },
  { id: 4, nama: "Kain Tenun Endek", harga: 380000, kat: "Tekstil", img: "tenun.jpg", penjual: "Kelompok Tenun Sari Kencana" },
  { id: 5, nama: "Beras Merah Organik 5 kg", harga: 95000, kat: "Pertanian", img: "beras.jpg", penjual: "Subak Taman Sari" },
  { id: 6, nama: "Udang Vaname Segar 1 kg", harga: 110000, kat: "Pesisir", img: "tambak.jpg", penjual: "BUMDes Tambak Mandiri" },
  { id: 7, nama: "Ikan Tongkol Asap", harga: 65000, kat: "Pesisir", img: "nelayan2.jpg", penjual: "Kelompok Nelayan Segara" },
  { id: 8, nama: "Paket Tur Sawah & Subak", harga: 150000, kat: "Wisata", img: "sawah2.jpg", penjual: "Pokdarwis Taman Sari" },
];

const AMBULAN = [
  { nama: "Ambulans Desa 1", plat: "DK 1234 TS", sopir: "I Wayan Sudira", hp: "081200000001", status: "Tersedia", lokasi: "Kantor Perbekel" },
  { nama: "Ambulans Desa 2", plat: "DK 5678 TS", sopir: "I Made Arta", hp: "081200000002", status: "Bertugas", lokasi: "Menuju RSUD Tabanan" },
];

const KONTAK = [
  ["Puskesmas Selemadeg", "0361-000111"], ["Polsek Selemadeg", "0361-000222"],
  ["Damkar / BPBD Tabanan", "0361-000333"], ["Perbekel (24 jam)", "081200000000"],
];

const ADMIN = [
  ["Surat Keterangan Domisili", "1 hari kerja"], ["Surat Pengantar KTP/KK", "1 hari kerja"],
  ["Surat Keterangan Usaha", "2 hari kerja"], ["Izin Pentas/Kegiatan di Wantilan", "3 hari kerja"],
];

const DANA = {
  tahun: 2026,
  pendapatan: [
    { sumber: "Dana Desa (APBN)", nilai: 865000000 }, { sumber: "Alokasi Dana Desa (ADD)", nilai: 360000000 },
    { sumber: "Bagi Hasil Pajak & Retribusi", nilai: 95000000 }, { sumber: "Pendapatan Asli Desa (wisata & BUMDes)", nilai: 240000000 },
  ],
  belanja: [
    { bidang: "Penyelenggaraan Pemerintahan", anggaran: 330000000, realisasi: 281000000 },
    { bidang: "Pembangunan Desa", anggaran: 560000000, realisasi: 430000000 },
    { bidang: "Pembinaan Kemasyarakatan & Adat", anggaran: 210000000, realisasi: 168000000 },
    { bidang: "Pemberdayaan Masyarakat & Wisata", anggaran: 290000000, realisasi: 205000000 },
    { bidang: "Penanggulangan Bencana & Darurat", anggaran: 90000000, realisasi: 42000000 },
  ],
  kegiatan: [
    { nama: "Rehabilitasi Jalan Usaha Tani Subak", bidang: "Pembangunan", nilai: 210000000, progres: 85 },
    { nama: "Revitalisasi Wantilan Desa", bidang: "Adat & Budaya", nilai: 165000000, progres: 70 },
    { nama: "Pengadaan Ambulans Desa 2", bidang: "Kesehatan", nilai: 150000000, progres: 100 },
    { nama: "Penataan Jalur Wisata Hutan Monyet", bidang: "Wisata", nilai: 98000000, progres: 55 },
  ],
  laporan: [
    { judul: "APBDes 2026 (Ringkasan)", tgl: "2026-01-20", status: "Final" },
    { judul: "Laporan Realisasi Semester I 2026", tgl: "2026-07-15", status: "Final" },
    { judul: "Laporan Pertanggungjawaban 2025", tgl: "2026-02-10", status: "Final" },
    { judul: "Rancangan APBDes 2027 (Bahan Paruman)", tgl: "2026-11-01", status: "Draft" },
  ],
};