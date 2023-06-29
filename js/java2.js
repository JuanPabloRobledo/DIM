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
sr.reveal('.prueba5', {
    duration: 1000,
    origin: 'top',
    distance: '-200px'
});
// sr.reveal('.prueba6', {
//     duration: 2000,
//     origin: 'top',
//     distance: '-200px'
// });
sr.reveal('.prueba11', {
    duration: 2000,
    origin: 'bottom',
    distance: '-50px'
});
sr.reveal('.prueba12', {
    duration: 3000,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.prueba0', {
    duration: 1500,
    origin: 'left',
    distance: '-50px'
});
// sr.reveal('.proveedores', {
//     duration: 1500,
//     origin: 'right',
//     distance: '-200px'
// });
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


/* ///////// Script de formulario /////*/

const btnEnvio = document.getElementById('enviarCorreo');
btnEnvio.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const asunto = document.getElementById('asunto').value;
    window.location.href = `mailto:aberturasdim@gmail.com?
subject=Consulta&body=Nombre%3A${nombre}%0AEmail%3A${email}%0AAsunto%3A${asunto}%0AMensaje%3A${mensaje}`;
});

const btnEnvio2 = document.getElementById('enviarCorreo2');
btnEnvio2.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const asunto = document.getElementById('asunto').value;
    window.location.href = `mailto:dvhdim@gmail.com?
subject=Consulta&body=Nombre%3A${nombre}%0AEmail%3A${email}%0AAsunto%3A${asunto}%0AMensaje%3A${mensaje}`;
});