# Bar do Jeiz — web

Feed do Bar do Jeiz rodando 100% estático: sem backend, sem banco, só um JSON
chumbado dentro do próprio site. Online em
[gui1949.github.io/BardoJeiz](https://gui1949.github.io/BardoJeiz/).

## Stack

- React 19 + Vite
- GSAP (`@gsap/react` + ScrollTrigger) para as animações
- Dados estáticos em `public/data/posts.json` e `src/data/jeiz.json`

## Rodando

```bash
npm install
npm run dev
```

Build de produção (sai direto em `docs/`, que é o que o GitHub Pages publica):

```bash
npm run build
```

## Dados

O `public/data/posts.json` é um dump do SQLite do antigo
[BardoJeiz-server](https://github.com/Gui1949/BardoJeiz-server) (tabela `POSTS`).
As imagens que ficavam hospedadas no backend foram copiadas para `public/img` e
as URLs reescritas para caminhos relativos.

Pra regerar a partir de um clone do server ao lado deste repositório:

```bash
npm run export:posts
```

O `src/data/jeiz.json` alimenta o gerador de frases do balcão, portado do
`services/geradorFrase.js` do server.

As reações (like/dislike) agora são locais, guardadas no `localStorage` do
navegador — sem backend não tem contador global.
