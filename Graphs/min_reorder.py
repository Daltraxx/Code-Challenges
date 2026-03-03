from collections import defaultdict
from typing import List


class MinReorder:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        def hash_route(origin: int, dest: int) -> str:
            return f"{origin}-{dest}"

        def dfs(city: int):
            seen[city] = True
            for neighbor in edges[city]:
                if not seen[neighbor]:
                    if hash_route(city, neighbor) in original_routes:
                        nonlocal flip_count
                        flip_count += 1
                    dfs(neighbor)

        # Pre-process graph
        edges = defaultdict(list)
        original_routes = set()
        for origin, dest in connections:
            original_routes.add(hash_route(origin, dest))
            edges[origin].append(dest)
            edges[dest].append(origin)

        # Perform flips if not visited
        # and original route leads away from City Zero
        seen = [False] * n
        seen[0] = True
        flip_count = 0
        for neighbor in edges[0]:
            if not seen[neighbor]:
                if hash_route(0, neighbor) in original_routes:
                    flip_count += 1
                dfs(neighbor)
        
        return flip_count

# Time Complexity: O(n + e) where n is the number of cities 
# and e is the number of connections between cities,
# as we need to build the graph and perform DFS. 
# In the worst case, e can be O(n^2) if all cities are connected to each other.
# Space Complexity: O(n + e). Same reasoning as time complexity, 
# as we need to store the graph and the seen list.