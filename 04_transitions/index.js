const images = document.querySelectorAll(".image");

function open() {
    this.classList.add("open");
}

function close() {
    this.classList.remove("open");
}

images.forEach((image) => image.addEventListener("mouseover", open));
images.forEach((image) => image.addEventListener("mouseout", close));