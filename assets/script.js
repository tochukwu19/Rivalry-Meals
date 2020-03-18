
const
    ham = document.querySelector(".hamburger"),
    ham3 = document.querySelector(".ham3"),
    ham2 = document.querySelector(".ham2"),
    ham1 = document.querySelector(".ham1"),
    nav = document.querySelector(".nav-out");

// Hamburger JS


const menuOpen = e => {
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    ham.classList.toggle("abspos")
}

ham.addEventListener("click", menuOpen);
