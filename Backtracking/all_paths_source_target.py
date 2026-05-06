from typing import List


class AllPathsSourceTarget:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        def backtrack(curr: List[int]):
            node = curr[-1]
            if node == n - 1:
                all_paths.append(curr[:])
                return
            
            for neighbor in graph[node]:
                curr.append(neighbor)
                backtrack(curr)
                curr.pop()

        n = len(graph)
        all_paths = []
        backtrack([0])
        return all_paths
    
    # Time complexity: O(2^n * n) since there can be up to 2^(n-2) paths in the graph,
    # and each path can take O(n) time to construct.
    # Space complexity: O(n) for the recursion stack and the path storage, 
    # not including the output, which can be O(2^n * n).