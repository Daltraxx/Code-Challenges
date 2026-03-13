import java.util.ArrayDeque;
import java.util.Deque;

public class SnakesAndLadders {
    public int snakesAndLadders(int[][] board) {
        int n = board.length;
        int end = n * n;

        boolean leftToRight = true;
        int[] flattenedBoard = new int[end + 1];
        int i = 1;
        for (int row = n - 1; row >= 0; row--) {
            if (leftToRight) {
                for (int col = 0; col < n; col++) {
                    flattenedBoard[i] = board[row][col];
                    i++;
                }
            } else {
                for (int col = n - 1; col >= 0; col--) {
                    flattenedBoard[i] = board[row][col];
                    i++;
                }
            }
            leftToRight = !leftToRight;
        }

        boolean[] seen = new boolean[end + 1];
        seen[1] = true;
        Deque<Integer> queue = new ArrayDeque<>();
        queue.add(1);
        int rolls = 0;

        while (!queue.isEmpty()) {
            rolls++;
            int size = queue.size();
            for (int node = 0; node < size; node++) {
                int square = queue.pollFirst();
                for (int roll = 1; roll < 7; roll++) {
                    int newSquare = square + roll;
                    if (newSquare > end) {
                        break;
                    }
                    if (flattenedBoard[newSquare] != -1) {
                        newSquare = flattenedBoard[newSquare];
                    }
                    if (newSquare == end) {
                        return rolls;
                    }
                    if (!seen[newSquare]) {
                        seen[newSquare] = true;
                        queue.addLast(newSquare);
                    }
                }
            }
        }

        return -1;
    }
}

// Time complexity: O(n^2) where n is the length of the board. We may have to
// visit every square on the board.
// Space complexity: O(n^2) where n is the length of the board. We need to store
// the flattened board and the seen array, both of which have size n^2.