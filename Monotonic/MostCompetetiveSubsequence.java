

import java.util.ArrayDeque;
import java.util.Deque;

/*Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.

We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, 
subsequence a has a number less than the corresponding number in b. 
For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5. */
class MostCompetitiveSubsequence {
    public int[] mostCompetitive(int[] nums, int k) {
        Deque<Integer> deque = new ArrayDeque<>();
        int removableNums = nums.length - k;
        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && removableNums > 0 && deque.peekLast() > nums[i]) {
                deque.pollLast();
                removableNums--;
            }
            deque.addLast(nums[i]);
        }

        int[] ans = new int[k];
        for (int i = 0; i < k; i++) {
            ans[i] = deque.pollFirst();
        }

        return ans;
    }
}