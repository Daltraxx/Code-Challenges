/*Given the root of a binary tree, 
find the maximum value v for which there exist different nodes a and b 
where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

- The number of nodes in the tree is in the range [2, 5000].
- node.val is a positive number*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxAncestorDiff = (root) => {
  if (!root) return 0;

  const dfs = (node, minVal, maxVal) => {
    // If end of path,
    // get difference of max and min value on that path and return for comparison
    if (!node) {
      return maxVal - minVal;
    }

    // Update min and max values with current node value
    minVal = Math.min(minVal, node.val);
    maxVal = Math.max(maxVal, node.val);

    // Return max difference of paths
    const left = dfs(node.left, minVal, maxVal);
    const right = dfs(node.right, minVal, maxVal);
    return Math.max(left, right);
  };

  // Start search with root.val as min and max values
  return dfs(root, root.val, root.val);
};

const maxAncestorDiffIterative = (root) => {
  if (!root) return 0;

  let maxDiff = 0;

  const stack = [[root, root.val, root.val]];

  while (stack.length) {
    let [node, minVal, maxVal] = stack.pop();

    minVal = Math.min(minVal, node.val);
    maxVal = Math.max(maxVal, node.val);

    if (!node.left && !node.right) {
      maxDiff = Math.max(maxDiff, maxVal - minVal);
      continue;
    }

    if (node.left) stack.push([node.left, minVal, maxVal]);
    if (node.right) stack.push([node.right, minVal, maxVal]);
  }

  return maxDiff;
};

// Time Complexity: O(n) where n is the number of nodes in the tree. We visit
// each node once.
// Space Complexity: O(h) where h is the height of the tree. In the worst case
// of a skewed tree, the height can be n, so O(n) in the worst case. In a
// balanced tree, the height is log(n), so O(log(n)).
