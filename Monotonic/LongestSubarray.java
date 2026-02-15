
/*
Given an array of integers nums and an integer limit,
return the size of the longest subarray
such that the absolute difference between any two elements of this subarray
is less than or equal to limit.
*/

import java.util.ArrayDeque;

public class LongestSubarray {
    public static int longestSubarray(int[] nums, int limit) {
        ArrayDeque<Integer> monoIncreasing = new ArrayDeque<>();
        ArrayDeque<Integer> monoDecreasing = new ArrayDeque<>();
        int left = 0;
        int maxSubarray = 0;

        for (int right = 0; right < nums.length; right++) {
            // Maintain monotonic queues
            while (!monoIncreasing.isEmpty() && nums[right] < nums[monoIncreasing.getLast()]) {
                monoIncreasing.removeLast();
            }
            while (!monoDecreasing.isEmpty() && nums[right] > nums[monoDecreasing.getLast()]) {
                monoDecreasing.removeLast();
            }

            monoIncreasing.addLast(right);
            monoDecreasing.addLast(right);

            // Maintain valid window
            while (nums[monoDecreasing.getFirst()] - nums[monoIncreasing.getFirst()] > limit) {
                left++;
                if (monoDecreasing.getFirst() < left) {
                    monoDecreasing.removeFirst();
                }
                if (monoIncreasing.getFirst() < left) {
                    monoIncreasing.removeFirst();
                }
            }

            maxSubarray = Math.max(maxSubarray, right - left + 1);
            
        }


        return maxSubarray;
    }

    public static void main(String[] args) {
        int[] nums = {8,2,4,7};
        int limit = 4;


        System.out.println(longestSubarray(nums, limit));
    }
    
}

// Time complexity: O(n)
// Space complexity: O(n) in the worst case when all elements are the same and both queues grow to the size of the input array.