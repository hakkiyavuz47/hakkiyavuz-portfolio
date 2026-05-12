import { HY_DATA } from "../data";

export function Bento() {
  return (
    <section className="bento" id="services" data-screen-label="03 Services">
      <div className="section__head">
        <div>
          <div className="section__num reveal">— 03 / Hizmetler</div>
          <h2 className="section__title reveal">
            Dört alan, <em className="italiana">tek</em> imza.
          </h2>
        </div>
        <p className="section__sub reveal">
          Her proje farklı bir konseptle başlar. Çekim sonrası AI destekli
          post-prodüksiyon süreciyle, kareyi hayal ettiğiniz dünyaya taşıyoruz.
        </p>
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
            {s.concept && (
              <span className="badge" style={{ color: "rgb(255, 255, 255)" }}>
                Konsept
              </span>
            )}
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
    </section>
  );
}
