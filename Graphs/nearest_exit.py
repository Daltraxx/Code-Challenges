from collections import deque
from typing import List


class NearestExit:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        def is_out(row: int, col: int) -> bool:
            return row < 0 or row >= height or col < 0 or col >= width

        height = len(maze)
        width = len(maze[0])
        directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
        WALL = "+"

        seen = [[False] * width for _ in range(height)]
        seen[entrance[0]][entrance[1]] = True
        queue = deque([(entrance[0], entrance[1])])
        steps = 0

        while queue:
            size = len(queue)
            for _ in range(size):
                row, col = queue.popleft()

                for dy, dx in directions:
                    new_row = row + dy
                    new_col = col + dx
                    if is_out(new_row, new_col):
                        if row != entrance[0] or col != entrance[1]:
                            return steps
                    elif not seen[new_row][new_col] and maze[new_row][new_col] != WALL:
                        seen[new_row][new_col] = True
                        queue.append((new_row, new_col))

            steps += 1

        return -1


# Time Complexity: O(m * n) where m is the number of rows
# and n is the number of columns in the maze, as we may need to visit each cell once.
# Space Complexity: O(m * n) for the seen array and the queue in the worst case
# where all cells are empty and we need to visit them all.
