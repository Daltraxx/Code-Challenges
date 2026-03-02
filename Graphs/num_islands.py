from typing import List


class NumIslands:
    def numIslands(self, grid: List[List[str]]) -> int:
        def is_valid(row: int, col: int) -> bool:
            return 0 <= row < height and 0 <= col < width

        def dfs(row: int, col: int):
            seen[row][col] = True
            for x, y in directions:
                new_row = row + y
                new_col = col + x
                if (
                    is_valid(new_row, new_col)
                    and grid[new_row][new_col] == "1"
                    and not seen[new_row][new_col]
                ):
                    dfs(new_row, new_col)

        height = len(grid)
        width = len(grid[0])
        seen = [[False for _ in range(width)] for _ in range(height)]
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        island_count = 0
        for row in range(height):
            for col in range(width):
                if grid[row][col] == "1" and not seen[row][col]:
                    island_count += 1
                    dfs(row, col)

        return island_count


# Time Complexity: O(m * n)
# where m is the number of rows and n is the number of columns in the grid,
# as we may need to visit each cell in the grid at most once during DFS.
# Space Complexity: O(m * n) for the seen matrix and recursion stack
# in the worst case of a skewed grid where all cells are land.
