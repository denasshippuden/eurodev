import type { ReactNode } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { content, localizedHref, resolveLocale, type Locale, type SearchParams } from "./i18n";

const FORM_CLIENTE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4QXK6ICMlviQttY8FV2tW2snKZIBRRlc2xIn0EDuFA-19gg/viewform?usp=sharing&ouid=106248154664912003739";
const FORM_PRESTADOR_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAeuXVIa1MKmtzWIv2qvDixm1EEdDDBKHTeR7MQnpAQqi_kw/viewform?usp=sharing&ouid=106248154664912003739";

type HomeContent = (typeof content)[Locale];

function ExternalButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const classes =
    variant === "dark"
      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
      : "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${classes}`}
    >
      {children}
      <span className="ml-2" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function Header({ locale, t }: { locale: Locale; t: HomeContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a
          href={localizedHref("/", locale, "accueil")}
          className="text-sm font-semibold tracking-tight text-[var(--text)] sm:text-base"
        >
          {t.brand}
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[var(--text-muted)] lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={localizedHref("/", locale, link.href)}
              className="transition duration-200 hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} path="/" />
          <ThemeToggle locale={locale} />
          <a
            href={FORM_CLIENTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-medium text-[var(--accent-text)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:inline-flex"
          >
            {t.cta.quote}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroVisual({ t }: { t: HomeContent["visual"] }) {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl lg:mt-0">
      <div className="absolute inset-0 -z-10 translate-y-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface-muted)]" />
      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-[var(--shadow)]">
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]" />
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-6 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {t.clientRequest}
                </p>
                <p className="mt-2 text-xl font-semibold text-[var(--text)]">{t.job}</p>
              </div>
              <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                {t.city}
              </span>
            </div>

            <div className="space-y-4">
              {t.fields.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border)] px-4 py-3 transition duration-300 hover:border-[var(--border-strong)]"
                >
                  <span className="text-sm text-[var(--text-soft)]">{label}</span>
                  <span className="text-right text-sm font-medium text-[var(--text)]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] bg-[var(--inverse-surface)] p-6 text-[var(--inverse-text)] sm:p-8 lg:border-l lg:border-t-0">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--inverse-muted)]">{t.relation}</p>
            <div className="mt-8 space-y-6">
              {t.progress.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{item}</p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-700"
                        style={{ width: `${92 - index * 18}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ t }: { t: HomeContent }) {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[var(--border)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="animate-[fadeIn_0.8s_ease-out_both]">
          <p className="mb-5 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={FORM_CLIENTE_URL}>{t.cta.freeQuote}</ExternalButton>
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              {t.cta.partner}
            </ExternalButton>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-[var(--text-soft)]">{t.hero.note}</p>
        </div>

        <div className="animate-[fadeIn_0.9s_ease-out_0.1s_both]">
          <HeroVisual t={t.visual} />
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ t }: { t: HomeContent["steps"] }) {
  return (
    <section id="comment-ca-marche" className="bg-[var(--surface-soft)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {t.items.map((step, index) => (
            <article
              key={step.title}
              className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-xl hover:shadow-[var(--shadow)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-sm font-semibold text-[var(--text)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-text)]">
                {index + 1}
              </span>
              <h3 className="mt-7 text-xl font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }: { t: HomeContent["services"] }) {
  return (
    <section id="services" className="bg-[var(--background)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((service) => (
            <article
              key={service}
              className="flex min-h-36 items-end rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--surface)] hover:shadow-xl hover:shadow-[var(--shadow)]"
            >
              <div>
                <span className="mb-5 block h-px w-10 bg-[var(--text)]" />
                <h3 className="text-xl font-semibold text-[var(--text)]">{service}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSections({ t }: { t: HomeContent }) {
  return (
    <section className="bg-[var(--inverse-surface)] px-5 py-20 text-[var(--inverse-text)] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-2">
        <article className="bg-[var(--inverse-surface)] p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--inverse-muted)]">
            {t.audience.clients.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.audience.clients.title}
          </h2>
          <p className="mt-5 leading-8 text-[var(--inverse-muted)]">{t.audience.clients.text}</p>
          <div className="mt-8">
            <ExternalButton href={FORM_CLIENTE_URL} variant="light">
              {t.cta.freeQuote}
            </ExternalButton>
          </div>
        </article>

        <article id="partenaires" className="bg-[var(--inverse-surface-muted)] p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--inverse-muted)]">
            {t.audience.pros.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.audience.pros.title}
          </h2>
          <p className="mt-5 leading-8 text-[var(--inverse-muted)]">{t.audience.pros.text}</p>
          <div className="mt-8">
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              {t.cta.partner}
            </ExternalButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function Transparency({ t }: { t: HomeContent["transparency"] }) {
  return (
    <section className="bg-[var(--background)] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl border-y border-[var(--border)] py-14 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">{t.text}</p>
      </div>
    </section>
  );
}

function Footer({ locale, t }: { locale: Locale; t: HomeContent }) {
  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-[var(--surface-soft)] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[var(--text)]">{t.brand}</p>
          <p className="mt-2">{t.footer.text}</p>
        </div>

        <nav className="flex gap-5">
          <a
            href={localizedHref("/contact", locale)}
            className="transition duration-200 hover:text-[var(--text)]"
          >
            {t.footer.contact}
          </a>
          <a
            href={localizedHref("/confidentialite", locale)}
            className="transition duration-200 hover:text-[var(--text)]"
          >
            {t.footer.privacy}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const t = content[locale];

  return (
    <main lang={locale} className="min-h-screen scroll-smooth bg-[var(--background)] text-[var(--text)]">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Header locale={locale} t={t} />
      <Hero t={t} />
      <HowItWorks t={t.steps} />
      <Services t={t.services} />
      <AudienceSections t={t} />
      <Transparency t={t.transparency} />
      <Footer locale={locale} t={t} />
    </main>
  );
}
