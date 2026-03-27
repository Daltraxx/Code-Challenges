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

# Time complexity: O(n log k) where n is the number of elements in arr 
# and k is the number of closest elements to return.
# We iterate through all n elements in arr, and for each element, 
# we perform a heap operation that takes O(log k) time. 
# After processing all elements, we sort the k closest elements, 
# which takes O(k log k) time.
# Space complexity: O(k) for the max heap that stores the k closest elements.