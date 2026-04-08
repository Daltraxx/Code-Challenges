package PrefixSum;

public class MinStartValue {
    public int minStartValue(int[] nums) {
        int minPrefixSum = 0;
        int prefixSum = 0;

        for (int num : nums) {
            prefixSum += num;
            minPrefixSum = Math.min(prefixSum, minPrefixSum);
        }

        // If the real minimum prefix sum is greater than 0,
        // minPrefixSum will be 0 thanks to how it is initialized,
        // so we can just return 1 - minPrefixSum in all cases.
        return 1 - minPrefixSum;
    }
}

// Time complexity: O(n)
// Space complexity: O(1)
