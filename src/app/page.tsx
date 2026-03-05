export default function Home() {
  return (
    <main>
      <div className="wrap" style={{ paddingTop: 14 }}>
        <header className="card-soft" style={{ padding: 12, borderRadius: 64, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <span className="pill">Sakib Ahmed</span>
          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["Reviews", "#reviews"]].map(([l, h]) => (
              <a key={String(l)} href={String(h)} className="pill" style={{ letterSpacing: 0, textTransform: "none" }}>{l}</a>
            ))}
          </nav>
        </header>
      </div>

      <section className="section">
        <div className="wrap hero" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 24 }}>
          <article className="card-white" style={{ padding: 34 }}>
            <span className="pill">SEO Expert & WordPress Developer</span>
            <h1 className="h1" style={{ margin: "16px 0 12px" }}>Premium growth systems<br />for modern brands.</h1>
            <p className="muted" style={{ fontSize: 18, maxWidth: 620 }}>
              I build conversion-ready WordPress websites and SEO frameworks that increase qualified traffic and real revenue.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-dark" href="mailto:hello@sakibahmed.com">Book Discovery Call</a>
              <a className="btn btn-light" target="_blank" href="https://www.linkedin.com/in/ahmed-sakib-upp/">LinkedIn</a>
            </div>
          </article>
          <article className="card-white" style={{ padding: 10 }}>
            <img className="img" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="hero" />
          </article>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 70 }}>
        <div className="card-white" style={{ borderRadius: 64, padding: 24 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {[["120+","projects delivered"],["8+","years experience"],["95%","client retention"],["3x","avg lead growth"]].map(([n,t])=>(
              <div key={String(n)} className="card-soft" style={{ padding: 16, borderRadius: 16 }}>
                <div style={{ fontSize: 30, fontWeight: 700 }}>{n}</div><div className="muted" style={{ fontSize: 14 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <article className="card-white" style={{ padding: 10 }}>
            <img className="img" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80" alt="about" />
          </article>
          <article className="card-white" style={{ padding: 30 }}>
            <span className="pill">About</span>
            <h2 className="h2" style={{ margin: "14px 0" }}>Strategy and execution under one roof.</h2>
            <p className="muted">I combine technical SEO, content architecture, and custom WordPress development into one integrated workflow, so growth is faster and cleaner.</p>
          </article>
        </div>
      </section>

      <section id="services" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 64, padding: 24 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>My Services</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            {[
              ["SEO Strategy", "Keyword architecture, intent mapping, and growth plans."],
              ["WordPress Development", "Fast, scalable, conversion-optimized builds."],
              ["Technical SEO", "Crawl, index, schema, and performance fixes."],
              ["Local SEO", "UAE-focused visibility and lead capture systems."],
            ].map(([t,d]) => (
              <article key={String(t)} className="card-soft" style={{ padding: 18 }}><h3 style={{ margin: "0 0 8px" }}>{t}</h3><p className="muted" style={{ margin: 0 }}>{d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 64, padding: 24 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Featured Work</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
            {[
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1551281044-8b1f1f5f2f7e?auto=format&fit=crop&w=1000&q=80"
            ].map((src, i) => (
              <article key={src} className="card-soft" style={{ padding: 10 }}><img className="img" src={src} alt="work" /><div style={{ padding: "10px 4px 4px" }}><strong>Case Study {i+1}</strong><div className="muted" style={{ fontSize: 13 }}>SEO + WordPress transformation</div></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <article className="card-white" style={{ padding: 24 }}>
            <h2 className="h2" style={{ marginTop: 0 }}>Process</h2>
            {["Discovery & goals", "Audit & opportunity map", "Roadmap", "Execution", "Reporting & scale"].map((s, i) => (
              <div key={s} className="card-soft" style={{ padding: "12px 14px", marginBottom: 10, display: "flex", gap: 10 }}><span className="muted" style={{ width: 24 }}>0{i+1}</span><span>{s}</span></div>
            ))}
          </article>
          <article className="card-dark" style={{ padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>What you get</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: "#d1d5db" }}>
              <li>Clear priority plan</li><li>Weekly execution updates</li><li>SEO + dev alignment</li><li>Measurable KPI tracking</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="reviews" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap card-white" style={{ borderRadius: 64, padding: 24 }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Customer Reviews</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {["Sakib transformed our rankings and lead quality.","Strong technical execution and clear communication.","Exactly the SEO + WordPress partner we needed."].map((q)=> (
              <blockquote key={q} className="card-soft" style={{ padding: 18, margin: 0 }}><p style={{ margin: 0 }}>&ldquo;{q}&rdquo;</p></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-dark" style={{ padding: 34, textAlign: "center" }}>
            <p style={{ opacity: .75, letterSpacing: ".16em", textTransform: "uppercase", fontSize: 12 }}>Call to Action</p>
            <h2 className="h2" style={{ color: "#fff", margin: "8px 0" }}>Ready to grow with SEO that performs?</h2>
            <p style={{ opacity: .82, maxWidth: 700, margin: "0 auto" }}>Send your website and goals. I’ll share a practical roadmap with clear next steps.</p>
            <div style={{ marginTop: 22 }}><a className="btn" style={{ background: "#fff", color: "#111827" }} href="mailto:hello@sakibahmed.com">Start Project</a></div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}><span>© {new Date().getFullYear()} Sakib Ahmed</span><span>SEO Expert • WordPress Developer</span></div></footer>
    </main>
  );
}
