import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

const obligations = [
  {
    title: 'Add the date once',
    body: 'Save the renewal or expiration that matters, along with the document or note you will need later.',
    month: 'OCT',
    day: '18',
    label: 'Auto registration renewal',
    meta: '28 days away',
    state: 'saved',
  },
  {
    title: 'See the window before it gets urgent',
    body: 'Danirwa turns a distant date into a simple action window so you can plan around real life.',
    month: 'OCT',
    day: '18',
    label: 'Auto registration renewal',
    meta: 'Action window opens Oct 4',
    state: 'window',
  },
  {
    title: 'Know the next move',
    body: 'When the time comes, the important detail is already in one place: what is due, when, and what to do next.',
    month: 'OCT',
    day: '18',
    label: 'Auto registration renewal',
    meta: 'Review policy and renew',
    state: 'action',
  },
];

function BrandMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Danirwa">
      <path d="M7 7h22c17 0 28 9.7 28 25S46 57 29 57H7V7Z" fill="currentColor" />
      <path d="M17 17h12c10.5 0 18 5.4 18 15s-7.5 15-18 15H17V17Z" fill="var(--canvas)" />
      <path d="M22 32.5l5.2 5.2L38.5 25.8" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 7v50M7 19h10M7 31h10M7 43h10" fill="none" stroke="var(--canvas)" strokeWidth="2.4" />
    </svg>
  );
}

function Wordmark() {
  return (
    <a className="wordmark" href="/" aria-label="Danirwa home">
      <BrandMark className="brand-mark" />
      <span className="wordmark-text">danirwa</span>
    </a>
  );
}

function MenuIcon({ close = false }) {
  return (
    <span className={close ? 'menu-icon is-close' : 'menu-icon'} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#how-it-works">How it works</a>
          <a href="/#what-it-tracks">Use cases</a>
          <a href="/#approach">Our approach</a>
          <a href="/support">Support</a>
          <a className="nav-cta" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
        </nav>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="mobile-menu-button" aria-label="Open menu"><MenuIcon /></button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="mobile-menu-panel" aria-describedby={undefined}>
              <div className="mobile-menu-top">
                <Wordmark />
                <Dialog.Title className="sr-only">Danirwa navigation</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="mobile-menu-button" aria-label="Close menu"><MenuIcon close /></button>
                </Dialog.Close>
              </div>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                <Dialog.Close asChild><a href="/#how-it-works">How it works</a></Dialog.Close>
                <Dialog.Close asChild><a href="/#what-it-tracks">Use cases</a></Dialog.Close>
                <Dialog.Close asChild><a href="/#approach">Our approach</a></Dialog.Close>
                <Dialog.Close asChild><a href="/support">Support</a></Dialog.Close>
                <Dialog.Close asChild><a href="/privacy">Privacy</a></Dialog.Close>
                <Dialog.Close asChild><a href="/terms">Terms</a></Dialog.Close>
                <a className="button button-primary" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

function SignalIcon({ type }) {
  if (type === 'clock') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="M12 7.5v5l3.4 2"/></svg>;
  }
  if (type === 'family') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8.5" cy="8" r="2.6"/><circle cx="15.8" cy="9" r="2.2"/><path d="M3.8 18c.7-3.2 2.4-4.8 4.9-4.8s4.3 1.6 5 4.8M13.5 14.4c.8-.8 1.8-1.2 3-1.2 2.1 0 3.5 1.3 4.1 3.9"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6 19 6v5.5c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.4Z"/><path d="m8.4 12 2.3 2.3 4.9-5"/></svg>;
}

function HeroDashboard() {
  const nav = ['Home', 'Dates', 'Documents', 'Insurance', 'Certifications', 'Family'];
  return (
    <div className="product-scene" aria-label="Prototype preview of Danirwa dashboard">
      <div className="scene-meta">
        <span>Prototype</span>
        <span>Renewal GPS</span>
      </div>
      <div className="app-window">
        <aside className="app-sidebar" aria-hidden="true">
          <div className="app-mini-brand"><BrandMark className="app-mini-mark" /><span>danirwa</span></div>
          <div className="app-nav">
            {nav.map((item, index) => <span className={index === 0 ? 'active' : ''} key={item}>{item}</span>)}
          </div>
          <span className="app-settings">Settings</span>
        </aside>
        <div className="app-main">
          <div className="app-main-top">
            <div>
              <span className="app-overline">Good morning</span>
              <strong>Here&apos;s what&apos;s coming up.</strong>
            </div>
            <div className="app-avatar" aria-hidden="true">D</div>
          </div>
          <div className="app-summary" aria-hidden="true">
            <div><strong>4</strong><span>Upcoming</span></div>
            <div><strong>2</strong><span>Due soon</span></div>
            <div><strong>8</strong><span>All clear</span></div>
          </div>
          <div className="dates-panel">
            <div className="dates-panel-head">
              <strong>Your next important dates</strong>
              <span>4 upcoming</span>
            </div>
            <div className="timeline-list">
              <div className="timeline-row is-near">
                <div className="date-block"><span>SEP</span><strong>29</strong></div>
                <div className="timeline-copy"><strong>Passport renewal</strong><span>9 days away</span></div>
                <div className="status-pill">Soon</div>
              </div>
              <div className="timeline-row">
                <div className="date-block"><span>OCT</span><strong>18</strong></div>
                <div className="timeline-copy"><strong>Auto registration</strong><span>28 days away</span></div>
                <span className="row-mark" aria-hidden="true" />
              </div>
              <div className="timeline-row">
                <div className="date-block"><span>NOV</span><strong>04</strong></div>
                <div className="timeline-copy"><strong>Professional certification</strong><span>45 days away</span></div>
                <span className="row-mark" aria-hidden="true" />
              </div>
              <div className="timeline-row">
                <div className="date-block"><span>JAN</span><strong>12</strong></div>
                <div className="timeline-copy"><strong>Family records review</strong><span>114 days away</span></div>
                <span className="row-mark" aria-hidden="true" />
              </div>
            </div>
            <div className="product-footnote">Example data shown for demonstration.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const stepRefs = React.useRef([]);

  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.innerWidth < 860) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveStep(Number(visible.target.dataset.step));
      },
      { rootMargin: '-32% 0px -48% 0px', threshold: [0.2, 0.5, 0.8] },
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="intro-line">Life admin, engineered.</p>
            <h1>Stay ahead of what matters.</h1>
            <p className="hero-body">Danirwa helps you manage renewals, documents, certifications, and deadlines in one calm, organized place, so you can act before they become urgent.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
              <a className="button button-secondary" href="#how-it-works"><span className="play-dot" aria-hidden="true">▶</span>See how it works</a>
            </div>
            <div className="signal-strip" aria-label="Danirwa product principles">
              <div><SignalIcon type="shield" /><span>Less stress,<br />more clarity</span></div>
              <div><SignalIcon type="clock" /><span>Be ready<br />before it&apos;s urgent</span></div>
              <div><SignalIcon type="family" /><span>For you<br />and your family</span></div>
            </div>
          </div>
          <HeroDashboard />
        </section>

        <section className="statement shell" aria-labelledby="statement-title">
          <div>
            <p className="section-kicker">A better way to stay ahead</p>
            <h2 id="statement-title">The useful part is not remembering every date.</h2>
            <strong>It is knowing what needs attention next.</strong>
          </div>
          <p className="statement-copy">Danirwa turns important dates into clear next steps, so you can plan with confidence and focus on what matters most.</p>
        </section>

        <section id="how-it-works" className="demo-section shell" aria-labelledby="demo-title">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">How it works</p>
              <h2 id="demo-title">Three deliberate steps.</h2>
            </div>
            <p>From a distant date to a clear next move, Danirwa keeps the sequence simple and visible.</p>
          </div>

          <div className="scroll-demo">
            <div className="demo-copy-column">
              {obligations.map((item, index) => (
                <article
                  className={`demo-step ${activeStep === index ? 'is-active' : ''}`}
                  key={item.title}
                  data-step={index}
                  ref={(node) => { stepRefs.current[index] = node; }}
                >
                  <span className="step-number">{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="mobile-demo-card" aria-hidden="true">
                    <DemoCard item={item} activeStep={index} />
                  </div>
                </article>
              ))}
            </div>
            <div className="demo-stage" aria-live="polite">
              <div className="stage-topline"><span>Prototype preview</span><span>Renewal GPS</span></div>
              <DemoCard key={activeStep} item={obligations[activeStep]} activeStep={activeStep} />
            </div>
          </div>
        </section>

        <section id="what-it-tracks" className="tracks-section shell" aria-labelledby="tracks-title">
          <div className="tracks-heading">
            <div>
              <p className="section-kicker">Built for real life</p>
              <h2 id="tracks-title">Different parts of life. One organized place.</h2>
            </div>
            <p>Keep important dates and records visible across the obligations that are easiest to forget until they become urgent.</p>
          </div>
          <div className="tracks-list" role="list">
            {[
              ['01', 'Documents', 'Passports, IDs, registrations, and other records with important dates.'],
              ['02', 'Insurance', 'Renewals and review dates for the coverage you depend on.'],
              ['03', 'Certifications', 'Professional, training, and recurring qualification deadlines.'],
              ['04', 'Family admin', 'The shared dates and records that keep a household moving.'],
            ].map(([number, title, body]) => (
              <div className="track-row" role="listitem" key={title}>
                <span className="track-number">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="shell approach-inner">
            <div className="approach-code" aria-hidden="true">
              <div className="approach-axis"><span>signal</span><span>window</span><span>action</span></div>
              <svg viewBox="0 0 520 250" role="presentation">
                <path d="M30 190C120 190 125 120 210 120S300 80 380 80s70-32 110-32" />
                <circle cx="30" cy="190" r="7" />
                <circle cx="210" cy="120" r="7" />
                <circle cx="380" cy="80" r="7" />
                <circle cx="490" cy="48" r="7" />
              </svg>
              <p>Important date → action window → next move</p>
            </div>
            <div className="approach-copy">
              <p className="section-kicker">Our approach</p>
              <h2>Built for a calmer, more intentional life.</h2>
              <p>Danirwa is built on a simple belief: you should not have to keep important dates in your head. Thoughtful design and practical automation should help you stay ahead, reduce friction, and spend more time on what matters.</p>
              <div className="approach-principles">
                <span>Clarity over clutter</span>
                <span>Practical automation</span>
                <span>Built for real life</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="shell cta-band-inner">
            <p className="cta-kicker">Get started</p>
            <h2>A calmer tomorrow starts here.</h2>
            <p>Join early access and help shape Danirwa.</p>
            <a className="button button-light" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DemoCard({ item, activeStep = 0 }) {
  return (
    <div className={`obligation-card state-${item.state}`}>
      <div className="demo-card-top">
        <span>Auto registration renewal</span>
        <span>{activeStep + 1}/3</span>
      </div>
      <div className="demo-date"><span>{item.month}</span><strong>{item.day}</strong></div>
      <div className="demo-main-copy">
        <p>{item.label}</p>
        <strong>{item.meta}</strong>
      </div>
      <div className="demo-progress" aria-hidden="true">
        <span className={activeStep >= 0 ? 'on' : ''} />
        <span className={activeStep >= 1 ? 'on' : ''} />
        <span className={activeStep >= 2 ? 'on' : ''} />
      </div>
      <div className="demo-action-row">
        <span>{item.state === 'saved' ? 'Saved' : item.state === 'window' ? 'Plan ahead' : 'Ready to review'}</span>
        <span className="mini-arrow" aria-hidden="true">›</span>
      </div>
    </div>
  );
}

function LegalPage({ title, eyebrow, children }) {
  return (
    <>
      <Header />
      <main className="legal-page shell">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="draft-notice"><strong>Draft for review.</strong> This page reflects the current public website concept and should be reviewed before production launch.</div>
        <div className="legal-copy">{children}</div>
      </main>
      <Footer />
    </>
  );
}

function Privacy() {
  return <LegalPage title="Privacy Policy" eyebrow="Danirwa">
    <h2>What this website currently collects</h2>
    <p>This website is designed as an informational product site. The current prototype does not include account creation, document uploads, analytics, advertising trackers, or an application database.</p>
    <h2>Contact</h2>
    <p>If you choose to contact Danirwa by email, the information you include is handled through the email services used by the sender and recipient.</p>
    <h2>Future product data</h2>
    <p>The Danirwa application is still in development. Data collection, storage, deletion, retention, security, and account practices for the product have not been finalized on this website. This policy must be updated before those capabilities are launched.</p>
    <h2>Questions</h2>
    <p>Questions about this draft can be sent to <a href="mailto:hello@danirwa.com">hello@danirwa.com</a>.</p>
  </LegalPage>;
}

function Terms() {
  return <LegalPage title="Terms of Service" eyebrow="Danirwa">
    <h2>Website status</h2>
    <p>This website currently presents a product concept that is in development. Prototype interfaces and example information are provided to explain the intended experience and are not a promise that every shown capability is available.</p>
    <h2>No professional advice</h2>
    <p>Information presented by this website should not be treated as legal, financial, medical, insurance, military, or other professional advice. Users remain responsible for confirming official deadlines and requirements with the relevant authority or provider.</p>
    <h2>Availability</h2>
    <p>Product availability, features, and launch timing may change as Danirwa is developed.</p>
    <h2>Questions</h2>
    <p>Questions about this draft can be sent to <a href="mailto:hello@danirwa.com">hello@danirwa.com</a>.</p>
  </LegalPage>;
}

function Support() {
  return (
    <>
      <Header />
      <main className="support-page shell">
        <div className="support-copy">
          <p className="legal-eyebrow">Support</p>
          <h1>How can we help?</h1>
          <p>Danirwa is still in development. For early-access questions, feedback, or website issues, contact us by email.</p>
          <a className="button button-primary" href="mailto:hello@danirwa.com?subject=Danirwa%20support">Email hello@danirwa.com</a>
        </div>
        <div className="support-aside">
          <p>Useful details to include</p>
          <ul>
            <li>What you were trying to do</li>
            <li>What happened instead</li>
            <li>Your browser or device if the issue is technical</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found shell">
        <p className="legal-eyebrow">404</p>
        <h1>That page is not here.</h1>
        <p>The link may be old or the address may be incomplete.</p>
        <a className="button button-primary" href="/">Go to Danirwa home</a>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><Wordmark /><p>Life admin, engineered for clarity.</p></div>
        <nav aria-label="Footer navigation">
          <a href="/#how-it-works">How it works</a>
          <a href="/#what-it-tracks">Use cases</a>
          <a href="/#approach">Our approach</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@danirwa.com">hello@danirwa.com</a>
        </nav>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} Danirwa. Product in development.</div>
    </footer>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  React.useEffect(() => {
    const titles = {
      '/': "Danirwa | Stay ahead of life's important dates",
      '/privacy': 'Privacy Policy | Danirwa',
      '/terms': 'Terms of Service | Danirwa',
      '/support': 'Support | Danirwa',
    };
    document.title = titles[path] || 'Page not found | Danirwa';
  }, [path]);

  if (path === '/') return <Home />;
  if (path === '/privacy') return <Privacy />;
  if (path === '/terms') return <Terms />;
  if (path === '/support') return <Support />;
  return <NotFound />;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
