import { test, expect } from '@playwright/test';

// ── English site ──────────────────────────────────────────────────────────────

test.describe('EN — oldmontrealmap.ca', () => {
  test.use({ baseURL: 'https://www.oldmontrealmap.ca' });

  test('page loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Old Montréal Official Map/);
  });

  test('html lang attribute is "en"', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('hero heading is visible above the fold', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('EN PDF link is present and points to old-montreal-official-map-2026.pdf', async ({ page }) => {
    await page.goto('/');
    const pdfLink = page.locator('a[href="old-montreal-official-map-2026.pdf"]').first();
    await expect(pdfLink).toBeVisible();
  });

  test('old-montreal-official-map-2026.pdf is accessible (HTTP 200)', async ({ request }) => {
    const res = await request.get('https://www.oldmontrealmap.ca/old-montreal-official-map-2026.pdf');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
  });

  test('all in-page nav links point to existing sections', async ({ page }) => {
    await page.goto('/');
    const navLinks = await page.locator('nav a[href^="#"]').all();
    expect(navLinks.length).toBeGreaterThan(0);
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      await expect(page.locator(href).first()).toBeAttached();
    }
  });

  test('Open Graph title matches page title', async ({ page }) => {
    await page.goto('/');
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute('content');
    const pageTitle = await page.title();
    expect(ogTitle).toBe(pageTitle);
  });
});

// ── French site ───────────────────────────────────────────────────────────────

test.describe('FR — cartevieuxmontreal.ca', () => {
  test.use({ baseURL: 'https://www.cartevieuxmontreal.ca' });

  test('page loads with correct FR title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Carte officielle Vieux-Montréal/);
  });

  test('html lang attribute is "fr"', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  });

  test('FR PDF link points to carte-officielle-vieux-montreal-2026.pdf', async ({ page }) => {
    await page.goto('/');
    const pdfLink = page.locator('a[href="carte-officielle-vieux-montreal-2026.pdf"]').first();
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

test.describe('Mobile — iPhone 14 viewport', () => {
  test.use({
    baseURL: 'https://www.oldmontrealmap.ca',
    viewport: { width: 390, height: 844 },
  });

  test('hero heading is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('sticky bar appears after scrolling past the hero', async ({ page }) => {
    await page.goto('https://www.oldmontrealmap.ca/');
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(600);
    await expect(page.locator('#sticky-bar')).toBeVisible();
  });
});
