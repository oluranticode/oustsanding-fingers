let currentSlide = 1;

function transitionSlides() {
    currentSlide = currentSlide % 3 + 1;
    document.querySelector('.carousel').style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
}

setInterval(transitionSlides, 5000); // Change slide every 5 seconds