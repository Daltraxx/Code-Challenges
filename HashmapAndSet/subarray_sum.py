from collections import defaultdict
from typing import List


class SubarraySum:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefixes = defaultdict(int)
        prefixes[0] = 1
        curr_sum = 0
        subarrays = 0
        for num in nums:
            curr_sum += num
            subarrays += prefixes[curr_sum - k]
            prefixes[curr_sum] += 1

        return subarrays

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, 
    # performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all prefix sums are unique.