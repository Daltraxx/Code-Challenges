const allPathsSourceTarget = (graph) => {
  const paths = [];
  const target = graph.length - 1;

  const backtrack = (curr, i) => {
    if (i === target) {
      paths.push([...curr]);
      return;
    }

    const neighbors = graph[i];

    for (let neighbor of neighbors) {
      curr.push(neighbor);
      backtrack(curr, neighbor);
      curr.pop(neighbor);
    }
  }

  backtrack([0], 0);
  return paths;
}

// Time O(2^n⋅n)
// Space O(n)

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));