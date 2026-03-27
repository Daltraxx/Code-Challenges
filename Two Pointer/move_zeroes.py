from typing import List


class MoveZeroes:
    def moveZeroes(self, nums: List[int]) -> None:
        write = 0
        for read in range(len(nums)):
            if nums[read] != 0:
                if read != write:
                    # If conditional prevents mostly harmless but unnecessary swap when read and write pointers are the same.
                    nums[write], nums[read] = nums[read], nums[write]
                write += 1


# Time complexity: O(n) single pass through the array, where n is the length of the input array.
# Space complexity: O(1) as we are modifying the input array in place
# and using only a constant amount of extra space for the pointers.
