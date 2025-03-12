import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;

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
    int square;
    int moves;
    public PlayerState(int square, int moves) {
        this.square = square;
        this.moves = moves;
    }
}

class SquareState {
    int row;
    int col;
    boolean visited = false;
    public SquareState(int row, int col) {
        this.row = row;
        this.col = col;
    }
}

public class SnakesAndLadders {
    int n;
    HashMap<Integer, SquareState> boardMap;
    public int snakesAndLadders(int[][] board) {
        n = board.length;

        boardMap = new HashMap<>();
        getBoardMap();
        boardMap.get(1).visited = true;

        Deque<PlayerState> queue = new ArrayDeque<>();
        queue.add(new PlayerState(1, 0));

        int[] diceRolls = {1, 2, 3, 4, 5, 6};
        int finalSquare = n * n;

        while (!queue.isEmpty()) {
            PlayerState playerState = queue.remove();
            int square = playerState.square, moves = playerState.moves;
            moves++;

            if (square >= finalSquare - 6) {
                return moves;
            }

            for (int diceRoll : diceRolls) {
                int newSquare = square + diceRoll;
                SquareState newSquareState = boardMap.get(newSquare);
                int row = newSquareState.row, col = newSquareState.col;

                if (board[row][col] != -1) {
                    newSquare = board[row][col];
                    newSquareState = boardMap.get(newSquare);
                }

                if (newSquare == finalSquare) {
                    return moves;
                }

                if (!newSquareState.visited) {
                    newSquareState.visited = true;
                    queue.add(new PlayerState(newSquare, moves));
                }
            }
        }

        return -1;
    }

    public void getBoardMap() {
        int RIGHT = 0;
        int direction = RIGHT;
        int squareNumber = 1;

        for (int row = n - 1; row >= 0; row--) {
            if (direction == RIGHT) {
                for (int col = 0; col < n; col++) {
                    boardMap.put(squareNumber, new SquareState(row, col));
                    squareNumber++;
                }
                direction = 1 - direction;
            } else {
                for (int col = n - 1; col >= 0; col--) {
                    boardMap.put(squareNumber, new SquareState(row, col));
                    squareNumber++;
                }
                direction = 1 - direction;
            }
        }
    }
}
