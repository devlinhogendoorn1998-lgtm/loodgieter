// Section // Formulier, Hamburger & Scroll Logica
document.addEventListener('DOMContentLoaded', () => {

    // ── Hamburger menu ────────────────────────────────────────────────────────
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    function openMenu() {
        mobileMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Menu sluiten');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Menu openen');
        document.body.style.overflow = '';
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
        });

        // Sluit bij klik op link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Sluit bij Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // ── Navigatie scroll effect ────────────────────────────────────────────────
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 60);
        }
    }, { passive: true });

    // ── Formulier ────────────────────────────────────────────────────────────
    const luxeForm = document.getElementById('luxeForm');
    if (luxeForm) {
        luxeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = e.target.querySelector('.btn-submit');
            submitBtn.textContent = 'AANVRAAG VERZENDEN...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = '\u2713 AANVRAAG ONTVANGEN';
                submitBtn.style.background = '#4a7c59';
                luxeForm.reset();
                setTimeout(() => {
                    submitBtn.textContent = 'AANVRAAG VERZENDEN';
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 4000);
            }, 1500);
        });
    }

});
