const Player = ((value = 'X') => {
    let Value = value;
    return { Value };
});

const PcPlayer = (difficulty) => {
    let makeMove;
    if (difficulty == 'easy') {
        makeMove = (board) => {
            let emptyBoardIndex = [];
            for (let i = 0; i < board.length; i++) {
                const row = board[i];
                for (let j = 0; j < row.length; j++) {
                    const cell = row[j];
                    if (cell === '') {
                        emptyBoardIndex.push([i, j])
                    }
                }
            }
            let randomCellIndex = emptyBoardIndex[Math.floor(Math.random() * emptyBoardIndex.length)];
            let cell = document.querySelector(`[data-row='${randomCellIndex[0]}'][data-column='${randomCellIndex[1]}']`);
            return cell;
        }
    }
    return { makeMove };
};

const GameBoard = () => {
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    const endGame = function (player, result) {
        const boardDiv = document.querySelector('div.board');
        const resultDiv = document.querySelector('div.result');
        boardDiv.classList.add('endGame');
        resultDiv.removeAttribute('hidden');
        if (result === 'Tie') {
            document.querySelector('p.tie').removeAttribute('hidden');
        }
        else {
            let el = document.querySelector('p.winner')
            el.removeAttribute('hidden')
            el.textContent += player.Value;
        }
    }
    const play = function (cell, player, pcPlayer) {
        let row = cell.dataset.row;
        let column = cell.dataset.column;
        if (board[row][column] === '') {
            board[row][column] = player.Value;
            cell.textContent = player.Value;
            let result = checkWin(row, column);
            if (result) {
                endGame(player, result);
            }
            else if (pcPlayer !== undefined) {
                play(pcPlayer.makeMove(board), pcPlayer);
            }
        }
    };
    const checkWin = (row, column) => {
        if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
            return true;
        }
        else if (board[0][column] === board[1][column] && board[0][column] === board[2][column]) {
            return true;
        }
        else if (board[1][1] !== '' &&
            ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
                board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
            return true;
        }
        else if (board.every(row => row.every(cell => cell !== ''))) {
            return 'Tie';
        }
        return false;
    };
    return { board, play };
};

const Game = (() => {
    const player = Player('X');
    const pcPlayer = Player('O');
    pcPlayer.prototype = Object.assign(pcPlayer, PcPlayer('easy'));
    let gameBoard = GameBoard();
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', gameBoard.play.bind(gameBoard, cells[i], player, pcPlayer), false);
    }
    return { gameBoard, player };
})();