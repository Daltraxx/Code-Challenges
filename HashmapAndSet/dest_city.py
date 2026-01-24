from typing import List


class DestCity:
    def dest_city(self, paths: List[List[str]]) -> str:
        neighbors = {}
        for origin, destination in paths:
            neighbors.setdefault(origin, []).append(destination)
            if destination not in neighbors:
                neighbors[destination] = []
        for city in neighbors:
            if len(neighbors[city]) == 0:
                return city


# Time complexity: O(n) where n is the number of paths.
# Space complexity: O(n) for the neighbors dictionary.

paths = [["B", "C"], ["D", "B"], ["C", "A"]]
print(DestCity().dest_city(paths))
