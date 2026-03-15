const calcEquation = (equations, values, queries) => {
  const dfs = (start, end) => {
    if (!graph.has(start) || !graph.has(end)) {
      return -1;
    }

    const seen = new Set([start]);
    // Stack will hold pairs of [node, ratio]
    // where ratio is the product of weights from the start node to the current node.
    const stack = [[start, 1]];

    while (stack.length) {
      let [node, ratio] = stack.pop();

      if (node === end) {
        return ratio;
      }

      for (let [neighbor, weight] of graph.get(node)) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          stack.push([neighbor, weight * ratio]);
        }
      }
    }

    return -1;
  };

  // Build the graph as an adjacency list where 
  // each node maps to a map of its neighbors and the corresponding edge weights.
  const graph = new Map();
  for (let i = 0; i < equations.length; i++) {
    let [numerator, denominator] = equations[i];

    if (!graph.has(numerator)) graph.set(numerator, new Map());
    if (!graph.has(denominator)) graph.set(denominator, new Map());

    graph.get(numerator).set(denominator, values[i]);
    graph.get(denominator).set(numerator, 1 / values[i]);
  }

  const answers = [];
  for (const [start, end] of queries) {
    answers.push(dfs(start, end));
  }

  return answers;
};

const calcEquationRecursive = (equations, values, queries) => {
  const dfs = (start, end, ratio) => {
    if (!graph.has(start)) {
      return -1;
    }

    if (start === end) {
      return ratio;
    }

    for (let [neighbor, weight] of graph.get(start)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        const search = dfs(neighbor, end, ratio * weight);
        if (search !== -1) {
          return search;
        }
      }
    }

    return -1;
  };

  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    let [numerator, denominator] = equations[i];

    if (!graph.has(numerator)) graph.set(numerator, new Map());
    if (!graph.has(denominator)) graph.set(denominator, new Map());

    graph.get(numerator).set(denominator, values[i]);
    graph.get(denominator).set(numerator, 1 / values[i]);
  }

  let seen = new Set();

  const answers = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const start = queries[i][0],
      end = queries[i][1];
    seen.add(start);
    answers[i] = dfs(start, end, 1);
    seen = new Set();
  }

  return answers;
};
