
/*
Given an array of integers nums and an integer limit,
return the size of the longest subarray
such that the absolute difference between any two elements of this subarray
is less than or equal to limit.
*/

import java.util.ArrayDeque;

public class LongestSubarrAbsoluteDiff {
    public static int longestSubarray(int[] nums, int limit) {
        ArrayDeque<Integer> increasing = new ArrayDeque<>();
        ArrayDeque<Integer> decreasing = new ArrayDeque<>();
        int left = 0;
        int ans = 0;

        for (int right = 0; right < nums.length; right++) {
            //maintain monotonic queues
            while (!increasing.isEmpty() && increasing.getLast() > nums[right]) {
                increasing.removeLast();
            }
            while (!decreasing.isEmpty() && decreasing.getLast() < nums[right]) {
                decreasing.removeLast();
            }

            increasing.addLast(nums[right]);
            decreasing.addLast(nums[right]);

            //maintain window property
            while (decreasing.getFirst() - increasing.getFirst() > limit) {
                if (nums[left] == decreasing.getFirst()) {
                    decreasing.removeFirst();
                }
                if (nums[left] == increasing.getFirst()) {
                    increasing.removeFirst();
                }
                left++;
            }

            ans = Math.max(ans, right - left + 1);
            
        }


        return ans;
    }

    public static void main(String[] args) {
        int[] nums = {8,2,4,7};
        int limit = 4;


        System.out.println(longestSubarray(nums, limit));
    }
    
}