from typing import List


class SplitArray:
    def splitArray(self, nums: List[int], k: int) -> int:
        def check(min_sum: int) -> bool:
            curr_sum = 0
            subarrays = 1
            for num in nums:
                if curr_sum + num > min_sum:
                    subarrays += 1
                    curr_sum = 0
                    if subarrays > k:
                        # If we have already formed more than k subarrays, 
                        # we cannot form any more, so we return False.
                        return False
                curr_sum += num

            return True

        left = max(nums)
        right = sum(nums)
        while left <= right:
            mid = (left + right) // 2
            if check(mid):
                right = mid - 1
            else:
                left = mid + 1
        return left

    # Time complexity: O(n log m) 
    # where n is the length of the nums array 
    # and m is the sum of the nums array.
    # Space complexity: O(1).