/*Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1. */

public class MinValueToGetPositiveStepByStepSum {
    public int minStartValue(int[] nums) {
        int minRunningSum = 0;
        int runningSum = 0;

        for (int i = 0; i < nums.length; i++) {
            runningSum += nums[i];
            minRunningSum = Math.min(runningSum, minRunningSum);
        }
        
        return 1 - minRunningSum;
    }
}
