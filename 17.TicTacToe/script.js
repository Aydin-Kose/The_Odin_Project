const GameBoard = (() => {
    let cell = (x, y) => {
        let value = '';
        return { x, y, value }
    };
    const board = [cell(0, 0), cell(0, 1), cell(0, 3),
    cell(1, 0), cell(1, 1), cell(1, 3),
    cell(2, 0), cell(2, 1), cell(2, 3),];
    return { board };
})();
console.log(GameBoard.board);