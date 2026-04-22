from typing import List


class MaxNumberOfApples:
    def maxNumberOfApples(self, weight: List[int]) -> int:
        limit = 5000
        max_apples = 0
        sorted_weight = sorted(weight)
        for w in sorted_weight:
            if limit >= w:
                limit -= w
                max_apples += 1
            else:
                break

        return max_apples

    # Time complexity: O(n log n) where n is the number of elements in the input list weight.
    # This is because we need to sort the list of weights, 
    # which takes O(n log n) time. 
    # After sorting, we iterate through the sorted list once, 
    # which takes O(n) time. Therefore, the overall time complexity is O(n log n).
    # Space complexity: O(n) for the sorted list of weights. 
    # Could sort in place to reduce space complexity to O(1).