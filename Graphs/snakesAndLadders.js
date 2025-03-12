/*You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.

You start on square 1 of the board. In each move, starting from square curr, do the following:

Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
The game ends when you reach the square n2.
A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any snake or ladder.

Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
Return the least number of dice rolls required to reach the square n2. If it is not possible to reach the square, return -1.*/

class PlayerState {
    constructor(square, moves) {
        this.square = square;
        this.moves = moves;
    }
}

class SquareState {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.visited = false;
    }
}

const snakesAndLadders = (board) => {
    const getBoardMap = () => {
        let squareNum = 1;
        let direction = 'right';

        for (let row = n - 1; row >= 0; row--) {
            if (direction === 'right') {
                for (let col = 0; col < n; col++) {
                    boardMap.set(squareNum, new SquareState(row, col));
                    squareNum++;
                }
                direction = 'left';
            } else {
                for (let col = n - 1; col >= 0; col--) {
                    boardMap.set(squareNum, new SquareState(row, col));
                    squareNum++;
                }
                direction = 'right';
            }
        }
    }

    const n = board.length;
    const boardMap = new Map();
    getBoardMap();
    boardMap.get(1).visited = true;

    const diceRolls = [1, 2, 3, 4, 5, 6];
    const finalSquare = n**2;
    let queue = [new PlayerState(1, 0)];

    while (queue.length) {
        const nextQueue = [];

        for (let {square, moves} of queue) {
            moves++;
            //if end reachable, can return moves now
            if (finalSquare - square <= 6) {
                return moves;
            }

            for (let diceRoll of diceRolls) {
                let nextSquare = square + diceRoll;
                let nextSquareState = boardMap.get(nextSquare);
                const {row, col} = nextSquareState;

                if (board[row][col] !== -1) {
                    nextSquare = board[row][col];
                    nextSquareState = boardMap.get(nextSquare);
                }

                //in case ladder takes player to last spot
                if (nextSquare === finalSquare) {
                    return moves;
                }
                
                if (!nextSquareState.visited) {
                    nextSquareState.visited = true;
                    nextQueue.push(new PlayerState(nextSquare, moves));
                }

            }
        }

        queue = nextQueue;
    }
    
    return -1;
}

const board = [[-1,-1],[-1,3]];
console.log(snakesAndLadders(board));