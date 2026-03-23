from typing import List


class IncreasingTriplet:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False

        first = float("inf")
        second = float("inf")

        for num in nums:
            if num <= first:
                first = num
            elif num <= second:
                second = num
            else:
                return True

        return False

# Time complexity: O(n) where n is the length of the input array, 
# as we traverse the array once.
# Space complexity: O(1) as we are using only a constant amount of extra space 
# for the two variables to track the smallest and second smallest numbers.