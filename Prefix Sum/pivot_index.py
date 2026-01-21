from typing import List

class PivotIndex:
  def pivotIndex(self, nums: List[int]) -> int:
    totalSum = sum(nums)
    leftSum = 0
    for i in range(len(nums)):
      rightSum = totalSum - nums[i] - leftSum
      if leftSum == rightSum: 
        return i
      leftSum += nums[i]

    return -1

# Time complexity: O(n) where n is the length of the input array.
# Space complexity: O(1) as we are using only a constant amount of extra space.

print(PivotIndex().pivotIndex([1, 7, 3, 6, 5, 6]))  # Output: 3