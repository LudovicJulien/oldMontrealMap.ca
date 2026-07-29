import { test, expect } from '@playwright/test';

// These tests hit the live production domains directly. Each describe block
// below loads its page exactly once (shared across its tests) instead of once
// per assertion, and skips image/font/media subresources — otherwise the full
// suite generates enough request volume to trip Cloudflare's rate-limiting.
async function openPage(browser, url) {
  const page = await browser.newPage();
  await page.route('**/*', (route) => {
    const type = route.request().resourceType();
    if (type === 'image' || type === 'font' || type === 'media') return route.abort();
    return route.continue();
  });
  await page.goto(url);
  return page;
}

// ── English site ──────────────────────────────────────────────────────────────

test.describe.serial('EN — oldmontrealmap.ca', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await openPage(browser, 'https://www.oldmontrealmap.ca/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('page loads with correct title', async () => {
    await expect(page).toHaveTitle(/Old Montréal Official Map/);
  });

  test('html lang attribute is "en"', async () => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('hero heading is visible above the fold', async () => {
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('EN PDF link is present and points to /old-montreal-map-pdf', async () => {
    const pdfLink = page.locator('a[href="/old-montreal-map-pdf"]').first();
    await expect(pdfLink).toBeVisible();
  });

  test('all in-page nav links point to existing sections', async () => {
    const navLinks = await page.locator('nav a[href^="#"]').all();
    expect(navLinks.length).toBeGreaterThan(0);
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      await expect(page.locator(href).first()).toBeAttached();
    }
  });

  test('Open Graph title matches page title', async () => {
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute('content');
    const pageTitle = await page.title();
    expect(ogTitle).toBe(pageTitle);
  });

  test('old-montreal-official-map-2026.pdf is accessible (HTTP 200)', async ({ request }) => {
    const res = await request.get('https://www.oldmontrealmap.ca/old-montreal-official-map-2026.pdf');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
  });
});

// ── French site ───────────────────────────────────────────────────────────────

test.describe.serial('FR — cartevieuxmontreal.ca', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await openPage(browser, 'https://www.cartevieuxmontreal.ca/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('page loads with correct FR title', async () => {
    await expect(page).toHaveTitle(/Carte officielle Vieux-Montréal/);
  });

  test('html lang attribute is "fr"', async () => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  });

  test('FR PDF link points to /carte-vieux-montreal-pdf', async () => {
    const pdfLink = page.locator('a[href="/carte-vieux-montreal-pdf"]').first();
    await expect(pdfLink).toBeVisible();
  });

  test('carte-officielle-vieux-montreal-2026.pdf is accessible (HTTP 200)', async ({ request }) => {
    const res = await request.get('https://www.cartevieuxmontreal.ca/carte-officielle-vieux-montreal-2026.pdf');
    expect(res.status()).toBe(200);
  });

  test('FR sitemap.xml is valid XML listing cartevieuxmontreal.ca', async ({ request }) => {
    const res = await request.get('https://www.cartevieuxmontreal.ca/sitemap.xml');
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain('<urlset');
    expect(body).toContain('cartevieuxmontreal.ca');
    expect(body).not.toContain('oldmontrealmap.ca');
  });

  test('FR robots.txt points to the FR sitemap', async ({ request }) => {
    const res = await request.get('https://www.cartevieuxmontreal.ca/robots.txt');
    const text = await res.text();
    expect(text).toContain('cartevieuxmontreal.ca/sitemap.xml');
  });
});

// ── Security ──────────────────────────────────────────────────────────────────

test.describe('Security', () => {
  test('wrangler.toml returns 404', async ({ request }) => {
    const res = await request.get('https://www.oldmontrealmap.ca/wrangler.toml');
    expect(res.status()).toBe(404);
  });

  test('/src/ path returns 404', async ({ request }) => {
    const res = await request.get('https://www.oldmontrealmap.ca/src/index.js');
    expect(res.status()).toBe(404);
  });
});

// ── Mobile ────────────────────────────────────────────────────────────────────

test.describe.serial('Mobile — iPhone 14 viewport', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
    await page.route('**/*', (route) => {
      const type = route.request().resourceType();
      if (type === 'image' || type === 'font' || type === 'media') return route.abort();
      return route.continue();
    });
    await page.goto('https://www.oldmontrealmap.ca/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('hero heading is visible on mobile', async () => {
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('sticky bar appears after scrolling past the hero', async () => {
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(600);
    await expect(page.locator('#sticky-bar')).toBeVisible();
  });
});
