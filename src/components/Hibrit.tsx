import { useEffect, useRef, useState } from "react";
import { HY_DATA } from "../data";

export function Hibrit() {
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = parseInt(
              (e.target as HTMLElement).dataset.idx ?? "0",
              10,
            );
            setActive(i);
          }
        });
      },
      { threshold: 0.55 },
    );
    stepsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const steps = HY_DATA.hibrit;

  return (
    <section className="hibrit" id="hibrit" data-screen-label="04 Hibrit Vizyon">
      <div className="section__head">
        <div>
          <div className="section__num reveal">— 04 / Hibrit Vizyon</div>
          <h2 className="section__title reveal">
            Sınırları aşan <em className="italiana">"hibrit"</em> fotoğrafçılık.
          </h2>
        </div>
        <p className="section__sub reveal">
          Klasik fotoğrafçılığın kısıtlamalarını arkanızda bırakın. İhtiyacınız
          olan kareyi yakalamakla kalmıyor, profesyonel çekimleri en ileri
          teknoloji yapay zeka araçlarıyla zenginleştiriyoruz.
        </p>
      </div>
      <div className="hibrit__stage">
        <div className="hibrit__sticky">
          <div className="hibrit__visual">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`layer ${i === active ? "is-active" : ""}`}
              >
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="label">{s.label}</span>
                {s.ai && <span className="badge-ai">AI</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="hibrit__steps">
          {steps.map((s, i) => (
            <div
              key={i}
              className="hibrit__step"
              data-idx={i}
              ref={(el) => {
                stepsRef.current[i] = el;
              }}
            >
              <div className="step-num reveal">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(steps.length).padStart(2, "0")}
              </div>
              <h3 className="reveal">{s.title}</h3>
              <p className="reveal">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
