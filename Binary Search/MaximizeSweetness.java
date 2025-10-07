public class MaximizeSweetness {
  int numOfPeople;

  public int maximizeSweetness(int[] sweetness, int k) {
    numOfPeople = k + 1;
    int left = Integer.MAX_VALUE;
    int right = 0;
    for (int chunk : sweetness) {
      left = Math.min(chunk, left);
      right += chunk;
    }
    right /= numOfPeople;

    while (left < right) {
      int mid = (left + right + 1) / 2;
      if (check(mid, sweetness)) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }

    return right;
  }

  public boolean check(int minSweetness, int[]sweetness) {
    int currentSweetness = 0;
    int slices = 0;
    for (int chunk : sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        currentSweetness = 0;
        if (slices == numOfPeople)
          return true;
      }
    }

    return false;
  }
}
