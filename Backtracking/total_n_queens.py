from typing import List


class TotalNQueens:
    def totalNQueens(self, n: int) -> int:
        def backtrack(row: int, unsafe_cols: set[int], unsafe_anti_diag: set[int], unsafe_diag: set[int]):
            if row == n:
                return 1

            solutions = 0
            for col in range(n):
                if col not in unsafe_cols:
                    anti_diag_id = row + col
                    diag_id = row - col
                    if anti_diag_id not in unsafe_anti_diag and diag_id not in unsafe_diag:
                        unsafe_cols.add(col)
                        unsafe_anti_diag.add(anti_diag_id)
                        unsafe_diag.add(diag_id)
                        solutions += backtrack(row + 1, unsafe_cols, unsafe_anti_diag, unsafe_diag)
                        unsafe_cols.remove(col)
                        unsafe_anti_diag.remove(anti_diag_id)
                        unsafe_diag.remove(diag_id)

            return solutions

        return backtrack(0, set(), set(), set())

    # Time complexity: O(n!) in the worst case,
    # because in the first row we have n choices for placing a queen,
    # in the second row we have at most n-1 choices
    # (since one column is already occupied by the first queen), and so on.
    # Space complexity: O(n) for the recursion stack and the sets used to track unsafe positions.