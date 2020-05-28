const btn = document.getElementById("color-btn")
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
var hex = []
let el = 2;

function hexChange() {
    if (hex.length <= 5) {
        for (var i = 0; i < 6; i++) {
            el = values[Math.floor(Math.random() * values.length)];
            hex.push(el)
        }
        console.log(hex)
        document.body.style.backgroundColor = "#" + hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5];
        document.querySelector(".btn-name").innerHTML = "HEX COLOR: #" + hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5]
    } else {
        hex.splice(0, hex.length);
    }
}

btn.addEventListener("click", hexChange)