/*Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].*/

const rangeSumBST = (root, low, high) => {
  if (root == null) {
    return 0;
  }

  let sum = 0;

  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  if (root.val > low) {
    sum += rangeSumBST(root.left, low, high);
  }

  if (root.val < high) {
    sum += rangeSumBST(root.right, low, high);
  }

  return sum;
};

const rangeSumBSTIterative = (root, low, high) => {
  let sum = 0;

  if (root == null) {
    return sum;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (node.val > low && node.left) stack.push(node.left);
    if (node.val < high && node.right) stack.push(node.right);
  }

  return sum;
};

// Time Complexity: O(n) where n is the number of nodes in the tree. In the
// worst case (a skewed tree or all nodes within the range), we may have to
// visit all nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree, which in the worst
// case (a skewed tree) is O(n) and in the best case (a balanced tree) is O(log n).
