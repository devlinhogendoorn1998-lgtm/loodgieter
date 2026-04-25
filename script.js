// Interactiviteit sectie
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll voor navigatie (indien nodig)
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // Formulier validatie placeholder
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Bedankt! Uw aanvraag voor meesterschap is verzonden.');
        form.reset();
    });
});
// Formulier en Footer logica sectie
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', (e) => {
        const emailInput = document.querySelector('input[type="email"]').value;
        const nameInput = document.querySelector('input[type="text"]').value;

        if (nameInput === "" || emailInput === "") {
            e.preventDefault();
            alert("Zorg dat alle verplichte velden goudomrand zijn ingevuld.");
        } else {
            console.log("Formulier wordt verzonden door: " + nameInput);
            // Hier kun je eventueel een succes-melding tonen na verzending
        }
    });
});