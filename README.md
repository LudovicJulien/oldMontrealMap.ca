# Old Montréal Official Map

> Production website for the award-winning tourist map of Old Montréal. Served in English and French from a **single HTML file**, with no framework, no build step, and no client-side i18n.

[![CI](https://github.com/LudovicJulien/oldMontrealMap.ca/actions/workflows/ci.yml/badge.svg)](https://github.com/LudovicJulien/oldMontrealMap.ca/actions/workflows/ci.yml)
[![Deploy](https://github.com/LudovicJulien/oldMontrealMap.ca/actions/workflows/cd.yml/badge.svg)](https://github.com/LudovicJulien/oldMontrealMap.ca/actions/workflows/cd.yml)

**Live →** [oldmontrealmap.ca](https://www.oldmontrealmap.ca) &nbsp;·&nbsp; [cartevieuxmontreal.ca](https://www.cartevieuxmontreal.ca)

![Site preview](./public/img/og-preview.webp)

---

## The engineering problem

Most bilingual static sites make one of three compromises:

| Approach | Drawback |
|---|---|
| Two separate HTML files | Content duplication, maintenance drift |
| Client-side JS i18n (React Intl, i18next…) | Adds 50 KB+ JS, bad for SEO, language flash on load |
| Full SSR framework (Next.js, Nuxt…) | Overkill for a one-page static site |

This site uses a fourth option: a **Cloudflare Worker that rewrites the English HTML into French at the edge**, on every request to the French domain. The visitor's browser receives a fully-rendered French page with no JavaScript involved, which is exactly what a search engine crawler sees too.

---

## Architecture

```
HTTP request
     │
     ├─ cartevieuxmontreal.ca ──► Worker applies FR string-replacement table
     │                             ├─ lang="en"        →  lang="fr"
     │                             ├─ EN title/meta    →  FR equivalents
     │                             ├─ JSON-LD schema   →  FR domain URLs
     │                             ├─ /sitemap.xml     →  generated FR sitemap
     │                             └─ /robots.txt      →  generated FR robots
     │
     └─ oldmontrealmap.ca ─────► Worker passes through to static assets
```

`worker/index.js` holds a single ordered replacement table (`const FR = [...]`). Adding or updating a string in either language is a one-line change in one file.

---

## Key engineering decisions

**Inlined critical CSS:** All styles live in a `<style>` block in `<head>`, eliminating the render-blocking stylesheet request that an external CSS file would cause. First Contentful Paint is limited only by HTML delivery speed.

**WebP with @1x / @2x variants:** Hero images are preloaded with `fetchpriority="high"` and served via `<source srcset>`. Mobile devices receive the @1x variant (~half the bytes); retina displays get @2x.

**Font faces inlined, not linked:** `@font-face` declarations are inlined so the browser can start downloading fonts as soon as the HTML is parsed, before any external stylesheet would have loaded. A `<noscript>` fallback loads from Google Fonts for non-JS environments.

**Deterministic FR rewrite:** Replacement pairs are ordered so that longer strings are matched before their substrings, preventing partial matches from corrupting subsequent substitutions.

**Edge security:** The Worker blocks direct access to `wrangler.toml` and `/src/` paths before they can reach the asset bucket.

---

## Stack

| Layer | Technology |
|---|---|
| Edge runtime | Cloudflare Workers |
| Static assets | Cloudflare Workers Assets |
| Markup | Semantic HTML5 |
| Styles | Inlined critical CSS, no framework |
| Interactivity | Vanilla JS · Web Share API |
| SEO | hreflang · Open Graph · JSON-LD · geo meta |
| Testing | Vitest (unit) · Playwright (E2E) |
| CI/CD | GitHub Actions |

---

## Project structure

```
public/
  index.html          Single source for both EN and FR
  images/             WebP images with @1x / @2x responsive variants
  mapeng.pdf          English map
  mapfr.pdf           French map

worker/
  index.js            Cloudflare Worker: routing, FR rewrite, sitemap generation

tests/
  unit/               Vitest: Worker routing and rewrite logic (11 tests)
  e2e/                Playwright: live smoke tests on both domains (34 tests)

.github/workflows/
  ci.yml              Unit tests on every push and pull request
  cd.yml              Deploy → E2E smoke tests against production

backup2023/           Archived 2023 version (reference only)
```

---

## Local development

```bash
# Install dependencies and Playwright browser
npm install

# Preview locally with the Worker active
npx wrangler dev
```

> `wrangler dev` requires `CLOUDFLARE_API_TOKEN` in your environment.

---

## Testing

```bash
# Unit tests (Worker logic, no network required, ~1s)
npm test

# E2E smoke tests against the live site
npm run test:e2e

# Visual test debugger
npm run test:e2e:ui
```

**Unit tests** cover: security path blocking, EN passthrough, FR HTML rewriting, `content-length` header removal after rewrite, `X-Worker-Executed` header, FR sitemap and robots generation, non-HTML asset passthrough.

**E2E tests** cover: page titles, `lang` attributes, PDF availability (HTTP 200), in-page anchor links, Open Graph metadata consistency, FR domain translations, FR sitemap validity, mobile sticky CTA visibility after scroll, security rules on the live site.

---

## CI/CD pipeline

```
git push main
  ├─ ci.yml  →  Vitest unit tests          (fails fast, no deploy on broken logic)
  └─ cd.yml  →  wrangler deploy
                └─ E2E smoke tests         (validates the live deployment)
```

The `CLOUDFLARE_API_TOKEN` secret must be configured in the repository's GitHub Actions settings.
