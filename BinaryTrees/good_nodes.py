from typing import Optional

from tree_node import TreeNode


class GoodNodes:

    def goodNodes(self, root: TreeNode):
        def dfs(node: Optional[TreeNode], prev_max_sum: int):
            if not node:
                return 0

            if node.val >= prev_max_sum:
                return 1 + dfs(node.left, node.val) + dfs(node.right, node.val)
            else:
                return dfs(node.left, prev_max_sum) + dfs(node.right, prev_max_sum)
            
        return dfs(root, float('-inf'))

# Time complexity: O(n) where n is the number of nodes in the binary tree. We visit each node once.
# Space complexity: O(n) in the worst case of a completely unbalanced tree, where the height of the tree is n.