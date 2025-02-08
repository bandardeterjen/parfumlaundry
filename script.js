// Carousel functionality
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let index = 0;

function showNext() {
    if (index >= items.length - 1) index = -1;
    index++;
    updateCarousel();
}

function showPrev() {
    if (index <= 0) index = items.length;
    index--;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.next-btn').addEventListener('click', showNext);
document.querySelector('.prev-btn').addEventListener('click', showPrev);

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
