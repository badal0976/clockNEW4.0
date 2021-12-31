const display_time = document.querySelector('.time');
const display_date = document.querySelector('.date');
console.log('set');
setTime();

function setDate(){
const today = new Date();

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ today.getDay() ];
var month = months[ today.getMonth() ];
var date = today.getDate();
var year = today.getFullYear();

display_date.innerHTML = `${day}, ${date} ${month} ${year}`;
}

function setTime(){
const d = new Date();

let am_pm = "AM";

var hrs = d.getHours();
if(hrs > 12){
hrs -= 12;
am_pm = 'PM';
}

const mins = d.getMinutes();
const secs = d.getSeconds();

display_time.textContent = `${hrs < 10 ? '0':''}${hrs} : ${mins < 10 ? '0':''}${mins} : ${secs < 10 ? '0':''}${secs} ${am_pm}`;
}

setInterval(setTime, 1000);
setDate();

document.querySelector('button').addEventListener('click', function(){
	document.querySelector('.digi').classList.toggle('active');
    document.querySelector('.container').classList.toggle('active');
	});