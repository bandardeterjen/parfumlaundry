document.addEventListener('DOMContentLoaded', function () {
    // Carousel Functionality
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNext() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    function showPrev() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', showNext);
    document.querySelector('.prev').addEventListener('click', showPrev);

    // Auto slide every 5 seconds
    setInterval(showNext, 5000);

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

