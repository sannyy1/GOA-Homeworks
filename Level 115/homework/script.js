/* Implement an image slider that automatically cycles through an array of images with smooth fade transitions, includes "Next" and "Previous" navigation buttons, and displays dot indicators for each image, with the slider pausing on mouse hover. */

let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let slider = document.querySelector('.slider');

function showSlide(index) {

    if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n - 1);
}

function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

let slideInterval = setInterval(autoSlide, 3000);

slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, 3000);
});

showSlide(slideIndex);
