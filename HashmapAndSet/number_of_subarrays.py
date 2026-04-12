from collections import defaultdict
from typing import List


class NumberOfSubarrays:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        odd_count_map = defaultdict(int)
        odd_count_map[0] = 1
        subarray_count = 0
        curr_odd_count = 0
        for num in nums:
          curr_odd_count += num % 2
          subarray_count += odd_count_map[curr_odd_count - k]
          odd_count_map[curr_odd_count] += 1
        return subarray_count
        
    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all odd counts are unique.