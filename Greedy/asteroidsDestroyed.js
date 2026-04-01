const asteroidsDestroyed = (mass, asteroids) => {
  const asteroidsSorted = asteroids.toSorted((a, b) => a - b);
  for (const asteroid of asteroidsSorted) {
    if (asteroid > mass) return false;
    mass += asteroid;
  }

  return true;
};

// Time Complexity: O(n log n) due to sorting the asteroids array, 
// where n is the length of the asteroids array.
// Space Complexity: O(n) due to the space used by the sorted asteroids array, 
// could be O(1) if we sort the original array in place.
