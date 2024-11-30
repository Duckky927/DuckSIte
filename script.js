// Funzione per gestire la barra di ricerca
document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        alert(`Hai cercato: ${searchTerm}`);
        this.value = ''; // Pulisce la barra di ricerca
    }
});

// Funzione per gestire l'invio del modulo di contatto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene il comportamento predefinito del modulo
    alert('Messaggio inviato con successo!');
    this.reset(); // Pulisce il modulo
});

// Animazioni al caricamento delle sezioni
const sections = document.querySelectorAll('section.content');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
