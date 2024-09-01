function timeCount(){
    const date = new Date();
console.log(date);
// hour select
const hour = document.querySelector('#hour');
// const hours = (date.getHours() >= 12) ? '0' + date.getHours() : date.getHours();
const hours = date.getHours();
hour.textContent = hours;
// minute select
const minute = document.querySelector('#minute');
const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
minute.textContent = minutes;


// second select
const second = document.querySelector('#second');
const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
second.textContent = seconds;

// am_pm select
const hour_change = document.querySelector('#hour_change');
const formatHour = (date.getHours() >= 12) ? "PM" : "AM";
hour_change.textContent = formatHour;
}

setInterval(timeCount, 1000)