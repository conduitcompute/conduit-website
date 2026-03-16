"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Mark = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2.2" fill={color}/>
    <circle cx="20" cy="12" r="2.2" fill={color}/>
    <circle cx="28" cy="12" r="2.2" fill={color}/>
    <circle cx="12" cy="20" r="2.2" fill={color}/>
    <circle cx="20" cy="20" r="3" fill={color}/>
    <circle cx="28" cy="20" r="2.2" fill={color}/>
    <circle cx="12" cy="28" r="2.2" fill={color}/>
    <circle cx="20" cy="28" r="2.2" fill={color}/>
    <circle cx="28" cy="28" r="2.2" fill={color}/>
    <line x1="14.2" y1="12" x2="17.8" y2="12" stroke={color} strokeWidth="0.8"/>
    <line x1="22.2" y1="12" x2="25.8" y2="12" stroke={color} strokeWidth="0.8"/>
    <line x1="14.2" y1="20" x2="17" y2="20" stroke={color} strokeWidth="0.8"/>
    <line x1="23" y1="20" x2="25.8" y2="20" stroke={color} strokeWidth="0.8"/>
    <line x1="14.2" y1="28" x2="17.8" y2="28" stroke={color} strokeWidth="0.8"/>
    <line x1="22.2" y1="28" x2="25.8" y2="28" stroke={color} strokeWidth="0.8"/>
    <line x1="12" y1="14.2" x2="12" y2="17.8" stroke={color} strokeWidth="0.8"/>
    <line x1="20" y1="14.2" x2="20" y2="17" stroke={color} strokeWidth="0.8"/>
    <line x1="28" y1="14.2" x2="28" y2="17.8" stroke={color} strokeWidth="0.8"/>
    <line x1="12" y1="22.2" x2="12" y2="25.8" stroke={color} strokeWidth="0.8"/>
    <line x1="20" y1="23" x2="20" y2="25.8" stroke={color} strokeWidth="0.8"/>
    <line x1="28" y1="22.2" x2="28" y2="25.8" stroke={color} strokeWidth="0.8"/>
  </svg>
);

const Site = () => {
  const [scrolled, setScrolled] = useState(false);
  const [vis, setVis] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setVis((p) => ({ ...p, [e.target.id]: true })); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-a]").forEach((el) => obs.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  const anim = (id: string, d: number = 0) => ({
    id, "data-a": true,
    style: { opacity: vis[id] ? 1 : 0, transform: vis[id] ? "translateY(0)" : "translateY(14px)", transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s` }
  });

  const white = "#FFFFFF";
  const ink = "#141210";
  const red = "#8B2232";
  const gold = "#B8963E";
  const muted = "#7A756B";
  const faint = "#A8A29A";
  const border = "#E5E0D6";
  const offwhite = "#F7F5F1";

  const mx = { maxWidth: 1080, margin: "0 auto" };

  return (
    <div style={{ background: white, color: ink, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::selection{background:${red};color:#fff}
        .wm{font-family:'Playfair Display',Georgia,serif}
        .s{font-family:'DM Sans',-apple-system,sans-serif}
        @keyframes fu{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        a.nl{text-decoration:none;color:${ink};font-size:11px;letter-spacing:1.4px;text-transform:uppercase;opacity:.4;transition:opacity .3s;font-weight:400}
        a.nl:hover{opacity:.9}
        .bp{display:inline-block;padding:13px 36px;background:${red};color:#fff;text-decoration:none;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;transition:all .25s;cursor:pointer;border:1.5px solid ${red}}
        .bp:hover{background:transparent;color:${red}}
        .bg{display:inline-block;padding:13px 36px;background:transparent;color:${ink};text-decoration:none;font-size:10px;font-weight:500;letter-spacing:2px;text-transform:uppercase;border:1px solid ${border};cursor:pointer;transition:all .25s}
        .bg:hover{border-color:${red};color:${red}}
        .bpl{display:inline-block;padding:13px 36px;background:#fff;color:#3D1520;text-decoration:none;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;transition:all .25s;cursor:pointer;border:1.5px solid #fff}
        .bpl:hover{background:transparent;color:#fff;border-color:rgba(255,255,255,.4)}
        @media(max-width:768px){
          .ht{font-size:34px!important}
          .st{font-size:26px!important}
          .g3{grid-template-columns:1fr!important}
          .g2{grid-template-columns:1fr!important}
          .nv{display:none!important}
          .hs{flex-direction:column!important;gap:24px!important}
        }
      `}</style>

      {/* NAV */}
      <nav className="s" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "12px 48px" : "20px 48px", background: scrolled ? "rgba(255,255,255,.97)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", transition: "all .35s", borderBottom: scrolled ? `1px solid ${border}` : "none" }}>
        <div style={{ ...mx, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 10 }}>
            <Mark size={26} color={ink} />
            <span className="wm" style={{ fontSize: 22, fontWeight: 600, color: ink, letterSpacing: .3 }}>Conduit</span>
          </a>
          <div className="nv" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            <a href="#what" className="nl s">What We Do</a>
            <a href="#why" className="nl s">Why Conduit</a>
            <a href="#how" className="nl s">Process</a>
            <a href="#contact" className="bp s" style={{ padding: "7px 20px" }}>Get a Quote</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 60px", ...mx }}>
        <div style={{ animation: "fu 1s ease" }}>
          <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 36 }}>Compute Brokerage</p>
          <h1 className="wm ht" style={{ fontSize: 54, fontWeight: 500, fontStyle: "italic", lineHeight: 1.12, maxWidth: 640, letterSpacing: -.5, color: ink }}>
            The merchant layer for GPU compute.
          </h1>
          <p className="s" style={{ fontSize: 15, lineHeight: 1.9, maxWidth: 440, color: ink, marginTop: 32, fontWeight: 400 }}>
            Conduit sits between GPU operators and the companies that need their capacity. We source at wholesale, manage the price exposure, and pass you a fixed monthly number you can actually plan around.
          </p>
          <div className="s" style={{ marginTop: 36, display: "flex", gap: 12 }}>
            <a href="#contact" className="bp s">Get a Quote</a>
            <a href="#what" className="bg s">Learn More</a>
          </div>
        </div>
        <div className="hs s" style={{ display: "flex", gap: 52, marginTop: 80, paddingTop: 36, borderTop: `1px solid ${border}` }}>
          {[["Wholesale rates", "below on-demand pricing"], ["Fixed price", "6 to 24 months"], ["Any GPU", "H100 · H200 · B200 · A100"], ["Fast", "quote to live capacity"]].map(([n, l], i) => (
            <div key={i} style={{ animation: `fu .8s ease ${.3 + i * .1}s both` }}>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -.5, color: ink }}>{n}</div>
              <div style={{ fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: faint, marginTop: 5, maxWidth: 115, fontWeight: 400 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THESIS - RED */}
      <section style={{ background: red, color: "#fff", padding: "96px 48px" }}>
        <div {...anim("th")} style={{ ...mx, ...anim("th").style }}>
          <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 20 }}>The thesis</p>
          <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 640, color: "#fff" }}>
            Compute is the most important commodity of the decade. But it still trades the way oil did before there were futures markets.
          </h2>
          <p className="s" style={{ fontSize: 14, lineHeight: 1.9, color: "#fff", maxWidth: 460, marginTop: 28, fontWeight: 400 }}>
            An H100 costs $1.38/hr from one provider and $3.99/hr from another. Prices move double digits in a single week. If your biggest cost input behaves like this, planning becomes guesswork. We think that&apos;s a solvable problem.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what" style={{ padding: "96px 48px", ...mx }}>
        <div {...anim("w0")}>
          <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 18 }}>What we do</p>
          <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 560, color: ink }}>
            We buy compute at wholesale and sell it to you at a fixed rate.
          </h2>
        </div>
        <div className="g3 s" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginTop: 48, background: border }}>
          {[
            ["Fixed-price contracts", "You tell us what you need. We quote a rate and lock it for 6 to 24 months. Your compute cost becomes as predictable as rent."],
            ["Multi-provider sourcing", "We source from GPU operators across the full stack, from the largest clouds to former mining operations turning idle rigs into AI capacity. You get the best available rate through a single counterparty."],
            ["Intelligent routing", "We monitor spot pricing across our provider network and route your workloads to the cheapest capacity that meets your latency, compliance, and performance requirements."],
          ].map(([t, d], i) => (
            <div key={i} style={{ background: white, padding: "40px 32px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: ink }}>{t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: ink, fontWeight: 400 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CONDUIT - RED */}
      <section id="why" style={{ padding: "96px 48px", background: red, color: "#fff" }}>
        <div style={mx}>
          <div {...anim("y0")}>
            <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 18 }}>Why Conduit</p>
            <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 520, color: "#fff" }}>
              A merchant, not a marketplace.
            </h2>
            <p className="s" style={{ fontSize: 14, lineHeight: 1.9, color: "#fff", maxWidth: 440, marginTop: 18, fontWeight: 400 }}>
              Marketplaces list inventory and take a referral fee. We actually buy capacity, hold the position, and sell it forward. That means we have skin in the game on every contract we write.
            </p>
          </div>
          <div className="g2 s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, marginTop: 48, background: "rgba(255,255,255,.1)" }}>
            {[
              ["We take principal risk", "When you sign a contract with Conduit, we've already secured the underlying capacity and hedged the price exposure. You're buying from us."],
              ["Price certainty that holds", "We apply the same hedging principles that energy and commodity traders use to lock in rates, so your contract price holds for the full term."],
              ["Supply others can't access", "Mining operators pivoting to AI, hyperscalers with regional excess, private data centres with off-peak availability. A lot of GPU supply never reaches a marketplace."],
              ["One agreement, every GPU", "H100, H200, B200, A100, L40S. One contract with Conduit, and you scale across the full hardware spectrum as your needs evolve."],
            ].map(([t, d], i) => (
              <div key={i} style={{ background: red, padding: "40px 32px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: "#fff" }}>{t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: "#fff", fontWeight: 400 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how" style={{ padding: "96px 48px", ...mx }}>
        <div {...anim("h0")}>
          <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 18 }}>Process</p>
          <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 480, color: ink }}>
            From first call to live capacity. No procurement cycles, no red tape.
          </h2>
        </div>
        <div className="g3 s" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 44, marginTop: 48 }}>
          {[
            ["01", "Tell us what you need", "GPU type, how many, how long, any latency or compliance constraints. Most conversations take about fifteen minutes. We come back with a fixed-price quote fast."],
            ["02", "We source and lock the rate", "Once you accept, we secure capacity across our provider network and lock in the economics. The contract you sign is the price you pay. Full stop."],
            ["03", "Capacity goes live", "We handle the provider relationships, monitoring, and everything behind the scenes. If something breaks at 3am, that's our problem, not yours."],
          ].map(([n, t, d], i) => (
            <div key={i} {...anim(`hp${i}`, i * .1)} style={{ opacity: vis[`hp${i}`] ? 1 : 0, transform: vis[`hp${i}`] ? "translateY(0)" : "translateY(14px)", transition: `all .7s ease ${i * .1}s` }}>
              <div style={{ fontSize: 11, letterSpacing: 3, color: faint, marginBottom: 18, fontWeight: 500 }}>{n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: ink }}>{t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: ink, fontWeight: 400 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL */}
      <section style={{ padding: "72px 48px", borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, background: offwhite }}>
        <div {...anim("gl")} style={{ ...mx, ...anim("gl").style }}>
          <div className="g3 s" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: border }}>
            {[
              ["Americas", "US · Canada · LatAm", "North American bare-metal providers, Canadian mining operators, and hyperscaler excess capacity."],
              ["Europe", "UK · EU · Nordics", "Low-cost Nordic compute, EU-compliant data sovereignty capacity, and London/Frankfurt interconnection."],
              ["Asia-Pacific", "Singapore · Tokyo · Sydney", "APAC demand centres with local-latency routing and regional compliance."],
            ].map(([r, loc, d], i) => (
              <div key={i} style={{ background: white, padding: "36px 28px" }}>
                <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: faint, marginBottom: 6, fontWeight: 500 }}>{loc}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: ink }}>{r}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: ink, fontWeight: 400 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section style={{ padding: "96px 48px", ...mx }}>
        <div {...anim("f0")}>
          <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 18 }}>Built for</p>
          <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 520, color: ink }}>
            Compute buyers and sellers who want certainty.
          </h2>
        </div>
        <div className="g2 s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 44 }}>
          {[
            ["AI startups", "You're spending a meaningful share of every round on GPU bills that swing month to month. We lock that number at wholesale rates well below what you're paying on-demand."],
            ["ML teams at scale", "Your quarterly compute forecast shouldn't require a disclaimer. We give engineering and finance a single number they can both commit to for the year."],
            ["AI-native SaaS", "If your product runs on inference, your margins live and die by GPU spot pricing. A fixed-cost contract turns that variable into a known."],
            ["GPU operators", "Idle racks don't generate revenue. We buy in bulk at wholesale with guaranteed utilization, giving you contracted income instead of marketplace uncertainty."],
          ].map(([t, d], i) => (
            <div key={i} {...anim(`fb${i}`, i * .07)} style={{ opacity: vis[`fb${i}`] ? 1 : 0, transform: vis[`fb${i}`] ? "translateY(0)" : "translateY(14px)", transition: `all .7s ease ${i * .07}s`, paddingBottom: 32, borderBottom: `1px solid ${border}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: ink }}>{t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: ink, fontWeight: 400 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "96px 48px", borderTop: `1px solid ${border}`, background: offwhite }}>
        <div style={mx}>
          <div {...anim("tm")}>
            <p className="s" style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: gold, fontWeight: 600, marginBottom: 18 }}>Team</p>
            <h2 className="wm st" style={{ fontSize: 36, fontWeight: 500, fontStyle: "italic", lineHeight: 1.25, maxWidth: 520, color: ink }}>
              Built by people who understand both the trade and the infrastructure.
            </h2>
          </div>
          <div className="g2 s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48 }}>
            {/* Parsa */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <Image src="/Parsa.jpg" alt="Parsa Rahbar" width={80} height={80} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: ink, marginBottom: 4 }}>Parsa Rahbar</h3>
                <p style={{ fontSize: 11, color: gold, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Co-Founder</p>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: ink, fontWeight: 400 }}>
                  Parsa has worked in energy and infrastructure finance across North America and Europe, spanning infrastructure private equity, investment banking, and venture capital. He holds a BCom from the University of Toronto.
                </p>
              </div>
            </div>
            {/* Akash */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <Image src="/Akash.jpg" alt="Akash Umasuthan" width={80} height={80} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: ink, marginBottom: 4 }}>Akash Umasuthan</h3>
                <p style={{ fontSize: 11, color: gold, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Co-Founder</p>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: ink, fontWeight: 400 }}>
                  Akash has worked in sales and trading across North America, Europe, and Asia, with experience spanning delta one, equities, and cross-asset execution. He holds a BCom from the University of Toronto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - RED */}
      <section id="contact" style={{ background: red, color: "#fff", padding: "100px 48px", textAlign: "center" }}>
        <div {...anim("ct")} style={{ maxWidth: 460, margin: "0 auto", ...anim("ct").style }}>
          <Mark size={30} color="#fff" />
          <h2 className="wm" style={{ fontSize: 38, fontWeight: 500, fontStyle: "italic", lineHeight: 1.2, marginTop: 20, marginBottom: 16, color: "#fff" }}>
            Get a fixed quote.
          </h2>
          <p className="s" style={{ fontSize: 14, lineHeight: 1.9, color: "#fff", marginBottom: 36, fontWeight: 400 }}>
            Tell us what GPUs you need, how many, and for how long. We&apos;ll come back with a locked price that beats on-demand. Usually the same day.
          </p>
          <a href="mailto:hello@conduitcompute.com" className="bpl s">Request a Quote</a>
          <p className="s" style={{ fontSize: 11, color: "rgba(255,255,255,.3)", marginTop: 18 }}>hello@conduitcompute.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="s" style={{ borderTop: `1px solid ${border}`, padding: "48px 48px", background: white }}>
        <div style={{ ...mx, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "start", gap: 36 }}>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: faint, justifySelf: "start" }}>
            <div style={{ marginBottom: 12, color: muted, fontWeight: 600 }}>Company</div>
            <a href="#what" style={{ display: "block", marginBottom: 7, color: "inherit", textDecoration: "none" }}>What We Do</a>
            <a href="#why" style={{ display: "block", marginBottom: 7, color: "inherit", textDecoration: "none" }}>Why Conduit</a>
            <a href="#contact" style={{ display: "block", color: "inherit", textDecoration: "none" }}>Contact</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, justifySelf: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, marginBottom: 10 }}>
              <Mark size={22} color={ink} />
              <span className="wm" style={{ fontSize: 19, fontWeight: 600, color: ink }}>Conduit</span>
            </div>
            <p style={{ fontSize: 11, color: faint }}>The compute merchant.</p>
          </div>
          <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: faint, justifySelf: "end" }}>
            <div style={{ marginBottom: 12, color: muted, fontWeight: 600 }}>Regions</div>
            <div style={{ marginBottom: 7 }}>Americas</div>
            <div style={{ marginBottom: 7 }}>Europe</div>
            <div>Asia-Pacific</div>
          </div>
        </div>
        <div style={{ ...mx, marginTop: 36, paddingTop: 24, borderTop: `1px solid ${border}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontSize: 9, color: faint }}>© 2026 Conduit Compute. All rights reserved.</p>
          <p style={{ fontSize: 9, color: faint }}>Compute brokerage for the AI economy.</p>
        </div>
      </footer>
    </div>
  );
};

export default Site;