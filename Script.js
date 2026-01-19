/* =============================== */
/*        SELECT ELEMENTS          */
/* =============================== */

const header = document.querySelector("header");
const menuIcon = document.getElementById("menu");
const navbar = document.querySelector(".Right");
const sections = document.querySelectorAll("section, .about");
const navLinks = document.querySelectorAll("header nav .Right a");
const scrollTopBtn = document.querySelector(".footer-icontop a");


/* =============================== */
/*        MOBILE MENU TOGGLE       */
/* =============================== */

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});


/* =============================== */
/*    CLOSE MENU ON LINK CLICK     */
/* =============================== */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    });
});


/* =============================== */
/*   SCROLL EVENTS (ALL IN ONE)    */
/* =============================== */

window.addEventListener("scroll", () => {

    /* Sticky Header */
    header.classList.toggle("sticky", window.scrollY > 100);

    /* Active Navbar Link */
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });

    /* Scroll To Top Button */
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";
    }

    /* Close Mobile Menu on Scroll */
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
});


/* =============================== */
/*        SCROLL TO TOP            */
/* =============================== */

scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =============================== */
/*        PAGE LOAD EFFECT         */
/* =============================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
