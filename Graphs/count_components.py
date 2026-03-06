from collections import defaultdict
from typing import List


class CountComponents:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        def dfs(start: int):
            seen[start] = True
            stack = [start]
            while stack:
                current = stack.pop()
                for neighbor in graph[current]:
                    if not seen[neighbor]:
                        seen[neighbor] = True
                        stack.append(neighbor)

        # Process edges into adjacency map
        graph = defaultdict(list)
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        seen = [False] * n
        component_count = 0
        for node in range(n):
            if not seen[node]:
                component_count += 1
                dfs(node)

        return component_count


# Time Complexity: O(n + e) where n is the number of nodes and e is the number of edges,
# as we may need to visit each node and edge at most once during DFS.
# Space Complexity: O(n + e) for the graph representation and the seen list.
