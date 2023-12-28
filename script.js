window.addEventListener("DOMContentLoaded", () => {

    const showBtn = document.querySelector("#hamburger");
    const closeBtn = document.querySelector("#close-btn");
    const overlayContainer = document.querySelector("#overlay");
    const nav = document.querySelector("nav");
    const links = nav.querySelectorAll("a");

    function showMenu() {
        overlayContainer.classList.add("overlay-show");
        overlayContainer.classList.remove("overlay-close");
    }
    function closeMenu(){
        overlayContainer.classList.remove("overlay-show");
        overlayContainer.classList.add("overlay-close");
    }

    links.forEach((link) => {
        link.addEventListener("click", closeMenu);
    })

    showBtn.addEventListener("click", showMenu);
    closeBtn.addEventListener("click", closeMenu);
})