from heapq import heappop_max, heappush_max
from typing import List


class FindClosestElements:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        max_heap = []
        for num in arr:
            diff = abs(x - num)
            heappush_max(max_heap, (diff, num))
            if len(max_heap) > k:
                heappop_max(max_heap)

        k_closest = [num for diff, num in max_heap]
        k_closest.sort()
        return k_closest
