/*JS del Login (ANDREA)*/
//Funcionalidad de los botones iniciar sesión y registrar de ambos paneles
const signin_btn = document.querySelector("#signin-btn");
const signup_btn = document.querySelector("#signup-btn");
const container = document.querySelector(".container");

signup_btn.addEventListener("click", () => {
    container.classList.add("signup-mode");
});

signin_btn.addEventListener("click", () => {
    container.classList.remove("signup-mode");
});