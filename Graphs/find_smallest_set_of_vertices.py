from typing import List


class FindSmallestSetOfVertices:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        # Get the indegree of each node.
        # The nodes with indegree 0 are the ones that can only be reached from themselves.
        indegrees = [0] * n
        for _, y in edges:
            indegrees[y] += 1

        # Return list with nodes that have indegree of 0.
        return [node for node in range(n) if indegrees[node] == 0]


# Time complexity: O(n + e) where n is the number of nodes and e is the number of edges.
# Space complexity: O(n) for the indegrees list.
