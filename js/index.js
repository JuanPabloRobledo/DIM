
window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 500,
    origin: 'bottom',
    distance: '-200px'
});

sr.reveal('.parrafo2', {
    duration: 1999,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.flexbox-img', {
    duration: 1999,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.flexbox-banner', {
    duration: 4000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('.banner2', {
    duration: 1999,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.flex-container', {
    duration: 1999,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.section4-1', {
    duration: 1999,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.textos-text1', {
    duration: 1000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.card', {
    duration: 1999,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.logoQS', {
    duration: 1999,
    origin: 'bottom',
    distance: '-50px'
});

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY > 0);
})
const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});