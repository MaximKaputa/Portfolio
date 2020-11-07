let wakeuptime = 8;
let noon = 24;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 21;

window.onload = function() {
  window.setInterval(function() {
    let time = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = time.toLocaleTimeString();
  }, 1000);
};
let updateClock = function() {
  let Time = new Date().getHours();
  let messageText;

  let img = "img/sova.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let lolOwlImg = document.getElementById("lolOwlImage");

  if (Time == partytime) {
    img = "img/partyOwl.jpg";
    messageText = "LET'S PARTY!";
  } else if (Time == wakeuptime) {
    img = "img/wakeUpOwl.jpg";
    messageText = "Wake Up!";
  } else if (Time == lunchtime) {
    img = "img/LunchOwl.jpg";
    messageText = "Time to lunch!";
  } else if (Time == naptime) {
    img = "img/SoonOwl.jpg";
    messageText = "Sleep tight!";
  } else if (Time >= evening && Time <= noon) {
    img = "img/SleepOwl.jpg";
    messageText = "Good evening!";
  } else {
    img = "img/sova.jpg";
    messageText = "Good Afternoon";
  }

  timeEventJS.innerText = messageText;
  lolOwlImage.src = img;
};
updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);
let partyButton = document.getElementById("partyTimeButton");
let partyEvent = function() {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyButton.innerText = "PARTY OVER";
    partyButton.style.backgroundColor = "#f16059";
  } else {
    partytime = -1;
    partyButton.innerText = "PARTY TIME";
    partyButton.style.backgroundColor = "#222";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
let wakeUpEvent = () => (wakeuptime = wakeUpTimeSelector.value);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

let lunchTimeSelector = document.getElementById("lunchTimeSelector");
let lunchEvent = () => (lunchtime = lunchTimeSelector.value);
lunchTimeSelector.addEventListener("change", lunchEvent);

let napTimeSelector = document.getElementById("napTimeSelector");
let napEvent = () => (naptime = napTimeSelector.value);
napTimeSelector.addEventListener("change", napEvent);
