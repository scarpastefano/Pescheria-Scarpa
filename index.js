const hamburgerClose = document.querySelector(".icon-hamburger")
const menu = document.querySelector(".header-menu")

let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
    menu.classList.toggle('menu-open');
    hamburgerClose.classList.toggle('hamburger-close')
});
