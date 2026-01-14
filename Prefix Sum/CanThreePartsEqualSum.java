import java.util.Arrays;

public class CanThreePartsEqualSum {
  public boolean canThreePartsEqualSum(int[] arr) {
    int totalSum = Arrays.stream(arr).reduce(0, (a, b) -> a + b);
    if (totalSum % 3 != 0)
      return false;
    int target = totalSum / 3;
    int currSum = 0;
    int parts = 0;
    for (int num : arr) {
      currSum += num;
      if (currSum == target) {
        parts++;
        currSum = 0;
        if (parts == 3)
          // If get to three the remaining elements must be zeros
          return true;
      }
    }

    return false;
  }
}

// Linear time and constant space
