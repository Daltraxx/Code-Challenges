const canReach = (arr, start) => {
  const dfs = (index) => {
    const val = arr[index];
    if (val === 0) {
      return true;
    }
    seen[index] = true;

    const leftJumpIndex = index - val;
    const foundLeft =
      leftJumpIndex >= 0 && !seen[leftJumpIndex] && dfs(leftJumpIndex);
    if (foundLeft) return true;

    const rightJumpIndex = index + val;
    const foundRight =
      rightJumpIndex < n && !seen[rightJumpIndex] && dfs(rightJumpIndex);
    if (foundRight) return true;

    return false;
  };

  const n = arr.length;
  const seen = new Array(arr.length).fill(false);
  return dfs(start);
};

// Time complexity: O(n) - we visit each index at most once
// Space complexity: O(n) - we use a seen array to keep track of visited indices