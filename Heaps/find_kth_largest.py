from heapq import heappop, heappush
from typing import List


class FindKthLargest:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_heap = []
        for num in nums:
            heappush(min_heap, num)
            if len(min_heap) > k:
                heappop(min_heap)

        return min_heap[0]

# Time complexity: O(n log k) where n is the number of elements in nums and k is the value of k.
# We iterate through all n elements in nums, 
# and for each element, we perform a heap operation that takes O(log k) time. 
# After processing all elements, we return the root of the min heap, which is O(1).
# Space complexity: O(k) for the min heap that stores the k largest elements.