let totalRounds = 0, playerWins = 0, computerWins = 0;


let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', round)); 

function round() {

    let computerChoice = getComputerChoice();
    let playerChoice = this.innerHTML.toLowerCase();
    document.getElementById("p2").innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}.`;
    let result = simRound(playerChoice, computerChoice);
    game(result);
}

//main function that run when button is pressed
function game(result) {
    //check if the total number of rounds has reached the limiti of 5 and display message accordingly
    if (totalRounds < 5) {
        if (result == "win") {
            playerWins++;
        } else if (result == "loss") {
            computerWins++;
        }
        document.getElementById("p2").innerHTML += ` The score is Player ${playerWins}-${computerWins} Computer`;
        totalRounds++;
    }
    if (totalRounds == 5) {
        if (playerWins > computerWins) {
            document.getElementById("p3").innerHTML = "You won the game. Congratulations!"
        } else if (computerWins > playerWins) {
            document.getElementById("p3").innerHTML = "You lost the game. Better luck next time!"
        } else {
            document.getElementById("p3").innerHTML = "The game ended in a draw. Better luck next time!"
        }
        totalRounds = 0, playerWins = 0, computerWins = 0;
    }
    return;
}

//simulates computer choice based on math.ramdom function
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        return "rock";
    } else if (x == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}



// //outputs the result of a single rounds of RPS and displays a message with the result
function simRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        document.getElementById("p3").innerHTML = "It's a draw."
        return "draw";
    }
    let result = 0;
    switch (playerChoice) {
        case "paper":
            if (computerChoice == "rock") {
                result = 1;
            }
            break;
        case "rock":
            if (computerChoice == "scissors") {
                result = 1;
            } 
            break;
        case "scissors":
            if (computerChoice == "paper") {
                result = 1;
            }
            break;
    }
    if (result == 1) {
        document.getElementById("p3").innerHTML = `You win the round, ${playerChoice} beats ${computerChoice}.`;
        return "win";
    } else {
        document.getElementById("p3").innerHTML = `You lose the round, ${computerChoice} beats ${playerChoice}.`;
        return "loss";
    }
}