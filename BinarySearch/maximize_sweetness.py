from typing import List


class MaximizeSweetness:
    def maximizeSweetness(self, sweetness: List[int], k: int) -> int:
        def check(min_sweetness: int):
            curr_sweetness = 0
            cuts = 0
            for i in range(len(sweetness)):
                piece = sweetness[i]
                curr_sweetness += piece
                if curr_sweetness >= min_sweetness:
                    cuts += 1
                    curr_sweetness = 0
                    if cuts == k + 1:
                        return True
            return False

        left = 1
        right = sum(sweetness) // (k + 1)
        while left <= right:
            mid = (left + right) // 2
            if check(mid):
                left = mid + 1
            else:
                right = mid - 1

        return right

    # Time complexity: O(n log k) where n is the length of the sweetness array and k is the number of cuts.
    # The O(n) factor comes from the check function which iterates through the sweetness array
    # and the O(log k) factor comes from the binary search on the minimum sweetness value.
    # Space complexity: O(1).