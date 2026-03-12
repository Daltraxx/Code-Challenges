from collections import deque
from math import ceil
from typing import List


class SnakesAndLadders:

    def snakesAndLadders(self, board: List[List[int]]) -> int:
        def get_position(square: int) -> tuple[int, int]:
            # Get row from bottom of square
            row_from_bottom = (square - 1) // n
            # Flip position of row since matrices are indexed from stop
            row = n - 1 - row_from_bottom
            # Get normal position of square within the row
            col = (square - 1) % n
            # If direction is reversed, flip the column
            left_to_right = row_from_bottom % 2 == 0
            if not left_to_right:
                col = n - 1 - col
            return (row, col)

        n = len(board)

        end_square = n**2
        seen = [False] * (end_square + 1)
        seen[1] = True
        queue = deque([1])
        rolls = 0
        while queue:
            rolls += 1
            size = len(queue)
            for _ in range(size):
                square = queue.popleft()
                for roll in range(1, 7):
                    new_square = square + roll
                    new_row, new_col = get_position(new_square)
                    if board[new_row][new_col] != -1:
                        new_square = board[new_row][new_col]
                    if new_square == end_square:
                        return rolls
                    if not seen[new_square]:
                        seen[new_square] = True
                        queue.append(new_square)

        return -1


# Time Complexity: O(n^2) where n is the number of rows (or columns) in the board, 
# as we may need to visit each square once.
# Space Complexity: O(n^2) for the seen array and the queue 
# in the worst case where we need to visit all squares.
