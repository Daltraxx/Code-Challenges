import java.util.Arrays;

public class SuccessfulPairs {
  public int[] successfulPairs(int[] spells, int[] potions, long success) {
    Arrays.sort(potions);
    int[] pairs = new int[spells.length];
    for (int i = 0; i < spells.length; i++) {
      double target = (double) success / spells[i];
      int insertionPoint = binarySearch(potions, target);
      pairs[i] = potions.length - insertionPoint;
    }
    return pairs;
  }

  public int binarySearch(int[] arr, double target) {
    int n = arr.length;
    int left = 0;
    int right = n;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (arr[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
  
  public static void main(String[] args) {
    SuccessfulPairs obj = new SuccessfulPairs();
    int[] spells = {5, 1, 3};
    int[] potions = {1, 2, 3, 4, 5};
    long success = 7;
    int[] result = obj.successfulPairs(spells, potions, success);
    System.out.println(Arrays.toString(result));
  }
}
