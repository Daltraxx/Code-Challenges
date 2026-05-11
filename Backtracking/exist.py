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
                    letter_count += 1
                    if dfs(letter_count, new_row, new_col):
                        return True
                    letter_count -= 1

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
    
# Time Complexity: O(N * 3^L) where N is the number of cells in the board 
# and L is the length of the word.
# Space Complexity: O(L) where L is the length of the word. 
# This is the space used by the recursion stack.
                    
