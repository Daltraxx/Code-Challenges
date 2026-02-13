from collections import deque
from typing import List


class MaxSlidingWindow:
    def max_sliding_window(self, nums: List[int], k: int) -> List[int]:
        windowMaxes = []
        monoDecreasingDeque = deque()
        
        for i in range(len(nums)):
            # Remove indices from the front of the deque if they are out of the current window
            if monoDecreasingDeque and monoDecreasingDeque[0] < i - k + 1:
                monoDecreasingDeque.popleft()

            # Pop indices from the deque while the current number is greater than the number at those indices
            while monoDecreasingDeque and nums[i] > nums[monoDecreasingDeque[-1]]:
                monoDecreasingDeque.pop()

            monoDecreasingDeque.append(i)

            # Only start adding to the output array once we have a valid window of size k
            if i >= k - 1:
              windowMaxes.append(nums[monoDecreasingDeque[0]])

        return windowMaxes


# Time Complexity: O(n) where n is the number of elements in the input array nums, as each element is processed at most twice (once when added to the deque and once when removed).
# Space Complexity: O(k) in the worst case, when the deque contains all the indices of the current window. The output array windowMaxes also takes O(n) space.
