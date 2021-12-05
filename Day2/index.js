const body = document.getElementById("body")
const container = document.getElementById("container")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

function changeToSnow() {
    container.classList.remove("puppy")
    greeting.innerHTML = "☃️ Look, it's snowing!";
}

function changeToXmas() {
    container.classList.remove("puppy")
    greeting.innerHTML = "🎅 Merry Christmas!"
}

function changeToPuppy() {
    greeting.innerHTML = "Pretty puppy!"
    container.classList.add("puppy")
}