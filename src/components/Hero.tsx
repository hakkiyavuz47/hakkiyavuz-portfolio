import { useEffect, useRef } from "react";
import { HY_DATA } from "../data";
import { splitChars } from "../lib/splitChars";

type HeroProps = {
  variant?: "fullbleed" | "collage";
  heroIndex?: number;
};

export function Hero({ variant = "fullbleed", heroIndex = 0 }: HeroProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add("is-loaded"), 120);
    return () => clearTimeout(t);
  }, [variant, heroIndex]);

  const heroImgs = HY_DATA.heroImages;
  const bgImg = heroImgs[heroIndex % heroImgs.length];

  return (
    <section
      className="hero"
      data-variant={variant}
      ref={ref}
      data-screen-label="01 Hero"
    >
      {variant === "collage" ? (
        <div className="hero__bg-collage">
          {heroImgs.slice(0, 4).map((src, i) => (
            <div className="tile" key={i}>
              <img src={src} alt="" />
            </div>
          ))}
          <div className="tile">
            <img src={HY_DATA.portfolio[0].image} alt="" />
          </div>
        </div>
      ) : (
        <div className="hero__bg">
          <img src={bgImg} alt="Hakkı Yavuz portfolyo" />
        </div>
      )}
      <div className="hero__inner">
        <div className="hero__eyebrow">İstanbul · Hibrit Fotoğrafçılık · 2026</div>
        <h1 className="hero__h1">
          {splitChars("Gözünüzün")}{" "}
          {splitChars("Gördüğünden")}{" "}
          <em className="italiana">{splitChars("Çok Daha")}</em>{" "}
          {splitChars("Fazlası.")}
        </h1>
        <div className="hero__bottom">
          <p className="hero__alt">
            Geleneksel fotoğrafçılığın gerçekliğini, yapay zekanın sınırsız
            vizyonuyla birleştiriyoruz. İster en özel gününüz, ister markanızın
            yeni vizyonu olsun; estetik sınırları ortadan kaldıran kusursuz
            kareler üretiyoruz.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary btn--lg">
              🚀 Projeyi Konuşalım <span className="arrow">→</span>
            </a>
            <a href="#portfolio" className="btn btn--ghost btn--lg">
              Portföyü İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
