export type ProjectStatus = "live" | "in-progress" | "concept";

export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  highlights: string[];
  tags: string[];
  demoUrl: string | null;
  codeUrl: string | null;
  caseUrl: string | null;
  previewImage: string | null;
  status: ProjectStatus;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "mao-certa",
    title: "MãoCerta",
    role: "Produto digital · Marketplace de serviços · Web app",
    year: "2026",
    description:
      "Aplicação web que conecta clientes a profissionais de serviços presenciais. O cliente pode buscar um profissional ou publicar uma demanda, enquanto o profissional encontra oportunidades e entra em contato para combinar os detalhes do serviço.",
    highlights: [
      "Perfis para cliente e profissional",
      "Busca e publicação de demandas",
      "Fluxo de contratação de serviços",
      "Autenticação com Supabase",
      "Banco de dados PostgreSQL",
      "Interface responsiva para desktop e mobile",
      "Deploy na Vercel",
    ],
    tags: ["Next.js 14", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    demoUrl: "https://mao-certa.vercel.app/",
    codeUrl: "https://github.com/Kauazxz/MaoCerta",
    caseUrl: "/projetos/mao-certa",
    previewImage: "/projects/mao-certa/hero.png",
    status: "live",
    featured: true,
  },
  {
    id: "vistopred",
    title: "VistoPred",
    role: "Site institucional · Front-end · Web",
    year: "2026",
    description:
      "Site institucional da VistoPred — empresa do app de inspeção, manutenção e gestão predial. Fui responsável pelo desenvolvimento do site (o aplicativo é o produto da empresa): apresentação do produto, soluções, blog, downloads e contato.",
    highlights: [
      "Site multipágina (home, sobre, soluções, blog, downloads, tutoriais, contato)",
      "Design system próprio com tema claro/escuro",
      "Logo 3D interativa com model-viewer",
      "Blog em Markdown com sumário e busca",
      "Deploy contínuo no Cloudflare Pages",
    ],
    tags: ["Astro", "Svelte", "TypeScript", "Design system (CSS)", "Cloudflare Pages"],
    demoUrl: "https://vistopred.pages.dev",
    codeUrl: null,
    caseUrl: "/projetos/vistopred",
    previewImage: "/projects/vistopred/hero.png",
    status: "in-progress",
    featured: false,
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Ao vivo",
  "in-progress": "Em andamento",
  concept: "Estudo de caso",
};
