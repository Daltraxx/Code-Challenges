/*You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] 
indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph. */

const countComponents = (n, edges) => {
    const completeComponent = (nodeEdges) => {
        for (let node of nodeEdges) {
            if (!seen[node]) {
                seen[node] = true;
                completeComponent(adjacencyList[node]);
            }
        }
    }

    const completeComponentIterative = (nodeEdges) => {
        const stack = [nodeEdges];

        while (stack.length) {
            let neighbors = stack.pop();
            for (let neighbor of neighbors) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    stack.push(adjacencyList[neighbor]);
                }
            }
        }
    }

    const adjacencyList = [n];
    for (let i = 0; i < n; i++) {
        adjacencyList[i] = [];
    }

    for (let [nodeA, nodeB] of edges) {
        adjacencyList[nodeA].push(nodeB);
        adjacencyList[nodeB].push(nodeA);
    }

    const seen = new Array(n).fill(false);
    let componentCount = 0;

    for (let node = 0; node < n; node++) {
        if (!seen[node]) {
            seen[node] = true;
            componentCount++;
            completeComponent(adjacencyList[node]);
        }
    }

    return componentCount;
}