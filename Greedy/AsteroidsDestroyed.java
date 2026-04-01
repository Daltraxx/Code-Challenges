import java.util.Arrays;

public class AsteroidsDestroyed {
  public boolean asteroidsDestroyed(int mass, int[] asteroids) {
    Arrays.sort(asteroids);
    for (int asteroid : asteroids) {
      if (asteroid > mass)
        return false;
      mass += asteroid;
    }
    return true;
  }
}

// Time: O(n log n) due to sorting, where n is the number of asteroids
// Space: O(1) if we ignore the space used by sorting, otherwise O(log n) due to
// the space used by the sorting algorithm.
