import { content, localizedHref, locales, type Locale } from "./i18n";

function BrazilFlag() {
  return (
    <span className="relative h-5 w-8 overflow-hidden rounded-[2px] border border-zinc-300 bg-[#009b3a] shadow-sm">
      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ffdf00]" />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#002776]" />
      <span className="absolute left-[10px] top-[9px] h-[2px] w-3 rotate-[12deg] rounded-full bg-white" />
    </span>
  );
}

function FranceFlag() {
  return (
    <span className="grid h-5 w-8 grid-cols-3 overflow-hidden rounded-[2px] border border-zinc-300 shadow-sm">
      <span className="bg-[#002395]" />
      <span className="bg-white" />
      <span className="bg-[#ed2939]" />
    </span>
  );
}

function Flag({ locale }: { locale: Locale }) {
  return locale === "pt-BR" ? <BrazilFlag /> : <FranceFlag />;
}

export function LanguageSwitcher({
  currentLocale,
  path,
}: {
  currentLocale: Locale;
  path: string;
}) {
  return (
    <div
      aria-label={content[currentLocale].switcherLabel}
      className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1"
      role="group"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <a
            key={locale}
            href={localizedHref(path, locale)}
            aria-label={content[locale].localeName}
            aria-current={isActive ? "page" : undefined}
            title={content[locale].localeName}
            className={`inline-flex h-9 w-11 items-center justify-center rounded-full transition duration-200 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${
              isActive ? "bg-zinc-950 ring-1 ring-zinc-950" : "bg-white"
            }`}
          >
            <Flag locale={locale} />
          </a>
        );
      })}
    </div>
  );
}
