const calcEquation = (equations: string[], values: number[], queries: string[][]): number[] => {
  const dfs = (num: string, denom: string, res: number, seen: Set<string>): number => {
    if (num === denom) {
      return res;
    }
    seen.add(num);
    for (const [neighbor, weight] of neighbors.get(num)!) {
      if (!seen.has(neighbor)) {
        const ans = dfs(neighbor, denom, res * weight, seen);
        if (ans !== -1) {
          return ans;
        }
      }
    }
    return -1;
  }

  const neighbors: Map<string, [string, number][]> = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [var1, var2] = equations[i];
    const val = values[i];
    if (!neighbors.get(var1)) neighbors.set(var1, []);
    if (!neighbors.get(var2)) neighbors.set(var2, []);
    neighbors.get(var1)!.push([var2, 1 / val]);
    neighbors.get(var2)!.push([var1, val])
  }

  const solutions = []
  for (const [num, denom] of queries) {
    if (!neighbors.has(num) || !neighbors.has(denom)) {
      solutions.push(-1);
    } else {
      solutions.push(dfs(num, denom, 1, new Set([num])));
    }
  }

  return solutions;
}

// Time complexity: O(q * (V + E)) where q is the number of queries, 
// V is the number of variables, and E is the number of equations. 
// This is because for each query, 
// we may have to traverse the entire graph in the worst case.
// Space complexity: O(V + E) for the graph representation 
// and the recursion stack in the worst case.