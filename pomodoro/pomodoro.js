//establish session and break total variables, bool of break
var sessionTotal = 1500;
var breakTotal = 300;
var onBreak = false;
var timeDisplay = sessionTotal;
var onPause = false;
var id = true;


//DOM elements setting up page
function displaySession() {
    document.getElementById("session-timer").innerHTML = sessionTotal/60;
}

function displayBreak() {
    document.getElementById("break-timer").innerHTML = breakTotal/60;
}

function displayMain() {
    document.getElementById("mainDisplay").innerHTML = convertToFormat(timeDisplay);
}

//set original displays on
displayMain();
displaySession();
displayBreak();

//event listeners for buttons to increase and decrease session and break timer
document.getElementById("session-up").addEventListener('click',function() {
    sessionTotal += 60;
    displaySession();
    displayMain();
});

document.getElementById("session-down").addEventListener('click',function() {
    sessionTotal -= 60;
    displaySession();
    displayMain();
});

document.getElementById("break-up").addEventListener('click',function() {
    breakTotal += 60;
    document.getElementById("break-timer").innerHTML = breakTotal/60;
});

document.getElementById("break-down").addEventListener('click',function() {
    breakTotal -= 60;
    document.getElementById("break-timer").innerHTML = breakTotal/60;
});

//listeners for other buttons
document.getElementById("play-button").addEventListener('click', countdown);
document.getElementById("pause").addEventListener('click', pause);
document.getElementById("reset").addEventListener('click', reset);
document.getElementById("stop").addEventListener('click', stop);


//convert number to hours function
function convertToSeconds(time) {
    return time * 60;
}

//convert to proper format
function convertToFormat(seconds) {
    var hour = Math.floor(seconds/3600);
    var minute = Math.floor((seconds - (hour*3600))/60);
    var second = seconds - (hour*3600) - (minute*60);
    let result = "" + addZero(hour) + ":" + addZero(minute) + ":" + addZero(second)
    return result;
}

//add a zero if the number is less than 10
function addZero(input) {
    if (input < 10) {
        input = "0" + input.toString();
    }
    return input;
}

//timer countdown function
function countdown() {
    if (!onPause) {
    timeDisplay = sessionTotal;
    }
    onPause = false;
    id = setInterval(downtick, 1000);
}

function downtick() {
    timeDisplay--;
    clockRunning = true;
    if (timeDisplay < 0) {
        onBreak = !onBreak;
        if (onBreak) {
            document.getElementById("sesOrBreak").innerHTML = "BREAK";
            timeDisplay = breakTotal;
        }
        else {
            document.getElementById("sesOrBreak").innerHTML = "SESSION";
            timeDisplay = sessionTotal;
        }
    }
    document.getElementById("mainDisplay").innerHTML = convertToFormat(timeDisplay);
};

function stop() {
    pause();
    onBreak = false;
    timeDisplay = sessionTotal;
    document.getElementById("sesOrBreak").innerHTML = "SESSION";
    displayMain();
}

function reset() {
    stop();
    onPause = false;
    sessionTotal = 1500;
    breakTotal = 300;
    timeDisplay = sessionTotal;
    displayMain();
    displayBreak();
    displaySession();
}

function pause() {
    onPause = true;
    clearInterval(id);
}



