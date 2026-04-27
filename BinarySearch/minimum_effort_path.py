from typing import List


class MinimumEffortPath:
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    # BINARY SEARCH WITH ITERATIVE DFS SOLUTION
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        def is_valid(row: int, col: int, seen: List[List[bool]]) -> bool:
            return (
                row >= 0
                and row < grid_height
                and col >= 0
                and col < grid_width
                and not seen[row][col]
            )

        def dfs(effort: int) -> bool:
            seen = [[False] * grid_width for _ in heights]
            seen[0][0] = True
            stack = [(0, 0)]
            while stack:
                row, col = stack.pop()
                if row == grid_height - 1 and col == grid_width - 1:
                    return True
                for dy, dx in self.directions:
                    new_row = row + dy
                    new_col = col + dx
                    if (
                        is_valid(new_row, new_col, seen)
                        and abs(heights[row][col] - heights[new_row][new_col]) <= effort
                    ):
                        seen[new_row][new_col] = True
                        stack.append((new_row, new_col))

            return False

        grid_height = len(heights)
        grid_width = len(heights[0])
        left = 0
        right = max(max(row) for row in heights)
        while left <= right:
            mid = (left + right) // 2
            if dfs(mid):
                right = mid - 1
            else:
                left = mid + 1

        # Left will be the minimum effort possible
        return left
    
    # Time complexity: O((m * n) * log(k)) where m and n are the dimensions of the grid, 
    # and k is the maximum possible effort 
    # (the max height found, though could be improved with finding max difference instead).
    # The log(k) factor comes from the binary search on the effort values,
    # and the O(m * n) factor comes from the DFS traversal for each effort value.
    # Space complexity: O(m * n) for the seen array used in DFS,
    # and O(m * n) in the worst case for the stack used in DFS (if the path covers the entire grid).

    # BINARY SEARCH WITH RECURSIVE DFS SOLUTION
    # Note: Not recommended due to potential stack overflow with large inputs, 
    # but included for completeness.
    def minimumEffortPathRecursive(self, heights: List[List[int]]) -> int:
        def is_valid(row: int, col: int, seen: List[List[bool]]) -> bool:
            return (
                row >= 0
                and row < grid_height
                and col >= 0
                and col < grid_width
                and not seen[row][col]
            )

        def dfs(row: int, col: int, effort: int, seen: List[List[bool]]) -> bool:
            if row == grid_height - 1 and col == grid_width - 1:
                return True

            seen[row][col] = True
            for dy, dx in self.directions:
                new_row = row + dy
                new_col = col + dx
                if (
                    is_valid(new_row, new_col, seen)
                    and abs(heights[row][col] - heights[new_row][new_col]) <= effort
                ):
                    path_found = dfs(new_row, new_col, effort, seen)
                    if path_found:
                        return True
            return False

        grid_height = len(heights)
        grid_width = len(heights[0])
        left = 0
        right = max(max(row) for row in heights)
        while left <= right:
            mid = (left + right) // 2
            if dfs(0, 0, mid, [[False] * grid_width for _ in heights]):
                right = mid - 1
            else:
                left = mid + 1

        # Left will be the minimum effort possible
        return left
