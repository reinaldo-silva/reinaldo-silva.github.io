# reinaldo-silva.github.io

Meu portfólio pessoal: quem sou, experiência, stack e projetos.

🔗 **https://reinaldo-silva.github.io**

## Stack

- [Next.js](https://nextjs.org) (App Router, export estático)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- Deploy automático no **GitHub Pages** via GitHub Actions

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Acesse http://localhost:3000.

## Editando o conteúdo

Todo o texto do site (sobre, projetos, experiência, stack, formação) fica em
[`src/data/profile.ts`](src/data/profile.ts). A idade é calculada automaticamente
a partir de `birthDate`.

## Deploy

Todo push na branch `main` gera o build estático (`out/`) e publica no GitHub Pages
pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
