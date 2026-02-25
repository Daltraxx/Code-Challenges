from typing import Optional

from tree_node import TreeNode


class DiameterOfBinaryTree:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def dfs(node: TreeNode):
            if not node:
                return 0

            left_longest = dfs(node.left)
            right_longest = dfs(node.right)

            nonlocal diameter
            diameter = max(left_longest + right_longest, diameter)

            return 1 + max(left_longest, right_longest)

        dfs(root)
        return diameter

# Time Complexity: O(n) where n is the number of nodes in the tree, as we visit each node once.
# Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack. 
# In the worst case of a skewed tree, the height could be O(n), leading to O(n) space complexity. 
# In the best case of a balanced tree, the height would be O(log n), leading to O(log n) space complexity.