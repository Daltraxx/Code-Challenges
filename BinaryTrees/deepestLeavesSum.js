/*Given the root of a binary tree, 
return the sum of values of its deepest leaves.*/

const deepestLeavesSum = (root) => {
  if (root == null) {
    return 0;
  }

  let deepestLeavesSum;

  let queue = [root];

  while (queue.length) {
    const nextLevelQueue = [];
    deepestLeavesSum = 0;

    for (let node of queue) {
      deepestLeavesSum += node.val;
      if (node.left) nextLevelQueue.push(node.left);
      if (node.right) nextLevelQueue.push(node.right);
    }
    queue = nextLevelQueue;
  }

  return deepestLeavesSum;
};

// Time Complexity: O(n) where n is the number of nodes in the tree,
// as we visit each node once.
// Space Complexity: O(w) where w is the maximum width of the tree,
// which is the maximum number of nodes at any level.
// In the worst case (a complete binary tree), the width would be O(n/2) = O(n).
// In the best case of a skewed tree, the width would be O(1), leading to O(1)
// space complexity.
