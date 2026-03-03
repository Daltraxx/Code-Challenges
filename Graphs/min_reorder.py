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

        # Pre-process graph
        edges = defaultdict(list)
        for origin, dest in connections:
            edges[origin].append((dest, True))  # True indicates the original direction
            edges[dest].append((origin, False))  # Artificial edge in the opposite direction

        # Use DFS to count flips needed for routes that lead away from City Zero
        seen = [False] * n
        flip_count = 0
        dfs(0)
        return flip_count


# Time Complexity: O(n + e) where n is the number of cities
# and e is the number of connections between cities,
# as we need to build the graph and perform DFS.
# In the worst case, e can be O(n^2) if all cities are connected to each other.
# Space Complexity: O(n + e). Same reasoning as time complexity,
# as we need to store the graph and the seen list.
