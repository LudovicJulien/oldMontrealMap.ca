// Pairs [EN string in index.html, FR replacement] applied in order for cartevieuxmontreal.ca
const FR = [
  // ── <html> + <head> ──────────────────────────────────────────────────────
  ['lang="en"', 'lang="fr"'],
  ['<title>Official Map — Old Montréal 2026</title>',
   '<title>Carte officielle — Vieux-Montréal 2026</title>'],
  ['Free official walking map of Old Montréal 2026 — download in PDF, discover historic landmarks, restaurants & must-see streets in Vieux-Montréal.',
   'Carte officielle gratuite du Vieux-Montréal 2026 — téléchargez en PDF, découvrez les monuments historiques, restaurants & rues incontournables de Vieux-Montréal.'],
  // hreflang canonical
  ['<link rel="canonical" href="https://www.oldmontrealmap.ca/">',
   '<link rel="canonical" href="https://www.cartevieuxmontreal.ca/">'],

  // ── OPEN GRAPH / TWITTER / GEO ──────────────────────────────────────────
  ['content="https://www.oldmontrealmap.ca/"', 'content="https://www.cartevieuxmontreal.ca/"'],
  ['content="Official Map — Old Montréal 2026"', 'content="Carte officielle — Vieux-Montréal 2026"'],
  ['content="Official Map of Old Montréal 2026"', 'content="Carte officielle du Vieux-Montréal 2026"'],
  ['property="og:locale" content="en_CA"', 'property="og:locale" content="fr_CA"'],
  ['property="og:locale:alternate" content="fr_CA"', 'property="og:locale:alternate" content="en_CA"'],
  ['content="Old Montréal Official Map"', 'content="Carte officielle Vieux-Montréal"'],
  ['content="https://www.oldmontrealmap.ca/images/map-cover.webp"', 'content="https://www.cartevieuxmontreal.ca/images/carte-cover.webp"'],
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
  ['The Official Map · Edition 2026', 'La carte officielle · Édition 2026'],
  ['Old <em>Montréal</em>', 'Vieux-<em>Montréal</em>'],
  ['Every attraction in the historic quarter on a single fold. Free PDF with a dedicated night-lights walking circuit.',
   'Toutes les attractions du quartier historique sur un seul dépliant. PDF gratuit avec un circuit nocturne illuminé exclusif.'],
  ['Copies distributed', 'Copies distribuées'],
  ["Of trusted editions", "D'éditions de confiance"],
  ['30 yrs', '30 ans'],
  ['Québec Tourism Award', 'Prix du tourisme québécois'],
  ['alt="Map cover"', 'alt="Couverture de la carte"'],

  // ── GALLERY ──────────────────────────────────────────────────────────────
  ['<span class="dot"></span>Gallery', '<span class="dot"></span>Galerie'],
  ['Spotted throughout Old Montréal', 'Aperçu dans tout le Vieux-Montréal'],
  ['Free at hotel desks and tourist information centres throughout the historic quarter.',
   "Gratuite aux comptoirs des hôtels et dans les bureaux d'information touristique du quartier historique."],
  ['alt="Official map display stand in Old Montréal"', 'alt="Présentoir de la carte officielle dans le Vieux-Montréal"'],

  // ── FEATURES ─────────────────────────────────────────────────────────────
  ["What's inside", 'Ce qui est inclus'],
  ['Six layers of the historic quarter', 'Six facettes du quartier historique'],
  ['Heritage & Cultural Attractions', 'Patrimoine & attraits culturels'],
  ['Every museum, church and gallery in the historic quarter, with current hours and admission.',
   "Chaque musée, église et galerie du quartier historique, avec les horaires et tarifs d'entrée à jour."],
  ['Night-Lights Walking Circuit', 'Circuit nocturne illuminé'],
  ['Explore the most beautifully illuminated historic buildings and facades of Old Montréal with our dedicated night-lights circuit map.',
   'Explorez les bâtiments et façades historiques les plus magnifiquement illuminés du Vieux-Montréal grâce à notre carte dédiée au circuit nocturne.'],
  ['Local Events Calendar', 'Calendrier des événements locaux'],
  ['Stay updated with the cultural events and activities happening throughout Old Montréal with our comprehensive events calendar.',
   'Restez informé des événements culturels et activités qui se déroulent dans tout le Vieux-Montréal grâce à notre calendrier complet.'],
  ['Featured Destinations', 'Destinations vedettes'],
  ['The quarter\'s iconic squares and landmarks, each precisely located on the map.',
   'Les places et monuments emblématiques du quartier, chacun précisément localisé sur la carte.'],
  ['Comprehensive Map Guide', 'Guide cartographique complet'],
  ['The full official map as a free high-resolution PDF. Everything on one page, ready to print or share.',
   'La carte officielle complète en PDF haute résolution, gratuite. Tout sur une page, prête à imprimer ou à partager.'],
  ['Easy-to-Read Street Map', 'Plan de rue facile à lire'],
  ['Navigate Old Montréal with our large, detailed pedestrian map highlighting main streets, public squares and key points of interest.',
   "Naviguez dans le Vieux-Montréal grâce à notre grand plan piétonnier détaillé mettant en valeur les principales rues, places publiques et points d'intérêt."],

  // ── PAPER VERSION ─────────────────────────────────────────────────────────
  ['The paper version, everywhere you look', 'La version papier, partout où vous regardez'],
  // Full paragraph first so its sub-strings don't collide with chip replacements below
  ['Pick one up free at the Tourist Information Centre in Place Jacques-Cartier, or at your hotel concierge desk.',
   "Disponible gratuitement au Bureau d'information touristique de la Place Jacques-Cartier ou au concierge de votre hôtel."],
  ['Ulysse Award', 'Prix Ulysse'],
  ['Created over 30 years ago, the map won a Ulysse award as part of the Grands prix du tourisme québécois.',
   'Créée il y a plus de 30 ans, la carte a remporté un prix Ulysse dans le cadre des Grands prix du tourisme québécois.'],
  // Location chips
  ['Bonsecours Market', 'Marché Bonsecours'],
  ['Notre-Dame Basilica', 'Basilique Notre-Dame'],
  ['Hotel concierges', "Concierges d'hôtels"],

  // ── DOWNLOAD / VIEW MAP ───────────────────────────────────────────────────
  ['View the digital map', 'Voir la carte numérique'],
  ['Open the full official map directly in your browser and start planning your route through the historic quarter.',
   "Ouvrez la carte officielle complète directement dans votre navigateur et commencez à planifier votre itinéraire dans le quartier historique."],
  ['href="mapeng.pdf"', 'href="mapfr.pdf"'],
  ['English Map', 'Carte en français'],

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

    // Serve FR-specific sitemap and robots.txt
    if (lang === 'fr') {
      if (url.pathname === '/sitemap.xml') {
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/</loc>\n    <lastmod>2026-06-01</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/mapfr.pdf</loc>\n    <lastmod>2026-06-01</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`,
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
    // const headers = new Headers(response.headers);
    // headers.delete('content-length');
    // return new Response(html, { status: response.status, headers });
  },
};
