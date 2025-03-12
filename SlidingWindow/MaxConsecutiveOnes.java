package SlidingWindow;

/*Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array 
if you can flip at most k 0's. */

public class MaxConsecutiveOnes {
    public int longestOnes(int[] nums, int k) {
        int maxWindow = 0;
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) {
                k--;
            }

            while (k < 0) {
                if (nums[left] == 0) {
                    k++;
                }
                left++;
            }

            maxWindow = Math.max(right - left + 1, maxWindow);
        }

        return maxWindow;
    }
}
