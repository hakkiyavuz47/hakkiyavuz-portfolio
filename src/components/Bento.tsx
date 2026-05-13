import { useState } from "react";

type DigitalService = {
  icon: string;
  title: string;
  body: string;
  detail: string;
  tags?: string[];
};

const DIGITAL_SERVICES: DigitalService[] = [
  { icon: "🌐", title: "Web Tasarım",     body: "Modern, hızlı ve mobil uyumlu web siteleri.",              detail: "İşletmenize özel, hızlı yüklenen ve tüm cihazlarla uyumlu web siteleri tasarlıyoruz. UX odaklı tasarım, SEO dostu yapı ve güçlü görsel kimlikle markanızı dijitalde öne çıkarıyoruz." },
  { icon: "📣", title: "Dijital Pazarlama", body: "Tüm platformlarda hedefe yönelik reklam kampanyaları.", detail: "Google, Meta, Yandex ve TikTok'ta hedef kitlenize ulaşan, dönüşüm odaklı reklam kampanyaları yönetiyoruz. Her platform için özel strateji ve içerikle bütçenizi en verimli şekilde kullanarak maksimum erişim sağlıyoruz.", tags: ["Google Ads", "SEO", "Meta", "Yandex", "TikTok"] },
  { icon: "🎨", title: "Grafik Tasarım",  body: "Marka kimliğinizi yansıtan özgün görsel tasarımlar.",     detail: "Logo, kurumsal kimlik, broşür, sosyal medya görseli ve daha fazlası. Markanızın ruhunu yansıtan özgün tasarımlarla hedef kitlenizde kalıcı bir iz bırakıyoruz." },
];

const PRODUCTION_SERVICES = [
  {
    num: "01",
    title: "Tanıtım Filmi",
    body: "Markanızın hikayesini, ürününüzü veya kurumsal kimliğinizi sinematik bir dille anlatan profesyonel tanıtım filmleri.",
    icon: "🎬",
  },
  {
    num: "02",
    title: "Kurumsal İmaj Çekimi",
    body: "Şirketinizin profesyonel yüzünü yansıtan, ekip, mekan ve ürün odaklı kurumsal fotoğraf çekimleri.",
    icon: "📸",
  },
];

export function Bento() {
  const [activeService, setActiveService] = useState<DigitalService | null>(null);

  return (
    <section className="bento" id="services" data-screen-label="03 Services">
      <div className="section__head">
        <div>
          <div className="section__num reveal">— 03 / Hizmetler</div>
          <div className="section__title--sm reveal">
            <div>Farklı Sektörler, Ortak Estetik.</div>
            <div>Üründen Mekana: Çok Yönlü Prodüksiyon.</div>
            <div>Geniş Perspektif. Sınırsız Vizyon.</div>
            <div>Her Sektör İçin Kusursuz Kareler.</div>
          </div>
        </div>
      </div>

      {/* Production services */}
      <div className="prod__grid reveal">
        {PRODUCTION_SERVICES.map((s, i) => (
          <div key={i} className="prod__card">
            <span className="prod__icon">{s.icon}</span>
            <span className="prod__num">{s.num}</span>
            <h3 className="prod__title">{s.title}</h3>
            <p className="prod__body">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Digital services */}
      <div className="digital__grid reveal">
        {DIGITAL_SERVICES.map((item, i) => (
          <div
            key={i}
            className="digital__card"
            style={{ transitionDelay: `${i * 80}ms` }}
            onClick={() => setActiveService(item)}
          >
            <span className="digital__icon">{item.icon}</span>
            <h3 className="digital__title">{item.title}</h3>
            <p className="digital__body">{item.body}</p>
            {item.tags && (
              <div className="digital__tags">
                {item.tags.map((tag, ti) => (
                  <span key={ti} className="digital__tag">{tag}</span>
                ))}
              </div>
            )}
            <span className="digital__arrow">→</span>
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {activeService && (
        <div className="service__modal" onClick={() => setActiveService(null)}>
          <div className="service__modal-box" onClick={e => e.stopPropagation()}>
            <button className="service__modal-close" onClick={() => setActiveService(null)}>✕</button>
            <span className="service__modal-icon">{activeService.icon}</span>
            <h2 className="service__modal-title">{activeService.title}</h2>
            <p className="service__modal-body">{activeService.detail}</p>
            <a href="#contact" className="btn btn--primary" onClick={() => setActiveService(null)}>
              Teklif Al →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
