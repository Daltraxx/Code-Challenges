from collections import Counter, defaultdict
from typing import List


class MaxOperations:
    def maxOperationsTwoPointer(self, nums: List[int], k: int) -> int:
        nums.sort()
        left = 0
        right = len(nums) - 1
        max_operations = 0
        while left < right:
            curr_sum = nums[left] + nums[right]
            if curr_sum > k:
                right -= 1
            elif curr_sum < k:
                left += 1
            else:
                max_operations += 1
                left += 1
                right -= 1

        return max_operations

    # Time complexity: O(n log n) due to the sorting step,
    # where n is the length of the input list nums.
    # The two-pointer traversal takes O(n) time,
    # but the sorting dominates the overall time complexity.
    # Space complexity: O(1) if we ignore the space used by the sorting algorithm
    # (which typically uses O(log n) space for in-place sorting),
    # as we are using only a constant amount of extra space for the pointers
    # and the max_operations counter.

    def maxOperationsHashmap(self, nums: List[int], k: int) -> int:
        frequencies = defaultdict(int)
        max_operations = 0
        for num in nums:
            complement = k - num
            if frequencies[complement] > 0:
                frequencies[complement] -= 1
                max_operations += 1
            else:
                frequencies[num] += 1

        return max_operations

    # Time complexity: O(n) where n is the length of the input list nums,
    # as we traverse the list once to count frequencies and find pairs.
    # Space complexity: O(n) for the frequency dictionary, as we may store
    # up to n elements in the worst case.
