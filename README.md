# Aviv

Landing page da **Aviv**, célula de jovens da **Igreja Vide**, na Mooca (São Paulo).

Célula é um pequeno grupo de jovens que se reúne toda semana, como uma família, para compartilhar sobre Jesus e sua graça. A página apresenta a célula para quem quer conhecer: quem somos, quando e onde nos reunimos, fotos dos encontros e um botão para falar direto no WhatsApp.

Este projeto também foi criado para testar o [Claude Code](https://claude.com/claude-code).

## Link

Em breve (Vercel).

## Tecnologias

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- `next/image` para otimizar as fotos

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## Como editar

- **Textos, horário, local e WhatsApp:** `app/config.js`
- **Layout e estilo:** `app/page.js`
- **Fotos:** coloque em `public/fotos/` e ajuste a lista `fotos` em `app/config.js`
- **Ícone da aba:** `app/icon.svg`
