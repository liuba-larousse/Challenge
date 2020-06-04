const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")

var slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slides');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block";
}




btnNext.addEventListener("click", nextImage)
btnPrev.addEventListener("click", prevImage)