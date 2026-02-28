from typing import Optional

from BinaryTrees.tree_node import TreeNode


class InsertIntoBST:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return TreeNode(val)

        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else: 
            root.right = self.insertIntoBST(root.right, val)

        return root

# Time Complexity: O(h) where h is the height of the tree. 
# In the worst case of a skewed tree, the height could be O(n), 
# or O(log n) in the best case of a balanced tree.
# Space Complexity: O(h) due to the recursive call stack.