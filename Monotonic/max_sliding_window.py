from collections import deque
from typing import List


class MaxSlidingWindow:
    def max_sliding_window(self, nums: List[int], k: int) -> List[int]:
        windowMaxes = []
        monoDecreasingDeque = deque()

        # Set up first window
        for i in range(k):
            while monoDecreasingDeque and nums[i] > nums[monoDecreasingDeque[-1]]:
                monoDecreasingDeque.pop()
            monoDecreasingDeque.append(i)

        windowMaxes.append(nums[monoDecreasingDeque[0]])

        # Find maxes for each window
        for i in range(k, len(nums)):
            if monoDecreasingDeque[0] < i - k + 1:
                monoDecreasingDeque.popleft()

            while monoDecreasingDeque and nums[i] > nums[monoDecreasingDeque[-1]]:
                monoDecreasingDeque.pop()

            monoDecreasingDeque.append(i)
            windowMaxes.append(nums[monoDecreasingDeque[0]])

        return windowMaxes


# Time Complexity: O(n) where n is the number of elements in the input array nums, as each element is processed at most twice (once when added to the deque and once when removed).
# Space Complexity: O(k) in the worst case, when the deque contains all the indices of the current window. The output array windowMaxes also takes O(n) space.
