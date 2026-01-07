import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <main className="bg-background">
      <div className="container py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">SSG Global</p>
                <p className="text-xs tracking-wider text-muted-foreground">ELEVATE YOUR CAREER</p>
              </div>
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to home
            </Link>
          </div>

          <header className="space-y-3">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: January 6, 2026</p>
          </header>

          <section className="prose prose-slate dark:prose-invert mt-10 max-w-none">
            <p>
              This Cookie Policy explains how SSG Global (“SSG”, “we”, “us”) uses cookies and similar technologies on our
              website.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device. They help websites work efficiently and provide
              information to site owners.
            </p>

            <h2>Types of cookies we may use</h2>
            <ul>
              <li>
                <strong>Strictly necessary</strong>: required for the site to function (e.g., security and basic routing).
              </li>
              <li>
                <strong>Preferences</strong>: remember choices like theme or language (when applicable).
              </li>
              <li>
                <strong>Analytics</strong>: help us understand traffic and usage patterns to improve the site.
              </li>
            </ul>

            <h2>How to manage cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Blocking cookies may impact some features
              of the site.
            </p>

            <h2>Third-party cookies</h2>
            <p>
              Some third-party services (such as analytics providers) may set cookies when you use our site. These cookies
              are governed by the third parties’ policies.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about cookies? Email us at <a href="mailto:hr@ssggetjob.com">hr@ssggetjob.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;


