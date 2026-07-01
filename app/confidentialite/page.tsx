import { LanguageSwitcher } from "../LanguageSwitcher";
import { content, localizedHref, resolveLocale, type Locale, type SearchParams } from "../i18n";

type PrivacyContent = (typeof content)[Locale];

function Header({ locale, t }: { locale: Locale; t: PrivacyContent }) {
  return (
    <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a
          href={localizedHref("/", locale)}
          className="text-sm font-semibold tracking-tight text-zinc-950 sm:text-base"
        >
          {t.brand}
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} path="/confidentialite" />
          <a
            href={localizedHref("/", locale)}
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-950"
          >
            {t.privacyPage.home}
          </a>
        </div>
      </div>
    </header>
  );
}

export default async function ConfidentialitePage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const t = content[locale];

  return (
    <main lang={locale} className="min-h-screen bg-white text-zinc-950">
      <Header locale={locale} t={t} />

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            {t.privacyPage.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            {t.privacyPage.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            {t.privacyPage.intro}
          </p>

          <div className="mt-12 grid gap-4">
            {t.privacyPage.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:border-zinc-400 hover:bg-white"
              >
                <h2 className="text-xl font-semibold text-zinc-950">{section.title}</h2>
                <p className="mt-4 leading-8 text-zinc-600">{section.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-zinc-200 bg-zinc-950 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-semibold">{t.privacyPage.contactTitle}</h2>
            <p className="mt-4 leading-8 text-zinc-300">{t.privacyPage.contactText}</p>
            <a
              href="mailto:contact@devistravauxbelgique.be"
              className="mt-5 inline-flex font-semibold text-white transition duration-200 hover:text-zinc-300"
            >
              contact@devistravauxbelgique.be
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
