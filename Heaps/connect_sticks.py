from heapq import heapify, heappop, heappush
from typing import List


class ConnectSticks:
    def connectSticks(self, sticks: List[int]) -> int:
        min_heap = [stick for stick in sticks]
        heapify(min_heap)
        cost = 0
        while len(min_heap) > 1:
            new_stick = heappop(min_heap) + heappop(min_heap)
            cost += new_stick
            heappush(min_heap, new_stick)
        return cost

# Time complexity: O(n log n). Building the min-heap takes O(n) time, 
# and we perform n - 1 iterations of the loop, 
# where each iteration involves popping two elements 
# and pushing one element back into the heap in O(log n) time.
# Space complexity: O(n). The min-heap contains at most n elements.