let hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
setInterval(() => {
  let date = new Date();
  let hr = date.getHours() * 30;
  let min = date.getMinutes() * 6;
  let sec = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hr + min / 12}deg)`;
  minute.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
}, 1000);
