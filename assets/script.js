const
    ham = document.querySelector(".hamburger"),
    ham3 = document.querySelector(".ham3"),
    ham2 = document.querySelector(".ham2"),
    ham1 = document.querySelector(".ham1"),
    nav = document.querySelector(".nav-out"),
    body = document.querySelector("body"),
    stuffs = document.querySelectorAll(".stuff")
// Hamburger JS


const menuOpen = e => {
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    body.classList.toggle("overflowy");
}

ham.addEventListener("click", menuOpen);

[...stuffs].forEach(stuff => {
    stuff.addEventListener('click', () => {
        navbar.classList.remove("nav-out");
        ham1.classList.remove("ham-tilt-right");
        ham2.classList.remove("ham-no-show");
        ham3.classList.remove("ham-tilt-left");
        body.classList.remove("overflowy");

    });
});

AOS.init();