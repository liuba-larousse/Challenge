window.addEventListener("load", () => {
    console.log("hello");
});

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//resizing

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//variables
let painting = false;
let hue = 200;
let direction = true;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition(e) {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 80%)`;
    ctx.lineCap = "round";
    ctx.lineJoin = "round"

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);


    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 25 || ctx.lineWidth <= 0.3) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth = ctx.lineWidth + 0.3;
    } else {
        ctx.lineWidth = ctx.lineWidth - 0.3;
    }
    console.log(ctx.lineWidth);
}

//EventListeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);