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

function Wordmark() {
  return (
    <a className="wordmark" href="/" aria-label="Danirwa home">
      <span className="wordmark-mark" aria-hidden="true">D</span>
      <span>danirwa</span>
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
          <a href="/#what-it-tracks">What it tracks</a>
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
                <Dialog.Title asChild><span className="mobile-menu-title">Menu</span></Dialog.Title>
                <Dialog.Close asChild>
                  <button className="mobile-menu-button" aria-label="Close menu"><MenuIcon close /></button>
                </Dialog.Close>
              </div>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                <Dialog.Close asChild><a href="/#how-it-works">How it works</a></Dialog.Close>
                <Dialog.Close asChild><a href="/#what-it-tracks">What it tracks</a></Dialog.Close>
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

function HeroCalendar() {
  return (
    <div className="hero-product" aria-label="Prototype preview of Danirwa obligation timeline">
      <div className="prototype-label">Prototype preview</div>
      <div className="hero-product-head">
        <div>
          <p className="product-kicker">September</p>
          <h2>Your next important dates</h2>
        </div>
        <span className="product-count">4 upcoming</span>
      </div>
      <div className="timeline-list">
        <div className="timeline-row is-near">
          <div className="date-block"><span>SEP</span><strong>29</strong></div>
          <div className="timeline-copy"><strong>Passport renewal</strong><span>9 days</span></div>
          <div className="status-pill">Soon</div>
        </div>
        <div className="timeline-row">
          <div className="date-block"><span>OCT</span><strong>18</strong></div>
          <div className="timeline-copy"><strong>Auto registration</strong><span>28 days</span></div>
          <span className="row-mark" aria-hidden="true" />
        </div>
        <div className="timeline-row">
          <div className="date-block"><span>NOV</span><strong>04</strong></div>
          <div className="timeline-copy"><strong>Professional certification</strong><span>45 days</span></div>
          <span className="row-mark" aria-hidden="true" />
        </div>
        <div className="timeline-row">
          <div className="date-block"><span>JAN</span><strong>12</strong></div>
          <div className="timeline-copy"><strong>Family records review</strong><span>114 days</span></div>
          <span className="row-mark" aria-hidden="true" />
        </div>
      </div>
      <div className="product-footnote">Example data shown for demonstration.</div>
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
            <p className="intro-line">Life has too many dates to keep in your head.</p>
            <h1>Stay ahead of what matters.</h1>
            <p className="hero-body">Danirwa gives important renewals, documents, certifications, and deadlines one calm place to live, so you can act before they become urgent.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#how-it-works">See how it works</a>
              <a className="text-link" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
            </div>
            <p className="hero-note">Danirwa is in development. The product interface below is a prototype.</p>
          </div>
          <HeroCalendar />
        </section>

        <section className="statement shell" aria-labelledby="statement-title">
          <p id="statement-title">The useful part is not remembering every date.</p>
          <strong>It is knowing what needs attention next.</strong>
        </section>

        <section id="how-it-works" className="demo-section shell" aria-labelledby="demo-title">
          <div className="section-heading">
            <p>One date becomes a clear next action.</p>
            <h2 id="demo-title">From “I should remember that” to handled.</h2>
          </div>

          <div className="scroll-demo">
            <div className="demo-copy-column">
              {obligations.map((item, index) => (
                <article
                  className="demo-step"
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
              <div className="prototype-label">Prototype preview</div>
              <DemoCard key={activeStep} item={obligations[activeStep]} activeStep={activeStep} />
            </div>
          </div>
        </section>

        <section id="what-it-tracks" className="tracks-section shell" aria-labelledby="tracks-title">
          <div className="tracks-heading">
            <h2 id="tracks-title">Built for the obligations that quietly run your life.</h2>
            <p>Danirwa is being designed for recurring dates and records that are easy to overlook until they are suddenly urgent.</p>
          </div>
          <div className="tracks-list" role="list">
            {[
              ['Documents', 'Passports, IDs, registrations, and other records with important dates.'],
              ['Insurance', 'Renewals and review dates for the coverage you depend on.'],
              ['Certifications', 'Professional, training, and recurring qualification deadlines.'],
              ['Family admin', 'The shared dates and records that keep a household moving.'],
            ].map(([title, body]) => (
              <div className="track-row" role="listitem" key={title}>
                <h3>{title}</h3><p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="principle-section shell" aria-labelledby="principle-title">
          <div className="principle-rule" />
          <div className="principle-grid">
            <h2 id="principle-title">Less dashboard. More direction.</h2>
            <div>
              <p>Danirwa is being built around a simple question: what deserves your attention now?</p>
              <p>The goal is a quieter interface that surfaces the next useful action without turning personal administration into another full-time system to manage.</p>
            </div>
          </div>
        </section>

        <section className="cta-section shell">
          <p>Danirwa is taking shape now.</p>
          <h2>Help us build the calm way to stay ahead.</h2>
          <div className="cta-actions">
            <a className="button button-primary" href="mailto:hello@danirwa.com?subject=Danirwa%20early%20access">Request early access</a>
            <a className="text-link" href="/support">Contact support</a>
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
        <span>Renewal GPS</span>
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
        <div><Wordmark /><p>Stay ahead of what matters.</p></div>
        <nav aria-label="Footer navigation">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
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
