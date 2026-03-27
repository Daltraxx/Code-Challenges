from typing import List


class MoveZeroes:
    def moveZeroes(self, nums: List[int]) -> None:
        write = 0
        for read in range(len(nums)):
            if nums[read] != 0:
                if read != write:
                    nums[write], nums[read] = nums[read], nums[write]
                write += 1


# Time complexity: O(n) where n is the length of the input array,
# as we traverse the array at most twice (once for the write pointer and once for the read pointer).
# Space complexity: O(1) as we are modifying the input array in place
# and using only a constant amount of extra space for the pointers.
