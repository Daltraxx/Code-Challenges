from collections import deque
from typing import List


class ShortestPathBinaryMatrix:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1 or grid[-1][-1] == 1:
            return -1

        directions = (
            (1, 0),
            (-1, 0),
            (0, 1),
            (0, -1),
            (1, -1),
            (1, 1),
            (-1, -1),
            (-1, 1),
        )
        n = len(grid)

        def is_valid(row, col):
            return (
                0 <= row < n
                and 0 <= col < n
                and not seen[row][col]
                and grid[row][col] == 0
            )

        def is_end(row, col):
            return row == n - 1 and col == n - 1 and grid[row][col] == 0

        seen = [[False] * n for _ in range(n)]
        seen[0][0] = True
        steps = 1
        queue = deque([(0, 0)])
        while queue:
            level_size = len(queue)
            for _ in range(level_size):
                row, col = queue.popleft()
                if is_end(row, col):
                    return steps

                for dy, dx in directions:
                    new_row = row + dy
                    new_col = col + dx

                    if is_valid(new_row, new_col):
                        seen[new_row][new_col] = True
                        queue.append((new_row, new_col))

            steps += 1

        return -1


# Time Complexity: O(n^2) where n is the number of rows and columns in the grid,
# as we may need to visit each cell in the grid at most once during BFS.
# Space Complexity: O(n^2) for the `seen` matrix and the queue in the worst case.
