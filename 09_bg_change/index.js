const btnChange = document.getElementById("change");
const btnReset = document.getElementById("reset");

const colors = ["#3797a4", "#ffa299", "#efa8e4", "#f9d89c", "#f9b384", "#342ead", "#844685"]

function color() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

function nocolor() {
    document.body.style.backgroundColor = "transparent";
}

btnChange.addEventListener("click", color)
btnReset.addEventListener('click', nocolor)