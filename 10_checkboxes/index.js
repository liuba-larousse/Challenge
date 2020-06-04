const cb = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(cb);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    //Check if they had a shiftkey down
    //And check that they checking it
    if (e.shiftKey && this.checked) {
        //loop over every  checkbox
        cb.forEach((checkbox) => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("starting to check them in btw");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

cb.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));