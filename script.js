// Highlight the current page in the navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// Example of a simple image slideshow (if needed)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const showSlides = () => {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
};
showSlides();
