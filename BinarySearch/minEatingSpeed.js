const minEatingSpeed = (piles, h) => {
  const check = k => {
    let hours = 0;
    for (let bananas of piles) {
      hours += Math.ceil(bananas / k);
    }

    return hours <= h;
  }

  let left = 1, right = Math.max(...piles);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Time complexity O(nlogk)
// Space O(1)