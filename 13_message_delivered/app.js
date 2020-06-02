var myInput = document.getElementById("msg");
var submitBtn = document.getElementById("btn");
var output = document.getElementById('values')


function shiftKey(e) {
    if (e.charCode == 13) {
        if (e.type == "keypress") {
            placeMessage()
            myInput.value = ""
        } else {
            e.preventDefault();
            alert("Enter has not been pressed.")
        }
    }
}

function clickSubmit(e) {
    if (e.type = "click") {
        placeMessage()
        myInput.value = ""
    }
}

function placeMessage() {
    output.value = myInput.value;
    output.textContent = myInput.value;
    console.log(output.value)
}


submitBtn.addEventListener("click", clickSubmit)
window.addEventListener("keypress", shiftKey)