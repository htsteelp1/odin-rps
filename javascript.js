let hScore = 0;
let cScore = 0;
let hChoice;
let cChoice;
let humanScoreValue = document.querySelector("#humanScore .scoreValue");
humanScoreValue.textContent = hScore.toString();
let computerScoreValue = document.querySelector("#computerScore .scoreValue");
computerScoreValue.textContent = cScore.toString();
let playButton = document.querySelector("#playRound");
let controls = document.querySelector("#controls");
controls.addEventListener("click", clickHandler);
let rockButton = document.createElement("button");
rockButton.classList.add("controlButton");
rockButton.textContent = "Rock";
let scissorsButton = document.createElement("button");
scissorsButton.classList.add("controlButton");
scissorsButton.textContent = "Scissors";
let paperButton = document.createElement("button");
paperButton.classList.add("controlButton");
paperButton.textContent = "Paper";
let hDecision = document.querySelector("#hDecision span");
let cDecision = document.querySelector("#cDecision span");
let winner = document.querySelector("#winner span");
let getChoice = ["Rock", "Paper", "Scissors"];

function addControls() {
    controls.appendChild(rockButton);
    controls.appendChild(paperButton);
    controls.appendChild(scissorsButton);
}
function removeControls() {
    let controlList = document.querySelectorAll("button");
    controlList.forEach((child) => {
        controls.removeChild(child);
    })
}

function clickHandler(event) {
    switch(event.target) {
        case playButton:
            playRound();
            break;
        case rockButton:
            hChoice = 0;
            performScore();
            break;
        case paperButton:
            hChoice = 1;
            performScore();
            break;
        case scissorsButton:
            hChoice = 2;
            performScore();
            break;
    }
}


function getComputerChoice() {
    return Math.trunc(Math.random()*9)%3; // Gets a random number between 0-2
}
function playRound() {
    playButton.remove();
    addControls();
    cChoice = getComputerChoice();

}
function performScore() {
    let winState;
    if (cChoice === hChoice) {
        winState = 0;
    }
    else if ((cChoice+2-hChoice)%3) { // Math Expression I made for Rock Paper Scisors Winner
        hScore++;
        winState = 1;
    }
    else {
        cScore++;
        winState = 2;
    }
    humanScoreValue.textContent = hScore.toString();
    computerScoreValue.textContent = cScore.toString();
    removeControls();
    displayDecision(winState);
    controls.appendChild(playButton);
}
function displayDecision(winState) {
    hDecision.textContent = getChoice.at(hChoice);
    cDecision.textContent = getChoice.at(cChoice);
    switch (winState) {
        case 0:
            winner.textContent = "Tie!";
            break;
        case 1:
            winner.textContent = "Human!";
            break;
        case 2:
            winner.textContent = "Computer!";
            break;
    }
}



