// =====================================================================
//  FINANZ-APP
// =====================================================================

// ===== Kategorien =====
const KATEGORIEN = {
    lebensmittel: { name: 'Lebensmittel', icon: '🛒' },
    essen:        { name: 'Essen gehen',  icon: '🍔' },
    mobilitaet:   { name: 'Mobilität',    icon: '⛽' },
    freizeit:     { name: 'Freizeit',     icon: '🎉' },
    shopping:     { name: 'Shopping',     icon: '🛍️' },
    wohnen:       { name: 'Wohnen',       icon: '🏠' },
    gesundheit:   { name: 'Gesundheit',   icon: '💊' },
    sonstiges:    { name: 'Sonstiges',    icon: '📦' }
};

// ===== Prospekte & Märkte =====
const LINKS = [
    { name: '📰 kaufDA', url: 'https://www.kaufda.de/', haupt: true },
    { name: '📰 Marktguru', url: 'https://www.marktguru.de/', haupt: true },
    { name: 'Lidl', url: 'https://www.lidl.de/' },
    { name: 'Aldi Süd', url: 'https://www.aldi-sued.de/' },
    { name: 'Aldi Nord', url: 'https://www.aldi-nord.de/' },
    { name: 'Rewe', url: 'https://www.rewe.de/' },
    { name: 'Edeka', url: 'https://www.edeka.de/' },
    { name: 'Kaufland', url: 'https://www.kaufland.de/' },
    { name: 'Netto', url: 'https://www.netto-online.de/' },
    { name: 'Penny', url: 'https://www.penny.de/' }
];

const MAERKTE = ['Lidl', 'Aldi', 'Rewe', 'Edeka', 'Kaufland', 'Netto', 'Penny', 'Norma', 'dm', 'Rossmann'];

// ===== Spartipps =====
const SPARTIPPS = [
    ['📝', 'Einkaufszettel schreiben und dabei bleiben. Spontankäufe sind der größte Budget-Killer im Supermarkt.'],
    ['🏷️', 'Eigenmarken (z. B. „ja!“, „Milbona“, „K-Classic“) sind oft deutlich günstiger und kommen nicht selten aus denselben Fabriken.'],
    ['⚖️', 'Achte auf den Grundpreis (€/kg oder €/l) am Preisschild, nicht auf den Packungspreis. Große Packungen sind nicht immer billiger.'],
    ['🍌', 'Nie hungrig einkaufen gehen. Mit leerem Magen landet nachweislich mehr im Wagen.'],
    ['🥕', 'Saisonales Obst und Gemüse ist günstiger und schmeckt besser. Im Herbst z. B. Kürbis, Äpfel, Kohl, Karotten.'],
    ['🍱', 'Meal Prep: Am Sonntag größere Mengen kochen und portionieren spart Geld fürs Essen-Gehen unter der Woche.'],
    ['🌙', 'Kurz vor Ladenschluss gibt es oft reduzierte Ware. Auch die App „Too Good To Go“ lohnt sich.'],
    ['👇', 'Schau ins untere Regal: Die teuren Marken stehen auf Augenhöhe, die günstigen weiter unten.'],
    ['♻️', 'Reste verwerten statt wegwerfen: Aus übrigem Gemüse wird Suppe, Pfanne oder Omelett.'],
    ['🚰', 'Leitungswasser statt Flaschenwasser: In Deutschland ist es top Qualität und kostet fast nichts.'],
    ['🍾', 'Pfandflaschen sammeln und zurückbringen. Das läppert sich.'],
    ['📱', 'Die Apps der Märkte (z. B. Lidl Plus, Kaufland Card) haben oft Extra-Coupons. Aber nur nutzen, was du eh kaufst.'],
    ['🧊', 'Tiefkühlgemüse ist günstig, hält lange und hat kaum Nährstoffverlust. Perfekt für schnelle Pfannen.'],
    ['📦', 'Haltbares (Nudeln, Reis, Konserven) kaufen, wenn es im Angebot ist. Aber nur in Mengen, die du wirklich aufbrauchst.'],
    ['☕', 'Coffee to go jeden Tag summiert sich schnell auf 50 € und mehr im Monat. Thermobecher von zu Hause spart richtig.']
];

// ===== Start-Rezepte (Preise ca., Discounter) =====
const STARTREZEPTE = [
    {
        name: 'Spaghetti Bolognese', portionen: 4,
        zutaten: [
            { name: 'Spaghetti', menge: '500 g', preis: 0.99 },
            { name: 'Hackfleisch gemischt', menge: '500 g', preis: 4.49 },
            { name: 'Passierte Tomaten', menge: '500 g', preis: 0.69 },
            { name: 'Zwiebel', menge: '1 Stück', preis: 0.15 },
            { name: 'Knoblauch', menge: '1 Zehe', preis: 0.10 },
            { name: 'Tomatenmark', menge: '1 EL', preis: 0.20 }
        ],
        schritte: 'Zwiebel und Knoblauch würfeln, mit dem Hack scharf anbraten.\nTomatenmark kurz mitrösten, passierte Tomaten dazu, 20 Min. köcheln lassen.\nMit Salz, Pfeffer und Oregano würzen. Nudeln kochen, fertig.'
    },
    {
        name: 'Chili sin Carne', portionen: 4,
        zutaten: [
            { name: 'Kidneybohnen', menge: '1 Dose', preis: 0.79 },
            { name: 'Mais', menge: '1 Dose', preis: 0.89 },
            { name: 'Gehackte Tomaten', menge: '1 Dose', preis: 0.65 },
            { name: 'Paprika', menge: '1 Stück', preis: 0.69 },
            { name: 'Zwiebel', menge: '1 Stück', preis: 0.15 },
            { name: 'Reis', menge: '250 g', preis: 0.60 }
        ],
        schritte: 'Zwiebel und Paprika würfeln und anbraten.\nTomaten, abgespülte Bohnen und Mais dazu, 15 Min. köcheln.\nMit Chili, Kreuzkümmel, Salz und Paprikapulver würzen. Mit Reis servieren.'
    },
    {
        name: 'Ofenkartoffeln mit Kräuterquark', portionen: 2,
        zutaten: [
            { name: 'Kartoffeln', menge: '1 kg', preis: 1.49 },
            { name: 'Quark', menge: '500 g', preis: 1.19 },
            { name: 'Schnittlauch', menge: '1 Bund', preis: 0.79 },
            { name: 'Öl', menge: '2 EL', preis: 0.10 }
        ],
        schritte: 'Kartoffeln waschen, halbieren, mit Öl und Salz aufs Blech.\nBei 200 °C ca. 35 Min. backen.\nQuark mit Schnittlauch, Salz, Pfeffer und einem Schuss Milch verrühren.'
    },
    {
        name: 'Gebratener Reis mit Ei', portionen: 2,
        zutaten: [
            { name: 'Reis', menge: '250 g', preis: 0.60 },
            { name: 'TK-Gemüsemischung', menge: '750 g', preis: 1.79 },
            { name: 'Eier', menge: '3 Stück', preis: 0.75 },
            { name: 'Sojasoße', menge: '3 EL', preis: 0.20 }
        ],
        schritte: 'Reis kochen (am besten vom Vortag, dann wird er knuspriger).\nGemüse in der Pfanne anbraten, Reis dazu.\nEier in die Pfanne schlagen, verrühren, mit Sojasoße abschmecken.'
    },
    {
        name: 'Pfannkuchen', portionen: 2,
        zutaten: [
            { name: 'Mehl', menge: '250 g', preis: 0.25 },
            { name: 'Milch', menge: '500 ml', preis: 0.55 },
            { name: 'Eier', menge: '3 Stück', preis: 0.75 },
            { name: 'Apfelmus', menge: '1 Glas', preis: 0.89 }
        ],
        schritte: 'Mehl, Milch, Eier und eine Prise Salz glatt rühren, 10 Min. ruhen lassen.\nIn wenig Öl dünne Pfannkuchen ausbacken.\nMit Apfelmus oder Zucker und Zimt servieren.'
    },
    {
        name: 'Linsensuppe', portionen: 4,
        zutaten: [
            { name: 'Linsen', menge: '500 g', preis: 1.49 },
            { name: 'Karotten', menge: '500 g', preis: 0.79 },
            { name: 'Kartoffeln', menge: '500 g', preis: 0.75 },
            { name: 'Zwiebel', menge: '1 Stück', preis: 0.15 },
            { name: 'Gemüsebrühe', menge: '1,5 l', preis: 0.20 },
            { name: 'Wiener Würstchen', menge: '1 Packung', preis: 1.99 }
        ],
        schritte: 'Zwiebel, Karotten und Kartoffeln würfeln und andünsten.\nLinsen und Brühe dazu, 30 Min. köcheln.\nWürstchen in Scheiben dazugeben, mit Essig, Salz und Pfeffer abschmecken.'
    }
];

const MUENZEN = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


// ===== Spar-Challenges =====
// kategorie: welche Ausgaben die Challenge brechen ('*' = jede Ausgabe, null = Ehrensache)
const CHALLENGES = [
    { id: 'lieferdienst', titel: '7 Tage kein Essen bestellen / essen gehen', tage: 7, kategorie: 'essen' },
    { id: 'nospend', titel: 'No-Spend-Wochenende (2 Tage nichts ausgeben)', tage: 2, kategorie: '*' },
    { id: 'shopping', titel: '14 Tage kein Shopping', tage: 14, kategorie: 'shopping' },
    { id: 'freizeit', titel: '30 Tage Freizeit unter 50 €', tage: 30, kategorie: 'freizeit', limit: 50 },
    { id: 'lebensmittel', titel: '7 Tage Lebensmittel unter 40 €', tage: 7, kategorie: 'lebensmittel', limit: 40 },
    { id: 'kaffee', titel: '30 Tage kein Coffee to go', tage: 30, kategorie: null },
    { id: 'liste', titel: '14 Tage nur mit Einkaufsliste einkaufen', tage: 14, kategorie: null },
    { id: 'reste', titel: '7 Tage nichts wegwerfen – Reste verwerten', tage: 7, kategorie: null }
];

// ===== Automatische Kategorien beim CSV-Import =====
const AUTO_REGELN = [
    ['lebensmittel', ['rewe', 'lidl', 'aldi', 'edeka', 'netto', 'penny', 'kaufland', 'norma', 'globus', 'tegut', 'alnatura', 'denns', 'marktkauf', 'nahkauf', 'bäckerei', 'baeckerei', 'metzgerei']],
    ['essen', ['lieferando', 'wolt', 'uber eats', 'mcdonald', 'burger king', 'kfc', 'subway', 'starbucks', 'restaurant', 'pizzeria', 'döner', 'doener', 'imbiss', 'café', 'cafe ']],
    ['mobilitaet', ['aral', 'shell', 'esso', 'tankstelle', 'deutsche bahn', 'db vertrieb', 'db fernverkehr', 'flixbus', 'bvg', 'mvg', 'hvv', 'rmv', 'parkhaus', 'parken', 'adac', 'deutschlandticket']],
    ['freizeit', ['netflix', 'spotify', 'disney', 'dazn', 'steam', 'playstation', 'xbox', 'nintendo', 'kino', 'cinema', 'eventim', 'fitness', 'mcfit', 'urban sports', 'audible', 'youtube']],
    ['shopping', ['amazon', 'zalando', 'ebay', 'about you', 'h&m', 'zara', 'primark', 'mediamarkt', 'saturn', 'ikea', 'decathlon', 'shein', 'temu']],
    ['gesundheit', ['apotheke', 'arztpraxis', 'praxis dr', 'dm-drogerie', 'dm drogerie', 'rossmann', 'optiker', 'fielmann']],
    ['wohnen', ['miete', 'stadtwerke', 'vodafone', 'telekom', 'o2 ', '1&1', 'rundfunk', 'beitragsservice', 'hausverwaltung', 'wohnungsbau', 'strom']]
];

const BARGELD_MUSTER = /bargeldauszahlung|bargeldabhebung|geldautomat|auszahlung gaa|\bgaa\b|\batm\b|cash withdrawal/i;
const EINZAHLUNG_MUSTER = /bareinzahlung|einzahlung automat|cash deposit/i;

// Spaltennamen der verschiedenen Banken
const CSV_SPALTEN = {
    datum: ['buchungstag', 'buchungsdatum', 'booking date', 'datum', 'date', 'wertstellung', 'valuta'],
    betrag: ['betrag (€)', 'betrag (eur)', 'amount (eur)', 'betrag', 'umsatz in eur', 'amount', 'umsatz'],
    soll: ['soll', 'belastung', 'debit'],
    haben: ['haben', 'gutschrift', 'credit'],
    name: ['beguenstigter/zahlungspflichtiger', 'begünstigter/zahlungspflichtiger', 'zahlungsempfänger', 'zahlungsempfaenger',
           'zahlungspflichtige', 'auftraggeber/empfänger', 'auftraggeber / begünstigter', 'auftraggeber', 'empfänger',
           'name zahlungsbeteiligter', 'payee', 'partner name', 'name'],
    zweck: ['verwendungszweck', 'payment reference', 'beschreibung', 'buchungstext', 'vorgang']
};
// ===== Datum & Hilfsfunktionen =====
function datumPlus(tage) {
    const d = new Date();
    d.setDate(d.getDate() + tage);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
}

function heute() {
    return datumPlus(0);
}

function aktuellerMonat() {
    return heute().slice(0, 7);
}

// Monat ('2026-10') um n Monate verschieben
function monatPlus(monat, n) {
    let [jahr, m] = monat.split('-').map(Number);
    m += n;
    while (m > 12) { m -= 12; jahr++; }
    while (m < 1) { m += 12; jahr--; }
    return `${jahr}-${String(m).padStart(2, '0')}`;
}

function monatName(monat) {
    const [jahr, m] = monat.split('-').map(Number);
    return new Date(jahr, m - 1, 1).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' });
}

function datumKurz(datum) {
    const [, m, t] = datum.split('-');
    return `${t}.${m}.`;
}

function tageBis(datum) {
    return Math.round((new Date(datum) - new Date(heute())) / 864e5);
}

function neueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

const euro = n => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
const summe = liste => liste.reduce((s, x) => s + (x.betrag || 0), 0);
const kategorie = k => KATEGORIEN[k] || KATEGORIEN.sonstiges;
const zahl = wert => {
    const n = parseFloat(String(wert).replace(',', '.'));
    return isFinite(n) ? n : NaN;
};

function esc(text) {
    return String(text).replace(/[&<>"']/g, z => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[z]));
}

function kurzesFeedback(button, text, dauer = 1000) {
    if (button.dataset.alt === undefined) button.dataset.alt = button.textContent;
    button.textContent = text;
    button.setAttribute('data-ok', '');
    clearTimeout(button._timer);
    button._timer = setTimeout(() => {
        button.textContent = button.dataset.alt;
        delete button.dataset.alt;
        button.removeAttribute('data-ok');
    }, dauer);
}


// Datum ('2026-10-22') um n Tage verschieben
function datumNach(datum, tage) {
    return new Date(new Date(datum).getTime() + tage * 864e5).toISOString().slice(0, 10);
}

// Anzahl Monate zwischen zwei Monaten ('2026-10' → '2027-01' = 3)
function monateZwischen(von, bis) {
    const [j1, m1] = von.split('-').map(Number);
    const [j2, m2] = bis.split('-').map(Number);
    return (j2 - j1) * 12 + (m2 - m1);
}

function monatKurz(monat) {
    const [jahr, m] = monat.split('-').map(Number);
    return new Date(jahr, m - 1, 1).toLocaleDateString('de-DE', { month: 'short' }).replace('.', '');
}

// ===== Speichern & Laden (lokal im Browser) =====
const SPEICHER_KEY = 'finanzapp-daten';

// Bringt alte oder unvollständige Daten auf den neuesten Stand
function migrieren(d) {
    if (!d || typeof d !== 'object') d = {};
    const liste = name => { if (!Array.isArray(d[name])) d[name] = []; };
    ['buchungen', 'fixkosten', 'fixeinnahmen', 'ziele', 'angebote', 'schulden', 'challenges'].forEach(liste);
    if (!d.budgets || typeof d.budgets !== 'object' || Array.isArray(d.budgets)) d.budgets = {};
    if (!d.regeln || typeof d.regeln !== 'object' || Array.isArray(d.regeln)) d.regeln = {};
    if (typeof d.erfolge !== 'number') d.erfolge = 0;
    if (d.stand === undefined) d.stand = null;

    if (!d.essen || typeof d.essen !== 'object') {
        d.essen = {
            rezepte: STARTREZEPTE.map(r => ({ ...r, id: neueId(), zutaten: r.zutaten.map(z => ({ ...z })) })),
            plan: [],
            abgehakt: [],
            vorrat: []
        };
    }
    ['rezepte', 'plan', 'abgehakt', 'vorrat'].forEach(n => { if (!Array.isArray(d.essen[n])) d.essen[n] = []; });

    // Alte Buchungen gehören zum Konto
    d.buchungen.forEach(b => { if (b.typ !== 'umbuchung' && !b.konto) b.konto = 'konto'; });
    // Fixe Posten ohne Startmonat zählen ab nächstem Monat
    [...d.fixkosten, ...d.fixeinnahmen].forEach(f => { if (!f.ab) f.ab = monatPlus(aktuellerMonat(), 1); });
    // Abgelaufene Angebote aufräumen
    d.angebote = d.angebote.filter(a => !a.bis || a.bis >= heute());

    return d;
}

function laden() {
    let roh = null;
    try {
        roh = JSON.parse(localStorage.getItem(SPEICHER_KEY));
    } catch (e) {}
    return migrieren(roh);
}

function speichern() {
    try {
        localStorage.setItem(SPEICHER_KEY, JSON.stringify(daten));
    } catch (e) {}
}

let daten = laden();
speichern();

const KAT_OPTIONEN = Object.entries(KATEGORIEN).map(([k, v]) => [k, `${v.icon} ${v.name}`]);
const katOptionenHtml = gewaehlt => KAT_OPTIONEN
    .map(([k, t]) => `<option value="${k}" ${k === gewaehlt ? 'selected' : ''}>${t}</option>`).join('');

// ===== Berechnungen =====
const aktiveFixkosten = (monat = aktuellerMonat()) => daten.fixkosten.filter(f => f.ab <= monat);
const aktiveFixeinnahmen = (monat = aktuellerMonat()) => daten.fixeinnahmen.filter(f => f.ab <= monat);
const monatsBuchungen = monat => daten.buchungen.filter(b => b.datum.startsWith(monat));

function ausgabenNachKategorie(monat) {
    const ergebnis = {};
    monatsBuchungen(monat)
        .filter(b => b.typ === 'ausgabe')
        .forEach(b => ergebnis[b.kategorie] = (ergebnis[b.kategorie] || 0) + b.betrag);
    return ergebnis;
}

function monatsZahlen(monat = aktuellerMonat()) {
    const buch = monatsBuchungen(monat);
    const ein = summe(buch.filter(b => b.typ === 'einnahme')) + summe(aktiveFixeinnahmen(monat));
    const aus = summe(buch.filter(b => b.typ === 'ausgabe'));
    const fix = summe(aktiveFixkosten(monat));
    return { buch, ein, aus, fix, saldo: ein - aus - fix };
}

// Konto & Bargeld: Startwert vom Kassensturz + alles, was danach passiert ist
function kontostaende() {
    const s = daten.stand;
    if (!s) return null;

    let konto = s.konto;
    let bar = s.bar;

    daten.buchungen.forEach(b => {
        if (!(b.erstellt > s.zeit) || b.datum < s.datum) return;

        if (b.typ === 'umbuchung') {
            const richtung = b.richtung === 'einzahlen' ? -1 : 1; // abheben: Konto → Bar
            konto -= richtung * b.betrag;
            bar += richtung * b.betrag;
        } else {
            const vorzeichen = b.typ === 'einnahme' ? 1 : -1;
            if (b.konto === 'bar') bar += vorzeichen * b.betrag;
            else konto += vorzeichen * b.betrag;
        }
    });

    // Feste Einnahmen & Fixkosten: jeden Monatsanfang nach dem Kassensturz
    for (let m = monatPlus(s.datum.slice(0, 7), 1); m <= aktuellerMonat(); m = monatPlus(m, 1)) {
        konto += summe(aktiveFixeinnahmen(m)) - summe(aktiveFixkosten(m));
    }

    return { konto, bar };
}

function lebensmittelRest() {
    const limit = daten.budgets.lebensmittel;
    if (!limit) return null;
    return limit - (ausgabenNachKategorie(aktuellerMonat()).lebensmittel || 0);
}

// ===== Navigation =====
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

function zeigeSection(name) {
    sections.forEach(s => s.hidden = !s.classList.contains(name));
    navButtons.forEach(b => b.setAttribute('aria-current', b.dataset.ziel === name ? 'page' : 'false'));
    window.scrollTo(0, 0);
}

navButtons.forEach(b => b.addEventListener('click', () => zeigeSection(b.dataset.ziel)));

// ===== Übersicht =====
function renderUebersicht() {
    const { ein, aus, fix, saldo } = monatsZahlen();

    const karte = document.querySelector('.section1 > div');
    karte.querySelector('strong').textContent = euro(saldo);
    karte.dataset.status = saldo < 0 ? 'minus' : 'plus';
    const werte = karte.querySelectorAll('b');
    werte[0].textContent = euro(ein);
    werte[1].textContent = euro(aus);
    werte[2].textContent = euro(fix);

    renderGeld();
    renderRueckblick();

    const ul = document.querySelector('[data-karte="kategorien"] ul');
    const proKat = Object.entries(ausgabenNachKategorie(aktuellerMonat())).sort((a, b) => b[1] - a[1]);
    const vormonat = monatPlus(aktuellerMonat(), -1);
    const vorher = ausgabenNachKategorie(vormonat);

    if (!proKat.length) {
        ul.innerHTML = '<li data-leer>Noch keine Ausgaben in diesem Monat.</li>';
        return;
    }

    const max = proKat[0][1];
    ul.innerHTML = proKat.map(([k, betrag]) => {
        const info = kategorie(k);
        const anteil = aus ? Math.round(betrag / aus * 100) : 0;
        const alt = vorher[k];
        const vergleich = !alt ? ''
            : betrag > alt
                ? `<small data-trend="hoch">▲ schon mehr als im ganzen ${monatKurz(vormonat)} (${euro(alt)})</small>`
                : `<small data-trend="runter">${monatKurz(vormonat)} gesamt: ${euro(alt)}</small>`;
        return `<li>
            <span>${info.icon}</span>
            <div>
                <p><b>${info.name}</b><span>${euro(betrag)} · ${anteil} %</span></p>
                <progress max="${max}" value="${betrag}"></progress>
                ${vergleich}
            </div>
        </li>`;
    }).join('');
}

function renderGeld() {
    const karte = document.querySelector('[data-karte="geld"]');
    const kacheln = karte.querySelectorAll('dl > div');
    const gesamt = karte.querySelector('p b');
    const hinweis = karte.querySelector('small');
    const st = kontostaende();

    if (!st) {
        kacheln.forEach(k => k.querySelector('dd').textContent = '–');
        gesamt.textContent = '–';
        hinweis.hidden = false;
        return;
    }

    hinweis.hidden = true;
    [st.konto, st.bar].forEach((wert, i) => {
        kacheln[i].querySelector('dd').textContent = euro(wert);
        kacheln[i].dataset.status = wert < 0 ? 'minus' : 'plus';
    });
    gesamt.textContent = euro(st.konto + st.bar);
}

// ===== Rückblick: Diagramm der letzten 6 Monate =====
let rueckblickMonat = null;

function ersterDatenMonat() {
    const monate = [
        ...daten.buchungen.map(b => b.datum.slice(0, 7)),
        ...daten.fixkosten.map(f => f.ab),
        ...daten.fixeinnahmen.map(f => f.ab)
    ].filter(m => m <= aktuellerMonat());
    return monate.length ? monate.sort()[0] : aktuellerMonat();
}

function renderRueckblick() {
    const karte = document.querySelector('[data-karte="rueckblick"]');
    const svg = karte.querySelector('svg');
    const erster = ersterDatenMonat();

    const monate = [-5, -4, -3, -2, -1, 0]
        .map(i => monatPlus(aktuellerMonat(), i))
        .filter(m => m >= erster);

    const werte = monate.map(m => {
        const z = monatsZahlen(m);
        return { m, ein: z.ein, aus: z.aus + z.fix, fix: z.fix };
    });

    if (!monate.includes(rueckblickMonat)) rueckblickMonat = aktuellerMonat();

    const B = 320, H = 160, unten = 24, oben = 6;
    const basis = H - unten;
    const max = Math.max(1, ...werte.flatMap(w => [w.ein, w.aus]));
    const slot = B / 6;
    const breite = Math.min(20, slot * 0.3);
    const startX = (B - slot * werte.length) / 2;
    const hoehe = wert => wert / max * (basis - oben);

    // Balken mit abgerundeter Oberkante (4px), unten gerade auf der Grundlinie
    const balken = (x, h, serie) => {
        if (h < 0.5) return '';
        const r = Math.min(4, h, breite / 2);
        const y = basis - h;
        return `<path data-serie="${serie}" d="M${x},${basis} V${y + r} Q${x},${y} ${x + r},${y} H${x + breite - r} Q${x + breite},${y} ${x + breite},${y + r} V${basis} Z"/>`;
    };

    svg.innerHTML = werte.map((w, i) => {
        const mitte = startX + slot * i + slot / 2;
        const aktiv = w.m === rueckblickMonat ? 'data-aktiv' : '';
        return `<g>
            <rect data-monat="${w.m}" ${aktiv} x="${startX + slot * i + 3}" y="0" width="${slot - 6}" height="${H}" rx="10"/>
            ${balken(mitte - breite - 1, hoehe(w.ein), 'ein')}
            ${balken(mitte + 1, hoehe(w.aus), 'aus')}
            <text x="${mitte}" y="${H - 6}" text-anchor="middle" ${aktiv}>${monatKurz(w.m)}</text>
            <title>${monatName(w.m)}: Einnahmen ${euro(w.ein)}, Ausgaben ${euro(w.aus)}</title>
        </g>`;
    }).join('') + `<line x1="0" x2="${B}" y1="${basis}" y2="${basis}"/>`;

    const w = werte.find(x => x.m === rueckblickMonat) || werte[werte.length - 1];
    const vor = werte.find(x => x.m === monatPlus(w.m, -1));
    let vergleich = '';
    if (vor && vor.aus > 0) {
        const diff = Math.round((w.aus / vor.aus - 1) * 100);
        vergleich = `<br>Ausgaben ${Math.abs(diff)} % ${diff > 0 ? 'mehr' : 'weniger'} als im ${monatName(vor.m)}${w.m === aktuellerMonat() && diff <= 0 ? ' (Monat läuft noch)' : ''}`;
    }

    karte.querySelector('p').innerHTML =
        `<b>${monatName(w.m)}</b><br>` +
        `Einnahmen ${euro(w.ein)} · Ausgaben ${euro(w.aus)}` +
        (w.fix ? ` <small>(inkl. ${euro(w.fix)} Fixkosten)</small>` : '') +
        `<br>Übrig: <b>${euro(w.ein - w.aus)}</b>` + vergleich;
}

document.querySelector('[data-karte="rueckblick"] svg').addEventListener('click', e => {
    const g = e.target.closest('g');
    const rect = g && g.querySelector('rect[data-monat]');
    if (!rect) return;
    rueckblickMonat = rect.dataset.monat;
    renderRueckblick();
});

// ===== Tipps (aus deinen eigenen Daten) =====
function renderTipps() {
    const tipps = [];
    const { buch, ein, aus, fix, saldo } = monatsZahlen();
    const jetzt = ausgabenNachKategorie(aktuellerMonat());
    const vorher = ausgabenNachKategorie(monatPlus(aktuellerMonat(), -1));
    const st = kontostaende();

    if (!daten.buchungen.length) {
        tipps.push(['👋', 'Trag ein paar Tage lang jede Ausgabe ein – oder importier deinen Kontoauszug unter „Buchen“. Danach bekommst du hier persönliche Tipps.']);
    }

    daten.fixkosten.forEach(f => {
        if (!f.kuendbar) return;
        const t = tageBis(f.kuendbar);
        if (t > 30 || t < -14) return;
        tipps.push(['⏰', t > 0
            ? `${esc(f.bezeichnung)} ist in ${t} ${t === 1 ? 'Tag' : 'Tagen'} kündbar (${datumKurz(f.kuendbar)}). Brauchst du das noch?`
            : `${esc(f.bezeichnung)} ist jetzt kündbar. Brauchst du das noch? Sonst kündigen, bevor es sich verlängert.`]);
    });

    if (st && st.bar < 0) {
        tipps.push(['💵', 'Dein Bargeld ist rechnerisch im Minus. Hast du eine Abhebung vergessen oder eine Ausgabe falsch als „Bar“ gebucht?']);
    }

    if (st && st.konto < 0) {
        tipps.push(['🏦', `Dein Konto steht bei ${euro(st.konto)}. Dispozinsen sind teuer – versuch möglichst schnell wieder ins Plus zu kommen.`]);
    }

    if (ein > 0 && saldo < 0) {
        tipps.push(['🚨', `Du liegst diesen Monat ${euro(Math.abs(saldo))} im Minus. Schau, welche Kategorie du bremsen kannst.`]);
    }

    Object.entries(daten.budgets).forEach(([k, limit]) => {
        const ist = jetzt[k] || 0;
        const info = kategorie(k);
        if (ist >= limit) {
            tipps.push(['⛔', `Budget ${info.name} ist überschritten (${euro(ist)} von ${euro(limit)}).`]);
        } else if (ist >= limit * 0.8) {
            tipps.push(['⚠️', `${info.name}: schon ${Math.round(ist / limit * 100)} % vom Budget weg.`]);
        }
    });

    const rest = lebensmittelRest();
    const planKosten = einkaufsSumme();
    if (rest !== null && planKosten > 0 && planKosten > rest) {
        tipps.push(['🍽️', `Dein Essensplan kostet ca. ${euro(planKosten)}, im Lebensmittel-Budget sind aber nur noch ${euro(Math.max(rest, 0))} frei.`]);
    }

    daten.schulden.forEach(s => {
        const tage = -tageBis(s.datum);
        if (s.richtung === 'mir' && tage >= 21) {
            tipps.push(['🤝', `${esc(s.person)} schuldet dir seit ${Math.round(tage / 7)} Wochen ${euro(s.betrag)}. Kurz erinnern?`]);
        }
    });

    const naechster = monatPlus(aktuellerMonat(), 1);
    const neueFix = daten.fixkosten.filter(f => f.ab === naechster);
    if (neueFix.length) {
        tipps.push(['📅', `Ab ${monatName(naechster)} kommen ${euro(summe(neueFix))} neue Fixkosten dazu (${neueFix.map(f => esc(f.bezeichnung)).join(', ')}).`]);
    }

    if (!st && daten.buchungen.length) {
        tipps.push(['🧮', 'Mach einen Kassensturz, dann siehst du jederzeit, wie viel auf dem Konto und im Geldbeutel ist.']);
    }

    Object.entries(jetzt).forEach(([k, betrag]) => {
        const alt = vorher[k];
        if (alt && betrag > alt * 1.3 && betrag - alt > 20) {
            tipps.push(['📈', `Für ${kategorie(k).name} hast du schon ${Math.round((betrag / alt - 1) * 100)} % mehr ausgegeben als im ganzen letzten Monat.`]);
        }
    });

    if (ein > 0 && fix > ein * 0.5) {
        tipps.push(['🏠', `Deine Fixkosten fressen ${Math.round(fix / ein * 100)} % deiner Einnahmen. Zeit für einen Abo- und Vertrags-Check?`]);
    }

    const klein = buch.filter(b => b.typ === 'ausgabe' && b.betrag < 5);
    if (klein.length >= 8) {
        tipps.push(['☕', `${klein.length} Kleinstausgaben unter 5 € – zusammen ${euro(summe(klein))}. Kleinvieh macht auch Mist.`]);
    }

    if (aus > 0 && !Object.keys(daten.budgets).length) {
        tipps.push(['🎯', 'Leg für deine größte Ausgaben-Kategorie ein Budget fest, dann warnt dich die App rechtzeitig.']);
    }

    if (ein > 0 && saldo > 0 && daten.ziele.some(z => z.gespart < z.ziel)) {
        tipps.push(['💪', `Aktuell sind ${euro(saldo)} übrig – wie wär's mit einer Einzahlung in dein Sparziel?`]);
    }

    if (!tipps.length) {
        tipps.push(['✅', 'Alles im grünen Bereich. Weiter so!']);
    }

    document.querySelector('.section1 aside ul').innerHTML = tipps.slice(0, 4)
        .map(([icon, text]) => `<li><span>${icon}</span><p>${text}</p></li>`)
        .join('');
}

// ===== Kassensturz =====
const dialog = document.querySelector('dialog[data-dialog="kassensturz"]');
const sturzForm = dialog.querySelector('form');
const zaehler = dialog.querySelector('details > div');

zaehler.innerHTML = MUENZEN.map(wert => `<label>
    <span>${wert >= 1 ? wert + ' €' : Math.round(wert * 100) + ' ct'}</span>
    <input type="number" min="0" step="1" inputmode="numeric" placeholder="0" data-wert="${wert}">
</label>`).join('');

zaehler.addEventListener('input', () => {
    let gesamt = 0;
    zaehler.querySelectorAll('input').forEach(i => gesamt += (parseInt(i.value, 10) || 0) * Number(i.dataset.wert));
    sturzForm.elements.bar.value = gesamt.toFixed(2);
});

document.querySelector('[data-karte="geld"] button').addEventListener('click', () => {
    const st = kontostaende();
    sturzForm.reset();
    sturzForm.elements.konto.value = st ? st.konto.toFixed(2) : '';
    sturzForm.elements.bar.value = st ? st.bar.toFixed(2) : '';
    dialog.showModal();
});

dialog.querySelector('button[value="abbrechen"]').addEventListener('click', () => dialog.close());

sturzForm.addEventListener('submit', e => {
    e.preventDefault();
    const konto = zahl(sturzForm.elements.konto.value);
    const bar = zahl(sturzForm.elements.bar.value);
    if (isNaN(konto) || isNaN(bar)) return;

    daten.stand = { konto, bar, zeit: Date.now(), datum: heute() };
    speichern();
    dialog.close();
    allesRendern();
});

// ===== Bearbeiten-Fenster (für alle Listen) =====
const editDialog = document.querySelector('dialog[data-dialog="bearbeiten"]');
const editForm = editDialog.querySelector('form');
let editAktion = null;

function feldHtml(f) {
    const nur = f.nur ? ` data-nur="${f.nur}"` : '';
    if (f.typ === 'select') {
        const optionen = f.optionen
            .map(([wert, text]) => `<option value="${esc(wert)}" ${String(wert) === String(f.wert) ? 'selected' : ''}>${esc(text)}</option>`)
            .join('');
        return `<label${nur}>${f.label}<select name="${f.name}">${optionen}</select></label>`;
    }
    return `<label${nur}>${f.label}<input type="${f.typ || 'text'}" name="${f.name}" value="${esc(f.wert ?? '')}" ${f.extra || ''}></label>`;
}

function bearbeiten({ titel, felder, ok, weg }) {
    editForm.innerHTML = `<h2>${titel}</h2>
        ${felder.map(feldHtml).join('')}
        <div>
            <button type="button" value="abbrechen">Abbrechen</button>
            <button type="submit">Speichern</button>
        </div>
        ${weg ? '<button type="button" value="loeschen">🗑️ Löschen</button>' : ''}`;
    editAktion = { ok, weg };
    editDialog.showModal();
}

editForm.addEventListener('submit', e => {
    e.preventDefault();
    const werte = Object.fromEntries(new FormData(editForm));
    if (editAktion.ok(werte) === false) return;
    speichern();
    editDialog.close();
    allesRendern();
});

editForm.addEventListener('click', e => {
    const btn = e.target.closest('button[value]');
    if (!btn) return;
    if (btn.value === 'abbrechen') editDialog.close();
    if (btn.value === 'loeschen' && confirm('Wirklich löschen?')) {
        editAktion.weg();
        speichern();
        editDialog.close();
        allesRendern();
    }
});

const BETRAG_EXTRA = 'step="0.01" min="0.01" inputmode="decimal" required';

function bearbeiteBuchung(id) {
    const b = daten.buchungen.find(x => x.id === id);
    if (!b) return;
    bearbeiten({
        titel: '✏️ Buchung bearbeiten',
        felder: [
            { name: 'typ', label: 'Art', typ: 'select', wert: b.typ,
              optionen: [['ausgabe', 'Ausgabe'], ['einnahme', 'Einnahme'], ['umbuchung', 'Umbuchung (Konto ⇄ Bar)']] },
            { name: 'betrag', label: 'Betrag (€)', typ: 'number', wert: b.betrag, extra: BETRAG_EXTRA },
            { name: 'konto', label: 'Konto oder bar?', typ: 'select', nur: 'konto', wert: b.konto || 'konto',
              optionen: [['konto', '🏦 Konto'], ['bar', '💵 Bar']] },
            { name: 'richtung', label: 'Richtung', typ: 'select', nur: 'umbuchung', wert: b.richtung || 'abheben',
              optionen: [['abheben', '🏧 Abheben (Konto → Bar)'], ['einzahlen', '📥 Einzahlen (Bar → Konto)']] },
            { name: 'notiz', label: 'Notiz', wert: b.notiz },
            { name: 'kategorie', label: 'Kategorie', typ: 'select', nur: 'ausgabe', wert: b.kategorie || 'sonstiges', optionen: KAT_OPTIONEN },
            { name: 'datum', label: 'Datum', typ: 'date', wert: b.datum, extra: 'required' }
        ],
        ok: w => {
            const betrag = zahl(w.betrag);
            if (!(betrag > 0)) return false;
            b.typ = w.typ;
            b.betrag = betrag;
            b.notiz = (w.notiz || '').trim();
            b.datum = w.datum || b.datum;
            if (w.typ === 'umbuchung') {
                b.richtung = w.richtung;
                delete b.konto;
                delete b.kategorie;
            } else {
                b.konto = w.konto;
                delete b.richtung;
                b.kategorie = w.typ === 'ausgabe' ? w.kategorie : null;
            }
        },
        weg: () => { daten.buchungen = daten.buchungen.filter(x => x !== b); }
    });
}

// ===== Buchen =====
const buchungForm = document.querySelector('.section2 > form');
buchungForm.elements.datum.value = heute();

buchungForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = buchungForm.elements;
    const betrag = zahl(f.betrag.value);
    if (!(betrag > 0)) return;

    const typ = f.typ.value;
    const buchung = {
        id: neueId(),
        typ,
        betrag,
        notiz: f.notiz.value.trim(),
        datum: f.datum.value || heute(),
        erstellt: Date.now()
    };

    if (typ === 'umbuchung') {
        buchung.richtung = f.richtung.value;
    } else {
        buchung.konto = f.konto.value;
        buchung.kategorie = typ === 'ausgabe' ? f.kategorie.value : null;
    }

    daten.buchungen.push(buchung);
    speichern();

    f.betrag.value = '';
    f.notiz.value = '';
    f.betrag.focus();
    allesRendern();
    kurzesFeedback(buchungForm.querySelector('button[type="submit"]'), '✓ Gespeichert');
});

function buchungInfo(b) {
    if (b.typ === 'umbuchung') {
        return b.richtung === 'einzahlen'
            ? { titel: 'Eingezahlt', icon: '📥', unter: 'Bar → Konto', zeichen: '⇄ ' }
            : { titel: 'Abgehoben', icon: '🏧', unter: 'Konto → Bar', zeichen: '⇄ ' };
    }
    const wo = b.konto === 'bar' ? '💵 Bar' : '🏦 Konto';
    if (b.typ === 'einnahme') {
        return { titel: 'Einnahme', icon: '💰', unter: `Einnahme · ${wo}`, zeichen: '+' };
    }
    const info = kategorie(b.kategorie);
    return { titel: info.name, icon: info.icon, unter: `${info.name} · ${wo}`, zeichen: '−' };
}

// ----- Suche & Filter im Verlauf -----
const filterBox = document.querySelector('.section2 > div[data-feld="filter"]');

function filterMonateAktualisieren() {
    const select = filterBox.querySelector('select[name="monat"]');
    const alt = select.value;
    const monate = [...new Set(daten.buchungen.map(b => b.datum.slice(0, 7)))].sort().reverse();
    select.innerHTML = '<option value="">📅 Alle Monate</option>' +
        monate.map(m => `<option value="${m}">${monatName(m)}</option>`).join('');
    if (monate.includes(alt)) select.value = alt;
}

function gefilterteBuchungen() {
    const suche = filterBox.querySelector('input[name="suche"]').value.trim().toLowerCase();
    const monat = filterBox.querySelector('select[name="monat"]').value;
    const art = filterBox.querySelector('select[name="art"]').value;

    return daten.buchungen.filter(b => {
        if (monat && !b.datum.startsWith(monat)) return false;
        if (['ausgabe', 'einnahme', 'umbuchung'].includes(art) && b.typ !== art) return false;
        if ((art === 'bar' || art === 'konto') && (b.typ === 'umbuchung' || (b.konto || 'konto') !== art)) return false;
        if (art.startsWith('kat:') && (b.typ !== 'ausgabe' || b.kategorie !== art.slice(4))) return false;
        if (suche) {
            const info = buchungInfo(b);
            const text = `${b.notiz || ''} ${b.zweck || ''} ${info.titel} ${info.unter} ${b.betrag.toFixed(2).replace('.', ',')}`.toLowerCase();
            if (!text.includes(suche)) return false;
        }
        return true;
    });
}

function renderVerlauf() {
    filterMonateAktualisieren();
    const ul = document.querySelector('.section2 > ul');
    const info = document.querySelector('.section2 > p');
    const gefiltert = gefilterteBuchungen();
    const aktiv = gefiltert.length !== daten.buchungen.length;

    const liste = gefiltert
        .sort((a, b) => b.datum.localeCompare(a.datum) || (b.erstellt || 0) - (a.erstellt || 0))
        .slice(0, aktiv ? 300 : 50);

    if (!daten.buchungen.length) {
        info.textContent = '';
        ul.innerHTML = '<li data-leer>Noch keine Buchungen – trag oben deine erste ein oder importier deinen Kontoauszug.</li>';
        return;
    }

    const aus = summe(gefiltert.filter(b => b.typ === 'ausgabe'));
    const ein = summe(gefiltert.filter(b => b.typ === 'einnahme'));
    info.textContent = aktiv
        ? `${gefiltert.length} Treffer · Ausgaben ${euro(aus)} · Einnahmen ${euro(ein)}`
        : `${daten.buchungen.length} Buchungen${daten.buchungen.length > 50 ? ' · die letzten 50 werden gezeigt' : ''} · Antippen zum Bearbeiten`;

    if (!liste.length) {
        ul.innerHTML = '<li data-leer>Nichts gefunden.</li>';
        return;
    }

    ul.innerHTML = liste.map(b => {
        const i = buchungInfo(b);
        return `<li data-typ="${b.typ}" data-bearbeiten="${b.id}">
            <span>${i.icon}</span>
            <div>
                <b>${esc(b.notiz || i.titel)}</b>
                <small>${i.unter} · ${datumKurz(b.datum)}${b.datum.slice(0, 4) !== heute().slice(0, 4) ? b.datum.slice(2, 4) : ''}</small>
                ${b.zweck ? `<small data-zweck>${esc(b.zweck)}</small>` : ''}
            </div>
            <strong>${i.zeichen}${euro(b.betrag)}</strong>
            <button type="button" data-loeschen="${b.id}" aria-label="Löschen">✕</button>
        </li>`;
    }).join('');
}

filterBox.addEventListener('input', renderVerlauf);

document.querySelector('.section2 > ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (btn) {
        daten.buchungen = daten.buchungen.filter(b => b.id !== btn.dataset.loeschen);
        speichern();
        allesRendern();
        return;
    }
    const li = e.target.closest('li[data-bearbeiten]');
    if (li) bearbeiteBuchung(li.dataset.bearbeiten);
});

// ===== CSV-Import (Kontoauszug) =====
const importBtn = document.querySelector('.section2 > button[data-aktion="import"]');
const importInput = document.querySelector('.section2 > input[type="file"]');
const importDialog = document.querySelector('dialog[data-dialog="import"]');
const importForm = importDialog.querySelector('form');
let importZeilen = [];

// CSV in Zeilen & Felder zerlegen (mit Anführungszeichen-Unterstützung)
function csvZeilen(text, trenner) {
    const zeilen = [];
    let zeile = [];
    let feld = '';
    let inAnf = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inAnf) {
            if (c === '"') {
                if (text[i + 1] === '"') { feld += '"'; i++; }
                else inAnf = false;
            } else feld += c;
        } else if (c === '"') {
            inAnf = true;
        } else if (c === trenner) {
            zeile.push(feld);
            feld = '';
        } else if (c === '\n' || c === '\r') {
            if (c === '\r' && text[i + 1] === '\n') i++;
            zeile.push(feld);
            zeilen.push(zeile);
            zeile = [];
            feld = '';
        } else {
            feld += c;
        }
    }
    if (feld || zeile.length) {
        zeile.push(feld);
        zeilen.push(zeile);
    }
    return zeilen;
}

function spalteFinden(kopf, woerter, benutzt) {
    for (const wort of woerter) {
        const i = kopf.findIndex((h, j) => !benutzt.includes(j) && h.includes(wort));
        if (i >= 0) return i;
    }
    return -1;
}

function datumLesen(text) {
    const s = (text || '').trim();
    let m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2,4})/);
    if (m) {
        const jahr = m[3].length === 2 ? '20' + m[3] : m[3];
        return `${jahr}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
    }
    m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    return null;
}

function betragLesen(text) {
    if (!text) return NaN;
    let s = String(text).replace(/\s|€|eur/gi, '');
    let minus = false;
    if (s.endsWith('-')) { minus = true; s = s.slice(0, -1); }
    const komma = s.lastIndexOf(',');
    const punkt = s.lastIndexOf('.');
    s = komma > punkt ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
    const n = parseFloat(s);
    return minus ? -n : n;
}

function regelSchluessel(name) {
    return name.toLowerCase().replace(/[^a-zäöüß& ]/g, ' ').replace(/\s+/g, ' ').trim().split(' ').slice(0, 3).join(' ');
}

function kategorieRaten(name, text) {
    const key = regelSchluessel(name);
    if (key && daten.regeln[key]) return daten.regeln[key];
    for (const [kat, woerter] of AUTO_REGELN) {
        if (woerter.some(w => text.includes(w))) return kat;
    }
    return 'sonstiges';
}

function zeileAuswerten(r, sp) {
    const datum = datumLesen(r[sp.datum]);
    if (!datum) return null;

    const betrag = sp.betrag >= 0
        ? betragLesen(r[sp.betrag])
        : (Math.abs(betragLesen(r[sp.haben])) || 0) - (Math.abs(betragLesen(r[sp.soll])) || 0);
    if (!isFinite(betrag) || Math.abs(betrag) < 0.005) return null;

    const zweck = ((sp.zweck >= 0 && r[sp.zweck]) || '').replace(/\s+/g, ' ').trim();
    const nameRoh = (betrag > 0 && sp.name2 >= 0 && r[sp.name2]) || (sp.name >= 0 && r[sp.name]) || '';
    const name = (nameRoh || zweck || 'Unbekannt').replace(/\s+/g, ' ').trim().slice(0, 60);
    const text = `${name} ${zweck}`.toLowerCase();

    let typ = betrag < 0 ? 'ausgabe' : 'einnahme';
    let richtung = null;
    if (betrag < 0 && BARGELD_MUSTER.test(text)) { typ = 'umbuchung'; richtung = 'abheben'; }
    if (betrag > 0 && EINZAHLUNG_MUSTER.test(text)) { typ = 'umbuchung'; richtung = 'einzahlen'; }

    const wert = Math.round(Math.abs(betrag) * 100) / 100;
    const monat = datum.slice(0, 7);
    let auswahl = true;
    let hinweis = '';

    const gleich = f => Math.abs(f.betrag - wert) < 0.005 ||
        (f.bezeichnung.length >= 4 && text.includes(f.bezeichnung.toLowerCase()));
    const doppelt = daten.buchungen.some(b => b.datum === datum && b.typ === typ &&
        Math.abs(b.betrag - wert) < 0.005 && (b.konto || 'konto') !== 'bar');

    if (doppelt) {
        auswahl = false;
        hinweis = 'ist schon eingetragen';
    } else if (typ === 'ausgabe') {
        const f = daten.fixkosten.find(f => f.ab <= monat && gleich(f));
        if (f) { auswahl = false; hinweis = `läuft schon als Fixkosten „${f.bezeichnung}“`; }
    } else if (typ === 'einnahme') {
        const f = daten.fixeinnahmen.find(f => f.ab <= monat && gleich(f));
        if (f) { auswahl = false; hinweis = `läuft schon als feste Einnahme „${f.bezeichnung}“`; }
    }

    return {
        datum, betrag: wert, typ, richtung, name,
        zweck: zweck.slice(0, 140),
        kategorie: typ === 'ausgabe' ? kategorieRaten(name, text) : null,
        auswahl, hinweis
    };
}

function csvLesen(text) {
    for (const trenner of [';', ',', '\t']) {
        const zeilen = csvZeilen(text, trenner);
        for (let i = 0; i < Math.min(zeilen.length, 40); i++) {
            const kopf = zeilen[i].map(h => h.toLowerCase().replace(/\s+/g, ' ').trim());
            if (kopf.length < 3) continue;

            const benutzt = [];
            const sp = {};
            for (const [feld, woerter] of Object.entries(CSV_SPALTEN)) {
                sp[feld] = spalteFinden(kopf, woerter, benutzt);
                if (sp[feld] >= 0) benutzt.push(sp[feld]);
            }
            sp.name2 = spalteFinden(kopf, ['zahlungspflichtige', 'auftraggeber'], benutzt);

            if (sp.datum < 0 || (sp.betrag < 0 && (sp.soll < 0 || sp.haben < 0))) continue;
            const ergebnis = zeilen.slice(i + 1).map(r => zeileAuswerten(r, sp)).filter(Boolean);
            if (ergebnis.length) return ergebnis.sort((a, b) => b.datum.localeCompare(a.datum));
        }
    }
    return null;
}

importBtn.addEventListener('click', () => importInput.click());

importInput.addEventListener('change', async e => {
    const datei = e.target.files[0];
    e.target.value = '';
    if (!datei) return;

    const puffer = await datei.arrayBuffer();
    let text;
    try {
        text = new TextDecoder('utf-8', { fatal: true }).decode(puffer);
    } catch {
        text = new TextDecoder('windows-1252').decode(puffer); // ältere Sparkassen-/Bank-Dateien
    }
    text = text.replace(/^﻿/, '');

    const zeilen = csvLesen(text);
    if (!zeilen) {
        alert('In der Datei habe ich keine Umsätze erkannt. Ist es der CSV-Export aus deinem Online-Banking? Wenn ja, schick mir eine Beispieldatei (Beträge gern geschwärzt), dann bringe ich der App deine Bank bei.');
        return;
    }

    importZeilen = zeilen;
    renderImport();
    importDialog.showModal();
});

function importZaehler() {
    const n = importZeilen.filter(z => z.auswahl).length;
    importForm.querySelector('p').innerHTML =
        `${importZeilen.length} Umsätze gefunden · <b>${n} ausgewählt</b>. ` +
        'Grau = schon in der App (doppelt oder Fixkosten). Kategorien kannst du hier noch ändern – die App merkt sie sich fürs nächste Mal.';
    importForm.querySelector('button[type="submit"]').textContent = `${n} importieren`;
}

function renderImport() {
    importForm.querySelector('ul').innerHTML = importZeilen.map((z, i) => {
        const zeichen = z.typ === 'ausgabe' ? '−' : z.typ === 'einnahme' ? '+' : '⇄ ';
        const unter = z.typ === 'umbuchung' ? (z.richtung === 'abheben' ? 'Abhebung → Bargeld' : 'Einzahlung aufs Konto') : (z.zweck && z.zweck !== z.name ? z.zweck.slice(0, 70) : '');
        return `<li data-typ="${z.typ}">
            <label>
                <input type="checkbox" data-i="${i}" ${z.auswahl ? 'checked' : ''}>
                <span>
                    <b>${esc(z.name)}</b>
                    <small>${datumKurz(z.datum)}${unter ? ' · ' + esc(unter) : ''}</small>
                    ${z.hinweis ? `<small data-hinweis>⚠️ ${esc(z.hinweis)}</small>` : ''}
                </span>
                <strong>${zeichen}${euro(z.betrag)}</strong>
            </label>
            ${z.typ === 'ausgabe' ? `<select data-i="${i}" aria-label="Kategorie">${katOptionenHtml(z.kategorie)}</select>` : ''}
        </li>`;
    }).join('');
    importZaehler();
}

importForm.addEventListener('change', e => {
    const i = Number(e.target.dataset.i);
    if (isNaN(i) || !importZeilen[i]) return;
    if (e.target.type === 'checkbox') {
        importZeilen[i].auswahl = e.target.checked;
        importZaehler();
    } else if (e.target.tagName === 'SELECT') {
        importZeilen[i].kategorie = e.target.value;
    }
});

importForm.querySelector('button[value="abbrechen"]').addEventListener('click', () => importDialog.close());

importForm.addEventListener('submit', e => {
    e.preventDefault();
    const jetzt = Date.now();
    let anzahl = 0;

    importZeilen.filter(z => z.auswahl).forEach(z => {
        const b = {
            id: neueId(), typ: z.typ, betrag: z.betrag, notiz: z.name, zweck: z.zweck,
            datum: z.datum, erstellt: jetzt, importiert: true
        };
        if (z.typ === 'umbuchung') {
            b.richtung = z.richtung;
        } else {
            b.konto = 'konto';
            b.kategorie = z.typ === 'ausgabe' ? z.kategorie : null;
        }
        // Kategorie merken, damit es beim nächsten Import automatisch klappt
        if (z.typ === 'ausgabe' && z.kategorie !== 'sonstiges') {
            const key = regelSchluessel(z.name);
            if (key.length >= 3) daten.regeln[key] = z.kategorie;
        }
        daten.buchungen.push(b);
        anzahl++;
    });

    speichern();
    importDialog.close();
    allesRendern();
    kurzesFeedback(importBtn, `✓ ${anzahl} Umsätze importiert`, 2500);
});

// ===== Budgets =====
const budgetKarte = document.querySelector('[data-karte="budgets"]');
const budgetForm = budgetKarte.querySelector('form');

budgetForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = budgetForm.elements;
    const limit = zahl(f.limit.value);
    if (!(limit > 0)) return;
    daten.budgets[f.kategorie.value] = limit;
    speichern();
    f.limit.value = '';
    allesRendern();
});

function renderBudgets() {
    const ul = budgetKarte.querySelector('ul');
    const proKat = ausgabenNachKategorie(aktuellerMonat());
    const eintraege = Object.entries(daten.budgets);

    if (!eintraege.length) {
        ul.innerHTML = '<li data-leer>Noch keine Budgets. Leg oben ein Monatslimit für eine Kategorie fest.</li>';
        return;
    }

    ul.innerHTML = eintraege.map(([k, limit]) => {
        const info = kategorie(k);
        const ist = proKat[k] || 0;
        const quote = ist / limit;
        const status = quote >= 1 ? 'over' : quote >= 0.8 ? 'warn' : 'ok';
        const hinweis = status === 'over' ? `${euro(ist - limit)} drüber` : `noch ${euro(limit - ist)} übrig`;
        return `<li data-status="${status}" data-bearbeiten="${k}">
            <p>
                <b>${info.icon} ${info.name}</b>
                <span>${euro(ist)} / ${euro(limit)}</span>
                <button type="button" data-loeschen="${k}" aria-label="Budget löschen">✕</button>
            </p>
            <progress max="${limit}" value="${Math.min(ist, limit)}"></progress>
            <small>${hinweis}</small>
        </li>`;
    }).join('');
}

budgetKarte.querySelector('ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (btn) {
        delete daten.budgets[btn.dataset.loeschen];
        speichern();
        allesRendern();
        return;
    }
    const li = e.target.closest('li[data-bearbeiten]');
    if (!li) return;
    const k = li.dataset.bearbeiten;
    bearbeiten({
        titel: `✏️ Budget ${kategorie(k).name}`,
        felder: [{ name: 'limit', label: 'Limit pro Monat (€)', typ: 'number', wert: daten.budgets[k], extra: 'step="1" min="1" inputmode="decimal" required' }],
        ok: w => {
            const limit = zahl(w.limit);
            if (!(limit > 0)) return false;
            daten.budgets[k] = limit;
        },
        weg: () => { delete daten.budgets[k]; }
    });
});

// ===== Fixkosten & feste Einnahmen =====
const fixKarte = document.querySelector('.section3 aside');
const einKarte = document.querySelector('[data-karte="einnahmen"]');

const FIX_ARTEN = {
    kosten: { karte: fixKarte, liste: () => daten.fixkosten, setzen: l => daten.fixkosten = l,
              leer: 'Miete, Handy, Streaming … alles, was jeden Monat fix abgeht.', titel: 'Fixkosten' },
    einnahmen: { karte: einKarte, liste: () => daten.fixeinnahmen, setzen: l => daten.fixeinnahmen = l,
                 leer: 'Gehalt, BAföG, Kindergeld … alles, was jeden Monat fix reinkommt.', titel: 'Feste Einnahme' }
};

function kuendbarText(f) {
    if (!f.kuendbar) return '';
    const t = tageBis(f.kuendbar);
    const bald = t <= 30;
    const text = t > 0 ? `📌 kündbar ab ${datumKurz(f.kuendbar)}${f.kuendbar.slice(2, 4)}${bald ? ` (in ${t} Tagen)` : ''}` : '📌 jetzt kündbar';
    return `<small data-kuendbar="${bald ? 'bald' : 'spaeter'}">${text}</small>`;
}

function renderFixListe(art) {
    const { karte, liste, leer } = FIX_ARTEN[art];
    const ul = karte.querySelector('ul');
    const monat = aktuellerMonat();
    const eintraege = liste();

    ul.innerHTML = eintraege.length
        ? [...eintraege].sort((a, b) => a.ab.localeCompare(b.ab)).map(f => {
            const spaeter = f.ab > monat;
            return `<li data-status="${spaeter ? 'spaeter' : 'aktiv'}" data-bearbeiten="${f.id}">
                <p>
                    <b>${esc(f.bezeichnung)}</b>
                    <span>${euro(f.betrag)}</span>
                    <button type="button" data-loeschen="${f.id}" aria-label="Löschen">✕</button>
                </p>
                <small>${spaeter ? `⏳ startet ${monatName(f.ab)}` : `✓ aktiv seit ${monatName(f.ab)}`}</small>
                ${art === 'kosten' ? kuendbarText(f) : ''}
            </li>`;
        }).join('')
        : `<li data-leer>${leer}</li>`;

    const jetzt = summe(eintraege.filter(f => f.ab <= monat));
    const naechster = summe(eintraege.filter(f => f.ab <= monatPlus(monat, 1)));
    karte.querySelector(':scope > p').innerHTML = naechster !== jetzt
        ? `<span>Diesen Monat (ab ${monatName(monatPlus(monat, 1))}: ${euro(naechster)})</span><b>${euro(jetzt)}</b>`
        : `<span>Summe pro Monat</span><b>${euro(jetzt)}</b>`;
}

Object.entries(FIX_ARTEN).forEach(([art, { karte, liste, setzen, titel }]) => {
    const form = karte.querySelector('form');
    form.elements.ab.value = monatPlus(aktuellerMonat(), 1);

    form.addEventListener('submit', e => {
        e.preventDefault();
        const f = form.elements;
        const betrag = zahl(f.betrag.value);
        const bezeichnung = f.bezeichnung.value.trim();
        const ab = /^\d{4}-\d{2}$/.test(f.ab.value) ? f.ab.value : monatPlus(aktuellerMonat(), 1);
        if (!(betrag > 0) || !bezeichnung) return;

        liste().push({ id: neueId(), bezeichnung, betrag, ab });
        speichern();
        form.reset();
        form.elements.ab.value = monatPlus(aktuellerMonat(), 1);
        allesRendern();
    });

    karte.querySelector('ul').addEventListener('click', e => {
        const btn = e.target.closest('button[data-loeschen]');
        if (btn) {
            setzen(liste().filter(f => f.id !== btn.dataset.loeschen));
            speichern();
            allesRendern();
            return;
        }
        const li = e.target.closest('li[data-bearbeiten]');
        const eintrag = li && liste().find(f => f.id === li.dataset.bearbeiten);
        if (!eintrag) return;

        const felder = [
            { name: 'bezeichnung', label: 'Bezeichnung', wert: eintrag.bezeichnung, extra: 'required' },
            { name: 'betrag', label: 'Betrag pro Monat (€)', typ: 'number', wert: eintrag.betrag, extra: BETRAG_EXTRA },
            { name: 'ab', label: 'Ab Monat', typ: 'month', wert: eintrag.ab, extra: 'required' }
        ];
        if (art === 'kosten') {
            felder.push({ name: 'kuendbar', label: '📌 Kündbar ab (optional) – die App erinnert dich 30 Tage vorher', typ: 'date', wert: eintrag.kuendbar || '' });
        }

        bearbeiten({
            titel: `✏️ ${titel} bearbeiten`,
            felder,
            ok: w => {
                const betrag = zahl(w.betrag);
                if (!(betrag > 0) || !w.bezeichnung.trim()) return false;
                eintrag.bezeichnung = w.bezeichnung.trim();
                eintrag.betrag = betrag;
                if (/^\d{4}-\d{2}$/.test(w.ab)) eintrag.ab = w.ab;
                if (art === 'kosten') {
                    if (w.kuendbar) eintrag.kuendbar = w.kuendbar;
                    else delete eintrag.kuendbar;
                }
            },
            weg: () => setzen(liste().filter(f => f !== eintrag))
        });
    });
});

// ===== Sparziele =====
const zielForm = document.querySelector('.section4 > form');

zielForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = zielForm.elements;
    const ziel = zahl(f.ziel.value);
    const bezeichnung = f.bezeichnung.value.trim();
    if (!(ziel > 0) || !bezeichnung) return;
    const neu = { id: neueId(), bezeichnung, ziel, gespart: 0 };
    if (/^\d{4}-\d{2}$/.test(f.bis.value)) neu.bis = f.bis.value;
    daten.ziele.push(neu);
    speichern();
    zielForm.reset();
    allesRendern();
});

function zielRate(z) {
    if (!z.bis || z.gespart >= z.ziel) return '';
    const monate = monateZwischen(aktuellerMonat(), z.bis) + 1;
    if (monate < 1) return `<small data-rate>⏰ Zieldatum ${monatName(z.bis)} ist vorbei</small>`;
    return `<small data-rate>💡 ${euro((z.ziel - z.gespart) / monate)} pro Monat bis ${monatName(z.bis)}</small>`;
}

function renderZiele() {
    const ul = document.querySelector('.section4 > ul');

    if (!daten.ziele.length) {
        ul.innerHTML = '<li data-leer>Noch kein Sparziel. Worauf sparst du gerade?</li>';
        return;
    }

    ul.innerHTML = daten.ziele.map(z => {
        const fertig = z.gespart >= z.ziel;
        const prozent = Math.min(100, Math.round(z.gespart / z.ziel * 100));
        return `<li data-status="${fertig ? 'done' : 'ok'}" data-bearbeiten="${z.id}">
            <p>
                <b>🎯 ${esc(z.bezeichnung)}</b>
                <span>${euro(z.gespart)} / ${euro(z.ziel)}</span>
                <button type="button" data-loeschen="${z.id}" aria-label="Ziel löschen">✕</button>
            </p>
            <progress max="${z.ziel}" value="${Math.min(z.gespart, z.ziel)}"></progress>
            <small>${fertig ? '🎉 Geschafft!' : `${prozent} % – noch ${euro(z.ziel - z.gespart)}`}</small>
            ${zielRate(z)}
            <form data-ziel="${z.id}">
                <input type="number" name="betrag" placeholder="Betrag €" step="0.01" min="0.01" inputmode="decimal" required>
                <button type="submit">Einzahlen</button>
            </form>
        </li>`;
    }).join('');
}

const zielListe = document.querySelector('.section4 > ul');

zielListe.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const ziel = daten.ziele.find(z => z.id === form.dataset.ziel);
    const betrag = zahl(form.elements.betrag.value);
    if (!ziel || !(betrag > 0)) return;
    ziel.gespart = Math.round((ziel.gespart + betrag) * 100) / 100;
    speichern();
    allesRendern();
});

zielListe.addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (btn) {
        if (!confirm('Sparziel wirklich löschen?')) return;
        daten.ziele = daten.ziele.filter(z => z.id !== btn.dataset.loeschen);
        speichern();
        allesRendern();
        return;
    }
    if (e.target.closest('form')) return;
    const li = e.target.closest('li[data-bearbeiten]');
    const z = li && daten.ziele.find(x => x.id === li.dataset.bearbeiten);
    if (!z) return;

    bearbeiten({
        titel: '✏️ Sparziel bearbeiten',
        felder: [
            { name: 'bezeichnung', label: 'Bezeichnung', wert: z.bezeichnung, extra: 'required' },
            { name: 'ziel', label: 'Zielbetrag (€)', typ: 'number', wert: z.ziel, extra: 'step="1" min="1" inputmode="decimal" required' },
            { name: 'gespart', label: 'Schon gespart (€)', typ: 'number', wert: z.gespart, extra: 'step="0.01" min="0" inputmode="decimal" required' },
            { name: 'bis', label: 'Erreichen bis (optional)', typ: 'month', wert: z.bis || '' }
        ],
        ok: w => {
            const ziel = zahl(w.ziel);
            const gespart = zahl(w.gespart);
            if (!(ziel > 0) || !(gespart >= 0) || !w.bezeichnung.trim()) return false;
            z.bezeichnung = w.bezeichnung.trim();
            z.ziel = ziel;
            z.gespart = gespart;
            if (/^\d{4}-\d{2}$/.test(w.bis)) z.bis = w.bis;
            else delete z.bis;
        },
        weg: () => { daten.ziele = daten.ziele.filter(x => x !== z); }
    });
});

// ===== Spar-Challenges =====
const challengeKarte = document.querySelector('[data-karte="challenges"]');
const challengeForm = challengeKarte.querySelector('form');

function challengeStatus(c) {
    const tag = 1 - tageBis(c.start);
    const ende = datumNach(c.start, c.tage - 1);
    let gebrochen = null;
    let ausgegeben = 0;

    if (c.kategorie) {
        const relevant = daten.buchungen
            .filter(b => b.typ === 'ausgabe' && b.datum >= c.start && b.datum <= ende &&
                (c.kategorie === '*' || b.kategorie === c.kategorie))
            .sort((a, b) => a.datum.localeCompare(b.datum));
        for (const b of relevant) {
            ausgegeben += b.betrag;
            if (!gebrochen && (!c.limit || ausgegeben > c.limit)) gebrochen = b;
        }
    }

    const status = gebrochen ? 'gebrochen' : tag > c.tage ? 'geschafft' : 'laeuft';
    return { tag, gebrochen, ausgegeben, status };
}

challengeForm.addEventListener('submit', e => {
    e.preventDefault();
    const v = CHALLENGES.find(x => x.id === challengeForm.elements.vorlage.value);
    if (!v) return;
    if (daten.challenges.some(c => c.vorlage === v.id)) {
        alert('Die Challenge läuft schon.');
        return;
    }
    daten.challenges.push({ id: neueId(), vorlage: v.id, titel: v.titel, tage: v.tage, kategorie: v.kategorie, limit: v.limit || null, start: heute() });
    speichern();
    renderChallenges();
});

function renderChallenges() {
    const ul = challengeKarte.querySelector('ul');
    challengeKarte.querySelector('p').innerHTML = daten.erfolge
        ? `🏆 Schon <b>${daten.erfolge}</b> ${daten.erfolge === 1 ? 'Challenge' : 'Challenges'} geschafft!`
        : 'Such dir eine Challenge aus. Bei den meisten prüft die App anhand deiner Buchungen automatisch, ob du durchhältst.';

    if (!daten.challenges.length) {
        ul.innerHTML = '<li data-leer>Gerade läuft keine Challenge.</li>';
        return;
    }

    ul.innerHTML = daten.challenges.map(c => {
        const s = challengeStatus(c);
        let text;
        let knoepfe;
        if (s.status === 'gebrochen') {
            text = `❌ Gebrochen am ${datumKurz(s.gebrochen.datum)}: ${esc(s.gebrochen.notiz || kategorie(s.gebrochen.kategorie).name)} (${euro(s.gebrochen.betrag)})`;
            knoepfe = `<button type="button" data-aktion="challenge-neu" data-id="${c.id}">🔁 Nochmal</button>
                       <button type="button" data-aktion="challenge-weg" data-id="${c.id}">Entfernen</button>`;
        } else if (s.status === 'geschafft') {
            text = '🏆 Geschafft! Stark.';
            knoepfe = `<button type="button" data-aktion="challenge-fertig" data-id="${c.id}" data-haupt>🏆 Abschließen</button>`;
        } else {
            text = `Tag ${s.tag} von ${c.tage}` +
                (c.limit ? ` · ${euro(s.ausgegeben)} von ${euro(c.limit)}` : '') +
                (c.kategorie ? ' · wird automatisch geprüft' : ' · Ehrensache 😉');
            knoepfe = `<button type="button" data-aktion="challenge-weg" data-id="${c.id}">Aufgeben</button>`;
        }
        return `<li data-status="${s.status}">
            <p><b>${esc(c.titel)}</b></p>
            <progress max="${c.tage}" value="${s.status === 'geschafft' ? c.tage : Math.max(0, Math.min(s.tag, c.tage))}"></progress>
            <small>${text}</small>
            <div>${knoepfe}</div>
        </li>`;
    }).join('');
}

challengeKarte.querySelector('ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-aktion]');
    if (!btn) return;
    const c = daten.challenges.find(x => x.id === btn.dataset.id);
    if (!c) return;

    if (btn.dataset.aktion === 'challenge-weg') {
        daten.challenges = daten.challenges.filter(x => x !== c);
    } else if (btn.dataset.aktion === 'challenge-neu') {
        c.start = heute();
    } else if (btn.dataset.aktion === 'challenge-fertig') {
        daten.erfolge++;
        daten.challenges = daten.challenges.filter(x => x !== c);
    }
    speichern();
    renderChallenges();
});

// ===== Geliehen & Geschuldet =====
const schuldenKarte = document.querySelector('[data-karte="schulden"]');
const schuldenForm = schuldenKarte.querySelector('form');

schuldenForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = schuldenForm.elements;
    const betrag = zahl(f.betrag.value);
    const person = f.person.value.trim();
    if (!(betrag > 0) || !person) return;
    daten.schulden.push({ id: neueId(), person, betrag, richtung: f.richtung.value, notiz: f.notiz.value.trim(), datum: heute() });
    speichern();
    schuldenForm.reset();
    renderSchulden();
    renderTipps();
});

function renderSchulden() {
    const ul = schuldenKarte.querySelector('ul');
    const mir = summe(daten.schulden.filter(s => s.richtung === 'mir'));
    const ich = summe(daten.schulden.filter(s => s.richtung === 'ich'));

    schuldenKarte.querySelector('p').innerHTML = daten.schulden.length
        ? `Man schuldet dir <b>${euro(mir)}</b> · Du schuldest <b>${euro(ich)}</b>`
        : 'Behalte den Überblick, wer wem noch Geld schuldet.';

    ul.innerHTML = daten.schulden.length
        ? [...daten.schulden].sort((a, b) => a.datum.localeCompare(b.datum)).map(s => `<li data-richtung="${s.richtung}" data-bearbeiten="${s.id}">
            <p>
                <b>${esc(s.person)}</b>
                <span>${s.richtung === 'mir' ? '+' : '−'}${euro(s.betrag)}</span>
                <button type="button" data-aktion="erledigt" data-id="${s.id}">✓ Erledigt</button>
            </p>
            <small>${s.richtung === 'mir' ? 'schuldet dir' : 'du schuldest'}${s.notiz ? ' · ' + esc(s.notiz) : ''} · seit ${datumKurz(s.datum)}</small>
        </li>`).join('')
        : '<li data-leer>Alles beglichen. 👌</li>';
}

schuldenKarte.querySelector('ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-aktion="erledigt"]');
    if (btn) {
        const s = daten.schulden.find(x => x.id === btn.dataset.id);
        if (!s || !confirm(`${s.person}: ${euro(s.betrag)} als beglichen markieren?`)) return;
        daten.schulden = daten.schulden.filter(x => x !== s);
        speichern();
        renderSchulden();
        renderTipps();
        return;
    }
    const li = e.target.closest('li[data-bearbeiten]');
    const s = li && daten.schulden.find(x => x.id === li.dataset.bearbeiten);
    if (!s) return;

    bearbeiten({
        titel: '✏️ Eintrag bearbeiten',
        felder: [
            { name: 'person', label: 'Wer?', wert: s.person, extra: 'required' },
            { name: 'betrag', label: 'Betrag (€)', typ: 'number', wert: s.betrag, extra: BETRAG_EXTRA },
            { name: 'richtung', label: 'Richtung', typ: 'select', wert: s.richtung, optionen: [['mir', 'schuldet mir'], ['ich', 'ich schulde']] },
            { name: 'notiz', label: 'Wofür?', wert: s.notiz || '' }
        ],
        ok: w => {
            const betrag = zahl(w.betrag);
            if (!(betrag > 0) || !w.person.trim()) return false;
            s.person = w.person.trim();
            s.betrag = betrag;
            s.richtung = w.richtung;
            s.notiz = (w.notiz || '').trim();
        },
        weg: () => { daten.schulden = daten.schulden.filter(x => x !== s); }
    });
});
// =====================================================================
//  ESSEN: Wochenplan, Einkaufsliste, Rezepte, Angebote, Spartipps
// =====================================================================
const essen = document.querySelector('.section5');
const offeneRezepte = new Set();
let tippStart = Math.floor(Date.now() / 864e5) * 3;

const rezeptKosten = r => r.zutaten.reduce((s, z) => s + (z.preis || 0), 0);
const findeRezept = id => daten.essen.rezepte.find(r => r.id === id);
const aktiveAngebote = () => daten.angebote.filter(a => !a.bis || a.bis >= heute());

function rezeptInfo(r) {
    const kosten = rezeptKosten(r);
    return `${r.portionen} Port. · ${euro(kosten)} · ${euro(kosten / (r.portionen || 1))}/P.`;
}

// Alle Zutaten aus dem Plan zusammenfassen
function einkaufsliste() {
    const liste = new Map();
    daten.essen.plan.forEach(p => {
        const r = findeRezept(p.rezeptId);
        if (!r) return;
        r.zutaten.forEach(z => {
            const key = z.name.trim().toLowerCase();
            if (!key) return;
            if (!liste.has(key)) liste.set(key, { key, name: z.name.trim(), mengen: [], preis: 0 });
            const eintrag = liste.get(key);
            if (z.menge) eintrag.mengen.push(z.menge);
            eintrag.preis += z.preis || 0;
        });
    });
    return [...liste.values()].map(e => ({ ...e, vorrat: imVorrat(e.name) }));
}

// Hab ich das schon zu Hause?
function imVorrat(name) {
    const n = name.trim().toLowerCase();
    return daten.essen.vorrat.some(v => {
        const x = v.toLowerCase();
        return x === n || (x.length >= 3 && n.length >= 3 && (n.includes(x) || x.includes(n)));
    });
}

// Was der Einkauf kostet (ohne Sachen aus dem Vorrat)
function einkaufsSumme() {
    return einkaufsliste().filter(e => !e.vorrat).reduce((s, e) => s + e.preis, 0);
}

function angebotFuer(name) {
    const n = name.toLowerCase();
    if (n.length < 3) return null;
    return aktiveAngebote().find(a => {
        const p = a.produkt.toLowerCase();
        return p.length >= 3 && (p.includes(n) || n.includes(p));
    }) || null;
}

// ----- Wochenplan & Einkaufsliste -----
function renderPlan() {
    const karte = essen.querySelector('[data-karte="plan"]');
    const planUl = karte.querySelector('ul[data-liste="plan"]');
    const einkaufUl = karte.querySelector('ul[data-liste="einkauf"]');
    const zusammenfassung = karte.querySelector('p');
    const budgetZeile = karte.querySelector('small');
    const titel = karte.querySelector('h3');
    const knoepfe = karte.querySelector('div');

    const plan = daten.essen.plan.filter(p => findeRezept(p.rezeptId));
    const leer = !plan.length;
    [titel, einkaufUl, knoepfe, budgetZeile].forEach(el => el.hidden = leer);

    if (leer) {
        zusammenfassung.textContent = 'Noch nichts geplant.';
        planUl.innerHTML = '<li data-leer>Such dir unten ein Rezept aus und tipp auf „Auf den Plan“. Die Einkaufsliste baut sich dann automatisch.</li>';
        return;
    }

    const liste = einkaufsliste();
    const gesamt = liste.filter(e => !e.vorrat).reduce((s, e) => s + e.preis, 0);
    const imHaus = liste.filter(e => e.vorrat).length;
    const portionen = plan.reduce((s, p) => s + (findeRezept(p.rezeptId).portionen || 0), 0);
    zusammenfassung.textContent =
        `${plan.length} ${plan.length === 1 ? 'Gericht' : 'Gerichte'} · ${portionen} Portionen · ca. ${euro(gesamt)}` +
        (portionen ? ` (${euro(gesamt / portionen)}/Portion)` : '') +
        (imHaus ? ` · ${imHaus} ${imHaus === 1 ? 'Sache' : 'Sachen'} hast du schon da` : '');

    const rest = lebensmittelRest();
    if (rest === null) {
        budgetZeile.textContent = 'Tipp: Leg unter „Budgets“ ein Lebensmittel-Budget an, dann siehst du hier, ob der Plan reinpasst.';
        budgetZeile.removeAttribute('data-status');
    } else if (gesamt > rest) {
        budgetZeile.textContent = `⚠️ Lebensmittel-Budget: nur noch ${euro(Math.max(rest, 0))} frei – ${euro(gesamt - Math.max(rest, 0))} zu viel.`;
        budgetZeile.dataset.status = 'warn';
    } else {
        budgetZeile.textContent = `✓ Passt ins Lebensmittel-Budget (noch ${euro(rest)} frei).`;
        budgetZeile.dataset.status = 'ok';
    }

    planUl.innerHTML = plan.map(p => {
        const r = findeRezept(p.rezeptId);
        return `<li>
            <p>
                <b>${esc(r.name)}</b>
                <span>${euro(rezeptKosten(r))}</span>
                <button type="button" data-aktion="plan-entfernen" data-id="${p.id}" data-klein aria-label="Vom Plan nehmen">✕</button>
            </p>
        </li>`;
    }).join('');

    const abgehakt = new Set(daten.essen.abgehakt);
    let summeAbgehakt = 0;

    einkaufUl.innerHTML = liste.sort((a, b) => a.vorrat - b.vorrat || a.name.localeCompare(b.name, 'de')).map(e => {
        const check = abgehakt.has(e.key);
        if (check && !e.vorrat) summeAbgehakt += e.preis;
        const angebot = e.vorrat ? null : angebotFuer(e.name);
        return `<li ${e.vorrat ? 'data-vorrat' : ''}>
            <label>
                <input type="checkbox" data-artikel="${esc(e.key)}" ${check ? 'checked' : ''}>
                <span>
                    <b>${esc(e.name)}</b>
                    <small>${esc(e.mengen.join(' + ') || '–')}</small>
                    ${e.vorrat ? '<small data-vorrat>📦 hast du schon da</small>' : ''}
                    ${angebot ? `<small data-angebot>🏷️ ${esc(angebot.markt)}: ${esc(angebot.produkt)} für ${euro(angebot.preis)}</small>` : ''}
                </span>
                <strong>${euro(e.preis)}</strong>
            </label>
        </li>`;
    }).join('');

    karte.querySelector('button[data-aktion="einkauf-buchen"]').textContent =
        summeAbgehakt > 0 ? `✓ Einkauf buchen (${euro(summeAbgehakt)})` : '✓ Einkauf buchen';
}

// ----- Rezepte -----
function renderRezepte() {
    const ul = essen.querySelector('ul[data-liste="rezepte"]');

    if (!daten.essen.rezepte.length) {
        ul.innerHTML = '<li data-leer>Noch keine Rezepte. Leg unten dein erstes an.</li>';
        return;
    }

    ul.innerHTML = daten.essen.rezepte.map(r => `<li>
        <details data-rezept="${r.id}" ${offeneRezepte.has(r.id) ? 'open' : ''}>
            <summary><b>${esc(r.name)}</b><span>${rezeptInfo(r)}</span></summary>
            <ul>
                ${r.zutaten.map((z, i) => `<li>
                    <span>${esc(z.name)}</span>
                    <small>${esc(z.menge || '')}</small>
                    <label><input type="number" data-preis="${i}" value="${(z.preis || 0).toFixed(2)}" step="0.01" min="0" inputmode="decimal" aria-label="Preis ${esc(z.name)}">€</label>
                </li>`).join('')}
            </ul>
            ${r.schritte ? `<p>${esc(r.schritte)}</p>` : ''}
            <div>
                <button type="button" data-aktion="plan-add" data-id="${r.id}" data-haupt>＋ Auf den Plan</button>
                <button type="button" data-aktion="rezept-loeschen" data-id="${r.id}" aria-label="Rezept löschen">🗑️</button>
            </div>
        </details>
    </li>`).join('');
}

// Geöffnete Rezepte merken (toggle blubbert nicht, deshalb capture = true)
essen.querySelector('ul[data-liste="rezepte"]').addEventListener('toggle', e => {
    const d = e.target;
    if (!d.matches || !d.matches('details[data-rezept]')) return;
    if (d.open) offeneRezepte.add(d.dataset.rezept);
    else offeneRezepte.delete(d.dataset.rezept);
}, true);

// Preis einer Zutat ändern
essen.querySelector('ul[data-liste="rezepte"]').addEventListener('change', e => {
    const input = e.target.closest('input[data-preis]');
    if (!input) return;
    const details = input.closest('details[data-rezept]');
    const r = findeRezept(details.dataset.rezept);
    if (!r) return;

    const preis = zahl(input.value);
    r.zutaten[Number(input.dataset.preis)].preis = preis >= 0 ? preis : 0;
    speichern();

    details.querySelector('summary span').textContent = rezeptInfo(r);
    renderPlan();
    renderTipps();
});

// Neues Rezept: Zutaten-Zeilen
const rezeptForm = essen.querySelector('[data-karte="rezepte"] form');
const zutatenBox = rezeptForm.querySelector('div[data-liste="zutaten"]');

function zutatZeile() {
    const zeile = document.createElement('div');
    zeile.innerHTML = `
        <input type="text" data-z="name" placeholder="Zutat">
        <input type="text" data-z="menge" placeholder="Menge">
        <input type="number" data-z="preis" placeholder="€" step="0.01" min="0" inputmode="decimal">`;
    zutatenBox.appendChild(zeile);
    return zeile;
}

function zutatenZuruecksetzen() {
    zutatenBox.innerHTML = '';
    for (let i = 0; i < 3; i++) zutatZeile();
}

rezeptForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = rezeptForm.elements;
    const name = f.name.value.trim();
    const portionen = parseInt(f.portionen.value, 10) || 1;

    const zutaten = [...zutatenBox.children].map(zeile => ({
        name: zeile.querySelector('[data-z="name"]').value.trim(),
        menge: zeile.querySelector('[data-z="menge"]').value.trim(),
        preis: Math.max(zahl(zeile.querySelector('[data-z="preis"]').value) || 0, 0)
    })).filter(z => z.name);

    if (!name) return;
    if (!zutaten.length) {
        alert('Trag mindestens eine Zutat ein.');
        return;
    }

    const rezept = { id: neueId(), name, portionen, zutaten, schritte: f.schritte.value.trim() };
    daten.essen.rezepte.unshift(rezept);
    offeneRezepte.add(rezept.id);
    speichern();

    rezeptForm.reset();
    zutatenZuruecksetzen();
    rezeptForm.closest('details').open = false;
    renderEssen();
});

// ----- Angebote -----
const angebotForm = essen.querySelector('[data-karte="angebote"] form');

function naechsterSamstag() {
    const tag = new Date().getDay(); // 0 = So, 6 = Sa
    return datumPlus((6 - tag + 7) % 7);
}

angebotForm.elements.bis.value = naechsterSamstag();

angebotForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = angebotForm.elements;
    const preis = zahl(f.preis.value);
    const produkt = f.produkt.value.trim();
    const markt = f.markt.value.trim();
    if (!(preis > 0) || !produkt || !markt) return;

    daten.angebote.push({ id: neueId(), produkt, markt, preis, bis: f.bis.value || naechsterSamstag() });
    speichern();
    angebotForm.reset();
    angebotForm.elements.bis.value = naechsterSamstag();
    renderAngebote();
    renderPlan();
});

function renderAngebote() {
    const ul = essen.querySelector('ul[data-liste="angebote"]');
    const liste = aktiveAngebote().sort((a, b) => (a.bis || '').localeCompare(b.bis || ''));

    if (!liste.length) {
        ul.innerHTML = '<li data-leer>Noch keine Angebote notiert.</li>';
        return;
    }

    ul.innerHTML = liste.map(a => {
        const tage = a.bis ? tageBis(a.bis) : null;
        const gueltig = tage === null ? '' : tage === 0 ? 'nur noch heute' : tage === 1 ? 'noch bis morgen' : `noch ${tage} Tage (bis ${datumKurz(a.bis)})`;
        return `<li>
            <p>
                <b>${esc(a.produkt)}</b>
                <span>${esc(a.markt)} · ${euro(a.preis)}</span>
                <button type="button" data-aktion="angebot-loeschen" data-id="${a.id}" data-klein aria-label="Angebot löschen">✕</button>
            </p>
            ${gueltig ? `<small ${tage <= 1 ? 'data-status="warn"' : ''}>${gueltig}</small>` : ''}
        </li>`;
    }).join('');
}

// ----- Spartipps -----
function renderSpartipps() {
    const ul = essen.querySelector('aside ul');
    const auswahl = [0, 1, 2].map(i => SPARTIPPS[(tippStart + i) % SPARTIPPS.length]);
    ul.innerHTML = auswahl.map(([icon, text]) => `<li><span>${icon}</span><p>${text}</p></li>`).join('');
}

// ----- Klicks im Essen-Bereich -----
essen.addEventListener('click', e => {
    const btn = e.target.closest('button[data-aktion]');
    if (!btn) return;
    const id = btn.dataset.id;

    switch (btn.dataset.aktion) {
        case 'plan-add':
            daten.essen.plan.push({ id: neueId(), rezeptId: id });
            speichern();
            renderPlan();
            renderTipps();
            kurzesFeedback(btn, '✓ Auf dem Plan');
            break;

        case 'plan-entfernen':
            daten.essen.plan = daten.essen.plan.filter(p => p.id !== id);
            speichern();
            renderPlan();
            renderTipps();
            break;

        case 'plan-leeren':
            if (!confirm('Plan und Einkaufsliste leeren?')) return;
            daten.essen.plan = [];
            daten.essen.abgehakt = [];
            speichern();
            renderPlan();
            renderTipps();
            break;

        case 'einkauf-buchen': {
            const liste = einkaufsliste();
            const abgehakt = new Set(daten.essen.abgehakt);
            const teil = liste.filter(x => !x.vorrat && abgehakt.has(x.key)).reduce((s, x) => s + x.preis, 0);
            const gesamt = einkaufsSumme();
            const f = buchungForm.elements;
            buchungForm.querySelector('input[name="typ"][value="ausgabe"]').checked = true;
            f.betrag.value = (teil > 0 ? teil : gesamt).toFixed(2);
            f.notiz.value = 'Wocheneinkauf';
            f.kategorie.value = 'lebensmittel';
            f.datum.value = heute();
            zeigeSection('section2');
            f.betrag.focus();
            f.betrag.select();
            break;
        }

        case 'rezept-loeschen': {
            const r = findeRezept(id);
            if (!r || !confirm(`Rezept „${r.name}“ löschen?`)) return;
            daten.essen.rezepte = daten.essen.rezepte.filter(x => x.id !== id);
            daten.essen.plan = daten.essen.plan.filter(p => p.rezeptId !== id);
            speichern();
            renderEssen();
            renderTipps();
            break;
        }

        case 'zutat-zeile':
            zutatZeile().querySelector('input').focus();
            break;

        case 'angebot-loeschen':
            daten.angebote = daten.angebote.filter(a => a.id !== id);
            speichern();
            renderAngebote();
            renderPlan();
            break;

        case 'vorrat-weg':
            daten.essen.vorrat = daten.essen.vorrat.filter(v => v !== btn.dataset.name);
            speichern();
            renderVorrat();
            renderPlan();
            renderTipps();
            break;

        case 'tipps-neu':
            tippStart += 3;
            renderSpartipps();
            break;
    }
});

// Einkaufsliste abhaken
essen.querySelector('ul[data-liste="einkauf"]').addEventListener('change', e => {
    const box = e.target.closest('input[data-artikel]');
    if (!box) return;
    const key = box.dataset.artikel;
    const set = new Set(daten.essen.abgehakt);
    if (box.checked) set.add(key);
    else set.delete(key);
    daten.essen.abgehakt = [...set];
    speichern();
    renderPlan();
});

// ----- Vorrat -----
const vorratForm = essen.querySelector('[data-karte="vorrat"] form');

vorratForm.addEventListener('submit', e => {
    e.preventDefault();
    const neu = vorratForm.elements.artikel.value.split(',').map(x => x.trim()).filter(Boolean);
    neu.forEach(n => {
        if (!daten.essen.vorrat.some(v => v.toLowerCase() === n.toLowerCase())) daten.essen.vorrat.push(n);
    });
    speichern();
    vorratForm.reset();
    renderVorrat();
    renderPlan();
    renderTipps();
});

function renderVorrat() {
    const ul = essen.querySelector('ul[data-liste="vorrat"]');
    ul.innerHTML = daten.essen.vorrat.length
        ? [...daten.essen.vorrat].sort((a, b) => a.localeCompare(b, 'de')).map(v => `<li>
            ${esc(v)}
            <button type="button" data-aktion="vorrat-weg" data-name="${esc(v)}" data-klein aria-label="${esc(v)} entfernen">✕</button>
        </li>`).join('')
        : '<li data-leer>Noch nichts eingetragen. Tipp: mehrere mit Komma trennen.</li>';
}

function renderEssen() {
    renderVorrat();
    renderPlan();
    renderRezepte();
    renderAngebote();
}


// ===== Backup =====
document.querySelector('footer button[data-aktion="export"]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(daten, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `finanzen-backup-${heute()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
});

document.querySelector('footer input[type="file"]').addEventListener('change', e => {
    const datei = e.target.files[0];
    e.target.value = '';
    if (!datei) return;

    const leser = new FileReader();
    leser.onload = () => {
        try {
            const neu = JSON.parse(leser.result);
            if (!neu || !Array.isArray(neu.buchungen)) throw new Error();

            if (!confirm(`Backup mit ${neu.buchungen.length} Buchungen laden? Deine aktuellen Daten werden ersetzt.`)) return;
            daten = migrieren(neu);
            speichern();
            allesRendern();
            alert('✓ Backup geladen');
        } catch {
            alert('Das ist keine gültige Backup-Datei.');
        }
    };
    leser.readAsText(datei);
});

// ===== Hell / Dunkel =====
const THEMES = {
    auto: { icon: '🌓', name: 'Automatisch (wie dein Handy)', weiter: 'light' },
    light: { icon: '☀️', name: 'Hell', weiter: 'dark' },
    dark: { icon: '🌙', name: 'Dunkel', weiter: 'auto' }
};
const themeBtn = document.querySelector('header button');

function themeSetzen(theme) {
    if (!THEMES[theme]) theme = 'auto';
    document.documentElement.dataset.theme = theme;
    themeBtn.textContent = THEMES[theme].icon;
    themeBtn.setAttribute('aria-label', `Darstellung: ${THEMES[theme].name}`);
    themeBtn.title = THEMES[theme].name;
    try { localStorage.setItem('finanzapp-theme', theme); } catch (e) {}

    const hell = theme === 'light' || (theme === 'auto' && matchMedia('(prefers-color-scheme: light)').matches);
    document.querySelector('meta[name="theme-color"]').content = hell ? '#f3f4f9' : '#0d0f14';
}

themeBtn.addEventListener('click', () => themeSetzen(THEMES[document.documentElement.dataset.theme]?.weiter || 'light'));
matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', () => themeSetzen(document.documentElement.dataset.theme));

// ===== Offline-Modus (funktioniert nur online gehostet, nicht per Doppelklick) =====
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ===== Alles zeichnen =====
function allesRendern() {
    renderUebersicht();
    renderTipps();
    renderVerlauf();
    renderBudgets();
    renderFixListe('kosten');
    renderFixListe('einnahmen');
    renderZiele();
    renderChallenges();
    renderSchulden();
    renderEssen();
}

// ===== Start =====
themeSetzen(document.documentElement.dataset.theme);

document.querySelector('header time').textContent =
    new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

document.querySelectorAll('select[name="kategorie"]').forEach(s => s.innerHTML = katOptionenHtml('lebensmittel'));

filterBox.querySelector('select[name="art"]').innerHTML =
    '<option value="">🔎 Alles</option>' +
    '<option value="ausgabe">Nur Ausgaben</option>' +
    '<option value="einnahme">Nur Einnahmen</option>' +
    '<option value="umbuchung">Nur Umbuchungen</option>' +
    '<option value="konto">🏦 Nur Konto</option>' +
    '<option value="bar">💵 Nur Bar</option>' +
    KAT_OPTIONEN.map(([k, t]) => `<option value="kat:${k}">${t}</option>`).join('');

challengeForm.elements.vorlage.innerHTML = CHALLENGES
    .map(c => `<option value="${c.id}">${c.titel}</option>`).join('');

essen.querySelector('div[data-liste="links"]').innerHTML = LINKS
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener" ${l.haupt ? 'data-haupt' : ''}>${l.name}</a>`)
    .join('');
document.querySelector('#maerkte').innerHTML = MAERKTE.map(m => `<option value="${m}">`).join('');

zutatenZuruecksetzen();
renderSpartipps();
zeigeSection('section1');
allesRendern();
