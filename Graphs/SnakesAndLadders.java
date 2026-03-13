import java.util.ArrayDeque;
import java.util.Deque;

public class SnakesAndLadders {
    public int snakesAndLadders(int[][] board) {
        int n = board.length;
        int end = n * n;

        boolean leftToRight = true;
        int[] flattenedBoard = new int[end + 1];
        int index = 1;
        for (int row = n - 1; row >= 0; row--) {
            for (int col = leftToRight ? 0 : n - 1; leftToRight ? col < n : col >= 0; col += leftToRight ? 1 : -1) {
                flattenedBoard[index++] = board[row][col];
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
            for (int i = 0; i < size; i++) {
                int square = queue.pollFirst();
                for (int roll = 1; roll <= 6; roll++) {
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