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

    document.getElementsByClassName('inputKey')[0].addEventListener("click", function (event) {
        var keyPress = 1;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[1].addEventListener("click", function (event) {
        var keyPress = 2;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[2].addEventListener("click", function (event) {
        var keyPress = 3;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[3].addEventListener("click", function (event) {
        var keyPress = 4;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[4].addEventListener("click", function (event) {
        var keyPress = 5;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[5].addEventListener("click", function (event) {
        var keyPress = 6;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[6].addEventListener("click", function (event) {
        var keyPress = 7;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[7].addEventListener("click", function (event) {
        var keyPress = 8;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[8].addEventListener("click", function (event) {
        var keyPress = 9;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[9].addEventListener("click", function (event) {
        var keyPress = 10;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[10].addEventListener("click", function (event) {
        var keyPress = 0;
        displayGuess(keyPress);
    });

    document.getElementsByClassName('inputKey')[11].addEventListener("click", function (event) {
        var keyPress = 12;
        displayGuess(keyPress);
    });


    //   runGame(gameLevel = 1);

});

/**
 * Enters Digits into input box as pressed on the keypad
 */

 function displayGuess(keyPress) {
    guess = 0;
    guess += keyPress;
    document.getElementById("displayInput").value = guess;

}