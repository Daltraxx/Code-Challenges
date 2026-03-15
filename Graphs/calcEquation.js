// ITERATIVE DFS SOLUTION
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

// Time complexity: O(Q * (V + E)) where Q is the number of queries, V is the
// number of variables and E is the number of equations
// Space complexity: O(V + E) for the graph and O(V) for the seen set and stack
// in the worst case.

// RECURSIVE DFS SOLUTION
const calcEquationRecursiveDFS = (equations, values, queries) => {
  const dfs = (start, end, seen) => {
    if (start === end) {
      return 1;
    }

    for (let [neighbor, weight] of graph.get(start)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        const result = dfs(neighbor, end, seen);
        if (result !== -1) {
          return result * weight;
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
    if (!graph.has(start) || !graph.has(end)) {
      answers.push(-1);
    } else {
      answers.push(dfs(start, end, new Set([start])));
    }
  }

  return answers;
};

// Time complexity: O(Q * (V + E)) where Q is the number of queries, V is the
// number of variables and E is the number of equations
// Space complexity: O(V + E) for the graph and O(V) for the seen set and recursion
// stack in the worst case.
