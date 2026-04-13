from collections import defaultdict
from typing import List


class NumberOfSubarrays:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        prefix_odd_counts = defaultdict(int)
        # Important: We need to initialize the count of the odd count 0 to 1,
        # because a subarray that starts from the beginning of the array can have k odd numbers
        prefix_odd_counts[0] = 1
        subarray_count = 0
        curr_prefix_count = 0
        for num in nums:
          curr_prefix_count += num % 2
          subarray_count += prefix_odd_counts[curr_prefix_count - k]
          prefix_odd_counts[curr_prefix_count] += 1
        return subarray_count
        
    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all odd counts are unique.