from typing import Optional

from tree_node import TreeNode


class GoodNodes:

    def good_nodes(self, root: TreeNode):
        def dfs(node: Optional[TreeNode], prev_max_val: int):
            if not node:
                return 0

            good_node_contribution = 1 if node.val >= prev_max_val else 0
            updated_max_val = max(node.val, prev_max_val)
            return (
                good_node_contribution
                + dfs(node.left, updated_max_val)
                + dfs(node.right, updated_max_val)
            )

        return dfs(root, float("-inf"))


# Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
# Space complexity: O(n) in the worst case of a completely unbalanced tree, where the height of the tree is n.
