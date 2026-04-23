from typing import List


class SearchMatrix:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        height = len(matrix)
        width = len(matrix[0])
        left = 0
        right = height * width - 1
        while left <= right:
            mid = (left + right) // 2
            row = mid // width
            col = mid % width
            curr_num = matrix[row][col]
            if curr_num == target:
                return True
            elif curr_num > target:
                right = mid - 1
            else:
                left = mid + 1

        return False

    # Time complexity: O(log (m * n)) where m is the number of rows 
    # and n is the number of columns in the input matrix.
    # This is because we are halving the search space in each iteration of the loop, 
    # and the search space is the total number of elements in the matrix, 
    # which is m * n.
    # Space complexity: O(1)