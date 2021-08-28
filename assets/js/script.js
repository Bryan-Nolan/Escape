// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("class") === "story") {
                alert(`Story Key Pressed !`);
            } else if (this.getAttribute("class") === "rules") {
                alert(`Rules Key Pressed !`);
            } else {
                let gameLevel = 1;
                runGame(gameLevel);
            }
        });
    }

    let digitGuess = 0;
    let tryNumber = 0;
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);

    alert(`Numbers: ` +num1+num2+num3+num4);

    document.getElementsByClassName('inputKey')[0].addEventListener("click", function (event) {
        var keyPress = 1;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[1].addEventListener("click", function (event) {
        var keyPress = 2;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[2].addEventListener("click", function (event) {
        var keyPress = 3;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[3].addEventListener("click", function (event) {
        var keyPress = 4;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[4].addEventListener("click", function (event) {
        var keyPress = 5;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[5].addEventListener("click", function (event) {
        var keyPress = 6;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[6].addEventListener("click", function (event) {
        var keyPress = 7;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[7].addEventListener("click", function (event) {
        var keyPress = 8;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[8].addEventListener("click", function (event) {
        var keyPress = 9;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });

    document.getElementsByClassName('inputKey')[9].addEventListener("click", function (event) {
        digitGuess = 0;
        resetDisplay();
    });

    document.getElementsByClassName('inputKey')[10].addEventListener("click", function (event) {
        var keyPress = 0;
        digitGuess++;
        displayGuess(keyPress, digitGuess);
    });    

    document.getElementsByClassName('inputKey')[11].addEventListener("click", function (event) {
        tryNumber++;
        digitGuess= 0;
        alert(`Tries: `+tryNumber);
        alert(`Guess: `+digitGuess1+digitGuess2+digitGuess3+digitGuess4);
        alert(`Numbers: ` +num1+num2+num3+num4);
        checkGuess(num1, num2, num3, num4, digitGuess1, digitGuess2, digitGuess3, digitGuess4, tryNumber, digitGuess);
    });    

});

/**
 * The main game "loop", called when the script is first loaded
 * to generate the 4 random numbers for the game to commence 
 */

function runGame() {

    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);
    let tryNumber = 0;

    alert(`Numbers: ` +num1+num2+num3+num4);

}

/**
 * Enters Digits into input boxes as pressed on the keypad
 */

function displayGuess(keyPress, digitGuess) {

    alert(`Digit Guess Number Display` +digitGuess)

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
 * It displays output O for correct digit in correct place
 * It diplays X for correct digit wron place
 * It leaves blank if incorrect digit
 * Each display is under the corresponding digit
 *
 */

function checkGuess(num1, num2, num3, num4, digitGuess1, digitGuess2, digitGuess3, digitGuess4, tryNumber, digitGuess) {


    resetResultDisplay ();
    

    alert(`Tries checkGuess: `+tryNumber);
    alert(`Guess checkGuess: `+digitGuess1+digitGuess2+digitGuess3+digitGuess4);
    alert(`Number checkGuess: `+num1+num2+num3+num4);

    if (num1 == digitGuess1 ) {
        document.getElementById("result1").value = "O";
        result1 = "O";
    } else if ( num1 == digitGuess2 || num1 == digitGuess3 || num1 == digitGuess4) {
        document.getElementById("result1").value = "X";
        result1 = "X";
    } else {
        document.getElementById("result1").value = "B";
        result1 = "B";
    }
    
    if (num2 == digitGuess2) {
        document.getElementById("result2").value = "O";
        result2 = "O";
    } else if ( num2 == digitGuess1 || num2 == digitGuess3 || num2 == digitGuess4) {
        document.getElementById("result2").value = "X";
        result2 = "X";
    } else {
        document.getElementById("result2").value = "B";
        result2 = "B";
    }
    
    if (num3 == digitGuess3) {
        document.getElementById("result3").value = "O";
        result3 = "O";
    } else if ( num3 == digitGuess1 || num3 == digitGuess2 || num3 == digitGuess4) {
        document.getElementById("result3").value = "X";
        result3 = "X";
    } else {
        document.getElementById("result3").value = "B";
        result3 = "B";
    }
    
    if (num4 == digitGuess4) {
        document.getElementById("result4").value = "O";
        result4 = "O";
    } else if ( num4 == digitGuess1 || num4 == digitGuess2 || num4 == digitGuess3) {
        document.getElementById("result4").value = "X";
        result4 = "X";
    } else {
        document.getElementById("result4").value = "B";
        result4 = "B";
    }
    
// alert(`Guess: `+digitGuess1+digitGuess2+digitGuess3+digitGuess4+` Result: `+result1+result2+result3+result4);
    displayHistroy (digitGuess1, digitGuess2, digitGuess3, digitGuess4, result1, result2, result3, result4, tryNumber);
}


/**
 * Resests Display back to 0's after reset button pressed
 */

function resetDisplay () {

    document.getElementById("input1").value = 0;
    document.getElementById("input2").value = 0;
    document.getElementById("input3").value = 0;
    document.getElementById("input4").value = 0;
}

function resetResultDisplay () {

    document.getElementById("result1").value = " ";
    document.getElementById("result2").value = " ";
    document.getElementById("result3").value = " ";
    document.getElementById("result4").value = " ";
}
function displayHistroy (digitGuess1, digitGuess2, digitGuess3, digitGuess4, result1, result2, result3, result4, tryNumber) {

    alert(`displayHistroy Guess: `+digitGuess1+digitGuess2+digitGuess3+digitGuess4+` Result: `+result1+result2+result3+result4+` Tries: `+tryNumber);

}