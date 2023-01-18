const menuHam = document.querySelector(".menu-ham");
const lista = document.querySelector(".lista"); 

menuHam.addEventListener("click", () => {
    lista.classList.toggle("lista_visible");
});