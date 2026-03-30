from heapq import heappop_max, heappush_max
from typing import List


class KClosest:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        max_heap = []
        for point in points:
            x, y = point
            distance_to_origin = x**2 + y**2
            heappush_max(max_heap, (distance_to_origin, point))
            if len(max_heap) > k:
                heappop_max(max_heap)

        return [point for _, point in max_heap]

    # Time complexity: O(n log k) where n is the number of points 
    # and k is the number of closest points we want to find.
    # We iterate through all n points, and for each point, 
    # we perform a heap operation that takes O(log k) time.
    # Space complexity: O(k) for the max heap, 
    # as we store at most k points in the heap at any time.
