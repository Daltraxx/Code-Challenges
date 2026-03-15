from collections import defaultdict
from typing import List


class CalcEquation:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        def dfs(node: str, target: str, seen: set[str]) -> float:
            if node == target:
                return 1

            for neighbor in graph[node]:
                if neighbor not in seen:
                    seen.add(neighbor)
                    result = dfs(neighbor, target, seen)
                    if result != -1:
                        weight = graph[node][neighbor]
                        return result * weight

            return -1

        # Pre-process graph
        graph = defaultdict(dict)
        for i in range(len(equations)):
            num, denom = equations[i]
            graph[num][denom] = values[i]
            graph[denom][num] = 1 / values[i]

        answers = []
        for origin, dest in queries:
            answers.append(
                -1 if origin not in graph else dfs(origin, dest, set([origin]))
            )

        return answers

# Time Complexity: O(q * ( n + e )) where q is the number of queries, 
# n is the number of unique variables/nodes, and e is the number of equations/edges.
# In the worst case, we may have to visit all variables and equations for each query.
# Space Complexity: O(n + e) for the graph representation, 
# and O(n) for the seen set in the worst case of a deep recursion.