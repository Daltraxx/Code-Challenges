const destCity = (paths) => {
  const hasOutgoing = new Set();
  for (let [origin, destination] of paths) {
    hasOutgoing.add(origin);
  }

  for (let [origin, destination] of paths) {
    if (!hasOutgoing.has(destination)) return destination;
  }
};

// Time Complexity: O(n) where n is the number of paths
// Space Complexity: O(n) for the set