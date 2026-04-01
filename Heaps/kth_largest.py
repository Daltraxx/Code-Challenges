from heapq import heappop, heappush, heapreplace
from typing import List


class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.scores = []
        self.k = k
        for num in nums:
            self.add(num)

    # Time complexity for initialization: O(n log k) where n is the length of the input list nums,
    # as we need to insert each element into the heap and maintain its size at most k.
    # Space complexity: O(k) for the heap, as we are maintaining at most k elements in the heap.

    def add(self, val: int) -> int:
        if len(self.scores) < self.k:
            heappush(self.scores, val)
        elif val > self.scores[0]:
            heapreplace(self.scores, val)
        return self.scores[0]

    # Time complexity for add method: O(log k) in the worst case, 
    # when we need to replace the smallest element in the heap.
