from typing import Optional

from tree_node import TreeNode


class HasPathSum:
    def has_path_sum(self, root: Optional[TreeNode], target_sum: int) -> bool:
        if not root:
            return False

        if not root.left and not root.right:
            return target_sum - root.val == 0

        valid_left_path = self.has_path_sum(root.left, target_sum - root.val)
        valid_right_path = self.has_path_sum(root.right, target_sum - root.val)

        return valid_left_path or valid_right_path


# Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
# Space complexity: O(n) in the worst case of a completely unbalanced tree, where the height of the tree is n.
