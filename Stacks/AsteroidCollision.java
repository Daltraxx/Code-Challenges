package Stacks;

import java.util.ArrayDeque;
import java.util.Deque;

public class AsteroidCollision {
  public int[] asteroidCollision(int[] asteroids) {
    Deque<Integer> stack = new ArrayDeque<>();
    for (int asteroid : asteroids) {
      boolean isDestroyed = false;
      while (!stack.isEmpty() && stack.peekLast() > 0 && asteroid < 0 && !isDestroyed) {
        int leftAsteroid = stack.peekLast();
        int rightAsteroid = -asteroid;
        if (leftAsteroid > rightAsteroid) {
          isDestroyed = true;
        } else if (leftAsteroid == rightAsteroid) {
          isDestroyed = true;
          stack.pollLast();
        } else {
          stack.pollLast();
        }
      }
      if (!isDestroyed) {
        stack.offerLast(asteroid);
      }
    }

    int stackSize = stack.size();
    int[] ans = new int[stackSize];
    int i = 0;
    for (int asteroid : stack) {
      ans[i++] = asteroid;
    }

    return ans;
  }
}

// Time Complexity O(n) - Each asteroid is processed at most twice
// (once when it is added to the stack and once when it is removed).
// Space Complexity O(n) - In the worst case,
// all asteroids could be moving in the same direction and end up in the stack.