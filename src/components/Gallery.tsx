import { useState } from "react";
import { HY_DATA } from "../data";

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const items = HY_DATA.portfolio;
  const filters = HY_DATA.filters.map((f) => ({
    ...f,
    count:
      f.key === "all"
        ? items.length
        : items.filter((i) => i.cat === f.key).length,
  }));

  return (
    <section className="gallery" id="portfolio" data-screen-label="05 Portfolyo">
      <div className="section__head">
        <div>
          <div className="section__num reveal">— 05 / Portfolyo</div>
          <h2 className="section__title reveal">
            Son <em className="italiana">kareler.</em>
          </h2>
        </div>
        <p className="section__sub reveal">
          Düğün ve mezuniyet kategorisindeki çalışmalar henüz konsept
          aşamasındadır; "Konsept" rozetiyle işaretlidir. Diğer kategoriler
          tamamlanmış projelerdir.
        </p>
      </div>
      <div className="gallery__filters reveal" role="tablist">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`gallery__filter ${filter === f.key ? "is-active" : ""}`}
            onClick={() => setFilter(f.key)}
            role="tab"
          >
            {f.label}
            <span className="count">{String(f.count).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
      <div className="gallery__grid">
        {items.map((it, i) => {
          const hidden = filter !== "all" && filter !== it.cat;
          return (
            <a
              href="#"
              key={i}
              className={`gallery__item ${it.size} ${hidden ? "is-hidden" : ""}`}
              style={{ transitionDelay: `${(i % 8) * 40}ms` }}
            >
              <img src={it.image} alt={it.cat} loading="lazy" />
              {it.concept && <span className="badge">Konsept</span>}
              <span className="meta">
                {HY_DATA.filters.find((f) => f.key === it.cat)?.label}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
