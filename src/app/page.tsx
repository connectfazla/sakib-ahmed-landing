const services = [
  ["Technical SEO", "Crawl/index architecture, schema, speed, and ranking foundations."],
  ["WordPress Development", "Custom high-performance websites built for conversions."],
  ["Local SEO", "UAE-focused local visibility, map signals, and lead optimization."],
  ["Content Growth", "Topic clusters and landing pages aligned with user intent."],
  ["Analytics Setup", "GA4, Search Console, funnels, event tracking, and reporting."],
  ["Maintenance", "Ongoing optimization, A/B iteration, and technical upkeep."],
];

const process = [
  "Discovery and business goals",
  "Audit and opportunity map",
  "Roadmap with timeline",
  "Execution sprint",
  "Reporting and refinement",
];

const faqs = [
  ["Do you handle both SEO and development?", "Yes. Strategy and implementation are handled together so execution is faster and cleaner."],
  ["How quickly can I see results?", "Technical improvements can show impact in weeks. Ranking and lead growth usually compound over 2-4 months."],
  ["Do you work with UAE businesses?", "Yes, with a strong focus on UAE local SEO and service-industry positioning."],
  ["Can you redesign an existing WordPress site?", "Absolutely. I can migrate and redesign while protecting SEO performance."],
];

export default function Home() {
  return (
    <main>
      <div className="wrap" style={{ paddingTop: 14 }}>
        <header className="card-soft" style={{ padding: 10, borderRadius: 999, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <span className="pill">Sakib Ahmed</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={String(l)} href={String(h)} className="pill" style={{ letterSpacing: 0, textTransform: "none" }}>{l}</a>
            ))}
          </div>
        </header>
      </div>

      <section className="section" style={{ paddingBottom: 28 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="pill">SEO Expert • WordPress Developer</span>
          <h1 className="h1" style={{ margin: "14px 0 10px" }}>Premium websites and SEO systems<br />for scalable growth.</h1>
          <p className="muted" style={{ maxWidth: 720, margin: "0 auto", fontSize: 16 }}>
            I help businesses increase visibility, improve user experience, and convert more qualified leads through integrated SEO + WordPress execution.
          </p>
          <div style={{ marginTop: 18, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-dark" href="mailto:hello@sakibahmed.com">Book a call</a>
            <a className="btn btn-light" href="#work">View portfolio</a>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 48 }}>
        <article className="card-white" style={{ padding: 10 }}>
          <img className="img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80" alt="hero visual" />
        </article>
      </section>

      <section className="wrap" style={{ paddingBottom: 56 }}>
        <div className="card-white" style={{ borderRadius: 56, padding: 20 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
            {[["120+", "Projects delivered"], ["8+", "Years experience"], ["95%", "Client retention"], ["3x", "Avg lead growth"], ["24/7", "Support readiness"], ["UAE", "Local market focus"]].map(([n, t]) => (
              <div key={String(n)} className="card-soft" style={{ padding: 14, borderRadius: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 24 }}>{n}</div>
                <div className="muted" style={{ fontSize: 13 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <article className="card-white" style={{ padding: 10 }}>
            <img className="img" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80" alt="about visual" />
          </article>
          <article className="card-white" style={{ padding: 28 }}>
            <span className="pill">About</span>
            <h2 className="h2" style={{ margin: "14px 0" }}>Strategy + implementation in one workflow.</h2>
            <p className="muted">I combine technical SEO, brand-aware page structure, and robust WordPress development so your growth system is built end-to-end—not fragmented across teams.</p>
            <div style={{ marginTop: 14 }}>
              {["Technical SEO that supports scale", "Conversion-focused page architecture", "Transparent sprint-based delivery"].map((x) => (
                <div key={x} className="card-soft" style={{ padding: "10px 12px", marginBottom: 8 }}>{x}</div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 56, padding: 22 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Services</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 12 }}>
            {services.map(([t, d]) => (
              <article key={t} className="card-soft" style={{ padding: 16 }}>
                <h3 style={{ margin: "0 0 8px" }}>{t}</h3>
                <p className="muted" style={{ margin: 0 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 56, padding: 22 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Featured Work</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
            {[
              ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", "SEO strategy + execution"],
              ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80", "WordPress redesign"],
              ["https://images.unsplash.com/photo-1551281044-8b1f1f5f2f7e?auto=format&fit=crop&w=900&q=80", "Analytics + growth ops"],
              ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", "Local SEO scale-up"],
              ["https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80", "Landing page system"],
              ["https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=900&q=80", "Content architecture"],
            ].map(([src, title]) => (
              <article key={String(src)} className="card-soft" style={{ padding: 8 }}>
                <img className="img" src={String(src)} alt={String(title)} />
                <div style={{ padding: "10px 6px 4px" }}>
                  <strong style={{ fontSize: 14 }}>{title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <article className="card-white" style={{ padding: 22 }}>
            <h2 className="h2" style={{ marginTop: 0 }}>Process</h2>
            {process.map((s, i) => (
              <div key={s} className="card-soft" style={{ padding: "12px 14px", marginBottom: 8, display: "flex", gap: 10 }}>
                <span className="muted" style={{ width: 24 }}>0{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </article>
          <article className="card-dark" style={{ padding: 22 }}>
            <h3 style={{ marginTop: 0 }}>What you get</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: "#d1d5db" }}>
              <li>Roadmap with clear priorities</li>
              <li>Weekly implementation updates</li>
              <li>SEO + dev alignment</li>
              <li>KPI-based reporting</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="reviews" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 56, padding: 22 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Customer Reviews</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
            {["Sakib transformed our search visibility and lead quality.", "Strong technical execution and clean communication.", "The site performance and conversions improved significantly."].map((q) => (
              <blockquote key={q} className="card-soft" style={{ margin: 0, padding: 16 }}>
                <p style={{ margin: 0 }}>&ldquo;{q}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 56, padding: 22 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>FAQ</h2>
          <div className="grid" style={{ gap: 10 }}>
            {faqs.map(([q, a]) => (
              <article key={q} className="card-soft" style={{ padding: 16 }}>
                <strong>{q}</strong>
                <p className="muted" style={{ margin: "8px 0 0" }}>{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <article className="card-white" style={{ padding: 22 }}>
            <h2 className="h2" style={{ marginTop: 0 }}>Contact</h2>
            <p className="muted" style={{ marginTop: 0 }}>Tell me about your website and growth goals.</p>
            <input placeholder="Your name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Project details" style={{ ...inputStyle, minHeight: 120 }} />
            <button className="btn btn-dark" style={{ width: "100%", marginTop: 4 }}>Send inquiry</button>
          </article>
          <article className="card-dark" style={{ padding: 30, textAlign: "center" }}>
            <p style={{ opacity: .75, letterSpacing: ".15em", textTransform: "uppercase", fontSize: 12 }}>Call to Action</p>
            <h2 className="h2" style={{ color: "#fff", margin: "8px 0" }}>Ready to scale your search growth?</h2>
            <p style={{ opacity: .85, maxWidth: 640, margin: "0 auto" }}>Let’s build a practical roadmap and execute quickly.</p>
            <div style={{ marginTop: 18 }}><a className="btn" style={{ background: "#fff", color: "#111827" }} href="mailto:hello@sakibahmed.com">Start project</a></div>
          </article>
        </div>
      </section>

      <footer className="footer"><div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}><span>© {new Date().getFullYear()} Sakib Ahmed</span><span>SEO Expert • WordPress Developer</span></div></footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid #d4d8dd",
  background: "#fff",
  marginBottom: 8,
  font: "inherit",
};
