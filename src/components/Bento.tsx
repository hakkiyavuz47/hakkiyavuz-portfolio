import { HY_DATA } from "../data";

export function Bento() {
  return (
    <section className="bento" id="services" data-screen-label="03 Services">
      <div className="section__head">
        <div>
          <div className="section__num reveal">— 03 / Hizmetler</div>
          <div className="section__title reveal">
            <div>Farklı Sektörler, Ortak Estetik.</div>
            <div>Üründen Mekana: Çok Yönlü Prodüksiyon.</div>
            <div>Geniş Perspektif. Sınırsız Vizyon.</div>
            <div>Her Sektör İçin Kusursuz Kareler.</div>
          </div>
        </div>
      </div>
      <div className="bento__grid">
        {HY_DATA.services.map((s, i) => (
          <a
            href="#portfolio"
            key={s.key}
            className={`bento__card c${i + 1} reveal`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="img-wrap">
              <img src={s.image} alt={s.title} loading="lazy" />
            </div>

            <div className="body">
              <span className="num" style={{ color: "rgb(255, 255, 255)" }}>
                {s.num}
              </span>
              <h3 style={{ color: "rgb(255, 255, 255)" }}>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="digital__grid reveal">
        {[
          { icon: "🌐", title: "Web Tasarım", body: "Modern, hızlı ve mobil uyumlu web siteleri." },
          { icon: "📣", title: "Reklam", body: "Hedefe yönelik dijital reklam kampanyaları." },
          { icon: "🔍", title: "SEO", body: "Arama motorlarında üst sıralara taşıyan optimizasyon." },
          { icon: "📈", title: "Google Ads", body: "Ölçülebilir sonuçlar için Google reklam yönetimi." },
          { icon: "🎨", title: "Grafik Tasarım", body: "Marka kimliğinizi yansıtan özgün görsel tasarımlar." },
        ].map((item, i) => (
          <div key={i} className="digital__card" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="digital__icon">{item.icon}</span>
            <h3 className="digital__title">{item.title}</h3>
            <p className="digital__body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
