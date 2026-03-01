from collections import defaultdict
from typing import List


class FindCircleNum:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        def dfs(city: int):
            seen.add(city)
            for neighbor in cities[city]:
                if neighbor not in seen:
                    dfs(neighbor)

        n = len(isConnected)

        # Pre-process graph
        cities = defaultdict(list)
        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j] == 1:
                    cities[i].append(j)
                    cities[j].append(i)

        seen = set()
        province_count = 0
        for city in range(n):
            if city not in seen:
                province_count += 1
                dfs(city)

        return province_count

    # Time Complexity: O(n^2) where n is the number of cities,
    # as we need to iterate through the adjacency matrix to build the graph and in the worst case,
    # we may visit all cities during DFS.
    # Space Complexity: O(n + e) where n is the number of cities and e is the number of connections between cities,
    # as we need to store the graph and the seen set.
    # In the worst case, e can be O(n^2) if all cities are connected to each other.

    def findCircleNumNoPreProcess(self, isConnected: List[List[int]]) -> int:
        def dfs(city: int):
            seen.add(city)
            potential_neighbors = len(isConnected[city])
            for neighbor in range(potential_neighbors):
                if isConnected[city][neighbor] == 1 and neighbor not in seen:
                    dfs(neighbor)

        n = len(isConnected)
        province_count = 0
        seen = set()
        for city in range(n):
            if city not in seen:
                province_count += 1
                dfs(city)
        
        return province_count
