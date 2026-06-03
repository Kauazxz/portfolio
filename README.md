# Portfólio

Site pessoal — desenvolvimento, design, IA e motion.

## Stack

- Astro 6
- Tailwind CSS v4
- React (ilhas para interatividade)
- TypeScript (strict)

## Estrutura

```
src/
├── components/   componentes Astro e React
├── layouts/      layout base
├── pages/        rotas
└── styles/       global.css com tokens e Tailwind
public/           assets estáticos
```

## Comandos

| Comando            | Ação                                       |
| :----------------- | :----------------------------------------- |
| `npm install`      | Instala dependências                       |
| `npm run dev`      | Servidor de desenvolvimento em `:4321`     |
| `npm run build`    | Build de produção em `./dist/`             |
| `npm run preview`  | Pré-visualiza o build localmente           |

## Design tokens

Cores, tipografia e easing ficam em [`src/styles/global.css`](src/styles/global.css) dentro do bloco `@theme`. Tailwind v4 expõe automaticamente como utilitários (`bg-accent`, `text-fg-muted`, etc.).
