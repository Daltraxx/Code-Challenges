const allPathsSourceTarget = (graph) => {
  const paths = [];
  const n = graph.length;
  const target = n - 1;

  const backtrack = (curr, i) => {
    curr.push(i);

    if (i === target) {
      paths.push([...curr]);
      curr.pop(i);
      return;
    }

    const neighbors = graph[i];

    for (let neighbor of neighbors) {
      backtrack(curr, neighbor);
    }

    curr.pop(i);
  }

  backtrack([], 0);
  return paths;
}

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));