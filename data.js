// ==========================================
//    CENTRALE DATA - De Pelikaan
// ==========================================

// --- 1. Promo Banner Data ---
const defaultEvent = {
    show: true,
    date: "2 Nov",
    title: "Minigolf Tornooi",
    text: "Schrijf je nu in aan de toog!",
    link: "#contact"
};

// --- 2. Menu Items Data ---
const defaultMenuItems = [
    // --- Bieren op vat ---
    { name: "Pintje Cristal 25cl", price: "€ 2.90", category: "tap", desc: "" },
    { name: "Boerke Cristal 25cl", price: "€ 2.90", category: "tap", desc: "" },
    { name: "Grote Cristal 33cl", price: "€ 3.80", category: "tap", desc: "Spicy lager with a refreshing bitter aftertaste" },
    { name: "Halve Liter Cristal 50cl", price: "€ 5.80", category: "tap", desc: "" },
    { name: "Bolleke De Koninck 5.2%", price: "€ 3.40", category: "tap", desc: "Amber-coloured speciality beer from Antwerp" },
    { name: "Rodenbach 25cl 5.2%", price: "€ 3.40", category: "tap", desc: "" },
    { name: "Rodenbach 33cl 5.2%", price: "€ 4.10", category: "tap", desc: "Unique Flemish Red-Brown beer, recognized as 'traditional local product'" },
    { name: "La Chouffe 25cl 8%", price: "€ 4.50", category: "tap", desc: "Hazy, golden-blonde ale with a distinctive flavor of fresh fruits and a beguiling hoppiness" },
    { name: "Chimay Blauw 33cl 9%", price: "€ 4.90", category: "tap", desc: "A dark ale with a powerful aroma, its complex flavor improves with passing time" },
    { name: "Kriek Mort Subite 25cl 4%", price: "€ 4.10", category: "tap", desc: "Brewed and slowly matured in oak barrels in which delicious fresh cherries are added" },
    { name: "Affligem Tripel 30cl 9%", price: "€ 4.50", category: "tap", desc: "Blond beer of high fermentation, it tastes sweet" },
    { name: "Tripel d'Anvers 25cl 8%", price: "€ 4.50", category: "tap", desc: "Subtle interplay of spicy and slightly sweet notes" },
    { name: "Jack's Precious IPA 25cl 5.9%", price: "€ 4.10", category: "tap", desc: "Blond Belgian IPA - fruit creamy taste with subtle hoppy bitterness" },

    // --- Bieren op fles ---
    { name: "Duvel 8.5%", price: "€ 4.60", category: "bottle", desc: "" },
    { name: "Westmalle Dubbel 7%", price: "€ 4.40", category: "bottle", desc: "" },
    { name: "Westmalle Tripel 9.5%", price: "€ 4.60", category: "bottle", desc: "" },
    { name: "Chimay Tripel 8%", price: "€ 4.80", category: "bottle", desc: "" },
    { name: "Orval 6.2%", price: "€ 5.10", category: "bottle", desc: "" },
    { name: "Rochefort 8 9.2%", price: "€ 5.10", category: "bottle", desc: "" },
    { name: "Rochefort 10 11,3%", price: "€ 5.60", category: "bottle", desc: "" },
    { name: "La Trappe Quadrupel 10%", price: "€ 4.90", category: "bottle", desc: "" },
    { name: "Geuze Boon 25cl 7%", price: "€ 3.80", category: "bottle", desc: "" },
    { name: "Carlsberg 5.2%", price: "€ 3.20", category: "bottle", desc: "" },
    { name: "Brugse Tarwe 5%", price: "€ 3.50", category: "bottle", desc: "" },
    { name: "Ruwet Cider (Appel) 4.5%", price: "€ 4.50", category: "bottle", desc: "" },
    { name: "Bolder 7.5%", price: "€ 4.60", category: "bottle", desc: "" },
    { name: "G.O.D. 0.2%", price: "€ 4.40", category: "bottle", desc: "" },
    { name: "Cristal 0.0%", price: "€ 2.90", category: "bottle", desc: "" },
    { name: "Carlsberg 0.0%", price: "€ 3.00", category: "bottle", desc: "" },
    { name: "Affligem 0.0%", price: "€ 4.50", category: "bottle", desc: "" },

    // --- Sterke Drank 6cl ---
    { name: "Vodka", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Gin Bombay Dry", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "J&B", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Jack Daniels", price: "€ 7.50", category: "spirits", desc: "" },
    { name: "Johnny Walker", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Jameson", price: "€ 7.50", category: "spirits", desc: "" },
    { name: "Bacardi", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Havana Club Special", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Ricard", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Amaretto", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Baileys", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Elixir d'Anvers", price: "€ 7.30", category: "spirits", desc: "" },
    { name: "Elixir de Spa", price: "€ 7.50", category: "spirits", desc: "" },
    { name: "Cognac", price: "€ 7.50", category: "spirits", desc: "" },
    { name: "Calvados", price: "€ 7.50", category: "spirits", desc: "" },
    { name: "Jonge Bols", price: "€ 4.60", category: "spirits", desc: "" },
    { name: "Cynar", price: "€ 7.30", category: "spirits", desc: "" },

    // --- Shotjes 3cl ---
    { name: "Pietensap (Amaretto/Gin)", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Gingerwodka", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Sambuca", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Jagermeister", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Salmari", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Koetsier", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Elixir d'Anvers 3cl", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Tequila", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Wodka", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Godfather 3cl", price: "€ 3.70", category: "shots", desc: "" },
    { name: "Jenever Bols/Citroen/Appel", price: "€ 3.20", category: "shots", desc: "" },
    { name: "Cynar", price: "€ 3.70", category: "shots", desc: "" },

    // --- Frisdranken ---
    { name: "Chaudfontaine Rood", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Chaudfontaine Blauw", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Coca Cola", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Coca Cola Light/Zero", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Royal Bliss Tonic", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Royal Bliss Bitter Lemon", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Royal Bliss Agrum", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Sprite / Fanta", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Fuze Tea / Green", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Fruitsap", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Appelsap", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Pompelmoessap", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Tomatensap", price: "€ 3.10", category: "soft", desc: "" },
    { name: "ACE Multivitaminen", price: "€ 3.10", category: "soft", desc: "" },
    { name: "Cécémel", price: "€ 3.10", category: "soft", desc: "" },

    // --- Wijnen/Champagne ---
    { name: "Sauvignon Aimery Wit", price: "€ 4.60", category: "wine", desc: "" },
    { name: "David Moreno Crianza Rood", price: "€ 4.60", category: "wine", desc: "" },
    { name: "Rosado Aimery Rosé", price: "€ 4.60", category: "wine", desc: "" },
    { name: "Fles Wijn", price: "€ 24.00", category: "wine", desc: "" },
    { name: "Cava Juve Masana", price: "€ 5.50", category: "wine", desc: "" },
    { name: "Cava Juve Masana 75cl", price: "€ 25.00", category: "wine", desc: "" },
    { name: "Piper-Heidsieck", price: "€ 77.00", category: "wine", desc: "Champagne (enkel te koop per fles)" },

    // --- Aperitief ---
    { name: "Koetsierke 6cl", price: "€ 5.30", category: "apero", desc: "" },
    { name: "Porto Rood / Wit 12cl", price: "€ 5.10", category: "apero", desc: "" },
    { name: "Sherry Dry", price: "€ 5.10", category: "apero", desc: "" },
    { name: "Martini Rood / Wit 12cl", price: "€ 5.10", category: "apero", desc: "" },
    { name: "Campari 6cl", price: "€ 6.80", category: "apero", desc: "" },
    { name: "Aperol Spritz", price: "€ 8.80", category: "apero", desc: "" },
    { name: "Negroni 9cl", price: "€ 9.50", category: "apero", desc: "" },
    { name: "Filliers 5 Jaar", price: "€ 5.30", category: "apero", desc: "" },
    { name: "Appeljenever Berentzen 9cl", price: "€ 4.60", category: "apero", desc: "" },
    { name: "Citroenjenever Wortegemse 9cl", price: "€ 4.60", category: "apero", desc: "" },

    // --- Cocktails ---
    { name: "Mojito", price: "€ 9.70", category: "cocktail", desc: "" },
    { name: "Dark & Stormy", price: "€ 9.70", category: "cocktail", desc: "" },
    { name: "Moscow Mule", price: "€ 9.70", category: "cocktail", desc: "" },
    { name: "Lazy Red Cheeks", price: "€ 9.70", category: "cocktail", desc: "" },
    { name: "Aperol Spritz 18cl", price: "€ 8.80", category: "cocktail", desc: "" },
    { name: "Negroni 9cl", price: "€ 9.70", category: "cocktail", desc: "" },
    { name: "Long Island Ice Tea", price: "€ 13.60", category: "cocktail", desc: "" },

    // --- Mocktails ---
    { name: "Virgin Mojito", price: "€ 7.70", category: "mocktail", desc: "" },
    { name: "Moscow Mule Mocktail", price: "€ 7.70", category: "mocktail", desc: "" },

    // --- Warme Dranken ---
    { name: "Koffie", price: "€ 2.90", category: "hot", desc: "" },
    { name: "Koffie Verkeerd", price: "€ 3.60", category: "hot", desc: "" },
    { name: "Cappuccino", price: "€ 3.90", category: "hot", desc: "" },
    { name: "Espresso", price: "€ 2.80", category: "hot", desc: "" },
    { name: "Deca", price: "€ 2.90", category: "hot", desc: "" },
    { name: "Koffie Verkeerd Deca", price: "€ 3.60", category: "hot", desc: "" },
    { name: "Warme Choco", price: "€ 4.40", category: "hot", desc: "" },
    { name: "Warme Choco Slagroom", price: "€ 4.90", category: "hot", desc: "" },
    { name: "Thee Natuur", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Citroen", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Rozebottel", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Munt", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Kamille", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Linde", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Rooibos", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Thee Gember / Citroen", price: "€ 3.20", category: "hot", desc: "" },
    { name: "Supplement Gembersiroop", price: "€ 1.00", category: "hot", desc: "" },

    // --- Snacks ---
    { name: "Chips Zout / Paprika / Pickles", price: "€ 2.30", category: "snacks", desc: "" },
    { name: "Blokjes Kaas of Salami 200g", price: "€ 5.90", category: "snacks", desc: "" },
    { name: "Blokjes Kaas en Salami 400g", price: "€ 11.30", category: "snacks", desc: "" },

    // --- T-shirts ---
    { name: "T-Shirt (S - M - L - XL - XXL)", price: "€ 16.00", category: "merch", desc: "" }
];
