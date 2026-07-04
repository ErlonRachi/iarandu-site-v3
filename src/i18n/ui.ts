/**
 * i18n dictionary — single source of truth for all site copy.
 *
 * `pt` (Brazilian Portuguese) is the reference shape. `en` (UK English) and
 * `it` (Italian) are typed `: Dict`, so TypeScript flags any missing or extra
 * key at build time (`npm run check`). Strings whose name ends in `Html`
 * contain inline markup and MUST be rendered with `set:html`.
 *
 * Translations are faithful adaptations, not literal: brand voice preserved,
 * market examples kept, wording made native for each audience.
 */

export const languages = {
  pt: "Português",
  en: "English",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pt";

/** Short chips shown in the language switcher. */
export const langShort: Record<Lang, string> = {
  pt: "PT",
  en: "EN",
  it: "IT",
};

/** <html lang> value per locale. */
export const htmlLang: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-GB",
  it: "it-IT",
};

/** Open Graph og:locale value per locale. */
export const ogLocale: Record<Lang, string> = {
  pt: "pt_BR",
  en: "en_GB",
  it: "it_IT",
};

const pt = {
  meta: {
    title: "iarandu · a camada de IA que a sua área de negócio precisa",
    description:
      "Construímos a camada de IA que a sua área de negócio precisa, de forma governada, com padrões globais de referência e complementando a sua TI. Soluções para empresas em setores críticos e regulados.",
  },
  common: {
    bookCta: "Agende um diagnóstico",
    langLabel: "Idioma",
    homeAria: "iarandu, início",
  },
  nav: {
    ariaSections: "Seções",
    plataforma: "Plataforma",
    industrias: "Indústrias",
    depoimentos: "Depoimentos",
    quemSomos: "Quem somos",
  },
  hero: {
    hHtml:
      'Construímos a <span class="text-warm">camada de IA</span> que a sua área de negócio precisa.',
    sub: "Complementamos sua área de tecnologia, entregamos IA para sua área de negócio seguindo padrões, pipelines e arquitetura homologados.",
    trustLabel:
      "Somos especializados em aplicações críticas para setores de alta regulação e performance",
    chips: [
      "Radiofármacos e farmacêutica",
      "Serviços financeiros",
      "Desenvolvimento de software",
    ],
  },
  stats: {
    ariaLabel: "iarandu em números",
    labels: [
      "regimes regulatórios",
      "setores críticos atendidos",
      "perfis no time, nem todos humanos",
      "sedes · São Paulo e Milano",
    ],
  },
  plataforma: {
    badge: "A plataforma",
    h: "Tudo o que a sua área de negócio precisa para ter IA no seu dia a dia.",
    cards: [
      {
        title: "Agentes que trabalham",
        body: "Agentes de IA assumem o trabalho repetitivo e otimizam a execução: copiam, reconciliam e traduzem dados entre sistemas que não conversam. Funcionando de verdade, não no slide.",
      },
      {
        title: "Camada de dados governada",
        body: "Organizamos dados dispersos em informação acionável e auditável, pronta para IA. Tudo com a TI e seguindo os padrões da TI.",
      },
      {
        title: "Governança de IA",
        body: "Controle de acesso, isolamento e rastreabilidade desde o primeiro dia. Alinhada ao Protocolo de Hiroshima, à GDPR, à LGPD e à EU AI Act.",
      },
      {
        title: "Capacitação do time",
        body: "Treinamos seu time e melhoramos seu processo. O sucesso da adoção de IA é o seu time tomar posse dos benefícios, sem dependência.",
      },
    ],
    note: "Você usa o produto rodando na nossa plataforma ou na sua, sempre seguindo a segurança, as regras e os padrões da sua TI. Acompanhamos todo o processo como um advisor que põe a mão na massa, adaptando os agentes de IA aos padrões da sua empresa.",
  },
  como: {
    badge: "Como funciona",
    h: "Agentes assumem o trabalho bruto. O seu time fica com a decisão.",
    intro:
      "Nenhum processo crítico roda sem supervisão humana. Decisão e responsabilidade explícitas e auditáveis. O agente faz o trabalho repetitivo; o seu time decide.",
    steps: [
      {
        title: "Diagnóstico",
        body: "Um retrato honesto de dados e IA: o que dá para fazer hoje, onde estão os riscos, e o caso que rende mais.",
      },
      {
        title: "Caso em operação",
        body: "Construímos um caso real, em produção, com a mecânica de medição definida. Evidência, não promessa.",
      },
      {
        title: "Time autônomo",
        body: "O seu time co-executa e assume o volante. A cada mês, menos dependência de fornecedor.",
      },
    ],
  },
  industrias: {
    badge: "Indústrias",
    h: "Trabalhamos com empresas onde falhar não é uma opção.",
    intro:
      "Não aprendemos compliance no seu projeto. Já operamos sob o rigor de setores onde a margem de erro é mínima.",
    cards: [
      {
        chip: "Software",
        name: "Monitoramento de desenvolvimento e implementação de software",
        body: "Utilizamos IA para padronizar especificações de desenvolvimento, detectando anomalias, automatizando testes, reduzindo tempo de implementação e retrabalho no deploy.",
      },
      {
        chip: "Serviços financeiros",
        name: "Gestão de investimentos",
        body: "Governança e aumento de maturidade no uso de IA para servir fundos de investimento e as empresas investidas. Identificação precoce de tendências e capacitação de time interno.",
      },
      {
        chip: "Farmacêutica e radiofármacos",
        name: "Indústrias farmacêuticas e radiofármacos",
        body: "Automação e análise de dados, governança de processos. Do licenciamento à rastreabilidade, passando por insights e treinamento, totalmente auditáveis e em conformidade com ambiente regulatório robusto e rigoroso.",
      },
    ],
    invite: {
      chip: "A sua indústria",
      name: "Opera sob risco regulatório?",
      body: "Se compliance e governança não são opcionais no seu setor, é exatamente onde entregamos melhor.",
      cta: "Vamos conversar",
    },
  },
  provas: {
    badge: "Depoimentos",
    h: "O que dizem de quem trabalha com a gente.",
    intro:
      "Depoimentos de clientes reais. Os cases completos são apresentados sob NDA.",
    items: [
      {
        quote:
          "Trabalho excelente e de grande valor estratégico. A abordagem e as entregas trazem a segurança e a clareza necessárias para os próximos passos e para a implementação das equipes futuras.",
        name: "Guilherme Jaime Dutra",
        role: "CGTI / ANSN",
      },
      {
        quote:
          "Superou as expectativas. Além de entregas rigorosamente no prazo, demonstraram total compreensão com a complexidade do cenário regulatório.",
        name: "Camila Salata",
        role: "Coordenadora CGIR/SEDE · ANSN",
      },
      {
        quote:
          "Um entregável excelente que cumpre o escopo e abre caminhos. Essencial para o nosso plano de crescimento com dados e IA, alinhado com as expectativas dos nossos investidores.",
        name: "Vasco Crivelli Visconti",
        role: "Chiefs Group",
      },
    ],
  },
  governanca: {
    badge: "Governança & Segurança",
    h: "IA pronta para auditoria.",
    lead: "Trabalhamos para a TI, com os padrões da TI. A banda extra de produção que o seu CTO gostaria de ter, sem disputar a fila.",
    cards: [
      {
        title: "Protocolo de Hiroshima",
        body: "Princípios internacionais de governança de IA orientam cada iniciativa.",
      },
      {
        title: "GDPR e LGPD",
        body: "Privacidade e proteção de dados nos padrões europeu e brasileiro, por desenho.",
      },
      {
        title: "EU AI Act",
        body: "Classificação de risco e conformidade com a lei de IA da União Europeia.",
      },
      {
        title: "Zero Trust",
        body: "Cybersecurity com Zero Trust como padrão. Nada é confiável por padrão, tudo é verificado.",
      },
    ],
  },
  socios: {
    badge: "Quem somos",
    hHtml:
      '<span class="text-warm">Décadas</span> de experiência conjunta. AI-native por construção.',
    intro:
      "Menos de um ano de iarandu. Mais de três décadas de ofício em dado e IA, e mais de 30 perfis no time, nem todos humanos.",
    partners: [
      {
        role: "Produtos digitais e IA",
        bio: "Executivo de Produto, 25 anos de experiência. Passagem por Mercado Livre, Coca-Cola, Centauro e TOTVS.",
      },
      {
        role: "Plataforma e Operações",
        bio: "27 anos de liderança em tecnologia. Passagem por Google Cloud e YouTube.",
      },
      {
        role: "Dados e Machine Learning",
        bio: "Matemático Aplicado e Cientista de Dados, 18 anos de experiência em produtos de dados. Passagem por Kaizen Gaming (Betano) e CI&T.",
      },
    ],
    origins:
      "CI&T · Google · USP · Unicamp e outras casas onde dado e IA são ofício. São Paulo · Milano.",
  },
  fechamento: {
    badge: "Comece pelo diagnóstico",
    hHtml:
      'A IA da sua área começa com um <span class="text-warm">diagnóstico</span>.',
    sub: "Um retrato honesto de onde a IA rende mais para a sua área, e o primeiro caso em operação com ganho medido. É assim que começa.",
  },
  footer: {
    tag: "A camada de IA que a sua área de negócio precisa, com a governança que a sua empresa exige.",
    presence: "Presença",
    navigate: "Navegar",
    contact: "Contato",
    cities: ["São Paulo", "Milano"],
    baseCities: "São Paulo · Milano",
  },
};

type Dict = typeof pt;

const en: Dict = {
  meta: {
    title: "iarandu · the AI layer your business needs",
    description:
      "We build the AI layer your business teams need — governed, built to world-class standards, and complementing your IT. Solutions for companies in critical, regulated sectors.",
  },
  common: {
    bookCta: "Book a diagnostic",
    langLabel: "Language",
    homeAria: "iarandu, home",
  },
  nav: {
    ariaSections: "Sections",
    plataforma: "Platform",
    industrias: "Industries",
    depoimentos: "Testimonials",
    quemSomos: "About us",
  },
  hero: {
    hHtml:
      'We build the <span class="text-warm">AI layer</span> your business teams need.',
    sub: "We complement your technology function and deliver AI to your business teams — following approved standards, pipelines and architecture.",
    trustLabel:
      "We specialise in critical applications for highly regulated, high-performance sectors",
    chips: [
      "Radiopharmaceuticals & pharma",
      "Financial services",
      "Software development",
    ],
  },
  stats: {
    ariaLabel: "iarandu in numbers",
    labels: [
      "regulatory regimes",
      "critical sectors served",
      "profiles on the team, not all human",
      "offices · São Paulo & Milan",
    ],
  },
  plataforma: {
    badge: "The platform",
    h: "Everything your business teams need to put AI to work every day.",
    cards: [
      {
        title: "Agents that do the work",
        body: "AI agents take on the repetitive work and streamline execution: they copy, reconcile and translate data between systems that don't talk to each other. Actually working — not just on a slide.",
      },
      {
        title: "Governed data layer",
        body: "We turn scattered data into actionable, auditable information that's ready for AI — always with your IT and to your IT's standards.",
      },
      {
        title: "AI governance",
        body: "Access control, isolation and traceability from day one. Aligned with the Hiroshima Process, GDPR, LGPD and the EU AI Act.",
      },
      {
        title: "Team enablement",
        body: "We train your team and improve your process. Successful AI adoption means your team owning the benefits — with no lock-in.",
      },
    ],
    note: "You use the product running on our platform or your own, always following your IT's security, rules and standards. We stay across the whole process as a hands-on advisor, adapting the AI agents to your company's standards.",
  },
  como: {
    badge: "How it works",
    h: "Agents take on the grunt work. Your team keeps the decisions.",
    intro:
      "No critical process runs without human oversight. Decisions and accountability are explicit and auditable. The agent does the repetitive work; your team decides.",
    steps: [
      {
        title: "Diagnostic",
        body: "An honest picture of your data and AI: what's feasible today, where the risks are, and the use case with the highest return.",
      },
      {
        title: "A use case in production",
        body: "We build a real use case, in production, with the measurement mechanics defined. Evidence, not promises.",
      },
      {
        title: "An autonomous team",
        body: "Your team co-executes and takes the wheel. Every month, less dependence on a vendor.",
      },
    ],
  },
  industrias: {
    badge: "Industries",
    h: "We work with companies where failure isn't an option.",
    intro:
      "We don't learn compliance on your project. We already operate under the rigour of sectors where the margin for error is minimal.",
    cards: [
      {
        chip: "Software",
        name: "Monitoring software development and delivery",
        body: "We use AI to standardise development specs — detecting anomalies, automating tests, and cutting delivery time and deploy rework.",
      },
      {
        chip: "Financial services",
        name: "Investment management",
        body: "Governance and rising AI maturity in service of investment funds and their portfolio companies. Early trend detection and internal-team enablement.",
      },
      {
        chip: "Pharma & radiopharmaceuticals",
        name: "Pharmaceutical and radiopharmaceutical industries",
        body: "Data automation and analysis, process governance. From licensing to traceability — via insights and training — fully auditable and compliant with a robust, rigorous regulatory environment.",
      },
    ],
    invite: {
      chip: "Your industry",
      name: "Do you operate under regulatory risk?",
      body: "If compliance and governance aren't optional in your sector, that's exactly where we deliver best.",
      cta: "Let's talk",
    },
  },
  provas: {
    badge: "Testimonials",
    h: "What people say about working with us.",
    intro:
      "Testimonials from real clients. Full case studies are shared under NDA.",
    items: [
      {
        quote:
          "Excellent work of great strategic value. The approach and deliverables bring the confidence and clarity needed for the next steps and for future teams to build on.",
        name: "Guilherme Jaime Dutra",
        role: "CGTI / ANSN",
      },
      {
        quote:
          "Exceeded expectations. Beyond strictly on-time delivery, they showed a complete grasp of the complexity of the regulatory landscape.",
        name: "Camila Salata",
        role: "Coordinator, CGIR/SEDE · ANSN",
      },
      {
        quote:
          "An excellent deliverable that meets the scope and opens doors. Essential to our growth plan with data and AI, aligned with our investors' expectations.",
        name: "Vasco Crivelli Visconti",
        role: "Chiefs Group",
      },
    ],
  },
  governanca: {
    badge: "Governance & Security",
    h: "AI that's ready for audit.",
    lead: "We work for IT, to IT's standards. The extra band of delivery capacity your CTO wishes they had — without competing for the queue.",
    cards: [
      {
        title: "Hiroshima Process",
        body: "International AI-governance principles guide every initiative.",
      },
      {
        title: "GDPR & LGPD",
        body: "Privacy and data protection to European and Brazilian standards, by design.",
      },
      {
        title: "EU AI Act",
        body: "Risk classification and compliance with the European Union's AI law.",
      },
      {
        title: "Zero Trust",
        body: "Cybersecurity with Zero Trust as the default. Nothing is trusted by default; everything is verified.",
      },
    ],
  },
  socios: {
    badge: "About us",
    hHtml:
      '<span class="text-warm">Decades</span> of combined experience. AI-native by construction.',
    intro:
      "Less than a year of iarandu. More than three decades of craft in data and AI, and over 30 profiles on the team — not all human.",
    partners: [
      {
        role: "Digital products & AI",
        bio: "Product executive, 25 years' experience. Previously at Mercado Livre, Coca-Cola, Centauro and TOTVS.",
      },
      {
        role: "Platform & Operations",
        bio: "27 years of technology leadership. Previously at Google Cloud and YouTube.",
      },
      {
        role: "Data & Machine Learning",
        bio: "Applied mathematician and data scientist, 18 years' experience in data products. Previously at Kaizen Gaming (Betano) and CI&T.",
      },
    ],
    origins:
      "CI&T · Google · USP · Unicamp and other houses where data and AI are a craft. São Paulo · Milan.",
  },
  fechamento: {
    badge: "Start with a diagnostic",
    hHtml:
      'Your team\'s AI starts with a <span class="text-warm">diagnostic</span>.',
    sub: "An honest picture of where AI pays off most for your team, and the first use case in production with measured gains. That's how it starts.",
  },
  footer: {
    tag: "The AI layer your business teams need, with the governance your company demands.",
    presence: "Presence",
    navigate: "Navigate",
    contact: "Contact",
    cities: ["São Paulo", "Milan"],
    baseCities: "São Paulo · Milan",
  },
};

const it: Dict = {
  meta: {
    title: "iarandu · lo strato di IA di cui il tuo business ha bisogno",
    description:
      "Costruiamo lo strato di IA di cui le tue aree di business hanno bisogno: governato, conforme agli standard di riferimento globali e complementare alla tua IT. Soluzioni per aziende in settori critici e regolamentati.",
  },
  common: {
    bookCta: "Prenota una diagnosi",
    langLabel: "Lingua",
    homeAria: "iarandu, home",
  },
  nav: {
    ariaSections: "Sezioni",
    plataforma: "Piattaforma",
    industrias: "Settori",
    depoimentos: "Testimonianze",
    quemSomos: "Chi siamo",
  },
  hero: {
    hHtml:
      'Costruiamo lo <span class="text-warm">strato di IA</span> di cui la tua area di business ha bisogno.',
    sub: "Complementiamo la tua area tecnologica e portiamo l'IA alle tue aree di business, seguendo standard, pipeline e architetture approvati.",
    trustLabel:
      "Siamo specializzati in applicazioni critiche per settori ad alta regolamentazione e performance",
    chips: [
      "Radiofarmaci e farmaceutica",
      "Servizi finanziari",
      "Sviluppo software",
    ],
  },
  stats: {
    ariaLabel: "iarandu in numeri",
    labels: [
      "regimi regolatori",
      "settori critici serviti",
      "profili nel team, non tutti umani",
      "sedi · San Paolo e Milano",
    ],
  },
  plataforma: {
    badge: "La piattaforma",
    h: "Tutto ciò di cui le tue aree di business hanno bisogno per portare l'IA nel lavoro di ogni giorno.",
    cards: [
      {
        title: "Agenti che lavorano",
        body: "Gli agenti di IA si fanno carico del lavoro ripetitivo e ottimizzano l'esecuzione: copiano, riconciliano e traducono i dati tra sistemi che non si parlano. Funzionanti davvero, non nella slide.",
      },
      {
        title: "Strato dati governato",
        body: "Trasformiamo dati dispersi in informazioni utilizzabili e verificabili, pronte per l'IA. Sempre con l'IT e secondo gli standard dell'IT.",
      },
      {
        title: "Governance dell'IA",
        body: "Controllo degli accessi, isolamento e tracciabilità dal primo giorno. In linea con il Processo di Hiroshima, il GDPR, la LGPD e l'EU AI Act.",
      },
      {
        title: "Formazione del team",
        body: "Formiamo il tuo team e miglioriamo il tuo processo. Il successo dell'adozione dell'IA è il tuo team che si appropria dei benefici, senza dipendenza.",
      },
    ],
    note: "Usi il prodotto sulla nostra piattaforma o sulla tua, sempre nel rispetto della sicurezza, delle regole e degli standard della tua IT. Seguiamo tutto il processo come un advisor che mette le mani in pasta, adattando gli agenti di IA agli standard della tua azienda.",
  },
  como: {
    badge: "Come funziona",
    h: "Gli agenti si fanno carico del lavoro pesante. Al tuo team restano le decisioni.",
    intro:
      "Nessun processo critico gira senza supervisione umana. Decisione e responsabilità esplicite e verificabili. L'agente fa il lavoro ripetitivo; il tuo team decide.",
    steps: [
      {
        title: "Diagnosi",
        body: "Un quadro onesto di dati e IA: cosa si può fare oggi, dove sono i rischi e il caso che rende di più.",
      },
      {
        title: "Un caso in produzione",
        body: "Costruiamo un caso reale, in produzione, con la meccanica di misurazione definita. Evidenze, non promesse.",
      },
      {
        title: "Un team autonomo",
        body: "Il tuo team co-esegue e prende il volante. Ogni mese, meno dipendenza dal fornitore.",
      },
    ],
  },
  industrias: {
    badge: "Settori",
    h: "Lavoriamo con aziende dove fallire non è un'opzione.",
    intro:
      "Non impariamo la compliance sul tuo progetto. Operiamo già sotto il rigore di settori dove il margine di errore è minimo.",
    cards: [
      {
        chip: "Software",
        name: "Monitoraggio dello sviluppo e del rilascio del software",
        body: "Usiamo l'IA per standardizzare le specifiche di sviluppo, rilevando anomalie, automatizzando i test e riducendo i tempi di rilascio e le rilavorazioni in fase di deploy.",
      },
      {
        chip: "Servizi finanziari",
        name: "Gestione degli investimenti",
        body: "Governance e crescita della maturità nell'uso dell'IA al servizio di fondi di investimento e delle società partecipate. Identificazione precoce dei trend e formazione del team interno.",
      },
      {
        chip: "Farmaceutica e radiofarmaci",
        name: "Industrie farmaceutiche e radiofarmaci",
        body: "Automazione e analisi dei dati, governance dei processi. Dalla licenza alla tracciabilità, passando per insight e formazione, totalmente verificabili e conformi a un ambiente regolatorio solido e rigoroso.",
      },
    ],
    invite: {
      chip: "Il tuo settore",
      name: "Operi sotto rischio regolatorio?",
      body: "Se compliance e governance non sono opzionali nel tuo settore, è esattamente lì che diamo il meglio.",
      cta: "Parliamone",
    },
  },
  provas: {
    badge: "Testimonianze",
    h: "Cosa dicono di chi lavora con noi.",
    intro:
      "Testimonianze di clienti reali. I case study completi sono presentati sotto NDA.",
    items: [
      {
        quote:
          "Lavoro eccellente e di grande valore strategico. L'approccio e i deliverable danno la sicurezza e la chiarezza necessarie per i prossimi passi e per l'implementazione dei team futuri.",
        name: "Guilherme Jaime Dutra",
        role: "CGTI / ANSN",
      },
      {
        quote:
          "Ha superato le aspettative. Oltre a consegne rigorosamente nei tempi, hanno dimostrato piena comprensione della complessità dello scenario regolatorio.",
        name: "Camila Salata",
        role: "Coordinatrice CGIR/SEDE · ANSN",
      },
      {
        quote:
          "Un deliverable eccellente che rispetta lo scope e apre strade. Essenziale per il nostro piano di crescita con dati e IA, in linea con le aspettative dei nostri investitori.",
        name: "Vasco Crivelli Visconti",
        role: "Chiefs Group",
      },
    ],
  },
  governanca: {
    badge: "Governance e Sicurezza",
    h: "IA pronta per l'audit.",
    lead: "Lavoriamo per l'IT, con gli standard dell'IT. La banda di produzione in più che il tuo CTO vorrebbe avere, senza contendere la coda.",
    cards: [
      {
        title: "Processo di Hiroshima",
        body: "Principi internazionali di governance dell'IA guidano ogni iniziativa.",
      },
      {
        title: "GDPR e LGPD",
        body: "Privacy e protezione dei dati secondo gli standard europei e brasiliani, by design.",
      },
      {
        title: "EU AI Act",
        body: "Classificazione del rischio e conformità alla legge sull'IA dell'Unione Europea.",
      },
      {
        title: "Zero Trust",
        body: "Cybersecurity con Zero Trust come standard. Nulla è affidabile per impostazione predefinita, tutto è verificato.",
      },
    ],
  },
  socios: {
    badge: "Chi siamo",
    hHtml:
      '<span class="text-warm">Decenni</span> di esperienza combinata. AI-native per costruzione.',
    intro:
      "Meno di un anno di iarandu. Oltre tre decenni di mestiere in dati e IA, e più di 30 profili nel team, non tutti umani.",
    partners: [
      {
        role: "Prodotti digitali e IA",
        bio: "Executive di Prodotto, 25 anni di esperienza. Ha lavorato in Mercado Livre, Coca-Cola, Centauro e TOTVS.",
      },
      {
        role: "Piattaforma e Operations",
        bio: "27 anni di leadership nella tecnologia. Ha lavorato in Google Cloud e YouTube.",
      },
      {
        role: "Dati e Machine Learning",
        bio: "Matematico applicato e Data Scientist, 18 anni di esperienza in prodotti dati. Ha lavorato in Kaizen Gaming (Betano) e CI&T.",
      },
    ],
    origins:
      "CI&T · Google · USP · Unicamp e altre case dove dati e IA sono mestiere. San Paolo · Milano.",
  },
  fechamento: {
    badge: "Inizia dalla diagnosi",
    hHtml:
      "L'IA della tua area inizia con una <span class=\"text-warm\">diagnosi</span>.",
    sub: "Un quadro onesto di dove l'IA rende di più per la tua area, e il primo caso in produzione con un guadagno misurato. È così che si comincia.",
  },
  footer: {
    tag: "Lo strato di IA di cui le tue aree di business hanno bisogno, con la governance che la tua azienda esige.",
    presence: "Presenza",
    navigate: "Naviga",
    contact: "Contatto",
    cities: ["San Paolo", "Milano"],
    baseCities: "San Paolo · Milano",
  },
};

export const ui: Record<Lang, Dict> = { pt, en, it };

/** Resolve a locale string (possibly undefined) to a dictionary. */
export function useTranslations(lang: string | undefined): Dict {
  const key = (lang && lang in ui ? lang : defaultLang) as Lang;
  return ui[key];
}

/** Normalise Astro.currentLocale (possibly undefined) to a known Lang. */
export function toLang(lang: string | undefined): Lang {
  return (lang && lang in ui ? lang : defaultLang) as Lang;
}

/** Root path for a given locale (single-page site). */
export const localeHome: Record<Lang, string> = {
  pt: "/",
  en: "/en/",
  it: "/it/",
};
