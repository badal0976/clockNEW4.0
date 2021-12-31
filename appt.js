let countdown;
const btns = document.querySelectorAll(".btn");
const later = document.querySelector(".thenTime");
const timeLeft = document.querySelector(".timeLeft");

function setTime(seconds) {
  clearInterval(countdown);

  const currentTime = Date.now();
  const then = seconds * 1000 + currentTime;

  displayThenTime(then);
  displayTimeLeft(seconds);
  countdown = setInterval(function () {
    const difference = Math.round((then - Date.now()) / 1000);

    if (difference < 0) clearInterval(countdown);
    else displayTimeLeft(difference);
  }, 1000);
}

function displayTimeLeft(secs) {
  var mins = Math.floor(secs / 60);
  var secs = Math.round(secs % 60);
  timeLeft.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  console.log(mins, secs);
}

function displayThenTime(thenTime) {
  const d = new Date(thenTime);
  let hrs = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();

  later.textContent = `Come back at ${hrs > 12 ? hrs - 12 : "0"}:${
    mins < 10 ? "0" : ""
  }${mins}`;
}

function setTimer() {
  const time = this.value;
  console.log(this.value);
  setTime(time);
}
btns.forEach((button) => button.addEventListener("click", setTimer));

document.myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  setTime(this.custom.value * 60); //converting into seconds
  this.reset();
  //console.log(myForm.custom.value);
});
