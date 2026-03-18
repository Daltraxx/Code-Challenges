from typing import List


class MaximumDetonation:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        def get_distance(x1: int, x2: int, y1: int, y2: int) -> bool:
            return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

        def dfs(start_bomb: int) -> bool:
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
            for j in range(i + 1, n):
                x1, y1, r1 = bombs[i]
                x2, y2, r2 = bombs[j]
                distance = get_distance(x1, x2, y1, y2)
                if r1 >= distance:
                    neighbors[i].append(j)
                if r2 >= distance:
                    neighbors[j].append(i)

        # Get max detonations
        max_detonations = 0
        for bomb in range(n):
            max_detonations = max(dfs(bomb), max_detonations)

        return max_detonations
