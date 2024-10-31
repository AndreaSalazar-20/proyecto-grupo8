
//--------------------------------------BOTON BUSCAR------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
    //Selecciona el botón de búsqueda y el campo de texto de entrada
    const searchButton = document.querySelector(".btnbuscar button");
    const searchInput = document.querySelector(".btnbuscar input");

    //Función de búsqueda
    const searchFunction = () => {
        const query = searchInput.value.toLowerCase();
        
        //Selecciona todas las tarjetas de contenido
        const cards = document.querySelectorAll(".contenedor-card .card");
        
        //Itera sobre cada tarjeta y revisa si el nombre en el <h2> coincide con la búsqueda
        cards.forEach(card => {
            const name = card.querySelector(".contenido h2").textContent.toLowerCase();
            
            if (name.includes(query)) {
                card.style.display = "block"; //Muestra la tarjeta si hay coincidencia
            } else {
                card.style.display = "none"; //Oculta la tarjeta si no coincide
            }
        });
    };

    // Evento de búsqueda al hacer clic en el botón
    searchButton.addEventListener("click", searchFunction);

    // Evento de búsqueda al presionar Enter en el campo de entrada
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchFunction();
        }
    });
});

//-----------------------------------------DESPLEGAR CATEGORÍAS---------------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById("toggleMenu");
    const menu = document.getElementById("menu");

    // Mostrar y ocultar menú de categorías
    toggleMenu.addEventListener("click", function() {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    });

    //-----------------------------------------FILTRO DE RAZAS----------------------------------------------------//
    // Mostrar y ocultar submenú de razas
    const razaMenuToggle = document.getElementById("razaMenuToggle");
    const razaMenu = document.getElementById("razaMenu");

    razaMenuToggle.addEventListener("click", function() {
        razaMenu.style.display = razaMenu.style.display === "none" ? "block" : "none";
    });

    // Filtrar por raza
    const razaOptions = document.querySelectorAll(".raza-option");
    const contenedorCard = document.querySelector(".contenedor-card");
    
    // Crear el mensaje de no disponibilidad
    const noDisponibleMensaje = document.createElement("h3");
    noDisponibleMensaje.textContent = "No se encuentran perritos disponibles para esta raza";
    noDisponibleMensaje.style.display = "none";
    contenedorCard.appendChild(noDisponibleMensaje);

    razaOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedRaza = option.getAttribute("data-raza");
            filterByRaza(selectedRaza);
        });
    });

    function filterByRaza(raza) {
        const cards = document.querySelectorAll(".card");
        let visibleCards = 0;

        cards.forEach(card => {
            const cardRaza = card.querySelector(".contenido .h3 h3").textContent;
            // Mostrar solo las tarjetas que coincidan con la raza seleccionada
            if (cardRaza.includes(raza)|| raza === "Todos") {
                card.style.display = "block";
                visibleCards++;
            } else {
                card.style.display = "none";
            }
        });

        // Mostrar el mensaje si no hay tarjetas visibles
        if (visibleCards === 0) {
            noDisponibleMensaje.style.display = "block";
        } else {
            noDisponibleMensaje.style.display = "none";
        }
    }

    //----------------------------------------FILTRO DE UBICACIONES-----------------------------------------------------//
    // Mostrar y ocultar submenú de ubicaciones
    const ubicacionMenuToggle = document.getElementById("ubicacionMenuToggle");
    const ubicacionMenu = document.getElementById("ubicacionMenu");

    ubicacionMenuToggle.addEventListener("click", function() {
        ubicacionMenu.style.display = ubicacionMenu.style.display === "none" ? "block" : "none";
    });

    // Crear el mensaje de no disponibilidad para ubicación
    const noDisponibleMensajeUbicacion = document.createElement("h3");
    noDisponibleMensajeUbicacion.textContent = "No se encuentran perritos disponibles en esta ubicación";
    noDisponibleMensajeUbicacion.style.display = "none";
    contenedorCard.appendChild(noDisponibleMensajeUbicacion);

    // Función para filtrar por ubicación
    function filtrarPorUbicacion(ubicacionSeleccionada) {
        // Selecciona todas las tarjetas de mascota
        const tarjetasMascotas = document.querySelectorAll('.card a');
        let visibleCards = 0;

        // Itera sobre cada tarjeta
        tarjetasMascotas.forEach(tarjeta => {
            const ubicacionMascota = tarjeta.getAttribute('data-ubicacion');
            
            // Verifica si coincide con la ubicación seleccionada
            if (ubicacionSeleccionada === 'Todos' || ubicacionMascota === ubicacionSeleccionada) {
                tarjeta.closest('.card').style.display = 'block'; // Muestra la tarjeta
                visibleCards++;
            } else {
                tarjeta.closest('.card').style.display = 'none'; // Oculta la tarjeta
            }
        });

        // Mostrar el mensaje si no hay tarjetas visibles
        if (visibleCards === 0) {
            noDisponibleMensajeUbicacion.style.display = "block";
        } else {
            noDisponibleMensajeUbicacion.style.display = "none";
        }
    }

    // Evento de clic en las opciones de ubicación
    document.querySelectorAll('.ubicacion-option').forEach(option => {
        option.addEventListener('click', () => {
            const ubicacionSeleccionada = option.getAttribute('data-ubicacion');
            filtrarPorUbicacion(ubicacionSeleccionada);
        });
    });

    //----------------------------------------FILTRO DE GÉNEROS-----------------------------------------------------//
    // Mostrar y ocultar submenú de géneros
    const generoMenuToggle = document.getElementById("generoMenuToggle");
    const generoMenu = document.getElementById("generoMenu");

    generoMenuToggle.addEventListener("click", function() {
        generoMenu.style.display = generoMenu.style.display === "none" ? "block" : "none";
    });

    // Filtrar por género
    const generoOptions = document.querySelectorAll(".genero-option");
    
    // Crear el mensaje de no disponibilidad para géneros
    const noDisponibleMensajeGenero = document.createElement("h3");
    noDisponibleMensajeGenero.textContent = "No se encuentran perritos disponibles en este género";
    noDisponibleMensajeGenero.style.display = "none";
    contenedorCard.appendChild(noDisponibleMensajeGenero);

    generoOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedGenero = option.getAttribute("data-genero");
            filterByGenero(selectedGenero);
        });
    });

    function filterByGenero(genero) {
        const cards = document.querySelectorAll(".card");
        let visibleCards = 0;

        cards.forEach(card => {
            const cardGenero = card.querySelector(".contenido .h3 h3:nth-child(2)").textContent;
            // Mostrar solo las tarjetas que coincidan con el género seleccionado
            if (cardGenero.includes(genero) || genero === "Todos") {
                card.style.display = "block";
                visibleCards++;
            } else {
                card.style.display = "none";
            }
        });

        // Mostrar el mensaje si no hay tarjetas visibles
        noDisponibleMensajeGenero.style.display = visibleCards === 0 ? "block" : "none";
    }

    //---------------------------------------FILTRO DE TAMAÑOS------------------------------------------------------//
    // Mostrar y ocultar submenú de tamaños
    const sizeMenuToggle = document.getElementById("sizeMenuToggle");
    const sizeMenu = document.getElementById("sizeMenu");

    sizeMenuToggle.addEventListener("click", function() {
        sizeMenu.style.display = sizeMenu.style.display === "none" ? "block" : "none";
    });

    // Crear el mensaje de no disponibilidad para ubicación
    const notMensajesize = document.createElement("h3");
    notMensajesize.textContent = "No se encuentran perritos disponibles en este tamaño";
    notMensajesize.style.display = "none";
    contenedorCard.appendChild(notMensajesize);

    // Función para filtrar por ubicación
    function filtrarPorsize(sizeSeleccionada) {
        // Selecciona todas las tarjetas de mascota
        const tarjetasMascotas = document.querySelectorAll('.card a');
        let visibleCards = 0;

        // Itera sobre cada tarjeta
        tarjetasMascotas.forEach(tarjeta => {
            const sizeMascota = tarjeta.getAttribute('data-size');
            
            // Verifica si coincide con el tamaño seleccionado
            if (sizeSeleccionada === 'Todos' || sizeMascota === sizeSeleccionada) {
                tarjeta.closest('.card').style.display = 'block'; // Muestra la tarjeta
                visibleCards++;
            } else {
                tarjeta.closest('.card').style.display = 'none'; // Oculta la tarjeta
            }
        });

        // Mostrar el mensaje si no hay tarjetas visibles
        if (visibleCards === 0) {
            notMensajesize.style.display = "block";
        } else {
            notMensajesize.style.display = "none";
        }
    }

    // Evento de clic en las opciones de ubicación
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', () => {
            const sizeSeleccionada = option.getAttribute('data-size');
            filtrarPorsize(sizeSeleccionada);
        });
    });
});
