/*Given a binary tree root, 
a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.*/

const goodNodesRecursive = (root) => {
  const dfs = (node, maxSoFar) => {
    // If tree/subtree is empty, no good nodes
    if (!node) {
      return 0;
    }

    // Count of good nodes will equal the number of good nodes found in the left and right subtrees
    const updatedMaxSoFar = Math.max(maxSoFar, node.val);
    const left = dfs(node.left, updatedMaxSoFar);
    const right = dfs(node.right, updatedMaxSoFar);
    let goodNodesCount = left + right;

    // If current node is good node, include in count
    if (node.val >= maxSoFar) goodNodesCount++;

    return goodNodesCount;
  };

  return dfs(root, -Infinity);
};

const goodNodesIterative = (root) => {
  if (!root) {
    return 0;
  }

  let goodNodesCount = 0;
  const stack = [];
  stack.push([root, -Infinity]);

  while (stack.length) {
    let [currentNode, maxSoFar] = stack.pop();

    // If current value is greater than prev maxSoFar, good node so increment count
    if (currentNode.val >= maxSoFar) goodNodesCount++;
    // Keep maxSoFar updated
    maxSoFar = Math.max(maxSoFar, currentNode.val);

    // Push existing children to stack to continue down tree
    if (currentNode.left) stack.push([currentNode.left, maxSoFar]);
    if (currentNode.right) stack.push([currentNode.right, maxSoFar]);
  }

  return goodNodesCount;
};

// Time: O(n) where n is number of nodes in tree, we have to visit each node once
// Space: O(n) in worst case of skewed tree, O(log n) in best case of balanced tree due to recursive call stack or iterative stack size