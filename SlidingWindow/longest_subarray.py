from typing import List


class LongestSubarray:
    def longestSubarray(self, nums: List[int]) -> int:
        longest = 0
        deletions = 0
        left = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                deletions += 1
            while deletions > 1:
                deletions -= 1 if nums[left] == 0 else 0
                left += 1
            # Use right - left instead of right - left + 1 because 
            # we always need to delete one element from the subarray.
            longest = max(right - left, longest)

        return longest
    
    # Time complexity: O(n) where n is the length of the input array nums,
    # as we traverse the array once with the right pointer.
    # Space complexity: O(1)

    def longestSubarrayLazySlidingWindow(self, nums: List[int]) -> int:
        deletions = 0
        left = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                deletions += 1
            if deletions > 1:
                if nums[left] == 0:
                    deletions -= 1
                left += 1

        # Return right - left instead of right - left + 1 because
        # we always need to delete one element from the subarray.
        return right - left
    
    # Time and space complexity are the same as the previous method, O(n) and O(1) respectively.