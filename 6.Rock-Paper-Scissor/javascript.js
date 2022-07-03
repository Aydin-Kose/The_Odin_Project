let arr = ['ROCK', 'PAPER', 'SCISSOR']
function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    return arr[rnd];
}
const resultSpn = document.querySelector('#roundResult');
const scoreComputerSpn = document.querySelector('#playerScore');
const scorePlayerSpn = document.querySelector('#computerScore');
function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);
    if (playerSelection === computerSelection) {
        resultSpn.textContent = 'Tie!';
    }
    else if (compareSelections(computerSelection, playerSelection)) {
        scoreComputerSpn.textContent = +scoreComputerSpn.textContent + 1;
        resultSpn.textContent = 'Computer Won!';
    }
    else if (compareSelections(playerSelection, computerSelection)) {
        scorePlayerSpn.textContent = +scorePlayerSpn.innerHTML + 1;
        resultSpn.textContent = 'Player Won!';
    }
    else {
        resultSpn.textContent = 'Something Went Wrong';
    }
    IsEndGame(scoreComputerSpn.textContent, scorePlayerSpn.textContent);
}

function IsEndGame(comp, plyr) {
    if (comp == 5) {
        document.querySelector('body').style.backgroundColor = 'red';
    }
    if (plyr == 5) {
        document.querySelector('body').style.backgroundColor = 'green';
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

const selectionBtns = document.querySelectorAll('button[data-selection]');
selectionBtns.forEach(btn => btn.addEventListener('click', e => console.log(playRound(computerPlay(), e.target.dataset.selection))));

// function game() {
//     scorePlayer = 0;
//     scoreComputer = 0;
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(computerPlay(), prompt('Rock? Paper? Scissor?')));
//     }
//     console.log(`Final Score Player : ${scorePlayer}`)
//     console.log(`Final Score Computer : ${scoreComputer}`)
// }

// game();