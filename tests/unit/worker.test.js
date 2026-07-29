import { describe, it, expect, vi, beforeEach } from 'vitest';
import worker from '../../worker/index.js';

const EN_HTML = `<html lang="en">
<head><title>Old Montréal Official Map 2026 | Free PDF Walking Map</title><style>body{color:red}</style></head>
<body><script>console.log('hello')</script><h1>Old Montréal</h1></body>
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

  it('serves /.well-known/traffic-advice with the required MIME type', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/.well-known/traffic-advice'),
      makeEnv()
    );
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toBe('application/trafficadvice+json');
    expect(await res.json()).toEqual([{ user_agent: 'prefetch-proxy', disallow: false }]);
  });

  it('does not call ASSETS for /.well-known/traffic-advice', async () => {
    const env = makeEnv();
    await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/.well-known/traffic-advice'),
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

  it('sets HTTP security headers on EN HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv()
    );
    expect(res.headers.get('Strict-Transport-Security')).toBe('max-age=31536000; includeSubDomains; preload');
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(res.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');
    expect(res.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(res.headers.get('Permissions-Policy')).toBe('geolocation=(), camera=(), microphone=()');
  });

  it('injects a CSP nonce into <script> tags and the CSP header', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv()
    );
    const html = await res.text();
    const match = html.match(/nonce="([0-9a-f-]{36})"/);
    expect(match).not.toBeNull();
    expect(res.headers.get('Content-Security-Policy')).toContain(`'nonce-${match[1]}'`);
  });

  it('injects a CSP nonce into <style> tags and the CSP header', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv()
    );
    const html = await res.text();
    const match = html.match(/nonce="([0-9a-f-]{36})"/);
    expect(match).not.toBeNull();
    expect(html).toMatch(/<style[^>]+nonce="[0-9a-f-]{36}"/);
    expect(res.headers.get('Content-Security-Policy')).toContain(`'nonce-${match[1]}'`);
  });

  it('does not inject nonce on <script type="application/ld+json">', async () => {
    const htmlWithJsonLd = EN_HTML.replace(
      '<script>',
      '<script type="application/ld+json">{"@type":"WebSite"}</script><script>'
    );
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv(htmlWithJsonLd)
    );
    const html = await res.text();
    expect(html).toContain('<script type="application/ld+json">');
    expect(html).not.toMatch(/type="application\/ld\+json" nonce=/);
  });

  it('sets Cache-Control: no-store on EN HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv()
    );
    expect(res.headers.get('Cache-Control')).toBe('no-store');
  });

  it('removes content-length to avoid mismatch after nonce injection', async () => {
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      makeEnv()
    );
    expect(res.headers.get('content-length')).toBeNull();
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

  it('sets HTTP security headers on FR HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    expect(res.headers.get('Strict-Transport-Security')).toBe('max-age=31536000; includeSubDomains; preload');
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(res.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');
    expect(res.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(res.headers.get('Permissions-Policy')).toBe('geolocation=(), camera=(), microphone=()');
  });

  it('injects a CSP nonce into <script> tags and the CSP header on FR responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    const html = await res.text();
    const match = html.match(/nonce="([0-9a-f-]{36})"/);
    expect(match).not.toBeNull();
    expect(res.headers.get('Content-Security-Policy')).toContain(`'nonce-${match[1]}'`);
  });

  it('injects a CSP nonce into <style> tags and the CSP header on FR responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    const html = await res.text();
    const match = html.match(/nonce="([0-9a-f-]{36})"/);
    expect(match).not.toBeNull();
    expect(html).toMatch(/<style[^>]+nonce="[0-9a-f-]{36}"/);
    expect(res.headers.get('Content-Security-Policy')).toContain(`'nonce-${match[1]}'`);
  });

  it('sets Cache-Control: no-store on FR HTML responses', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    expect(res.headers.get('Cache-Control')).toBe('no-store');
  });

  it('does not expose X-Worker-Executed header', async () => {
    const res = await worker.fetch(
      new Request('https://www.cartevieuxmontreal.ca/'),
      makeEnv()
    );
    expect(res.headers.get('X-Worker-Executed')).toBeNull();
  });

   it('does not rewrite content but still applies security headers on non-HTML assets', async () => {
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
      new Request('https://www.cartevieuxmontreal.ca/img/carte-cover.webp'),
      env
    );
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(res.headers.get('Strict-Transport-Security')).toBe('max-age=31536000; includeSubDomains; preload');
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

describe('Worker — error handling', () => {
  it('returns 500 with security headers if ASSETS.fetch throws', async () => {
    const env = {
      ASSETS: {
        fetch: vi.fn().mockRejectedValue(new Error('upstream failure')),
      },
    };
    const res = await worker.fetch(
      new Request('https://www.oldmontrealmap.ca/'),
      env
    );
    expect(res.status).toBe(500);
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(res.headers.get('Content-Security-Policy')).not.toBeNull();
  });
});
