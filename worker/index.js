// Pairs [EN string in index.html, FR replacement] applied in order for cartevieuxmontreal.ca
const FR = [
  // ── <html> + <head> ──────────────────────────────────────────────────────
  ['lang="en"', 'lang="fr"'],
  ['http-equiv="content-language" content="en"', 'http-equiv="content-language" content="fr"'],
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
  ['content="https://www.oldmontrealmap.ca/img/og-preview.webp"', 'content="https://www.cartevieuxmontreal.ca/img/og-preview-fr.webp"'],
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
  ['"image": "https://www.oldmontrealmap.ca/img/map-cover.webp"', '"image": "https://www.cartevieuxmontreal.ca/img/carte-cover.webp"'],
  ['"@id": "https://www.oldmontrealmap.ca/#faq"', '"@id": "https://www.cartevieuxmontreal.ca/#faq"'],
  ['"@id": "https://www.oldmontrealmap.ca/#destination"', '"@id": "https://www.cartevieuxmontreal.ca/#destination"'],
  ['"description": "Old Montréal is the historic heart of Montréal, founded in 1642. The quarter covers 1 km² of cobblestone streets, 17th-century stone buildings and public squares along the St. Lawrence River, and is one of the best-preserved historic districts in North America."',
   '"description": "Le Vieux-Montréal est le cœur historique de Montréal, fondé en 1642. Le quartier couvre 1 km² de rues pavées, de bâtiments en pierre du XVIIe siècle et de places publiques longeant le fleuve Saint-Laurent, et constitue l\'un des quartiers historiques les mieux préservés d\'Amérique du Nord."'],
  ['"name": "Old Port of Montréal"', '"name": "Vieux-Port de Montréal"'],
  ['"text": "Yes, completely free. The PDF version on this site costs nothing and requires no registration. The paper edition distributed across the quarter is also free and has always been available at no cost to visitors, which is part of why over 400,000 copies are picked up each year."',
   '"text": "Oui, entièrement gratuite. La version PDF sur ce site est accessible sans frais et sans inscription. La version papier distribuée dans le quartier est elle aussi gratuite et l\'a toujours été, ce qui explique en partie pourquoi plus de 400 000 exemplaires sont récupérés chaque année."'],
  ['"text": "Paper copies are available at the Tourist Information Centre on Place Jacques-Cartier, at the Bonsecours Market, at Jardin Nelson, at the Montréal Convention Centre, and at hotel concierge desks throughout the quarter."',
   '"text": "Des exemplaires papier sont disponibles au Bureau d\'information touristique de la Place Jacques-Cartier, au Marché Bonsecours, au Jardin Nelson, au Palais des Congrès de Montréal et aux comptoirs des concierges d\'hôtels dans tout le quartier."'],
  ['"text": "Yes. The French edition is published under the name Carte officielle du Vieux-Montréal and is available at cartevieuxmontreal.ca."',
   '"text": "Oui. L\'édition anglaise est publiée sous le nom Official Map of Old Montréal et est disponible sur oldmontrealmap.ca."'],
  ['"text": "The night-lights circuit is a dedicated walking route printed on the map that guides visitors through the most beautifully illuminated buildings and facades in the quarter after dark."',
   '"text": "Le circuit nocturne est un parcours de marche dédié, imprimé sur la carte, qui guide les visiteurs à travers les bâtiments et façades les plus magnifiquement éclairés du quartier après la tombée de la nuit."'],
  ['"text": "The map is updated every year. The 2026 edition reflects current business hours, seasonal events, and any changes to attractions in the quarter."',
   '"text": "La carte est mise à jour chaque année. L\'édition 2026 reflète les horaires actuels, les événements saisonniers et les changements apportés aux attractions du quartier."'],
  ['"text": "Yes. The PDF is high resolution and prints clearly on standard letter or A4 paper. For the best result, print at full size and in colour if possible."',
   '"text": "Oui. Le PDF est en haute résolution et s\'imprime clairement sur du papier standard lettre ou A4. Pour un meilleur résultat, imprimez en plein format et en couleur si possible."'],
  ['"text": "Walking the full perimeter of the quarter takes about 45 minutes at a relaxed pace. Most visitors spend between two and four hours to cover the main attractions."',
   '"text": "Parcourir tout le périmètre du quartier à pied prend environ 45 minutes à une allure tranquille. La plupart des visiteurs passent entre deux et quatre heures pour couvrir les principales attractions."'],
  ['"text": "The map is published by Pop Media, in partnership with the Vieux-Montréal SDC. It has been in continuous print since 1995 and won a Ulysse Award as part of the Québec Tourism Awards."',
   '"text": "La carte est publiée par Pop Media, en partenariat avec la SDC Vieux-Montréal. Elle est en impression continue depuis 1995 et a remporté un Prix Ulysse dans le cadre des Grands prix du tourisme québécois."'],

  // ── FAVICON ──────────────────────────────────────────────────────────────
  ['href="/favicon.ico" sizes="any"', 'href="/img/favicon-fr.ico" sizes="any"'],
  ['href="/img/favicon-32x32.png"', 'href="/img/favicon-fr-32x32.png"'],
  ['href="/img/favicon-16x16.png"', 'href="/img/favicon-fr-16x16.png"'],
  ['href="/img/apple-touch-icon.png"', 'href="/img/apple-touch-icon-fr.png"'],

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
  ['>About</a>', '>À propos</a>'],
  ['About Old Montréal</a>', 'À propos du Vieux-Montréal</a>'],
  ['About Old Montréal</span>', 'À propos du Vieux-Montréal</span>'],

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  ['Old Montréal: one of North America\'s most intact historic quarters',
   'Le Vieux-Montréal : l\'un des quartiers historiques les mieux préservés d\'Amérique du Nord'],
  ['Old Montréal is where the city began. The streets still follow the same grid that French colonists laid out in the 1600s.',
   'Le Vieux-Montréal, c\'est là où la ville a pris naissance. Les rues suivent encore le même tracé que les colons français ont établi dans les années 1600.'],
  ['Stretching along the St. Lawrence River, the quarter, known in French as Vieux-Montréal, covers roughly one square kilometre of cobblestone streets, 17th-century stone buildings, and public squares that have hosted four centuries of city life. Walking through it feels genuinely different from the rest of the city, because it is. The architecture is protected under Quebec\'s cultural heritage laws, which means the facades you see today are largely the same ones that merchants, clergy, and travellers would have passed in the 18th and 19th centuries.',
   'Bordant le fleuve Saint-Laurent, le quartier couvre environ un kilomètre carré de rues pavées, de bâtiments en pierre du XVIIe siècle et de places publiques qui ont animé quatre siècles de vie montréalaise. S\'y promener, c\'est ressentir quelque chose de fondamentalement différent du reste de la ville. L\'architecture est protégée par les lois québécoises sur le patrimoine culturel : les façades que l\'on voit aujourd\'hui sont en grande partie celles que marchands, clercs et voyageurs côtoyaient aux XVIIIe et XIXe siècles.'],
  ['The area sits at the intersection of New France history and contemporary Montréal culture. The Pointe-à-Callière archaeology museum stands on the very spot where the city was founded in 1642. A few blocks away, the Notre-Dame Basilica anchors Place d\'Armes with its neo-Gothic towers visible from across the waterfront. The Old Port connects the quarter to the river with a long promenade that runs from the Jacques-Cartier Bridge to the Lachine Canal.',
   'Le quartier est à la croisée de l\'histoire de la Nouvelle-France et de la culture montréalaise contemporaine. Le musée d\'archéologie Pointe-à-Callière s\'élève à l\'endroit même où la ville a été fondée en 1642. À quelques rues de là, la Basilique Notre-Dame domine la Place d\'Armes de ses tours néogothiques visibles depuis les berges. Le Vieux-Port relie le quartier au fleuve par une longue promenade qui s\'étend du pont Jacques-Cartier jusqu\'au canal Lachine.'],
  ['Most visitors discover that Old Montréal is compact enough to cover on foot in a single day, but layered enough to reward several visits. The <a href="/old-montreal-map-pdf">official walking map</a> was designed with exactly that in mind: every street at a scale you can read while walking, with every major attraction marked and a dedicated circuit for exploring the quarter after dark.',
   'La plupart des visiteurs découvrent que le Vieux-Montréal est assez compact pour être parcouru à pied en une journée, mais assez riche pour mériter plusieurs visites. La <a href="/carte-vieux-montreal-pdf">carte officielle</a> a été conçue exactement pour ça : chaque rue à une échelle lisible en marchant, chaque attraction majeure repérée et un circuit dédié pour explorer le quartier à la tombée de la nuit.'],
  ['Year the city of Montréal was founded, on what is now Place Royale in Old Montréal',
   'Année de fondation de la ville de Montréal, sur l\'actuelle Place Royale dans le Vieux-Montréal'],
  ['Area of the historic quarter, compact enough to explore entirely on foot',
   'Superficie du quartier historique, assez compact pour être exploré entièrement à pied'],
  ['Heritage buildings protected under Quebec\'s Cultural Heritage Act',
   'Bâtiments patrimoniaux protégés par la Loi sur le patrimoine culturel du Québec'],

  // ── FAQ ───────────────────────────────────────────────────────────────────
  ['Frequently asked questions about Old Montréal and the map',
   'Questions fréquentes sur le Vieux-Montréal et la carte'],
  ['Everything visitors ask before their trip to Old Montréal.',
   'Tout ce que les visiteurs demandent avant leur séjour dans le Vieux-Montréal.'],
  ['Is the Old Montréal map really free?',
   'La carte du Vieux-Montréal est-elle vraiment gratuite ?'],
  ['Yes, completely free. The PDF version on this site costs nothing and requires no registration. The paper edition distributed across the quarter is also free. It has always been available at no cost to visitors, which is part of why over 400,000 copies are picked up each year.',
   'Oui, entièrement gratuite. La version PDF sur ce site est accessible sans frais et sans inscription. La version papier distribuée dans le quartier est elle aussi gratuite. Elle l\'a toujours été, ce qui explique en partie pourquoi plus de 400 000 exemplaires sont récupérés chaque année.'],
  ['Where can I get the paper version of the map?',
   'Où trouver la version papier de la carte ?'],
  ['Paper copies are available at the Tourist Information Centre on Place Jacques-Cartier, at the Bonsecours Market, at Jardin Nelson, at the Montréal Convention Centre, and at hotel concierge desks throughout the quarter. Most display stands are restocked regularly throughout the tourism season. If you want to have a copy before you arrive, you can <a href="/old-montreal-map-pdf">download the PDF here</a> and print it at home.',
   'Des exemplaires papier sont disponibles au Bureau d\'information touristique de la Place Jacques-Cartier, au Marché Bonsecours, au Jardin Nelson, au Palais des Congrès de Montréal et aux comptoirs des concierges d\'hôtels dans tout le quartier. Les présentoirs sont réapprovisionnés régulièrement tout au long de la saison touristique. Pour en avoir un exemplaire avant d\'arriver, vous pouvez <a href="/carte-vieux-montreal-pdf">télécharger le PDF ici</a> et l\'imprimer à la maison.'],
  ['Is the map available in French?',
   'La carte est-elle disponible en anglais ?'],
  ['Yes. The French edition is published under the name <em>Carte officielle du Vieux-Montréal</em> and is available at <a href="https://www.cartevieuxmontreal.ca/carte-vieux-montreal-pdf" hreflang="fr">cartevieuxmontreal.ca</a>. Both editions cover the same attractions and walking circuits, but the French version uses French street names and location labels throughout.',
   'Oui. L\'édition anglaise est publiée sous le nom <em>Official Map of Old Montréal</em> et est disponible sur <a href="https://www.oldmontrealmap.ca/old-montreal-map-pdf" hreflang="en">oldmontrealmap.ca</a>. Les deux éditions couvrent les mêmes attractions et circuits de marche.'],
  ['What is the night-lights walking circuit?',
   'Qu\'est-ce que le circuit nocturne illuminé ?'],
  ['The night-lights circuit is a dedicated walking route printed on the map that guides visitors through the most beautifully illuminated buildings and facades in the quarter after dark. Old Montréal has invested heavily in architectural lighting on its historic buildings, and the circuit connects those highlights in a logical walking order so you can experience the quarter at its most atmospheric without any planning.',
   'Le circuit nocturne est un parcours de marche dédié, imprimé sur la carte, qui guide les visiteurs à travers les bâtiments et façades les plus magnifiquement éclairés du quartier après la tombée de la nuit. Le Vieux-Montréal a investi considérablement dans l\'éclairage architectural de ses édifices historiques, et le circuit relie ces points forts dans un ordre logique pour découvrir le quartier dans toute son atmosphère, sans planification préalable.'],
  ['Is the 2026 edition different from previous years?',
   'L\'édition 2026 est-elle différente des années précédentes ?'],
  ['The map is updated every year. The 2026 edition reflects current business hours, seasonal events, and any changes to attractions in the quarter. If you have an older edition, it is worth downloading the new PDF before your visit since hours and some listings do change from year to year.',
   'La carte est mise à jour chaque année. L\'édition 2026 reflète les horaires actuels, les événements saisonniers et les changements apportés aux attractions du quartier. Si vous avez une édition plus ancienne, il vaut la peine de télécharger le nouveau PDF avant votre visite, car certains horaires et informations changent d\'une année à l\'autre.'],
  ['Can I print the PDF at home?',
   'Puis-je imprimer le PDF à la maison ?'],
  ['Yes. The PDF is high resolution and prints clearly on standard letter or A4 paper. For the best result, print at full size and in colour if possible. The map is designed to fold down to a pocket size, so if you print on both sides you can fold it the same way as the paper edition you would pick up in the quarter.',
   'Oui. Le PDF est en haute résolution et s\'imprime clairement sur du papier standard lettre ou A4. Pour un meilleur résultat, imprimez en plein format et en couleur si possible. La carte est conçue pour se plier en format poche : si vous imprimez les deux côtés, vous pouvez la plier comme la version papier disponible dans le quartier.'],
  ['How long does it take to walk through Old Montréal?',
   'Combien de temps faut-il pour parcourir le Vieux-Montréal à pied ?'],
  ['Walking the full perimeter of the quarter takes about 45 minutes at a relaxed pace. Most visitors spend between two and four hours to cover the main attractions: Place Jacques-Cartier, the Notre-Dame Basilica, the Old Port promenade, and Bonsecours Market. A full day with museum visits and a meal is a comfortable way to see everything without rushing.',
   'Parcourir tout le périmètre du quartier à pied prend environ 45 minutes à une allure tranquille. La plupart des visiteurs passent entre deux et quatre heures pour couvrir les principales attractions : la Place Jacques-Cartier, la Basilique Notre-Dame, la promenade du Vieux-Port et le Marché Bonsecours. Une journée complète avec des visites de musées et un repas est une façon idéale de tout voir sans se presser.'],
  ['Who publishes the official Old Montréal map?',
   'Qui publie la carte officielle du Vieux-Montréal ?'],
  ['The map is published by <a href="https://popmedia.ca/" target="_blank" rel="noopener">Pop Media</a>, in partnership with the Vieux-Montréal SDC (Société de développement commercial). It has been in continuous print since 1995 and won a Ulysse Award as part of the Québec Tourism Awards. Pop Media handles all annual updates and distribution across the quarter.',
   'La carte est publiée par <a href="https://popmedia.ca/" target="_blank" rel="noopener">Pop Media</a>, en partenariat avec la SDC Vieux-Montréal (Société de développement commercial). Elle est en impression continue depuis 1995 et a remporté un Prix Ulysse dans le cadre des Grands prix du tourisme québécois. Pop Media s\'occupe de toutes les mises à jour annuelles et de la distribution dans le quartier.'],
  ['What is Old Montréal famous for?',
   'Pour quoi le Vieux-Montréal est-il célèbre ?'],
  ['Old Montréal is known for being one of the best-preserved historic quarters in North America. Its cobblestone streets, 17th-century stone buildings, and landmarks like the Notre-Dame Basilica, the Pointe-à-Callière museum, Bonsecours Market, and the Old Port waterfront attract millions of visitors each year.',
   'Le Vieux-Montréal est connu pour être l\'un des quartiers historiques les mieux préservés d\'Amérique du Nord. Ses rues pavées, ses bâtiments en pierre du XVIIe siècle et ses monuments comme la Basilique Notre-Dame, le musée Pointe-à-Callière, le Marché Bonsecours et le front de mer du Vieux-Port attirent des millions de visiteurs chaque année.'],
  ['What are the top things to do in Old Montréal?',
   'Que faire dans le Vieux-Montréal ?'],
  ['The most popular activities include visiting the Notre-Dame Basilica, exploring the Pointe-à-Callière Museum on the founding site of the city, strolling the Old Port promenade, and following the night-lights walking circuit after dark. The quarter also has some of Montréal\'s best restaurants and easy access to the Lachine Canal cycling path.',
   'Les activités les plus populaires incluent la visite de la Basilique Notre-Dame, l\'exploration du Musée Pointe-à-Callière sur le site de fondation de la ville, la promenade le long du Vieux-Port et le circuit nocturne illuminé après la tombée de la nuit. Le quartier abrite aussi certains des meilleurs restaurants de Montréal et un accès facile à la piste cyclable du canal Lachine.'],
  ['How do I get to Old Montréal?',
   'Comment se rendre au Vieux-Montréal ?'],
  ['Old Montréal is accessible by metro (Square-Victoria–OACI or Champ-de-Mars stations on the Orange Line), by bus, or on foot from downtown Montréal in about 15 minutes. Several paid parking lots are available in the quarter. In summer, water taxi services also operate along the waterfront.',
   'Le Vieux-Montréal est accessible en métro (stations Square-Victoria–OACI ou Champ-de-Mars sur la ligne Orange), en autobus ou à pied depuis le centre-ville de Montréal en environ 15 minutes. Plusieurs stationnements payants sont disponibles dans le quartier. En été, des services de taxi fluvial circulent également le long du front de mer.'],

  // ── HERO ─────────────────────────────────────────────────────────────────
  ['The Official Map<span class="sep"> · </span><br class="mob-br">Edition 2026', 'La carte officielle<span class="sep"> · </span><br class="mob-br">Édition&nbsp;2026'],
  ['Old <em>Montréal</em>', 'Vieux-<em>Montréal</em>'],
  ['Every attraction in the historic quarter on a single fold. Free PDF with a dedicated night-lights walking circuit.',
   'Toutes les attractions du quartier historique sur un seul dépliant. PDF gratuit avec un circuit nocturne illuminé exclusif.'],
  ['Copies distributed', 'Copies distribuées'],
  ['In print since', 'En impression depuis'],
  // Full paragraph before its sub-string 'Québec Tourism Awards' gets replaced
  ['Created over 30 years ago, the map won a Ulysse award as part of the Québec Tourism Awards.',
   'Créée il y a plus de 30 ans, la carte a remporté un prix Ulysse dans le cadre des Grands prix du tourisme québécois.'],
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
  // Location chips
  ['Montreal Convention Centre', 'Palais des Congrès'],
  ['Bonsecours Market', 'Marché Bonsecours'],

  ['Hotel concierges', "Concierges d'hôtels"],

  // ── DOWNLOAD / VIEW MAP ───────────────────────────────────────────────────
  ['The full quarter, on one page', 'Tout le quartier, en un seul dépliant'],
  ['The same map found at every hotel desk in the quarter, as a free PDF, ready before you arrive.',
   "La même carte disponible dans tous les hôtels du quartier, en PDF gratuit, à consulter avant même d'arriver."],
  ['href="old-montreal-official-map-2026.pdf"', 'href="carte-officielle-vieux-montreal-2026.pdf"'],
  ['href="/old-montreal-map-pdf"', 'href="/carte-vieux-montreal-pdf"'],
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

const BASE_SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), camera=(), microphone=()',
};

function applySecurityHeaders(headers, nonce = null) {
  for (const [k, v] of Object.entries(BASE_SECURITY_HEADERS)) headers.set(k, v);
  const scriptSrc = nonce ? `'self' 'nonce-${nonce}'` : `'self'`;
  headers.set('Content-Security-Policy',
    `default-src 'self'; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'`
  );
  if (nonce) headers.set('Cache-Control', 'no-store');
}

export default {
  async fetch(request, env) {
    try {
    const url = new URL(request.url);

    // Block direct access to config/source files that land in the assets bucket
    if (url.pathname === '/wrangler.toml' || url.pathname.startsWith('/src/')) {
      return new Response('Not Found', { status: 404 });
    }

    const lang = url.hostname.includes('cartevieuxmontreal') ? 'fr' : 'en';

    // Serve French favicon when /favicon.ico is requested on the French domain
    if (lang === 'fr' && url.pathname === '/favicon.ico') {
      const frIconUrl = new URL('/img/favicon-fr.ico', url.origin);
      return env.ASSETS.fetch(frIconUrl.toString());
    }

    // Redirect PDF landing pages to their canonical domain
    if (url.pathname === '/carte-vieux-montreal-pdf' && lang === 'en') {
      return Response.redirect('https://www.cartevieuxmontreal.ca/carte-vieux-montreal-pdf', 301);
    }
    if (url.pathname === '/old-montreal-map-pdf' && lang === 'fr') {
      return Response.redirect('https://www.oldmontrealmap.ca/old-montreal-map-pdf', 301);
    }

    // On mobile, skip the iframe page and open the PDF directly
    if (url.pathname === '/old-montreal-map-pdf' || url.pathname === '/carte-vieux-montreal-pdf') {
      const ua = request.headers.get('User-Agent') || '';
      if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua) && !/bot|crawl|spider|google|bing|facebook|twitter|slack|preview/i.test(ua)) {
        const pdf = url.pathname === '/old-montreal-map-pdf'
          ? '/old-montreal-official-map-2026.pdf'
          : '/carte-officielle-vieux-montreal-2026.pdf';
        return Response.redirect(new URL(pdf, url.origin).toString(), 302);
      }
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
          applySecurityHeaders(h);
          return new Response(html, { status: htmlResponse.status, headers: h });
        }
      }
      const h = new Headers(htmlResponse.headers);
      applySecurityHeaders(h);
      return new Response(htmlResponse.body, { status: htmlResponse.status, headers: h });
    }

    // Serve FR-specific sitemap and robots.txt
    if (lang === 'fr') {
      if (url.pathname === '/sitemap.xml') {
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/</loc>\n    <lastmod>2026-06-29</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://www.cartevieuxmontreal.ca/carte-vieux-montreal-pdf</loc>\n    <lastmod>2026-06-29</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`,
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
      applySecurityHeaders(headers);
      return new Response(response.body, { status: response.status, headers });
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html')) return response;

    const nonce = crypto.randomUUID();

    if (lang === 'en') {
      let html = await response.text();
      html = html.replace(/<script([^>]*)>/g, (match, attrs) => {
      if (attrs && /type=["'](?!text\/javascript|module)[^"']+["']/i.test(attrs)) return match;
      return attrs ? `<script${attrs} nonce="${nonce}">` : `<script nonce="${nonce}">`;
    });
      const headers = new Headers(response.headers);
      headers.delete('content-length');
      applySecurityHeaders(headers, nonce);
      return new Response(html, { status: response.status, headers });
    }

    let html = await response.text();
    for (const [from, to] of FR) {
      html = html.replaceAll(from, to);
    }
    html = html.replace(/<script([^>]*)>/g, (match, attrs) => {
      if (attrs && /type=["'](?!text\/javascript|module)[^"']+["']/i.test(attrs)) return match;
      return attrs ? `<script${attrs} nonce="${nonce}">` : `<script nonce="${nonce}">`;
    });

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    applySecurityHeaders(headers, nonce);
    return new Response(html, { status: response.status, headers });
    } catch {
      const h = new Headers({ 'Content-Type': 'text/plain; charset=utf-8' });
      applySecurityHeaders(h);
      return new Response('Internal Server Error', { status: 500, headers: h });
    }
  },
};
