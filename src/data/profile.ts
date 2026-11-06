// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para atualizar o site.

export const profile = {
  name: "Reinaldo Silva Tomicioli",
  shortName: "Reinaldo",
  role: "Senior Software Engineer",
  company: "BTG Pactual",
  location: "Bebedouro, SP — Brasil",
  birthDate: "1997-12-08", // AAAA-MM-DD — a idade é calculada automaticamente
  email: "reinaldo.silva.jr@outlook.com",
  github: "https://github.com/reinaldo-silva",
  githubUser: "reinaldo-silva",
  linkedin: "https://www.linkedin.com/in/reinaldo-silvat",
  headline: "Construo APIs, serviços serverless e interfaces escaláveis para o mercado financeiro.",
  typing: [
    "React • Node.js • AWS • Golang",
    "TypeScript do front ao back",
    "Serverless com AWS Lambda",
    "Micro frontends com single-spa",
    "Ex-líder técnico de times de dev",
  ],
  about: [
    "Sou o Reinaldo, Senior Software Engineer no BTG Pactual. Trabalho na plataforma de Relações com Investidores: APIs em .NET e PostgreSQL, deploys na Azure, integrações com AWS, rotinas agendadas e comunicação em tempo real com WebSockets — e, no front, React em uma arquitetura de micro frontends com single-spa.",
    "Antes disso, na CI&T, construí serviços desacoplados e serverless com Node.js e AWS Lambda, integrando produtos de diferentes times sob alta demanda. Também liderei times de desenvolvimento na Okalab, na Prevlife e na Imobpower, orientando devs mais juniores e tomando decisões de arquitetura — de microsserviços a monolitos bem estruturados.",
    "Meu dia a dia é majoritariamente TypeScript, mas transito bem por Java, Python, C# e Go. Valorizo Clean Code, SOLID e testes automatizados, e gosto de ser dono de uma entrega do design à produção.",
  ],
  stats: [
    { k: "6+", v: "anos desenvolvendo software" },
    { k: "5", v: "empresas na carreira" },
    { k: "AWS", v: "serverless no dia a dia" },
  ],
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo?: string;
  accent: "blue" | "violet" | "emerald";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "catalogo",
    name: "Catálogo Multiempresa",
    tagline: "SaaS multi-tenant de catálogos de produtos",
    description:
      "Plataforma onde cada empresa cadastra seus produtos e compartilha um link público próprio. Monorepo com API, catálogo público e painel administrativo, com isolamento total de dados entre empresas.",
    highlights: [
      "Multi-tenant: toda consulta filtra por empresa",
      "Monorepo com tipos compartilhados entre API e fronts",
      "SSR para preview de links no WhatsApp e SEO",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "React + Vite", "Tailwind", "JWT"],
    repo: "https://github.com/reinaldo-silva/catalogo",
    accent: "blue",
    featured: true,
  },
  {
    slug: "secret-santa",
    name: "Secret Santa",
    tagline: "Amigo secreto P2P, sem cadastro e sem backend",
    description:
      "Amigo secreto que roda inteiramente no navegador. A sala sincroniza ao vivo via WebRTC e cada resultado é criptografado com a chave do próprio participante — nem o organizador vê.",
    highlights: [
      "P2P em tempo real via WebRTC",
      "Resultados criptografados por participante",
      "Zero backend: estado local + fragmento de URL",
    ],
    stack: ["React", "Vite", "WebRTC", "Tailwind", "Vitest"],
    repo: "https://github.com/reinaldo-silva/secret-santa",
    demo: "https://amigo-secreto-nine-livid.vercel.app/",
    accent: "violet",
  },
  {
    slug: "linky",
    name: "Linky!",
    tagline: "Encurtador de URLs rápido e simples",
    description:
      "Encurte links longos em URLs curtas, com expiração opcional. IDs únicos e seguros com nanoid e armazenamento em Redis serverless com baixa latência.",
    highlights: [
      "Expiração opcional por link",
      "Redis serverless com Upstash",
      "Animações fluidas com React Spring",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Upstash Redis", "nanoid"],
    repo: "https://github.com/reinaldo-silva/linky",
    accent: "emerald",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "single-spa", "Tailwind", "Vite"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Fastify", ".NET / C#", "Go", "Java", "Python", "Prisma", "WebSockets"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS Lambda", "SQS", "SNS", "S3", "Glue", "RDS", "Azure DevOps", "Docker"],
  },
  {
    group: "Dados & Qualidade",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Jest", "Robot Framework"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  current?: boolean;
  description: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "BTG Pactual",
    period: "abr 2026 — atual",
    location: "Brasil",
    current: true,
    description:
      "Desenvolvimento e evolução da plataforma de Relações com Investidores (RI), que movimenta um grande volume de informações estratégicas. APIs e serviços em .NET e PostgreSQL, deploys e releases na Azure, integrações via AWS, rotinas com Cron e tempo real com WebSockets. No front, React em arquitetura de micro frontends com single-spa.",
    tags: [".NET", "PostgreSQL", "Azure", "AWS", "WebSockets", "React", "single-spa"],
  },
  {
    role: "Engenheiro de Software",
    company: "CI&T",
    period: "nov 2024 — abr 2026",
    location: "Campinas, SP",
    description:
      "Serviços desacoplados e serverless com Node.js e AWS Lambda, integrando produtos de diferentes times sob alta demanda. Clean Code e SOLID, testes automatizados com Jest e Robot Framework e participação nas decisões de arquitetura.",
    tags: ["TypeScript", "Node.js", "AWS Lambda", "DynamoDB", "SQS/SNS", "Jest"],
  },
  {
    role: "Coordenador de Desenvolvimento",
    company: "Okalab",
    period: "ago 2023 — nov 2024",
    location: "Bebedouro, SP",
    description:
      "Liderança técnica do time de desenvolvimento: orientação de devs mais juniores, definição dos próximos passos e decisões de arquitetura — microsserviços, camadas ou monolito, conforme o projeto. Stack 100% JS/TS.",
    tags: ["Node.js", "Fastify", "React", "Next.js", "Prisma", "PostgreSQL", "MongoDB"],
  },
  {
    role: "Engenheiro de Software (Full Stack)",
    company: "Prevlife",
    period: "ago 2023 — nov 2024",
    location: "Barretos, SP",
    description:
      "Liderança do desenvolvimento de software, participação ativa nas decisões do time e suporte técnico ao crescimento de desenvolvedores mais juniores.",
    tags: ["Full Stack", "Liderança técnica"],
  },
  {
    role: "Desenvolvedor Pleno / Coordenador de Desenvolvimento",
    company: "Imobpower",
    period: "set 2021 — jul 2023",
    location: "Bebedouro, SP",
    description:
      "Criação e manutenção de soluções de software, envolvimento em decisões arquiteturais e responsabilidades avançadas nos projetos do time.",
    tags: ["Arquitetura", "Coordenação"],
  },
  {
    role: "Desenvolvedor Web Júnior",
    company: "Imobpower",
    period: "jun 2020 — set 2021",
    location: "Bebedouro, SP",
    description: "Início da carreira como desenvolvedor web.",
    tags: ["Web"],
  },
];

export const education = [
  {
    title: "Gestão de Sistemas de Informação",
    place: "UNIFAFIBE",
    period: "2018 — 2022",
    kind: "Graduação",
  },
  {
    title: "Técnico em Informática",
    place: "ETEC Professor Idio Zucchi",
    period: "2014 — 2015",
    kind: "Técnico",
  },
];

export const certifications = [
  "Integration Masterclass Certificate",
  "C#: Formação Básica",
  "Técnico em Informática",
  "NLW IA",
  "Go",
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional limitado" },
];

export const highlights = ["Intercâmbio em Portugal — 6 meses"];
