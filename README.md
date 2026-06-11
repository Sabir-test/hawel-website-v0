# hawel-branding-identity

Feature branch for the Hawel website branding identity. This branch owns all brand identity related work: defining and documenting the brand theme (colors, logo, slogan), brand tone (marketing approach for customers vs investors), feature branding, and marketing artifacts (company profile, brochures, social media posts, website content, and any public-facing media).

Audit findings and brand identity references are maintained in [`docs/`](docs/) — see [`docs/audit-report.md`](docs/audit-report.md) for the full audit and [`docs/brand-guidelines.md`](docs/brand-guidelines.md) for brand rules.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

The project is structured as a **single Next.js app** with route-based dashboards, all sharing a common design system:

```
app/
├── (marketing)/     → Company website (public)
├── merchant/        → Merchant dashboard
├── user/            → User portal
├── admin/           → System admin panel
└── partner/         → Partner interface (5th dashboard)
```

This keeps Vercel free tier simple: one project, one production domain, and unlimited preview URLs per branch.

## Git Workflow & Branch Strategy

### Branch Overview

| Branch | Purpose | Auto-Deploy |
|--------|---------|-------------|
| `main` | Production | ✅ Live on Vercel |
| `feat/branding-identity` | Branding, theme, visual identity | 🔄 Preview |
| `feat/backend-services` | Payment gateway, Tap2Phone, EBS Backend | 🔄 Preview |
| `feat/merchant-dashboard` | Merchant interface | 🔄 Preview |
| `feat/admin-panel` | System admin dashboard | 🔄 Preview |
| `feat/user-portal` | User portal | 🔄 Preview |
| `feat/marketing-*` | Company website updates | 🔄 Preview |
| `feat/*` / `fix/*` | Any short-lived feature or fix | 🔄 Preview |

### Naming Convention

- **`feat/<scope>-<descriptor>`** — e.g., `feat/merchant-transactions-table`, `feat/admin-user-management`
- **`fix/<scope>-<descriptor>`** — e.g., `fix/merchant-payment-validation`

### Daily Workflow

```bash
# 1. Start from latest main
git checkout main && git pull

# 2. Create a feature branch
git checkout -b feat/merchant-transactions-table

# 3. Work, commit, push
git add .
git commit -m "feat(merchant): add transactions table"
git push -u origin feat/merchant-transactions-table

# 4. Open a PR on GitHub
#    Vercel automatically creates a preview URL like:
#    https://hawel-website-v0-git-feat-merchant-transactions.vercel.app

# 5. Share the preview URL for live review

# 6. Squash-merge to main → auto-deploys to production

# 7. Delete the branch (GitHub offers this after merge)
```

### Vercel Preview Deployments

Every push to a non-`main` branch generates a unique preview URL. This means:

- Each PR gets its own live URL — share it with stakeholders for review
- Preview deployments reflect the exact state of that branch
- No extra configuration needed — Vercel Hobby plan includes this

### Key Rules

1. **Never commit directly to `main`** — always use a PR
2. **One feature = one branch** — keep branches scoped and short-lived
3. **Delete after merge** — keeps the remote clean
4. **Rebase off `main`** before opening a PR to resolve conflicts locally
