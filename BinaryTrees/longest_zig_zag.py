from typing import Optional

from tree_node import TreeNode


class LongestZigZag:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(node: Optional[TreeNode], left: int, right: int) -> int:
            nonlocal max_length
            if not node:
                return

            max_length = max(max_length, left, right)
            # If going right, we extend the path whose last move was left.
            # 0 starts a new path in the opposite direction.
            dfs(node.right, 0, left + 1)
            # If going left, we extend the path whose last move was right.
            # 0 starts a new path in the opposite direction.
            dfs(node.left, right + 1, 0)

        max_length = 0
        dfs(root, 0, 0)
        return max_length

    # Time complexity: O(n) where n is the number of nodes in the tree,
    # since we visit each node exactly once.
    # Space complexity: O(h) where h is the height of the tree,
    # due to the recursion stack. 
    # In the worst case of a skewed tree, this can be O(n).