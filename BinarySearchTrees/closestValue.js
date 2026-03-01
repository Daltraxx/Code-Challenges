/*Given the root of a binary search tree and a target value, 
return the value in the BST that is closest to the target. 
If there are multiple answers, print the smallest.

The number of nodes in the tree is in the range [1, 104]*/

const closestValue = (root, target) => {
  let closestValue = root.val;
  let currentNode = root;

  while (currentNode) {
    const closestDifference = Math.abs(target - closestValue);
    const currentDifference = Math.abs(target - currentNode.val);

    // Offer current value as potential answer
    if (
      currentDifference < closestDifference ||
      (currentDifference === closestDifference &&
        currentNode.val < closestValue)
    ) {
      closestValue = currentNode.val;
    }

    // Continue search through left or right child
    currentNode =
      target < currentNode.val ? currentNode.left : currentNode.right;
  }

  return closestValue;
};

// Time complexity: O(h) where h is the height of the tree. 
// In the worst case (skewed tree), this can be O(n). In a balanced tree, this would be O(log n).
// Space complexity: O(1).

// RECURSIVE SOLUTION
const closestValueRecursive = (root, target) => {
  const findClosestValue = (node, closestVal) => {
    if (!node) {
      return closestVal;
    }

    const closestDifference = Math.abs(target - closestVal);
    const currentDifference = Math.abs(target - node.val);

    // Offer current value as potential answer
    if (
      currentDifference < closestDifference ||
      (currentDifference === closestDifference && node.val < closestVal)
    ) {
      closestVal = node.val;
    }

    // Only search in direction that might yield closer value
    if (target < node.val) {
      return findClosestValue(node.left, closestVal);
    } else {
      return findClosestValue(node.right, closestVal);
    }
  };

  return findClosestValue(root, root.val);
};

// Time complexity: O(h) where h is the height of the tree. In the worst case (skewed tree), this can be O(n).
// Space complexity: O(1) for the iterative solution, O(h) for the recursive solution due to call stack.
