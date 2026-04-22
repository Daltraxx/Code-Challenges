import java.util.Arrays;

public class MaxNumberOfApples {
  public int maxNumberOfApples(int[] weight) {
    int limit = 5000;
    int maxApples = 0;
    Arrays.sort(weight);
    for (int w : weight) {
      if (w <= limit) {
        limit -= w;
        maxApples++;
      } else {
        break;
      }
    }
    return maxApples;
  }
}

// Time complexity: O(n log n) where n is the number of elements in the input
// array weight. This is because we need to sort the array of weights, which
// takes O(n log n) time. After sorting, we iterate through the sorted array
// once, which takes O(n) time. Therefore, the overall time complexity is O(n
// log n).
// Space complexity: O(1) since we sort the array in place.