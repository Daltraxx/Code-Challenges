const allPathsSourceTarget = (graph) => {
  const backtrack = (curr) => {
    const node = curr[curr.length - 1];
    if (node === target) {
      paths.push([...curr]);
      return;
    }

    for (let neighbor of graph[node]) {
      curr.push(neighbor);
      backtrack(curr);
      curr.pop();
    }
  };

  const paths = [];
  const target = graph.length - 1;
  backtrack([0]);
  return paths;
};

// Time complexity: O(2^n * n) since there can be up to 2^(n-2) paths in the graph,
// and each path can take O(n) time to construct.
// Space complexity: O(n) for the recursion stack and the path storage,
// not including the output, which can be O(2^n * n).
