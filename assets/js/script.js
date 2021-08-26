// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "story") {
                displayStory ();
            } else if (this.getAttribute ("class") === "rules") {
                displayRules();
            } else {
                let gameLevel = 1;
                runGame (gameLevel);
            }
        });
    }

    runGame(gameLevel = 1);

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame ()

/**
 * Pop up box which will display rules of the game
 */

function displayRules ()

/**
 * Pop up box which will display story of the game
 */

 function displayStory ()


/**
 * Enters Digits into inpox as pressed on the keypad
 */

function displayGuess ()

/**
 * Enters Digits into inpox as pressed on teh keypad
 */

function inputResult ()

/**
 * When next guess is being entered previos guess and resuly will be stored in ordered list
 */

 function displayOldGuess ()

 /**
 * Clicking the hint button will give you a correct number and position and will remove 3 guesses
 */

function hint ()


 /**
 * After completeing 1st levek numbe of allowed guesses will decrease by 5
 * There will be 3 levels 20, 15, 10 guesses
 */

 function levelUp ()

 /**
 * Pop up box which will dislay if you have won or failed 
 */

function endGame ()


