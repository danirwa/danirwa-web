# Danirwa Web

Public product website for Danirwa.

## Stack

- React 19
- Vite 7
- Radix UI Dialog for accessible mobile navigation
- Custom CSS design tokens and responsive layout
- Cloudflare Workers static asset deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Cloudflare Workers build settings:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Node version: 22
- Static asset directory: `dist`

## Routes

- `/`
- `/privacy`
- `/terms`
- `/support`

The product UI on the homepage is explicitly labeled as a prototype and uses example data.
