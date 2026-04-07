from typing import List


class SortedSquares:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        squares = [0] * n
        left = 0
        right = n - 1
        write = n - 1
        while left <= right:
            left_squared = nums[left] ** 2
            right_squared = nums[right] ** 2
            if left_squared > right_squared:
                squares[write] = left_squared
                left += 1
            else:
                squares[write] = right_squared
                right -= 1
            write -= 1

        return squares

    # Time complexity: O(n), where n is the length of the input array. 
    # We traverse the array once with two pointers.
    # Space complexity: O(n) for the output array that holds the squares of the input numbers