from sys import prefix
from typing import List


class WaysToSplitArray:
    def waysToSplitArray(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0] * n
        prefix[0] = nums[0]
        for i in range(1, n):
            prefix[i] = nums[i] + prefix[i - 1]

        valid_splits = 0
        for i in range(n - 1):
            first_sum = prefix[i]
            last_sum = prefix[-1] - prefix[i]
            if first_sum >= last_sum:
                valid_splits += 1

        return valid_splits

    # Time complexity: O(n), where n is the length of the input array.
    # We compute the prefix sums in O(n) time
    # and then iterate through the array once more to count valid splits,
    # which also takes O(n) time.
    # Space complexity: O(n), since we use an additional array to store the prefix sums.

    def waysToSplitArrayConstantMemory(self, nums: List[int]) -> int:
        n = len(nums)
        valid_splits = 0
        total_sum = sum(nums)
        running_sum = 0
        for i in range(n - 1):
            running_sum += nums[i]
            if running_sum * 2 >= total_sum:
                valid_splits += 1

        return valid_splits

    # Same time complexity as the previous method, O(n), 
    # since we still iterate through the array once to compute the total sum 
    # and once more to count valid splits.
    # Space complexity: O(1), since we only use a few extra variables 
    # and do not allocate additional arrays.