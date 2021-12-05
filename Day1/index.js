const countdownDisplay = document.getElementById("countdown-display");
const countdownText = document.getElementById("countdown-text");
const buttonForDays = document.getElementById("giveDays");
const buttonForHours = document.getElementById("giveHours");
const buttonForMinutes = document.getElementById("giveMinutes");
const buttonForSeconds = document.getElementById("giveSeconds");

const buttonArray = [buttonForDays, buttonForHours, buttonForMinutes, buttonForSeconds]

function renderCountdown() {
    const christmas = 25;
    const date = new Date();
    const today = date.getDate();
    countdownDisplay.innerHTML = christmas - today;
}

function displayTime(timeSelection) {
    const dateOfChristmas = new Date("Dec 25, 2021 00:00:00").getTime();
    const todaysDate = new Date().getTime();
    const timeUntilChristmas = dateOfChristmas - todaysDate;

    if (timeSelection == 'hours') {
        const hours = Math.floor(timeUntilChristmas / (1000 * 60 * 60)) + 1;
        countdownDisplay.innerHTML = hours;
        countdownText.innerHTML = 'Hours';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForHours.classList.add('hidden')
    } else if (timeSelection == 'minutes') {
        const minutes = Math.floor(timeUntilChristmas / (1000 * 60)) + 1;
        countdownDisplay.innerHTML = minutes;
        countdownText.innerHTML = 'Minutes';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForMinutes.classList.add('hidden')
    } else if (timeSelection == 'seconds') {
        const seconds = Math.floor(timeUntilChristmas / (1000)) + 1;
        countdownDisplay.innerHTML = seconds;
        countdownText.innerHTML = 'Seconds';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForSeconds.classList.add('hidden')
    } else if (timeSelection == 'days') {
        const days = Math.floor(timeUntilChristmas / (1000 * 60 * 60 * 24)) + 1;
        countdownDisplay.innerHTML = days;
        countdownText.innerHTML = 'Days';
        buttonArray.forEach(button => button.classList.remove('hidden'))
        buttonForDays.classList.add('hidden')
    }
}

renderCountdown()