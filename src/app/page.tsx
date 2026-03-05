export default function Home() {
  return (
    <main>
      <div className="hero-bg" style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0" }}>
            <div style={{ letterSpacing: ".22em", fontSize: 12, textTransform: "uppercase", color: "rgba(255,255,255,.7)" }}>Sakib Ahmed</div>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/ahmed-sakib-upp/" target="_blank">LinkedIn</a>
          </header>

          <section style={{ padding: "62px 0 96px" }}>
            <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".22em", color: "rgba(255,255,255,.62)" }}>SEO Expert & WordPress Developer</p>
            <h1 style={{ fontSize: "clamp(40px,7vw,88px)", lineHeight: 1.04, margin: "16px 0", maxWidth: 920 }}>
              High-converting websites.
              <br />
              Search growth that compounds.
            </h1>
            <p className="muted" style={{ maxWidth: 720, fontSize: 18 }}>
              I help brands scale with technical SEO, content architecture, and premium WordPress development.
              Built for speed, clarity, and measurable lead growth.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="mailto:hello@sakibahmed.com">Book a Strategy Call</a>
              <a className="btn btn-secondary" href="#work">View Work</a>
            </div>
          </section>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginTop: 0 }}>About</h2>
          <p className="muted" style={{ maxWidth: 900 }}>
            I combine growth strategy with execution. Instead of separating SEO planning and development delivery,
            I build systems where structure, performance, and conversion work together from day one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginTop: 0 }}>Services</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", marginTop: 20 }}>
            {[
              ["Technical SEO", "Site architecture, crawl/index fixes, and Core Web Vitals optimization."],
              ["WordPress Development", "Custom WordPress builds optimized for speed and conversion."],
              ["Local SEO", "Location pages, Google profile strategy, and authority signals for local rankings."],
              ["Content SEO", "Topic clusters and intent-driven pages that rank and convert."],
            ].map(([title, text]) => (
              <article key={title} className="glass" style={{ borderRadius: 20, padding: 20 }}>
                <h3 style={{ marginTop: 0 }}>{title}</h3>
                <p className="muted" style={{ marginBottom: 0, fontSize: 14 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginTop: 0 }}>Selected Work</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginTop: 22 }}>
            {[
              ["SEO Rebuild for Design Studio", "+210% organic impressions in 90 days"],
              ["WordPress Performance Overhaul", "LCP reduced from 4.1s to 1.7s"],
              ["Local SEO Expansion", "Top-3 ranking growth for UAE service intent keywords"],
            ].map(([title, text]) => (
              <article key={title} className="glass" style={{ borderRadius: 20, padding: 22 }}>
                <h3 style={{ marginTop: 0 }}>{title}</h3>
                <p className="muted" style={{ marginBottom: 0 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginTop: 0 }}>Process</h2>
          <div className="grid" style={{ marginTop: 18 }}>
            {[
              "Discovery call + growth goals",
              "SEO/tech audit and issue mapping",
              "Execution roadmap by ROI",
              "Development + optimization sprint",
              "Reporting and continuous iteration",
            ].map((s, i) => (
              <div key={s} className="glass" style={{ borderRadius: 14, padding: "14px 16px", display: "flex", gap: 12 }}>
                <span style={{ color: "rgba(255,255,255,.55)", width: 24 }}>0{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 36, marginTop: 0 }}>Client Reviews</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 20 }}>
            {[
              "Sakib translated complex SEO into practical action. We saw better traffic quality within weeks.",
              "Clean execution, no fluff. The website got faster and started converting better.",
              "A rare mix of strategy and technical depth. Highly recommended.",
            ].map((q) => (
              <blockquote key={q} className="glass" style={{ borderRadius: 20, padding: 20, margin: 0 }}>
                <p style={{ margin: 0 }}>&ldquo;{q}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass" style={{ borderRadius: 24, padding: 36, textAlign: "center" }}>
            <p style={{ letterSpacing: ".2em", textTransform: "uppercase", fontSize: 12, color: "rgba(255,255,255,.6)" }}>Call to Action</p>
            <h2 style={{ fontSize: 40, lineHeight: 1.1, margin: "10px 0 8px" }}>Ready to scale your website and search presence?</h2>
            <p className="muted" style={{ maxWidth: 700, margin: "0 auto" }}>Send your website URL and growth goals. I’ll share a practical roadmap with clear next actions.</p>
            <div style={{ marginTop: 24 }}>
              <a className="btn btn-primary" href="mailto:hello@sakibahmed.com">Start Project</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,.12)", padding: "28px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", color: "rgba(255,255,255,.65)", fontSize: 14 }}>
          <span>© {new Date().getFullYear()} Sakib Ahmed</span>
          <span>SEO Expert • WordPress Developer</span>
        </div>
      </footer>
    </main>
  );
}
