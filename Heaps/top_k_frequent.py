from collections import Counter
from heapq import heappop, heappush
from typing import List


class TopKFrequent:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = Counter(nums)

        min_heap = []
        for num, count in counts.items():
            heappush(min_heap, (count, num))
            if len(min_heap) > k:
                heappop(min_heap)

        return [num for count, num in min_heap]


# Time complexity: O(n log k) where n is the number of elements in nums 
# and k is the number of top frequent elements to return.
# Space complexity: O(n) for the Counter and O(k) for the heap, 
# resulting in O(n) overall.
