from collections import defaultdict
from typing import List


class SubarraySum:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_counts = defaultdict(int)
        # Important: We need to initialize the count of the prefix sum 0 to 1,
        # because a subarray that starts from the beginning of the array can sum to k.
        prefix_counts[0] = 1
        curr_sum = 0
        subarrays = 0
        for num in nums:
            curr_sum += num
            subarrays += prefix_counts[curr_sum - k]
            prefix_counts[curr_sum] += 1

        return subarrays

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, 
    # performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all prefix sums are unique.