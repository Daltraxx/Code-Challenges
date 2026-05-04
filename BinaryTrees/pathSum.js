const pathSum = (root, targetSum) => {
  const dfs = (node, prevSum) => {
    if (!node) {
      return 0;
    }

    const currSum = prevSum + node.val;
    let count = prefixMap.get(currSum - targetSum) || 0;
    prefixMap.set(currSum, (prefixMap.get(currSum) || 0) + 1);
    count += dfs(node.left, currSum) + dfs(node.right, currSum);

    // Backtrack
    prefixMap.set(currSum, prefixMap.get(currSum) - 1);

    return count;
  };

  const prefixMap = new Map();
  prefixMap.set(0, 1);
  return dfs(root, 0);
};

// Time Complexity: O(n) where n is the number of nodes in the tree. 
// We visit each node once.
// Space Complexity: O(n) in the worst case when the tree is skewed. 
// The prefixMap can grow up to O(n) in size, 
// and the recursion stack can also grow up to O(n) in the worst case.