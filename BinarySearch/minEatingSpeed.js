const minEatingSpeed = (piles, h) => {
  const check = k => {
    let totalHours = 0;
    for (const bananas of piles) {
      totalHours += Math.ceil(bananas / k);
      if (totalHours > h) {
        return false;
      }
    }
    return true;
  }

  let left = 1
  let right = Math.max(...piles);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Time complexity: O(n log m) where n is the number of piles and m is the
// maximum pile size.
// Space complexity: O(1)