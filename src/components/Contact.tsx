const WHATSAPP_URL = "https://wa.me/905434370495";
const WHATSAPP_TEXT = "+90 543 437 04 95";

export function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="07 İletişim">
      <div className="contact__inner">
        <div className="contact__lead">
          <h2 className="reveal">
            Bir <em className="italiana">proje</em>
            <br />
            konuşalım.
          </h2>
          <p className="reveal">
            Çekim, konsept ya da kampanya — hangi aşamada olursanız olun, en
            hızlı yol WhatsApp. Birkaç cümleyle vizyonunuzu yazın, 48 saat
            içinde dönüş yapıyorum.
          </p>
          <div className="contact__meta reveal">
            <div className="row">
              <span className="k">WhatsApp</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {WHATSAPP_TEXT}
              </a>
            </div>
            <div className="row">
              <span className="k">E-posta</span>
              <a href="mailto:hakkiyavuz47@gmail.com">hakkiyavuz47@gmail.com</a>
            </div>
            <div className="row">
              <span className="k">Konum</span>
              <span>İstanbul</span>
            </div>
            <div className="row">
              <span className="k">Sosyal</span>
              <a
                href="https://instagram.com/hakkiyvuz"
                target="_blank"
                rel="noreferrer"
              >
                @hakkiyvuz
              </a>
            </div>
          </div>
        </div>

        <a
          className="contact__cta reveal"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact__cta-icon" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
            </svg>
          </div>
          <div className="contact__cta-body">
            <span className="contact__cta-eyebrow">Hızlı yol</span>
            <h3 className="contact__cta-title">
              WhatsApp'tan <em className="italiana">yazın.</em>
            </h3>
            <p className="contact__cta-sub">
              Brief'inizi birkaç cümlede paylaşın; tarih, lokasyon, çekim türü.
              Aynı gün dönüş.
            </p>
            <span className="contact__cta-action">
              {WHATSAPP_TEXT} <span className="arrow">→</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
