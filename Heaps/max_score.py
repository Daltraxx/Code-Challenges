from heapq import heappop, heappush
from typing import List


class MaxScore:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        nums = [[num1, num2] for num1, num2 in zip(nums1, nums2)]
        nums.sort(key=lambda x: x[1], reverse=True)
        min_heap = []
        curr_min = 0
        curr_sum = 0
        max_score = 0
        for num1, num2 in nums:
            heappush(min_heap, num1)
            curr_sum += num1
            curr_min = num2
            if len(min_heap) == k:
                max_score = max(curr_sum * curr_min, max_score)
                curr_sum -= heappop(min_heap)

        return max_score
    
    # Time complexity: O(n log n) for sorting 
    # and O(n log k) for iterating through the sorted list and maintaining the heap.
    # Space complexity: O(n) for the sorted list 
    # and O(k) for the heap.
