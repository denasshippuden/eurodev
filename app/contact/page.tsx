import type { ReactNode } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { content, localizedHref, resolveLocale, type Locale, type SearchParams } from "../i18n";

const FORM_CLIENTE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4QXK6ICMlviQttY8FV2tW2snKZIBRRlc2xIn0EDuFA-19gg/viewform?usp=sharing&ouid=106248154664912003739";
const FORM_PRESTADOR_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAeuXVIa1MKmtzWIv2qvDixm1EEdDDBKHTeR7MQnpAQqi_kw/viewform?usp=sharing&ouid=106248154664912003739";

type ContactContent = (typeof content)[Locale];

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

function Header({ locale, t }: { locale: Locale; t: ContactContent }) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a
          href={localizedHref("/", locale)}
          className="text-sm font-semibold tracking-tight text-[var(--text)] sm:text-base"
        >
          {t.brand}
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} path="/contact" />
          <ThemeToggle locale={locale} />
          <a
            href={localizedHref("/", locale)}
            className="text-sm font-medium text-[var(--text-muted)] transition duration-200 hover:text-[var(--text)]"
          >
            {t.contactPage.home}
          </a>
        </div>
      </div>
    </header>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const t = content[locale];

  return (
    <main lang={locale} className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Header locale={locale} t={t} />

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {t.contactPage.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl">
            {t.contactPage.title}
          </h1>
          <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-7 sm:p-9">
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{t.contactPage.text}</p>
            <a
              href="mailto:contact@devistravauxbelgique.be"
              className="mt-6 inline-flex text-lg font-semibold text-[var(--text)] transition duration-200 hover:text-[var(--text-muted)]"
            >
              contact@devistravauxbelgique.be
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={FORM_CLIENTE_URL}>{t.cta.freeQuote}</ExternalButton>
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              {t.cta.partner}
            </ExternalButton>
          </div>
        </div>
      </section>
    </main>
  );
}
