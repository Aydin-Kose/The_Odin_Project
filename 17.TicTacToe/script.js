const Player = (() => {
    let Value = 'X';
    return { Value };
})();

const GameBoard = (() => {
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    const cells = document.querySelectorAll('.cell');
    const checkWin = (row, column) => {
        if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
            return true;
        }
        else if (board[0][column] === board[1][column] && board[0][column] === board[2][column]) {
            return true;
        }
        else if (board[1][1] !== '' && 
        ((board[0][0] === board[1][1] && board[1][1] === board[2][2])||
        board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
            return true;
        }
        return false;
    };
    const play = function (cell, player) {
        let row = cell.dataset.row;
        let column = cell.dataset.column;
        board[row][column] = player.Value;
        cell.textContent = player.Value;
        console.log(checkWin(row, column));
    };
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', play.bind(this, cells[i], Player), false);
    }
    return { board, play };
})();
console.log(GameBoard.board);




