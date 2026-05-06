from collections import deque
from typing import Optional

from tree_node import TreeNode


class MaxLevelSum:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        ans = 0
        if not root:
            return ans

        queue = deque([root])
        level = 0
        max_sum = float("-inf")
        while queue:
            level += 1
            level_size = len(queue)
            level_sum = 0
            for _ in range(level_size):
                curr = queue.popleft()
                level_sum += curr.val
                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
            if level_sum > max_sum:
                ans = level
                max_sum = level_sum
        return ans

    # Time complexity: O(n) where n is the number of nodes in the tree, 
    # since we visit each node exactly once.
    # Space complexity: O(m) where m is the maximum number of nodes at any level in the tree, 
    # which is the width of the tree.