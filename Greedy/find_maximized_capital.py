from heapq import heappop, heappush
from typing import List


class FindMaximizedCapital:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        n = len(profits)
        projects = sorted([(capital[i], profits[i]) for i in range(n)])
        max_heap = []
        j = 0
        for _ in range(k):
            while j < n and projects[j][0] <= w:
                # Add all projects we can afford to the max heap.
                heappush(max_heap, -projects[j][1])
                j += 1
            if max_heap:
                # Choose most profitable project we can afford.
                w += -heappop(max_heap)
            else:
                # If there are no current projects we can afford,
                # neither will there be any in the future.
                break

        return w

    # Time complexity: O(n log n + k log n) where n is the number of projects
    # and k is the number of projects we can select.
    # Sorting the projects takes O(n log n)
    # and each project can be added to the max heap at most once, which takes O(log n) time.
    # In the worst case, we may add all n projects to the heap,
    # and we may pop from the heap k times, leading to O(k log n) time.
    # Space complexity: O(n) for the sorted projects list and the max heap,
    # which in the worst case can contain all n projects.
