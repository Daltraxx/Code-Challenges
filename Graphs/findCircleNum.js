/*There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Example input: isConnected = [
    [1,1,0],
    [1,1,0],
    [0,0,1]]

Return the total number of provinces. */

const findCircleNum = (isConnected) => {
  const graph = new Map();
  const n = isConnected.length;
  const seen = new Array(n).fill(false);

  // Define depth first search function to take node and
  // find all the neighbors of that node (making up a single component/province)
  const dfs = (node) => {
    seen[node] = true;
    for (let neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        dfs(neighbor);
      }
    }
  };

  // Build graph
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  // Find and count provinces by visiting node and
  // adding each neighbor of that node (nodes of the same component/province) to seen
  let provincesCount = 0;
  for (let node = 0; node < n; node++) {
    // If node is unvisited, it is part of unaccounted province
    if (!seen[node]) {
      provincesCount++;
      dfs(node);
    }
  }

  return provincesCount;
};

// Time complexity: O(n^2) to build graph + O(n + e) to visit all nodes and edges in graph,
// where n is number of cities and e is number of connections between cities. Overall O(n^2).
// Space complexity: O(n^2) to build graph + O(n) for seen array. Overall O(n^2).

const findCircleNumNoPreProcessing = (isConnected) => {
  const n = isConnected.length;
  const seen = new Array(n).fill(false);

  const dfs = (node) => {
    seen[node] = true;
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[node][neighbor] === 1 && !seen[neighbor]) {
        dfs(neighbor);
      }
    }
  };

  let provincesCount = 0;

  for (let node = 0; node < n; node++) {
    if (!seen[node]) {
      provincesCount++;
      dfs(node);
    }
  }

  return provincesCount;
};

// Time complexity: O(n^2) to visit all nodes and edges in graph, where n is number of cities. Overall O(n^2).
// Space complexity: O(n) for seen array + O(n) for call stack in worst case. Overall O(n).
