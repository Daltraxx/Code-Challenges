from heapq import heapify_max, heappop_max, heappush_max
from typing import List


class MinStoneSum:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        max_heap = []
        total = 0
        for pile in piles:
            total += pile
            max_heap.append(pile)
        heapify_max(max_heap)
        for _ in range(k):
            pile = heappop_max(max_heap)
            stones_to_remove = pile // 2
            reduced_pile = pile - stones_to_remove
            total -= stones_to_remove
            heappush_max(max_heap, reduced_pile)

        return total

# Time complexity: O(n + k log n). 
# We build a max heap from the input list of piles, which takes O(n) time. 
# Then, we perform k iterations where we pop the maximum element from the heap 
# and push the reduced pile back into the heap. 
# Each pop and push operation takes O(log n) time, resulting in O(k log n) for k iterations.
# Space complexity: O(n). We use a max heap to store the piles, which requires O(n) space in the worst case.