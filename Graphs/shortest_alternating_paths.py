from collections import deque
from typing import List


class ShortestAlternatingPaths:

    def shortestAlternatingPaths(
        self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]
    ) -> List[int]:

        def generate_graph(edges: List[List[int]]) -> List[List[int]]:
            graph = [[] for _ in range(n)]
            for origin, dest in edges:
                graph[origin].append(dest)
            return graph

        red_graph = generate_graph(redEdges)
        blue_graph = generate_graph(blueEdges)
        # seen array stores visited states in the form of
        # (visited_from_red_edge, visited_from_blue_edge)
        seen = [[False, False] for _ in range(n)]
        seen[0] = [True, True]
        distances = [-1] * n
        RED = 0
        BLUE = 1

        # Queue stores tuples of the form (node, steps, prev_color)
        queue = deque([(0, 0, RED), (0, 0, BLUE)])
        while queue:
            node, steps, prev_edge = queue.popleft()
            if distances[node] == -1:
                distances[node] = steps

            if prev_edge == RED:
                # Traverse blue edges
                for neighbor in blue_graph[node]:
                    if not seen[neighbor][BLUE]:
                        seen[neighbor][BLUE] = True
                        queue.append((neighbor, steps + 1, BLUE))
            if prev_edge == BLUE:
                # Traverse red edges
                for neighbor in red_graph[node]:
                    if not seen[neighbor][RED]:
                        seen[neighbor][RED] = True
                        queue.append((neighbor, steps + 1, RED))

        return distances


# Time Complexity: O(n + r + b) where n is the number of nodes,
# r is the number of red edges,
# and b is the number of blue edges.
# Space Complexity: O(n + r + b) for the graph representation and the seen array
