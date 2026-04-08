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

    def minStartValueConstantSpace(self, nums: List[int]) -> int:
        prefix_sum = nums[0]
        min_val = prefix_sum
        for i in range(1, len(nums)):
            prefix_sum += nums[i]
            min_val = min(prefix_sum, min_val)

        if min_val >= 1:
            return 1

        return -min_val + 1
    
    # Time complexity: O(n)
    # Space complexity: O(1)
