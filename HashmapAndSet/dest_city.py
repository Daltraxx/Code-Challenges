from typing import List


class DestCity:
    def dest_city(self, paths: List[List[str]]) -> str:
        hasOutgoing = set()
        for origin, destination in paths:
            hasOutgoing.add(origin)
        for origin, destination in paths:
            if destination not in hasOutgoing:
                return destination
        return None

# Time complexity: O(n) where n is the number of paths.
# Space complexity: O(n) for the origins set.

paths = [["B", "C"], ["D", "B"], ["C", "A"]]
print(DestCity().dest_city(paths))
