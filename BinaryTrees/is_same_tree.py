from typing import Optional

from tree_node import TreeNode


class IsSameTree:

    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True

        if p and not q or q and not p:
            return False

        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)


# Time Complexity: O(n) where n is the number of nodes in the smaller of the two trees.
# In the worst case, we might have to visit all nodes of both trees.
# Space Complexity: O(h) where h is the height of the tree.
# In the worst case of a skewed tree, the height could be O(n), leading to O(n) space complexity due to the recursive call stack.
# In the best case of a balanced tree, the height would be O(log n), leading to O(log n) space complexity.
