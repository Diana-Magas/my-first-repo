document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    let currentIndex = 0;
    let autoSlideInterval;
    const intervalDuration = 10000;

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
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNextSlide, intervalDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    carousel.addEventListener('transitionstart', stopAutoSlide);

    carousel.addEventListener('transitionend', startAutoSlide);

    if (slides.length < 2) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }

    startAutoSlide();
});
