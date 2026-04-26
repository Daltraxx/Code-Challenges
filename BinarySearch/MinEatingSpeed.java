class MinEatingSpeed {
  public int minEatingSpeed(int[] piles, int h) {
    int left = 1;
    int right = 0;
    for (int pile : piles)
      right = Math.max(right, pile);
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, piles, h)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  private boolean check(double eatingSpeed, int[] piles, int h) {
    long totalHoursToEat = 0;
    for (int pile : piles) {
      totalHoursToEat += (pile + eatingSpeed - 1) / eatingSpeed;
      if (totalHoursToEat > h) {
        return false;
      }
    }

    return totalHoursToEat <= h;
  }
}

// Time complexity: O(n log m) where n is the number of piles and m is the
// maximum pile size.
// Space complexity: O(1)