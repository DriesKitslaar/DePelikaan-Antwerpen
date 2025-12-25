# De Pelikaan Antwerpen - Website

Welkom in de repository van de vernieuwde website voor **De Pelikaan Antwerpen**.
Dit project is een moderne, statische website met een luxe uitstraling, inclusief een eenvoudig beheersysteem (Admin Dashboard) voor de gebruiker.

## 🚀 Functies

*   **Premium Design**: Donker thema met gouden accenten (`#c5a059`), parallax effecten en verfijnde typografie.
*   **Menu Kaart**: Volledige, filterbare menukaart (Bieren, Wijnen, Cocktails, Snacks, etc.).
*   **Promo Banner**: Beheerbare banner bovenaan de site voor evenementen of mededelingen.
*   **Admin Dashboard**: Een ingebouwde `/admin.html` pagina (wachtwoord: `pelikaan`) waarmee je:
    *   De promo banner aan/uit kunt zetten en aanpassen.
    *   Nieuwe items aan de menukaart kunt toevoegen.
    *   Items kunt verwijderen.
    *   **Direct opslaan**: Wijzigingen worden direct opgeslagen in de browser van de bezoeker (LocalStorage).

## 🛠️ Technologie

*   **HTML5 & CSS3**: Geen frameworks, puur en snel.
*   **JavaScript (Vanilla)**: Voor alle interactiviteit.
*   **Geen Database**: De "admin" functie werkt via `LocalStorage`. Dit betekent dat wijzigingen die je doet op *jouw* computer (in de admin) alleen zichtbaar zijn op *jouw* computer, tenzij je de code update.
    *   *Let op*: In de huidige versie is de "Opslaan" knop in het dashboard bedoeld voor lokaal beheer. Als je de wijzigingen permanent voor iedereen wilt maken, moet je de **"GENEREREN CODE"** (oude functie) gebruiken of de `data.js` file updaten in de code en pushen naar GitHub.
    *   *Update*: De nieuwste versie gebruikt een centraal `data.js` bestand. Als je items toevoegt via het dashboard, worden ze opgeslagen in je browser. Om ze voor **iedereen** zichtbaar te maken, moet je de wijzigingen in `data.js` doorvoeren en committen naar GitHub.

## 🌍 Hosting & CI/CD (Automatische Deploy)

Omdat dit een statische site is, is hosting zeer eenvoudig en vaak gratis.

### Optie 1: Netlify (Aanbevolen)
1.  Maak een account op [Netlify.com](https://www.netlify.com).
2.  Klik op **"Add new site"** -> **"Import an existing project"**.
3.  Kies **"GitHub"** en selecteer deze repository (`DePelikaan-Antwerpen`).
4.  Klik op **"Deploy Site"**.
5.  **Klaar!** Elke keer als jij (of ik) een wijziging naar GitHub pusht (`git push`), zet Netlify de nieuwe versie binnen enkele seconden automatisch live.

### Optie 2: Vercel
Vergelijkbaar met Netlify.
1.  Ga naar [Vercel.com](https://vercel.com).
2.  Importeer je GitHub repository.
3.  Deploy.

### Optie 3: GitHub Pages
1.  Ga in deze repository naar **Settings** > **Pages**.
2.  Kies bij "Source" voor **Deploy from a branch**.
3.  Selecteer de branch **main** en folder **/(root)**.
4.  Klik op **Save**. Je site is na een paar minuten online op `https://drieskitslaar.github.io/DePelikaan-Antwerpen/`.

## 📁 Bestandsstructuur

*   `indext.html`: De hoofdpagina.
*   `admin.html`: De inlogpagina voor beheer.
*   `dashboard.html`: Het beheerspaneel.
*   `style.css`: Alle opmaak.
*   `script.js`: De logica voor de banner en het menu.
*   `data.js`: De database met alle menu-items en banner-info.

---
*Gebouwd door Antigravity Agent*
