from collections import defaultdict, deque
from typing import List


class ValidPath:
    def validPath(
        self, n: int, edges: List[List[int]], source: int, destination: int
    ) -> bool:
        if source == destination:
            return True

        # Pre-process graph
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        seen = [False] * n
        seen[source] = True
        stack = [source]
        while stack:
            current = stack.pop()
            for neighbor in graph[current]:
                if not seen[neighbor]:
                    seen[neighbor] = True
                    if neighbor == destination:
                        return True
                    stack.append(neighbor)

        return False


# Time Complexity: O(n + e) where n is the number of nodes and e is the number of edges,
# as we may need to visit each node and edge at most once during DFS.
# Space Complexity: O(n + e) for the graph representation and the seen list.
