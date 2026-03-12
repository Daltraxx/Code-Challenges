from collections import deque
from typing import List


class NearestExit:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        def is_valid(row: int, col: int) -> bool:
            return 0 <= row < height and 0 <= col < width and not seen[row][col] and maze[row][col] != WALL
        
        def is_border(row: int, col: int) -> bool:
            return row == 0 or row == height - 1 or col == 0 or col == width - 1
        
        def is_entrance(row: int, col: int) -> bool:
            return row == entrance_row and col == entrance_col
        

        height = len(maze)
        width = len(maze[0])
        directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
        WALL = "+"
        entrance_row, entrance_col = entrance

        seen = [[False] * width for _ in range(height)]
        seen[entrance_row][entrance_col] = True
        queue = deque([(entrance_row, entrance_col)])
        steps = 0

        while queue:
            size = len(queue)
            for _ in range(size):
                row, col = queue.popleft()
                if is_border(row, col) and not is_entrance(row, col):
                    return steps

                for dy, dx in directions:
                    new_row = row + dy
                    new_col = col + dx
                    if is_valid(new_row, new_col):
                        seen[new_row][new_col] = True
                        queue.append((new_row, new_col))

            steps += 1

        return -1


# Time Complexity: O(m * n) where m is the number of rows
# and n is the number of columns in the maze, as we may need to visit each cell once.
# Space Complexity: O(m * n) for the seen array and the queue in the worst case
# where all cells are empty and we need to visit them all.
