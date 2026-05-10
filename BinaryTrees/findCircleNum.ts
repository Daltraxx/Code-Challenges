const findCircleNum = (isConnected: number[][]): number => {
  const dfs = (city: number) => {
    seen[city] = true;
    const neighbors = isConnected[city];
    for (let i = 0; i < n; i++) {
      if (neighbors[i] === 1 && !seen[i]) {
        dfs(i);
      }
    }
  }

  const n = isConnected.length;
  const seen = new Array(n).fill(false);
  let provinceCount = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      provinceCount++;
      dfs(i);
    }
  }

  return provinceCount;
}

// Time complexity: O(n^2) because each DFS scans entire row of the adjacency matrix,
// and every city is visited at most once.
// Space complexity: O(n) for the recursion stack and the seen array.