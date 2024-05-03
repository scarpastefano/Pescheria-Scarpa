
// hamburger menu
let hamburger = document.querySelector('.nav-hamburger');
hamburger.addEventListener("click", function() {
    document.body.classList.toggle('menu_open');
});

// onscroll della navbar
let navbar = document.querySelector('.navbar');
let logoCustom = document.querySelector('.logo');
let links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        navbar.classList.add('nav-scroll');
        logoCustom.classList.add('logo-custom');

        links.forEach(link => {
            link.style.color = 'black';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--primary-color)';
            })
            link.addEventListener('mouseleave', () => {
                link.style.color = 'black';
            })
        })

    } else {
        navbar.classList.remove('nav-scroll')
        logoCustom.classList.remove('logo-custom');
        links.forEach(link => {
            link.style.color = 'black';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--primary-color)';
            })
            link.addEventListener('mouseleave', () => {
                link.style.color = 'black';
            })
        })
    }
});


// mappa con open street map e leafet

// Creating map options
// let mapOptions = {
//     center: [45.22057, 12.27980],
//     zoom: 10
//     }
    
var map = L.map('map').setView([45.22057, 12.27980], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([45.22057, 12.27980]).addTo(map);


// swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });