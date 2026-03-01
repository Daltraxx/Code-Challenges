from collections import defaultdict
from typing import List


class FindCircleNum:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:

        def dfs(city: int):
            nonlocal cities
            nonlocal seen
            for neighbor in cities[city]:
                if neighbor not in seen:
                    seen.add(neighbor)
                    dfs(neighbor)

        n = len(isConnected)

        # Pre-process graph
        cities = defaultdict(list)
        for i in range(n):
            for j in range(n):
                if isConnected[i][j] == 1:
                    cities[i].append(j)

        seen = set()
        province_count = 0
        for city in range(n):
            if city not in seen:
                province_count += 1
                seen.add(city)
                dfs(city)

        return province_count
