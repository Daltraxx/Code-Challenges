import java.util.ArrayDeque;
import java.util.Deque;

/*Given an array of non-negative integers arr, 
you are initially positioned at start index of the array. 
When you are at index i, you can jump to i + arr[i] or i - arr[i], 
check if you can reach any index with value 0.

Notice that you can not jump outside of the array at any time.*/

class JumpGameIII {
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

            int leftJumpIndex = index - val, rightJumpIndex = index + val;

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