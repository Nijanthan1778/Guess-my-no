'use strict';

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number";
// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".number").textContent = 13);
// console.log(document.querySelector(".score").textContent = 10);
// console.log(document.querySelector(".guess").value = 11);
// console.log(document.querySelector(".guess").value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretnumber);
let score = 20;
//console.log(typeof score);
//console.log(document.querySelector(".highscore").textContent);

//document.querySelector(".highscore").textContent = 0;

let hscore = Number(document.querySelector(".highscore").textContent);
//console.log(hscore);

//let highscore = score;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    //console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = "No number!";


    } else if (guess === secretnumber) {
        document.querySelector(".message").textContent = "correct number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretnumber;

        if (score > hscore) {
            document.querySelector(".highscore").textContent = score;
            hscore = score;
        }

        //console.log(hscore);



    } else if (guess > secretnumber) {
        document.querySelector(".message").textContent = "Too high!";
        document.querySelector("body").style.backgroundColor = "#222";
        if (guess === secretnumber + 2) {
            document.querySelector(".message").textContent = "Too close";
        } else if (guess === secretnumber + 1) {
            document.querySelector(".message").textContent = "Too close";
        }
        score--;
        document.querySelector(".score").textContent = score;
        if (score <= 0) {
            document.querySelector(".message").textContent = "You last the game!";
            document.querySelector(".score").textContent = 0;
        }


    } else if (guess < secretnumber) {
        document.querySelector(".message").textContent = "Too low!";
        document.querySelector("body").style.backgroundColor = "#222";
        if (guess === secretnumber - 2) {
            document.querySelector(".message").textContent = "Too close";
        } else if (guess === secretnumber - 1) {
            document.querySelector(".message").textContent = "Too close";
        }
        score--;
        document.querySelector(".score").textContent = score;
        if (score <= 0) {
            document.querySelector(".message").textContent = "You last the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    //console.log(secretnumber);
    //console.log(score);

});