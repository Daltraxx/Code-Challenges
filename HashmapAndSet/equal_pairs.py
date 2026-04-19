from collections import defaultdict
from typing import List


class EqualPairs:
    def equalPairs(self, grid: List[List[int]]):
        n = len(grid)
        row_map = defaultdict(int)
        equal_pairs = 0
        for row in range(n):
            row_map[tuple(grid[row])] += 1

        for col in range(n):
            curr_col = tuple(grid[row][col] for row in range(n))
            equal_pairs += row_map[curr_col]

        return equal_pairs

    # Time complexity: O(n^2) where n is the number of rows (or columns) in the grid.
    # We iterate through each row and column once, and each iteration takes O(n) time
    # to create the tuple representation of the row or column. 
    # Thus, the overall time complexity is O(n^2).
    # Space complexity: O(n) in the worst case, if all rows are unique.