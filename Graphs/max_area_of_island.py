from typing import List


class MaxAreaOfIsland:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
        height = len(grid)
        width = len(grid[0])

        def is_valid(row: int, col: int) -> bool:
            return (
                0 <= row < height
                and 0 <= col < width
                and grid[row][col] == 1
                and not seen[row][col]
            )

        def dfs(row: int, col: int) -> int:
            seen[row][col] = True
            stack = [(row, col)]
            area = 1
            while stack:
                curr_row, curr_col = stack.pop()
                for dy, dx in directions:
                    new_row = curr_row + dy
                    new_col = curr_col + dx
                    if is_valid(new_row, new_col):
                        seen[new_row][new_col] = True
                        area += 1
                        stack.append((new_row, new_col))
            return area

        seen = [[False for _ in range(width)] for _ in range(height)]
        max_area = 0
        for row in range(height):
            for col in range(width):
                if not seen[row][col] and grid[row][col] == 1:
                    max_area = max(dfs(row, col), max_area)

        return max_area


# Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid,
# as we may need to visit each cell in the grid at most once during DFS.
# Space Complexity: O(m * n) for the `seen` matrix and the stack in the worst case.
