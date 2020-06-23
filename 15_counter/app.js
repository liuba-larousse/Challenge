const count = document.querySelector(".count");
const add = document.querySelector(".btn-add");
const lower = document.querySelector(".btn-low");

function addCount() {
  let number = parseInt(count.innerHTML);
  number++;
  count.innerHTML = number;
  changeColor();
}

function lowerCount() {
  let number = parseInt(count.innerHTML);
  number--;
  count.innerHTML = number;
  changeColor();
}

function changeColor() {
  let number = parseInt(count.innerHTML);
  if (number < 0) {
    count.style.color = "#d92027";
  } else {
    count.style.color = "#a8df65";
  }
}

add.addEventListener("click", addCount);
lower.addEventListener("click", lowerCount);
