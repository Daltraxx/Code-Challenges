public class MaximizeSweetness {
  public int maximizeSweetness(int[] sweetness, int k) {
    int targetPieces = k + 1;

    int left = 1;
    int right = 0;
    for (int chunk : sweetness) {
      right += chunk;
    }
    right /= targetPieces;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, sweetness, targetPieces)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return right;
  }

  private boolean check(int minSweetness, int[] sweetness, int targetPieces) {
    int currentSweetness = 0;
    int slices = 0;
    for (int chunk : sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        currentSweetness = 0;
        if (slices == targetPieces)
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
