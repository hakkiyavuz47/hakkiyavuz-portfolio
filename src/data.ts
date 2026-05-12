/* =========================================================
   Hakkı Yavuz — Image library + content
   - Real photos pulled from public Wix CDN (his existing site)
   - Concept categories (Düğün/Mezuniyet) use Unsplash placeholders
     until real shoots replace them. Marked AI/Konsept.
   ========================================================= */

// Locally hosted (originally Wix CDN). Sizes preserved as helper params for
// future srcset use; current URL points at the bundled asset.
const wix = (id: string, _w = 1400, _h = 1800) => `/images/${id}.jpg`;

const us = (id: string, w = 1400, h = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export type GallerySize = "s-tall" | "s-wide" | "s-sq" | "s-md" | "s-lg";

export type GalleryItem = {
  cat: string;
  size: GallerySize;
  concept: boolean;
  image: string;
};

export type Service = {
  key: string;
  num: string;
  title: string;
  body: string;
  image: string;
  concept: boolean;
};

export type HibritStep = {
  title: string;
  body: string;
  image: string;
  label: string;
  ai: boolean;
};

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export type FilterDef = {
  key: string;
  label: string;
};

export const HY_DATA = {
  heroImages: [
    us("photo-1483985988355-763728e1935b", 2400, 1600),
    wix("a84b36adad0347f38d635feb05ca9a6c", 2000, 2400),
    wix("64e9a21b2df14636b27fbbdd5430b9a5", 1600, 2400),
  ],

  about: {
    portrait: "/hakki-yavuz-profile.jpeg",
    name: "Hakkı Yavuz",
    role: "Fotoğrafçı & Görsel Yönetmen",
    location: "İstanbul",
    intro:
      "İstanbul merkezli fotoğrafçı ve görsel yönetmenim. Radyo Televizyon ve Sinema lisansının ardından, dört yılı aşkın süredir markalar, ajanslar ve özel projeler için kareler üretiyorum.",
    body:
      "Stüdyodan sokağa, ürün masasından restoran atmosferine — her brief'i kendi sinematik bakışımla çekiyor, ardından yapay zeka destekli post-prodüksiyonla atmosferi, ışığı ve sahneyi yeniden yorumluyorum. Subjeyi asla bozmadan, hayal edileni gerçekçi kılarak.",
    stats: [
      { k: "Yıl Deneyim", v: "6+" },
      { k: "Tamamlanan Proje", v: "120+" },
      { k: "Marka & Ajans", v: "20+" },
    ],
  },

  hibrit: [
    {
      title: "Aynı kare, başka bir dünya.",
      body:
        "Stüdyodaki kusursuz portreyi alıp Karaköy sokaklarına, İtalyan bir restoranın loş ışığına ya da bir Avrupa galerisinin beyaz duvarlarına taşıyoruz. Subjeyi ve tutarlılığı asla bozmadan.",
      image: wix("d63cde3edc7749499ec42ddfa9d6446d", 1400, 1750),
      label: "Stüdyo / Sokak",
      ai: false,
    },
    {
      title: "Konsept, çekim öncesi başlar.",
      body:
        "Çekime başlamadan önce yapay zeka destekli konsept render'larıyla atmosferi, ışığı, renk paletini görüyoruz. Hayalinizdeki kareye saatler değil günler kala bakıyorsunuz.",
      image: wix("bb704a7d3e074da1b5ca031a5abea745", 1400, 1750),
      label: "Konsept Render",
      ai: true,
    },
    {
      title: "Post-prodüksiyonun yeni dili.",
      body:
        "Geleneksel renk düzenlemenin ötesinde — sahne değişimi, ışık yeniden yerleştirme, sezonal atmosfer adaptasyonu. Klasik retoucher'ın bir hafta sürecek işini bir günde, daha sinematik bir sonuçla.",
      image: wix("13285b9ef4bc4b30982d0a226b1ecc13", 1400, 1750),
      label: "AI Post-Prod",
      ai: true,
    },
  ] as HibritStep[],

  services: [
    {
      key: "dugun",
      num: "01",
      title: "Düğün & Hikaye",
      body: "En özel gününüzü, sinematik bir dokunuş ve zamansız bir estetikle ölümsüzleştirin.",
      image: us("photo-1519741497674-611481863552", 1400, 1700),
      concept: true,
    },
    {
      key: "mezuniyet",
      num: "02",
      title: "Mezuniyet & Konsept",
      body: "Başarınızı standart bir kareyle değil, size özel tasarlanmış sanatsal konseptlerle taçlandırın.",
      image: us("photo-1523580494863-6f3031224c94", 1400, 1700),
      concept: true,
    },
    {
      key: "moda",
      num: "03",
      title: "Moda & Portre",
      body: "Stüdyodan sokağa, asıl objeyi ve tutarlılığı bozmadan yaratılan sınırları aşan editoryal çekimler.",
      image: wix("a84b36adad0347f38d635feb05ca9a6c", 1400, 1750),
      concept: false,
    },
    {
      key: "yemek",
      num: "04",
      title: "Yemek & Restoran",
      body: "Lezzeti ekrandan taşıran, basit bir beyaz fondan hayalinizdeki atmosfere uyarlanabilen iştah açıcı sunumlar.",
      image: us("photo-1546069901-ba9599a7e63c", 1400, 1700),
      concept: false,
    },
  ] as Service[],

  portfolio: [
    { cat: "moda", size: "s-wide", concept: false, image: wix("64e9a21b2df14636b27fbbdd5430b9a5", 1600, 1000) },
    { cat: "moda", size: "s-tall", concept: false, image: wix("d63cde3edc7749499ec42ddfa9d6446d", 1000, 1300) },
    { cat: "moda", size: "s-sq", concept: false, image: wix("bb704a7d3e074da1b5ca031a5abea745", 1000, 1000) },
    { cat: "moda", size: "s-md", concept: false, image: wix("a84b36adad0347f38d635feb05ca9a6c", 1400, 1050) },
    { cat: "moda", size: "s-lg", concept: false, image: wix("418c65b9d85443cbb281d33323c58130", 1200, 1200) },
    { cat: "moda", size: "s-tall", concept: false, image: wix("13285b9ef4bc4b30982d0a226b1ecc13", 1000, 1300) },
    { cat: "moda", size: "s-sq", concept: false, image: wix("4998997500db4fa0ac3a7831090e5e60", 1000, 1000) },
    { cat: "moda", size: "s-md", concept: false, image: wix("534b2b2328a04eebbb7e815aa3b50307", 1400, 1050) },
    { cat: "moda", size: "s-tall", concept: false, image: wix("23fac05ff56f49ac83953313f81b55f4", 1000, 1300) },
    { cat: "moda", size: "s-sq", concept: false, image: wix("f0a6564e0b554d8f84fe77a9be5469f5", 1000, 1000) },

    { cat: "yemek", size: "s-md", concept: false, image: us("photo-1546069901-ba9599a7e63c", 1400, 1050) },
    { cat: "yemek", size: "s-tall", concept: false, image: us("photo-1567620905732-2d1ec7ab7445", 1000, 1300) },
    { cat: "yemek", size: "s-sq", concept: true, image: us("photo-1551183053-bf91a1d81141", 1000, 1000) },
    { cat: "yemek", size: "s-wide", concept: true, image: us("photo-1414235077428-338989a2e8c0", 1600, 1000) },
    { cat: "yemek", size: "s-tall", concept: false, image: us("photo-1504674900247-0877df9cc836", 1000, 1300) },

    { cat: "dugun", size: "s-wide", concept: true, image: us("photo-1519741497674-611481863552", 1600, 1000) },
    { cat: "dugun", size: "s-tall", concept: true, image: us("photo-1606216794074-735e91aa2c92", 1000, 1300) },
    { cat: "dugun", size: "s-sq", concept: true, image: us("photo-1591604466107-ec97de577aff", 1000, 1000) },
    { cat: "dugun", size: "s-md", concept: true, image: us("photo-1465495976277-4387d4b0b4c6", 1400, 1050) },
    { cat: "dugun", size: "s-lg", concept: true, image: us("photo-1511795409834-ef04bbd61622", 1200, 1200) },

    { cat: "mezuniyet", size: "s-tall", concept: true, image: us("photo-1523580494863-6f3031224c94", 1000, 1300) },
    { cat: "mezuniyet", size: "s-md", concept: true, image: us("photo-1627556704290-2b1f5853ff78", 1400, 1050) },
    { cat: "mezuniyet", size: "s-sq", concept: true, image: us("photo-1564981797816-1043664bf78d", 1000, 1000) },
    { cat: "mezuniyet", size: "s-wide", concept: true, image: us("photo-1597392582469-a697322d5c16", 1600, 1000) },
  ] as GalleryItem[],

  filters: [
    { key: "all", label: "Tümü" },
    { key: "moda", label: "Moda & Portre" },
    { key: "yemek", label: "Yemek & Restoran" },
    { key: "dugun", label: "Düğün" },
    { key: "mezuniyet", label: "Mezuniyet" },
  ] as FilterDef[],

  process: [
    { num: "01", title: "Brief & Konsept", body: "Vizyonunuzu birlikte tariflendiriyoruz. Mood board, referans, atmosfer; gerekiyorsa AI destekli hızlı konsept render'lar." },
    { num: "02", title: "Çekim", body: "Stüdyo, mekan ya da lokasyonda profesyonel çekim. Drone gerektiren projelerde havadan kareler dahil." },
    { num: "03", title: "AI Post-Prod.", body: "Klasik retouch + sahne, ışık ve atmosfer adaptasyonu. Subje asla bozulmadan; tutarlılık her karede korunur." },
    { num: "04", title: "Teslim", body: "Web, baskı ve sosyal medya için optimize edilmiş final teslim. Revizyon turuyla ince ayarlar dahil." },
  ] as ProcessStep[],
};

export type HYData = typeof HY_DATA;
