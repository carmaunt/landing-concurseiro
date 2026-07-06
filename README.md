# Concurseiro Landing Page

Landing page estática em React, Vite e Tailwind CSS para o app Android Concurseiro.

## Rodar localmente

```bash
npm install
npm run dev
```

O Vite abre por padrão em `http://localhost:5173/`.

## Validar produção

```bash
npm run typecheck
npm run build
npm run serve
```

## Deploy recomendado

Netlify:

- Build command: `npm run build`
- Publish directory: `dist/public`
- Environment variable: `BASE_PATH=/`

Cloudflare Pages:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist/public`
- Environment variable: `BASE_PATH=/`

## Análise de campanha

Veja [ANALYTICS.md](./ANALYTICS.md) para o funil, eventos enviados e padrão de UTM recomendado para anúncios.
