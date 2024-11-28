let sliderIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    sliderIndex = (sliderIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
