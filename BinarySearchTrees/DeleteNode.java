package BinarySearchTrees;

public class DeleteNode {
  public TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) {
      return null;
    }

    if (key < root.val) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
      root.right = deleteNode(root.right, key);
    } else {
      // Found target
      if (root.right == null)
        return root.left;
      if (root.left == null)
        return root.right;

      // If both children present, get in-order successor
      TreeNode current = root.right;
      while (current.left != null) {
        current = current.left;
      }
      // Use in-order successor's val for deleted node
      root.val = current.val;
      // Continue down tree to complete deletion
      root.right = deleteNode(root.right, current.val);
    }

    return root;
  }
}

// Time Complexity: O(h) where h is the height of the tree.
// In the worst case, h can be O(n) for a skewed tree,
// and O(log n) for a balanced tree.
// Space Complexity: O(h) due to recursive call stack.