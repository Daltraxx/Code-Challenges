/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */

class RunningSum {
    public int[] runningSum(int[] nums) {
        int[] prefix = new int[nums.length];
        prefix[0] = nums[0];

        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] + nums[i];
        }

        return prefix;
    }

    // Time complexity: O(n) where n is the length of the input array
    // Space complexity: O(n) where n is the length of the input array
    
    public int[] runningSumInPlace(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            nums[i] += nums[i - 1];
        }

        return nums;
    }

    // Time complexity: O(n) where n is the length of the input array
    // Space complexity: O(1) since we are modifying the input array in place
}