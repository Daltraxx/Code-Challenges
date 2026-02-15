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

            while monoDecreasing and num > monoDecreasing[-1]:
                monoDecreasing.pop()
            monoDecreasing.append(num)

            while monoIncreasing and num < monoIncreasing[-1]:
                monoIncreasing.pop()
            monoIncreasing.append(num)

            # Maintain valid window
            while monoDecreasing[0] - monoIncreasing[0] > limit:
                if monoDecreasing[0] == nums[left]:
                    monoDecreasing.popleft()
                if monoIncreasing[0] == nums[left]:
                    monoIncreasing.popleft()
                left += 1

            max_window = max(right - left + 1, max_window)

        return max_window

# Time Complexity: O(n) where n is the number of elements in the input array nums, as each element is processed at most twice (once when added to the deques and once when removed).
# Space Complexity: O(n) in the worst case, when the deques contain all the elements of the current window.