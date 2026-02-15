from collections import deque
from typing import List


class LongestSubarray:
    def longest_subarray(self, nums: List[int], limit: int) -> int:
        monoDecreasing = deque()
        monoIncreasing = deque()
        max_window = 0

        left = 0
        for right in range(len(nums)):
            num = nums[right]

            while monoDecreasing and num > nums[monoDecreasing[-1]]:
                monoDecreasing.pop()
            monoDecreasing.append(right)

            while monoIncreasing and num < nums[monoIncreasing[-1]]:
                monoIncreasing.pop()
            monoIncreasing.append(right)

            # Maintain valid window
            while nums[monoDecreasing[0]] - nums[monoIncreasing[0]] > limit:
                left += 1
                if monoDecreasing[0] < left:
                    monoDecreasing.popleft()
                if monoIncreasing[0] < left:
                    monoIncreasing.popleft()

            max_window = max(right - left + 1, max_window)

        return max_window


# Time Complexity: O(n) where n is the number of elements in the input array nums, as each element is processed at most twice (once when added to the deques and once when removed).
# Space Complexity: O(n) in the worst case, when the deques contain all the elements of the current window.
