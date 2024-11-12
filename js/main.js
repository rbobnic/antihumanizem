//slider
function moveSlides(sliderId, n) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    let currentSlide = Array.from(slides).findIndex(slide => slide.style.display === 'block');

    // If no active slide found (default), start from the first slide
    if (currentSlide === -1) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = 'none';
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Wrap back to first slide
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap to the last slide
    }

    slides[currentSlide].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        slides[0].style.display = 'block'; // Display first slide in each slider by default
    });
});

function toggleContent(id) {
    const abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

function navigation(id) {
   const navigation = document.getElementById(id);
  }