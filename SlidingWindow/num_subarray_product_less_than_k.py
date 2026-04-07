from typing import List


class NumSubarrayProductLessThanK:
    def numSubarrayProductLessThanK(nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        
        left = 0
        product = 1
        subarrays = 0
        for right in range(len(nums)):
            product *= nums[right]
            while product >= k:
                product /= nums[left]
                left += 1
            subarrays += right - left + 1

        return subarrays

    # Time complexity: O(n) where n is the length of the input array.
    # Each element is visited at most twice 
    # (once when expanding the right pointer and once when moving the left pointer).
    # Space complexity: O(1)