import { useState } from "react";
import { HY_DATA } from "../data";

type View = "categories" | "detail";

export function Gallery() {
  const [view, setView] = useState<View>("categories");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const items = HY_DATA.portfolio;
  const categories = HY_DATA.filters.filter((f) => f.key !== "all");

  const activeLabel = categories.find((c) => c.key === activeKey)?.label ?? "";
  const detailItems = activeKey ? items.filter((i) => i.cat === activeKey) : [];

  function openCategory(key: string) {
    setActiveKey(key);
    setView("detail");
    window.scrollTo({ top: document.getElementById("portfolio")!.offsetTop - 80, behavior: "smooth" });
  }

  function goBack() {
    setView("categories");
    setActiveKey(null);
  }

  return (
    <section className="gallery" id="portfolio" data-screen-label="05 Portfolyo">
      <div className="section__head">
        <div className="gallery__head-inner">
          <div className="section__num reveal">— 05 / Portfolyo</div>
          {view === "categories" ? (
            <h2 className="section__title reveal">
              Son <em className="italiana">kareler.</em>
            </h2>
          ) : (
            <div className="gallery__back-row">
              <button className="gallery__back" onClick={goBack}>
                ← Geri
              </button>
              <h2 className="section__title reveal">{activeLabel}</h2>
            </div>
          )}
        </div>
      </div>

      {view === "categories" ? (
        <div className="gallery__cats reveal">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="gallery__cat-card"
              onClick={() => openCategory(cat.key)}
            >
              <div className="gallery__cat-img">
                {cat.cover && (
                  <img src={cat.cover} alt={cat.label} loading="lazy" />
                )}
                <div className="gallery__cat-overlay" />
              </div>
              <div className="gallery__cat-info">
                <span className="gallery__cat-name">{cat.label.toUpperCase()}</span>
                <span className="gallery__cat-type">{cat.type}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery__detail">
          {detailItems.map((it, i) => (
            <div
              key={i}
              className={`gallery__detail-item ${it.size}`}
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <img src={it.image} alt={activeLabel} loading="lazy" />
              {it.concept && <span className="badge">Konsept</span>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
