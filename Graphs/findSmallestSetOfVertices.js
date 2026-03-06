/*Given a directed acyclic graph, with n vertices numbered from 0 to n-1, 
and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. 
It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order. */

const findSmallestSetOfVertices = (n, edges) => {
  const nodeIndegrees = new Array(n).fill(0);

  for (let edge of edges) {
    nodeIndegrees[edge[1]]++;
  }

  const smallestSet = [];

  for (let i = 0; i < n; i++) {
    if (nodeIndegrees[i] === 0) {
      smallestSet.push(i);
    }
  }

  return smallestSet;
};

// Time Complexity: O(n + e) where n is the number of nodes and e is the number of edges. 
// We need to iterate through all edges to calculate indegrees, and
// then through all nodes to find those with indegree 0.
// Space Complexity: O(n) for the indegree array and the list of necessary vertices.
