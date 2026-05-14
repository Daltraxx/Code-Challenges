from collections import deque
from typing import List


class OrangesRotting:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        def is_valid(row: int, col: int) -> bool:
            return (
                0 <= row < height
                and 0 <= col < width
                and grid[row][col] == FRESH
            )

        directions = ((1, 0), (-1, 0), (0, 1), (0, -1))
        FRESH = 1
        ROTTEN = 2
        height = len(grid)
        width = len(grid[0])
        queue = deque()
        fresh_remaining = 0
        for row in range(height):
            for col in range(width):
                cell = grid[row][col]
                if cell == FRESH:
                    fresh_remaining += 1
                elif cell == ROTTEN:
                    queue.append((row, col))

        minutes = 0
        if fresh_remaining == 0:
            return minutes
        while queue:
            minutes += 1
            level_size = len(queue)
            for _ in range(level_size):
                row, col = queue.popleft()
                for dy, dx in directions:
                    new_row = row + dy
                    new_col = col + dx
                    if is_valid(new_row, new_col):
                        grid[new_row][new_col] = ROTTEN
                        fresh_remaining -= 1
                        if fresh_remaining == 0:
                             return minutes
                        queue.append((new_row, new_col))
        
        return -1
    
    # Time complexity: O(m * n) where m and n are the dimensions of the grid.
    # We visit each cell once to count fresh oranges and enqueue rotten oranges, 
    # and we may visit each cell again when processing the queue.
    # Space complexity: O(m * n) for the queue in the worst case when all oranges are rotten.