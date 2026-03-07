from collections import deque
from typing import List


class ShortestPathBinaryMatrix:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1:
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
        height = len(grid)
        width = len(grid[0])

        def is_valid(row, col):
            return (
                0 <= row < height
                and 0 <= col < width
                and not seen[row][col]
                and grid[row][col] == 0
            )

        def is_end(row, col):
            return row == height - 1 and col == width - 1 and grid[row][col] == 0

        seen = [[False for _ in range(width)] for _ in range(height)]
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

