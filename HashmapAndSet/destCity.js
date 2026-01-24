const destCity = (paths) => {
  const origins = new Set();
  for (let [origin] of paths) {
    origins.add(origin);
  }

  for (let [_, destination] of paths) {
    if (!origins.has(destination)) return destination;
  }

  return null; // In case there is no destination city
};

// Time Complexity: O(n) where n is the number of paths
// Space Complexity: O(n) for the set