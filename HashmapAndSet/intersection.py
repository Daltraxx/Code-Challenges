from collections import defaultdict
from typing import List


class Intersection:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        n = len(nums)
        counts = defaultdict(int)
        for arr in nums:
            for num in arr:
                counts[num] += 1

        return sorted([num for num, count in counts.items() if count == n])
    
    # Time complexity: O(n + k log k) 
    # where n is the total number of elements across all input arrays 
    # and k is the number of unique elements in the counts dictionary. 
    # We iterate through all elements to populate the counts dictionary, 
    # which takes O(n) time. 
    # Sorting the result takes O(k log k) time.
    # Space complexity: O(k) where k 
    # is the number of unique elements in the counts dictionary.