from typing import Optional

from tree_node import TreeNode


class LongestZigZag:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(node: Optional[TreeNode], left_length: int, right_length: int) -> int:
            nonlocal max_length
            if not node:
                return

            max_length = max(max_length, left_length, right_length)
            dfs(node.right, right_length + 1, 0)
            dfs(node.left, 0, left_length + 1)

        max_length = 0
        dfs(root, 0, 0)
        return max_length

    # Time complexity: O(n) where n is the number of nodes in the tree,
    # since we visit each node exactly once.
    # Space complexity: O(h) where h is the height of the tree,
    # due to the recursion stack. 
    # In the worst case of a skewed tree, this can be O(n).