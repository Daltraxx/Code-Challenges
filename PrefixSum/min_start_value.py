from typing import List


class MinStartValue:
    def minStartValue(self, nums: List[int]) -> int:
        prefix = []
        prefix.append(nums[0])
        min_val = nums[0]
        for i in range(1, len(nums)):
            prefix.append(nums[i] + prefix[i - 1])
            min_prefix_sum = min(prefix[i], min_val)

        if min_prefix_sum >= 1:
            return 1

        return -min_prefix_sum + 1

    # Time complexity: O(n)
    # Space complexity: O(n)

    def minStartValueOptimized(self, nums: List[int]) -> int:
        prefix_sum = 0
        min_prefix_sum = 0
        for num in nums:
            prefix_sum += num
            min_prefix_sum = min(prefix_sum, min_prefix_sum)

        # If the real minimum prefix sum is greater than 0,
        # min_prefix_sum will be 0 thanks to how it is initialized,
        # so we can just return 1 - min_prefix_sum in all cases.
        return 1 - min_prefix_sum
    
    # Time complexity: O(n)
    # Space complexity: O(1)
