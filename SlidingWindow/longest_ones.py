from typing import List


class LongestOnes:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_consecutive = 0
        curr_zeros = 0
        left = 0
        for right in range(len(nums)):
            curr_zeros += 1 if nums[right] == 0 else 0
            while curr_zeros > k:
                curr_zeros -= 1 if nums[left] == 0 else 0
                left += 1
            max_consecutive = max(right - left + 1, max_consecutive)

        return max_consecutive

    # Time complexity: O(n) where n is the length of the input array nums,
    # as we traverse the array once with the right pointer.
    # Space complexity: O(1)

    def longestOnesOptimizedLazySlidingWindow(self, nums: List[int], k: int) -> int:
        left = 0
        curr_zeros = 0
        for right in range(len(nums)):
            curr_zeros += 1 if nums[right] == 0 else 0
            # Allow temporarily having more than k zeros in the window, 
            # since because window only grows by one with each iteration,
            # shrinking by one is enough to eventually restore validity.
            if curr_zeros > k:
                curr_zeros -= 1 if nums[left] == 0 else 0
                left += 1

        return len(nums) - left

    # Time and space complexity are the same as the previous method, O(n) and O(1) respectively.