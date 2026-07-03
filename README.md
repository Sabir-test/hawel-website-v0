# hawel-website-v0

A [Next.js](https://nextjs.org) project for the Hawel website.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — merges auto-deploy to Vercel |
| `feat/branding-identity` | Branding, theme, and visual identity |
| `feat/services` | Payment gateway, Tap2Phone, EBS Backend |
| `feat/*` / `fix/*` | Short-lived feature or fix branches |

**Workflow:**
1. Create a feature branch off `main`
2. Develop locally and commit
3. Push and open a PR into `main`
4. Squash-merge → auto-deploys to Vercel
5. Delete the branch after merge
