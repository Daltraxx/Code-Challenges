const maximumDetonation = (bombs) => {
  const setEdges = (bomb1, bomb2) => {
    const [x1, y1, r1] = bombs[bomb1];
    const [x2, y2, r2] = bombs[bomb2];

    const distanceSquared = (x1 - x2) ** 2 + (y1 - y2) ** 2;
    const r1Squared = r1 ** 2;
    const r2Squared = r2 ** 2;

    if (r1Squared >= distanceSquared) graph[bomb1].push(bomb2);
    if (r2Squared >= distanceSquared) graph[bomb2].push(bomb1);
  };

  const dfs = (bomb, seen) => {
    seen.add(bomb);
    let detonations = 1;

    for (let neighbor of graph[bomb]) {
      if (!seen.has(neighbor)) {
        detonations += dfs(neighbor, seen);
      }
    }

    return detonations;
  };

  const n = bombs.length;
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      setEdges(i, j);
    }
  }

  let maxDetonations = 0;
  for (let bomb = 0; bomb < n; bomb++) {
    maxDetonations = Math.max(dfs(bomb, new Set()), maxDetonations);
  }

  return maxDetonations;
};

// Time Complexity: O(n^3) - We check each pair of bombs to build the graph,
// and in the worst case, we may visit all bombs for each bomb during DFS.
// Space Complexity: O(n^2) - The graph can have up to n^2 edges in the worst
// case, and we also use O(n) space for the seen set during DFS.
