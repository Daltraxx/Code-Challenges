from typing import Optional

from tree_node import TreeNode


class HasPathSum:
    def has_path_sum(self, root: Optional[TreeNode], target_sum: int) -> int:
        if not root:
            return False

        if not root.left and not root.right:
            return target_sum - root.val == 0

        return self.has_path_sum(root.left, target_sum - root.val) or self.has_path_sum(
            root.right, target_sum - root.val
        )

# Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
# Space complexity: O(h) where h is the height of the binary tree.