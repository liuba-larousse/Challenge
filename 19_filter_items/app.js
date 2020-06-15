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

items.forEach(function (item) {
  const modalButtons = item.querySelectorAll(".modal-button");
  const img = item.querySelector(".img-container");
  const close = item.querySelectorAll(".close");

  function addClass() {
    item.classList.add("modal-card");
    modalButtons.forEach(function (modalButton) {
      modalButton.classList.remove("hidden");
    });
  }

  img.addEventListener("click", addClass);

  function removeClass() {
    item.classList.remove("modal-card");
    modalButtons.forEach(function (modalButton) {
      modalButton.classList.add("hidden");
    });
  }
  close.forEach(function (button) {
    button.addEventListener("click", removeClass);
  });
});

//Carousel

const slides = [];
let i = 0;
items.forEach(function (item) {
  slides.push(item);
});

items.forEach(function (item) {
  const next = item.querySelector(".next");
  const prev = item.querySelector(".prev");
  const modalButtons = item.querySelectorAll(".modal-button");

  function reset() {
    if (item.classList.contains("modal-card")) {
      item.classList.remove("modal-card");
      modalButtons.forEach(function (button) {
        button.classList.add("hidden");
      });
    }
  }

  function nextSlide() {
    console.log("next");
    if (i < slides.length - 1) {
      i++;
    } else {
      i = 0;
    }
    console.log(slides[i]);
    const curSlideButtons = slides[i].querySelectorAll(".modal-button");
    reset();
    slides[i].classList.add("modal-card");
    curSlideButtons.forEach(function (button) {
      button.classList.remove("hidden");
    });
  }

  function prevSlide() {
    console.log("prev");
    if (i === 0) {
      i = slides.length;
    }
    i--;
    console.log(slides[i]);
    const curSlideButtons = slides[i].querySelectorAll(".modal-button");
    reset();
    slides[i].classList.add("modal-card");
    curSlideButtons.forEach(function (button) {
      button.classList.remove("hidden");
    });
  }
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});
