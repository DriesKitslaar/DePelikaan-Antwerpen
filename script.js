// ==========================================
//    De Pelikaan - Main Script
// ==========================================
// Now Supports Supabase!

document.addEventListener('DOMContentLoaded', async () => {

    // --- 1. DATA LOADING ---
    let currentEvent = defaultEvent;
    let menuItems = defaultMenuItems;

    // A. Probeer Supabase
    if (typeof supabase !== 'undefined' && supabase) {
        try {
            // Fetch Event
            const { data: eventData, error: eventError } = await supabase
                .from('events')
                .select('*')
                .single(); 
            
            if (eventData && !eventError) {
                currentEvent = eventData;
                console.log('Loaded Event from Supabase');
            }

            // Fetch Menu
            const { data: menuData, error: menuError } = await supabase
                .from('menu_items')
                .select('*');
            
            if (menuData && !menuError && menuData.length > 0) {
                menuItems = menuData;
                console.log('Loaded Menu from Supabase');
            }
        } catch (err) {
            console.warn('Supabase fetch failed, falling back to local storage', err);
        }
    } 
    
    // B. Fallback naar LocalStorage
    if (!supabase || currentEvent === defaultEvent) { 
        const lsEvent = localStorage.getItem('siteEvent');
        if (lsEvent) currentEvent = JSON.parse(lsEvent);
    }
    if (!supabase || menuItems === defaultMenuItems) {
        const lsMenu = localStorage.getItem('siteMenu');
        if (lsMenu) menuItems = JSON.parse(lsMenu);
    }

    // --- 2. PROMO BANNER ---
    if (currentEvent.show) {
        const banner = document.getElementById('promo-banner');
        if (banner) {
            banner.innerHTML = `
                <div class="promo-content">
                    <span class="promo-date">${currentEvent.date}</span>
                    <span class="promo-text">${currentEvent.title}</span>
                    <span style="opacity: 0.8">| ${currentEvent.text}</span>
                </div>
                <button class="promo-close" onclick="this.parentElement.style.display='none'">&times;</button>
            `;
            banner.classList.remove('hidden');
            
            const header = document.querySelector('.main-header');
            if (header) {
                header.style.top = banner.offsetHeight + 'px';
            }
        }
    }
    
    // --- 3. MENU RENDERING ---
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const categoryTitles = {
        tap: "Van 't Vat",
        bottle: "Op Fles",
        wine: "Wijnen",
        cocktail: "Cocktails",
        mocktail: "Mocktails",
        spirits: "Sterke Drank",
        shots: "Shotjes",
        apero: "Aperitief",
        soft: "Fris",
        hot: "Warm",
        snacks: "Snacks",
        merch: "Merchandise"
    };

    const categoryOrder = ['tap', 'bottle', 'wine', 'cocktail', 'mocktail', 'spirits', 'shots', 'apero', 'soft', 'hot', 'snacks', 'merch'];

    function createMenuItemCard(item, delayIndex) {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.style.animation = `fadeInUp 0.5s ease forwards ${Math.min(delayIndex * 0.05, 1)}s`;
        card.style.opacity = '0'; 

        card.innerHTML = `
            <div class="item-header">
                <span class="item-name">${item.name}</span>
                <span class="item-price">${item.price}</span>
            </div>
            ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
        `;
        menuGrid.appendChild(card);
    }

    function renderMenu(category) {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';

        if (category === 'all') {
            let hasItems = false;
            let displayIndex = 0;

            categoryOrder.forEach(catKey => {
                const catItems = menuItems.filter(item => item.category === catKey);
                if (catItems.length > 0) {
                    hasItems = true;
                    const header = document.createElement('h3');
                    header.className = 'menu-category-header';
                    header.textContent = categoryTitles[catKey] || catKey;
                    menuGrid.appendChild(header);

                    catItems.forEach(item => {
                        createMenuItemCard(item, displayIndex++);
                    });
                }
            });

            const known = new Set(categoryOrder);
            const others = menuItems.filter(item => !known.has(item.category));
            if (others.length > 0) {
                const header = document.createElement('h3');
                header.className = 'menu-category-header';
                header.textContent = 'Overige';
                menuGrid.appendChild(header);
                others.forEach(item => createMenuItemCard(item, displayIndex++));
            }

            if (!hasItems && others.length === 0) {
                menuGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">Geen items gevonden.</div>';
            }

        } else {
            const filtered = menuItems.filter(item => item.category === category);
            if (filtered.length === 0) {
                menuGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">Geen items gevonden in deze categorie.</div>';
            } else {
                filtered.forEach((item, index) => createMenuItemCard(item, index));
            }
        }
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    renderMenu('all');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});
