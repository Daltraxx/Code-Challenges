from typing import Optional

from tree_node import TreeNode


class MaxAncestorDiff:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        def dfs(node: TreeNode, max_val: int, min_val: int) -> int:
            if not node:
                return max_val - min_val

            new_max_val = max(node.val, max_val)
            new_min_val = min(node.val, min_val)

            max_left = dfs(node.left, new_max_val, new_min_val)
            max_right = dfs(node.right, new_max_val, new_min_val)

            return max(max_left, max_right)

        return dfs(root, root.val, root.val)


# Time Complexity: O(n) where n is the number of nodes in the tree.
# Space Complexity: O(h) where h is the height of the tree.
# In the worst case of a skewed tree, the height could be O(n),
# leading to O(n) space complexity due to the recursive call stack.
# In the best case of a balanced tree, the height would be O(log n),
# leading to O(log n) space complexity.
