//Selectores

const inputText = document.getElementById("task")
const outputText = document.querySelector(".js-value-output")
const addBtn = document.querySelector(".js-btn-add")
const list = document.querySelector(".js-list")
const alert = document.querySelector(".js-alert")
const clear = document.querySelector(".js-btn-clear")

//Event Listeners
addBtn.addEventListener("click", addItem)
list.addEventListener("click", deleteCheck)
clear.addEventListener("click", clearAll)


//Functions

function addItem(e) {
    //prevent form from submitting
    e.preventDefault()
    //create new item
    let newTask = inputText.value
    if (newTask === "") {
        alert.classList.remove("visuallyhidden")
    } else {
        alert.classList.add("visuallyhidden")
        //create item DIV
        const itemDiv = document.createElement("div")
        itemDiv.classList.add("item")
        //create LI
        const newLi = document.createElement("li")
        newLi.classList.add("value-output", "js-value-output")
        newLi.innerHTML = `${newTask}`
        itemDiv.appendChild(newLi)
        //create Buttons
        const doneBtn = document.createElement("button")
        doneBtn.classList.add("btn-list", "js-btn-done")
        doneBtn.innerHTML = `<i class="far fa-check-square fa-2x"></i>`
        itemDiv.appendChild(doneBtn)
        const editBtn = document.createElement("button")
        editBtn.classList.add("btn-list", "js-btn-edit")
        editBtn.innerHTML = `<i class="far fa-edit fa-2x"></i>`
        itemDiv.appendChild(editBtn)
        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn-list", "js-btn-delete")
        deleteBtn.innerHTML = ` <i class="far fa-trash-alt fa-2x"></i>`
        itemDiv.appendChild(deleteBtn)
        //append to UL
        list.appendChild(itemDiv)
    }
    //clear inout value
    inputText.value = ""
}

function deleteCheck(e) {
    const item = e.target
    //delete task
    if (item.classList[1] === "js-btn-delete") {
        const task = item.parentElement
        task.classList.add("remove")
        task.addEventListener('transitionend', function () {
            task.remove()
        })
    }
    //complete task
    if (item.classList[1] === "js-btn-done") {
        const task = item.parentElement.querySelector(".value-output")
        task.classList.toggle("complete")
    }
    //edit
    if (item.classList[1] === "js-btn-edit") {
        const task = item.parentElement
        const taskText = item.parentElement.querySelector(".value-output").innerHTML
        inputText.value = taskText
        task.remove()
    }
}

function clearAll() {
    const items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.classList.add("collapsed")
        item.addEventListener('transitionend', function () {
            item.remove()
        })
    })
}