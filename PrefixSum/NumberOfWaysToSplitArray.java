/*You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:
    The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
    There is at least one element to the right of i. That is, 0 <= i < n - 1.

Return the number of valid splits in nums. */

class NumberOfWaysToSplitArray {
    public int waysToSplitArray(int[] nums) {
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        int validSplits = 0;

        long leftSectionSum = 0;

        for (int i = 0; i < nums.length - 1; i ++) {
            leftSectionSum += nums[i];
            long rightSectionSum = totalSum - leftSectionSum;

            if (leftSectionSum >= rightSectionSum) {
                validSplits++;
            }
        }

        return validSplits;
    }
}