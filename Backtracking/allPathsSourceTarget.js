const allPathsSourceTarget = (graph) => {
  const paths = [];
  const n = graph.length;

  const backtrack = (curr, i) => {
    if (i === n - 1) {
      paths.push([...curr]);
      return;
    }

    const neighbors = graph[i];

    for (let neighbor of neighbors) {
      curr.push(neighbor);
      backtrack(curr, neighbor);
      curr.pop();
    }
  }

  backtrack([], 0);
  return paths;
}
