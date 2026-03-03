/*There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network forms a tree). 
Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.*/

const convertToHash = (start, end) => {
    return `${start}, ${end}`;
}

const minReorder = (n, connections) => {
    const graph = new Map();
    const routes = new Set();

    //build graph and set of original routes
    for (let [start, end] of connections) {
        routes.add(convertToHash(start, end));

        if (!graph.has(start)) graph.set(start, []);
        if (!graph.has(end)) graph.set(end, []);

        graph.get(start).push(end);
        graph.get(end).push(start);
    }

    const seen = new Array(n).fill(false);

    const dfs = (startingPoint) => {
        let routeFlips = 0;
        for (let destination of graph.get(startingPoint)) {
            if (!seen[destination]) {
                seen[destination] = true;

                if (routes.has(convertToHash(startingPoint, destination))) {
                    routeFlips++;
                }

                routeFlips += dfs(destination);
            }
        }

        return routeFlips;
    }

    seen[0] = true;
    return dfs(0);
}

const n = 5, connections = [[1,0],[1,2],[3,2],[3,4]];
console.log(minReorder(n, connections));