const IMG = "src/assets/img/";
const $ = (id) => document.getElementById(id);
const rupiah = (n) => "Rp " + Number(n).toLocaleString("id-ID");
const tgl = (s) => new Date(s + "T00:00:00").toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const tglBln = (s) => new Date(s + "T00:00:00").toLocaleDateString("id-ID", { month: "short" });
const hari = (s) => new Date(s + "T00:00:00").getDate();
const today = () => new Date().toISOString().slice(0, 10);

const pic = (f, alt = "", cls = "", zoom = false) =>
  `<img src="${IMG}${f}" alt="${alt}" loading="lazy" ${zoom ? "data-zoom" : ""} class="${cls}" onerror="this.style.visibility='hidden'">`;

const MENU = [["index.html", "Beranda"], ["wisata.html", "Wisata & Budaya"], ["agenda.html", "Agenda"], ["berita.html", "Berita"], ["produk.html", "Produk Desa"], ["transparansi.html", "Transparansi"], ["layanan.html", "Layanan"]];

function renderLayout(active, overHero = false) {
  const links = (c) => MENU.map(([h, l]) => `<a href="${h}" class="${c} ${h === active ? "!text-gold-500" : ""}">${l}</a>`).join("");
  const nav = $("nav");
  nav.className = "fixed inset-x-0 top-0 z-50 transition duration-300";
  nav.innerHTML = `
    <div class="wrap flex items-center justify-between py-4">
      <a href="index.html" class="font-display text-lg font-semibold text-white md:text-xl">❖ ${DESA.nama}</a>
      <nav class="hidden items-center gap-6 text-[13px] font-medium text-white/85 lg:flex">${links("transition hover:text-gold-500")}</nav>
      <button id="burger" class="text-3xl text-white lg:hidden" aria-label="Menu">☰</button>
    </div>
    <nav id="mnav" class="hidden flex-col bg-forest-900 px-5 pb-4 text-sm text-white/90 lg:hidden">${links("border-b border-white/10 py-3")}</nav>`;
  $("burger").onclick = () => { $("mnav").classList.toggle("hidden"); $("mnav").classList.toggle("flex"); };
  const setNav = () => {
    const solid = !overHero || scrollY > 60;
    ["bg-forest-900/95", "backdrop-blur", "shadow-lg"].forEach((c) => nav.classList.toggle(c, solid));
    nav.classList.toggle("bg-gradient-to-b", !solid); nav.classList.toggle("from-black/50", !solid);
  };
  addEventListener("scroll", setNav); setNav();

  $("footer").innerHTML = `
    <footer class="mt-24 bg-forest-900 text-white/70">
      <div class="wrap grid gap-10 py-14 md:grid-cols-4">
        <div class="md:col-span-2"><p class="font-display text-2xl text-white">❖ ${DESA.nama}</p><p class="mt-3 max-w-md text-sm leading-relaxed">Desa wisata berbasis budaya dan pertanian di Bali. Digitalisasi desa untuk menyambut wisatawan, memudahkan warga, dan menjaga keterbukaan informasi.</p></div>
        <div class="text-sm"><p class="mb-3 font-semibold text-white">Jelajah</p><div class="flex flex-col gap-2">${MENU.slice(1).map(([h, l]) => `<a href="${h}" class="hover:text-gold-500">${l}</a>`).join("")}</div></div>
        <div class="text-sm"><p class="mb-3 font-semibold text-white">Kontak</p><p>${DESA.lokasi}</p><p class="mt-2">${DESA.telp}</p><p>${DESA.email}</p></div>
      </div>
      <p class="border-t border-white/10 py-5 text-center text-xs">© ${new Date().getFullYear()} ${DESA.nama}. Situs contoh, seluruh data adalah dummy.</p>
    </footer>
    <div id="lb" class="fixed inset-0 z-[60] hidden cursor-zoom-out items-center justify-center bg-black/90 p-4"><img class="max-h-full max-w-full rounded-lg"></div>`;
  const lb = $("lb");
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-zoom]");
    if (t && t.style.visibility !== "hidden") { lb.querySelector("img").src = t.src; lb.classList.remove("hidden"); lb.classList.add("flex"); }
    else if (e.target.closest("#lb")) { lb.classList.add("hidden"); lb.classList.remove("flex"); }
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape") { lb.classList.add("hidden"); lb.classList.remove("flex"); } });
}

function pageHero(t, s, f) {
  $("hero").innerHTML = `
  <section class="relative flex min-h-[48vh] items-end overflow-hidden bg-forest-900 pt-28 text-white">
    <img src="${IMG}${f}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-55" onerror="this.remove()">
    <div class="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/10"></div>
    <div class="wrap relative pb-12"><p class="eyebrow !text-gold-500">${DESA.nama}</p><h1 class="font-display text-4xl font-semibold md:text-6xl">${t}</h1><p class="mt-3 max-w-2xl text-white/80">${s}</p></div>
  </section>`;
}

function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

const wisataCard = (w) => `
  <article class="card reveal group">
    <div class="h-56 overflow-hidden">${pic(w.img, w.nama, "h-full w-full object-cover transition duration-700 group-hover:scale-110", true)}</div>
    <div class="p-6"><span class="badge">${w.kat}</span>
      <h3 class="mt-3 font-display text-xl font-semibold text-forest-900">${w.nama}</h3>
      <p class="mt-2 text-sm leading-relaxed">${w.ket}</p>
      <div class="mt-4 flex justify-between border-t border-sand-200 pt-4 text-xs text-forest-900/60"><span>🕒 ${w.jam}</span><span class="font-semibold text-forest-800">${w.tiket}</span></div>
    </div>
  </article>`;

const TIPE = { adat: ["Upacara Adat", "bg-amber-100 text-amber-800"], gotong: ["Gotong Royong", "bg-emerald-100 text-emerald-800"], wisata: ["Wisata & Seni", "bg-sky-100 text-sky-800"], desa: ["Layanan Desa", "bg-stone-200 text-stone-700"] };
const eventRow = (a) => `
  <article class="card reveal flex gap-5 p-5">
    <div class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-forest-800 text-white"><span class="font-display text-2xl font-semibold leading-none">${hari(a.tgl)}</span><span class="mt-1 text-[10px] uppercase tracking-widest text-gold-500">${tglBln(a.tgl)}</span></div>
    <div><span class="badge ${TIPE[a.tipe][1]}">${TIPE[a.tipe][0]}</span>
      <h3 class="mt-2 font-semibold text-forest-900">${a.judul}</h3>
      <p class="text-xs text-forest-900/60">${tgl(a.tgl).split(",")[0]} · 🕒 ${a.jam} WITA · 📍 ${a.tempat}</p>
      <p class="mt-1 text-sm">${a.ket}</p></div>
  </article>`;

const newsCard = (b) => `
  <article class="card reveal group">
    <div class="h-48 overflow-hidden">${pic(b.img, b.j, "h-full w-full object-cover transition duration-700 group-hover:scale-110")}</div>
    <div class="p-6"><span class="badge">${b.kat}</span><h3 class="mt-3 font-display text-lg font-semibold leading-snug text-forest-900">${b.j}</h3>
      <p class="mt-1 text-xs text-forest-900/50">${tgl(b.tgl)}</p><p class="mt-3 text-sm leading-relaxed">${b.isi}</p></div>
  </article>`;

const productCard = (p, btn = true) => `
  <article class="card reveal group flex flex-col">
    <div class="h-52 overflow-hidden">${pic(p.img, p.nama, "h-full w-full object-cover transition duration-700 group-hover:scale-110", true)}</div>
    <div class="flex flex-1 flex-col p-5"><span class="badge self-start">${p.kat}</span>
      <h3 class="mt-3 font-display text-lg font-semibold text-forest-900">${p.nama}</h3><p class="text-xs text-forest-900/50">${p.penjual}</p>
      <p class="mt-auto pt-3 text-lg font-bold text-gold-600">${rupiah(p.harga)}</p>
      ${btn ? `<button data-add="${p.id}" class="btn mt-3 w-full">+ Keranjang</button>` : ""}</div>
  </article>`;

const ambulanCard = (a) => `
  <article class="card reveal p-6">
    <div class="flex items-start justify-between"><div><h3 class="font-display text-lg font-semibold text-forest-900">🚑 ${a.nama}</h3><p class="text-xs text-forest-900/50">${a.plat}</p></div>
      <span class="rounded-full px-3 py-1 text-xs font-bold ${a.status === "Tersedia" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}">${a.status}</span></div>
    <p class="mt-3 text-sm">Sopir: ${a.sopir}<br>Posisi: ${a.lokasi}</p>
    <a href="tel:${a.hp}" class="btn mt-4 w-full">📞 ${a.hp}</a>
  </article>`;