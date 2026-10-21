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

// ===== Speichern & Laden (lokal im Browser) =====
const SPEICHER_KEY = 'finanzapp-daten';
let daten = laden();

function laden() {
    try {
        const roh = localStorage.getItem(SPEICHER_KEY);
        if (roh) return JSON.parse(roh);
    } catch (e) {}
    return { buchungen: [], budgets: {}, fixkosten: [], ziele: [] };
}

function speichern() {
    try {
        localStorage.setItem(SPEICHER_KEY, JSON.stringify(daten));
    } catch (e) {}
}

// ===== Hilfsfunktionen =====
const euro = n => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
const neueId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const summe = liste => liste.reduce((s, x) => s + x.betrag, 0);
const kategorie = k => KATEGORIEN[k] || KATEGORIEN.sonstiges;

function esc(text) {
    return String(text).replace(/[&<>"']/g, z => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[z]));
}

function heute() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
}

const aktuellerMonat = () => heute().slice(0, 7);

function vormonat() {
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function datumKurz(datum) {
    const [, m, t] = datum.split('-');
    return `${t}.${m}.`;
}

const monatsBuchungen = monat => daten.buchungen.filter(b => b.datum.startsWith(monat));

function ausgabenNachKategorie(monat) {
    const ergebnis = {};
    monatsBuchungen(monat)
        .filter(b => b.typ === 'ausgabe')
        .forEach(b => ergebnis[b.kategorie] = (ergebnis[b.kategorie] || 0) + b.betrag);
    return ergebnis;
}

function monatsZahlen() {
    const buch = monatsBuchungen(aktuellerMonat());
    const ein = summe(buch.filter(b => b.typ === 'einnahme'));
    const aus = summe(buch.filter(b => b.typ === 'ausgabe'));
    const fix = summe(daten.fixkosten);
    return { buch, ein, aus, fix, saldo: ein - aus - fix };
}

function kurzesFeedback(button, text) {
    const alt = button.textContent;
    button.textContent = text;
    button.setAttribute('data-ok', '');
    setTimeout(() => {
        button.textContent = alt;
        button.removeAttribute('data-ok');
    }, 1000);
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

    const ul = document.querySelector('.section1 article ul');
    const proKat = Object.entries(ausgabenNachKategorie(aktuellerMonat())).sort((a, b) => b[1] - a[1]);

    if (!proKat.length) {
        ul.innerHTML = '<li data-leer>Noch keine Ausgaben in diesem Monat.</li>';
        return;
    }

    const max = proKat[0][1];
    ul.innerHTML = proKat.map(([k, betrag]) => {
        const info = kategorie(k);
        const anteil = aus ? Math.round(betrag / aus * 100) : 0;
        return `<li>
            <span>${info.icon}</span>
            <div>
                <p><b>${info.name}</b><span>${euro(betrag)} · ${anteil} %</span></p>
                <progress max="${max}" value="${betrag}"></progress>
            </div>
        </li>`;
    }).join('');
}

// ===== Tipps (aus deinen eigenen Daten) =====
function renderTipps() {
    const tipps = [];
    const { buch, ein, aus, fix, saldo } = monatsZahlen();
    const jetzt = ausgabenNachKategorie(aktuellerMonat());
    const vorher = ausgabenNachKategorie(vormonat());

    if (!daten.buchungen.length) {
        tipps.push(['👋', 'Trag ein paar Tage lang jede Ausgabe ein – danach bekommst du hier persönliche Tipps.']);
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

// ===== Buchen =====
const buchungForm = document.querySelector('.section2 > form');
buchungForm.elements.datum.value = heute();

buchungForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = buchungForm.elements;
    const betrag = parseFloat(f.betrag.value);
    if (!(betrag > 0)) return;

    const typ = f.typ.value;
    daten.buchungen.push({
        id: neueId(),
        typ,
        betrag,
        notiz: f.notiz.value.trim(),
        kategorie: typ === 'ausgabe' ? f.kategorie.value : null,
        datum: f.datum.value || heute()
    });
    speichern();

    f.betrag.value = '';
    f.notiz.value = '';
    f.betrag.focus();
    allesRendern();
    kurzesFeedback(buchungForm.querySelector('button'), '✓ Gespeichert');
});

function renderVerlauf() {
    const ul = document.querySelector('.section2 > ul');
    const liste = [...daten.buchungen]
        .sort((a, b) => b.datum.localeCompare(a.datum))
        .slice(0, 50);

    if (!liste.length) {
        ul.innerHTML = '<li data-leer>Noch keine Buchungen – trag oben deine erste ein.</li>';
        return;
    }

    ul.innerHTML = liste.map(b => {
        const info = b.typ === 'einnahme' ? { name: 'Einnahme', icon: '💰' } : kategorie(b.kategorie);
        const vorzeichen = b.typ === 'einnahme' ? '+' : '−';
        return `<li data-typ="${b.typ}">
            <span>${info.icon}</span>
            <div>
                <b>${esc(b.notiz || info.name)}</b>
                <small>${info.name} · ${datumKurz(b.datum)}</small>
            </div>
            <strong>${vorzeichen}${euro(b.betrag)}</strong>
            <button type="button" data-loeschen="${b.id}" aria-label="Löschen">✕</button>
        </li>`;
    }).join('');
}

document.querySelector('.section2 > ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (!btn) return;
    daten.buchungen = daten.buchungen.filter(b => b.id !== btn.dataset.loeschen);
    speichern();
    allesRendern();
});

// ===== Budgets =====
const budgetForm = document.querySelector('.section3 article form');

budgetForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = budgetForm.elements;
    const limit = parseFloat(f.limit.value);
    if (!(limit > 0)) return;
    daten.budgets[f.kategorie.value] = limit;
    speichern();
    f.limit.value = '';
    allesRendern();
});

function renderBudgets() {
    const ul = document.querySelector('.section3 article ul');
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
        return `<li data-status="${status}">
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

document.querySelector('.section3 article ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (!btn) return;
    delete daten.budgets[btn.dataset.loeschen];
    speichern();
    allesRendern();
});

// ===== Fixkosten =====
const fixForm = document.querySelector('.section3 aside form');

fixForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = fixForm.elements;
    const betrag = parseFloat(f.betrag.value);
    const bezeichnung = f.bezeichnung.value.trim();
    if (!(betrag > 0) || !bezeichnung) return;
    daten.fixkosten.push({ id: neueId(), bezeichnung, betrag });
    speichern();
    fixForm.reset();
    allesRendern();
});

function renderFixkosten() {
    const ul = document.querySelector('.section3 aside ul');

    ul.innerHTML = daten.fixkosten.length
        ? daten.fixkosten.map(f => `<li>
            <p>
                <b>${esc(f.bezeichnung)}</b>
                <span>${euro(f.betrag)}</span>
                <button type="button" data-loeschen="${f.id}" aria-label="Löschen">✕</button>
            </p>
        </li>`).join('')
        : '<li data-leer>Miete, Handy, Streaming … alles, was jeden Monat fix abgeht.</li>';

    document.querySelector('.section3 aside > p b').textContent = euro(summe(daten.fixkosten));
}

document.querySelector('.section3 aside ul').addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (!btn) return;
    daten.fixkosten = daten.fixkosten.filter(f => f.id !== btn.dataset.loeschen);
    speichern();
    allesRendern();
});

// ===== Sparziele =====
const zielForm = document.querySelector('.section4 > form');

zielForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = zielForm.elements;
    const ziel = parseFloat(f.ziel.value);
    const bezeichnung = f.bezeichnung.value.trim();
    if (!(ziel > 0) || !bezeichnung) return;
    daten.ziele.push({ id: neueId(), bezeichnung, ziel, gespart: 0 });
    speichern();
    zielForm.reset();
    allesRendern();
});

function renderZiele() {
    const ul = document.querySelector('.section4 > ul');

    if (!daten.ziele.length) {
        ul.innerHTML = '<li data-leer>Noch kein Sparziel. Worauf sparst du gerade?</li>';
        return;
    }

    ul.innerHTML = daten.ziele.map(z => {
        const fertig = z.gespart >= z.ziel;
        const prozent = Math.min(100, Math.round(z.gespart / z.ziel * 100));
        return `<li data-status="${fertig ? 'done' : 'ok'}">
            <p>
                <b>🎯 ${esc(z.bezeichnung)}</b>
                <span>${euro(z.gespart)} / ${euro(z.ziel)}</span>
                <button type="button" data-loeschen="${z.id}" aria-label="Ziel löschen">✕</button>
            </p>
            <progress max="${z.ziel}" value="${Math.min(z.gespart, z.ziel)}"></progress>
            <small>${fertig ? '🎉 Geschafft!' : `${prozent} % – noch ${euro(z.ziel - z.gespart)}`}</small>
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
    const betrag = parseFloat(form.elements.betrag.value);
    if (!ziel || !(betrag > 0)) return;
    ziel.gespart = Math.round((ziel.gespart + betrag) * 100) / 100;
    speichern();
    allesRendern();
});

zielListe.addEventListener('click', e => {
    const btn = e.target.closest('button[data-loeschen]');
    if (!btn) return;
    if (!confirm('Sparziel wirklich löschen?')) return;
    daten.ziele = daten.ziele.filter(z => z.id !== btn.dataset.loeschen);
    speichern();
    allesRendern();
});

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
            const gueltig = neu && Array.isArray(neu.buchungen) && Array.isArray(neu.fixkosten)
                && Array.isArray(neu.ziele) && typeof neu.budgets === 'object';
            if (!gueltig) throw new Error();

            if (!confirm(`Backup mit ${neu.buchungen.length} Buchungen laden? Deine aktuellen Daten werden ersetzt.`)) return;
            daten = neu;
            speichern();
            allesRendern();
            alert('✓ Backup geladen');
        } catch {
            alert('Das ist keine gültige Backup-Datei.');
        }
    };
    leser.readAsText(datei);
});

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
    renderFixkosten();
    renderZiele();
}

// ===== Start =====
document.querySelector('header time').textContent =
    new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

const optionen = Object.entries(KATEGORIEN)
    .map(([k, v]) => `<option value="${k}">${v.icon} ${v.name}</option>`)
    .join('');
document.querySelectorAll('select[name="kategorie"]').forEach(s => s.innerHTML = optionen);

zeigeSection('section1');
allesRendern();
