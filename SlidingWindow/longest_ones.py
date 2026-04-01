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
