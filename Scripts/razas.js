document.addEventListener('DOMContentLoaded', function () {
    // Obtener los filtros
    const nombreRaza = document.getElementById('nombre-raza');
    const grupoRaza = document.getElementById('grupo');
    const ladridosRaza = document.getElementById('Ladridos');
    const tamanoRaza = document.getElementById('tamaño');
    const botonBusqueda = document.getElementById('boton-busqueda');
    const botonLimpiar = document.querySelector('button[type="reset"]'); // Botón "Limpiar todo"

    // Obtener todas las tarjetas de perros
    const tarjetas = document.querySelectorAll('.card');

    // Función para aplicar los filtros
    function aplicarFiltros() {
        const filtroNombre = nombreRaza.value.toLowerCase();
        const filtroGrupo = grupoRaza.value.toLowerCase();
        const filtroLadridos = ladridosRaza.value.toLowerCase();
        const filtroTamano = tamanoRaza.value.toLowerCase();

        tarjetas.forEach(tarjeta => {
            // Obtener la información de la tarjeta
            const nombreTarjeta = tarjeta.querySelector('.titulo-razas').textContent.toLowerCase();
            const grupoTarjeta = tarjeta.querySelector('.textofiltro p:nth-child(1)').textContent.toLowerCase();
            const ladridosTarjeta = tarjeta.querySelector('.textofiltro p:nth-child(2)').textContent.toLowerCase();
            const tamanoTarjeta = tarjeta.querySelector('.textofiltro p:nth-child(3)').textContent.toLowerCase();

            // Lógica de visibilidad
            const nombreCoincide = filtroNombre === '' || nombreTarjeta.includes(filtroNombre);
            const grupoCoincide = filtroGrupo === '' || grupoTarjeta.includes(filtroGrupo);
            const ladridosCoincide = filtroLadridos === '' || ladridosTarjeta.includes(filtroLadridos);
            const tamanoCoincide = filtroTamano === '' || tamanoTarjeta.includes(filtroTamano);

            // Mostrar u ocultar tarjeta si coincide con todos los filtros
            tarjeta.classList.toggle('hidden', !(nombreCoincide && grupoCoincide && ladridosCoincide && tamanoCoincide));
        });
    }

    // Función para restablecer los filtros
    function resetearFiltros() {
        // Restablecer los valores de los filtros
        nombreRaza.value = '';
        grupoRaza.value = '';
        ladridosRaza.value = '';
        tamanoRaza.value = '';

        // Mostrar todas las tarjetas
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.remove('hidden');  // Asegurarse de que se elimine la clase hidden
        });
    }

    // Añadir eventos
    botonBusqueda.addEventListener('click', aplicarFiltros);
    botonLimpiar.addEventListener('click', function (event) {
        event.preventDefault();  // Evitar que el botón recargue la página
        resetearFiltros();  // Llamar a la función para restablecer los filtros
    });

    // Manejo de acordeón
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        });
    }

    // Seleccionar todas las tarjetas con la clase .card
    const cards = document.querySelectorAll('.card');

    // Añadir un evento de clic en cada tarjeta
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
});

// botón hacia arriba

const upBtn = document.getElementById("upBtn");

window.onscroll = function () { handleScroll() };

function handleScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upBtn.classList.remove("hide");
        upBtn.classList.add("show");
        upBtn.style.display = "block";
    } else {
        upBtn.classList.remove("show");
        upBtn.classList.add("hide");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollTopFd() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
