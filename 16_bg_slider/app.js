const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")

var img = document.getElementById("slide");
//start point
var i = 1;
var slides = [];


//image list
slides[0] = "images/slide1.jpeg"
slides[1] = "images/slide2.jpeg"
slides[2] = "images/slide3.jpeg"
slides[3] = "images/slide4.jpeg"
slides[4] = "images/slide5.jpeg"

//Change the image
function plusSlide() {
    console.log("click")
    img.src = slides[i];
    if (i < slides.length - 1) {
        i++;
    } else {
        i = 0;
    }
    img.style.transition = "1s"
}


btnNext.addEventListener("click", plusSlide)
btnPrev.addEventListener("click", plusSlide)