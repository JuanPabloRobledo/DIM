window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY > 0);
})
const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".material-symbols-outlined"),
    overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});

window.sr = ScrollReveal();

sr.reveal('.prueba3', {
    duration: 3000,
    origin: 'right',
    distance: '-500px'
});
sr.reveal('.prueba4', {
    duration: 4000,
    origin: 'right',
    distance: '-500px'
});
sr.reveal('.prueba1', {
    duration: 1000,
    origin: 'right',
    distance: '-200px'
});
sr.reveal('.prueba2', {
    duration: 2000,
    origin: 'right',
    distance: '-200px'
});
sr.reveal('.button1', {
    duration: 3000,
    origin: 'left',
    distance: '-200px'
});
sr.reveal('.button2', {
    duration: 2000,
    origin: 'bottom',
    distance: '-200px'
});
sr.reveal('.proveedores', {
    duration: 1500,
    origin: 'right',
    distance: '-200px'
});
sr.reveal('.card', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.banner-h1-3', {
    duration: 3000,
    origin: 'right',
    distance: '-200px'
});


