from typing import Optional

from BinaryTrees.tree_node import TreeNode


class GetMinimumDifference:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        min_difference = float("inf")
        prev_val = None

        def dfs(node: Optional[TreeNode]) -> None:
            if not node:
                return

            dfs(node.left)
            nonlocal min_difference, prev_val
            if prev_val is not None:
                min_difference = min(node.val - prev_val, min_difference)
            prev_val = node.val
            dfs(node.right)

        dfs(root)
        return min_difference

# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(h) where h is the height of the tree, which in the
# worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is O(log n).