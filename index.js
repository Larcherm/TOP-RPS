let totalRounds = 0;

//main function that run when button is pressed
function game() {
    let playerWins = 0, computerWins = 0;
    let computerChoice = getComputerChoice();
    let playerChoice = document.getElementById("pchoice").value.toLowerCase();
    if (!isvalidInput(playerChoice)) {
        console.log("Problem 1");
        document.getElementById("p1").innerHTML = "Please enter rock, paper or scissors:";
        return false;
    }
    document.getElementById("p2").innerHTML = `You chose ${playerChoice}, computer chose ${computerChoice}.`;
    let result = round(playerChoice, computerChoice);
    //check if the total number of rounds has reached the limiti of 5 and display message accordingly
    if (totalRounds < 5) {
        if (result == "win") {
            playerWins++;
        } else if (result == "loss") {
            computerWins++;
        }
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

//checks if the user input is valid
function isvalidInput(playerChoice) {
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return true;
    }
    else {
        return false;
    }
}

//outputs the result of a single rounds of RPS and displays a message with the result
function round(playerChoice, computerChoice) {
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