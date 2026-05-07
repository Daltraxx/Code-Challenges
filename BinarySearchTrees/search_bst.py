from BinaryTrees.tree_node import TreeNode


class SearchBST:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        if not root:
            return None
        if root.val == val:
            return root

        if val < root.val:
            return self.searchBST(root.left, val)

        return self.searchBST(root.right, val)
    
    # Time complexity: O(h) where h is the height of the tree, 
    # since in the worst case of a skewed tree 
    # we might have to traverse from the root to a leaf node.
    # Space complexity: O(h) due to the recursion stack. 
    # In the worst case of a skewed tree, this can be O(n).
    
    def searchBSTIterative(self, root: TreeNode, val: int) -> TreeNode:
      if not root:
        return None
      
      while True:
          if root.val == val:
            return root
          if val < root.val and root.left:
              root = root.left
          elif val > root.val and root.right:
              root = root.right
          else:
            return None
          
    # Same time complexity as recursive approach, but O(1) space complexity.