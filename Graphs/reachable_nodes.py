from typing import List


class ReachableNodes:
    def reachableNodes(
        self, n: int, edges: List[List[int]], restricted: List[int]
    ) -> int:
        # Pre-process graph
        graph = [[] for _ in range(n)]
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        # Create seen array and include restricted nodes
        seen = [False] * n
        seen[0] = True
        for node in restricted:
            seen[node] = True

        reachable = 1
        stack = [0]

        while stack:
            curr = stack.pop()
            for neighbor in graph[curr]:
                if not seen[neighbor]:
                    seen[neighbor] = True
                    reachable += 1
                    stack.append(neighbor)
        
        return reachable

# Time Complexity: O(n) where n is the number of nodes. 
# It is not O(n + e) because we are guaranteed to have n - 1 edges, so O(n + e) simplifies to O(n).
# We visit each node once and each edge once.
# Space Complexity: O(n) where n is the number of nodes.
# We use a stack to perform DFS, which in the worst case can store all nodes,
# and we use an array to keep track of visited nodes.