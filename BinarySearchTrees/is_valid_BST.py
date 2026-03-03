from typing import Optional

from BinaryTrees.tree_node import TreeNode


class IsValidBST:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def dfs(node: Optional[TreeNode], lower_limit: int, upper_limit: int) -> bool:
            if not node:
                return True

            if not lower_limit < node.val < upper_limit:
                return False

            left_valid = dfs(node.left, lower_limit, node.val)
            right_valid = dfs(node.right, node.val, upper_limit)

            return left_valid and right_valid

        return dfs(root, float("-inf"), float("inf")) # type: ignore

# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(h) where h is the height of the tree, which in the
# worst case (a skewed tree) is O(n) and in the best case (a balanced tree) is O(log n).