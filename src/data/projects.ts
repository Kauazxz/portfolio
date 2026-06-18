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
];

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Ao vivo",
  "in-progress": "Em desenvolvimento",
  concept: "Estudo de caso",
};
