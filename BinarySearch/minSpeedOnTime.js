const minSpeedOnTime = (dist, hour) => {
  const check = (speed) => {
    let hoursNeeded = 0;
    for (let i = 0; i < n; i++) {
      const d = dist[i];
      // For all but the last train, we need to round up the time to the nearest integer
      hoursNeeded += i === n - 1 ? d / speed : Math.ceil(d / speed);
      if (hoursNeeded > hour) {
        return false;
      }
    }

    return true;
  };

  const n = dist.length;
  if (n > Math.ceil(hour)) return -1;
  let left = 1;
  let right = 10 ** 7;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Time complexity: O(n log m) where n is the length of dist 
// and m is the search space for speed (10^7).
// Space complexity: O(1).
