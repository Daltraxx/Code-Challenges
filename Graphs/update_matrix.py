from collections import deque
from typing import List


class UpdateMatrix:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        def is_valid(row: int, col: int) -> bool:
            return 0 <= row < height and 0 <= col < width and distances[row][col] == -1

        directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
        height = len(mat)
        width = len(mat[0])
        # Distances doubles as seen list
        distances = [[-1] * width for _ in range(height)]
        queue = deque()

        # Prepare for BFS
        for row in range(height):
            for col in range(width):
                if mat[row][col] == 0:
                    distances[row][col] = 0
                    queue.append((row, col, 0))

        # BFS
        while queue:
            row, col, steps = queue.popleft()
            for dy, dx in directions:
                new_row = row + dy
                new_col = col + dx
                new_steps = steps + 1
                if is_valid(new_row, new_col):
                    distances[new_row][new_col] = new_steps
                    queue.append((new_row, new_col, new_steps))

        return distances

# Time Complexity: O(m * n) where m and n are the dimensions of the matrix,
# as we may need to visit each cell once during the BFS in the worst case.
# Space Complexity: O(m * n) for the distances matrix and the queue in the worst case.