export function Marquee() {
  const tokens = [
    "Düğün",
    "Mezuniyet",
    "Moda & Portre",
    "Yemek & Restoran",
    "Konsept Render",
    "AI Post-Prod",
    "Drone",
    "Editorial",
  ];
  const item = tokens.map((t, i) => (
    <span key={i}>
      {t}
      <span className="dot"></span>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__inner">
        <span style={{ display: "inline-flex", gap: 40, alignItems: "center" }}>
          {item}
        </span>
        <span style={{ display: "inline-flex", gap: 40, alignItems: "center" }}>
          {item}
        </span>
      </div>
    </div>
  );
}
