import { useEffect } from "react";
import { Cursor } from "./components/Cursor";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Bento } from "./components/Bento";
import { Marquee } from "./components/Marquee";
import { Hibrit } from "./components/Hibrit";
import { Gallery } from "./components/Gallery";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useReveal } from "./lib/useReveal";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "ember");
  }, []);
  useReveal();

  return (
    <>
      <Cursor />
      <nav className="nav">
        <a className="nav__logo" href="#" aria-label="Ana sayfaya dön">
          <span className="mark">Hakkı Yavuz</span>
          <span className="sub">/ director & producer</span>
        </a>
        <div className="nav__links">
          <a href="#about">Hakkımda</a>
          <a href="#services">Hizmetler</a>
          <a href="#portfolio">Portföy</a>
          <a href="#hibrit">Hibrit</a>
          <a href="#process">Süreç</a>
        </div>
        <div className="nav__cta">
          <a href="#contact">Teklif Al →</a>
        </div>
      </nav>
      <Hero variant="fullbleed" heroIndex={0} />
      <About />
      <Bento />
      <Marquee />
      <Hibrit />
      <Gallery />
      <Process />
      <Contact />
      <Footer />

    </>
  );
}
