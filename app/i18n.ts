export type Locale = "fr" | "pt-BR";

export type SearchParams = Record<string, string | string[] | undefined> | undefined;

export const locales: Locale[] = ["pt-BR", "fr"];

export function resolveLocale(searchParams: SearchParams): Locale {
  const rawLang = searchParams?.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;

  if (lang === "pt-BR" || lang === "pt" || lang === "br") {
    return "pt-BR";
  }

  return "fr";
}

export function localizedHref(path: string, locale: Locale, hash?: string) {
  const query = `lang=${encodeURIComponent(locale)}`;
  return `${path}?${query}${hash ? `#${hash}` : ""}`;
}

export const content = {
  "pt-BR": {
    localeName: "Português Brasil",
    switcherLabel: "Selecionar idioma",
    brand: "Devis Travaux Belgique",
    nav: [
      { label: "Início", href: "accueil" },
      { label: "Como funciona", href: "comment-ca-marche" },
      { label: "Serviços", href: "services" },
      { label: "Parceiros", href: "partenaires" },
      { label: "Contato", href: "contact" },
    ],
    cta: {
      quote: "Solicitar orçamento",
      freeQuote: "Solicitar orçamento gratuito",
      partner: "Tornar-se parceiro",
    },
    hero: {
      eyebrow: "Serviço de conexão",
      title: "Encontre um profissional para suas obras na Bélgica",
      text:
        "Reboco, pintura interna, reparos de paredes e pequenas reformas. Descreva seu projeto em poucos minutos e procuramos um profissional disponível na sua região.",
      note:
        "Conectamos solicitações a profissionais parceiros. A Devis Travaux Belgique não executa diretamente os trabalhos.",
    },
    visual: {
      clientRequest: "Solicitação do cliente",
      job: "Pintura interna",
      city: "Bruxelas",
      fields: [
        ["Tipo de trabalho", "Paredes internas e acabamentos"],
        ["Prazo desejado", "Nas próximas semanas"],
        ["Status", "Buscando parceiro disponível"],
      ],
      relation: "Conexão",
      progress: ["Solicitação recebida", "Informações verificadas", "Parceiro procurado"],
    },
    steps: {
      eyebrow: "Processo",
      title: "Como funciona?",
      items: [
        {
          title: "Você descreve seu projeto",
          text:
            "Preencha o formulário com sua cidade, o tipo de trabalho, o prazo desejado e alguns detalhes.",
        },
        {
          title: "Analisamos sua solicitação",
          text:
            "Verificamos as informações e procuramos um profissional parceiro adequado.",
        },
        {
          title: "Um profissional entra em contato",
          text:
            "Se houver disponibilidade compatível com sua necessidade, um profissional poderá entrar em contato para conversar sobre o orçamento.",
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Serviços disponíveis",
      text:
        "Solicitações voltadas a trabalhos internos, acabamentos e intervenções após obra.",
      items: [
        "Reboco",
        "Pintura interna",
        "Reparo de paredes",
        "Pequenas reformas",
        "Acabamentos internos",
        "Limpeza pós-obra",
      ],
    },
    audience: {
      clients: {
        eyebrow: "Clientes",
        title: "Você tem trabalhos para realizar?",
        text:
          "Preencha nosso formulário gratuito e explique sua necessidade. Sua solicitação poderá ser enviada a um profissional parceiro na sua região.",
      },
      pros: {
        eyebrow: "Profissionais",
        title: "Você é profissional?",
        text:
          "Você é gesseiro, pintor ou profissional de reformas na Bélgica? Cadastre-se como parceiro para receber solicitações de orçamento qualificadas conforme sua região, seus serviços e sua disponibilidade.",
      },
    },
    transparency: {
      eyebrow: "Transparência",
      title: "Um serviço simples e transparente",
      text:
        "A Devis Travaux Belgique é um serviço de conexão entre particulares e profissionais parceiros. Não executamos diretamente os trabalhos. Enviamos as solicitações aos profissionais disponíveis para que eles possam entrar em contato com os clientes e propor um orçamento.",
    },
    footer: {
      text: "Serviço de conexão para solicitações de orçamento na Bélgica",
      contact: "Contato",
      privacy: "Política de privacidade",
    },
    contactPage: {
      home: "Início",
      eyebrow: "Conexão",
      title: "Contato",
      text:
        "Você tem uma dúvida sobre uma solicitação de orçamento ou uma inscrição de parceiro? Você pode entrar em contato conosco por e-mail.",
    },
    privacyPage: {
      home: "Início",
      eyebrow: "Dados pessoais",
      title: "Política de privacidade",
      intro:
        "Esta página explica de forma simples como a Devis Travaux Belgique utiliza as informações enviadas por seus formulários de contato, de solicitação de orçamento e de inscrição de parceiros.",
      sections: [
        {
          title: "Informações coletadas",
          text:
            "O site coleta as informações enviadas voluntariamente pelos formulários. Esses dados podem incluir nome, telefone, e-mail, cidade, código postal, tipo de serviço, descrição do projeto e dados profissionais dos parceiros.",
        },
        {
          title: "Uso dos dados",
          text:
            "As informações são usadas para analisar solicitações de orçamento, entender a necessidade do cliente e conectar clientes a profissionais parceiros disponíveis em sua região.",
        },
        {
          title: "Compartilhamento das informações",
          text:
            "Os dados podem ser compartilhados apenas com profissionais parceiros quando isso for necessário para tratar uma solicitação de orçamento. A Devis Travaux Belgique não vende dados pessoais a terceiros.",
        },
        {
          title: "Correção ou exclusão",
          text:
            "Você pode solicitar a correção ou a exclusão dos seus dados pessoais entrando em contato conosco por e-mail.",
        },
      ],
      contactTitle: "Contato",
      contactText:
        "Para qualquer pergunta sobre seus dados pessoais, você pode entrar em contato conosco no endereço abaixo.",
    },
  },
  fr: {
    localeName: "Français",
    switcherLabel: "Choisir la langue",
    brand: "Devis Travaux Belgique",
    nav: [
      { label: "Accueil", href: "accueil" },
      { label: "Comment ça marche", href: "comment-ca-marche" },
      { label: "Services", href: "services" },
      { label: "Partenaires", href: "partenaires" },
      { label: "Contact", href: "contact" },
    ],
    cta: {
      quote: "Demander un devis",
      freeQuote: "Demander un devis gratuit",
      partner: "Devenir partenaire",
    },
    hero: {
      eyebrow: "Service de mise en relation",
      title: "Trouvez un professionnel pour vos travaux en Belgique",
      text:
        "Plafonnage, peinture intérieure, réparations de murs et petits travaux de rénovation. Décrivez votre projet en quelques minutes et nous recherchons un professionnel disponible dans votre région.",
      note:
        "Nous mettons les demandes en relation avec des professionnels partenaires. Devis Travaux Belgique ne réalise pas directement les travaux.",
    },
    visual: {
      clientRequest: "Demande client",
      job: "Peinture intérieure",
      city: "Bruxelles",
      fields: [
        ["Type de travaux", "Murs intérieurs et finitions"],
        ["Délai souhaité", "Dans les prochaines semaines"],
        ["Statut", "Recherche partenaire disponible"],
      ],
      relation: "Mise en relation",
      progress: ["Demande reçue", "Informations vérifiées", "Partenaire recherché"],
    },
    steps: {
      eyebrow: "Processus",
      title: "Comment ça marche ?",
      items: [
        {
          title: "Vous décrivez votre projet",
          text:
            "Remplissez le formulaire avec votre ville, le type de travaux, le délai souhaité et quelques détails.",
        },
        {
          title: "Nous analysons votre demande",
          text:
            "Nous vérifions les informations et recherchons un professionnel partenaire adapté.",
        },
        {
          title: "Un professionnel vous contacte",
          text:
            "Si une disponibilité correspond à votre besoin, un professionnel peut vous contacter pour discuter du devis.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Services disponibles",
      text:
        "Des demandes orientées vers les travaux intérieurs, les finitions et les interventions après chantier.",
      items: [
        "Plafonnage",
        "Peinture intérieure",
        "Réparation de murs",
        "Petites rénovations",
        "Finitions intérieures",
        "Nettoyage après travaux",
      ],
    },
    audience: {
      clients: {
        eyebrow: "Clients",
        title: "Vous avez des travaux à réaliser ?",
        text:
          "Remplissez notre formulaire gratuit et expliquez votre besoin. Votre demande pourra être transmise à un professionnel partenaire dans votre région.",
      },
      pros: {
        eyebrow: "Professionnels",
        title: "Vous êtes professionnel ?",
        text:
          "Vous êtes plafonneur, peintre ou professionnel de la rénovation en Belgique ? Inscrivez-vous comme partenaire pour recevoir des demandes de devis qualifiées selon votre zone, vos services et votre disponibilité.",
      },
    },
    transparency: {
      eyebrow: "Transparence",
      title: "Un service simple et transparent",
      text:
        "Devis Travaux Belgique est un service de mise en relation entre particuliers et professionnels partenaires. Nous ne réalisons pas directement les travaux. Nous transmettons les demandes aux professionnels disponibles afin qu'ils puissent contacter les clients et proposer un devis.",
    },
    footer: {
      text: "Service de mise en relation pour demandes de devis en Belgique",
      contact: "Contact",
      privacy: "Politique de confidentialité",
    },
    contactPage: {
      home: "Accueil",
      eyebrow: "Mise en relation",
      title: "Contact",
      text:
        "Vous avez une question concernant une demande de devis ou une inscription partenaire ? Vous pouvez nous contacter par e-mail.",
    },
    privacyPage: {
      home: "Accueil",
      eyebrow: "Données personnelles",
      title: "Politique de confidentialité",
      intro:
        "Cette page explique simplement comment Devis Travaux Belgique utilise les informations transmises via ses formulaires de contact, de demande de devis et d'inscription partenaire.",
      sections: [
        {
          title: "Informations collectées",
          text:
            "Le site collecte les informations envoyées volontairement par les formulaires. Ces données peuvent inclure le nom, le téléphone, l'e-mail, la ville, le code postal, le type de service, la description du projet et les données professionnelles des partenaires.",
        },
        {
          title: "Utilisation des données",
          text:
            "Les informations sont utilisées pour analyser les demandes de devis, comprendre le besoin du client et connecter les clients avec des professionnels partenaires disponibles dans leur région.",
        },
        {
          title: "Partage des informations",
          text:
            "Les données peuvent être partagées uniquement avec des professionnels partenaires lorsque cela est nécessaire pour traiter une demande de devis. Devis Travaux Belgique ne vend pas les données personnelles à des tiers.",
        },
        {
          title: "Correction ou suppression",
          text:
            "Vous pouvez demander la correction ou la suppression de vos données personnelles en nous contactant par e-mail.",
        },
      ],
      contactTitle: "Contact",
      contactText:
        "Pour toute question concernant vos données personnelles, vous pouvez nous contacter à l'adresse suivante.",
    },
  },
} as const;
