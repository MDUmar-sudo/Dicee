// Function for generating random number between 1 and 6
function randomDice() {
    let rand_num = Math.floor((Math.random() * 6) + 1);
    return rand_num;
}

// Function for setting images for each palyer
function diceThrow(classname) { 
    let n = randomDice();
    let diceface = `./images/dice${n}.png`;
    document.querySelector(`.${classname}`).setAttribute("src", diceface);
    return n;
}


// main
function myMain() { 
    // Player 1
    let p1 = diceThrow("img1");
    // Player 2
    let p2 = diceThrow("img2");

    // To decide the winner and display it
    if (p1 > p2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
    }
    else if (p1 < p2) { 
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}
myMain();