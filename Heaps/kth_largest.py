from heapq import heappop, heappush
from typing import List


class Kth_Largest:
    def __init__(self, k: int, nums: List[int]):
        self.scores = []
        self.k = k
        for num in nums:
            heappush(self.scores, num)
            if len(self.scores) > k:
                heappop(self.scores)

    # Time complexity for initialization: O(n log k) where n is the length of the input list nums,
    # as we need to insert each element into the heap and maintain its size at most k.
    # Space complexity: O(k) for the heap, as we are maintaining at most k elements in the heap.

    def add(self, val: int) -> int:
        heappush(self.scores, val)
        if len(self.scores) > self.k:
            heappop(self.scores)
        return self.scores[0]

    # Time complexity for add method: O(log k) for 
    # inserting the new value into the heap and maintaining its size.
