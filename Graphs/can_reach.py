from typing import List


class CanReach:
    def canReach(self, arr: List[int], start: int) -> bool:
        n = len(arr)
        seen = [False] * n
        seen[start] = True
        stack = [start]
        while stack:
            index = stack.pop()
            val = arr[index]
            if val == 0:
                return True
            left_jump, right_jump = index - val, index + val
            for jump_index in (left_jump, right_jump):
                if 0 <= jump_index < n and not seen[jump_index]:
                    seen[jump_index] = True
                    stack.append(jump_index)

        return False


# Time complexity: O(n) - we visit each index at most once
# Space complexity: O(n) - we use a seen array to keep track of visited indices
