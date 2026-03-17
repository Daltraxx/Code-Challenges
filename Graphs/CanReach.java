import java.util.ArrayDeque;
import java.util.Deque;

class CanReach {
    public boolean canReach(int[] arr, int start) {
        boolean[] seen = new boolean[arr.length];
        seen[start] = true;

        Deque<Integer> queue = new ArrayDeque<>();
        queue.add(start);

        while (!queue.isEmpty()) {
            int index = queue.remove();
            int val = arr[index];

            if (val == 0) {
                return true;
            }

            int leftJumpIndex = index - val;
            int rightJumpIndex = index + val;

            if (leftJumpIndex >= 0 && !seen[leftJumpIndex]) {
                seen[leftJumpIndex] = true;
                queue.add(leftJumpIndex);
            }

            if (rightJumpIndex < arr.length && !seen[rightJumpIndex]) {
                seen[rightJumpIndex] = true;
                queue.add(rightJumpIndex);
            }
        }

        return false;
    }
}

// Time complexity: O(n) - we visit each index at most once
// Space complexity: O(n) - we use a seen array to keep track of visited indices