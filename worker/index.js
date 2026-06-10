// Pairs [EN string in index.html, FR replacement] applied in order for cartevieuxmontreal.ca
const FR = [
  // ── <html> + <head> ──────────────────────────────────────────────────────
  ['lang="en"', 'lang="fr"'],
  ['<title>Old Montréal Official Map 2026 | Free PDF Walking Map</title>',
   '<title>Carte officielle Vieux-Montréal 2026 | PDF gratuit à télécharger</title>'],
  ['Free official PDF map of Old Montréal 2026. Museums, historic landmarks, restaurants and the exclusive night-lights walking circuit in Vieux-Montréal.',
   'Carte officielle gratuite du Vieux-Montréal 2026 en PDF. Musées, monuments historiques, restaurants et circuit nocturne illuminé dans le quartier historique.'],
  // hreflang canonical
  ['<link rel="canonical" href="https://www.oldmontrealmap.ca/">',
   '<link rel="canonical" href="https://www.cartevieuxmontreal.ca/">'],

  // ── OPEN GRAPH / TWITTER / GEO ──────────────────────────────────────────
  ['content="https://www.oldmontrealmap.ca/"', 'content="https://www.cartevieuxmontreal.ca/"'],
  ['content="Old Montréal Official Map 2026 | Free PDF Walking Map"', 'content="Carte officielle Vieux-Montréal 2026 | PDF gratuit à télécharger"'],
  ['content="Official Map of Old Montréal 2026"', 'content="Carte officielle du Vieux-Montréal 2026"'],
  ['property="og:locale" content="en_CA"', 'property="og:locale" content="fr_CA"'],
  ['property="og:locale:alternate" content="fr_CA"', 'property="og:locale:alternate" content="en_CA"'],
  ['content="Old Montréal Official Map"', 'content="Carte officielle Vieux-Montréal"'],
  ['content="https://www.oldmontrealmap.ca/images/og-preview.webp"', 'content="https://www.cartevieuxmontreal.ca/images/og-preview-fr.webp"'],
  ['content="Old Montréal, Québec"', 'content="Vieux-Montréal, Québec"'],

  // ── JSON-LD ──────────────────────────────────────────────────────────────
  ['"@id": "https://www.oldmontrealmap.ca/#website"', '"@id": "https://www.cartevieuxmontreal.ca/#website"'],
  ['"url": "https://www.oldmontrealmap.ca/"', '"url": "https://www.cartevieuxmontreal.ca/"'],
  ['"name": "Old Montréal Official Map 2026"', '"name": "Carte officielle Vieux-Montréal 2026"'],
  ['"name": "Official Tourist Map of Old Montréal 2026"', '"name": "Carte touristique officielle du Vieux-Montréal 2026"'],
  ['"inLanguage": "en"', '"inLanguage": "fr"'],
  ['"name": "Old Montréal",', '"name": "Vieux-Montréal",'],
  ['"alternateName": "Vieux-Montréal",', '"alternateName": "Old Montréal",'],
  ['"publisher": {"@id": "https://www.oldmontrealmap.ca/#organization"}', '"publisher": {"@id": "https://www.cartevieuxmontreal.ca/#organization"}'],
  ['"@id": "https://www.oldmontrealmap.ca/#organization"', '"@id": "https://www.cartevieuxmontreal.ca/#organization"'],
  ['"image": "https://www.oldmontrealmap.ca/images/map-cover.webp"', '"image": "https://www.cartevieuxmontreal.ca/images/carte-cover.webp"'],

  // ── LANG SWITCHER ────────────────────────────────────────────────────────
  ['href="https://www.cartevieuxmontreal.ca/" class="btn ghost lang-btn" hreflang="fr" title="Version française">FR',
   'href="https://www.oldmontrealmap.ca/" class="btn ghost lang-btn" hreflang="en" title="English version">EN'],

  // ── HEADER / BRAND ───────────────────────────────────────────────────────
  ['OLD MONTRÉAL', 'VIEUX-MONTRÉAL'],
  ['Official Map 2026', 'Carte officielle 2026'],

  // ── NAV ──────────────────────────────────────────────────────────────────
  ['>Gallery</a>', '>Galerie</a>'],
  ["What's Inside", 'Ce qui est inclus'],
  ['Paper Version', 'Version papier'],
  ['View the Map', 'Voir la carte'],

  // ── HERO ─────────────────────────────────────────────────────────────────
  ['The Official Map<span class="sep"> · </span><br class="mob-br">Edition 2026', 'La carte officielle<span class="sep"> · </span><br class="mob-br">Édition&nbsp;2026'],
  ['Old <em>Montréal</em>', 'Vieux-<em>Montréal</em>'],
  ['Every attraction in the historic quarter on a single fold. Free PDF with a dedicated night-lights walking circuit.',
   'Toutes les attractions du quartier historique sur un seul dépliant. PDF gratuit avec un circuit nocturne illuminé exclusif.'],
  ['Copies distributed', 'Copies distribuées'],
  ['In print since', 'En impression depuis'],
  ['Québec Tourism Awards', 'Grands prix du tourisme québécois'],
  ['Québec Tourism Award', 'Prix du tourisme québécois'],
  ['alt="Old Montreal Official Map Cultural and Heritage Attractions"', 'alt="Carte officielle du Vieux-Montréal, attraits culturels et patrimoniaux"'],

  // ── GALLERY ──────────────────────────────────────────────────────────────
  ['<span class="dot"></span>Gallery', '<span class="dot"></span>Galerie'],
  ['Spotted throughout<br>Old Montréal', 'Aperçu dans tout le Vieux-Montréal'],
  ['Free at hotel desks, tourist information centres, heritage sites and select shops throughout the quarter.',
   "Gratuite aux comptoirs des hôtels, dans les bureaux d'information touristique, les sites patrimoniaux et certains commerces du quartier."],
  ['alt="Main Old Montreal Official Map display stand at Bonsecours Market"', 'alt="Présentoir principal de la carte officielle au Marché Bonsecours"'],
  ['alt="Secondary Old Montreal Official Map display stand at Bonsecours Market"', 'alt="Présentoir secondaire de la carte officielle au Marché Bonsecours"'],
  ['alt="Old Montreal Official Map display stand at Jardin Nelson entrance"', "alt=\"Présentoir de la carte officielle à l'entrée du Jardin Nelson\""],
  ['alt="Old Montreal Official Map display stand at Montreal Convention Centre"', 'alt="Présentoir de la carte officielle au Palais des Congrès de Montréal"'],

  // ── FEATURES ─────────────────────────────────────────────────────────────
  ["What's inside", 'Ce qui est inclus'],
  ['Everything inside one fold', 'Tout ce qui tient dans un seul dépliant'],
  ['Heritage & Cultural Attractions', 'Patrimoine & attraits culturels'],
  ['Every museum, church and gallery in the quarter, with current hours and admission.',
   "Chaque musée, église et galerie du quartier, avec les horaires et tarifs d'entrée à jour."],
  ['Night-Lights Walking Circuit', 'Circuit nocturne illuminé'],
  ['A dedicated circuit through the most beautifully illuminated buildings and facades in the quarter, especially striking after dark.',
   'Un circuit dédié aux bâtiments et façades les plus magnifiquement illuminés du quartier, particulièrement saisissant à la tombée de la nuit.'],
  ['Local Events Calendar', 'Calendrier des événements locaux'],
  ['Key cultural events and seasonal programming in the historic quarter, updated fresh with each new edition.',
   'Les grands événements culturels et la programmation saisonnière du quartier historique, mis à jour à chaque nouvelle édition.'],
  ['Squares & Landmarks', 'Places et monuments'],
  ['Place Jacques-Cartier, Bonsecours, Notre-Dame and every iconic landmark in the quarter, each precisely pinned.',
   'La Place Jacques-Cartier, Bonsecours, Notre-Dame et chaque monument emblématique du quartier, chacun précisément localisé.'],
  ['Free PDF Download', 'PDF gratuit à télécharger'],
  ['The complete official map in high resolution, ready to save, print, or share before your visit.',
   'La carte officielle complète en haute résolution, à sauvegarder, imprimer ou partager avant votre visite.'],
  ['Pedestrian Street Map', 'Plan de rue piétonnier'],
  ['Every street, lane, and public square at walking scale, clear enough to fold open and follow on the go.',
   "Chaque rue, ruelle et place publique à l'échelle du marcheur, assez clair pour le déplier et suivre en balade."],

  // ── PAPER VERSION ─────────────────────────────────────────────────────────
  ['The paper version, everywhere you look', 'La version papier, partout où vous regardez'],
  // Full paragraph first so its sub-strings don't collide with chip replacements below
  ['Pick one up free at the Tourist Information Centre in Place Jacques-Cartier, or at your hotel concierge desk.',
   "Disponible gratuitement au Bureau d'information touristique de la Place Jacques-Cartier ou au concierge de votre hôtel."],
  ['Ulysse Award', 'Prix Ulysse'],
  ['Created over 30 years ago, the map won a Ulysse award as part of the Québec Tourism Awards.',
   'Créée il y a plus de 30 ans, la carte a remporté un prix Ulysse dans le cadre des Grands prix du tourisme québécois.'],
  // Location chips
  ['Montreal Convention Centre', 'Palais des Congrès'],
  ['Bonsecours Market', 'Marché Bonsecours'],

  ['Hotel concierges', "Concierges d'hôtels"],

  // ── DOWNLOAD / VIEW MAP ───────────────────────────────────────────────────
  ['The full quarter, on one page', 'Tout le quartier, en un seul dépliant'],
  ['The same map found at every hotel desk in the quarter, as a free PDF, ready before you arrive.',
   "La même carte disponible dans tous les hôtels du quartier, en PDF gratuit, à consulter avant même d'arriver."],
  ['href="old-montreal-official-map-2026.pdf"', 'href="carte-officielle-vieux-montreal-2026.pdf"'],
  ['English Map', 'Carte en français'],
  ['>Share<', '>Partager<'],
  ['aria-label="Share this map"', 'aria-label="Partager cette carte"'],

  // ── FOOTER ───────────────────────────────────────────────────────────────
  // Long string first, short string (subset) second
  ['In partnership with Vieux-Montréal SDC. The trusted guide to the historic quarter for over 30 years.',
   'En partenariat avec la SDC Vieux-Montréal. Le guide de référence du quartier historique depuis plus de 30 ans.'],
  // Footer column headings — matched with surrounding tags to avoid false positives
  ['>Explore</h2>', '>Explorer</h2>'],
  ['>Publisher</h2>', '>Éditeur</h2>'],
  ['© 2026 Old Montréal Official Map. All rights reserved.',
   '© 2026 Carte officielle du Vieux-Montréal. Tous droits réservés.'],
  ['Site by <a', 'Site par <a'],
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Block direct access to config/source files that land in the assets bucket
    if (url.pathname === '/wrangler.toml' || url.pathname.startsWith('/src/')) {
      return new Response('Not Found', { status: 404 });
    }

    const lang = url.hostname.includes('cartevieuxmontreal') ? 'fr' : 'en';

    // Redirect PDF landing pages to their canonical domain
    if (url.pathname === '/carte-vieux-montreal-pdf' && lang === 'en') {
      return Response.redirect('https://www.cartevieuxmontreal.ca/carte-vieux-montreal-pdf', 301);
    }
    if (url.pathname === '/old-montreal-map-pdf' && lang === 'fr') {
      return Response.redirect('https://www.oldmontrealmap.ca/old-montreal-map-pdf', 301);
    }

    // Clean URL routing for PDF landing pages
    if (url.pathname === '/old-montreal-map-pdf' || url.pathname === '/carte-vieux-montreal-pdf') {
      const htmlUrl = new URL(url.pathname + '.html', url.origin);
      const htmlResponse = await env.ASSETS.fetch(htmlUrl.toString());
      if (lang === 'fr') {
        const ct = htmlResponse.headers.get('content-type') ?? '';
        if (ct.includes('text/html')) {
          let html = await htmlResponse.text();
          for (const [from, to] of FR) html = html.replaceAll(from, to);
          const h = new Headers(htmlResponse.headers);
          h.delete('content-length');
          h.set('X-Worker-Executed', `lang=${lang},replaced=true`);
          return new Response(html, { status: htmlResponse.status, headers: h });
        }
      }
      return htmlResponse;
    }

    // Serve FR-specific sitemap and robots.txt
    if (lang === 'fr') {
      if (url.pathname === '/sitemap.xml') {
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/</loc>\n    <lastmod>2026-06-09</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/carte-vieux-montreal-pdf</loc>\n    <lastmod>2026-06-09</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`,
          { headers: { 'content-type': 'application/xml; charset=utf-8' } }
        );
      }
      if (url.pathname === '/robots.txt') {
        return new Response(
          'User-agent: *\nAllow: /\n\nSitemap: https://www.cartevieuxmontreal.ca/sitemap.xml\n',
          { headers: { 'content-type': 'text/plain; charset=utf-8' } }
        );
      }
    }

    // env.ASSETS is the correct way to fetch static files in a Workers Assets setup
    const response = await env.ASSETS.fetch(request);

    // Prevent search engines from indexing raw PDF files (SEO handled by HTML landing pages)
    if (url.pathname.endsWith('.pdf')) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex');
      return new Response(response.body, { status: response.status, headers });
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') || lang === 'en') return response;

    let html = await response.text();
    for (const [from, to] of FR) {
      html = html.replaceAll(from, to);
    }


    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('X-Worker-Executed', `lang=${lang},replaced=true`);
    return new Response(html, { status: response.status, headers });
  },
};
