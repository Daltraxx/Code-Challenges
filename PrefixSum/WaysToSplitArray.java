package PrefixSum;

class WaysToSplitArray {
    public int waysToSplitArray(int[] nums) {
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        int validSplits = 0;

        long prefixSum = 0;

        // We iterate through the array until the second to last element,
        // because we need at least one element to the right of the split.
        for (int i = 0; i < nums.length - 1; i++) {
            prefixSum += nums[i];

            if (prefixSum * 2 >= totalSum) {
                validSplits++;
            }
        }

        return validSplits;
    }
}

// Time Complexity: O(n) where n is the length of the input array nums.
// We iterate through the array once to calculate the total sum
// and once more to count valid splits.
// Space Complexity: O(1)