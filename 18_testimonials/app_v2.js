const buttons = document.querySelectorAll(".button")

const cusImage = document.querySelector(".image")
const cusName = document.querySelector(".name")
const cusRating = document.querySelector(".rating")
const cusTestimony = document.querySelector(".testimony")

let i = 0
const customers = []

// Create new customer using constructor

function Customer(image, name, rating, testimony) {
    this.image = image
    this.name = name
    this.rating = rating
    this.testimony = testimony
}

//Create customer using constructor function

function createCustomer(image, name, rating, testimony) {

    let customer = new Customer(image, name, rating, testimony)
    customers.push(customer)
}

createCustomer("../18_testimonials/images/cus0.png", "Kaira", `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i>`, "Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Non tellus orci ac auctor augue mauris augue.")
createCustomer("../18_testimonials/images/cus1.png", "Santiago", `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x">`, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
createCustomer("../18_testimonials/images/cus2.png", "Eli", `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i
><i class="fas fa-star fa-2x"></i>`, "Tempor id eu nisl nunc mi. Ac turpis egestas integer eget aliquet nibh. At quis risus sed vulputate odio ut enim blandit. Vel pretium lectus quam id leo. Enim facilisis gravida neque convallis a.")
createCustomer("../18_testimonials/images/cus3.png", "Mila", `<i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i>`, "Vroin libero nunc consequat interdum varius. Senectus et netus et malesuada fames ac. Tempus egestas sed sed risus. Aliquet nec ullamcorper sit amet risus nullam.")

buttons.forEach(function (button) {
    button.addEventListener("click", switchSlide)
})

function switchSlide(e) {
    console.log(e)
    if (e.target.parentElement.classList.contains("prev")) {
        console.log("prev")
        if (i > 0) {
            i--;
        } else {
            i = customers.length - 1
        }
        cusImage.src = customers[i].image
        cusName.innerHTML = customers[i].name
        cusRating.innerHTML = customers[i].rating
        cusTestimony.innerHTML = customers[i].testimony
    }
    if (e.target.parentElement.classList.contains("next")) {
        console.log("next")
        if (i < customers.length - 1) {
            i++;
        } else {
            i = 0
        }
        cusImage.src = customers[i].image
        cusName.innerHTML = customers[i].name
        cusRating.innerHTML = customers[i].rating
        cusTestimony.innerHTML = customers[i].testimony
    }
}