from typing import List


class TotalNQueens:
    def totalNQueens(self, n: int) -> int:
        def backtrack(row: int, unsafe_cols: set[int], unsafe_left: set[int], unsafe_right: set[int]):
            if row == n:
                return 1

            solutions = 0
            for col in range(n):
                if col not in unsafe_cols:
                    left_diag_id = row + col
                    right_diag_id = row - col
                    if left_diag_id not in unsafe_left and right_diag_id not in unsafe_right:
                        unsafe_cols.add(col)
                        unsafe_left.add(left_diag_id)
                        unsafe_right.add(right_diag_id)
                        solutions += backtrack(row + 1, unsafe_cols, unsafe_left, unsafe_right)
                        unsafe_cols.remove(col)
                        unsafe_left.remove(left_diag_id)
                        unsafe_right.remove(right_diag_id)

            return solutions

        return backtrack(0, set(), set(), set())

    # Time complexity: O(n!) in the worst case,
    # because in the first row we have n choices for placing a queen,
    # in the second row we have at most n-1 choices
    # (since one column is already occupied by the first queen), and so on.
    # Space complexity: O(n) for the recursion stack and the sets used to track unsafe positions.