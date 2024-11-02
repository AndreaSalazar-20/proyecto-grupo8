document.addEventListener("DOMContentLoaded", () => {
    const buscarBtn = document.getElementById("boton-busqueda");
    const form = document.getElementById("Filtro-razas");
    const cards = Array.from(document.querySelectorAll(".card"));
    const coleccion = document.querySelector(".coleccion");

    // Función para aplicar los filtros
    const aplicarFiltros = () => {
        const filtroNombre = form.querySelector("#nombre-raza").value.toLowerCase();
        const filtroGrupo = form.querySelector("#grupo").value.toLowerCase();
        const filtroLadridos = form.querySelector("#Ladridos").value.toLowerCase();
        const filtroTamaño = form.querySelector("#tamaño").value.toLowerCase();
        const filtroEsperanza = form.querySelector("#esperanza").value.toLowerCase();
        const filtroPeso = form.querySelector("#peso").value.toLowerCase();
        const filtroColores = form.querySelector("#colores").value.toLowerCase();
        const filtroEnfermedades = form.querySelector("#enfermedades").value.toLowerCase();

        coleccion.innerHTML = ""; // Limpiamos el contenedor

        // Filtrar y reordenar cards
        cards.forEach(card => {
            const panel = card.querySelector(".textofiltro");
            const grupo = panel.querySelector("p:nth-child(1)").textContent.toLowerCase();
            const ladridos = panel.querySelector("p:nth-child(2)").textContent.toLowerCase();
            const tamaño = panel.querySelector("p:nth-child(3)").textContent.toLowerCase();
            const esperanza = panel.querySelector("p:nth-child(4)").textContent.toLowerCase();
            const peso = panel.querySelector("p:nth-child(6)").textContent.toLowerCase();
            const colores = panel.querySelector("p:nth-child(5)").textContent.toLowerCase();
            const enfermedades = panel.querySelector("p:nth-child(7)").textContent.toLowerCase();
            const nombre = card.querySelector(".titulo-razas").textContent.toLowerCase();




            let cumpleFiltro = true;
            if (filtroNombre && !nombre.includes(filtroNombre)) cumpleFiltro = false;
            if (filtroGrupo && !grupo.includes(filtroGrupo)) cumpleFiltro = false;
            if (filtroLadridos && !ladridos.includes(filtroLadridos)) cumpleFiltro = false;
            if (filtroTamaño && !tamaño.includes(filtroTamaño)) cumpleFiltro = false;
            if (filtroEsperanza && !esperanza.includes(filtroEsperanza)) cumpleFiltro = false;
            if (filtroPeso && !peso.includes(filtroPeso)) cumpleFiltro = false;
            if (filtroColores && !colores.includes(filtroColores)) cumpleFiltro = false;
            if (filtroEnfermedades && !enfermedades.includes(filtroEnfermedades)) cumpleFiltro = false;

            if (cumpleFiltro) {
                coleccion.appendChild(card);
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        // Volver a activar el evento para los botones de acordeón después de filtrar
        activarAccordion();
    };

    const activarAccordion = () => {
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach(acc => {
            acc.onclick = function () {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                panel.style.display = panel.style.display === "block" ? "none" : "block";
            };
        });
    };

    // Inicializar evento de acordeón
    activarAccordion();

    buscarBtn.addEventListener("click", aplicarFiltros);

    form.addEventListener("reset", () => {
        cards.forEach(card => {
            card.classList.remove("hidden");
            coleccion.appendChild(card);
        });
        activarAccordion(); // Reiniciar acordeón después de restablecer los filtros
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
