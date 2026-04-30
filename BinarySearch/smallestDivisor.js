const smallestDivisor = (nums, threshold) => {
  const check = (divisor) => {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / divisor);
    }

    return sum <= threshold;
  };

  let left = 1;
  let right = Math.max(...nums);
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

// Time complexity: O(n log m) where n is the length of nums
// and m is the maximum value in nums.
// The log(m) factor comes from the binary search on the divisor values,
// and the O(n) factor comes from the check function
// that iterates through nums for each divisor value.
// Space complexity: O(1).
