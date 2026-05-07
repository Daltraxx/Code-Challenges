const maxLevelSum = (root) => {
  let smallestMaxLevelSum = 0;
  let maxSum = -Infinity;
  let queue = [root];
  let currLevel = 0;
  while (queue.length) {
    currLevel++;
    const nextQueue = [];
    let levelSum = 0;
    for (const node of queue) {
      levelSum += node.val;
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    if (levelSum > maxSum) {
      maxSum = levelSum;
      smallestMaxLevelSum = currLevel;
    }
    queue = nextQueue;
  }
  return smallestMaxLevelSum;
};

// Time complexity: O(n) where n is the number of nodes in the tree, 
// since we visit each node exactly once.
// Space complexity: O(m) where m is the maximum number of nodes at any level in the tree (the width), 
// since we store the nodes of each level in a queue.