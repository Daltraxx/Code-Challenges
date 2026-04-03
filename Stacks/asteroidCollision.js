const asteroidCollision = (asteroids) => {
  stack = [];
  for (const asteroid of asteroids) {
    let isDestroyed = false;
    while (stack.length && stack.at(-1) > 0 && asteroid < 0 && !isDestroyed) {
      const leftAsteroid = stack.at(-1);
      const rightAsteroid = -asteroid;
      if (leftAsteroid > rightAsteroid) {
        isDestroyed = true;
      } else if (leftAsteroid === rightAsteroid) {
        stack.pop();
        isDestroyed = true;
      } else {
        stack.pop();
      }
    }
    if (!isDestroyed) stack.push(asteroid);
  }

  return stack;
};

// Time Complexity O(n) - Each asteroid is processed at most twice 
// (once when it is added to the stack and once when it is removed).
// Space Complexity O(n) - In the worst case, 
// all asteroids could be moving in the same direction and end up in the stack.
