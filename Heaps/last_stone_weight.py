from heapq import heapify_max, heappop, heappop_max, heappush, heappush_max
from typing import List


class LastStoneWeight:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [stone for stone in stones]
        heapify_max(max_heap)
        while len(max_heap) >= 2:
            heaviest = heappop_max(max_heap)
            second_heaviest = heappop_max(max_heap)
            if heaviest != second_heaviest:
                new_stone = heaviest - second_heaviest
                heappush_max(max_heap, new_stone)

        return max_heap[0] if max_heap else 0

# Time complexity: O(n log n) where n is the number of stones. 
# This is because we need to build a max heap from the list of stones, which takes O(n) time, 
# and then we may need to perform up to n-1 operations of removing the two heaviest stones 
# and adding a new stone back to the heap, each of which takes O(log n) time.
# Space complexity: O(n) for the max heap, where n is the number of stones.