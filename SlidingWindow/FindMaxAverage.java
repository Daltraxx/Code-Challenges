package SlidingWindow;

/*You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted. */

public class FindMaxAverage {
    public double findMaxAverage(int[] nums, int k) {
        long currentSum = 0;
        for (int i = 0; i < k; i++) {
            currentSum += nums[i];
        }

        long maxSum = currentSum;

        for (int i = k; i < nums.length; i++) {
            currentSum += nums[i] - nums[i - k];
            maxSum = Math.max(currentSum, maxSum);
        }

        return (double) maxSum / k;
    }
}

// Time complexity: O(n) where n is the length of the input array nums, as we
// need to iterate through the array once to calculate the sum of each subarray
// of size k.
// Space complexity: O(1)