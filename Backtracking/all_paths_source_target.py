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

    def allPathsSourceTargetStack(self, graph: List[List[int]]) -> List[List[int]]:
        stack = [(0, [0])]
        target = len(graph) - 1
        all_paths = []
        while stack:
            node, path = stack.pop()
            for neighbor in graph[node]:
                updated_path = path + [neighbor]
                if neighbor == target:
                    all_paths.append(updated_path)
                else:
                    stack.append((neighbor, updated_path))
        return all_paths
    
    # Worse space complexity than the recursive approach due to storing all paths in the stack,
    # and we have to copy the path for each neighbor, which costs O(n) at every step.
    # The recursive approach is generally preferred.