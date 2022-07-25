function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        return "Rock";
    } else if (x == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

let a = getComputerChoice();
console.log(a);