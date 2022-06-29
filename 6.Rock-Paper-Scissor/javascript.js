function computerPlay() {
    let rnd = Math.ceil(Math.random() * 3);
    switch (rnd) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSOR';
    }
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(`Player selected ${playerSelection}`)
    console.log(`Computer selected ${computerSelection}`)
    if (playerSelection === computerSelection) {
        return 'Tie!';
    }
    else if (compareSelections(computerSelection, playerSelection)) {
        scoreComputer++;
        return 'Computer Won!';
    }
    else if (compareSelections(playerSelection, computerSelection)) {
        scorePlayer++;
        return 'Player Won!';
    }
    else {
        return 'Something Went Wrong';
    }
}

function compareSelections(first, second) {
    if ((first === 'ROCK' && second === 'SCISSOR') ||
        (first == 'PAPER' && second === 'ROCK') ||
        (first == 'SCISSOR' && second === 'PAPER')) {
        return true;
    }
    return false;
}
let scorePlayer;
let scoreComputer;
function game() {
    scorePlayer = 0;
    scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), prompt('Rock? Paper? Scissor?')));
    }
    console.log(`Final Score Player : ${scorePlayer}`)
    console.log(`Final Score Computer : ${scoreComputer}`)
}

game();