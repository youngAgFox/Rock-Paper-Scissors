const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

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
    if (playerChoice == cpuChoice) {
        // draw
        return "It's a draw! " + playerStr + " does nothing to " + cpuStr;
    } else if (nextNum(playerChoice) == cpuChoice) {
        // player lost
        return "You Lose! " + cpuStr + " beats " + playerStr;
    } else {
        // player wins
        return "You Win! " + playerStr + " beats " + cpuStr;
    }
}

function nextNum(choice) {
    return (choice + 1) % (SCISSORS + 1);
}

function game() {
    let playerWins = 0;
    let cpuWins = 0;
    for(let i = 0; i < 5; i++) {
        let choiceStr = prompt("Enter rock, paper, or scissors");
        if(choiceStr == "" || choiceStr == undefined) {
            console.log("Game terminated early");
            break;
        }
        let gameStr = playRound(choiceStr);
        console.log(gameStr);
        if(gameStr.includes("Win")) {
            playerWins++;
        } else if (gameStr.includes("Lose")) {
            cpuWins++;
        }
    }

    console.log("Player Wins: " + playerWins + "\tCpu Wins: " + cpuWins);
    if (playerWins > cpuWins) {
        console.log("You win the series!");
    } else if (cpuWins > playerWins) {
        console.log("You lose the series!");
    } else {
        console.log("The series is a draw!");
    }
}

game();