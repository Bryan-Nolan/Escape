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

    let guess = 0;
    let guessNumber = 0;

    document.getElementsByClassName('inputKey')[0].addEventListener("click", function (event) {
        var keyPress = 1;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[1].addEventListener("click", function (event) {
        var keyPress = 2;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[2].addEventListener("click", function (event) {
        var keyPress = 3;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[3].addEventListener("click", function (event) {
        var keyPress = 4;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[4].addEventListener("click", function (event) {
        var keyPress = 5;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[5].addEventListener("click", function (event) {
        var keyPress = 6;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[6].addEventListener("click", function (event) {
        var keyPress = 7;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[7].addEventListener("click", function (event) {
        var keyPress = 8;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[8].addEventListener("click", function (event) {
        var keyPress = 9;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[9].addEventListener("click", function (event) {
        guess=0;
        resetDispaly ();
    });

    document.getElementsByClassName('inputKey')[10].addEventListener("click", function (event) {
        var keyPress = 0;
        guess++;
        displayGuess(keyPress, guess);
    });

    document.getElementsByClassName('inputKey')[11].addEventListener("click", function (event) {
        guessNumber++;
        checkGuess(guessNumber);
    });

    runGame();

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

    checkGuess (num1, num2, num3, num4)

}

/**
 * Enters Digits into input boxes as pressed on the keypad
 */

function displayGuess(keyPress, guess) {

    if (guess == 1) {
        guess1 = keyPress;
        document.getElementById("input1").value = guess1;
        checkGuess(guess1);
    } else if (guess == 2) {
        guess2 = keyPress;
        document.getElementById("input2").value = guess2;
    } else if (guess == 3) {
        guess3 = keyPress;
        document.getElementById("input3").value = guess3;
    } else if (guess == 4) {
        guess4 = keyPress;
        document.getElementById("input4").value = guess4;
    } else {
        alert(`Too many numbers click restart or done`);
    }
}

function checkGuess(num1, num2, num3, num4, guess1, guess2, guess3, guess4, guessNumber) {

    if (num1 == guess1 ) {
        document.getElementById("displayResult").value = O;
    } else if (num2 == guess2) {
        document.getElementById("displayResult").value = O;
    } else if (num3 == guess3) {
        document.getElementById("displayResult").value = O;
    } else if (num4 == guess4) {
        document.getElementById("displayResult").value = O;
    } else {
        alert(` No matches`)
    }

}

function resetDispaly () {

    document.getElementById("input1").value = 0;
    document.getElementById("input2").value = 0;
    document.getElementById("input3").value = 0;
    document.getElementById("input4").value = 0;
}