class Game {
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    constructor(board) {
        this.board = board;
        this.n = board.length;
        this.seen = new Array(board.length).fill().map(() => new Array(board.length).fill(false));
    }

    play() {
        let leaps = 0;
        for (let row = 0; row < this.n; row++) {
            for (let col = 0; col < this.n; col++) {
                if (board[row][col] === 1 && !this.seen[row][col]) {
                    this.seen[row][col] = true;
                    leaps++;
                    this.getAllBalls(row, col);
                }
            }
        }

        return leaps;
    }


    getAllBalls(row, col) {
        for (let [x, y] of this.directions) {
            const nextRow = row + y, nextCol = col + x;
            if (this.isValidSpotWithBall(nextRow, nextCol)) {
                this.seen[nextRow][nextCol] = true;
                this.getAllBalls(nextRow, nextCol);
            }
        }
    }

    isValidSpotWithBall(row, col) {
        return row >= 0 && row < this.n && col >= 0 && col < this.n && this.board[row][col] === 1 && !this.seen[row][col];
    }
}

const board = 
    [[1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]];

const game = new Game(board);
console.log(game.play());