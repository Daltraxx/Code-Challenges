package SlidingWindow;

/*Given an array of integers nums and an integer k, 
return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k. */

public class SubarrayProductLessThanK {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) {
            return 0;
        }

        int subarrayCount = 0;
        long currentProduct = 1;

        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            currentProduct *= nums[right];
            while (currentProduct >= k) {
                currentProduct /= nums[left];
                left++;
            }

            subarrayCount += right - left + 1;
        }

        return subarrayCount;
    }
}

// Time Complexity: O(n) where n is the length of the input array nums.
// Each element is visited at most twice
// (once when expanding the right pointer and once when moving the left
// pointer).
// Space Complexity: O(1)