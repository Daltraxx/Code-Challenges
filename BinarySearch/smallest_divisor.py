from typing import List


class SmallestDivisor:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        def check(divisor: int) -> bool:
            total = 0
            for num in nums:
                total += (num + divisor - 1) // divisor
                if total > threshold:
                    return False
            return True
        
        left = 1
        right = max(nums)
        while left <= right:
            mid = (left + right) // 2
            if check(mid):
                right = mid - 1
            else:
                left = mid + 1

        return left

    # Time complexity: O(n log m) where n is the length of nums 
    # and m is the maximum value in nums.
    # The log(m) factor comes from the binary search on the divisor values,
    # and the O(n) factor comes from the check function 
    # that iterates through nums for each divisor value.
    # Space complexity: O(1).