from collections import Counter
from typing import List


class LargestUniqueNumber:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        counts = Counter(nums)
        max_unique_num = -1
        for num, count in counts.items():
            if count == 1:
                max_unique_num = max(num, max_unique_num)

        return max_unique_num

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once (O(n))
    # to count the occurrences of each number,
    # and then we iterate through the unique numbers
    # (O(n) in worst case where all numbers are unique)
    # to find the largest unique number.
