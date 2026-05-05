const longestZigZag = (root) => {
  const dfs = (node, left, right) => {
    if (!node) {
      return;
    }

    maxLength = Math.max(left, right, maxLength);

    // If going right, we extend the path whose last move was left. 
    // 0 starts a new path in the other direction.
    dfs(node.right, 0, left + 1);
    // If going left, we extend the path whose last move was right. 
    // 0 starts a new path in the other direction.
    dfs(node.left, right + 1, 0);
  };

  let maxLength = 0;
  dfs(root, 0, 0);
  return maxLength;
};
