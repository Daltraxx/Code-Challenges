from typing import List


class SearchInsert:
    def searchInsert(self, nums: List[int], target: int):
        left = 0
        right = len(nums)
        while left < right:
            mid = (left + right) // 2
            curr_num = nums[mid]
            if curr_num == target:
                return mid
            elif curr_num > target:
                right = mid
            else:
                left = mid + 1

        return left

    # Time complexity: O(log n) where n is the number of elements in the input array.
    # This is because we are halving the search space in each iteration of the loop.
    # Space complexity: O(1) since we are using only a constant amount of extra space.
