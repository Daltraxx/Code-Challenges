from collections import defaultdict
from typing import List


class MinReorder:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        def dfs(city: int):
            nonlocal flip_count
            seen[city] = True
            for neighbor, is_original in edges[city]:
                if not seen[neighbor]:
                    if is_original:
                        flip_count += 1
                    dfs(neighbor)

        # Pre-process graph and with each edge store flag if part of original directed edge
        edges = defaultdict(list)
        for origin, dest in connections:
            edges[origin].append((dest, True))
            edges[dest].append(
                (origin, False)
            )

        # Use DFS to count flips needed for routes that lead away from City Zero
        seen = [False] * n
        flip_count = 0
        dfs(0)
        return flip_count


# Time Complexity: O(n) where n is the number of cities.
# We visit each city once and each edge once (we're guaranteed to have n - 1 edges).
# Space Complexity: O(n) for the graph and the seen array.
