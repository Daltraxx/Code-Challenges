from typing import List, Optional


class DestCity:
    def dest_city(self, paths: List[List[str]]) -> Optional[str]:
        origins = {origin for origin, _ in paths}
        for _, destination in paths:
            if destination not in origins:
                return destination
        return None


# Time complexity: O(n) where n is the number of paths.
# Space complexity: O(n) for the origins set.

paths = [["B", "C"], ["D", "B"], ["C", "A"]]
print(DestCity().dest_city(paths))
