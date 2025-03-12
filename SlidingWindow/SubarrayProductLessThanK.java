package SlidingWindow;

/*Given an array of integers nums and an integer k, 
return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k. */

public class SubarrayProductLessThanK {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) {
            return 0;
        }

        int subarrayCount = 0;
        int currentProduct = 1;
        
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
