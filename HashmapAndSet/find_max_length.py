from typing import List


class FindMaxLength:
    def findMaxLength(self, nums: List[int]) -> int:
        # Important: We need to initialize the prefix 0 to index -1
        # to account for subarrays that start at index 0.
        prefixes = {0: -1}
        curr_prefix = 0
        max_subarray = 0
        for i, num in enumerate(nums):
            curr_prefix += 1 if num == 1 else -1
            if curr_prefix in prefixes:
                j = prefixes[curr_prefix]
                max_subarray = max(i - j, max_subarray)
            else:
                prefixes[curr_prefix] = i

        return max_subarray

    # Time complexity: O(n) where n is the number of elements in the input array.
    # We iterate through the input array once, performing constant time operations for each element.
    # Space complexity: O(n) in the worst case where all prefixes are unique.
