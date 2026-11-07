const rupiah = (n) => "Rp " + Number(n).toLocaleString("id-ID");
const tgl = (s) => new Date(s + "T00:00:00").toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const tglPendek = (s) => new Date(s + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "short" });

const MENU = [
  ["index.html", "Beranda"], ["berita.html", "Berita"], ["agenda.html", "Agenda"],
  ["produk.html", "Produk Desa"], ["transparansi.html", "Transparansi"], ["layanan.html", "Layanan"],
];

function renderLayout(active) {
  const links = MENU.map(([href, label]) =>
    `<a href="${href}" class="rounded-lg px-3 py-2 text-sm font-medium ${href === active ? "bg-brand-100 text-brand-700" : "text-slate-600 hover:bg-slate-100"}">${label}</a>`).join("");
  document.getElementById("nav").innerHTML = `
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="container-desa flex items-center justify-between py-3">
      <a href="index.html" class="flex items-center gap-2 text-lg font-extrabold text-brand-700">🌾 ${DESA.nama}</a>
      <nav class="hidden gap-1 md:flex">${links}</nav>
      <button id="burger" class="rounded-lg p-2 text-2xl md:hidden" aria-label="Menu">☰</button>
    </div>
    <nav id="mobileNav" class="container-desa hidden flex-col gap-1 pb-3 md:hidden">${links}</nav>
  </header>`;
  document.getElementById("burger").onclick = () => document.getElementById("mobileNav").classList.toggle("hidden");
  document.getElementById("mobileNav").classList.add("flex");
  document.getElementById("mobileNav").classList.add("hidden");

  document.getElementById("footer").innerHTML = `
  <footer class="mt-16 bg-brand-900 text-brand-100">
    <div class="container-desa grid gap-6 py-10 md:grid-cols-3">
      <div><p class="text-lg font-bold text-white">🌾 ${DESA.nama}</p><p class="mt-2 text-sm">${DESA.lokasi}</p></div>
      <div class="text-sm"><p class="font-semibold text-white">Kontak</p><p class="mt-2">WhatsApp: +${DESA.wa}</p><p>${DESA.email}</p></div>
      <div class="text-sm"><p class="font-semibold text-white">Tentang situs</p><p class="mt-2">Website contoh digitalisasi desa untuk pariwisata dan kemudahan warga. Semua data adalah dummy.</p></div>
    </div>
    <p class="border-t border-white/10 py-4 text-center text-xs">© ${new Date().getFullYear()} ${DESA.nama}. Contoh frontend.</p>
  </footer>`;
}

const newsCard = (b) => `
  <article class="card">
    <div class="mb-3 flex h-28 items-center justify-center rounded-xl bg-brand-50 text-5xl">${b.emoji}</div>
    <span class="badge">${b.kat}</span>
    <h3 class="mt-2 font-bold text-slate-900">${b.judul}</h3>
    <p class="mt-1 text-xs text-slate-500">${tgl(b.tgl)}</p>
    <p class="mt-2 text-sm text-slate-600">${b.isi}</p>
  </article>`;

const TIPE = { warga: ["Kegiatan Warga", "bg-sky-100 text-sky-700"], wisata: ["Wisata", "bg-amber-100 text-amber-700"], rutin: ["Rutin", "bg-slate-100 text-slate-700"] };
const eventCard = (a) => `
  <article class="card flex gap-4">
    <div class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-600 text-white">
      <span class="text-xl font-extrabold leading-none">${new Date(a.tgl).getDate()}</span>
      <span class="text-xs uppercase">${tglPendek(a.tgl).split(" ")[1]}</span>
    </div>
    <div>
      <span class="badge ${TIPE[a.tipe][1]}">${TIPE[a.tipe][0]}</span>
      <h3 class="mt-1 font-bold text-slate-900">${a.judul}</h3>
      <p class="text-xs text-slate-500">🕒 ${a.jam} WIB · 📍 ${a.tempat}</p>
      <p class="mt-1 text-sm text-slate-600">${a.ket}</p>
    </div>
  </article>`;

const productCard = (p, withBtn = true) => `
  <article class="card flex flex-col">
    <div class="mb-3 flex h-28 items-center justify-center rounded-xl bg-earth-100 text-5xl">${p.emoji}</div>
    <span class="badge self-start">${p.kat}</span>
    <h3 class="mt-2 font-bold text-slate-900">${p.nama}</h3>
    <p class="text-xs text-slate-500">${p.penjual}</p>
    <p class="mt-2 text-lg font-extrabold text-brand-700">${rupiah(p.harga)}</p>
    ${withBtn ? `<button data-add="${p.id}" class="btn mt-3">+ Keranjang</button>` : ""}
  </article>`;

const ambulanCard = (a) => `
  <article class="card">
    <div class="flex items-start justify-between">
      <div><h3 class="font-bold text-slate-900">🚑 ${a.nama}</h3><p class="text-xs text-slate-500">${a.plat}</p></div>
      <span class="rounded-full px-3 py-1 text-xs font-bold ${a.status === "Tersedia" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}">${a.status}</span>
    </div>
    <p class="mt-3 text-sm text-slate-600">Sopir: ${a.sopir}<br>Posisi: ${a.lokasi}</p>
    <a href="tel:${a.hp}" class="btn mt-3 w-full">📞 Hubungi ${a.hp}</a>
  </article>`;