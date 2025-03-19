let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;
    
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const slides = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);
