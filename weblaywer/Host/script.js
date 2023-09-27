const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    slides[index].style.transform = 'translateX(0)';
    currentSlide = index;
}

// Initialize the current slide to the first slide
showSlide(currentSlide);

// Add click event listeners to each slide
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        showSlide(index);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});
