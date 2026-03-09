from collections import deque
from typing import List


class ShortestPath:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
        height = len(grid)
        width = len(grid[0])

        seen = [[-1] * width for _ in range(height)]
        queue = deque([(0, 0, 0, k)])
        while queue:
            row, col, steps, remaining = queue.popleft()
            if row == height - 1 and col == width - 1:
                return steps
            for dy, dx in directions:
                new_row = row + dy
                new_col = col + dx
                if 0 <= new_row < height and 0 <= new_col < width:
                    new_remaining = remaining if grid[new_row][new_col] != 1 else remaining - 1
                    if new_remaining > seen[new_row][new_col]:
                        seen[new_row][new_col] = new_remaining
                        queue.append((new_row, new_col, steps + 1, new_remaining))

        return -1
