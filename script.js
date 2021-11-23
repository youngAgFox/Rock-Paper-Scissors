const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const DISPLAY = document.querySelector("#display");
const PLAYER_SCORE = document.querySelector("#player-wins");
const CPU_SCORE = document.querySelector("#cpu-wins");
let playerWins = 0;
let cpuWins = 0;

function computerChoice() {
    return Math.round(Math.random() * SCISSORS);
}

function choiceToString(choice) {
    switch(choice) {
        case ROCK:
        return 'Rock';
        case PAPER:
        return 'Paper';
        case SCISSORS:
        return 'Scissors';
        default:
            alert("Error converting choice to string, choice was out-of-bounds: " + choice);
    }
}

function stringToChoice(str) {
    const upper = str.toUpperCase();
    switch(upper) {
        case "ROCK":
            return ROCK;
        case "PAPER":
            return PAPER;
        case "SCISSORS":
            return SCISSORS;
            default:
                alert("Error converting string to choice, illegal string: " + upper);
    }
}

function playRound(playerStr, cpuChoice = computerChoice()) {
    const playerChoice = stringToChoice(playerStr);
    const cpuStr = choiceToString(cpuChoice);
    let gameStr;
    if (playerChoice == cpuChoice) {
        // draw
        DISPLAY.innerText = "It's a draw! " + playerStr + " does nothing to " + cpuStr;
    } else if (nextNum(playerChoice) == cpuChoice) {
        // player lost
        cpuWins++;
        DISPLAY.innerText = "You Lose! " + cpuStr + " beats " + playerStr;
        CPU_SCORE.innerText = cpuWins;
    } else {
        // player wins
        playerWins++;
        DISPLAY.innerText = "You Win! " + playerStr + " beats " + cpuStr;
        PLAYER_SCORE.innerText = playerWins;
    }
    if (playerWins >= 5 || cpuWins >= 5) {
        const winner = playerWins > cpuWins ? "You win!" : "The Cpu wins!";
        DISPLAY.innerText = winner;
    }
}

function nextNum(choice) {
    return (choice + 1) % (SCISSORS + 1);
}