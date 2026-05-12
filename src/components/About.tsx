import { HY_DATA } from "../data";

export function About() {
  const a = HY_DATA.about;
  return (
    <section className="about" id="about" data-screen-label="02 Hakkımda">
      <div className="about__inner">
        <div className="about__portrait reveal">
          <div className="about__portrait-frame mask-reveal">
            <img src={a.portrait} alt={a.name} loading="lazy" />
          </div>
          <div className="about__sig italiana">— Hakkı Yavuz</div>
        </div>
        <div className="about__content">
          <div className="section__num reveal">— 02 / Hakkımda</div>
          <h2 className="about__title reveal">
            Kareleri kuran, <em className="italiana">vizyonu</em> kuran adam.
          </h2>
          <p className="about__intro reveal">{a.intro}</p>
          <p className="about__body reveal">{a.body}</p>
          <div className="about__stats">
            {a.stats.map((s, i) => (
              <div
                key={i}
                className="about__stat reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="v">{s.v}</div>
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
          <div className="about__meta reveal">
            <span>{a.role}</span>
            <span className="dot"></span>
            <span>{a.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
