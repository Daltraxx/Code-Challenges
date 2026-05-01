public class MaximizeSweetness {
  int k;
  int[] sweetness;

  public int maximizeSweetness(int[] sweetness, int k) {
    this.k = k;
    this.sweetness = sweetness;

    int left = 1;
    int right = 0;
    for (int chunk : sweetness) {
      right += chunk;
    }
    right /= k + 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return right;
  }

  private boolean check(int minSweetness) {
    int currentSweetness = 0;
    int slices = 0;
    for (int chunk : sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        currentSweetness = 0;
        if (slices == k + 1)
          return true;
      }
    }

    return false;
  }
}

// Time complexity: O(n log k) where n is the length of the sweetness array and
// k is the number of cuts
// and k is the sum of the sweetness values divided by the number of pieces.
// Space complexity: O(1).
