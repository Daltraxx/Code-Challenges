/*You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] 
indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph. */

const countComponents = (n, edges) => {
    const dfs = (start) => {
        seen[start] = true;
        const stack = [start];
        while (stack.length) {
            const current = stack.pop();
            for (let neighbor of graph[current]) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
    }

    const graph = Array.from({ length: n }, () => []);
    for (let [nodeA, nodeB] of edges) {
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }

    const seen = new Array(n).fill(false);
    let componentCount = 0;

    for (let node = 0; node < n; node++) {
        if (!seen[node]) {
            componentCount++;
            dfs(node);
        }
    }

    return componentCount;
}

// Time Complexity: O(n + e) where n is the number of nodes and e is the number of edges,
// as we may need to visit each node and edge at most once during DFS.
// Space Complexity: O(n + e) for the graph representation and the seen list.