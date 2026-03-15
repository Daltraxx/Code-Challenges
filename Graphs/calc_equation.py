from collections import defaultdict
from typing import List


class CalcEquation:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        def dfs(variable: str, target: str, seen: set[str]) -> float:
            if variable == target:
                return 1

            for neighbor in graph[variable]:
                if neighbor not in seen:
                    seen.add(neighbor)
                    result = dfs(neighbor, target, seen)
                    if result != -1:
                        weight = graph[variable][neighbor]
                        return result * weight

            return -1

        # Pre-process graph
        graph = defaultdict(dict)
        for (num, denom), value in zip(equations, values):
            graph[num][denom] = value
            graph[denom][num] = 1 / value

        answers = []
        for origin, dest in queries:
            # Note: if origin not in graph (not among the known variables given in the equations),
            # it is considered undefined by the problem statement and we return -1.
            if origin not in graph or dest not in graph:
                answers.append(-1)
            else:
                answers.append(dfs(origin, dest, {origin}))

        return answers


# Time Complexity: O(q * ( n + e )) where q is the number of queries,
# n is the number of unique variables/nodes, and e is the number of equations/edges.
# In the worst case, we may have to visit all variables and equations for each query.
# Space Complexity: O(n + e) for the graph representation,
# and O(n) for the seen set in the worst case of a deep recursion.
