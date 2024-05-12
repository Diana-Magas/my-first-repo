document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carusel');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
    let autoSlideInterval; 
    const intervalDuration = 3000; 

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * 100;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(${offset}%)`;
        updateButtons();
    }

    function showPrevSlide() {
        stopAutoSlide();
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        goToSlide(currentIndex);
    }

    function showNextSlide() {
        stopAutoSlide();
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        goToSlide(currentIndex);
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, intervalDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);
    carousel.addEventListener('transitionstart', stopAutoSlide);
    carousel.addEventListener('transitionend', startAutoSlide);

    startAutoSlide();

    if (slides.length < 2) {
        prevButton.disabled = true;
        nextButton.disabled = true;
    }
});

