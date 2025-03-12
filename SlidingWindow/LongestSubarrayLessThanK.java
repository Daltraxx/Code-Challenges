package SlidingWindow;

/*Given an array of positive integers nums and an integer k, 
find the length of the longest subarray whose sum is less than or equal to k. */

public class LongestSubarrayLessThanK {
    public int findLength(int[] nums, int k) {
        int longest = 0;
        int currentSum = 0;

        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            currentSum += nums[right];
            while (currentSum > k) {
                currentSum -= nums[left];
                left++;
            }

            longest = Math.max(right - left + 1, longest);
        }

        return longest;
    }
}
