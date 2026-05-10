const deleteNode = (root, key) => {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Handles cases where there is one child or no children
    if (!root.right) return root.left;
    if (!root.left) return root.right;
    // Find in-order successor
    let curr = root.right;
    while (curr.left) {
      curr = curr.left;
    }
    root.val = curr.val;
    root.right = deleteNode(root.right, curr.val);
  }

  return root;
};

// Time Complexity: O(h) where h is the height of the tree
// Space Complexity: O(h) due to recursive stack space