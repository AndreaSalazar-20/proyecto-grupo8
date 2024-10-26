var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

// Selecciona todas las tarjetas con la clase .card
const cards = document.querySelectorAll('.card');

// Itera sobre cada tarjeta y añade un evento de clic
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Alterna la clase 'active' en la tarjeta
        card.classList.toggle('active');
    });
});

