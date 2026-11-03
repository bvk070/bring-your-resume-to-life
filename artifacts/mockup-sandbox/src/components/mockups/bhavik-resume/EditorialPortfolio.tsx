import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Download,
  Layers3,
  MessageCircle,
  Mic2,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const proofPoints = [
  {
    number: "01",
    title: "Ask a project. Get the answer.",
    label: "AI-powered Mobile Assistant",
    detail:
      "Natural-language queries over project data, designed to bring useful answers into the mobile workflow.",
    icon: MessageCircle,
    tint: "sage",
  },
  {
    number: "02",
    title: "Support that speaks more than one language.",
    label: "VAPI multilingual voice agent",
    detail: "A voice agent for support in 10+ languages.",
    icon: Mic2,
    tint: "peach",
  },
  {
    number: "03",
    title: "A second set of eyes on every change.",
    label: "Code Guardian",
    detail: "An AI PR-review agent supporting the engineering review loop.",
    icon: Code2,
    tint: "blue",
  },
  {
    number: "04",
    title: "Design-system intent, closer to code.",
    label: "Figma Code Connect",
    detail: "Integration reducing component implementation time by 70%.",
    icon: Layers3,
    tint: "lilac",
  },
  {
    number: "05",
    title: "Better tools. More room for the hard work.",
    label: "AI development tools",
    detail: "Improving team productivity by 40%.",
    icon: Sparkles,
    tint: "yellow",
  },
];

const skillGroups = [
  {
    title: "Android & languages",
    tags: ["Kotlin", "Java", "Android SDK", "XML", "Jetpack Compose", "RxJava", "Coroutines", "Flow"],
  },
  {
    title: "Architecture & quality",
    tags: ["MVVM / MVP / Clean Architecture", "Hilt", "Dagger", "Repository Pattern", "JUnit", "Mockito", "MockK", "Espresso", "LeakCanary"],
  },
  {
    title: "Data & platform",
    tags: ["Retrofit", "OkHttp", "Room", "Firebase", "Glide", "Coil", "SQLite", "REST APIs"],
  },
  {
    title: "Delivery & collaboration",
    tags: ["Git / GitHub", "Jenkins", "Gradle", "ProGuard / R8", "Figma", "JIRA", "Confluence"],
  },
  {
    title: "AI & automation",
    tags: ["Cursor", "GitHub Copilot", "Augment Code", "Gemini", "ChatGPT", "AI agent development in Python", "Make", "n8n"],
  },
];

const earlierRoles = [
  ["GlobalLogic", "May 2018 – Jul 2019"],
  ["DEV Information Technology", "Feb 2016 – May 2018"],
  ["BigBang Innovations", "Mar 2015 – Feb 2016"],
  ["Webplanex", "Oct 2013 – Mar 2015"],
  ["Tristate Technology", "Sep 2012 – Oct 2013"],
];

const starters = [
  "What have you shipped with AI?",
  "How do you approach Android architecture?",
  "Tell me about the Vymo app.",
  "How do you mentor Android teams?",
];

function downloadResume() {
  const resumeText = [
    "Bhavik Sadiwala — Staff Android Engineer",
    "Bengaluru, India",
    "14 years of Android experience",
    "",
    "Experience",
    "Procore — Staff Engineer Android (Aug 2024–present)",
    "Vymo — Principal Engineer Android (Aug 2019–Aug 2024); technical lead on a sales-assistant app with 1M+ downloads",
    ...earlierRoles.map(([company, dates]) => `${company} (${dates})`),
    "",
    "Selected work",
    ...proofPoints.map((project) => `${project.label}: ${project.detail}`),
    "Mentored Kotlin Coroutines, Flow, Jetpack Compose.",
    "",
    "Skills",
    ...skillGroups.map((group) => `${group.title}: ${group.tags.join(", ")}`),
  ].join("\n");
  const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Bhavik-Sadiwala-Resume.txt";
  anchor.click();
  URL.revokeObjectURL(url);
}

export function EditorialPortfolio() {
  const [activeQuestion, setActiveQuestion] = useState("");
  const [showContactNote, setShowContactNote] = useState(false);
  const [copied, setCopied] = useState(false);

  const answerQuestion = (question: string) => {
    setActiveQuestion(question);
  };

  const copyQuestion = async () => {
    if (!activeQuestion || !navigator.clipboard) return;
    await navigator.clipboard.writeText(activeQuestion);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="editorial-portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        .editorial-portfolio {
          --ink: #222c26;
          --muted: #647067;
          --line: #d9ded5;
          --paper: #f4f3ec;
          --paper-deep: #ebece3;
          --green: #315b49;
          --green-2: #567965;
          --orange: #bf6243;
          color: var(--ink);
          background: var(--paper);
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }
        .editorial-portfolio * { box-sizing: border-box; }
        .ep-wrap { max-width: 1180px; width: calc(100% - 88px); margin: 0 auto; }
        .ep-topline { height: 62px; border-bottom: 1px solid var(--line); display:flex; align-items:center; justify-content:space-between; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#59675d; }
        .ep-mark { display:flex; align-items:center; gap:10px; font-weight:700; color:var(--ink); letter-spacing:.09em; }
        .ep-mark-icon { width:24px;height:24px;border:1px solid var(--green);border-radius:50%;display:grid;place-items:center;font:italic 15px 'Instrument Serif',serif;color:var(--green); }
        .ep-nav { display:flex; align-items:center; gap:30px; }
        .ep-nav a { color:inherit;text-decoration:none;transition:color .18s ease; }
        .ep-nav a:hover,.ep-nav a:focus-visible { color:var(--orange); }
        .ep-nav-contact { border:1px solid #9ca89d;padding:9px 14px;border-radius:3px; }
        .ep-hero { position:relative;padding:88px 0 78px;display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:68px;align-items:end; }
        .ep-kicker,.ep-section-index { font:11px 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--green-2); }
        .ep-hero h1 { font:clamp(68px,9vw,120px)/.83 'Instrument Serif',serif;font-weight:400;letter-spacing:-.055em;margin:27px 0 25px;max-width:790px; }
        .ep-hero h1 em { font-weight:400;color:var(--green); }
        .ep-intro { font-size:18px;line-height:1.65;max-width:620px;color:#4b574e;margin:0; }
        .ep-intro strong {color:var(--ink);font-weight:600;}
        .ep-hero-aside { border-top:1px solid #aeb8ad;padding-top:18px;align-self:end;margin-bottom:6px; }
        .ep-years { font:54px/.9 'Instrument Serif',serif;color:var(--green);letter-spacing:-.03em; }
        .ep-years-caption { margin:10px 0 21px;color:var(--muted);font-size:12px;letter-spacing:.09em;text-transform:uppercase; }
        .ep-location { border-top:1px solid var(--line);padding-top:16px;display:flex;justify-content:space-between;font-size:13px; }
        .ep-location span:first-child { color:var(--muted); }
        .ep-hero-links { display:flex;gap:12px;margin-top:28px;flex-wrap:wrap; }
        .ep-btn { display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 16px;border:1px solid var(--green);color:var(--green);background:transparent;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.02em;border-radius:2px;cursor:pointer;transition:background .18s ease,color .18s ease,transform .18s ease; }
        .ep-btn:hover { background:var(--green);color:#f4f3ec;transform:translateY(-1px); }
        .ep-btn-primary { background:var(--green);color:#f4f3ec; }
        .ep-btn-primary:hover { background:#254638; }
        .ep-btn:focus-visible,.ep-question:focus-visible,.ep-nav a:focus-visible { outline:3px solid #c46c4c;outline-offset:3px; }
        .ep-scroll { display:flex;align-items:center;gap:10px;margin-top:48px;color:#657169;font:10px 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase; }
        .ep-scroll-line { width:36px;height:1px;background:#9aa69a; }
        .ep-band { background:#e8ebe2;border-top:1px solid #d9ded5;border-bottom:1px solid #d9ded5; }
        .ep-proof-head { display:flex;justify-content:space-between;align-items:end;padding:72px 0 30px; }
        .ep-proof-head h2,.ep-chapter-heading h2,.ep-skills-title { font:52px/.95 'Instrument Serif',serif;font-weight:400;letter-spacing:-.035em;margin:13px 0 0; }
        .ep-proof-head p { max-width:265px;font-size:13px;line-height:1.6;color:var(--muted);margin:0 0 3px; }
        .ep-proof-list { border-top:1px solid #bfc8bd; }
        .ep-proof { display:grid;grid-template-columns:66px 1fr 54px;gap:20px;align-items:center;padding:25px 0 27px;border-bottom:1px solid #cbd2c8; }
        .ep-proof-number { align-self:start;padding-top:7px;color:#879188;font:11px 'DM Mono',monospace; }
        .ep-proof-main { display:grid;grid-template-columns:minmax(210px,.9fr) minmax(0,1.1fr);gap:34px;align-items:center; }
        .ep-proof-title { font:26px/1.04 'Instrument Serif',serif;letter-spacing:-.015em;margin:0; }
        .ep-proof-label { display:block;color:var(--green);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px; }
        .ep-proof-detail { margin:0;font-size:13px;line-height:1.6;color:#58645b;max-width:470px; }
        .ep-proof-icon { width:42px;height:42px;border:1px solid #c0cbbf;border-radius:50%;display:grid;place-items:center;color:var(--green); }
        .ep-story { padding:88px 0 83px;display:grid;grid-template-columns: .75fr 1.35fr;gap:90px; }
        .ep-chapter-heading h2 {font-size:46px;max-width:310px;}
        .ep-chapter-heading p {color:var(--muted);font-size:14px;line-height:1.65;max-width:290px;margin-top:19px;}
        .ep-career { border-left:1px solid #bdc7bb;padding-left:29px;position:relative; }
        .ep-career:before {content:"";position:absolute;width:7px;height:7px;background:var(--orange);border-radius:50%;left:-4px;top:7px;}
        .ep-current { padding:0 0 31px; }
        .ep-role-top {display:flex;justify-content:space-between;gap:20px;align-items:baseline;}
        .ep-company { font:31px/1 'Instrument Serif',serif; }
        .ep-dates {font:10px 'DM Mono',monospace;letter-spacing:.04em;color:#67746a;white-space:nowrap;}
        .ep-role-title {font-size:13px;font-weight:700;margin:10px 0 12px;color:var(--green);}
        .ep-role-copy {font-size:13px;line-height:1.65;color:#59645b;margin:0;max-width:600px;}
        .ep-mentorship { margin-top:16px;padding:12px 15px;background:#e8ebe2;border-left:2px solid #7f9a81;font-size:12px;line-height:1.55;color:#59645b; }
        .ep-mentorship strong {color:var(--ink);}
        .ep-vymo {padding:0 0 29px;border-bottom:1px solid var(--line);}
        .ep-vymo .ep-role-copy {max-width:570px;}
        .ep-earlier {padding-top:22px;}
        .ep-earlier-label {font:10px 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#758077;margin:0 0 13px;}
        .ep-earlier-row {display:flex;justify-content:space-between;gap:12px;border-top:1px solid #e0e2db;padding:9px 0;font-size:12px;}
        .ep-earlier-row span:last-child {font:10px 'DM Mono',monospace;color:#78827a;white-space:nowrap;}
        .ep-skills-section {background:#e6e9e1;padding:72px 0 78px;border-top:1px solid var(--line);}
        .ep-skills-head {display:flex;justify-content:space-between;align-items:end;margin-bottom:28px;}
        .ep-skills-head p {font-size:13px;color:var(--muted);margin:0;max-width:280px;line-height:1.55;}
        .ep-skill-grid {display:grid;grid-template-columns:1fr 1fr;column-gap:68px;border-top:1px solid #bec7bc;}
        .ep-skill-group {padding:21px 0 22px;border-bottom:1px solid #cbd2c8;}
        .ep-skill-group:last-child {grid-column:1 / -1;}
        .ep-skill-group h3 {font:11px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.09em;color:var(--green);margin:0 0 13px;}
        .ep-tags {display:flex;flex-wrap:wrap;gap:7px;}
        .ep-tag {font-size:11px;color:#465349;border:1px solid #c3cbc0;background:rgba(247,247,240,.57);padding:6px 9px;border-radius:2px;}
        .ep-fit {padding:78px 0 80px;display:grid;grid-template-columns:.7fr 1.3fr;gap:80px;}
        .ep-fit h2 {font:44px/.97 'Instrument Serif',serif;margin:14px 0 0;letter-spacing:-.025em;}
        .ep-fit-content {border-top:1px solid #b7c2b6;padding-top:20px;}
        .ep-fit-content p {font:24px/1.35 'Instrument Serif',serif;margin:0 0 19px;max-width:700px;}
        .ep-fit-content span {font-size:12px;color:var(--muted);line-height:1.6;display:block;max-width:630px;}
        .ep-footer {background:#315b49;color:#eff0e6;padding:58px 0 28px;}
        .ep-footer-top {display:flex;justify-content:space-between;gap:30px;align-items:end;padding-bottom:38px;}
        .ep-footer h2 {font:50px/.94 'Instrument Serif',serif;font-weight:400;margin:11px 0 0;max-width:520px;letter-spacing:-.03em;}
        .ep-footer .ep-section-index {color:#c3d1be;}
        .ep-footer-ctas {display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end;}
        .ep-footer .ep-btn {border-color:#a7bba8;color:#eff0e6;}
        .ep-footer .ep-btn:hover {background:#eff0e6;color:#315b49;}
        .ep-footer .ep-btn-primary {background:#eff0e6;color:#315b49;border-color:#eff0e6;}
        .ep-footer-bottom {border-top:1px solid #66816e;padding-top:15px;display:flex;justify-content:space-between;font:10px 'DM Mono',monospace;letter-spacing:.05em;color:#cad5c8;}
        .ep-assistant {position:fixed;right:24px;bottom:22px;width:min(354px,calc(100vw - 32px));z-index:20;background:#f8f7f0;border:1px solid #cbd3c8;box-shadow:0 15px 45px rgba(37,55,42,.17);border-radius:5px;overflow:hidden;}
        .ep-assistant-head {background:#315b49;color:#eff0e6;padding:13px 15px;display:flex;align-items:center;justify-content:space-between;}
        .ep-assistant-brand {display:flex;align-items:center;gap:9px;font-size:12px;font-weight:600;}
        .ep-assistant-brand small {display:block;font-size:9px;font-weight:400;opacity:.75;margin-top:2px;}
        .ep-assistant-symbol {width:28px;height:28px;border:1px solid #8eaa95;border-radius:50%;display:grid;place-items:center;}
        .ep-assistant-close {background:transparent;border:0;color:inherit;padding:5px;cursor:pointer;border-radius:2px;}
        .ep-assistant-close:hover {background:rgba(255,255,255,.12);}
        .ep-assistant-body {padding:14px 15px 15px;}
        .ep-assistant-intro {font:16px/1.25 'Instrument Serif',serif;margin:0 0 10px;}
        .ep-assistant-response {font-size:11px;line-height:1.5;color:#66736a;margin:0 0 12px;}
        .ep-question-list {display:flex;flex-wrap:wrap;gap:6px;}
        .ep-question {display:flex;align-items:center;gap:5px;text-align:left;padding:6px 8px;background:#eff1e9;border:1px solid #d9ded5;border-radius:3px;font:10px 'DM Sans',sans-serif;color:#405348;cursor:pointer;}
        .ep-question:hover,.ep-question[aria-pressed="true"] {background:#dfe8dd;border-color:#9db29d;}
        .ep-assistant-compose {display:flex;margin-top:11px;border-top:1px solid #e0e4db;padding-top:10px;gap:8px;align-items:center;}
        .ep-assistant-compose span {font-size:10px;color:#7d877e;flex:1;}
        .ep-copy {background:transparent;border:0;color:#4e6e58;cursor:pointer;padding:5px;display:grid;place-items:center;}
        .ep-contact-modal {position:fixed;inset:0;z-index:50;background:rgba(28,39,31,.4);display:grid;place-items:center;padding:20px;}
        .ep-contact-card {position:relative;width:min(420px,100%);background:var(--paper);padding:34px;border:1px solid #cbd3c8;box-shadow:0 18px 60px rgba(28,39,31,.2);}
        .ep-contact-card h2 {font:34px 'Instrument Serif',serif;margin:14px 0 9px;}
        .ep-contact-card p {font-size:13px;line-height:1.6;color:var(--muted);margin:0;}
        .ep-modal-close {position:absolute;right:14px;top:14px;background:transparent;border:0;color:var(--muted);cursor:pointer;padding:7px;}
        @media (max-width:760px) {
          .ep-wrap {width:calc(100% - 38px);}
          .ep-topline {height:56px;}
          .ep-nav {gap:14px;}
          .ep-nav a:not(.ep-nav-contact) {display:none;}
          .ep-hero {padding:62px 0 52px;grid-template-columns:1fr;gap:38px;}
          .ep-hero h1 {font-size:clamp(64px,17vw,100px);}
          .ep-intro {font-size:16px;}
          .ep-hero-aside {max-width:420px;display:grid;grid-template-columns:1fr 1fr;gap:0 24px;}
          .ep-years {grid-column:1 / -1;}
          .ep-years-caption {grid-column:1 / -1;}
          .ep-location {grid-column:1 / -1;}
          .ep-scroll {margin-top:28px;}
          .ep-proof-head {display:block;padding:53px 0 24px;}
          .ep-proof-head h2,.ep-chapter-heading h2,.ep-skills-title {font-size:43px;}
          .ep-proof-head p {margin-top:14px;}
          .ep-proof {grid-template-columns:34px 1fr;gap:12px;padding:21px 0;}
          .ep-proof-main {grid-template-columns:1fr;gap:10px;}
          .ep-proof-title {font-size:23px;}
          .ep-proof-icon {display:none;}
          .ep-story {padding:60px 0;grid-template-columns:1fr;gap:34px;}
          .ep-chapter-heading h2 {max-width:400px;}
          .ep-chapter-heading p {max-width:460px;}
          .ep-career {margin-left:2px;padding-left:20px;}
          .ep-company {font-size:27px;}
          .ep-role-top {align-items:flex-start;flex-direction:column;gap:5px;}
          .ep-skills-section {padding:55px 0 60px;}
          .ep-skills-head {display:block;}
          .ep-skills-head p {margin-top:13px;}
          .ep-skill-grid {grid-template-columns:1fr;column-gap:0;}
          .ep-skill-group:last-child {grid-column:auto;}
          .ep-fit {padding:58px 0;grid-template-columns:1fr;gap:27px;}
          .ep-fit h2 {font-size:39px;}
          .ep-fit-content p {font-size:21px;}
          .ep-footer {padding:48px 0 22px;}
          .ep-footer-top {display:block;}
          .ep-footer h2 {font-size:44px;}
          .ep-footer-ctas {justify-content:flex-start;margin-top:25px;}
          .ep-footer-bottom {gap:10px;flex-direction:column;}
          .ep-assistant {right:12px;bottom:12px;width:min(354px,calc(100vw - 24px));}
        }
        @media (prefers-reduced-motion:reduce) {
          .editorial-portfolio *, .editorial-portfolio *::before, .editorial-portfolio *::after {transition:none !important;scroll-behavior:auto !important;}
        }
      `}</style>

      <header className="ep-wrap ep-topline">
        <a className="ep-mark" href="#top" aria-label="Bhavik Sadiwala, home">
          <span className="ep-mark-icon">B</span>
          <span>Bhavik Sadiwala</span>
        </a>
        <nav className="ep-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Practice</a>
          <a className="ep-nav-contact" href="#contact">Get in touch <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <section className="ep-wrap ep-hero" id="top">
        <div>
          <div className="ep-kicker">An engineering profile · Bengaluru, India</div>
          <h1>Making AI<br />feel <em>at home</em><br />on mobile.</h1>
          <p className="ep-intro">
            I’m <strong>Bhavik Sadiwala</strong>, a Staff Android Engineer. For 14 years, I’ve worked at the point where dependable mobile architecture meets the real needs of the people using it.
          </p>
          <div className="ep-hero-links">
            <a className="ep-btn ep-btn-primary" href="#work">Read the work <ArrowDownRight size={15} /></a>
            <button className="ep-btn" onClick={downloadResume} type="button">Download resume <Download size={14} /></button>
          </div>
          <div className="ep-scroll"><span className="ep-scroll-line" /> A closer look at the work <ArrowDown size={12} /></div>
        </div>
        <aside className="ep-hero-aside" aria-label="Profile at a glance">
          <div className="ep-years">14 years</div>
          <div className="ep-years-caption">Android engineering</div>
          <div className="ep-location"><span>Based in</span><strong>Bengaluru, India</strong></div>
        </aside>
      </section>

      <section className="ep-band" id="work">
        <div className="ep-wrap">
          <div className="ep-proof-head">
            <div>
              <div className="ep-section-index">01 / Selected work · Procore</div>
              <h2>Ideas, in production.</h2>
            </div>
            <p>Five examples of practical AI meeting the everyday realities of mobile product and engineering teams.</p>
          </div>
          <div className="ep-proof-list">
            {proofPoints.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`ep-proof ep-${project.tint}`} key={project.number}>
                  <span className="ep-proof-number">{project.number}</span>
                  <div className="ep-proof-main">
                    <h3 className="ep-proof-title">{project.title}</h3>
                    <div>
                      <span className="ep-proof-label">{project.label}</span>
                      <p className="ep-proof-detail">{project.detail}</p>
                    </div>
                  </div>
                  <span className="ep-proof-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.6} /></span>
                </article>
              );
            })}
          </div>
          <div style={{ padding: "22px 0 42px", fontSize: 12, color: "#657169", display: "flex", gap: 9, alignItems: "center" }}>
            <BriefcaseBusiness size={14} /> Staff Engineer Android · Procore · Aug 2024–present
          </div>
        </div>
      </section>

      <section className="ep-wrap ep-story" id="experience">
        <div className="ep-chapter-heading">
          <div className="ep-section-index">02 / Career, in chapters</div>
          <h2>Long-lived systems. Growing teams.</h2>
          <p>A career across Android product development, technical leadership, and the craft of helping teams do their best work.</p>
        </div>
        <div className="ep-career">
          <article className="ep-current">
            <div className="ep-role-top">
              <span className="ep-company">Procore</span>
              <span className="ep-dates">AUG 2024 — PRESENT</span>
            </div>
            <div className="ep-role-title">Staff Engineer Android</div>
            <p className="ep-role-copy">Building practical AI experiences for mobile, and engineering tools that bring AI into the team’s development workflow.</p>
            <div className="ep-mentorship"><strong>Investing in the next layer of craft.</strong> Mentored Kotlin Coroutines, Flow, and Jetpack Compose.</div>
          </article>
          <article className="ep-vymo">
            <div className="ep-role-top">
              <span className="ep-company">Vymo</span>
              <span className="ep-dates">AUG 2019 — AUG 2024</span>
            </div>
            <div className="ep-role-title">Principal Engineer Android</div>
            <p className="ep-role-copy">Technical lead on a sales-assistant app with 1M+ downloads.</p>
          </article>
          <div className="ep-earlier">
            <p className="ep-earlier-label">Earlier chapters</p>
            {earlierRoles.map(([company, dates]) => (
              <div className="ep-earlier-row" key={company}><span>{company}</span><span>{dates}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-skills-section" id="skills">
        <div className="ep-wrap">
          <div className="ep-skills-head">
            <div>
              <div className="ep-section-index">03 / The working toolkit</div>
              <h2 className="ep-skills-title">Breadth with a center.</h2>
            </div>
            <p>A scannable map of the platforms, patterns, and tools used across the work.</p>
          </div>
          <div className="ep-skill-grid">
            {skillGroups.map((group) => (
              <section className="ep-skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="ep-tags">
                  {group.tags.map((tag) => <span className="ep-tag" key={tag}>{tag}</span>)}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-wrap ep-fit">
        <div>
          <div className="ep-section-index">04 / Role fit</div>
          <h2>A useful lens<br />for the next<br />hard problem.</h2>
        </div>
        <div className="ep-fit-content">
          <p>Mobile foundations that teams can trust. AI features that solve a real workflow. And the technical leadership to bring both into production.</p>
          <span>Experience spans Android architecture, production mobile applications, AI-powered project-data queries, multilingual voice support, PR review automation, and developer productivity.</span>
        </div>
      </section>

      <footer className="ep-footer" id="contact">
        <div className="ep-wrap">
          <div className="ep-footer-top">
            <div>
              <div className="ep-section-index">Continue the conversation</div>
              <h2>Let’s talk about what good mobile AI looks like.</h2>
            </div>
            <div className="ep-footer-ctas">
              <button className="ep-btn ep-btn-primary" onClick={() => setShowContactNote(true)} type="button">LinkedIn <ArrowUpRight size={13} /></button>
              <button className="ep-btn" onClick={() => setShowContactNote(true)} type="button">Book a call <ArrowUpRight size={13} /></button>
              <button className="ep-btn" onClick={() => setShowContactNote(true)} type="button">Email <ArrowUpRight size={13} /></button>
              <button className="ep-btn" onClick={downloadResume} type="button">Resume <Download size={13} /></button>
            </div>
          </div>
          <div className="ep-footer-bottom">
            <span>Bhavik Sadiwala · Staff Android Engineer</span>
            <span>Bengaluru, India</span>
            <a href="#top" style={{ color: "inherit", textDecoration: "none" }}>Back to top ↑</a>
          </div>
        </div>
      </footer>

      <aside className="ep-assistant" aria-label="Virtual ambassador">
        <div className="ep-assistant-head">
          <div className="ep-assistant-brand">
            <span className="ep-assistant-symbol"><Bot size={15} /></span>
            <span>Bhavik’s virtual ambassador<small>Explore the work and approach</small></span>
          </div>
          <button className="ep-assistant-close" type="button" aria-label="Clear ambassador question" onClick={() => setActiveQuestion("")}><X size={15} /></button>
        </div>
        <div className="ep-assistant-body">
          <p className="ep-assistant-intro">{activeQuestion ? "A good place to start." : "What would you like to know?"}</p>
          <p className="ep-assistant-response">
            {activeQuestion
              ? `You asked: “${activeQuestion}” Explore the selected work and experience above for the verified details.`
              : "Choose a question to explore a specific part of Bhavik’s engineering profile."}
          </p>
          <div className="ep-question-list">
            {starters.map((question) => (
              <button className="ep-question" type="button" key={question} aria-pressed={activeQuestion === question} onClick={() => answerQuestion(question)}>
                {question} <ArrowRight size={11} />
              </button>
            ))}
          </div>
          {activeQuestion && (
            <div className="ep-assistant-compose">
              <span>Static portfolio preview · answers reflect the content on this page</span>
              <button className="ep-copy" type="button" aria-label={copied ? "Question copied" : "Copy selected question"} onClick={copyQuestion}>{copied ? <Check size={14} /> : <Copy size={14} />}</button>
              <Send size={13} color="#6e8872" aria-hidden="true" />
            </div>
          )}
        </div>
      </aside>

      {showContactNote && (
        <div className="ep-contact-modal" role="presentation" onClick={() => setShowContactNote(false)}>
          <section className="ep-contact-card" role="dialog" aria-modal="true" aria-labelledby="contact-note-title" onClick={(event) => event.stopPropagation()}>
            <button className="ep-modal-close" type="button" aria-label="Close" onClick={() => setShowContactNote(false)}><X size={17} /></button>
            <div className="ep-section-index">Contact details</div>
            <h2 id="contact-note-title">A verified link is needed.</h2>
            <p>LinkedIn, booking, and email destinations were not included in the supplied profile details. Add verified URLs to connect these actions.</p>
          </section>
        </div>
      )}
    </main>
  );
}

export default EditorialPortfolio;
