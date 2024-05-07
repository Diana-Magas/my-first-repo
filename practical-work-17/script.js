//carusel
let slideIndex = 0;
let slideTimer; 

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) {
        return; 
    }
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 10000); 
}

function nextSlide() {
    showSlide(slideIndex + 1);
    slideIndex++;
}

function prevSlide() {
    showSlide(slideIndex - 1);
    slideIndex--;
}

showSlide(slideIndex); // Показати перший слайд по завантаженні сторінки


//humburger-navigation
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("hamburger-menu");
    const menuBody = document.querySelector(".navigation");

    if (menuIcon && menuBody) {
        menuIcon.addEventListener("click", function (e) {
            menuBody.classList.toggle("active");
        });
    }
});
