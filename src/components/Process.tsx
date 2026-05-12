import { HY_DATA } from "../data";

export function Process() {
  return (
    <section className="process" id="process" data-screen-label="06 Süreç">
      <div className="section__head" style={{ padding: 0, marginBottom: 0 }}>
        <div>
          <div className="section__num reveal">— 06 / Süreç</div>
          <h2 className="section__title reveal">
            Brief'ten teslime <em className="italiana">dört</em> adım.
          </h2>
        </div>
        <p className="section__sub reveal">
          Her proje aynı disiplinli süreçten geçer; konsept ne kadar cesur
          olursa olsun teslim her zaman tutarlıdır.
        </p>
      </div>
      <div className="process__grid">
        {HY_DATA.process.map((p, i) => (
          <div
            key={i}
            className="process__step reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="num">{p.num}</div>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
