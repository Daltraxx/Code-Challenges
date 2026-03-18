from typing import List


class MaximumDetonation:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        def is_in_range(radius: int, x1: int, y1: int, x2: int, y2: int) -> bool:
            # Compare to square of radius to avoid floating point issues with sqrt.
            return (x2 - x1) ** 2 + (y2 - y1) ** 2 <= radius**2

        def dfs(start_bomb: int) -> int:
            seen = [False] * n
            seen[start_bomb] = True
            detonations = 1
            stack = [start_bomb]
            while stack:
                bomb = stack.pop()
                for neighbor in neighbors[bomb]:
                    if not seen[neighbor]:
                        seen[neighbor] = True
                        detonations += 1
                        stack.append(neighbor)

            return detonations

        # Pre-process graph
        n = len(bombs)
        neighbors = [[] for _ in range(n)]
        for i in range(n):
            x1, y1, r1 = bombs[i]
            for j in range(i + 1, n):
                x2, y2, r2 = bombs[j]
                if is_in_range(r1, x1, y1, x2, y2):
                    neighbors[i].append(j)
                if is_in_range(r2, x2, y2, x1, y1):
                    neighbors[j].append(i)

        # Get max detonations
        return max(dfs(i) for i in range(n))


# Time complexity: O(n^3).
# It takes O(n^2) to build the graph since we check each pair of bombs once.
# For the DFS, we visit each bomb at most once, and for each bomb,
# we check its neighbors which can be O(n) in the worst case
# (when all bombs are in range of each other).
# Therefore, the DFS can take O(n^2) in the worst case, and since we run DFS for each bomb,
# it results in O(n^3) time complexity.
# Space complexity: O(n^2) for the graph representation in the worst case
# (when all bombs are in range of each other),
# and O(n) for the seen list in the DFS.
