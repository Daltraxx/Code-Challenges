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

        # Queue stores tuples of the form (node, steps, prev_color)
        queue = deque([(0, 0, None)])
        while queue:
            node, steps, prev_edge = queue.popleft()
            if distances[node] == -1:
                distances[node] = steps

            if not prev_edge or prev_edge == "red":
                # Traverse blue edges
                for neighbor in blue_graph[node]:
                    if not seen[neighbor][1]:
                        seen[neighbor][1] = True
                        queue.append((neighbor, steps + 1, "blue"))
            if not prev_edge or prev_edge == "blue":
                # Traverse red edges
                for neighbor in red_graph[node]:
                    if not seen[neighbor][0]:
                        seen[neighbor][0] = True
                        queue.append((neighbor, steps + 1, "red"))

        return distances

# Time Complexity: O(n + e) where n is the number of nodes and e is the total number of edges,
# since the range of color is always 2 (constant), and we may need to visit each node and edge at most once.
# Space Complexity: O(n + e) for the graph and seen array in the worst case.