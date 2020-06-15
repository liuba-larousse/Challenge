const left = document.querySelector(".prev")
const right = document.querySelector(".next")

const img = document.getElementById("slide");
//start point
let i = 1;
const slides = [];


//image list
slides[0] = "images/slide1.jpeg"
slides[1] = "images/slide2.jpeg"
slides[2] = "images/slide3.jpeg"
slides[3] = "images/slide4.jpeg"
slides[4] = "images/slide5.jpeg"


//Change the image
function rightSlide() {
    img.src = slides[i];
    i = (i < slides.length - 1) ?
        i + 1 :
        i = 0
    debugger
}

function leftSlide() {
    console.log("click")
    img.src = slides[i];
    i = i < 1 ?
        i = slides.length - 1 :
        i - 1
}

right.addEventListener("click", rightSlide)
left.addEventListener("click", leftSlide)