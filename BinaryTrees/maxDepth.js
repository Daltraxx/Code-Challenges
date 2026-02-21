/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxDepthRecursive = (root) => {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

const maxDepthIterative = (root) => {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;

  const stack = [];
  stack.push([root, 1]);

  while (stack.length) {
    let [currentNode, currentDepth] = stack.pop();

    maxDepth = Math.max(maxDepth, currentDepth);

    if (currentNode.left) stack.push([currentNode.left, currentDepth + 1]);
    if (currentNode.right) stack.push([currentNode.right, currentDepth + 1]);
  }

  return maxDepth;
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) in the worst case of a skewed tree, O(log n) in the best case of a balanced tree