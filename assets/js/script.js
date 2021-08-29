// Wait for the DOM to finish loading before running the game
// Set up event listeners to key click
// Setting up beginning for variables 

document.addEventListener("DOMContentLoaded", function () {
    
    let digitGuess = 0;
    let tryNumber = 0;
    let triesLeft = 15;
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);

    document.getElementById("triesLeft").innerHTML = triesLeft;

    /**
     * Event Listeners track what keys are clicked and gives required action
     */


    document.getElementsByClassName("inputKey")[0].addEventListener("click", function (event) {
        var keyPress = 1;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[1].addEventListener("click", function (event) {
        var keyPress = 2;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[2].addEventListener("click", function (event) {
        var keyPress = 3;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[3].addEventListener("click", function (event) {
        var keyPress = 4;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[4].addEventListener("click", function (event) {
        var keyPress = 5;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[5].addEventListener("click", function (event) {
        var keyPress = 6;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[6].addEventListener("click", function (event) {
        var keyPress = 7;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[7].addEventListener("click", function (event) {
        var keyPress = 8;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[8].addEventListener("click", function (event) {
        var keyPress = 9;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[9].addEventListener("click", function (event) {
        digitGuess = 0;
        resetDisplay();
    });

    document.getElementsByClassName("inputKey")[10].addEventListener("click", function (event) {
        var keyPress = 0;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName("inputKey")[11].addEventListener("click", function (event) {
        tryNumber++;
        digitGuess = 0;
        checkGuess(num1, num2, num3, num4, digitGuess1, digitGuess2, digitGuess3, digitGuess4, tryNumber, digitGuess, triesLeft);
    });

});

/**
 * Enters Digits into input boxes as pressed on the keypad
 */

function displayGuess(keyPress, digitGuess) {

    if (digitGuess == 1) {
        digitGuess1 = keyPress;
        document.getElementById("input1").value = digitGuess1;
    } else if (digitGuess == 2) {
        digitGuess2 = keyPress;
        document.getElementById("input2").value = digitGuess2;
    } else if (digitGuess == 3) {
        digitGuess3 = keyPress;
        document.getElementById("input3").value = digitGuess3;
    } else if (digitGuess == 4) {
        digitGuess4 = keyPress;
        document.getElementById("input4").value = digitGuess4;
    } else {
        alert(`Too many numbers click restart or done`);
    }

}

/**
 * Compares guessDigits with random numbers generated and stored in num variable.  
 * It displays output C for correct digit in correct place
 * It diplays X for correct digit wron place
 * It displays B for incorrect digit
 * Each display is under the corresponding digit
 */

function checkGuess(num1, num2, num3, num4, digitGuess1, digitGuess2, digitGuess3, digitGuess4, tryNumber, digitGuess, triesLeft) {

    resetResultDisplay();

    if (num1 == digitGuess1) {
        document.getElementById("result1").value = "C";
        result1 = "C ";
    } else if (num1 == digitGuess2 || num1 == digitGuess3 || num1 == digitGuess4) {
        document.getElementById("result1").value = "X";
        result1 = "X ";
    } else {
        document.getElementById("result1").value = "B";
        result1 = "B ";
    }

    if (num2 == digitGuess2) {
        document.getElementById("result2").value = "C";
        result2 = "C ";
    } else if (num2 == digitGuess1 || num2 == digitGuess3 || num2 == digitGuess4) {
        document.getElementById("result2").value = "X";
        result2 = "X ";
    } else {
        document.getElementById("result2").value = "B";
        result2 = "B ";
    }

    if (num3 == digitGuess3) {
        document.getElementById("result3").value = "C";
        result3 = "C ";
    } else if (num3 == digitGuess1 || num3 == digitGuess2 || num3 == digitGuess4) {
        document.getElementById("result3").value = "X";
        result3 = "X ";
    } else {
        document.getElementById("result3").value = "B";
        result3 = "B ";
    }

    if (num4 == digitGuess4) {
        document.getElementById("result4").value = "C";
        result4 = "C ";
    } else if (num4 == digitGuess1 || num4 == digitGuess2 || num4 == digitGuess3) {
        document.getElementById("result4").value = "X";
        result4 = "X ";
    } else {
        document.getElementById("result4").value = "B";
        result4 = "B ";
    }
    displayHistroy(digitGuess1, digitGuess2, digitGuess3, digitGuess4, result1, result2, result3, result4, tryNumber, triesLeft);
}

/**
 * Resets Display back to 0's after reset button pressed
 */

function resetDisplay() {

    document.getElementById("input1").value = 0;
    document.getElementById("input2").value = 0;
    document.getElementById("input3").value = 0;
    document.getElementById("input4").value = 0;
}

/**
 * Resets Display back to blanks when called
 */

function resetResultDisplay() {

    document.getElementById("result1").value = " ";
    document.getElementById("result2").value = " ";
    document.getElementById("result3").value = " ";
    document.getElementById("result4").value = " ";
}

/**
 * Displays previous guesses in list at side of keypad
 * Track to see if correct Answer and congradulate user and reload for new game. 
 */

function displayHistroy(digitGuess1, digitGuess2, digitGuess3, digitGuess4, result1, result2, result3, result4, tryNumber, triesLeft) {

    var ol = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(+digitGuess1 + result1 + digitGuess2 + result2 + digitGuess3 + result3 + digitGuess4 + result4));
    ol.appendChild(li);

    triesLeft = triesLeft - tryNumber;
    document.getElementById("triesLeft").innerHTML = triesLeft;
    
    if (result1 == "C " && result2 == "C " && result3 == "C " && result4 == "C ") {
        alert("Well done you have guess the answer in "+tryNumber+" tries");
        location.reload();
    } else if (triesLeft == 0){
        alert("Sorry you have run out of tries.\nPlease try again.\nGame will now restart")  
        location.reload();      
    }
}
