import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Mobile Assistant",
    tag: "AI · PRODUCT",
    icon: Search,
    description:
      "An AI-powered mobile assistant that lets teams ask natural-language questions of their project data.",
    note: "Project data, made conversational.",
    tone: "lime",
  },
  {
    number: "02",
    title: "VAPI voice agent",
    tag: "VOICE · SUPPORT",
    icon: Mic2,
    description:
      "A multilingual voice agent built with VAPI to support customers in 10+ languages.",
    note: "Support across 10+ languages.",
    tone: "orange",
  },
  {
    number: "03",
    title: "Code Guardian",
    tag: "AI · ENGINEERING",
    icon: ShieldCheck,
    description:
      "An AI PR-review agent that brings an extra layer of code review into the development workflow.",
    note: "An AI agent in the review loop.",
    tone: "blue",
  },
  {
    number: "04",
    title: "Figma Code Connect",
    tag: "DESIGN SYSTEMS",
    icon: Network,
    description:
      "Connected Figma components with code to help engineers move from design to implementation.",
    note: "70% less component implementation time.",
    tone: "pink",
  },
  {
    number: "05",
    title: "AI development tools",
    tag: "TEAM ENABLEMENT",
    icon: Sparkles,
    description:
      "Introduced AI development tools into team workflows and mentored engineers on Kotlin Coroutines, Flow and Jetpack Compose.",
    note: "40% improvement in team productivity.",
    tone: "sand",
  },
];

const skillGroups = [
  {
    label: "Android & languages",
    skills: ["Kotlin", "Java", "Android SDK", "XML", "Jetpack Compose", "Coroutines", "Flow", "RxJava"],
  },
  {
    label: "Architecture",
    skills: ["MVVM", "MVP", "Clean Architecture", "Hilt", "Dagger", "Repository Pattern"],
  },
  {
    label: "Data & networking",
    skills: ["Retrofit", "OkHttp", "Room", "Firebase", "SQLite", "REST APIs"],
  },
  {
    label: "Quality & delivery",
    skills: ["JUnit", "Mockito", "MockK", "Espresso", "LeakCanary", "Git", "GitHub", "Jenkins", "Gradle", "ProGuard", "R8"],
  },
  {
    label: "Product collaboration",
    skills: ["Figma", "JIRA", "Confluence", "Glide", "Coil"],
  },
  {
    label: "Applied AI",
    skills: ["Cursor", "GitHub Copilot", "Augment Code", "Gemini", "ChatGPT", "AI agent development in Python", "Make", "n8n"],
  },
];

const experience = [
  { company: "Procore", title: "Staff Engineer, Android", dates: "Aug 2024 — Present", current: true },
  { company: "Vymo", title: "Principal Engineer, Android", dates: "Aug 2019 — Aug 2024", detail: "Technical lead on a sales-assistant app with 1M+ downloads." },
  { company: "GlobalLogic", title: "Android Engineer", dates: "May 2018 — Jul 2019" },
  { company: "DEV Information Technology", title: "Android Engineer", dates: "Feb 2016 — May 2018" },
  { company: "BigBang Innovations", title: "Android Engineer", dates: "Mar 2015 — Feb 2016" },
  { company: "Webplanex", title: "Android Engineer", dates: "Oct 2013 — Mar 2015" },
  { company: "Tristate Technology", title: "Android Engineer", dates: "Sep 2012 — Oct 2013" },
];

const prompts = [
  "What has Bhavik shipped with AI?",
  "How does he improve team productivity?",
  "What is his Android leadership experience?",
  "Which technologies does he work with?",
];

const answers: Record<string, string> = {
  [prompts[0]]:
    "At Procore, Bhavik has worked on an AI-powered Mobile Assistant for natural-language project-data queries, a multilingual VAPI support voice agent in 10+ languages, and Code Guardian, an AI PR-review agent.",
  [prompts[1]]:
    "Figma Code Connect reduced component implementation time by 70%. AI development tools improved team productivity by 40%. He also mentored engineers in Kotlin Coroutines, Flow and Jetpack Compose.",
  [prompts[2]]:
    "Bhavik brings 14 years of Android experience. He is Staff Engineer, Android at Procore (Aug 2024–present) and was Principal Engineer, Android at Vymo (Aug 2019–Aug 2024), where he was technical lead on a sales-assistant app with 1M+ downloads.",
  [prompts[3]]:
    "His toolkit spans Kotlin, Java, Android SDK, Jetpack Compose, Coroutines, Flow, RxJava, Android architecture, testing, delivery, and applied AI tools including Cursor, GitHub Copilot, Augment Code, Gemini and ChatGPT.",
};

function ImpactBrief() {
  const [ambassadorOpen, setAmbassadorOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const downloadResume = () => {
    const lines = [
      "Bhavik Sadiwala — Staff Android Engineer",
      "Bengaluru, India | 14 years of Android experience",
      "",
      ...experience.map((item) => `${item.company} — ${item.title} (${item.dates})${item.detail ? `\n${item.detail}` : ""}`),
      "",
      "Selected impact",
      ...projects.map((project) => `${project.title}: ${project.description} ${project.note}`),
      "",
      "Skills",
      ...skillGroups.map((group) => `${group.label}: ${group.skills.join(", ")}`),
    ].join("\n");
    const blob = new Blob([lines], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Bhavik-Sadiwala-Resume.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const openContact = (kind: string) => {
    setCopied(false);
    setContactOpen(true);
    setSelectedQuestion(kind);
  };

  return (
    <main className="impact-brief">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .impact-brief {
          --paper: #f3f1e9;
          --paper-raised: #fbfaf5;
          --ink: #1b2b29;
          --muted: #64716b;
          --line: #d9ddd2;
          --green: #164c3c;
          --bright: #c9f264;
          --orange: #f17a4b;
          min-height: 100vh; background: var(--paper); color: var(--ink);
          font-family: 'DM Sans', sans-serif; overflow: hidden; position: relative;
        }
        .impact-brief * { box-sizing: border-box; }
        .impact-brief button, .impact-brief a { font: inherit; }
        .impact-brief button:focus-visible, .impact-brief a:focus-visible { outline: 3px solid #e4663e; outline-offset: 4px; }
        .impact-shell { max-width: 1192px; padding: 0 38px; margin: 0 auto; }
        .impact-topbar { height: 72px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; }
        .impact-brand { display: flex; align-items: center; gap: 11px; color: var(--ink); text-decoration: none; font: 800 14px 'Manrope', sans-serif; letter-spacing: -.035em; }
        .impact-mark { width: 27px; height: 27px; border-radius: 8px 8px 8px 2px; background: var(--green); color: var(--bright); display: grid; place-items: center; font: 800 12px 'DM Mono', monospace; }
        .impact-nav { display: flex; align-items: center; gap: 28px; }
        .impact-nav a { text-decoration: none; color: #586760; font-size: 12px; font-weight: 600; transition: color .18s; }
        .impact-nav a:hover { color: var(--green); }
        .top-resume { border: 1px solid #b8c1b6; background: transparent; color: var(--ink); border-radius: 999px; padding: 10px 15px; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-size: 11px!important; font-weight: 700!important; }
        .top-resume:hover { background: var(--green); border-color: var(--green); color: white!important; }
        .hero { padding: 61px 0 47px; display: grid; grid-template-columns: minmax(0,1fr) 286px; gap: 60px; align-items: end; }
        .eyebrow { font: 500 10px 'DM Mono', monospace; letter-spacing: .12em; color: var(--green); text-transform: uppercase; display: flex; align-items: center; gap: 10px; }
        .eyebrow:before { content: ''; width: 22px; height: 1px; background: var(--orange); }
        .hero h1 { font: 800 clamp(46px, 6.1vw, 78px)/.99 'Manrope', sans-serif; letter-spacing: -.075em; margin: 18px 0 14px; max-width: 770px; }
        .hero h1 span { color: var(--green); }
        .hero-sub { font: 500 17px/1.55 'Manrope', sans-serif; color: #52615b; max-width: 595px; letter-spacing: -.025em; }
        .hero-sub strong { color: var(--ink); font-weight: 700; }
        .hero-side { border-left: 1px solid #cdd4c9; padding: 5px 0 4px 24px; }
        .hero-side .stat { display: flex; align-items: baseline; gap: 9px; }
        .hero-side .stat strong { font: 800 67px/.9 'Manrope', sans-serif; letter-spacing: -.09em; color: var(--green); }
        .hero-side .stat span { font: 500 10px 'DM Mono', monospace; letter-spacing: .09em; text-transform: uppercase; color: var(--muted); }
        .hero-side p { color: var(--muted); font-size: 12px; line-height: 1.55; margin: 12px 0 17px; max-width: 205px; }
        .location { display: flex; gap: 7px; align-items: center; font: 500 11px 'DM Mono', monospace; color: #52615b; }
        .hero-actions { display: flex; align-items: center; gap: 10px; margin-top: 27px; flex-wrap: wrap; }
        .btn-primary, .btn-outline { text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 7px; padding: 12px 16px; font-weight: 700!important; font-size: 12px!important; cursor: pointer; transition: transform .18s, background .18s, color .18s; }
        .btn-primary { background: var(--green); color: #f7f8ec; border: 1px solid var(--green); }
        .btn-primary:hover, .btn-outline:hover { transform: translateY(-2px); }
        .btn-outline { background: transparent; color: var(--ink); border: 1px solid #c4cdc2; }
        .btn-outline:hover { background: #e7eadd; }
        .signal-strip { background: var(--green); color: #f4f4e8; display: grid; grid-template-columns: 1.12fr 1fr 1fr 1fr; border-radius: 10px; overflow: hidden; }
        .signal-intro { padding: 19px 22px; display: flex; flex-direction: column; justify-content: center; }
        .signal-intro span { color: #c8d7ca; font: 500 9px 'DM Mono', monospace; letter-spacing: .14em; text-transform: uppercase; }
        .signal-intro strong { font: 700 16px/1.25 'Manrope', sans-serif; margin-top: 7px; letter-spacing: -.035em; }
        .signal-metric { border-left: 1px solid rgba(255,255,255,.2); padding: 17px 18px; display: flex; flex-direction: column; justify-content: center; }
        .signal-metric strong { color: var(--bright); font: 800 29px/1 'Manrope', sans-serif; letter-spacing: -.07em; }
        .signal-metric span { font-size: 11px; color: #dde5d8; margin-top: 8px; line-height: 1.3; }
        .section { padding: 72px 0; }
        .section-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 24px; }
        .section-kicker { font: 500 10px 'DM Mono', monospace; color: #6a776f; letter-spacing: .12em; text-transform: uppercase; }
        .section-head h2 { font: 800 34px/1.04 'Manrope', sans-serif; letter-spacing: -.065em; margin: 9px 0 0; }
        .section-head p { color: var(--muted); font-size: 12px; margin: 0 0 4px; max-width: 245px; text-align: right; line-height: 1.5; }
        .proof-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .proof-card { min-height: 176px; border: 1px solid var(--line); background: var(--paper-raised); border-radius: 9px; padding: 19px 21px 18px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; transition: transform .2s, border-color .2s; }
        .proof-card:hover { transform: translateY(-3px); border-color: #9ba99b; }
        .proof-card:first-child { grid-column: span 2; min-height: 190px; background: #e9eddf; }
        .proof-card:nth-child(5) { background: #ece9dc; }
        .proof-top { display: flex; align-items: center; justify-content: space-between; }
        .proof-id { display: flex; align-items: center; gap: 10px; color: #69756e; font: 500 10px 'DM Mono', monospace; }
        .proof-icon { width: 30px; height: 30px; background: var(--green); color: var(--bright); display: grid; place-items: center; border-radius: 7px; }
        .proof-card:nth-child(2) .proof-icon { background: #e6d4c7; color: #813d21; }
        .proof-card:nth-child(3) .proof-icon { background: #d9e6de; color: #245540; }
        .proof-card:nth-child(4) .proof-icon { background: #e5dfe9; color: #604b69; }
        .proof-card:nth-child(5) .proof-icon { background: #ead9c1; color: #72502d; }
        .proof-card .tag { font: 500 9px 'DM Mono', monospace; letter-spacing: .1em; color: #6b776f; }
        .proof-card h3 { font: 700 21px/1.12 'Manrope', sans-serif; letter-spacing: -.05em; margin: 16px 0 6px; }
        .proof-card p { font-size: 12px; line-height: 1.55; color: #596760; margin: 0; max-width: 600px; }
        .proof-note { color: var(--green); font: 700 11px 'DM Sans', sans-serif; margin-top: 15px; display: flex; align-items: center; gap: 7px; }
        .proof-note:before { content:''; width: 5px; height: 5px; border-radius: 50%; background: var(--orange); }
        .brief-band { background: #e2e7da; border-radius: 10px; padding: 26px 28px; display: grid; grid-template-columns: 1fr 1.18fr; gap: 36px; align-items: center; }
        .brief-band h2 { font: 800 29px/1.05 'Manrope', sans-serif; letter-spacing: -.065em; margin: 10px 0 10px; }
        .brief-band p { font-size: 12px; color: #5b6961; line-height: 1.6; margin: 0; max-width: 375px; }
        .brief-points { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 17px; }
        .brief-point { display: flex; gap: 9px; align-items: flex-start; font-size: 11px; color: #45564d; line-height: 1.45; }
        .brief-point svg { flex: 0 0 auto; color: var(--green); margin-top: 1px; }
        .lower-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 62px; }
        .timeline { border-top: 1px solid var(--line); }
        .role { display: grid; grid-template-columns: 112px 1fr; gap: 15px; padding: 15px 0; border-bottom: 1px solid var(--line); }
        .role-date { font: 500 9px/1.5 'DM Mono', monospace; color: #748078; padding-top: 3px; }
        .role-main { display: flex; justify-content: space-between; gap: 10px; align-items: start; }
        .role h3 { font: 700 14px 'Manrope', sans-serif; letter-spacing: -.03em; margin: 0; }
        .role p { font-size: 11px; color: #6b766f; margin: 4px 0 0; line-height: 1.5; }
        .current-pill { background: var(--bright); border-radius: 99px; padding: 5px 8px; color: #31513c; font: 500 8px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .07em; white-space: nowrap; }
        .skill-groups { border-top: 1px solid var(--line); }
        .skill-group { padding: 14px 0 13px; border-bottom: 1px solid var(--line); }
        .skill-group h3 { font: 600 10px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .08em; color: #66746c; margin: 0 0 9px; }
        .skill-chips { display: flex; gap: 6px; flex-wrap: wrap; }
        .skill-chip { border: 1px solid #d3d9ce; background: rgba(251,250,245,.6); padding: 5px 8px; border-radius: 5px; font-size: 10px; color: #43534b; }
        .ambassador { margin: 5px 0 60px; border-radius: 12px; background: #1d3932; color: #f2f2e8; overflow: hidden; display: grid; grid-template-columns: 1fr 1.2fr; min-height: 230px; }
        .amb-intro { padding: 27px 29px; position: relative; }
        .amb-intro:after { content:'B'; position:absolute; right:15px; bottom:-40px; font:800 190px/.8 'Manrope',sans-serif; color:rgba(255,255,255,.035); letter-spacing:-.12em; pointer-events:none; }
        .amb-label { color: var(--bright); font: 500 9px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .13em; }
        .amb-intro h2 { font: 800 25px/1.08 'Manrope', sans-serif; letter-spacing: -.06em; margin: 12px 0 8px; max-width: 270px; }
        .amb-intro p { color: #bdcec2; font-size: 11px; line-height: 1.55; max-width: 280px; margin: 0; }
        .amb-widget { background: #f5f4ec; color: var(--ink); padding: 20px; margin: 15px; border-radius: 9px; display: flex; flex-direction: column; justify-content: space-between; }
        .amb-widget-head { display: flex; gap: 9px; align-items: center; font: 700 11px 'Manrope', sans-serif; }
        .botmark { background: var(--bright); border-radius: 6px; width: 28px; height: 28px; display: grid; place-items: center; color: var(--green); }
        .online-dot { margin-left: auto; display: flex; gap: 5px; align-items: center; color: #758179; font: 500 9px 'DM Mono', monospace; }
        .online-dot:before { content:''; width: 6px; height: 6px; background: #69a47c; border-radius: 50%; }
        .amb-answer { background: white; border: 1px solid #e3e5dc; border-radius: 7px; padding: 11px 12px; font-size: 11px; color: #58665f; line-height: 1.5; margin: 13px 0; min-height: 49px; }
        .amb-prompts { display: flex; flex-wrap: wrap; gap: 6px; }
        .amb-prompts button { border: 1px solid #d6dbd1; border-radius: 99px; background: transparent; padding: 6px 9px; color: #42544b; cursor: pointer; font-size: 9px; line-height: 1.25; text-align: left; transition: background .15s; }
        .amb-prompts button:hover, .amb-prompts button[aria-pressed="true"] { background: #e7eddd; border-color: #b7c6b2; }
        .amb-foot { font-size: 9px; color: #89938b; margin-top: 10px; }
        .footer { border-top: 1px solid var(--line); padding: 22px 0 28px; display: flex; align-items: center; justify-content: space-between; color: #6e7a72; font: 500 9px 'DM Mono', monospace; }
        .footer-links { display: flex; gap: 17px; }
        .footer-links button { display: inline-flex; align-items: center; gap: 5px; background: none; border: 0; color: var(--green); font: 500 10px 'DM Mono', monospace; cursor: pointer; padding: 4px; }
        .footer-links button:hover { color: #bc5934; }
        .modal-backdrop { position: fixed; inset: 0; background: rgba(19,35,30,.38); display: grid; place-items: center; z-index: 20; padding: 20px; }
        .contact-modal { width: min(410px,100%); background: var(--paper-raised); border-radius: 12px; border: 1px solid #d7ded3; padding: 25px; box-shadow: 0 22px 80px rgba(18,35,29,.2); }
        .modal-top { display: flex; align-items: center; justify-content: space-between; }
        .modal-top h2 { font: 800 22px 'Manrope', sans-serif; letter-spacing: -.06em; margin: 0; }
        .modal-close { background: transparent; border: 0; cursor: pointer; padding: 4px; color: #56665d; }
        .contact-modal p { font-size: 12px; line-height: 1.6; color: #68756d; margin: 13px 0 19px; }
        .contact-modal .modal-note { padding: 12px; border-radius: 6px; background: #e8ede2; color: #40564a; font-size: 11px; line-height: 1.5; }
        .modal-dismiss { margin-top: 17px; width: 100%; justify-content: center; }
        @media (max-width: 760px) {
          .impact-shell { padding: 0 20px; }
          .impact-topbar { height: 62px; }
          .impact-nav { gap: 12px; }
          .impact-nav a { display: none; }
          .top-resume { padding: 9px 11px; }
          .hero { padding: 46px 0 32px; grid-template-columns: 1fr; gap: 25px; }
          .hero h1 { font-size: clamp(46px,12vw,70px); }
          .hero-side { border-left: 0; border-top: 1px solid #cdd4c9; padding: 18px 0 0; display: grid; grid-template-columns: auto 1fr; gap: 0 15px; align-items: center; }
          .hero-side .stat { grid-row: span 2; }
          .hero-side p { margin: 0 0 6px; max-width: none; }
          .location { grid-column: 2; }
          .signal-strip { grid-template-columns: 1fr 1fr; }
          .signal-intro { grid-column: span 2; }
          .signal-metric:nth-child(2) { border-left: 0; border-top: 1px solid rgba(255,255,255,.2); }
          .signal-metric:nth-child(3), .signal-metric:nth-child(4) { border-top: 1px solid rgba(255,255,255,.2); }
          .section { padding: 54px 0; }
          .section-head { align-items: start; flex-direction: column; gap: 11px; }
          .section-head p { text-align: left; }
          .proof-list { grid-template-columns: 1fr; }
          .proof-card:first-child { grid-column: auto; }
          .brief-band { grid-template-columns: 1fr; gap: 22px; padding: 23px; }
          .lower-grid { grid-template-columns: 1fr; gap: 42px; }
          .role { grid-template-columns: 98px 1fr; gap: 9px; }
          .ambassador { grid-template-columns: 1fr; }
          .amb-intro { padding: 23px; }
          .amb-widget { margin: 0 12px 12px; }
          .footer { gap: 14px; flex-direction: column; align-items: flex-start; }
        }
        @media (prefers-reduced-motion: reduce) { .impact-brief *, .impact-brief *:before, .impact-brief *:after { transition-duration: .01ms!important; scroll-behavior: auto!important; } }
      `}</style>
      <header className="impact-shell impact-topbar">
        <a className="impact-brand" href="#top" aria-label="Bhavik Sadiwala, home">
          <span className="impact-mark">BS</span>
          <span>Bhavik Sadiwala</span>
        </a>
        <nav className="impact-nav" aria-label="Main navigation">
          <a href="#proof">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <button className="top-resume" onClick={downloadResume}><ArrowDownToLine size={14} /> Resume</button>
        </nav>
      </header>

      <section className="impact-shell hero" id="top">
        <div>
          <div className="eyebrow">Staff Android Engineer · Bengaluru, India</div>
          <h1>Mobile systems.<br /><span>AI that ships.</span></h1>
          <div className="hero-sub">
            I’m <strong>Bhavik Sadiwala</strong> — a technical leader connecting dependable Android architecture with practical AI built for real teams.
          </div>
          <div className="hero-actions">
            <a className="btn-primary" href="#proof">See the work <ArrowRight size={15} /></a>
            <button className="btn-outline" onClick={downloadResume}><ArrowDownToLine size={14} /> Download resume</button>
            <button className="btn-outline" onClick={() => openContact("LinkedIn")}><Linkedin size={14} /> LinkedIn</button>
          </div>
        </div>
        <aside className="hero-side" aria-label="Experience summary">
          <div className="stat"><strong>14</strong><span>years<br />Android</span></div>
          <p>From robust mobile foundations to AI features in production workflows.</p>
          <div className="location"><MapPin size={13} /> Bengaluru, India</div>
        </aside>
      </section>

      <section className="impact-shell" aria-label="Impact at a glance">
        <div className="signal-strip">
          <div className="signal-intro"><span>Evidence, not adjectives</span><strong>Outcomes that travel<br />beyond the codebase.</strong></div>
          <div className="signal-metric"><strong>70%</strong><span>less component<br />implementation time</span></div>
          <div className="signal-metric"><strong>40%</strong><span>team productivity<br />improvement</span></div>
          <div className="signal-metric"><strong>1M+</strong><span>downloads for Vymo<br />sales-assistant app</span></div>
        </div>
      </section>

      <section className="impact-shell section" id="proof">
        <div className="section-head">
          <div><div className="section-kicker">Procore · Staff Engineer, Android · Aug 2024—present</div><h2>Proof in production.</h2></div>
          <p>Five examples of practical AI and mobile craft, in the order that best shows the work.</p>
        </div>
        <div className="proof-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`proof-card proof-${project.tone}`} key={project.number}>
                <div className="proof-top">
                  <div className="proof-id"><span>{project.number}</span><span className="proof-icon"><Icon size={16} /></span></div>
                  <span className="tag">{project.tag}</span>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="proof-note">{project.note}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="impact-shell">
        <div className="brief-band">
          <div>
            <div className="section-kicker">The role-fit read</div>
            <h2>Mobile leadership<br />with an AI delivery edge.</h2>
            <p>Builds for the realities around the feature: architecture teams can maintain, tools teams can adopt, and AI capabilities grounded in practical work.</p>
          </div>
          <div className="brief-points">
            <div className="brief-point"><Check size={15} /> 14 years focused on Android engineering</div>
            <div className="brief-point"><Check size={15} /> Staff-level role at Procore</div>
            <div className="brief-point"><Check size={15} /> Principal-level technical leadership at Vymo</div>
            <div className="brief-point"><Check size={15} /> Mentoring in Kotlin Coroutines, Flow & Compose</div>
            <div className="brief-point"><Check size={15} /> Applied AI in product and engineering workflows</div>
            <div className="brief-point"><Check size={15} /> Measured implementation and productivity gains</div>
          </div>
        </div>
      </section>

      <section className="impact-shell section">
        <div className="lower-grid">
          <div id="experience">
            <div className="section-head"><div><div className="section-kicker">A steady technical progression</div><h2>Experience</h2></div></div>
            <div className="timeline">
              {experience.map((role) => (
                <article className="role" key={role.company}>
                  <div className="role-date">{role.dates}</div>
                  <div className="role-main">
                    <div><h3>{role.company}</h3><p>{role.title}{role.detail ? ` · ${role.detail}` : ""}</p></div>
                    {role.current && <span className="current-pill">Current</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div id="skills">
            <div className="section-head"><div><div className="section-kicker">A practical toolkit</div><h2>Skills</h2></div></div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="skill-chips">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact-shell ambassador" aria-labelledby="amb-title">
        <div className="amb-intro">
          <div className="amb-label">Ask the work</div>
          <h2 id="amb-title">A virtual ambassador for the details.</h2>
          <p>Pick a prompt to get a quick, grounded briefing on Bhavik’s experience and project evidence.</p>
        </div>
        <div className="amb-widget">
          <div>
            <div className="amb-widget-head"><span className="botmark"><Bot size={16} /></span><span>Bhavik’s portfolio guide</span><span className="online-dot">Ready</span></div>
            <div className="amb-answer" aria-live="polite">
              {selectedQuestion ? answers[selectedQuestion] : "Hi. Ask me about the work, the outcomes, or the Android foundations behind it."}
            </div>
            <div className="amb-prompts">
              {prompts.map((prompt) => <button key={prompt} onClick={() => setSelectedQuestion(prompt)} aria-pressed={selectedQuestion === prompt}>{prompt}</button>)}
            </div>
          </div>
          <div className="amb-foot">Answers are based only on the experience and evidence shown here.</div>
        </div>
      </section>

      <footer className="impact-shell footer" id="contact">
        <span>Bhavik Sadiwala · Staff Android Engineer · Bengaluru, India</span>
        <div className="footer-links">
          <button onClick={() => openContact("LinkedIn")}><Linkedin size={13} /> LinkedIn <ArrowUpRight size={11} /></button>
          <button onClick={() => openContact("Book a call")}><MessageCircle size={13} /> Book a call <ArrowUpRight size={11} /></button>
          <button onClick={() => openContact("Email")}><Mail size={13} /> Email <ArrowUpRight size={11} /></button>
        </div>
      </footer>

      {contactOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false); }}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <div className="modal-top"><h2 id="contact-title">{selectedQuestion}</h2><button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close"><X size={18} /></button></div>
            <p>Contact details and verified profile links weren’t included in the supplied portfolio content, so none are guessed here.</p>
            <div className="modal-note">To keep this mockup accurate and private, add Bhavik’s confirmed {selectedQuestion === "Book a call" ? "booking link" : selectedQuestion === "Email" ? "email address" : "LinkedIn profile URL"} before publishing.</div>
            <button className="btn-primary modal-dismiss" onClick={() => setContactOpen(false)}>Understood <Check size={14} /></button>
          </section>
        </div>
      )}
    </main>
  );
}

export default ImpactBrief;
