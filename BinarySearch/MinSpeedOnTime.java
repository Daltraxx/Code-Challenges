public class MinSpeedOnTime {
  int n;
  double hour;
  int[] dist;

  public int minSpeedOnTime(int[] dist, double hour) {
    n = dist.length;
    if (n > Math.ceil(hour)) {
      return -1;
    }
    this.hour = hour;
    this.dist = dist;

    int left = 1;
    int right = 10_000_000;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  public boolean check(int speed) {
    double timeNeeded = 0;
    for (int i = 0; i < n; i++) {
      int d = dist[i];
      if (i == n - 1) {
        // Exact division for the last train
        timeNeeded += (double) d / speed;
      } else {
        // Ceiling division for intermediate trains
        timeNeeded += (d + speed - 1) / speed;
      }
      if (timeNeeded > hour) {
        return false;
      }
    }

    return true;
  }
}

// Time complexity: O(n * log(m)) where n is the number of distances and m is
// the maximum speed (10^7 in this case). The log(m) factor comes from the
// binary search on the speed values, and the O(n) factor comes from the time
// calculation for each speed value.
// Space complexity: O(1)