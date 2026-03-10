/*You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. 
Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.

Return an array answer of length n, 
where each answer[x] is the length of the shortest path from node 0 to node x 
such that the edge colors alternate along the path, 
or -1 if such a path does not exist. */

class PathState {
    constructor(node, colorRequired) {
        this.node = node;
        this.colorRequired = colorRequired;
    }
}

const shortestAlternatingPaths = (n, redEdges, blueEdges) => {
    const addToGraph = (edges, color) => {
        const colorGraph = graph.get(color);
        for (let node = 0; node < n; node++) {
            colorGraph.set(node, []);
        }

        for (let [nodeA, nodeB] of edges) {
            colorGraph.get(nodeA).push(nodeB);
        }
    }

    const RED = 0;
    const BLUE = 1;

    const graph = new Map();
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());

    addToGraph(redEdges, RED);
    addToGraph(blueEdges, BLUE);

    const seen = new Array(n).fill().map(() => new Array(2).fill(false));
    seen[0][RED] = seen[0][BLUE] = true;
    
    const shortestPaths = new Array(n).fill(-1);

    let queue = [new PathState(0, RED), new PathState(0, BLUE)];
    let distance = 0;

    while (queue.length) {
        const nextQueue = [];

        for (let {node, colorRequired} of queue) {
            if (shortestPaths[node] === -1) {
                shortestPaths[node] = distance;
            }

            const neighbors = graph.get(colorRequired).get(node);
            for (let neighbor of neighbors) {
                const nextColorRequired = 1 - colorRequired;

                if (!seen[neighbor][nextColorRequired]) {
                    seen[neighbor][nextColorRequired] = true;
                    nextQueue.push(new PathState(neighbor, nextColorRequired));
                }
            }
        }

        queue = nextQueue;
        distance++;
    }

    return shortestPaths;
}

const n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
console.log(shortestAlternatingPaths(n, redEdges, blueEdges));