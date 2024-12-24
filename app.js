const menu = document.querySelector(".header__hambuerguesa");
const cerrarMenu = document.querySelector(".header__cerrar");
const navegacion = document.querySelector(".header__navegacion");

// Eventos
menu.addEventListener("click", () => {
    navegacion.classList.add("visible")
    menu.classList.add("oculto")
    cerrarMenu.classList.add("visible")
})

cerrarMenu.addEventListener("click", () => {
    navegacion.classList.remove("visible")
    menu.classList.remove("oculto")
    cerrarMenu.classList.remove("visible")
})
