export default function Home() {
  return (
    <main>
      <div className="wrap" style={{ paddingTop: 14 }}>
        <header className="card-soft" style={{ padding: 10, borderRadius: 999, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <span className="pill">Sakib Ahmed</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[["About", "#about"], ["Work", "#work"], ["Reviews", "#reviews"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={String(l)} href={String(h)} className="pill" style={{ letterSpacing: 0, textTransform: "none" }}>{l}</a>
            ))}
          </div>
        </header>
      </div>

      <section className="section" style={{ paddingBottom: 28 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="pill">SEO Expert • WordPress Developer</span>
          <h1 className="h1" style={{ margin: "14px 0 10px" }}>Websites and SEO systems<br />for real business growth.</h1>
          <p className="muted" style={{ maxWidth: 620, margin: "0 auto", fontSize: 16 }}>
            Premium design, technical performance, and conversion-focused SEO—built into one execution workflow.
          </p>
          <div style={{ marginTop: 18, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-dark" href="mailto:hello@sakibahmed.com">Book a call</a>
            <a className="btn btn-light" href="#work">View portfolio</a>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 52 }}>
        <article className="card-white" style={{ padding: 10 }}>
          <img className="img" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80" alt="hero visual" />
        </article>
      </section>

      <section className="wrap" style={{ paddingBottom: 56 }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
          {[["120+", "Projects done"], ["8+", "Years experience"], ["95%", "Client retention"], ["3x", "Avg lead growth"]].map(([n, t]) => (
            <div key={String(n)} className="card-soft" style={{ padding: 14, borderRadius: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 24 }}>{n}</div>
              <div className="muted" style={{ fontSize: 13 }}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <article>
            <h2 className="h2" style={{ marginTop: 0 }}>Who am I?</h2>
            <p className="muted">I help brands scale with high-performance WordPress development and practical SEO systems.</p>
            <div style={{ marginTop: 16 }}>
              {["Technical SEO and index health", "Conversion-led page architecture", "Fast build and transparent reporting"].map((x) => (
                <div key={x} className="card-soft" style={{ padding: "10px 12px", marginBottom: 8 }}>{x}</div>
              ))}
            </div>
          </article>
          <article className="card-white" style={{ padding: 8 }}>
            <img className="img" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80" alt="about visual" />
          </article>
        </div>
      </section>

      <section id="work" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h2" style={{ marginTop: 0 }}>Selected Work</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {[
              ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", "SEO strategy & execution"],
              ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80", "WordPress redesign"],
              ["https://images.unsplash.com/photo-1551281044-8b1f1f5f2f7e?auto=format&fit=crop&w=900&q=80", "Analytics and growth ops"],
              ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", "Local SEO scale-up"],
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
          <article>
            <h2 className="h2" style={{ marginTop: 0 }}>How I work</h2>
            {["Discovery", "Audit", "Roadmap", "Execution", "Reporting"].map((s, i) => (
              <div key={s} className="card-soft" style={{ padding: "12px 14px", marginBottom: 8, display: "flex", gap: 10 }}>
                <span className="muted" style={{ width: 24 }}>0{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </article>
          <article className="card-soft" style={{ padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Quick contact</h3>
            <div className="muted" style={{ fontSize: 14, marginBottom: 10 }}>Share your website and target market.</div>
            <input placeholder="Your name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Project details" style={{ ...inputStyle, minHeight: 120 }} />
            <button className="btn btn-dark" style={{ width: "100%", marginTop: 4 }}>Send Inquiry</button>
          </article>
        </div>
      </section>

      <section id="reviews" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h2" style={{ marginTop: 0 }}>Client Reviews</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {["Sakib transformed our SEO and lead quality.", "Great execution speed and communication.", "The site now performs and converts much better."].map((q) => (
              <blockquote key={q} className="card-soft" style={{ margin: 0, padding: 16 }}>
                <p style={{ margin: 0 }}>&ldquo;{q}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-dark" style={{ padding: 30, textAlign: "center" }}>
            <p style={{ opacity: .75, letterSpacing: ".15em", textTransform: "uppercase", fontSize: 12 }}>Call to Action</p>
            <h2 className="h2" style={{ color: "#fff", margin: "8px 0" }}>Ready to scale your search growth?</h2>
            <p style={{ opacity: .85, maxWidth: 640, margin: "0 auto" }}>Let’s build a clear roadmap and execute fast.</p>
            <div style={{ marginTop: 18 }}><a className="btn" style={{ background: "#fff", color: "#111827" }} href="mailto:hello@sakibahmed.com">Start Project</a></div>
          </div>
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
