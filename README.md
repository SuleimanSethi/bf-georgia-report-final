# Georgia Collection — Campaign Analytics Dashboard

A premium dark-mode analytics dashboard for Brawn & Fox's Georgia Collection campaign (March 24 – April 13, 2026). Built with Next.js 14, React 18, TypeScript, Tailwind CSS, Motion, and Recharts. Mission-control aesthetic with warm brass/gold + copper palette, full animations, scanline effects, animated grid, and all 11 campaign sections.

---

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # static export → ./out/
npm run lint
```

`npm run build` emits a fully static `./out/` directory — no server required.

---

## Deploy to GitHub Pages

1. **Create the repo** — name it `georgia-dashboard` (or update `basePath` below if the name differs).

2. **Push to `main`**:
   ```bash
   git init
   git remote add origin https://github.com/<username>/georgia-dashboard.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **Enable GitHub Pages** — in repo Settings → Pages → Source: **GitHub Actions**.

4. The included workflow (`.github/workflows/deploy.yml`) triggers automatically on push to `main`, builds the site, and deploys the `out/` directory to the `gh-pages` branch via the official Pages action.

5. Dashboard goes live at: `https://<username>.github.io/georgia-dashboard/`

---

## Changing the Repo Name

If you rename the repo from `georgia-dashboard`, update `next.config.js`:

```js
basePath:    '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

---

## Local Development

```bash
npm run dev
```

Preview at `http://localhost:3000`. The `basePath` is empty in development (`NODE_ENV !== 'production'`), so all paths resolve correctly locally.

---

## Project Structure

```
georgia-dashboard/
├── next.config.js          # Static export + GitHub Pages config
├── tailwind.config.ts
├── postcss.config.js
├── public/
│   ├── .nojekyll           # Prevents Jekyll processing on GitHub Pages
│   └── brawn-fox-logo.svg  # Logo asset (also inlined as React component)
├── src/
│   ├── data/
│   │   └── campaign.ts     # All static campaign data in one place
│   └── app/
│       ├── tokens.ts       # Design tokens (colors, backgrounds)
│       ├── layout.tsx      # Root layout — Inter font via next/font/google
│       ├── globals.css     # Tailwind + all animation keyframes
│       ├── page.tsx        # Entry point
│       └── components/
│           ├── Dashboard.tsx          # Root layout, assembles all sections
│           ├── BrawnFoxLogo.tsx       # Inline SVG logo component
│           ├── Shared.tsx             # Shared hooks + UI primitives
│           ├── HeroHeader.tsx         # Section 1 — header
│           ├── HeadlineMetrics.tsx    # Section 2 — 6 key metrics (2×3)
│           ├── CampaignTimeline.tsx   # Section 3 — timeline + week cards
│           ├── MetaAdsSection.tsx     # Section 4 — Meta ad performance
│           ├── EmailSection.tsx       # Section 5 — Klaviyo email
│           ├── ProductSection.tsx     # Section 6 — SKU + cart data
│           ├── CustomerSection.tsx    # Section 7 — acquisition donut
│           ├── GeographySection.tsx   # Section 8 — state-by-state bars
│           ├── AttributionSection.tsx # Section 9 — attribution donut
│           ├── BaselineSection.tsx    # Section 10 — lift vs baseline
│           └── BrandMomentum.tsx      # Section 11 — footer + social stats
```
