from typing import List


class GenerateParenthesis:
    def generateParenthesis(self, n: int) -> List[str]:
        def backtrack(curr: List[str], left_count: int, right_count: int):
            if left_count == n and right_count == n:
                combinations.append("".join(curr))
                return

            if left_count < n:
                curr.append("(")
                backtrack(curr, left_count + 1, right_count)
                curr.pop()
            if right_count < left_count:
                curr.append(")")
                backtrack(curr, left_count, right_count + 1)
                curr.pop()

        combinations = []
        backtrack(["("], 1, 0)
        return combinations

    # Time complexity: Can be approximated as O(2^n) because we are generating all valid combinations of parentheses, 
    # and all possible combinations of parentheses can be represented as a binary tree with 2^n nodes.
    # Space complexity: O(n) because at most we will have n opening parentheses in the current combination, 
    # which takes O(n) space.