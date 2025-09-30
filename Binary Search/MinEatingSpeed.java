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

  public boolean check(double eatingSpeed, int[] piles, int h) {
    int totalHoursToEat = 0;
    for (int pile : piles) {
      double hoursToEatPile = Math.ceil(pile / eatingSpeed);
      totalHoursToEat += hoursToEatPile;
    }

    return totalHoursToEat <= h;
  }

  public static void main(String[] args) {
    MinEatingSpeed solver = new MinEatingSpeed();
    int[] piles = {3, 6, 7, 11};
    int h = 8;
    int result = solver.minEatingSpeed(piles, h);
    System.out.println("Minimum eating speed: " + result);
  }
}