from typing import List


class MinStartValue:
    def minStartValue(self, nums: List[int]) -> int:
        prefix = []
        prefix.append(nums[0])
        min_val = nums[0]
        for i in range(1, len(nums)):
            prefix.append(nums[i] + prefix[i - 1])
            min_val = min(prefix[i], min_val)

        if min_val >= 1:
            return 1

        return -min_val + 1

    # Time complexity: O(n)
    # Space complexity: O(n)

    def minStartValueOptimized(self, nums: List[int]) -> int:
        prefix_sum = 0
        min_val = 0
        for num in nums:
            prefix_sum += num
            min_val = min(prefix_sum, min_val)

        return 1 - min_val
    
    # Time complexity: O(n)
    # Space complexity: O(1)
