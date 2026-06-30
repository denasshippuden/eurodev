const sections = [
  {
    title: "Informations collectées",
    text: "Le site collecte les informations envoyées volontairement par les formulaires. Ces données peuvent inclure le nom, le téléphone, l'e-mail, la ville, le code postal, le type de service, la description du projet et les données professionnelles des partenaires.",
  },
  {
    title: "Utilisation des données",
    text: "Les informations sont utilisées pour analyser les demandes de devis, comprendre le besoin du client et connecter les clients avec des professionnels partenaires disponibles dans leur région.",
  },
  {
    title: "Partage des informations",
    text: "Les données peuvent être partagées uniquement avec des professionnels partenaires lorsque cela est nécessaire pour traiter une demande de devis. Devis Travaux Belgique ne vend pas les données personnelles à des tiers.",
  },
  {
    title: "Correction ou suppression",
    text: "Vous pouvez demander la correction ou la suppression de vos données personnelles en nous contactant par e-mail.",
  },
];

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-semibold tracking-tight text-zinc-950 sm:text-base">
            Devis Travaux Belgique
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-950"
          >
            Accueil
          </a>
        </div>
      </header>

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            Données personnelles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Politique de confidentialité
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            Cette page explique simplement comment Devis Travaux Belgique utilise les
            informations transmises via ses formulaires de contact, de demande de devis
            et d'inscription partenaire.
          </p>

          <div className="mt-12 grid gap-4">
            {sections.map((section) => (
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
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Pour toute question concernant vos données personnelles, vous pouvez nous
              contacter à l'adresse suivante.
            </p>
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
