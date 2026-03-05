const services = [
  ["Technical SEO", "Deep crawl diagnostics, indexation fixes, schema and performance optimization."],
  ["WordPress Engineering", "Custom builds with clean architecture, secure stack, and conversion-first UX."],
  ["Local SEO (UAE)", "City pages, entity optimization, map-pack strategy, and citation consistency."],
  ["Content Systems", "Intent-based clusters that rank and support sales conversations."]
];

export default function Home() {
  return (
    <main>
      <div className="container" style={{paddingTop:20,paddingBottom:20}}>
        <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span className="badge">Sakib Ahmed</span>
          <a className="badge" href="https://www.linkedin.com/in/ahmed-sakib-upp/" target="_blank">LinkedIn</a>
        </header>
      </div>

      <section className="section" style={{paddingTop:24}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="badge">SEO Expert & WordPress Developer</span>
          <h1 className="title">Websites that grow traffic<br/>and convert revenue.</h1>
          <p className="muted" style={{maxWidth:740,margin:'0 auto',fontSize:17}}>
            I build premium websites and search systems for service businesses that want stronger visibility,
            faster performance, and better lead quality.
          </p>
          <div style={{marginTop:24,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a className="btn btn-dark" href="mailto:hello@sakibahmed.com">Book Intro Call</a>
            <a className="btn btn-light" href="#work">See Work</a>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="card" style={{padding:10}}>
          <img className="img" src="https://images.unsplash.com/photo-1616627981459-8f95f9f95fa5?auto=format&fit=crop&w=1800&q=80" alt="hero" />
        </section>
      </div>

      <section className="section">
        <div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
          {[["120+","SEO projects"],["8+","Years experience"],["95%","Client retention"],["24/7","Support readiness"]].map(([a,b])=> (
            <div key={a} className="kpi"><div style={{fontSize:28,fontWeight:700}}>{a}</div><div className="muted" style={{fontSize:14}}>{b}</div></div>
          ))}
        </div>
      </section>

      <section className="section line" id="about">
        <div className="container" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:20}}>
          <div>
            <p className="badge">About me</p>
            <h2 style={{fontSize:38,margin:'14px 0'}}>SEO strategy with builder-level execution.</h2>
            <p className="muted">Most teams split strategy and implementation. I don’t. I map growth opportunities, build the pages, optimize technical foundations, and improve conversion paths—end to end.</p>
          </div>
          <div className="card" style={{padding:12}}>
            <img className="img" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" alt="workspace" />
          </div>
        </div>
      </section>

      <section className="section line" id="services">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:12,flexWrap:'wrap'}}>
            <h2 style={{fontSize:38,margin:0}}>My Services</h2>
            <span className="badge">High impact, minimal fluff</span>
          </div>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',marginTop:18}}>
            {services.map(([t,d])=> (
              <article key={t} className="card" style={{padding:18}}>
                <h3 style={{margin:'0 0 8px'}}>{t}</h3>
                <p className="muted" style={{margin:0,fontSize:14}}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="work">
        <div className="container">
          <h2 style={{fontSize:38,marginTop:0}}>Selected Work</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
            {[
              'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=900&q=80'
            ].map((src,i)=> (
              <article key={src} className="card" style={{padding:10}}>
                <img className="img" src={src} alt="work sample" />
                <div style={{padding:'10px 4px 4px'}}>
                  <div style={{fontWeight:600}}>Case Study {i+1}</div>
                  <div className="muted" style={{fontSize:13}}>SEO + WordPress transformation</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="process">
        <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
          <div>
            <h2 style={{fontSize:38,marginTop:0}}>Process</h2>
            {["Discovery & goals","Audit & opportunity map","Roadmap & sprints","Execution","Reporting & scale"].map((s,idx)=> (
              <div key={s} className="card" style={{padding:'12px 14px',marginBottom:10,display:'flex',gap:10}}>
                <span className="muted" style={{width:24}}>0{idx+1}</span><span>{s}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{padding:16}}>
            <h3 style={{marginTop:0}}>What clients get</h3>
            <ul className="muted" style={{margin:0,paddingLeft:18,lineHeight:1.9}}>
              <li>Clear priority plan</li>
              <li>Transparent implementation timeline</li>
              <li>SEO + development in one workflow</li>
              <li>Weekly execution updates</li>
              <li>Measurable KPI tracking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section line" id="reviews">
        <div className="container">
          <h2 style={{fontSize:38,marginTop:0}}>Customer Reviews</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
            {[
              'Sakib transformed our site structure and rankings in less than two months.',
              'Strong technical depth and very clean communication.',
              'Exactly the type of SEO + dev partner we needed.'
            ].map((q)=> (
              <blockquote key={q} className="card" style={{padding:18,margin:0}}>
                <p style={{margin:0}}>&ldquo;{q}&rdquo;</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section line" id="cta">
        <div className="container">
          <div className="card" style={{padding:30,textAlign:'center',background:'#0b0f1b',color:'#fff'}}>
            <p style={{opacity:.7,letterSpacing:'.18em',textTransform:'uppercase',fontSize:12}}>Call to Action</p>
            <h2 style={{fontSize:40,lineHeight:1.1,margin:'8px 0 10px'}}>Let’s grow your brand with SEO that performs.</h2>
            <p style={{opacity:.8,maxWidth:640,margin:'0 auto'}}>Send your website and business goals. I’ll reply with a practical game plan.</p>
            <div style={{marginTop:20}}><a className="btn" style={{background:'#fff',color:'#0b0f1b'}} href="mailto:hello@sakibahmed.com">Start Project</a></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
          <span>© {new Date().getFullYear()} Sakib Ahmed</span>
          <span>SEO Expert • WordPress Developer</span>
        </div>
      </footer>
    </main>
  );
}
