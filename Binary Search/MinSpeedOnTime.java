public class MinSpeedOnTime {
  double timeLimit;
  public int minSpeedOnTime(int[] dist, double hour) {
    if (dist.length > Math.ceil(hour))
      return -1;

    timeLimit = hour;

    int left = 0;
    int right = (int) Math.pow(10, 7);

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, dist)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  public boolean check(int speed, int[] dist) {
    double timeNeeded = 0;
    for (int i = 0; i < dist.length; i++) {
      if (i == dist.length - 1) {
        timeNeeded += (double) dist[i] / speed;
      } else {
        timeNeeded += Math.ceil((double) dist[i] / speed);
      }
    }

    return timeNeeded <= timeLimit;
  }
}


// Time O(nlogk)
// Space O(1)