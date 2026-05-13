from typing import List


class NumsSameConsecDiff:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        def backtrack(curr: int, last_digit: int, digit_count: int):
            if digit_count == n:
                ans.append(curr)
                return

            # Using a set to avoid duplicates when k is 0, 
            # as last_digit + k and last_digit - k would be the same.
            for new_digit in {last_digit + k, last_digit - k}:
                if 0 <= new_digit < 10:
                    backtrack(curr * 10 + new_digit, new_digit, digit_count + 1)

        ans = []
        for start in range(1, 10):
            backtrack(start, start, 1)
        return ans

    # Time complexity: O(2^n) in the worst case, 
    # as each digit can lead to two possible next digits (last_digit + k and last_digit - k).
    # Space complexity: O(n) for the recursion stack, 
    # as the maximum depth of the recursion is n.