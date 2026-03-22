from heapq import heapify_max, heappop_max, heappush_max
from typing import List


class HalveArray:
    def halveArray(self, nums: List[int]) -> int:
        max_heap = []
        total = 0
        for num in nums:
            total += num
            max_heap.append(num)

        heapify_max(max_heap)

        operations = 0
        target = total / 2
        while total > target:
            num = heappop_max(max_heap)
            reduced_num = num / 2
            total -= reduced_num
            heappush_max(max_heap, reduced_num)
            operations += 1

        return operations

# Time complexity: O(n log n) for building the max heap and O(k log n) for k operations 
# (bounded by O(n log n) in the worst case), 
# where k is the number of operations needed to reduce the sum by half.
# Space complexity: O(n) for the max heap.