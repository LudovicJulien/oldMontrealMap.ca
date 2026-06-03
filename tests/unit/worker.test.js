import { describe, it, expect, vi, beforeEach } from 'vitest';
import worker from '../../worker/index.js';

const EN_HTML = `<html lang="en">
<head><title>Old Montréal Official Map 2026 | Free PDF Walking Map</title></head>
<body><h1>Old Montréal</h1></body>
</html>`;

const makeEnv = (html = EN_HTML) => ({
  ASSETS: {
    fetch: vi.fn().mockResolvedValue(
      new Response(html, {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'content-length': String(html.length),
        },
      })
    ),
  },
});

describe('Worker — security', () => {
  it('blocks /wrangler.toml', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/wrangler.toml'),
      makeEnv()
    );
    expect(res.status).toBe(404);
  });

  it('blocks paths under /src/', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/src/index.js'),
      makeEnv()
    );
    expect(res.status).toBe(404);
  });

  it('does not call ASSETS for blocked paths', async () => {
    const env = makeEnv();
    await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/wrangler.toml'),
      env
    );
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });
});

describe('Worker — English domain', () => {
  it('passes the request through to ASSETS unchanged', async () => {
    const env = makeEnv();
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      env
    );
    expect(res.status).toBe(200);
    expect(env.ASSETS.fetch).toHaveBeenCalledOnce();
  });

  it('does not modify the HTML on the EN domain', async () => {
    const env = makeEnv();
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      env
    );
    const html = await res.text();
    expect(html).toContain('lang="en"');
    expect(html).not.toContain('lang="fr"');
  });
});

describe('Worker — French domain (cartevieuxmontreal.ca)', () => {
  it('applies FR translations to HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    const html = await res.text();
    expect(html).toContain('lang="fr"');
    expect(html).toContain('Carte officielle Vieux-Montréal 2026');
  });

  it('removes content-length to avoid mismatch after rewrite', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    expect(res.headers.get('content-length')).toBeNull();
  });

  it('sets X-Worker-Executed header on FR HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    expect(res.headers.get('X-Worker-Executed')).toBe('lang=fr,replaced=true');
  });

  it('does not transform non-HTML assets (images, PDFs)', async () => {
    const env = {
      ASSETS: {
        fetch: vi.fn().mockResolvedValue(
          new Response(new Uint8Array([0, 1, 2]), {
            status: 200,
            headers: { 'content-type': 'image/webp' },
          })
        ),
      },
    };
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/images/carte-cover.webp'),
      env
    );
    expect(res.headers.get('X-Worker-Executed')).toBeNull();
  });
});

describe('Worker — FR custom responses', () => {
  it('serves a valid FR sitemap.xml without hitting ASSETS', async () => {
    const env = makeEnv();
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/sitemap.xml'),
      env
    );
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('application/xml');
    const xml = await res.text();
    expect(xml).toContain('<urlset');
    expect(xml).toContain('cartevieuxmontreal.ca');
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it('serves a FR robots.txt pointing to the FR sitemap', async () => {
    const env = makeEnv();
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/robots.txt'),
      env
    );
    const text = await res.text();
    expect(text).toContain('Sitemap: https://www.cartevieuxmontreal.ca/sitemap.xml');
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });
});
