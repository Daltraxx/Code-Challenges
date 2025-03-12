/*There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. 
You are also given an integer array restricted which represents restricted nodes.

Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.

Note that node 0 will not be a restricted node.*/

const reachableNodes = (n, edges, restricted) => {
    const getReachableNodesCount = (node) => {
        let count = 1;

        for (let neighbor of adjacencyList[node]) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                count += getReachableNodesCount(neighbor);
            }
        }

        return count;
    }

    //build adjacency list
    const adjacencyList = new Array(n);
    for (let node = 0; node < n; node++) {
        adjacencyList[node] = [];
    }

    for (let [nodeA, nodeB] of edges) {
        adjacencyList[nodeA].push(nodeB);
        adjacencyList[nodeB].push(nodeA);
    }

    const seen = new Array(n).fill(false);
    for (let node of restricted) {
        seen[node] = true;
    }
    seen[0] = true;

    return getReachableNodesCount(0);
}