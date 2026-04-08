from typing import List
import itertools


class NumArray:
    def __init__(self, nums: List[int]):
        self.prefix_sum_array = list(itertools.accumulate(nums))

    def sumRange(self, left: int, right: int) -> int:
        leftSum = self.prefix_sum_array[left - 1] if left > 0 else 0
        return self.prefix_sum_array[right] - leftSum


# Time complexity: O(1) for sumRange queries after O(n) preprocessing time in __init__.
# Space complexity: O(n) for storing the prefix sum array.

numArray = NumArray([-2, 0, 3, -5, 2, -1])
print(numArray.sumRange(0, 2))  # Output: 1
print(numArray.sumRange(2, 5))  # Output: -1
print(numArray.sumRange(0, 5))  # Output: -3
