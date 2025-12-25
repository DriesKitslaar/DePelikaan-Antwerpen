// ==========================================
//    De Pelikaan - Main Script
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA LOADING ---
    let currentEvent = defaultEvent;
    let menuItems = defaultMenuItems;

    // Check localStorage (The "Database")
    const lsEvent = localStorage.getItem('siteEvent');
    if (lsEvent) {
        currentEvent = JSON.parse(lsEvent);
    }

    const lsMenu = localStorage.getItem('siteMenu');
    if (lsMenu) {
        menuItems = JSON.parse(lsMenu);
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

    function renderMenu(category) {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';
        
        const filtered = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);

        if (filtered.length === 0) {
            menuGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">Geen items gevonden in deze categorie.</div>';
            return;
        }

        filtered.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.05}s`;
            card.style.opacity = '0'; 

            card.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
            `;
            menuGrid.appendChild(card);
        });

        if (!document.getElementById('dynamic-styles')) {
            const style = document.createElement('style');
            style.id = 'dynamic-styles';
            style.innerHTML = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    renderMenu('all');

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});
