from typing import List


class MaxArea:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_area = 0
        while left < right:
            left_height = height[left]
            right_height = height[right]
            shorter = min(left_height, right_height)
            curr_area = shorter * (right - left)
            max_area = max(curr_area, max_area)
            if left_height < right_height:
                left += 1
            else:
                right -= 1

        return max_area


# Time complexity: O(n) where n is the number of elements in the height array.
# We use two pointers to traverse the array from both ends towards the center.
# Space complexity: O(1)
