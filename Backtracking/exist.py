from typing import List


class Exist:
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))

    def exist(self, board: List[List[str]], word: str) -> bool:
        def is_valid(row: int, col: int, next_letter: str) -> bool:
            return (
                row >= 0
                and row < height
                and col >= 0
                and col < width
                and board[row][col] == next_letter
                and not seen[row][col]
            )

        def dfs(letter_count, row: int, col: int) -> bool:
            if letter_count == len(word):
                return True

            seen[row][col] = True
            next_letter = word[letter_count]
            for dy, dx in self.directions:
                new_row = row + dy
                new_col = col + dx
                if is_valid(new_row, new_col, next_letter):
                    if dfs(letter_count + 1, new_row, new_col):
                        return True

            seen[row][col] = False
            return False

        height = len(board)
        width = len(board[0])
        seen = [[False] * width for _ in range(height)]
        first_letter = word[0]
        for row in range(height):
            for col in range(width):
                if board[row][col] == first_letter:
                    if dfs(1, row, col):
                        return True
        return False
    
# Time Complexity: O(M * N * 3^L) where M is the number of rows, 
# N is the number of columns, 
# and L is the length of the word.
# Space Complexity: O(M * N) for the seen matrix 
# and O(L) for the recursion stack.
                    
