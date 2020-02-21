let displayMonitor = document.getElementById("disp");
let displayArray = [];
var cache = [];
var defaultDisplay = "-";
var operatorWasLast = false;
var decimalAlreadyUsed = false;
displayMonitor.innerHTML = defaultDisplay;

function convertToNumber(selection) {
    //convert the entry to a number and add it to the cache.  Then, convert
    // the displayArray to a string and display it
    if (selection == ".") {
        if (!decimalAlreadyUsed) {
        cache.push(selection);
        decimalAlreadyUsed = true;
        }
    }
    else {cache.push(parseFloat(selection))}
    let newCache = cache.join("");
    displayArray.pop();
    displayArray.push(newCache);
    let displayString = displayArray.toString();
    displayString = displayString.replace(/,/g, " ");
    displayMonitor.innerHTML = displayString;
    operatorWasLast = false;

}

function addToDisplay(selection) {
    //check to make sure that there isnt currently an operator as the 
    //most recent entry.  Then clear the cache and add the operator
    //before displaying this new array
    if (operatorWasLast) { displayArray.pop(displayArray.pop()); };
    if (displayArray.length == 0) { return; }
    cache = [];
    displayArray.push(selection);
    displayArray.push(" ");
    let displayString = displayArray.toString();
    displayString = displayString.replace(/,/g, " ");
    displayMonitor.innerHTML = displayString;
    operatorWasLast = true;
    decimalAlreadyUsed = false;
}

function clear(array, position) {
    array[position-1] = "";
    array[position] = "";
}
    // clean empty spots out of array
    // cycle through the displayArray searching for multiplication and
    //division.  Return the solution and replace the arguments of that
    //problem with blanks before cleanign them up
function equals() {
    console.log("This is the display Array at step 1");
    console.log(displayArray);
    if (operatorWasLast) {  return;  }
    cache = [];
    displayArray = displayArray.filter(arg => arg.length > 0);
    for (i=0; i<displayArray.length; i++) {
        if (displayArray[i] == "*") {
            displayArray[i+1] = multiply(displayArray[i-1],displayArray[i+1]);
            clear(displayArray, i);
        }
        if (displayArray[i] == "/") {
            displayArray[i+1] = divide(displayArray[i-1],displayArray[i+1]);
            clear(displayArray, i);
        }
    }
    displayArray = displayArray.filter(arg => arg != "");
    console.log("This is the display Array at step 2");
    console.log(displayArray);
    //Now do the same for addition and subtraction
    for (i=0; i<displayArray.length; i++) {
        if (displayArray[i] == "-") {
            displayArray[i+1] = subtract(displayArray[i-1],displayArray[i+1]);
            clear(displayArray, i);
        }
        if (displayArray[i] == "+") {
            displayArray[i+1] = add(displayArray[i-1],displayArray[i+1]);
            clear(displayArray, i);
        }
        console.log(displayArray);    }
    displayArray = displayArray.filter(arg => arg != "");
    console.log("This is the display Array at step 3");
    console.log(displayArray);
    let displayString = displayArray.toString();
    convertToNumber(displayArray);
    console.log("This is the display Array at step 4");
    console.log(displayArray);
    decimalAlreadyUsed = false;
}

function clearDisplay() {
    cache = [];
    displayArray = [];
    displayMonitor.innerHTML = "-";
}

function add(a,b) {
    return parseFloat(a) + parseFloat(b);
}
    
function subtract(a,b) {
    return a - b;
}
    
function multiply(a,b) {
    return a * b;
}
    
function divide(num,denom) {
    return num / denom;
}
    

