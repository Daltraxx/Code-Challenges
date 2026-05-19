from heapq import heappop, heappush
from typing import List


class MaxScore:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        nums = list(zip(nums1, nums2))
        # Sort by num2 in descending order to ensure 
        # we always consider the largest num2 (minimum multiplier) first.
        nums.sort(key=lambda x: x[1], reverse=True)
        min_heap = []
        curr_sum = 0
        max_score = 0
        for num1, num2 in nums:
            heappush(min_heap, num1)
            curr_sum += num1
            if len(min_heap) == k:
                # Update max_score with the current sum of the k largest num1 values
                # multiplied by the current min (num2).
                max_score = max(curr_sum * num2, max_score)
                curr_sum -= heappop(min_heap)

        return max_score

    # Time complexity: O(n log n) for sorting
    # and O(n log k) for iterating through the sorted list and maintaining the heap.
    # Space complexity: O(n) for the sorted list
    # and O(k) for the heap.
