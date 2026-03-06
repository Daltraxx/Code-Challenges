/*There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, 
return true if there is a valid path from source to destination, or false otherwise. */

const validPath = (n, edges, source, destination) => {
    const doesPathExist = (currentNode) => {
        if (currentNode === destination) {
            return true;
        }

        for (let neighbor of graph.get(currentNode)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                if (doesPathExist(neighbor, destination)) {
                    return true;
                }
            }
        }

        return false;
    }

    const doesPathExistIterative = (currentNode) => {
        if (currentNode === destination) {
            return true;
        }

        const stack = [currentNode];

        while (stack.length) {
            const node = stack.pop();
            for (let neighbor of graph.get(node)) {
                if (!seen[neighbor]) {
                    seen[neighbor] = true;
                    if (neighbor === destination) {
                        return true;
                    }
                    stack.push(neighbor);
                }
            }
        }

        return false;
    }

    //build bi-directional graph
    const graph = new Map();

    for (let [nodeA, nodeB] of edges) {
        graph.get(nodeA) ? graph.get(nodeA).push(nodeB) : graph.set(nodeA, [nodeB]);
        graph.get(nodeB) ? graph.get(nodeB).push(nodeA) : graph.set(nodeB, [nodeA]);
    }

    seen = new Array(n).fill(false);
    seen[source] = true;

    return doesPathExist(source);
}

const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;