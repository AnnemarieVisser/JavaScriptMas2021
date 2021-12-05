const countdownEvent = document.getElementById("countdown-event");
const countdownText = document.getElementById("countdown-text");
const countdownDisplay = document.getElementById("countdown-display");
const buttonsSelect = document.getElementById("buttons-select");
const buttonForDays = document.getElementById("giveDays");
const buttonForHours = document.getElementById("giveHours");
const buttonForMinutes = document.getElementById("giveMinutes");
const buttonForSeconds = document.getElementById("giveSeconds");

const buttonArray = [buttonForDays, buttonForHours, buttonForMinutes, buttonForSeconds]

const getTimeRemaining = function (endtime) {
    const t = Date.parse(endtime) - (new Date()).getTime();
    return t
}

function submitForm() {
    const nameOfEvent = document.getElementById("form-event").value;
    const dateOfEvent = document.getElementById("form-date").value;

    removeClassList();

    if (nameOfEvent !== "" && dateOfEvent !== "") {
        const timeRemaining = getTimeRemaining(dateOfEvent);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + 1;
        countdownEvent.innerHTML = nameOfEvent
        countdownDisplay.innerHTML = days
        buttonsSelect.classList.remove("hidden");
    }
}

function displayTime(timeSelection) {
    const dateOfEvent = document.getElementById("form-date").value;
    const timeRemaining = getTimeRemaining(dateOfEvent);

    if (timeSelection == 'hours') {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) + 1;
        countdownDisplay.innerHTML = hours;
        countdownText.innerHTML = 'Hours';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForHours.classList.add('hidden')
    } else if (timeSelection == 'minutes') {
        const minutes = Math.floor(timeRemaining / (1000 * 60)) + 1;
        countdownDisplay.innerHTML = minutes;
        countdownText.innerHTML = 'Minutes';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForMinutes.classList.add('hidden')
    } else if (timeSelection == 'seconds') {
        const seconds = Math.floor(timeRemaining / (1000)) + 1;
        countdownDisplay.innerHTML = seconds;
        countdownText.innerHTML = 'Seconds';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForSeconds.classList.add('hidden')
    } else if (timeSelection == 'days') {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) + 1;
        countdownDisplay.innerHTML = days;
        countdownText.innerHTML = 'Days';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForDays.classList.add('hidden')
    }
}

function removeClassList() {
    const nameOfEvent = document.getElementById("form-event").value;
    const dateOfEvent = document.getElementById("form-date").value;

    if (nameOfEvent == "") {
        const warning = document.getElementById("warning-name");
        warning.classList.remove("hidden");
    }

    if (dateOfEvent == "") {
        const warning = document.getElementById("warning-date");
        warning.classList.remove("hidden");
    }
}

function inputEvent() {
    const warning = document.getElementById("warning-name");
    if (!warning.classList.contains("hidden")) {
        warning.classList.add("hidden")
    }
}

function inputDate() {
    const warning = document.getElementById("warning-date");
    if (!warning.classList.contains("hidden")) {
        warning.classList.add("hidden")
    }
}