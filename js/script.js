const toggle = document.getElementById("nav-icon3");
const nav = document.getElementById("nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", function () {
        nav.classList.toggle("show");
        toggle.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", function () {
            nav.classList.remove("show");
            toggle.classList.remove("open");
        });
    });
}