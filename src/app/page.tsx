const services = [
  {
    title: "SEO Strategy",
    desc: "Market + keyword analysis, information architecture, and growth roadmaps tied to business outcomes.",
  },
  {
    title: "WordPress Development",
    desc: "Modern, high-performance WordPress websites built for speed, clarity, and conversions.",
  },
  {
    title: "Technical SEO",
    desc: "Crawl/index fixes, Core Web Vitals optimization, schema, and content structure improvements.",
  },
  {
    title: "Local SEO (UAE)",
    desc: "Location-page strategy, entity signals, and map visibility systems for service businesses.",
  },
];

const process = [
  "Discovery call & growth goals",
  "SEO + technical audit",
  "Roadmap and priority plan",
  "Execution sprint",
  "Measure, refine, and scale",
];

export default function Home() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span className="badge">Sakib Ahmed</span>
          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Work", "#work"],
              ["Process", "#process"],
              ["Reviews", "#reviews"],
            ].map(([label, href]) => (
              <a key={label} className="badge" href={href}>
                {label}
              </a>
            ))}
          </nav>
        </header>
      </div>

      <section className="section" style={{ paddingTop: 18 }}>
        <div className="container hero-split" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18, alignItems: "stretch" }}>
          <article className="card" style={{ padding: 28 }}>
            <span className="badge">SEO Expert & WordPress Developer</span>
            <h1 className="title" style={{ marginTop: 16 }}>
              Helping brands rank,
              <br />
              convert, and scale.
            </h1>
            <p className="muted" style={{ maxWidth: 620, fontSize: 17 }}>
              I design growth-focused SEO systems and build premium WordPress experiences that turn organic traffic
              into qualified leads.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-dark" href="mailto:hello@sakibahmed.com">
                Book a Discovery Call
              </a>
              <a className="btn btn-light" href="https://www.linkedin.com/in/ahmed-sakib-upp/" target="_blank">
                LinkedIn Profile
              </a>
            </div>
          </article>

          <article className="card" style={{ padding: 10 }}>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
              alt="Sakib Ahmed portrait style"
            />
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
          {[
            ["120+", "Projects delivered"],
            ["8+", "Years in web & SEO"],
            ["95%", "Retention rate"],
            ["3x", "Avg lead growth range"],
          ].map(([n, t]) => (
            <div key={n} className="kpi">
              <div style={{ fontSize: 28, fontWeight: 700 }}>{n}</div>
              <div className="muted" style={{ fontSize: 14 }}>
                {t}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section line" id="about">
        <div className="container two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <article className="card" style={{ padding: 10 }}>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80"
              alt="workspace and strategy"
            />
          </article>
          <article className="card" style={{ padding: 26 }}>
            <span className="badge">About</span>
            <h2 style={{ fontSize: 38, margin: "14px 0" }}>Strategy + execution in one workflow.</h2>
            <p className="muted">
              Most teams split planning and delivery. I don’t. I map search opportunities, fix technical bottlenecks,
              structure conversion paths, and implement everything directly in WordPress.
            </p>
            <p className="muted" style={{ marginTop: 12 }}>
              The outcome: cleaner visibility, stronger user trust, and revenue-focused growth.
            </p>
          </article>
        </div>
      </section>

      <section className="section line" id="services">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 38, margin: 0 }}>My Services</h2>
            <span className="badge">Built for measurable impact</span>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", marginTop: 18 }}>
            {services.map((item) => (
              <article key={item.title} className="card" style={{ padding: 18 }}>
                <h3 style={{ margin: "0 0 8px" }}>{item.title}</h3>
                <p className="muted" style={{ margin: 0, fontSize: 14 }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="work">
        <div className="container">
          <h2 style={{ fontSize: 38, marginTop: 0 }}>Featured Work</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
            {[
              [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80",
                "SEO architecture rebuild",
              ],
              [
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
                "WordPress conversion redesign",
              ],
              [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80",
                "Local SEO growth system",
              ],
              [
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80",
                "Content cluster rollout",
              ],
            ].map(([src, label]) => (
              <article key={String(src)} className="card" style={{ padding: 10 }}>
                <img className="img" src={String(src)} alt={String(label)} />
                <div style={{ padding: "10px 4px 4px" }}>
                  <div style={{ fontWeight: 600 }}>{label}</div>
                  <div className="muted" style={{ fontSize: 13 }}>
                    SEO + WordPress execution
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="process">
        <div className="container two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <article>
            <h2 style={{ fontSize: 38, marginTop: 0 }}>Process</h2>
            {process.map((step, idx) => (
              <div key={step} className="card" style={{ padding: "12px 14px", marginBottom: 10, display: "flex", gap: 10 }}>
                <span className="muted" style={{ width: 24 }}>
                  0{idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </article>
          <article className="card" style={{ padding: 10 }}>
            <img
              className="img"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="team process"
            />
          </article>
        </div>
      </section>

      <section className="section line" id="reviews">
        <div className="container">
          <h2 style={{ fontSize: 38, marginTop: 0 }}>Customer Reviews</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              "Sakib transformed our search visibility and built a site that converts far better.",
              "Strong technical execution with clean communication and clear milestones.",
              "Exactly the SEO + WordPress partner we needed for growth.",
            ].map((q) => (
              <blockquote key={q} className="card" style={{ padding: 18, margin: 0 }}>
                <p style={{ margin: 0 }}>&ldquo;{q}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="cta">
        <div className="container">
          <div className="card" style={{ padding: 30, textAlign: "center", background: "#0b0f1b", color: "#fff" }}>
            <p style={{ opacity: 0.7, letterSpacing: ".18em", textTransform: "uppercase", fontSize: 12 }}>Call to Action</p>
            <h2 style={{ fontSize: 40, lineHeight: 1.1, margin: "8px 0 10px" }}>Ready to grow with SEO that performs?</h2>
            <p style={{ opacity: 0.84, maxWidth: 640, margin: "0 auto" }}>
              Share your website and goals. I’ll respond with a practical growth plan and next-step execution map.
            </p>
            <div style={{ marginTop: 20 }}>
              <a className="btn" style={{ background: "#fff", color: "#0b0f1b" }} href="mailto:hello@sakibahmed.com">
                Start Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} Sakib Ahmed</span>
          <span>SEO Expert • WordPress Developer</span>
        </div>
      </footer>
    </main>
  );
}
