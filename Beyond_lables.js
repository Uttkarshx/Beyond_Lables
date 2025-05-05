document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".banner-slides");
    const slides = document.querySelectorAll(".banner-slide");
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % slides.length;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 4000); // Change slide every 4 seconds
});
