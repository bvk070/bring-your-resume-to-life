import { useRef, useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAskAmbassador } from '@workspace/api-client-react';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ExternalLink,
  FileText,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Network,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const projects = [
  {
    id: 'mobile-assistant',
    number: '01',
    title: 'AI Mobile Assistant',
    tag: 'AI · MOBILE PRODUCT',
    icon: SearchIcon,
    problem: 'Natural-language project-data queries for construction teams.',
    contribution: 'Led development of the AI-powered Mobile Assistant.',
    tools: ['Not specified in the provided sources.'],
    outcome: 'Enables natural-language queries of project data.',
    tone: 'primary',
  },
  {
    id: 'voice-agent',
    number: '02',
    title: 'Multilingual voice agent',
    tag: 'VOICE · CUSTOMER SUPPORT',
    icon: Mic2,
    problem: 'Hands-free customer support across 10+ languages.',
    contribution: 'Developed a multilingual voice agent.',
    tools: ['VAPI', 'Real-time speech recognition', 'Natural language processing', 'Mobile app integration'],
    outcome: 'Supports customer service in 10+ languages.',
    video: {
      label: 'Watch voice agent demo',
      url: 'https://www.youtube.com/watch?v=nxWCa0OO3UI',
    },
    tone: 'voice',
  },
  {
    id: 'code-guardian',
    number: '03',
    title: 'Code Guardian',
    tag: 'AI · ENGINEERING WORKFLOW',
    icon: ShieldCheck,
    problem: 'PR reviews tailored to Procore codebase standards and best practices.',
    contribution: 'Created Code Guardian, an AI agent for tailored automated PR reviews.',
    tools: ['Not specified in the provided sources.'],
    outcome: 'Improved review efficiency; quantified results are not specified in the provided sources.',
    tone: 'guard',
  },
  {
    id: 'code-connect',
    number: '04',
    title: 'Figma Code Connect',
    tag: 'ANDROID DESIGN SYSTEM',
    icon: Network,
    problem: 'Bridge design-to-code and reduce Android component implementation time.',
    contribution: 'Implemented Figma Code Connect for the Android Design System.',
    tools: ['Figma Code Connect', 'Automated code snippet generation'],
    outcome: 'Cut component implementation time by 70%.',
    video: {
      label: 'Watch Code Connect demo',
      url: 'https://www.youtube.com/watch?v=yb9nl1HqSsU',
    },
    tone: 'design',
  },
  {
    id: 'meta-glasses',
    number: '05',
    title: 'Procore Field on Meta Glasses',
    tag: 'MOBILE · DEMO',
    icon: Smartphone,
    problem: 'Not specified in the provided sources.',
    contribution: 'Not specified in the provided sources.',
    tools: ['Not specified in the provided sources.'],
    outcome: 'Not specified in the provided sources.',
    video: {
      label: 'Watch Meta Glasses demo',
      url: 'https://www.youtube.com/watch?v=E5C0teK7pyg',
    },
    tone: 'meta',
  },
  {
    id: 'vymo',
    number: '06',
    title: 'Vymo sales-assistant app',
    tag: 'ANDROID · PRODUCT LEADERSHIP',
    icon: Layers3,
    problem: 'Not specified in the provided sources.',
    contribution: 'Led the technical aspects of a sales-assistant app; handled requirements gathering, database structure design and app architecture.',
    tools: ['Not specified in the provided sources.'],
    outcome: 'The app has 1M+ downloads.',
    tone: 'vymo',
  },
];

function SearchIcon({ size = 16 }: { size?: number }) {
  return <Sparkles size={size} />;
}

const skillGroups = [
  {
    label: 'Android & languages',
    skills: ['Kotlin', 'Java', 'Android SDK', 'XML', 'Jetpack Compose', 'Coroutines', 'Flow', 'RxJava'],
  },
  {
    label: 'Architecture & dependency injection',
    skills: ['MVVM', 'MVP', 'Clean Architecture', 'Hilt', 'Dagger', 'Repository Pattern'],
  },
  {
    label: 'Data, networking & services',
    skills: ['Retrofit', 'OkHttp', 'Room', 'SQLite', 'REST APIs', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase FCM'],
  },
  {
    label: 'Quality & delivery',
    skills: ['JUnit', 'Mockito', 'MockK', 'Espresso', 'LeakCanary', 'Git', 'GitHub', 'Jenkins', 'Gradle', 'ProGuard', 'R8'],
  },
  {
    label: 'Tools & collaboration',
    skills: ['Android Studio', 'Charles Proxy', 'Postman', 'Figma', 'JIRA', 'Confluence', 'Glide', 'Coil'],
  },
  {
    label: 'Applied AI & automation',
    skills: ['Cursor', 'GitHub Copilot', 'Augment Code', 'Gemini', 'ChatGPT', 'Python', 'AI agent development', 'Make', 'n8n'],
  },
];

const experience = [
  {
    company: 'Procore',
    title: 'Staff Engineer, Android',
    dates: 'Aug 2024 — Present',
    current: true,
    detail: 'AI-powered mobile features, engineering workflows, Android Design System, and mentoring.',
  },
  {
    company: 'Vymo',
    title: 'Principal Engineer, Android',
    dates: 'Aug 2019 — Aug 2024',
    detail: 'Technical leadership for a sales-assistant app with 1M+ downloads.',
  },
  { company: 'GlobalLogic', title: 'Role not specified', dates: 'May 2018 — Jul 2019' },
  { company: 'DEV Information Technology', title: 'Role not specified', dates: 'Feb 2016 — May 2018' },
  { company: 'BigBang Innovations', title: 'Role not specified', dates: 'Mar 2015 — Feb 2016' },
  { company: 'Webplanex', title: 'Role not specified', dates: 'Oct 2013 — Mar 2015' },
  { company: 'Tristate Technology', title: 'Role not specified', dates: 'Sep 2012 — Oct 2013' },
];

const prompts = [
  'What has Bhavik shipped with AI?',
  'How does he approach Android architecture?',
  'What did he lead at Vymo?',
  'How does he support other engineers?',
];

const sectionLinks: Record<string, string> = {
  'selected-work': '#selected-work',
  selectedWork: '#selected-work',
  work: '#selected-work',
  projects: '#selected-work',
  'mobile-assistant': '#mobile-assistant',
  'voice-agent': '#voice-agent',
  'code-guardian': '#code-guardian',
  'code-connect': '#code-connect',
  'meta-glasses': '#meta-glasses',
  vymo: '#vymo',
  experience: '#experience',
  leadership: '#experience',
  skills: '#skills',
  ambassador: '#ambassador',
  contact: '#contact',
};

type ChatMessage = {
  id: number;
  question: string;
  answer?: string;
  sectionId?: string | null;
  error?: string;
  pending?: boolean;
};

function isRateLimitError(error: unknown) {
  if (!error || typeof error !== 'object') return false;
  const candidate = error as { status?: number; statusCode?: number; message?: string };
  return candidate.status === 429 || candidate.statusCode === 429 || /rate.?limit|429/i.test(candidate.message ?? '');
}

function Home() {
  const ambassador = useAskAmbassador();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const idRef = useRef(0);

  const askQuestion = async (rawQuestion: string) => {
    const cleanQuestion = rawQuestion.trim();
    if (!cleanQuestion || ambassador.isPending || cleanQuestion.length > 800) return;
    const messageId = ++idRef.current;
    setError('');
    setMessages((current) => [...current, { id: messageId, question: cleanQuestion, pending: true }]);
    setQuestion('');
    try {
      const result = await ambassador.mutateAsync({ data: { question: cleanQuestion } });
      setMessages((current) =>
        current.map((message) =>
          message.id === messageId
            ? { ...message, answer: result.answer, sectionId: result.sectionId, pending: false }
            : message,
        ),
      );
    } catch (requestError) {
      const message = isRateLimitError(requestError)
        ? 'A brief pause is needed before asking again. Please try shortly.'
        : 'The answer could not be loaded. Please try again.';
      setMessages((current) =>
        current.map((entry) =>
          entry.id === messageId ? { ...entry, pending: false, error: message } : entry,
        ),
      );
      setError(message);
    }
  };

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void askQuestion(question);
  };

  return (
    <main className="portfolio">
      <header className="shell topbar">
        <a className="brand" href="#top" aria-label="Bhavik Sadiwala, home" data-testid="link-home">
          <span className="brand-mark">BS</span>
          <span>Bhavik Sadiwala</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#selected-work" data-testid="link-nav-work">Selected work</a>
          <a href="#experience" data-testid="link-nav-experience">Experience</a>
          <a href="#skills" data-testid="link-nav-skills">Skills</a>
          <a className="resume-link" href="/resume/Bhavik-Sadiwala-Resume.pdf" download data-testid="link-resume-nav">
            <ArrowDownToLine size={13} /> Resume
          </a>
        </nav>
      </header>

      <section className="shell hero reveal" id="top" aria-labelledby="hero-title">
        <div>
          <div className="eyebrow">Staff Android Engineer · Bengaluru, India</div>
          <h1 id="hero-title">Mobile systems.<br /><span>AI that ships.</span></h1>
          <p className="hero-sub">
            I’m <strong>Bhavik Sadiwala</strong> — a Staff Android Engineer with 14 years of experience building mobile products and bringing practical AI into product and engineering workflows.
          </p>
          <div className="actions">
            <a className="button" href="#selected-work" data-testid="link-see-work">Explore selected work <ArrowRight size={15} /></a>
            <a className="button-outline" href="/resume/Bhavik-Sadiwala-Resume.pdf" download data-testid="link-resume-hero"><ArrowDownToLine size={14} /> Download resume</a>
            <a className="button-outline" href="https://www.linkedin.com/in/bhavik-sadiwala/" target="_blank" rel="noreferrer" data-testid="link-linkedin-hero"><Linkedin size={14} /> LinkedIn</a>
          </div>
        </div>
        <aside className="hero-side" aria-label="Experience summary">
          <div className="hero-stat"><strong>14</strong><span>years<br />Android</span></div>
          <p>From dependable Android foundations to AI-powered mobile features.</p>
          <div className="location"><MapPin size={13} /> Bengaluru, India</div>
        </aside>
      </section>

      <section className="shell" aria-label="Impact at a glance">
        <div className="signal-strip">
          <div className="signal-intro"><span>Evidence, not adjectives</span><strong>Outcomes from shipped<br />mobile and team work.</strong></div>
          <div className="signal-metric"><strong>70%</strong><span>less component<br />implementation time</span></div>
          <div className="signal-metric"><strong>40%</strong><span>team productivity<br />improvement</span></div>
          <div className="signal-metric"><strong>1M+</strong><span>downloads for Vymo<br />sales-assistant app</span></div>
        </div>
      </section>

      <section className="shell section" id="selected-work" aria-labelledby="work-title">
        <div className="section-head">
          <div><div className="section-kicker">Procore · Staff Engineer, Android · Aug 2024—present</div><h2 id="work-title">Selected work</h2></div>
          <p>Role-fit up front. Six evidence-led examples, in relevance order.</p>
        </div>
        <div className="proof-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article id={project.id} className={`proof-card proof-${project.tone}`} key={project.id} data-testid={`card-project-${project.id}`}>
                <div className="proof-top">
                  <div className="proof-id"><span>{project.number}</span><span className="proof-icon"><Icon size={16} /></span></div>
                  <span className="tag">{project.tag}</span>
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <dl className="project-facts">
                    <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                    <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
                    <div><dt>Tools</dt><dd>{project.tools.join(', ')}</dd></div>
                    <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                  </dl>
                  {project.video && (
                    <div className="card-links">
                      <a className="text-link" href={project.video.url} target="_blank" rel="noreferrer" data-testid={`link-demo-${project.id}`}>
                        <Play size={13} /> {project.video.label} <ArrowUpRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="shell" aria-labelledby="fit-title">
        <div className="brief-band">
          <div>
            <div className="section-kicker">The role-fit read</div>
            <h2 id="fit-title">Android leadership<br />with an AI delivery edge.</h2>
            <p>Experienced across mobile product leadership, team enablement and AI features—grounded in practical outcomes rather than claims about tools or architecture that are not specified.</p>
          </div>
          <div className="brief-points">
            <div className="brief-point"><Check size={15} /> 14 years focused on Android engineering</div>
            <div className="brief-point"><Check size={15} /> Staff Engineer, Android at Procore</div>
            <div className="brief-point"><Check size={15} /> Principal Engineer, Android at Vymo</div>
            <div className="brief-point"><Check size={15} /> Mentored Kotlin Coroutines, Flow and Jetpack Compose</div>
            <div className="brief-point"><Check size={15} /> AI applied to mobile features and PR reviews</div>
            <div className="brief-point"><Check size={15} /> 70% faster component implementation; 40% productivity improvement</div>
          </div>
        </div>
      </section>

      <section className="shell section" aria-label="Experience and technical skills">
        <div className="lower-grid">
          <div id="experience">
            <div className="section-kicker">A technical progression</div>
            <h2 className="lower-title">Experience</h2>
            <div className="timeline">
              {experience.map((role) => (
                <article className="role" key={role.company} data-testid={`role-${role.company.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="role-date">{role.dates}</div>
                  <div className="role-main">
                    <div><h3>{role.company}</h3><p>{role.title}{role.detail ? ` · ${role.detail}` : ''}</p></div>
                    {role.current && <span className="current-pill">Current</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div id="skills">
            <div className="section-kicker">A practical toolkit</div>
            <h2 className="lower-title">Skills</h2>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <section className="skill-group" key={group.label} aria-label={group.label}>
                  <h3>{group.label}</h3>
                  <div className="skill-chips">
                    {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell resources" aria-labelledby="resources-title">
        <div className="resource-panel">
          <div>
            <h2 id="resources-title">Notes from the work</h2>
            <p>Further reading and a short look at AI-assisted mobile development.</p>
          </div>
          <div className="resource-links">
            <a className="resource-link" href="https://bhaviksadiwala.com/how-to-build-an-ai-first-mobile-team-in-90-days.pdf" target="_blank" rel="noreferrer" data-testid="link-resource-ai-team"><FileText size={13} /> AI-first mobile team</a>
            <a className="resource-link" href="https://bhaviksadiwala.com/blogs/figma-code-connect-android.pdf" target="_blank" rel="noreferrer" data-testid="link-resource-figma"><FileText size={13} /> Figma Code Connect</a>
            <a className="resource-link" href="https://bhaviksadiwala.com/blogs/lessons-ai-integration.pdf" target="_blank" rel="noreferrer" data-testid="link-resource-ai-integration"><FileText size={13} /> AI integration lessons</a>
            <a className="resource-link" href="https://bhaviksadiwala.com/blogs/cursor-copilot-claude-android.pdf" target="_blank" rel="noreferrer" data-testid="link-resource-tools"><FileText size={13} /> AI tools for Android</a>
            <a className="resource-link" href="https://www.youtube.com/watch?v=LM2Jn2HDvBw" target="_blank" rel="noreferrer" data-testid="link-ai-tools-demo"><Play size={13} /> AI-assisted mobile demo</a>
          </div>
        </div>
      </section>

      <section className="shell ambassador" id="ambassador" aria-labelledby="amb-title">
        <div className="amb-intro">
          <div className="amb-label">Evidence-only answers</div>
          <h2 id="amb-title">Ask about the work. Get a source to explore.</h2>
          <p>A portfolio guide for recruiter questions. Answers are grounded in verified details shown on this page.</p>
        </div>
        <div className="amb-widget">
          <div className="amb-widget-head">
            <span className="botmark"><Bot size={16} /></span>
            <span>Bhavik’s portfolio guide</span>
            <span className="ready-dot">{ambassador.isPending ? 'Thinking' : 'Ready'}</span>
          </div>
          <div className="chat-log" aria-live="polite" aria-relevant="additions text" data-testid="chat-messages">
            {messages.length === 0 && (
              <div className="chat-entry"><p>Choose a question to get a short, fact-based briefing. Each question is answered independently.</p></div>
            )}
            {messages.map((message) => (
              <div key={message.id} className="chat-turn" data-testid={`chat-turn-${message.id}`}>
                <div className="chat-entry question"><p>{message.question}</p></div>
                <div className="chat-entry" aria-busy={message.pending || undefined}>
                  {message.pending ? <p>Preparing an evidence-based answer…</p> : null}
                  {message.answer && (
                    <>
                      <p>{message.answer}</p>
                      {message.sectionId && sectionLinks[message.sectionId] && (
                        <a href={sectionLinks[message.sectionId]} data-testid={`link-chat-section-${message.id}`}>
                          Explore related section <ArrowRight size={12} />
                        </a>
                      )}
                    </>
                  )}
                  {message.error && (
                    <>
                      <p className="error-note" role="alert">{message.error}</p>
                      <button className="retry-button" type="button" disabled={ambassador.isPending} onClick={() => void askQuestion(message.question)}>
                        Try again
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={submitQuestion} aria-label="Ask the portfolio guide">
            <input
              aria-label="Your question"
              data-testid="input-ambassador-question"
              value={question}
              maxLength={800}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about experience, projects, or skills…"
            />
            <button className="send-button" type="submit" disabled={ambassador.isPending || !question.trim()} data-testid="button-ask-ambassador">
              <Send size={13} /> Ask
            </button>
          </form>
          <div className="amb-prompts" aria-label="Suggested questions">
            {prompts.map((prompt, index) => (
              <button
                key={prompt}
                type="button"
                disabled={ambassador.isPending}
                onClick={() => void askQuestion(prompt)}
                data-testid={`button-starter-${index + 1}`}
              >
                {prompt}
              </button>
            ))}
          </div>
          {error && <p className="error-note" role="status" data-testid="status-ambassador-error">{error}</p>}
          <div className="amb-foot">Messages stay in this page’s React memory and are not saved here.</div>
        </div>
      </section>

      <footer className="shell footer" id="contact">
        <span>Bhavik Sadiwala · Staff Android Engineer · Bengaluru, India</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/bhavik-sadiwala/" target="_blank" rel="noreferrer" data-testid="link-contact-linkedin"><Linkedin size={13} /> LinkedIn <ArrowUpRight size={11} /></a>
          <a href="https://calendly.com/bhaviksadiwala/30-min-strategy-call-with-bhavik" target="_blank" rel="noreferrer" data-testid="link-book-call"><MessageCircle size={13} /> Book a call <ArrowUpRight size={11} /></a>
          <a href="mailto:bhaviksadiwala@gmail.com" data-testid="link-contact-email"><Mail size={13} /> Email <ArrowUpRight size={11} /></a>
          <a href="https://bhaviksadiwala.com" target="_blank" rel="noreferrer" data-testid="link-website"><ExternalLink size={12} /> Website</a>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <ErrorBoundary resetKey="/">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
