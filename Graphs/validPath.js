/*There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, 
return true if there is a valid path from source to destination, or false otherwise. */

const validPath = (n, edges, source, destination) => {
  if (source === destination) return true;

  // Build bi-directional graph
  const graph = new Map();
  for (let [nodeA, nodeB] of edges) {
    graph.has(nodeA) ? graph.get(nodeA).push(nodeB) : graph.set(nodeA, [nodeB]);
    graph.has(nodeB) ? graph.get(nodeB).push(nodeA) : graph.set(nodeB, [nodeA]);
  }

  const seen = new Array(n).fill(false);
  seen[source] = true;
  const stack = [source];

  while (stack.length) {
    const current = stack.pop();
    for (let neighbor of graph.get(current) || []) {
      if (!seen[neighbor]) {
        if (neighbor === destination) return true;
        seen[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }
  return false;
};

// Time Complexity: O(n + e) where n is the number of nodes and e is the number of edges,
// as we may need to visit each node and edge at most once during DFS.
// Space Complexity: O(n + e) for the graph representation and the seen array.

const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source = 0,
  destination = 2;
