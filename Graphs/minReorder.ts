const minReorderTS = (n:number, connections: number[][]): number => {
  const neighbors: Map<number, [number, boolean][]> = new Map();
  for (let i = 0; i < n; i++) neighbors.set(i, []);
  for (const [origin, dest] of connections) {
    neighbors.get(origin)!.push([dest, true]);
    neighbors.get(dest)!.push([origin, false]);
  }

  const stack = [0];
  const seen = new Array(n).fill(false);
  seen[0] = true;
  let redirects = 0;
  while (stack.length) {
    const city = stack.pop();
    if (city === undefined) continue;
    for (const [neighbor, isForwardEdge] of neighbors.get(city)!) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        if (isForwardEdge) redirects++;
        stack.push(neighbor);
      }
    }
  }

  return redirects;
}

// Time complexity: O(n) because we visit each city and each connection once,
// and there are n cities and n-1 connections.
// Space complexity: O(n) for the seen array and the stack.