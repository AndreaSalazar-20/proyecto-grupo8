var form1 = document.getElementById("form1"),
    form2 = document.getElementById("form2"),
    form3 = document.getElementById("form3"),
    form4 = document.getElementById("form4"),
    form5 = document.getElementById("form5"),
    form6 = document.getElementById("form6");

var next1 = document.getElementById("next1"),
    next2 = document.getElementById("next2"),
    next3 = document.getElementById("next3"),
    next4 = document.getElementById("next4"),
    next5 = document.getElementById("next5"),
    back1 = document.getElementById("back1"),
    back2 = document.getElementById("back2"),
    back3 = document.getElementById("back3"),
    back4 = document.getElementById("back4"),
    back5 = document.getElementById("back5");

var progress = document.getElementById("progress");

// Establecer el progreso al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    progress.style.width = "83.3px"; // Comienza en 83.3px al cargar
});

// Funciones de -SIGUIENTE- y -ATRAS- para los formularios - BARRA DE PROGRESO

/* Form 01 */
next1.onclick = function () {
    form1.style.left = "-450px";
    form2.style.left = "110px"; // cantidad para centrar los forms dentro del
    progress.style.width = "166.6px"; // Progreso al pasar a form2
};

back1.onclick = function () {
    form1.style.left = "110px";  // centrado
    form2.style.left = "850px";
    progress.style.width = "83.3px"; // Mantiene el progreso en form1
};

/* Form 02 */
next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "110px";  // centrado
    progress.style.width = "249.9px"; // Progreso al pasar a form3
};

back2.onclick = function () {
    form2.style.left = "110px";  // centrado
    form3.style.left = "850px";
    progress.style.width = "166.6px"; // Regresa al progreso de form2
};

/* Form 03 */
next3.onclick = function () {
    form3.style.left = "-450px";
    form4.style.left = "110px";  // centrado
    progress.style.width = "333.2px"; // Progreso al pasar a form4
};

back3.onclick = function () {
    form3.style.left = "110px";  // centrado
    form4.style.left = "850px";
    progress.style.width = "249.9px"; // Regresa al progreso de form3
};

/* Form 04 */
next4.onclick = function () {
    form4.style.left = "-450px";
    form5.style.left = "110px";  // centrado
    progress.style.width = "416.5px"; // Progreso al pasar a form5
};

back4.onclick = function () {
    form4.style.left = "110px";  // centrado
    form5.style.left = "850px";
    progress.style.width = "333.2px"; // Regresa al progreso de form4
};

/* Form 05 */
next5.onclick = function () {
    form5.style.left = "-450px";
    form6.style.left = "110px";  // centrado
    progress.style.width = "499.8px"; // Progreso al pasar a form6
};

back5.onclick = function () {
    form5.style.left = "110px";  // centrado
    form6.style.left = "850px";
    progress.style.width = "416.5px"; // Regresa al progreso de form5
};

// Finaliza en el último formulario
