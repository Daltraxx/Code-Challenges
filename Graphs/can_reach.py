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
            left_jump = index - val
            if left_jump >= 0 and not seen[left_jump]:
                seen[left_jump] = True
                stack.append(left_jump)
            right_jump = index + val
            if right_jump < n and not seen[right_jump]:
                seen[right_jump] = True
                stack.append(right_jump)

        return False

# Time complexity: O(n) - we visit each index at most once
# Space complexity: O(n) - we use a seen array to keep track of visited indices