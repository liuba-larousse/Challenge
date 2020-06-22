const buttons = document.querySelectorAll(".button");
const items = document.querySelectorAll(".card");

// Filter

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);

    e.preventDefault;
    const filter = e.target.dataset.filter;
    console.log(filter);
    items.forEach(function (item) {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

//Search-bar

const input = document.querySelector(".search-bar");
const names = document.querySelectorAll(".item-name");

input.addEventListener("keyup", (e) => {
  //input field sring
  const filter = e.target.value.toLowerCase().trim();
  //applying filter to search
  names.forEach(function (name) {
    if (name.textContent.toLowerCase().includes(filter)) {
      name.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  });
});

//Modal
const close = document.querySelector(".close");
const modal = document.querySelector(".template");

function popModal(e) {
  let cardId = parseInt(e.target.parentElement.parentElement.dataset.card);

  const img = document
    .querySelector(`[data-card="${cardId}"]`)
    .querySelector(".img-container");
  const cardBody = document
    .querySelector(`[data-card="${cardId}"]`)
    .querySelector(".card-body");
  modal.classList.remove("hidden");
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}

function hideModal() {
  modal.classList.add("hidden");
}

items.forEach(function (item) {
  item.addEventListener("click", popModal);
  close.addEventListener("click", hideModal);
});

//Carousel

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let img = document.querySelector(".img-container");
let cardBody = document.querySelector(".card-body");

function nextSlide(e) {
  console.log("click");
  console.log(e.target.parentElement.parentElement);
  if (i < 9) {
    i++;
  } else {
    i = 0;
  }
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}

function prevSlide() {
  if (i === 0) {
    i = 8;
  }
  i--;
  modal.querySelector(".img-container").innerHTML = img.innerHTML;
  modal.querySelector(".card-body").innerHTML = cardBody.innerHTML;
}
items.forEach(function () {
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});
