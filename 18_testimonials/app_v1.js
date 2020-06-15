let i = 1;
const testimonials = [{
        urls: "../18_testimonials/images/cus0.png",
        name: "Kaira",
        rating: `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
        ><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
      >`,
        testimony: "Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Non tellus orci ac auctor augue mauris augue."
    },
    {
        urls: "../18_testimonials/images/cus1.png",
        name: "Santiago",
        rating: `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
        ><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
      ><i class="fas fa-star fa-2x">`,
        testimony: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        urls: "../18_testimonials/images/cus2.png",
        name: "Eli",
        rating: `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
        ><i class="fas fa-star fa-2x"></i>`,
        testimony: "Tempor id eu nisl nunc mi. Ac turpis egestas integer eget aliquet nibh. At quis risus sed vulputate odio ut enim blandit. Vel pretium lectus quam id leo. Enim facilisis gravida neque convallis a."
    },
    {
        urls: "../18_testimonials/images/cus3.png",
        name: "Mila",
        rating: `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
        ><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i>`,
        testimony: "roin libero nunc consequat interdum varius. Senectus et netus et malesuada fames ac. Tempus egestas sed sed risus. Aliquet nec ullamcorper sit amet risus nullam."
    }
];

const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")

let image = document.querySelector(".image")
let name = document.querySelector(".name")
let rating = document.querySelector(".rating")
let testimony = document.querySelector(".testimony")


function nextSlide() {
    image.src = testimonials[i].urls
    name.innerHTML = testimonials[i].name
    rating.innerHTML = testimonials[i].rating
    testimony.innerHTML = testimonials[i].testimony
    if (i < testimonials.length - 1) {
        i++;
    } else {
        i = 0
    }
}


function prevSlide() {
    image.src = testimonials[i].urls
    name.innerHTML = testimonials[i].name
    rating.innerHTML = testimonials[i].rating
    testimony.innerHTML = testimonials[i].testimony
    if (i > 0) {
        i--;
    } else {
        i = testimonials.length - 1
    }
}

btnPrev.addEventListener("click", prevSlide)
btnNext.addEventListener("click", nextSlide)