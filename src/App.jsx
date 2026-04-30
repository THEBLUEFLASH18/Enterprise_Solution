import { useState, useEffect, useRef } from 'react';
import logoImg from '/New_logoV2.png';
import './App.css';

// ------- STRINGS (bilingual) -------
const COPY = {
  es: {
    nav: ["Inicio", "Nosotros", "Servicios", "Contacto"],
    cta: "Contáctanos",
    badge: "EST. 2024 · TAMPA, FL",
    heroKicker: "Contabilidad & Impuestos",
    heroTitle: ["Los números", "cuentan", "su historia."],
    heroSub:
      "C&G Enterprise Solution LLC prepara sus declaraciones individuales y de empresa con más de dos décadas de experiencia contable — atención personalizada, confiable, precisa.",
    heroCta1: "Agendar consulta",
    heroCta2: "Ver servicios",
    metric1: "Años de experiencia",
    metric2: "Declaraciones al año",
    metric3: "Idiomas de trabajo",
    metric3v: "ES / EN",
    aboutKicker: "Nosotros",
    aboutTitle: "Un equipo que trata cada libro como propio.",
    aboutBody:
      "Asociarse con C&G Enterprise Solution significa que su negocio está en las mejores manos. Con más de 20 años de experiencia en contabilidad y finanzas, ofrecemos atención personalizada, confiable y de calidad — desde la primera factura hasta la declaración final.",
    values: [
      ["01", "Personalizado", "Un contacto directo, sin pasar por un centro de llamadas."],
      ["02", "Bilingüe", "Atención completa en español e inglés — sin traductores de por medio."],
      ["03", "Preciso", "Software profesional y revisión humana en cada declaración y en cada reporte financiero."],
      ["04", "Puntual", "Fechas límite respetadas. Sin sorpresas en abril."],
    ],
    servicesKicker: "Servicios",
    servicesTitle: "Todo lo que su libro mayor necesita.",
    services: [
      {
        code: "01",
        title: "Declaraciones Individuales",
        en: "Individual tax returns",
        desc: "Form 1040 y anexos. Deducciones optimizadas para empleados, autónomos y familias.",
        price: "Desde $150",
        tags: ["1040", "Schedule A", "W-2", "1099"],
      },
      {
        code: "02",
        title: "Declaraciones de Empresa",
        en: "Corporate tax returns",
        desc: "LLC, S-Corp, C-Corp y Partnerships. Presentación estatal y federal.",
        price: "Desde $450",
        tags: ["1120", "1120-S", "1065", "Schedule K-1"],
      },
      {
        code: "03",
        title: "Contabilidad General",
        en: "Bookkeeping",
        desc: "Libros mensuales, conciliación bancaria y estados financieros para tomar decisiones internas, control y planificación, medir el desempeño, cumplimiento fiscal, atraer inversiones de nuevos socios, gestiones con proveedores y clientes, y detectar problemas a tiempo.",
        price: "Desde $200/mes",
        tags: ["QuickBooks", "Conciliación"],
        note: "El precio varía según el número de transacciones, bancos y requerimientos del cliente.",
      },
      {
        code: "04",
        title: "Nómina",
        en: "Payroll",
        desc: "Procesamiento quincenal, retenciones, W-2 y 1099 al cierre de año.",
        price: "Desde $75/mes",
        tags: ["W-2", "1099-NEC", "941", "940"],
      },
      {
        code: "05",
        title: "Consultoría Fiscal",
        en: "Tax planning",
        desc: "Planificación anticipada. Estructuras, retiros y deducciones legítimas antes del cierre.",
        price: "Cotización",
        tags: ["Estrategia", "IRS"],
        note: "El precio se determina según el número de transacciones, bancos y requerimientos del cliente.",
      },
      {
        code: "06",
        title: "Elaboración de Formularios",
        en: "Form preparation",
        desc: "Elaboración de facturas, formas 1099-MISC y 1099-NEC para sus clientes.",
        price: "Cotización",
        tags: ["1099-MISC", "1099-NEC", "Facturas"],
      },
    ],
    whyKicker: "¿Por qué C&G?",
    whyTitle: "Preciso · Puntual · Asequible",
    whyBody:
      "Software avanzado. Revisión humana. Garantía de satisfacción. Y un teléfono que alguien de verdad contesta.",
    whyCta: "Hablar con un contador",
    ticker: ["PRECISO", "PUNTUAL", "BILINGÜE", "20+ AÑOS", "GARANTIZADO", "PERSONALIZADO"],
    contactKicker: "Contacto",
    contactTitle: "Empiece por una conversación.",
    contactBody:
      "La primera consulta es sin costo. Cuéntenos de su situación y le responderemos en menos de 24 horas hábiles.",
    formLabels: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      service: "Servicio de interés",
      message: "Cuéntenos brevemente",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      sent: "¡Recibido! Le responderemos pronto.",
    },
    footNav: ["Inicio", "Nosotros", "Servicios", "Contacto"],
    rights: "Todos los derechos reservados.",
  },
  en: {
    nav: ["Home", "About", "Services", "Contact"],
    cta: "Contact us",
    badge: "EST. 2024 · TAMPA, FL",
    heroKicker: "Accounting & Tax",
    heroTitle: ["The numbers", "tell", "your story."],
    heroSub:
      "C&G Enterprise Solution LLC prepares individual and business tax returns with two decades of accounting experience — personalized, reliable, precise.",
    heroCta1: "Book a consultation",
    heroCta2: "See services",
    metric1: "Years of experience",
    metric2: "Returns filed yearly",
    metric3: "Languages served",
    metric3v: "ES / EN",
    aboutKicker: "About",
    aboutTitle: "A team that treats every book like its own.",
    aboutBody:
      "Partnering with C&G Enterprise Solution means your business is in the best hands. With over 20 years of experience in accounting and finance, we offer personalized, reliable, quality service — from the first invoice to the final return.",
    values: [
      ["01", "Personal", "A direct contact. No call-center queue."],
      ["02", "Bilingual", "Full service in Spanish and English — no translators in between."],
      ["03", "Precise", "Professional software and human review on every return and every financial report."],
      ["04", "On-time", "Deadlines honored. No April surprises."],
    ],
    servicesKicker: "Services",
    servicesTitle: "Everything your ledger needs.",
    services: [
      {
        code: "01",
        title: "Individual Returns",
        en: "Form 1040 & schedules",
        desc: "Deductions optimized for employees, self-employed, and families.",
        price: "From $150",
        tags: ["1040", "Schedule A", "W-2", "1099"],
      },
      {
        code: "02",
        title: "Business Returns",
        en: "LLC · S-Corp · C-Corp · Partnership",
        desc: "Federal and state filings for every entity structure.",
        price: "From $450",
        tags: ["1120", "1120-S", "1065", "Schedule K-1"],
      },
      {
        code: "03",
        title: "Bookkeeping",
        en: "Monthly close",
        desc: "Monthly books, bank reconciliation, and financial statements for internal decisions, planning, performance tracking, tax compliance, attracting investors, managing vendors and clients, and catching problems early.",
        price: "From $200/mo",
        tags: ["QuickBooks", "Reconciliation"],
        note: "Pricing varies based on number of transactions, banks, and client requirements.",
      },
      {
        code: "04",
        title: "Payroll",
        en: "Biweekly processing",
        desc: "Processing, withholdings, year-end W-2 and 1099 filings.",
        price: "From $75/mo",
        tags: ["W-2", "1099-NEC", "941", "940"],
      },
      {
        code: "05",
        title: "Tax Planning",
        en: "Year-round strategy",
        desc: "Planning ahead. Structures, distributions and legitimate deductions before close.",
        price: "Quote",
        tags: ["Strategy", "IRS"],
        note: "Pricing is determined based on number of transactions, banks, and client requirements.",
      },
      {
        code: "06",
        title: "Form Preparation",
        en: "1099-MISC · 1099-NEC",
        desc: "Invoice preparation and 1099-MISC and 1099-NEC form preparation for your clients.",
        price: "Quote",
        tags: ["1099-MISC", "1099-NEC", "Invoices"],
      },
    ],
    whyKicker: "Why C&G?",
    whyTitle: "Precise · On-time · Affordable",
    whyBody:
      "Advanced software. Human review. Satisfaction guarantee. And a phone that a real person answers.",
    whyCta: "Talk to an accountant",
    ticker: ["PRECISE", "ON-TIME", "BILINGUAL", "20+ YEARS", "GUARANTEED", "PERSONAL"],
    contactKicker: "Contact",
    contactTitle: "Start with a conversation.",
    contactBody:
      "First consultation is on us. Tell us about your situation and we'll reply within one business day.",
    formLabels: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      service: "Service of interest",
      message: "Tell us briefly",
      submit: "Send message",
      sending: "Sending…",
      sent: "Received! We'll get back to you soon.",
    },
    footNav: ["Home", "About", "Services", "Contact"],
    rights: "All rights reserved.",
  },
};

// ------- Hooks -------
function useCountUp(target, trigger, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);
  return val;
}

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ------- Logo mark -------
function Logo() {
  return (
    <span className="logo">
      <img src={logoImg} alt="C&G Enterprise Solutions LLC Logo" width="34" height="34" />
      <span className="logo__word">
        <span className="logo__cg">C<i>&amp;</i>G</span>
        <span className="logo__sub">Enterprise Solution</span>
      </span>
    </span>
  );
}

// ------- Header -------
function LangToggle({ lang, setLang }) {
  return (
    <div className="lang" role="tablist" aria-label="Language">
      <button role="tab" aria-selected={lang === "es"} className={lang === "es" ? "lang__btn lang__btn--active" : "lang__btn"} onClick={() => setLang("es")}>ES</button>
      <span className="lang__sep">/</span>
      <button role="tab" aria-selected={lang === "en"} className={lang === "en" ? "lang__btn lang__btn--active" : "lang__btn"} onClick={() => setLang("en")}>EN</button>
    </div>
  );
}

function Header({ lang, setLang, t, onNav }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"hdr" + (scrolled ? " hdr--scrolled" : "")}>
      <a href="#top" className="hdr__brand" onClick={(e) => { e.preventDefault(); onNav("top"); }}>
        <Logo />
      </a>
      <nav className="hdr__nav" aria-label="Primary">
        {t.nav.map((n, i) => {
          const target = ["top", "about", "services", "contact"][i];
          return (
            <a key={n} href={"#" + target} onClick={(e) => { e.preventDefault(); onNav(target); }}>
              <span className="hdr__num">0{i + 1}</span>
              <span>{n}</span>
            </a>
          );
        })}
      </nav>
      <div className="hdr__right">
        <LangToggle lang={lang} setLang={setLang} />
        <button className="btn btn--pill" onClick={() => onNav("contact")}>
          <span className="btn__dot" />
          {t.cta}
        </button>
        <button className="hdr__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="hdr__drawer" onClick={() => setOpen(false)}>
          {t.nav.map((n, i) => {
            const target = ["top", "about", "services", "contact"][i];
            return (
              <a key={n} href={"#" + target} onClick={(e) => { e.preventDefault(); onNav(target); setOpen(false); }}>
                {n}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

// ------- Hero -------
function LedgerCard({ years, returns }) {
  const rows = [
    { k: "Revenue · Ingresos", v: "$482,500.00", pos: true },
    { k: "Deductions · Deducciones", v: "-$118,320.40", pos: false },
    { k: "Taxable Income", v: "$364,179.60", pos: true },
    { k: "Est. Tax · Imp.", v: "-$76,477.72", pos: false },
    { k: "Refund · Reembolso", v: "$12,344.18", pos: true, bold: true },
  ];
  return (
    <div className="ledger" aria-hidden="true">
      <div className="ledger__tabs">
        <span className="ledger__tab ledger__tab--active">Form 1040</span>
        <span className="ledger__tab">Schedule C</span>
        <span className="ledger__tab">1120-S</span>
      </div>
      <div className="ledger__head">
        <div>
          <div className="ledger__client mono">CLIENT · 00241</div>
          <div className="ledger__name">Morales Consulting LLC</div>
        </div>
        <div className="ledger__stamp">
          <span>FILED</span>
          <span className="mono">FY · {new Date().getFullYear() - 1}</span>
        </div>
      </div>
      <div className="ledger__rows">
        {rows.map((r, i) => (
          <div key={r.k} className={"ledger__row" + (r.bold ? " ledger__row--bold" : "")} style={{ animationDelay: i * 120 + "ms" }}>
            <span>{r.k}</span>
            <span className={"mono " + (r.pos ? "pos" : "neg")}>{r.v}</span>
          </div>
        ))}
      </div>
      <div className="ledger__foot">
        <div>
          <div className="ledger__k mono">PREPARED BY</div>
          <div className="ledger__v">C&amp;G Enterprise Solution</div>
        </div>
        <svg viewBox="0 0 80 80" width="52" height="52" className="ledger__seal" aria-hidden="true">
          <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
          <text x="40" y="44" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="currentColor">C&amp;G</text>
        </svg>
      </div>
      <div className="ledger__pill ledger__pill--1">
        <span className="mono">{years}+ yrs</span>
      </div>
      <div className="ledger__pill ledger__pill--2">
        <span className="mono">{returns}+ filed</span>
      </div>
    </div>
  );
}

function Metric({ n, suffix, text, label }) {
  return (
    <div className="metric">
      <div className="metric__n">
        {text ?? (<>{n}<span className="metric__suf">{suffix}</span></>)}
      </div>
      <div className="metric__l">{label}</div>
    </div>
  );
}

function Hero({ t }) {
  const [ref, inView] = useInView();
  const years = useCountUp(22, inView);
  const returns = useCountUp(1240, inView);
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hhmm = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__rules" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (<span key={i} />))}
      </div>
      <div className="hero__meta">
        <div className="hero__tag">
          <span className="dot" /> {t.badge}
        </div>
        <div className="hero__clock">
          <span className="mono">EST · TAMPA</span>
          <span className="mono hero__time">{hhmm}</span>
        </div>
      </div>
      <h1 className="hero__h1">
        <span className="hero__kicker">— {t.heroKicker}</span>
        <span className="hero__line">{t.heroTitle[0]}</span>
        <span className="hero__line hero__line--italic">{t.heroTitle[1]}</span>
        <span className="hero__line">{t.heroTitle[2]}</span>
      </h1>
      <div className="hero__sub">
        <p>{t.heroSub}</p>
        <div className="hero__ctas">
          <a className="btn btn--solid" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t.heroCta1} <span className="btn__arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t.heroCta2}
          </a>
        </div>
      </div>
      <LedgerCard years={years} returns={returns} />
      <div className="hero__metrics">
        <Metric n={years} suffix="+" label={t.metric1} />
        <Metric n={returns} suffix="+" label={t.metric2} />
        <Metric text={t.metric3v} label={t.metric3} />
      </div>
    </section>
  );
}

// ------- Ticker -------
function Ticker({ t }) {
  const items = [...t.ticker, ...t.ticker];
  return (
    <section className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((w, i) => (
          <span key={i} className="ticker__item">
            {w}
            <svg viewBox="0 0 24 24" width="18" height="18" className="ticker__dot">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
}

// ------- About -------
function DeadlineCalendar() {
  const months = ["JAN", "FEB", "MAR", "APR"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % 8), 1400);
    return () => clearInterval(id);
  }, []);
  const m = months[Math.min(idx, 3)];
  const isApril = idx >= 3;
  return (
    <div className="cal" aria-hidden="true">
      <div className="cal__card">
        <div className="cal__bind"><span /><span /><span /><span /><span /></div>
        <div className={"cal__page " + (isApril ? "cal__page--april" : "")} key={m}>
          <div className="cal__m mono">{m} · {new Date().getFullYear()}</div>
          <div className="cal__big">{isApril ? "15" : (idx * 7 + 3)}</div>
          <div className="cal__lbl">{isApril ? "TAX DAY" : "Day"}</div>
          {isApril && <div className="cal__stamp">FILED ✓</div>}
        </div>
      </div>
      <div className="cal__caption mono">Deadlines honored · Fechas respetadas</div>
    </div>
  );
}

function About({ t }) {
  return (
    <section className="about" id="about">
      <div className="section__head">
        <div className="section__kicker">— {t.aboutKicker}</div>
        <h2 className="section__title">{t.aboutTitle}</h2>
      </div>
      <div className="about__grid">
        <div>
          <p className="about__body">{t.aboutBody}</p>
          <DeadlineCalendar />
        </div>
        <div className="about__values">
          {t.values.map(([n, title, body]) => (
            <div className="value" key={n}>
              <div className="value__n mono">{n}</div>
              <div className="value__title">{title}</div>
              <div className="value__body">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------- Services -------
function FormStack() {
  const folders = [
    { code: "Accrual", label: "Revenue recognition" },
    { code: "GAAP", label: "Generally Accepted" },
    { code: "FIFO", label: "First-In, First-Out" },
    { code: "Depreciation", label: "MACRS · Useful life" },
    { code: "Double-Entry", label: "Debit · Credit" },
    { code: "Materiality", label: "Relevance principle" },
  ];
  const [hover, setHover] = useState(false);
  return (
    <div
      className={"fstack" + (hover ? " fstack--hover" : "")}
      aria-hidden="true"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {folders.map((f, i) => {
        const mid = (folders.length - 1) / 2;
        const delta = i - mid;
        const restTx = delta * 8;
        const restTy = Math.abs(delta) * 2;
        const restRot = delta * 1.4;
        const hovTx = delta * 74;
        const hovTy = Math.abs(delta) * 8;
        const hovRot = delta * 7;
        return (
          <div
            key={f.code}
            className="folder"
            style={{
              transform: hover
                ? `translate(${hovTx}px, ${hovTy}px) rotate(${hovRot}deg)`
                : `translate(${restTx}px, ${restTy}px) rotate(${restRot}deg)`,
              zIndex: i + 1,
            }}
          >
            <img src="/folder-icon.svg" alt="" className="folder__img" />
            <div className="folder__sticker">
              <div className="folder__title">{f.code}</div>
              <div className="folder__lbl mono">{f.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Services({ t }) {
  const [active, setActive] = useState(0);
  return (
    <section className="svc" id="services">
      <div className="section__head">
        <div className="section__kicker">— {t.servicesKicker}</div>
        <h2 className="section__title">{t.servicesTitle}</h2>
        <FormStack />
      </div>
      <div className="svc__list">
        {t.services.map((s, i) => (
          <div
            key={s.code}
            className={"svc__row" + (active === i ? " svc__row--active" : "")}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabIndex={0}
          >
            <div className="svc__row-main">
              <div className="svc__code mono">{s.code}</div>
              <div className="svc__title">{s.title}</div>
              <div className="svc__en">{s.en}</div>
              <div className="svc__price mono">{s.price}</div>
              <div className="svc__arrow" aria-hidden="true">→</div>
            </div>
            <div className="svc__row-open">
              <div className="svc__row-open-inner">
                <p className="svc__desc">{s.desc}</p>
                {s.note && <p className="svc__note mono">{s.note}</p>}
                <div className="svc__tags">
                  {s.tags.map((tag) => (
                    <span key={tag} className="svc__tag mono">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------- Why us -------
function CoinStack() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= 8 ? 1 : v + 1)), 420);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="coins" aria-hidden="true">
      <div className="coins__scene">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={"coin " + (i < n ? "coin--on" : "")}
            style={{ transform: `translate(-50%, ${-i * 12}px) rotateX(62deg)`, transitionDelay: i * 30 + "ms" }}
          >
            <span className="coin__face mono">$</span>
          </div>
        ))}
        <div className="coins__shadow" />
      </div>
      <div className="coins__caption mono">Refunds · Savings · Every quarter</div>
    </div>
  );
}

function ProcessStrip() {
  const steps = [
    ["01", "Intake", "15-min call"],
    ["02", "Review", "Docs & prior year"],
    ["03", "Prepare", "Draft + review"],
    ["04", "File", "E-file & confirm"],
  ];
  return (
    <div className="proc">
      {steps.map(([n, title, sub], i) => (
        <div className="proc__step" key={n}>
          <div className="proc__n mono">{n}</div>
          <div className="proc__t">{title}</div>
          <div className="proc__s mono">{sub}</div>
          {i < steps.length - 1 && <div className="proc__line" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function Why({ t, onNav }) {
  return (
    <section className="why">
      <div className="why__inner">
        <div className="section__kicker section__kicker--light">— {t.whyKicker}</div>
        <h2 className="why__title">{t.whyTitle}</h2>
        <p className="why__body">{t.whyBody}</p>
        <button className="btn btn--cream" onClick={() => onNav("contact")}>
          {t.whyCta} <span className="btn__arrow">→</span>
        </button>
        <CoinStack />
        <ProcessStrip />
      </div>
    </section>
  );
}

// ------- Contact -------
function Field({ label, v, on, type = "text", as = "input" }) {
  return (
    <div className="form__field">
      <label className="form__label mono">{label}</label>
      {as === "textarea" ? (
        <textarea className="form__input" rows="4" value={v} onChange={(e) => on(e.target.value)} />
      ) : (
        <input className="form__input" type={type} value={v} onChange={(e) => on(e.target.value)} />
      )}
    </div>
  );
}

function RRow({ k, v }) {
  return (
    <div className="rrow">
      <span className="mono rrow__k">{k}</span>
      <span className="rrow__dots" aria-hidden="true" />
      <span className="rrow__v">{v}</span>
    </div>
  );
}

function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [state, setState] = useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }).toString(),
      });
      setState("sent");
    } catch {
      setState("idle");
    }
  };
  const services = t.services.map((s) => s.title);

  return (
    <section className="contact" id="contact">
      <div className="section__head">
        <div className="section__kicker">— {t.contactKicker}</div>
        <h2 className="section__title">{t.contactTitle}</h2>
        <p className="contact__intro">{t.contactBody}</p>
      </div>
      <div className="contact__grid">
        <form className="form" name="contact" data-netlify="true" onSubmit={submit}>
          <input type="hidden" name="form-name" value="contact" />
          <Field label={t.formLabels.name} v={form.name} on={(v) => setForm({ ...form, name: v })} />
          <div className="form__row2">
            <Field label={t.formLabels.email} type="email" v={form.email} on={(v) => setForm({ ...form, email: v })} />
            <Field label={t.formLabels.phone} type="tel" v={form.phone} on={(v) => setForm({ ...form, phone: v })} />
          </div>
          <div className="form__field">
            <label className="form__label mono">{t.formLabels.service}</label>
            <div className="form__chips">
              {services.map((s) => (
                <button key={s} type="button" className={"chip" + (form.service === s ? " chip--active" : "")} onClick={() => setForm({ ...form, service: s })}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <Field label={t.formLabels.message} as="textarea" v={form.message} on={(v) => setForm({ ...form, message: v })} />
          <button className="btn btn--solid btn--block" type="submit" disabled={state !== "idle"}>
            {state === "idle" && <>{t.formLabels.submit} <span className="btn__arrow">→</span></>}
            {state === "sending" && t.formLabels.sending}
            {state === "sent" && <>✓ {t.formLabels.sent}</>}
          </button>
        </form>

        <aside className="receipt">
          <div className="receipt__head">
            <div className="mono">C&amp;G · CONSULT INTAKE</div>
            <div className="mono receipt__no">NO. {String(Math.floor(Math.random() * 9000) + 1000)}</div>
          </div>
          <div className="receipt__rows">
            <RRow k={t.formLabels.name} v={form.name || "—"} />
            <RRow k={t.formLabels.email} v={form.email || "—"} />
            <RRow k={t.formLabels.phone} v={form.phone || "—"} />
            <RRow k={t.formLabels.service} v={form.service || "—"} />
          </div>
          <div className="receipt__msg">
            <div className="mono receipt__k">{t.formLabels.message}</div>
            <div className="receipt__v">{form.message || "—"}</div>
          </div>
          <div className="receipt__bar" aria-hidden="true">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} style={{ width: (1 + Math.random() * 3) + "px" }} />
            ))}
          </div>
          <div className="receipt__foot mono">
            <span>THANK YOU · GRACIAS</span>
            <span>RETAIN FOR RECORDS</span>
          </div>
        </aside>
      </div>

      <div className="contact__cards">
        <div className="ccard">
          <div className="ccard__k mono">EMAIL</div>
          <div className="ccard__v">
            <a href="mailto:ventas@cygsolution.com">ventas@cygsolution.com</a>
          </div>
        </div>
        <div className="ccard">
          <div className="ccard__k mono">WHATSAPP</div>
          <div className="ccard__v">
            <a href="https://wa.me/18134760188" target="_blank" rel="noopener noreferrer">+1 (813) 476-0188</a>
          </div>
        </div>
        <div className="ccard">
          <div className="ccard__k mono">FACEBOOK</div>
          <div className="ccard__v">
            <a href="https://www.facebook.com/share/HcJLSEEMffhgtDVW/" target="_blank" rel="noopener noreferrer">CYG Enterprise Solution ↗</a>
          </div>
        </div>
        <div className="ccard">
          <div className="ccard__k mono">INSTAGRAM</div>
          <div className="ccard__v">
            <a href="https://www.instagram.com/cygenterprisesolution" target="_blank" rel="noopener noreferrer">@cygenterprisesolution ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------- Footer -------
function Footer({ t, onNav }) {
  return (
    <footer className="ftr" id="footer">
      <div className="ftr__top">
        <Logo />
        <div className="ftr__cols">
          <div>
            <div className="ftr__k mono">NAVIGATION</div>
            <ul>
              {t.footNav.map((n, i) => {
                const target = ["top", "about", "services", "contact"][i];
                return (
                  <li key={n}>
                    <a href={"#" + target} onClick={(e) => { e.preventDefault(); onNav(target); }}>{n}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="ftr__k mono">CONTACT</div>
            <ul>
              <li><a href="mailto:ventas@cygsolution.com">ventas@cygsolution.com</a></li>
              <li><a href="https://wa.me/18134760188" target="_blank" rel="noopener noreferrer">+1 (813) 476-0188</a></li>
              <li>Miami, FL</li>
            </ul>
          </div>
          <div>
            <div className="ftr__k mono">SOCIAL</div>
            <ul>
              <li><a href="https://www.facebook.com/share/HcJLSEEMffhgtDVW/" target="_blank" rel="noopener noreferrer">Facebook ↗</a></li>
              <li><a href="https://www.instagram.com/cygenterprisesolution" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
              <li><a href="https://wa.me/18134760188" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ftr__bot">
        <span className="mono">© {new Date().getFullYear()} C&amp;G Enterprise Solution LLC · {t.rights}</span>
        <span className="mono">IRS AFSP · 20+ Years</span>
      </div>
    </footer>
  );
}

// ------- App -------
function App() {
  const [lang, setLang] = useState("es");
  const t = COPY[lang];

  const onNav = (id) => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} onNav={onNav} />
      <main>
        <Hero t={t} />
        <Ticker t={t} />
        <About t={t} />
        <Services t={t} />
        <Why t={t} onNav={onNav} />
        <Contact t={t} />
      </main>
      <Footer t={t} onNav={onNav} />
    </>
  );
}

export default App;
