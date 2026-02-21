/*Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSumRecursive = (root, targetSum) => {
  if (!root) return false;

  targetSum -= root.val;

  // Check if we are at a leaf node and if the targetSum has been reduced to 0
  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  // If left or right subtree has a path sum that equals the remaining targetSum, return true
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

const hasPathSumIterative = (root, targetSum) => {
  if (!root) {
    return false;
  }

  const stack = [];
  stack.push([root, 0]);

  while (stack.length) {
    let [currentNode, currentSum] = stack.pop();
    currentSum += currentNode.val;

    // If we are at a leaf node, check if currentSum equals targetSum
    if (!currentNode.left && !currentNode.right) {
      if (currentSum === targetSum) return true;
    }

    // Push any children to the stack to keep following the path
    if (currentNode.left) stack.push([currentNode.left, currentSum]);
    if (currentNode.right) stack.push([currentNode.right, currentSum]);
  }

  return false;
};

// Time Complexity: O(n) where n is the number of nodes in the tree, as we may have to visit each node once.
// Space Complexity: O(n) in the worst case of a completely unbalanced tree, and O(log n) in the best case of a balanced tree due to the recursive call stack or the stack used for iteration.
