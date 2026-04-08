package PrefixSum;



public class MinStartValue {
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
