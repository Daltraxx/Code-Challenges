from typing import List


class PartitionArray:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        count = 1
        left = 0
        for right in range(len(nums)):
            if nums[right] - nums[left] > k:
                left = right
                count += 1

        return count

    # Time complexity: O(n log n) due to the sorting step,
    # where n is the length of the input array nums.
    # The two-pointer traversal takes O(n) time,
    # but the sorting dominates the overall time complexity.
    # Space complexity: O(1)
