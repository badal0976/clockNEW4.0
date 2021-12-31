const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const lapDisplay = document.querySelector('.laps');

var startTime;
var updatedTime;
var savedTime = 0;
var difference;
let interval;
var lap =[];
let lapVal;

var minutes;
var seconds;
var milliseconds;

var running = false;
var paused = false;

function startTimer(){
	if(!running){
    	startTime = new Date().getTime();
        interval = setInterval(showTime, 1);
        //console.log("started")
     paused = false;
     running = true;
    //showTime();       
    }
    }
function pauseTimer(){
	if(!difference){}
    
    else if(!paused){
    clearInterval(interval);
    savedTime = difference;
    paused = true;
    running = false;
    }
    
    else{
    startTime();
    }
    
}
function resetTimer(){
	console.log("RESET");
	clearInterval(interval); 
    running =false;
    savedTime = 0;
    difference = 0;
    paused = false;
    running = false;
    minutes=0;
    seconds=0;
	milliseconds=0;
    timer.textContent = `00 : 00 : 00`;
    }
function showTime(){
	 updatedTime = new Date().getTime();
     difference = updatedTime - startTime+savedTime; 
      minutes= Math.floor((difference % (1000 *60*60 )) / (1000 *60));
      seconds = Math.floor((difference % (1000 *60 )) / 1000);
      milliseconds = Math.floor((difference % (1000*60)/100));
     
     timer.textContent = `${minutes < 10 ?'0':''}${minutes} : ${seconds < 10 ?'0':''}${seconds} : ${milliseconds < 10 ?'0':''}${milliseconds}`;
     }
function lapTarget(){	
	lapVal = `${minutes < 10 ?'0':''}${minutes} : ${seconds < 10 ?'0':''}${seconds} : ${milliseconds < 10 ?'0':''}${milliseconds}`;
    
    lap.push(lapVal);
    var li = document.createElement('li');
    li.textContent = lapVal;
    lapDisplay.appendChild(li);
    
    //console.log(lap);
    }
function lapClear(){
	lapDisplay.textContent = '';
    lapVal=[];
    }