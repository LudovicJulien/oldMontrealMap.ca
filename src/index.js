// Pairs [EN string in index.html, FR replacement] applied in order for cartevieuxmontreal.ca
const FR = [
  // ── <html> + <head> ──────────────────────────────────────────────────────
  ['lang="en"', 'lang="fr"'],
  ['<title>Official Map — Old Montréal 2026</title>',
   '<title>Carte officielle — Vieux-Montréal 2026</title>'],
  ['Free official walking map of Old Montréal 2026 — download in PDF, discover historic landmarks, restaurants & must-see streets in Vieux-Montréal.',
   'Carte officielle gratuite du Vieux-Montréal 2026 — téléchargez en PDF, découvrez les monuments historiques, restaurants & rues incontournables de Vieux-Montréal.'],
  // hreflang canonical (injected into index.html — see below)
  ['<link rel="canonical" href="https://www.oldmontrealmap.ca/">',
   '<link rel="canonical" href="https://www.cartevieuxmontreal.ca/">'],

  // ── LANG SWITCHER ────────────────────────────────────────────────────────
  ['href="https://www.cartevieuxmontreal.ca/" class="btn ghost lang-btn" hreflang="fr" title="Version française">🌐 FR',
   'href="https://www.oldmontrealmap.ca/" class="btn ghost lang-btn" hreflang="en" title="English version">🌐 EN'],

  // ── HEADER / BRAND ───────────────────────────────────────────────────────
  ['OLD MONTRÉAL', 'VIEUX-MONTRÉAL'],
  ['Official Map™ 2026', 'Carte officielle™ 2026'],

  // ── NAV ──────────────────────────────────────────────────────────────────
  ["What's Inside", 'Ce qui est inclus'],
  ['Paper Version', 'Version papier'],
  ['View the Map', 'Voir la carte'],

  // ── HERO ─────────────────────────────────────────────────────────────────
  ['The Official Map · Edition 2026', 'La carte officielle · Édition 2026'],
  ['Old <em>Montréal</em>', 'Vieux-<em>Montréal</em>'],
  ['— 2026 EDITION', '— ÉDITION 2026'],
  ['A unique, comprehensive map of every tourist attraction in the historic quarter — complete with tappable links, a night-lights walking circuit, and everything worth seeing along the way.',
   "Une carte unique et complète de toutes les attractions touristiques du quartier historique — avec des liens interactifs, un circuit nocturne illuminé et tout ce qui vaut la peine d'être vu en chemin."],
  ['Copies distributed', 'Copies distribuées'],
  ["Of trusted editions", "D'éditions de confiance"],
  ['★ New for 2026', '★ Nouveau pour 2026'],
  ['alt="Map cover"', 'alt="Couverture de la carte"'],

  // ── FEATURES ─────────────────────────────────────────────────────────────
  ["What's inside", 'Ce qui est inclus'],
  ['Everything you need to explore Old Montréal', "Tout ce qu'il faut pour explorer le Vieux-Montréal"],
  ['Heritage & Cultural Attractions', 'Patrimoine & attraits culturels'],
  ['Discover major heritage and religious sites, museums, galleries and cultural attractions in Old Montréal with up-to-date schedules, admission rates and directions.',
   "Découvrez les grands sites patrimoniaux et religieux, musées, galeries et attraits culturels du Vieux-Montréal avec horaires, tarifs d'entrée et indications à jour."],
  ['Night-Lights Walking Circuit', 'Circuit nocturne illuminé'],
  ['Explore the most beautifully illuminated historic buildings and facades of Old Montréal with our dedicated night-lights circuit map.',
   'Explorez les bâtiments et façades historiques les plus magnifiquement illuminés du Vieux-Montréal grâce à notre carte dédiée au circuit nocturne.'],
  ['Local Events Calendar', 'Calendrier des événements locaux'],
  ['Stay updated with the cultural events and activities happening throughout Old Montréal with our comprehensive events calendar.',
   'Restez informé des événements culturels et activités qui se déroulent dans tout le Vieux-Montréal grâce à notre calendrier complet.'],
  ['Featured Destinations', 'Destinations vedettes'],
  ['Explore key landmarks, historic squares, religious buildings and popular gathering spots carefully mapped across the quarter.',
   'Explorez les lieux emblématiques, places historiques, édifices religieux et points de rassemblement populaires soigneusement cartographiés dans le quartier.'],
  ['Comprehensive Map Guide', 'Guide cartographique complet'],
  ['Download the complete official map as a high-quality PDF — featuring all major attractions, heritage sites, cultural venues and walking circuits in one easy-to-reference document.',
   'Téléchargez la carte officielle complète en PDF haute qualité — regroupant toutes les attractions majeures, sites patrimoniaux, lieux culturels et circuits piétonniers en un seul document pratique.'],
  ['Easy-to-Read Street Map', 'Plan de rue facile à lire'],
  ['Navigate Old Montréal with our large, detailed pedestrian map highlighting main streets, public squares and key points of interest.',
   "Naviguez dans le Vieux-Montréal grâce à notre grand plan piétonnier détaillé mettant en valeur les principales rues, places publiques et points d'intérêt."],

  // ── PAPER VERSION ─────────────────────────────────────────────────────────
  ['The paper version, everywhere you look', 'La version papier, partout où vous regardez'],
  // Full paragraph first so its sub-strings don't collide with chip replacements below
  ['Readily available throughout Old Montréal — at the Tourist Information Centre in Place Jacques-Cartier, Bonsecours Market, the Notre-Dame Basilica, the Palais des Congrès reception desk, and with most hotel concierges.',
   "Disponible partout dans le Vieux-Montréal — au Bureau d'information touristique de la Place Jacques-Cartier, au Marché Bonsecours, à la Basilique Notre-Dame, à l'accueil du Palais des Congrès et auprès des concierges d'hôtels."],
  ['Created over 25 years ago, the map won a Ulysse award as part of the Grands prix du tourisme québécois.',
   'Créée il y a plus de 25 ans, la carte a remporté un prix Ulysse dans le cadre des Grands prix du tourisme québécois.'],
  // Location chips
  ['Bonsecours Market', 'Marché Bonsecours'],
  ['Notre-Dame Basilica', 'Basilique Notre-Dame'],
  ['Hotel concierges', "Concierges d'hôtels"],

  // ── DOWNLOAD / VIEW MAP ───────────────────────────────────────────────────
  ['View the digital map', 'Voir la carte numérique'],
  ['Open the full official map directly in your browser and start planning your route through the historic quarter.',
   "Ouvrez la carte officielle complète directement dans votre navigateur et commencez à planifier votre itinéraire dans le quartier historique."],
  ['English Map', 'Carte en anglais'],
  ['French Map', 'Carte en français'],

  // ── FOOTER ───────────────────────────────────────────────────────────────
  // Long string first, short string (subset) second
  ['In partnership with Vieux-Montréal SDC. The trusted guide to the historic quarter for over 25 years.',
   'En partenariat avec la SDC Vieux-Montréal. Le guide de référence du quartier historique depuis plus de 25 ans.'],
  ['In partnership with Vieux-Montréal SDC', 'En partenariat avec la SDC Vieux-Montréal'],
  // Footer column headings — matched with surrounding tags to avoid false positives
  ['>Explore</h2>', '>Explorer</h2>'],
  ['>Publisher</h2>', '>Éditeur</h2>'],
  ['>Developer</h2>', '>Développeur</h2>'],
  ['© 2026 Old Montréal Official Map™. All rights reserved.',
   '© 2026 Carte officielle du Vieux-Montréal™. Tous droits réservés.'],
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Block direct access to config/source files that land in the assets bucket
    if (url.pathname === '/wrangler.toml' || url.pathname.startsWith('/src/')) {
      return new Response('Not Found', { status: 404 });
    }

    const lang = url.hostname.includes('cartevieuxmontreal') ? 'fr' : 'en';

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
    return new Response(html, { status: response.status, headers });
  },
};
