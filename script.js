document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();
    const isOurDay = today.getDate() === 16;
    const textinhoElement = document.getElementById('textinho');

    if (isOurDay) {
        document.body.classList.add('ny-day');
        textinhoElement.innerText = "HOJE É NOSSO DIA!";
    }

    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".center").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2500);

    const spans = document.querySelectorAll('.hearts-container span');

    spans.forEach(span => {
        const randomizeSize = () => {
            const size = Math.floor(Math.random() * 41) + 30;
            span.style.width = `${size}px`;
            span.style.height = `${size}px`;
        };

        randomizeSize();

        span.addEventListener('animationiteration', randomizeSize);
    });
});


const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

var data_yas = new Date("December 16, 2023 00:00:00");

function calcTime() {
    var now = new Date();
    var years = now.getFullYear() - data_yas.getFullYear();
    var months = now.getMonth() - data_yas.getMonth();
    var days = now.getDate() - data_yas.getDate();
    var hours = now.getHours() - data_yas.getHours();
    var minutes = now.getMinutes() - data_yas.getMinutes();
    var seconds = now.getSeconds() - data_yas.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        var tempDate = new Date(now.getFullYear(), now.getMonth(), 0);
        days += tempDate.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    yearsElement.innerText = years;
    monthsElement.innerText = months;
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
}

function startTimer() {
    calcTime();
    setInterval(calcTime, 1000);
}

startTimer();